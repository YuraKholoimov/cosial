import { connect } from 'react-redux';
import { addMessageActionCreator, changeInputTextMessageActionCreator } from '../../Redux/dialogPage-reducer';
import Dialog from './Dialogs';

// const DialogContainer = (props) => {
// // debugger
//     let state = props.store.getState()

//     let addNewMessage = () => {props.store.dispatch(addMessageActionCreator())}

//     let onNewMessageChange = (message) => {
//         props.store.dispatch(changeInputTextMessageActionCreator(message))
//     }
//     return (
//         <Dialog dialogPage = {state.dialogPage} addNewMessage = {addNewMessage} upDateNewMessageChange = {onNewMessageChange} />
//     )
// }

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        upDateNewMessageChange: (message) => {
            dispatch(changeInputTextMessageActionCreator(message))
        },
        addNewMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialog)

export default DialogsContainer