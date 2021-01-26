import gql from "graphql-tag";

export const QUERY_COMMENTS = gql`
  query comments($username: String) {
    comments(username: $username) {
      _id
      commentText
      createdAt
      username
    }
  }
`;

export const QUERY_CASES = gql`
  {
    cases {
      _id
      name
      description
      category {
        name
      }
    }
  }
`;
