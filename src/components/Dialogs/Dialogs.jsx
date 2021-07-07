import React from 'react';
import { addMessageActionCreator, changeInputTextMessageActionCreator } from '../../Redux/state';
import DialogItem from './DialogItems/DialogItems';
import s from './Dialogs.module.css'
import Message from './Messages/Messages';


const Dialog = (props) => {
    const dialogsElements = props.dialogPage.dialogs.map(m =>  <DialogItem name={m.name} id={m.id} img={m.avatar}/> );
    const messagesElements = props.dialogPage.messages.map(m => <Message message={m.message} /> );

    let addNewMessage = () => {props.dispatch(addMessageActionCreator())}

    let onNewMessageChange = (e) => {
        let message = e.target.value
        props.dispatch(changeInputTextMessageActionCreator(message))
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div className={s.messageTextBlock}>
                        <div>
                            <textarea 
                                placeholder="type something..."
                                className={s.messageTextArea} 
                                onChange={onNewMessageChange} 
                                value={props.dialogPage.inputMessage}>
                            </textarea>
                        </div>
                        <div>
                            <button 
                                className={s.messageButtonSend}
                                onClick={addNewMessage}>Send
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialog