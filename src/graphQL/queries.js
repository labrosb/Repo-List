import { gql } from '@apollo/client';

export const getRepositoriesQuery = gql`
  query($first:Int!, $after:String) {
    search(
      query: "react language:JavaScript sort:stars",
      type: REPOSITORY,
      first: $first,
      after: $after
    ) {
      nodes {
        ... on Repository {
          id
          name
          starsNum: stargazerCount
          forksNum: forkCount
          url
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
      }
    }
  }
`;