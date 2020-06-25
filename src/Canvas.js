const React = require('react')



// color scheme yellows
var colourArray = [
  '#666666',
  '#ABDB25',
  '#999999',
  '#CCCCCC',
  '#BBCC99'
] 

var mouse = {
    x: undefined,
    y: undefined
}

class Canvas extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas
    var context = canvas.getContext('2d');
    var words = "Welcome";
  
    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius = radius;
      this.maxRadius = Math.floor(Math.random() * 20 + 30)
      this.colour = colourArray[Math.floor(Math.random() * colourArray.length)]

      this.draw = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.colour
        context.fill();
      }   

      this.update = function() {
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
          this.dx = -this.dx;
        };
        if (this.y + this.radius > window.innerHeight - 20 || this.y - this.radius < 0) {
          this.dy = -this.dy;
        };
    
        this.x += this.dx;
        this.y += this.dy;

      // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
          if (this.radius < this.maxRadius) {
            this.radius += 1;
        }} else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }


        this.draw();
      }
    }
    

    var circleArray = [];

    function init(numberCircles) {
      circleArray = [];
      for ( var i = 0; i < numberCircles; i++) {
        var radius = Math.ceil(Math.random() * 3);
        var x = Math.random() * (window.innerWidth - radius * 2) + radius;
        var y = Math.random() * (window.innerHeight - 20 - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        circleArray.push(new Circle(x, y, dx, dy, radius));
      }
    };

    function animate() {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, window.innerWidth, window.innerHeight - 20);
      for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
      context.font = '64px serif';
      context.fillText(words, window.innerWidth / 2 - 100, window.innerHeight / 2 );
    }   

    animate();

    init(600);
  } 

  handleMouseMoveCanvas(e) {
    mouse.x = e.clientX
    mouse.y = e.clientY
       
  }

  render() {
    
    return(
      <div>
        <canvas ref="canvas" 
          onMouseMove={(e) => {this.handleMouseMoveCanvas(e)}} 
          width={window.innerWidth} 
          height={window.innerHeight - 20} 
        />
      </div>
    )
  }
}

export default Canvas

