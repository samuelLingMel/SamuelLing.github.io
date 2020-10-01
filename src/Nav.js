import React from 'react'
import { BrowserRouter as Router,
  Switch, 
  Route,
  Link,
  useParams 
} from 'react-router-dom'

import email from './email.jpg'
import linkedIn from './linkedIn.png'
import github from './github.png'
import resume from './resume.png'

export default function Nav() {
  const showContactInfo = () => {
    var contactsPop = document.getElementById("myContact");
    console.log(contactsPop.classList)
    contactsPop.classList.toggle("show");
    console.log(contactsPop.classList)

  }

  return (
    <nav className='sticky-header'>
      <Link to='/' className="border">Home</Link>
      <Link to='/about' className="border">About</Link>
      <Link to='/projects' className="border">Projects</Link>
      
      <div className="border contact" onClick={showContactInfo} >
        Contact
        <div class='contactText' id='myContact'>
          <p><img src={email} width='25px'/> samuellingmel@gmail.com</p>
          <p><img src={linkedIn} width='25px'/> <a href='https://www.linkedin.com/in/samuellingmel/'>samuelLingMel</a> <img src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo.png" height="20px" alt=""/></p>
          <p><img src={resume} width='25px'/><a href='https://drive.google.com/file/d/1sAOzc6-C-kAeej3QVbKDptzYzYf9uTGv/view?usp=sharing'>resume</a></p>
          <p><img src={github} width="25px"/><a href='https://github.com/samuelLingMel'>github</a></p>
        </div>
      </div>
    </nav>
  )
}