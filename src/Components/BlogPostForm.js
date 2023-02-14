import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';


const BlogPostForm = ({onSubmit, initialValues, Title}) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <>
      <Text
        style={styles.label}
        >Enter Title:</Text>
      <TextInput 
        style={styles.input}
        value={title} 
        onChangeText={(text) => setTitle(text)}/>
      <Text
        style={styles.label}
      >Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}/>
        <Button 
          title={Title}
          // NOTE this line below is sending 3 arguments up to BlogContext, with the third being a callback
          onPress={() => onSubmit(title, content)}
          />
    </>
  )
};
// NOTE if a comp or screen does not pass in certain props then a function such as this will set a default for those values
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  input:{
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label:{
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});


export default BlogPostForm;