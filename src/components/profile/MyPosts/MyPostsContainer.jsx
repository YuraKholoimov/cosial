import React from 'react';
import { addPostActionCreator, changeInputTextAreaActionCreater } from '../../../Redux/profilePage-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

  const state = props.store.getState()
 
  let addPost = () => {
    props.store.dispatch( addPostActionCreator() )}

  let changeText = (text) => {
    let action = changeInputTextAreaActionCreater(text)
    props.store.dispatch( action )
  }

  return (
    <MyPosts 
      updateNewPostText = {changeText} 
      addPost = {addPost} 
      profilePage = {state.profilePage}
    />
  )
}

export default MyPostsContainer