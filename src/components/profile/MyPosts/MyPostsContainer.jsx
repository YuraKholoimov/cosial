import { addPostActionCreator, changeInputTextAreaActionCreater } from '../../../Redux/profilePage-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {

//   const state = props.store.getState()
 
//   let addPost = () => {
//     props.store.dispatch( addPostActionCreator() )}

//   let changeText = (text) => {
//     let action = changeInputTextAreaActionCreater(text)
//     props.store.dispatch( action )
//   }

//   return (
//     <MyPosts 
//       updateNewPostText = {changeText} 
//       addPost = {addPost} 
//       profilePage = {state.profilePage}
//     />
//   )
// }

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}
const mapDispatchesToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch( changeInputTextAreaActionCreater(text) )
    }, 
    addPost: () => {
      dispatch( addPostActionCreator() )
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchesToProps )(MyPosts)

export default MyPostsContainer