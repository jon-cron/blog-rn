import React, {useContext} from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from "../Context/BlogContext.js";
import {Feather} from '@expo/vector-icons' 


const IndexScreen = () => {
const {state, addBlogPost, removeBlogPost} = useContext(Context);

return (
  <>
  <Text>IndexScreen</Text>
  <Button 
      title="Add Post"
      onPress={addBlogPost}/>
    <FlatList
    data={state}
    keyExtractor={(blogPost) => blogPost.title}
    renderItem={({item})=> {
      return <View style={styles.view}>
        <Text style={styles.text}>{item.title} - {item.id}</Text>
        <TouchableOpacity
        onPress={() => removeBlogPost(item.id)}
        >
        <Feather style={styles.text} name="trash"/>
        </TouchableOpacity>
        </View>
    }}
    />
  </>
)
};

const styles = StyleSheet.create({
view:{
  flexDirection: "row",
  justifyContent: "space-between",
  // NOTE using margin shrank the borderBottom. Using padding on moved the text in and let the border touch the sides of the device
  paddingHorizontal: 25,
  paddingVertical: 20,
  borderBottomWidth: 1,
  borderColor: 'grey'
},
text:{
  fontSize: 18,
  fontWeight:"bold"
},
});


export default IndexScreen;