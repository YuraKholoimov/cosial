import React from 'react';
import { addMessageActionCreator, changeInputTextMessageActionCreator } from '../../Redux/dialogPage-reducer';
import Dialog from './Dialogs';



const DialogContainer = (props) => {
// debugger
    let state = props.store.getState()

    let addNewMessage = () => {props.store.dispatch(addMessageActionCreator())}

    let onNewMessageChange = (message) => {
        props.store.dispatch(changeInputTextMessageActionCreator(message))
    }
    return (
        <Dialog dialogPage = {state.dialogPage} addNewMessage = {addNewMessage} upDateNewMessageChange = {onNewMessageChange} />
    )
}

export default DialogContainer