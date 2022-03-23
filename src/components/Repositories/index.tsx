import React, { useState, MouseEventHandler } from 'react';
import { useQuery } from '@apollo/client';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { getRepositoriesQuery } from '../../graphQL/queries';
import Text from '../Base/Text';
import Button from '../Base/Button';
import Header from '../Common/Header';
import RepositoriesList from './RepositoriesList';
import { Container, NoResultsText } from './index.ui';

const itemsToLoad = 20;
const initialData = { search: { nodes: [], pageInfo: {} }};

/** Repositories list page */
function Repositories(): React.ReactElement {
  const { loading, data = initialData, fetchMore } = useQuery(
    getRepositoriesQuery, {
      variables: { first: itemsToLoad },
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'network-only',
      notifyOnNetworkStatusChange: true
    },
  );

  const { nodes: repositories, pageInfo } = data.search;
  const [hasError, setHasError] = useState(false);

  const handleLoadMore = async() => {
    setHasError(false);
    try {
      await fetchMore({ 
        variables: { first: itemsToLoad, after: pageInfo.endCursor },
      });
    } catch {
      setHasError(true);
    }
  };

  const hasMoreResults = pageInfo.hasNextPage;
  const buttonLabel = hasMoreResults ? 'Load more' : 'No more results';

  if (!loading && !repositories.length) {
    return (
      <>
        <Header title="React Repositories" icon={faCodeFork} />
        <NoResultsText $textAlign="center">
          No results found.
        </NoResultsText>
      </>
    );
  }

  return (
    <>
      <Header title="React Repositories" icon={faCodeFork} />
      <Container>
        <RepositoriesList {...{ repositories }} />
        <Button
          data-testid="load-more-button"
          disabled={!hasMoreResults}
          onClick={handleLoadMore}
        >
          {loading ? 'Loading...' : buttonLabel}
        </Button>
      </Container>
      {hasError && 
        <Text
          $color="error"
          $textAlign="center"
        >
          An error happened. Please try again!
        </Text>
      }
    </>
  );
}

export default Repositories;