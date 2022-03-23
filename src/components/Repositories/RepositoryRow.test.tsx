import React from 'react';
import { render, } from '@testing-library/react';
import { testRepoResults } from '../../../test-data/repositories';
import RepositoryRow from './RepositoryRow';

const props = {
  name: testRepoResults[0].name || '',
  starsNum: testRepoResults[0].starsNum,
  forksNum: testRepoResults[0].forksNum,
  url: testRepoResults[0].url
};

describe('<RepositoryRow>', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should render row info correctly', async() => {
    const utils = render(<RepositoryRow {...props} />);  

    const name = utils.getByText(props.name);
    const stars = utils.getByText(props.starsNum);
    const forks = utils.getByText(props.forksNum);
    
    expect(name).toBeTruthy();
    expect(stars).toBeTruthy();
    expect(forks).toBeTruthy();
  });
});