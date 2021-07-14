import {combineReducers, createStore} from "redux"
import dialogPageReducer from "./dialogPage-reducer"
import profilePageReducer from "./profilePage-reducer"
import sideBareFriendsReducer from './SideBareFriends-reducer';

let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer,
    SideBareFriends: sideBareFriendsReducer

})
const store = createStore(reducers) 

export default store