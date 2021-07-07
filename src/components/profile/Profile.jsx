import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/Profile'

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts 
        profilePage={props.profilePage} 
        dispatch={props.dispatch}
        />
    </div>
  )
}
export default Profile