import React from 'react'
import { BrowserRouter as Router,
  Switch, 
  Route,
  Link,
  useParams 
} from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='sticky-header'>
      <Link to='/' className="border">Home</Link>
      <Link to='/about' className="border">About</Link>
      <Link to='/projects' className="border">Projects</Link>
      <Link to='/contact' className="border">Contact</Link>
    </nav>
  )
}