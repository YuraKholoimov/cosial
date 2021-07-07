import s from './MyPosts.module.css' 
import Post from './Post/Post'
import React from 'react';
import { addPostActionCreator, changeInputTextAreaActionCreater } from '../../../Redux/state';


const MyPosts = (props) => {
  
  const postsElements = props.profilePage.postData.map(p => <Post message={p.message} like={p.like} />);

  let addPost = () => { props.dispatch( addPostActionCreator() )}

  let changeText = (e) => {
    let text = e.target.value
    props.dispatch( changeInputTextAreaActionCreater(text) )
  }

  return (
    <div className={s.postBlock}>
      <div className={s.post}>
        <div>
          <textarea 
            onChange={changeText}  
            value={props.profilePage.inputText}>
          </textarea>
        </div>
        <div>
          <button 
            onClick={addPost}>ADD POST
          </button>
          <button>ERASE</button>
        </div>
      </div>
      <div className={s.post}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts