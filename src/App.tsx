import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn';
import ChatRoom from './pages/ChatRoom';
import SignOut from './pages/SignOut';

function App() {
  /// check if user is logged in
  const user = null;

  return (
    <div className="App">
      <header>
        <h1>A Cool Chat App</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}


export default App;
