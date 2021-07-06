import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/Profile'

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts 
        postData={props.profilePage.postData} 
        inputText={props.profilePage.inputText} 
        dispatch={props.dispatch}
        />
    </div>
  )
}
export default Profile