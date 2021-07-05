import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import News from './components/News/News';
import Profile from './components/profile/Profile';
import Settings from './components/Settings/Settings';

function App(props) {

  return (
    <BrowserRouter>
        <div className="parallax">
          <div className="parallax__layer parallax__layer--back"></div>
          <div className="parallax__layer parallax__layer--base"></div>
          <div className="app-wrapper">
              <Header />
              <NavBar state={props.state.SideBareFriends} />
              <div className="app-wrapper-content">
                <Route path="/Profile" render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} changeInputTextArea={props.changeInputTextArea}/>} />
                <Route path="/Dialog" render={() => <Dialogs dialogPage={props.state.dialogPage} addMessage={props.addMessage} changeInputTextMessage={props.changeInputTextMessage}/>} />
                <Route path="/News" render={() => <News />} />
                <Route path="/settings" render={() => <Settings />} />
              </div>
          </div>
      </div>
    </BrowserRouter>

  );
}

export default App;