const ADD_POST = "ADD-POST"
const CHANGE_INPUT_TEXT_AREA = "CHANGE-INPUT-TEXT-AREA"

const initialState = {
    postData: [
        {id:1, message: "Hi, how are you?", like:23},
        {id:2, message: "It's my first post.", like:20},
        {id:3, message: "Hi, there you are?", like: 10},
        {id:4, message: "Hi, how are you?", like: 13},
        {id:5, message: "Hi, yo yo yo!!!", like: 13}
    ],
    
    inputText: ""         
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 6, message: state.inputText, like: 20}
            return {...state,
                postData: [newPost, ...state.postData],
                inputText: ""
            }
            // stateCopy.postData = [...state.postData]
            // stateCopy.postData.unshift(newPost)
            // stateCopy.inputText = ""
            // return stateCopy
        }
        case CHANGE_INPUT_TEXT_AREA: {
            // let stateCopy = {...state}
            // stateCopy.inputText = action.newText
            return {...state, 
                inputText: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST" })

export const changeInputTextAreaActionCreater = (text) =>({
    type: "CHANGE-INPUT-TEXT-AREA",
    newText: text
})

export default profilePageReducer