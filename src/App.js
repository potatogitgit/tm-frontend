import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MaterialModal from './components/MaterialModal/MaterialModal';
import LockScreen from 'react-lock-screen'
import io from 'socket.io-client'

<script src="http:localhost:3000/socket.io/socket.io.js" />
const socket = io.connect("http://localhost:5000")


function App() {

  const [show, setShow] = useState(false)
  const [test, setTest] = useState()

  socket.on("testServer", msg => {
    setTest(msg.name)
  })

  const handleModalClose = () => {
    setShow(false)
  }

  const getLockScreenUi = (setLock) => {
    return (
      <div style={{
        width: '300px',
        position: 'fixed',
        border: '4px solid #333',
        background: '#fff',
        textAlign: 'center',
        padding: '16px',
        borderRadius: '4px',
        top: 'calc(30% - 152px / 2)',
        left: 'calc(49% - 300px / 2)'
      }}>

        <button className='btn btn-primary mx-2' onClick={() => setShow(true)}>Call HR</button>
        <br></br>
        <br></br>
        <img
          width="32"
          src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/102-256.png"
          alt="lock"
        />
        <p style={{ color: 'blue' }}>Hi {test}</p>
        <button onClick={() => setLock(false)}>unlock</button>
      </div>
    )
  }


  return (
    <div className="App">
      <header className="App-header">

        <LockScreen timeout={5000} ui={getLockScreenUi}>
          <img src={logo} className="App-logo" alt="logo" />
        </LockScreen>

      </header>
      <MaterialModal show={show} handleModalClose={handleModalClose} />
    </div>
  );
}

export default App;
