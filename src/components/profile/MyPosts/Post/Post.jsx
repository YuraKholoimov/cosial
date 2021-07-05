import s from './Post.module.css'

const Post = (props) => {
  return (

    <div className={s.item}>
      <img src="https://yt3.ggpht.com/a/AATXAJzigGlgRi1eR2Mzw4YQTBEDPR7CFOI3KWOocOZx1g=s900-c-k-c0xffffffff-no-rj-mo" alt="" />
      
      { props.message }
      
      <div className={s.like}>
        <span>
          <img src="data:image/jpeg;base64,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" alt="" />
           {props.like}
        </span>
      </div>
    </div>
  )
}
export default Post