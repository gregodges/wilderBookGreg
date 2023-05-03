import React from 'react';
import Header from './components/header/Header'
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      {/* <Profile/> */}
    </div>
  );
}

export default App;
