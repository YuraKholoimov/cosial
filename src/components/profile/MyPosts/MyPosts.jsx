import s from './MyPosts.module.css' 
import Post from './Post/Post'
import React from 'react';

const MyPosts = (props) => {


  const postsElements = props.postData.map(p => <Post message={p.message} like={p.like} />);

  let newPostElement = React.createRef()

  let addPost = () => { props.addPost() }

  let changeText = () => {
    let text = newPostElement.current.value
    props.changeInputTextArea(text)
  }

  return (
    <div className={s.postBlock}>
      <div className={s.post}>
        <div>
          <textarea onChange={()=> changeText()} ref={newPostElement} value={props.inputText}></textarea>
        </div>
        <div>
          <button onClick={()=> {addPost()}}>ADD POST</button>
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