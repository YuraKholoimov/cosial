import {combineReducers, createStore} from "redux"
import dialogPageReducer from "./dialogPage-reducer"
import profilePageReducer from "./profilePage-reducer"
import sideBareFriendsReducer from './sideBareFriends-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer,
    SideBareFriends: sideBareFriendsReducer,
    usersPage: usersReducer

})
const store = createStore(reducers) 

window.store = store

export default store