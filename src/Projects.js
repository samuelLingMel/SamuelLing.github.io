// import React from 'react';

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ButtonLast, ButtonFirst } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import aceSpades from './AS.png'
import kingHearts from './KH.png'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
{/* <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/> */}

class Projects extends Component {
  render() {
    return (
      <Carousel showArrows={true} onChange={Carousel.onChange} onClickItem={Carousel.onClickItem} onClickThumb={Carousel.onClickThumb}>
        <div>
          <img src="./KH.png" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="./AS.png" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
};

export default Projects
// export default function Projects() {
//     return ( 
//       <div className="main-projects">
//         <CarouselProvider
//           naturalSlideWidth={100}
//           naturalSlideHeight={200}
//           totalSlides={6}
//           className="projects"
//         > 
//           <h2>Projects</h2>
//           <main>
//             <aside className="left">
//               <div className="buttons">
//                 <ButtonBack className="top-button">Back</ButtonBack>
//                 <ButtonFirst className="bottom-button">First</ButtonFirst>
//               </div>
//             </aside>
//             <Slider>
//               <Slide index={0}>
//                 <h3>Noughts and crosses</h3>
//                 <p>
// A basic noughts and crosses game in html, css and javascript where both players have to play on the same device and take turns in a “hot seat” setup. I chose to focus on the javascript side of it and created a different variant of the game.
//                 </p>
//                 <p>
// I like games and have not spent a small amount of time thinking about game design. In particular balancing turn based games like this, there is always a flaw where the first player has an advantage. This is very obvious in games like noughts and crosses where the first player gets to control the game and the second player can only respond to them in order not to lose. This means it is generally up to the second player to make a mistake in order for someone to win, otherwise it tends to end in a draw.
// </p>
//               <p>
// So I wanted to add a twist to the game in order for less ties to be the end result.
// </p>
//               <p>
// Enter my Noughts and Crosses+ where players are filling out four boards and it is a score of how many 3 in a row you could get, decreasing the chance of ties and also reducing the impact of the first player advantage because you take it in turns.
// </p>
//               <p>
// If you need more information have a go on my github, there is a tutorial but honestly the easiest way to learn is to fill out a game. 
// On a coding level the challenge was to have logic that works for different sizes of a game board. It was extremely fun to figure out, lots of diagrams and calculations went into the algorithms. 
// </p>
// <p>A playable version can be found <a href="https://samuellingmel.github.io/Noughts-and-Crosses/">here</a> via github pages</p>
// <p>or you can look at the code on my github <a href="https://github.com/samuelLingMel/Noughts-and-Crosses">here</a></p>
//             </Slide>
//             <Slide index={1}>
//               <h3>Coding wiki</h3>
//               <p>
// Is a CRUD app in Ruby, like a wiki page which allows users to peruse the articles available or sign up and login to create their own. 
// I chose the subject matter of coding because I wanted to try to put all the concepts we were learning into text and found out just how hard that is for me.
// </p>
// <p>
// This was to create an app utilizing a restful server api and databases.
// I am proud of the navigation bar running down the left side of the screen because I used the layout to dynamically produce the options depending on how many articles there are on every page. 
// </p>
// <p>
// For this project I tried to focus a little bit more on CSS since for my first project it was more of an afterthought. I recognise I am not great at design, I can program it fine but coming up with colour schemes and layouts is tough for me.
// </p>
// <p>This was deployed on Heroku link can be found  <a href="https://mysterious-thicket-44355.herokuapp.com/">here</a></p>
// <p>or you can look at the code on my github <a href="https://github.com/samuelLingMel/Coding-Wiki">here</a></p>

//             </Slide>
//             <Slide index={2}>
//               <h3>Trashure</h3>
//               <p>
// This project was a collaboration between me and 3 other programmers, Debbie Patterson, Hayley Choi and Katerina Matveeva who did the Software Immersive and General Assembly with me.
//               </p>
//               <p>
// This was a CRUD app where users could post an item they were going to throw away and anyone else with the app could contact them to reserve the item and then go and pick it up. This could be furniture you do not want when you move or food, or tickets you can’t attend.
//               </p>
//               <p>
// We accessed the microsoft bing maps api so users can see a map around them to see what is available. 
// I was responsible for a lot of the dealing with the map, building it initially and dropping pins and the part I am most proud of was understanding how to use their reverse GeoCoding. 
//               </p>
//               <p>
// I worked on other features but what I remember most from this project other than gnashing my teeth over the reverse GeoCoding function was fixing bugs. This was because when we deployed we used the wrong version of our program and in order to show I fixed the bugs again which was only possible because I had a hand in fixing them all in the first place.
//               </p>
//               <p>
// This is why I gathered that I excel at the problem solving part of coding.
//               </p>
//               <p>This was deployed on Heroku link can be found  <a href="https://trashure.herokuapp.com/">here</a></p>
// <p>or you can look at the code on my github <a href="https://github.com/samuelLingMel/trashure">here</a></p>
//             </Slide>
//            <Slide index={3}>
//               <h3>Multiplayer Noughts and Crosses</h3>
//               <p>
//                 This time for noughts and crosses I wanted to play with another person over the internet. Especially in times of social distancing I feel like it is important to not have to be in the same location. 
// I wanted to use React and Socket.io but learning Socket.io was harder on top of React so I just used basic Javascript instead and Node.js for the server. 
//               </p>
//               <p>
// What was interesting for me was how even though I wasn’t using React I tried using some of React’s principles for this app. Breaking things down into components or having a cycle dependent on the state. I feel like React was made for something like a game that you are continuously interacting with.
//               </p>
//               <p>
// I will use this more as a basis for turn based games, which I have a lot of ideas for future projects.
//               </p>
//             </Slide>
//            <Slide index={4}>
//               <h3>Memory Game</h3>
//               <p>Just a simple memory game or pairs game. This was the final project of the pre-course work from General Assembly introducing us to Html, CSS and Javascript. I updated the game with more game logic, scoreboard, reset button, randomisation of the cards, more cards each board and increased the pool of cards.</p>
//               <p>
//                 I enjoy card games so I also got new pictures for cards with an image set online of bicycle cards, which I will probably use again.
//               </p>
//               <p>
//                 I'll never forget when working on this I was stuck and had a lightbulb moment thanks to what we were studying in class.
//                 It really drove home how important the basics like datatypes is and how they can be different depending on the programming language.
//                 </p>
//               <img src={aceSpades} height="200px" alt=""/>
//               <img src={kingHearts} height="200px" alt=""/>
//               <p>A playable version can be found <a href="https://samuellingmel.github.io/memory-game/memory-game/index.html">here</a> via github pages</p>
// <p>or you can look at the code on my github <a href="https://github.com/samuelLingMel/wdi-fundamentals-memorygame">here</a></p>
//             </Slide>
//            <Slide index={5}>
//               <h3>My Portfolio Website</h3>
//               <p>Built from scratch using React my portfolio website which you are currently enjoying. </p>
//               <img src="https://miro.medium.com/max/3840/1*kt8zdy8oe4ok8Dn7lH0u1A.jpeg" height="200px" alt=""/>
//               <p>
//                 I tried a few new things here on top of React, a bit of Canvas Art for the homepage, Carousel for displaying the projects and routes for a one page app.
//               </p>
//               <p>
//                 Projects like this make me think I'm not fit to be a creator but I want to be the person to make the program that other people are using to create.
//               </p>
              
//             </Slide>
//           </Slider>
//           <aside className="right">
//             <div className="buttons"></div>
//             <ButtonNext className="top-button">Next</ButtonNext>
//             <ButtonLast className="bottom-button">Last</ButtonLast>
//           </aside>
//           </main>
//         </CarouselProvider>

//       </div>
//     )
//   }