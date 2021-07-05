import React from "react"
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.contentLogo}>
        <img src="https://i.ytimg.com/vi/Gv5rm5JlhgM/maxresdefault.jpg" alt="" />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}
export default ProfileInfo