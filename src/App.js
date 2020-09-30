import React from 'react'
import Projects from './Projects'
import Canvas from './Canvas'
import Nav from './Nav'
import About from './About'
import './App.css'


import { BrowserRouter as Router,
  Switch, 
  Route,
  Link,
  useParams 
} from 'react-router-dom'

class App extends React.Component {
  render() {
    
    return (
      <div className="App">
          <header>
            <Nav />
          </header>
          <main className="top-spacer">
            <Switch className="switch">
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/projects'>
                <Projects />
              </Route>
              <Route path="/">
                <Canvas />
              </Route>
            </Switch>
          </main>
        
      </div>
    )
  }
}

export default App
