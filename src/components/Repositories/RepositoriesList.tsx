import React from 'react';
import { Repository } from '../../models/repository'
import RepositoryRow from './RepositoryRow';

type Props = {
  repositories: Repository[];
};

/** List of Repositories */
function RepositoriesList({
  repositories
}: Props): React.ReactElement {
  return (
    <>
      <RepositoryRow
        key="repos-header"
        name="Repository"
        starsNum="Stars"
        forksNum="Forks"
        isHeader
      />
      {repositories.map((repo: Repository) => (
        <RepositoryRow
          data-testid="repo-row"
          key={repo.id}
          name={repo.name}
          url={repo.url}
          starsNum={repo.starsNum}
          forksNum={repo.forksNum}
        />
      ))}
    </>
  );
}

export default React.memo(RepositoriesList);