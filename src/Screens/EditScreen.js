import React, {useState, useContext} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import BlogPostForm from "../Components/BlogPostForm.js";
import { Context } from "../Context/BlogContext.js";



const EditScreen = ({navigation}) => {
  const id = navigation.getParam('id')
  const {state, editBlogPost} = useContext(Context);
  const blogPost = state.find(b => b.id == id)

  const [title, setTitle] = useState(blogPost.title)
  const [content, setContent] = useState(blogPost.content)

return <BlogPostForm 
Title="Save Changes"
initialValues = {{title:blogPost.title, content:blogPost.content}}
onSubmit={(title, content)=>{
  editBlogPost(id, title, content, () => navigation.pop());
}}/>
};

const styles = StyleSheet.create({

});


export default EditScreen;