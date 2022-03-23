import React from 'react';
import { render, fireEvent, } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { getRepositoriesQuery } from '../../graphQL/queries';
import { testRepoResults } from '../../../test-data/repositories';
import Repositories from '.';

const mocks = [
  {
    request: {
      query: getRepositoriesQuery,
      variables: { first: 20 },
      notifyOnNetworkStatusChange: true
    },
    result: {
      data: {
        search: {
          nodes: testRepoResults,
          edges: [],
          pageInfo: {
            hasNextPage: true,
            endCursor: 'test'
          }
        },
      },
    },
  },
];

// @ts-ignore
const wrapper = ({ children }) => {
  return(
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>
  );
};

// @ts-ignore
const wrapperEmpty = ({ children }) => {
  const mocksEmpty = JSON.parse(JSON.stringify(mocks));
  mocksEmpty[0].result.data.search.nodes = [];
  return(
    <MockedProvider mocks={mocksEmpty} addTypename={false}>
      {children}
    </MockedProvider>
  );
};

// @ts-ignore
const wrapperLast= ({ children }) => {
  const mocksLast = JSON.parse(JSON.stringify(mocks));
  mocksLast[0].result.data.search.pageInfo.hasNextPage = false;
  return(
    <MockedProvider mocks={mocksLast} addTypename={false}>
      {children}
    </MockedProvider>
  );
};

describe('<Repositories>', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should show loading message while feching data', async() => {
    // @ts-ignore
    const utils = render(<Repositories />, { wrapper });

    const loadingMsg = await utils.findByText('Loading...');

    expect(loadingMsg).toBeTruthy();
  });

  it('should render the results on init', async () => {
    // @ts-ignore
    const utils = render(<Repositories />, { wrapper });

    const firstResults = await utils.findAllByTestId('repo-row');
    
    expect(firstResults).toHaveLength(testRepoResults.length);
  });

  it('Should show load more message on the button', async() => {
    // @ts-ignore
    const utils = render(<Repositories />, { wrapper });

    const loadMoreMsg = await utils.findByText('Load more');

    expect(loadMoreMsg).toBeTruthy();
  });

  it('Should render no results message', async() => {
    // @ts-ignore
    const utils = render(<Repositories />, { wrapper: wrapperEmpty });

    const noResultsMsg = await utils.findByText('No results found.');

    expect(noResultsMsg).toBeTruthy();
  });

  it('Should show loading message on button click', async() => {
    // @ts-ignore
    const utils = render(<Repositories />, { wrapper });
    // Just to ensure that it has finished the first fetching
    await utils.findAllByTestId('repo-row');

    const loadMoreButton = utils.getByTestId('load-more-button');
    // Clicking the button to retrieve fetch more data
    fireEvent.click(loadMoreButton);

    const loadingMsg = await utils.findByText('Loading...');

    expect(loadingMsg).toBeTruthy();
  });

  it('Should show "No more results" message if on the last page', async() => {
    // @ts-ignore
    const utils = render(<Repositories />, { wrapper: wrapperLast });

    const noMoreMsg = await utils.findByText('No more results');

    // @ts-ignore
    expect(noMoreMsg).toBeTruthy();
  });
});