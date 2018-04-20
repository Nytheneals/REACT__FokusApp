// INCREMENT
export function increment(index) {
  return {
    type: "INCREMENT",
    index: index
  };
}

// ADD COMMENT
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
}

// REMOVE COMMENT
export function increment(postId, i) {
  return {
    type: "INCREMENT",
    index,
    postId
  };
}
