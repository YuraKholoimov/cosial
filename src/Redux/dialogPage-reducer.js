const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_INPUT_TEXT_MESSAGE = "CHANGE-INPUT-TEXT-MESSAGE"

const initialState =  {
    dialogs: [
        {id:1, name: "Dmitriy", avatar: "https://yt3.ggpht.com/a/AATXAJydg1M0TOcbiG1q2yn_R5yvO-WUglWmuAFrHw=s900-c-k-c0xffffffff-no-rj-mo"},
        {id:2, name: "Andrew", avatar: "https://yt3.ggpht.com/a/AGF-l7_L_25TemZ6FmvncQnJF0KItUF3z01DXhlqVA=s900-c-k-c0xffffffff-no-rj-mo"},
        {id:3, name: "Pole", avatar: "https://yt3.ggpht.com/a/AATXAJxYr9VRZjBDd3ClzyycgmDvRkT5qZrrAbXCBm3SEw=s900-c-k-c0xffffffff-no-rj-mo"},
        {id:4, name: "Elena", avatar: "https://yt3.ggpht.com/a/AATXAJy9noffCwFsqPO5gon7t6R54-Ff4tC7iGGvww=s900-c-k-c0xffffffff-no-rj-mo"},
        {id:5, name: "Artur", avatar: "https://yt3.ggpht.com/a/AATXAJxJ3S72H42c6iL2Ni5SaIHjGKxsSPE2tv6AGFsSYA=s900-c-k-c0xffffffff-no-rj-mo"},
        {id:6, name: "Sasha", avatar: "https://yt3.ggpht.com/a/AATXAJxYr9VRZjBDd3ClzyycgmDvRkT5qZrrAbXCBm3SEw=s900-c-k-c0xffffffff-no-rj-mo"},
    ],
      
    messages: [
        {id:1, message: "Hi!!!"},
        {id:2, message: "How is your deal?"},
        {id:3, message: "Hi!!!"},
        {id:4, message: "How is your deal?"},
        {id:5, message: "Hi!!!"},
        {id:6, message: "How is your deal?"}
    ],

    inputMessage: ""
}

const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            // let newMessage = {
            //     id: 1,
            //     message: state.inputMessage 
            // }
            return {...state,
                inputMessage: "",
                messages: [...state.messages, {id: 1, message: state.inputMessage }]
            }
            // stateCopy.messages = [...state.messages]
            // stateCopy.messages.push(newMessage)
            // stateCopy.inputMessage = ""
            // return stateCopy
        }
        
        case CHANGE_INPUT_TEXT_MESSAGE: 
            return {...state,
                inputMessage: action.message
            }

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"})
export const changeInputTextMessageActionCreator = (text) => ({ 
    type: "CHANGE-INPUT-TEXT-MESSAGE", 
    message: text
})

export default dialogPageReducer