import React from 'react';
import './App.css';
import Header from './Container/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Feed from './Component/Feed/Feed';
import Widgets from './Component/Widgets/Widgets';
import Login from './Component/Login/Login';
import { useStateValue } from './StateProvider';
function App() {
const [{user},dispatch] = useStateValue();
  return (
    <div className="App">
      {
        !user?(<Login/>):(<div>
          <Header/>
       <div className="App__body">
          <Sidebar/>
          <Feed/>
          <Widgets/>
       </div>
        </div>)
      }
       
      
    </div>
  );
}

export default App;
