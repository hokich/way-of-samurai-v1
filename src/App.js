import './App.scss';

import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileContainer from "./components/pages/Profile/ProfileContainer";
import DialogsContainer from "./components/pages/Dialogs/DialogsContainer";

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <div className="page">
        <Sidebar/>
        <Routes>
          <Route path='/profile' element={<ProfileContainer/>}/>
          <Route path='/dialogs' element={<DialogsContainer/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
