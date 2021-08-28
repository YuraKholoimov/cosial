import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Users.module.css'

let Users = (props) => {
    if(props.users.length === 0) {

    props.setUsers(
        [{id:1, userPhotoUtr: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg", 
        followed:true, UserName: "Dany", status: "i'm a boss", location: {city: "Moscow", country: "Russia"}},
    {id:2, userPhotoUtr: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg", 
        followed:false, UserName: "Yuriy", status: "i'm a boss too", location: {city: "Moscow", country: "Russia"}},
    {id:3, userPhotoUtr: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg", 
        followed:false, UserName: "Anna", status: "Me too", location: {city: "Moscow", country: "Russia"}},
    {id:4, userPhotoUtr: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg", 
        followed:false, UserName: "Yuriy", status: "And me too", location: {city: "Moscow", country: "Russia"}}
    ])
    }

    
    return <div>
            <NavLink to="/profile" >
                <div className={s.buttonGoBack}>
                    <img src="https://images.roadtrafficsigns.com/img/lg/K/go-back-security-sign-k-0138-l_left.png" alt="" />
                </div>
            </NavLink>

            <div>
                {props.users.map( u => 
                        <div key={u.id} className={s.frameOfUser}>
                            <div>
                                <div className={s.userAvatar}> 
                                    <img src = {u.userPhotoUtr} alt=""/>
                                </div>
                                <div>
                                    {u.followed ? <button onClick={()=> {props.unfollow(u.id)}}>FOLLOW</button> 
                                                : <button onClick={()=> {props.follow(u.id)}}>UNFOLLOW</button>}
                                </div>
                            </div>
                            <div>
                                <div>
                                    {u.UserName}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                                <div>
                                    {u.location.country}, {u.location.city}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>   
}

export default Users;