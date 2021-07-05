import React from 'react';
import DialogItem from './DialogItems/DialogItems';
import s from './Dialogs.module.css'
import Message from './Messages/Messages';

const Dialog = (props) => {

    const dialogsElements = props.dialogPage.dialogs.map(m =>  <DialogItem name={m.name} id={m.id} img={m.avatar}/> );
    const messagesElements = props.dialogPage.messages.map(m => <Message message={m.message} /> );
    
    const newMessage = React.createRef()

    let addNewMessage = () => {props.addMessage()}

    let inputNewMessage = () => {
        let text = newMessage.current.value
        props.changeInputTextMessage(text)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div className={s.messageTextBlock}>
                        <textarea className={s.messageTextArea} ref={newMessage} onChange={inputNewMessage} value={props.dialogPage.inputMessage}></textarea>
                        <button className={s.messageButtonSend} onClick={addNewMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialog