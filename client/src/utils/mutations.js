export const ADD_COMMENT = gql`
  mutation addComment($commentText: String!) {
    addComment(commentText: $commentText) {
      _id
      commentText
      createdAt
      username
    }
  }
`;