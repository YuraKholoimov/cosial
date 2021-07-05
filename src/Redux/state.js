let store = {
    _state: {
        dialogPage: {
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
        },
        profilePage: {
            postData: [
                {id:1, message: "Hi, how are you?", like:23},
                {id:2, message: "It's my first post.", like:20},
                {id:3, message: "Hi, there you are?", like: 10},
                {id:4, message: "Hi, how are you?", like: 13},
                {id:5, message: "Hi, yo yo yo!!!", like: 13}
            ],
            
            inputText: ""
                    
        },
        SideBareFriends: [
            {id:1, name: "Dmitriy", avatar: "https://yt3.ggpht.com/a/AATXAJydg1M0TOcbiG1q2yn_R5yvO-WUglWmuAFrHw=s900-c-k-c0xffffffff-no-rj-mo"},
            {id:2, name: "Andrew", avatar: "https://yt3.ggpht.com/a/AGF-l7_L_25TemZ6FmvncQnJF0KItUF3z01DXhlqVA=s900-c-k-c0xffffffff-no-rj-mo"},
            {id:3, name: "Pole", avatar: "https://yt3.ggpht.com/a/AATXAJxYr9VRZjBDd3ClzyycgmDvRkT5qZrrAbXCBm3SEw=s900-c-k-c0xffffffff-no-rj-mo"}
        ]
    
    },
    getState() {
        return this._state
    },
    renderTree(){},
    reRender(observer) {
        this.renderTree = observer
    },
    addMessage() {
        let newMessage = {
            id: 1,
            message: this._state.dialogPage.inputMessage 
        }
        this._state.dialogPage.messages.push(newMessage)
        this._state.dialogPage.inputMessage = ""
        this.renderTree(this.state)
    },
    changeInputTextMessage(newText) {
        this._state.dialogPage.inputMessage = newText
        this.renderTree(this.state)
    },
    addPost() {

        let newPost = {
            id: 6,
            message: this._state.profilePage.inputText,
            like: 20
        }
    
        this._state.profilePage.postData.unshift(newPost)
        this._state.profilePage.inputText = ""
        this.renderTree(this.state)
    },
    changeInputTextArea(newText) {
    
        this._state.profilePage.inputText = newText
        this.renderTree(this.state)
    }
}

export default store;