import createDataContext from "./createDataContext.js";


const blogReducer = (state, action) => {
switch (action.type){
  case 'edit_blogpost':
    return state.map((b)=>{
      return b.id === action.payload.id ? action.payload : b;
    })
  case "remove_blogpost":
    return state.filter((b) => b.id !== action.payload)
  case "add_blogpost":
    return [
      ...state, 
      {id: Math.floor(Math.random() * 99999),
      title: action.payload.title,
      content: action.payload.content}]
  default: 
    return state;
}
}
  const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
      dispatch({type: "add_blogpost", payload: {title, content}})
      callback();
    }
  }
  const removeBlogPost = (dispatch) => {
    return (id) => {
      dispatch({type: "remove_blogpost", payload: id})
    }
  }
  const editBlogPost = dispatch => {
    return (title, content, id) => {
      dispatch({
        type:'edit_blogpost', 
        payload: {id, title, content}})
    }
  }

export const {Context, Provider } = createDataContext(
  blogReducer, 
  {addBlogPost, removeBlogPost, editBlogPost},
  [{title: 'Test Post', content: 'Test Content', id: 1}])
