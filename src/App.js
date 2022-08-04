import './App.scss';

import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/pages/Profile/Profile";
import Dialogs from "./components/pages/Dialogs";

function App(props) {
  return (
    <div className='wrapper'>
      <Header/>
      <div className="page">
        <Sidebar/>
        <Routes>
          <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
          <Route path='/dialogs' element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
