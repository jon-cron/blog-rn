import React, {useContext, useState} from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { add } from "react-native-reanimated";
import BlogPostForm from "../Components/BlogPostForm.js";
import {Context} from '../Context/BlogContext.js'


const CreateScreen = ({navigation}) => {

const {addBlogPost} = useContext(Context)

return <BlogPostForm 
Title="Submit"
onSubmit={(title, content) => {
  addBlogPost(title, content, () => navigation.navigate('Index'))
}}/>
};

const styles = StyleSheet.create({

});


export default CreateScreen;