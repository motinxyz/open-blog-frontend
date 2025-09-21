const postsReducer = (posts, action) => {
  console.log(posts, action.type);
  switch (action.type) {
    case "ADD_NEW_POST":
      // Return a new array for immutability, which is crucial for React.
      console.log("inside reducer");
      return [action.payload, ...posts];
    case "DELETE_ONE_POST":
      return posts.filter((post) => post._id !== action.payload._id);
    default:
      return posts;
  }
};

export default postsReducer;
