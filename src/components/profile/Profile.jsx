
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/Profile'

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store = {props.store} />
    </div>
  )
}
export default Profile