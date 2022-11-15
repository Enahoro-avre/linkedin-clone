import './App.css';
import { selectUser } from './feature/userSlice';
import { useSelector } from "react-redux"
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import Widgets from './Widgets';


function App() {

  // const user = useSelector(selectUser)

  return (

    <div className="app">
      <Header/>,
      
      
{/* 
      {!user ? (<Login/>) : (
        <div className='app__body'>
        <Sidebar/>
        <Feed/>

      </div>     
      )} */}
      <div className='app__body'>
        <Sidebar/>
        <Feed/>
        <Widgets/>

      </div>
    
    </div>
  );
}

export default App;


// Ctrl + Space-bar

// const firebaseConfig = {
//   apiKey: "AIzaSyAW1sXiDRI6i40iHeyllwzSj1R4CaWKr3M",
//   authDomain: "linkedin-f780a.firebaseapp.com",
//   projectId: "linkedin-f780a",
//   storageBucket: "linkedin-f780a.appspot.com",
//   messagingSenderId: "486047277001",
//   appId: "1:486047277001:web:fc6a43d4158b5505971218"
// };