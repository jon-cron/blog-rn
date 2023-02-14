import React, {useContext} from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from "../Context/BlogContext.js";


const IndexScreen = () => {
const {data, addBlogPost} = useContext(BlogContext);

return (
  <>
  <Text>IndexScreen</Text>
  <Button 
      title="Add Post"
      onPress={addBlogPost}/>
    <FlatList
    data={data}
    keyExtractor={(blogPost) => blogPost.title}
    renderItem={({item})=> {
      return <Text>{item.title}</Text>
    }}
    />
  </>
)
};

const styles = StyleSheet.create({

});


export default IndexScreen;