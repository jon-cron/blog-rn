import React, {useContext} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from "../Context/BlogContext.js";
import {EvilIcons} from "@expo/vector-icons"



const ShowScreen = ({navigation}) => {

  const id = navigation.getParam('id')
  const {state} = useContext(Context);
  const blogPost = state.find(b => b.id == id)
return (
  <>
    <Text>{blogPost.title}</Text>
    <Text>{blogPost.content}</Text>
  </>
)
};
ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
        <EvilIcons name="pencil" size={35}/>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({

});


export default ShowScreen;