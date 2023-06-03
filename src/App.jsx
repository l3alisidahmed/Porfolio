import { useState } from 'react'
import './App.css'
import pic from "../images/download (7).jpeg"




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div>
          <h1>ABDELALI</h1>
        </div>
        <div className='link'>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className='Home'>
        <div>
          <h1>Hello</h1>
          <p>I Am Software Enginer</p> 
        </div>
        <dir>
          {/* icoconc */}
        </dir>
      </div>
      <div className='content'>
        <div className='About'>
          <h2>About Me</h2>
          <p className='job'>Software Enginer</p>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi nisi assumenda quisquam repudiandae cupiditate placeat modi, libero dolorum tempora dolores aliquam voluptatem quia aspernatur. Ut minima quaerat voluptatibus ad!</p>
          <div className='Web-devlopment'>
            <p>Web Devlopement</p>
            <div className='progress'></div>
          </div>
          <div className='mobile-develpoment'>
            <p>Mobile Devlopement</p>
            <div className='progress'></div>
          </div>
          <input type="submit" value="Dwonlaod CV"/>
        </div>
        <img src={pic} alt="portrait"/>
      </div>
      <hr />
      <footer>
        <div className='copyright'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sequi totam </p>
        </div>
          <div className='quik-link'>
            <h1>Quik Link</h1>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <div className='contact'>
            <h1>Contact</h1>
              <ul>
                <li>Ouled_Fares,chlef</li>
                <li>SidAhmed@gmail.com</li>
                <li>+213 698 71 37 56</li>
              </ul>
          </div>
      </footer>
    </>
  )
}

export default App
