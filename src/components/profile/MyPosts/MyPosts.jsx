import s from './MyPosts.module.css' 
import Post from './Post/Post'
import React from 'react';


const MyPosts = (props) => {

  const postsElements = props.profilePage.postData
    .map(p => <Post message={p.message} like={p.like} />);

  const onChangeText = (e) => {
    let text = e.target.value
    props.updateNewPostText(text)
  }
 
  const onAddPost = () => {props.addPost()}

  return (
    <div className={s.postBlock}>
      <div className={s.post}>
        <div>
          <textarea 
            onChange={onChangeText}  
            value={props.profilePage.inputText}>
          </textarea>
        </div>
        <div>
          <button 
            onClick={onAddPost}>ADD POST
          </button>
          <button>EREASE</button>
        </div>
      </div>
      <div className={s.post}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts