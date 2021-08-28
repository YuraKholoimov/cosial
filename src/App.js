import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import DialogContainer from './components/Dialogs/DialogsContainer';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import News from './components/News/News';
import Profile from './components/profile/Profile';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  
  return (
    <BrowserRouter>
        <div className="parallax">
          <div className="parallax__layer parallax__layer--back"></div>
          <div className="parallax__layer parallax__layer--base"></div>
          <div className="app-wrapper">
              <Header />
              <NavBar  />
              <div className="app-wrapper-content">
                <Route path="/Profile" render={ () => <Profile />} />
                <Route path="/Dialog" render={() => <DialogContainer  />} />
                <Route path="/News" render={() => <News />} />
                <Route path="/settings" render={() => <Settings />} /> 
                <Route path="/Users" render={() => <UsersContainer />} />
              </div>
          </div>
      </div>
    </BrowserRouter>

  );
}

export default App;