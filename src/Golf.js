import React from "react";
import "./css/golf.css";

class Golf extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 };
  }
  componentDidMount() {
    // this.setState({
    //   x: 0,
    //   y: 0,
    //   time: 5555
    // })
    window.addEventListener('keydown', this.triggerBallMovement, false);
  }

  componentWillUnmount() {
    //flush addeventlister
    //flush timer variable
    clearInterval(this.timerVal);
    window.removeEventListener('keydown', this.triggerBallMovement, false);
  }

  componentDidUpdate() {
    console.log('state - ', this.state);
    if(this.state.x === 250 && this.state.y === 250) {
      console.log('inside successs scenario');
      clearInterval(this.timerVal);
    }
  }

  startFn = () => {
    console.log('print time in start fn...')

    this.timerVal = setInterval(()=> {
      console.log('print time...');
      this.setState({
        x: this.state.x,
        y: this.state.y,
        time: this.state.time + 1
      })
    }, 1000)
  }

  triggerBallMovement = (event) => {
    console.log(event.key);
    if(this.state.time > 0) {
      if(event.key === 'ArrowDown') {
        this.setState({
          x: this.state.x,
          y: this.state.y + 5,
          time: this.state.time
        })
      }
      if(event.key === 'ArrowRight') {
        this.setState({
          x: this.state.x + 5,
          y: this.state.y,
          time: this.state.time
        })
      }
      if(event.key === 'ArrowUp') {
        this.setState({
          x: this.state.x,
          y: this.state.y - 5,
          time: this.state.time
        })
      }
      if(event.key === 'ArrowLeft') {
        this.setState({
          x: this.state.x - 5,
          y: this.state.y,
          time: this.state.time
        })
      }
    }
  }



  render() {
    return (
    <>  
      <span className="ball" style={{'top': this.state.y, 'left': this.state.x}}></span>
      <span className="hole"></span>
      <span className="heading-timer">{this.state.time}</span>
      <button className="start" onClick={this.startFn}>Start</button>
    </>
    );
  }
}

export default Golf;
