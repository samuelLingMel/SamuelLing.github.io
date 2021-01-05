import React, { Component } from 'react';
import memoryGameImg from './memoryGameScreenShot.png'
import trashureImg from './trashureScreenShot.png'
import codingWikiImg from './codingWikiScreenShot.png'
import noughtsAndCrossesImg from './noughtsAndCrossesScreenShot.png'
import webscrapingImg from './webscrapingScreenShot.png'
import countdownImg from './countdownScreenShot.png'
import githubImg from './github.png'
import trialImg from './trial.png'
import almbcImg from './ALMBC.png'
import './Project.css'

class Projects extends React.Component {
  noDemoPopup = () => {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  render() {
    return(
      <h1 class='project-grid'>
        <div class='card'>
          <div class='front-face'>
            <img src={memoryGameImg} alt="" height='300px' width = '300px'/>
            <h5 class='title'>Pairs</h5>
          </div>
          <div class='back-face'> 
            <div class='github'>
              <a href="https://github.com/samuelLingMel/wdi-fundamentals-memorygame" target="_blank">
                <img src={githubImg} alt=""/>
              </a>
            </div>
            <div class='demo'>
              <a href="https://samuellingmel.github.io/memory-game/index.html" target="_blank">
                <img src={trialImg} alt=""/>
              </a>
            </div>
          </div>
          
        </div>

        <div class='card'>
          <div class='front-face'>
            <img src={codingWikiImg} alt="" height='300px' width = '300px'/>
            <h5 class='title'>Coding Wiki</h5>
          </div>
          <div class='back-face'> 
            <div class='github'>
              <a href="https://github.com/samuelLingMel/Coding-Wiki" target="_blank">
                <img src={githubImg} alt=""/>
              </a>
            </div>
            <div class='demo'>
              <a href="https://mysterious-thicket-44355.herokuapp.com/" target="_blank">
                <img src={trialImg} alt=""/>
              </a>
            </div>
          </div>
        </div>

        <div class='card'>
          <div class='front-face'>
            <img src={noughtsAndCrossesImg} alt="" height='300px' width = '300px'/>
            <h5 class='title'>Epic Noughts and Crosses</h5>
          </div>
          <div class='back-face'> 
            <div class='github'>
              <a href="https://github.com/samuelLingMel/Noughts-and-Crosses" target="_blank">
                <img src={githubImg} alt=""/>
              </a>
            </div>
            <div class='demo'>
              <a href="https://samuellingmel.github.io/Noughts-and-Crosses/" target="_blank">
                <img src={trialImg} alt=""/>
              </a>
            </div>
          </div>
        </div>

        <div class='card'>
          <div class='front-face'>
            <img src={trashureImg} alt="" height='300px' width = '300px'/>
            <h5 class='title'>Trashure</h5>
          </div>
          <div class='back-face'> 
            <div class='github'>
              <a href="https://github.com/samuelLingMel/trashure" target="_blank">
                <img src={githubImg} alt=""/>
              </a>
            </div>
            <div class='demo'>
              <a href="https://trashure.herokuapp.com/" target="_blank">
                <img src={trialImg} alt=""/>
              </a>
            </div>
          </div>
        </div>

        <div class='card'>
          <div class='front-face'>
            <img src={webscrapingImg} alt="" height='300px' width = '300px'/>
            <h5 class='title'>Web Scraping</h5>
          </div>
          <div class='back-face'> 
            <div class='github'>
              <a href="https://github.com/samuelLingMel/Webscraping-books" target="_blank">
                <img src={githubImg} alt=""/>
              </a>
            </div>
            <div class='demo'>
              <div class="popup">
                <span class="popuptext" id="myPopup">Sorry, No web demo</span>
                <img src={trialImg} onClick={this.noDemoPopup} alt=""/>
              </div>
            </div>
          </div>
        </div>

        <div class='card'>
          <div class='front-face'>
            <img src={countdownImg} alt="" height='300px' width = '300px'/>
            <h5 class='title'>Countdown</h5>
          </div>
          <div class='back-face'> 
            <div class='github'>
              <a href="https://github.com/samuelLingMel/countdown">
                <img src={githubImg} alt=""/>
              </a>
            </div>
            <div class='demo'>
              <a href="https://samuellingmel.github.io/countdown/">
                <img src={trialImg} alt=""/>
              </a>
            </div>
          </div>
        </div>

        <div class='card'>
          <div class='front-face'>
            <img src={almbcImg} alt="" height='300px' width = '300px'/>
            <h5 class='title'>ALMBC Dashboard</h5>
          </div>
          <div class='back-face'> 
            <div class='github'>
              <a href="https://github.com/samuelLingMel/ALMBC-dashboard" target="_blank">
                <img src={githubImg} alt=""/>
              </a>
            </div>
            <div class='demo'>
              <a href="https://samuellingmel.github.io/ALMBC-dashboard/?topics=0-1-2-3&locations=0-1" target="_blank">
                <img src={trialImg} alt=""/>
              </a>
            </div>
          </div>
        </div>

      </h1>
    )
  }
}



export default Projects
