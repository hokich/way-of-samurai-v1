import './App.scss';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile";

function App(props) {
  return (
    <div className='wrapper'>
      <Header/>
      <div className="page">
        <Sidebar/>
        <Profile profilePage={props.state.profilePage} addPost={props.addPost} setNewPostText={props.setNewPostText}/>
      </div>
    </div>
  );
}

export default App;
