import './App.scss';

import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileContainer from "./components/pages/Profile/ProfileContainer";
import DialogsContainer from "./components/pages/Dialogs/DialogsContainer";
import SinglePostPage from "./components/pages/SinglePostPage";
import EditPostForm from "./components/pages/EditPostForm/EditPostForm";
import {UsersList} from "./components/UsersList/UsersList";
import {UsersPage} from "./components/UserPage/UserPage";

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <div className="page">
        <Sidebar/>
        <Routes>
          <Route path='/users' element={<UsersList/>}/>
          <Route path='/users/:id' element={<UsersPage/>}/>
          <Route path='/profile/posts/:id' element={<SinglePostPage/>}/>
          <Route path='/profile/posts/:id/edit' element={<EditPostForm/>}/>
          <Route path='/profile' element={<ProfileContainer/>}/>
          <Route path='/dialogs' element={<DialogsContainer/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
