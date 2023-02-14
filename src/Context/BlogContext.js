import createDataContext from "./createDataContext.js";


const blogReducer = (state, action) => {
switch (action.type){
  case "remove_blogpost":
    return state.filter((b) => b.id !== action.payload)
  case "add_blogpost":
    return [...state, {id: Math.floor(Math.random() * 99999), title: `Blog Post #${state.length +1}`}]
  default: 
    return state;
}
}
  const addBlogPost = (dispatch) => {
    console.log('making it to blog context')
    return () => {
      dispatch({type: "add_blogpost"})
    }
  }
  const removeBlogPost = (dispatch) => {
    return (id) => {
      dispatch({type: "remove_blogpost", payload: id})
    }
  }


export const {Context, Provider } = createDataContext(
  blogReducer, 
  {addBlogPost, removeBlogPost},
  [])
