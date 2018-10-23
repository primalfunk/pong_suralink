import React, { Component } from 'react';
import GameCanvas from './GameCanvas';

class GameControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: false,
      gameScore: 10,
      gameSpeed: 2,
      p1Color: "#FFF",
      p2Color: "#FFF",
      ballColor: "#FFF",
      result: {}
    };
  }
  
  componentDidMount() {
    this._initializeControls();
  }

  _renderLoop = () => {
    this.frameId = window.requestAnimationFrame(this._renderLoop);
    this._drawRender();
  };

  _drawRender = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this._drawStartButton();
    this._drawScoreButton();
    this._drawSpeedButton();
    this._drawP1Button();
    this._drawP2Button();
    this._drawBallButton();
  };

  _drawStartButton() {
    //start button
    let startButtonText;
    if(this.state.gameStart === false ) {
      startButtonText = "Start Game";
    } else {
      startButtonText = "Stop Game";
    }
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillRect(20, 20, 80, 50);
    this.ctx.fillStyle = "#000"
    this.ctx.fillText(startButtonText, 35, 45)
  }

  _drawScoreButton() {
    //score button
    let gameScore = this.state.gameScore;
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillRect(110, 20, 80, 50);
    this.ctx.fillStyle = "#000"
    this.ctx.fillText("To Win", 115, 45)
    this.ctx.fillText(gameScore, 115, 65)
  }

  _drawSpeedButton() {
    //speed button
    let gameSpeed;
    if ( this.state.gameSpeed === 2 ) {
      gameSpeed = "Normal"
    } else if ( this.state.gameSpeed === 4 ) {
      gameSpeed = "Fast"
    } else {
      gameSpeed = "Very Fast"
    }
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillRect(200, 20, 80, 50);
    this.ctx.fillStyle = "#000"
    this.ctx.fillText("Speed", 215, 45)
    this.ctx.fillText(gameSpeed, 215, 65)
  }

  _drawP1Button() {
    //p1 color button
    let p1Color;
    if ( this.state.p1Color === "#FFF") {
      p1Color = "White"
    } else if ( this.state.p1Color === "#FF0000") {
      p1Color = "Red"
    } else {
      p1Color = "Blue"
    }
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillRect(290, 20, 80, 50);
    this.ctx.fillStyle = "#000"
    this.ctx.fillText("P1 Color", 305, 45)
    this.ctx.fillText(p1Color, 305, 65)
  }

  _drawP2Button() {
    //p2 color button
    let p2Color;
    if (this.state.p2Color === "#FFF") {
      p2Color = "White"
    } else if (this.state.p2Color === "#FF0000") {
      p2Color = "Red"
    } else {
      p2Color = "Blue"
    }
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillRect(380, 20, 80, 50);
    this.ctx.fillStyle = "#000"
    this.ctx.fillText("P2 Color", 395, 45)
    this.ctx.fillText(p2Color, 395, 65)
  }

  _drawBallButton() {
    //ball color button
    let ballColor;
    if (this.state.ballColor === "#FFF") {
      ballColor = "White"
    } else if (this.state.ballColor === "#FF0000") {
      ballColor = "Red"
    } else {
      ballColor = "Blue"
    }
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillRect(470, 20, 80, 50);
    this.ctx.fillStyle = "#000"
    this.ctx.fillText("Ball Color", 485, 45)
    this.ctx.fillText(ballColor, 485, 65)
  }

  _initializeControls() {
    this.canvas = this.refs.pong_controls;
    this.ctx = this.canvas.getContext("2d");
    //event handler
    let canvas = document.getElementById('pong_controls')
    canvas.addEventListener('click', function (event) {
      if ( event.x > 20 && event.x < 100 && event.y > 540 && event.y < 590 ) {
        this.setState ({ gameStart: !this.state.gameStart })
      }
      if (event.x > 110 && event.x < 190 && event.y > 540 && event.y < 590) {
        if (this.state.gameScore === 10 ) {
          this.setState ({ gameScore: 20 })
        } else if (this.state.gameScore === 20 ) {
          this.setState ({ gameScore: 50 })
        } else if (this.state.gameScore === 50 ) {
          this.setState ({ gameScore: 10 })
        }
      }
      if (event.x > 200 && event.x < 280 && event.y > 540 && event.y < 590) {
        if (this.state.gameSpeed === 2) {
          this.setState({ gameSpeed: 4 })
        } else if (this.state.gameSpeed === 4) {
          this.setState({ gameSpeed: 6 })
        } else if (this.state.gameSpeed === 6) {
          this.setState({ gameSpeed: 2 })
        }
      }
      if (event.x > 290 && event.x < 370 && event.y > 540 && event.y < 590) {
        if (this.state.p1Color === "#FFF") {
          this.setState({ p1Color: "#FF0000" })
        } else if (this.state.p1Color === "#FF0000") {
          this.setState({ p1Color: "#0000FF" })
        } else if (this.state.p1Color === "#0000FF") {
          this.setState({ p1Color: "#FFF" })
        }
      }
      if (event.x > 380 && event.x < 460 && event.y > 540 && event.y < 590) {
        if (this.state.p2Color === "#FFF") {
          this.setState({ p2Color: "#FF0000" })
        } else if (this.state.p2Color === "#FF0000") {
          this.setState({ p2Color: "#0000FF" })
        } else if (this.state.p2Color === "#0000FF") {
          this.setState({ p2Color: "#FFF" })
        }
      }
      if (event.x > 470 && event.x < 550 && event.y > 540 && event.y < 590) {
        if (this.state.ballColor === "#FFF") {
          this.setState({ ballColor: "#FF0000" })
        } else if (this.state.ballColor === "#FF0000") {
          this.setState({ ballColor: "#0000FF" })
        } else if (this.state.ballColor === "#0000FF") {
          this.setState({ ballColor: "#FFF" })
        }
      }
    }.bind(this));

    this._renderLoop();
  }

  render() {
    return (
      <div>
      <GameCanvas controls={this.state} />
      <canvas
        id="pong_controls"
        ref="pong_controls"
        width="750"
        height="100"
        style={{ background: "#12260e", border: "4px solid #FFF" }}
        />
      </div>
    )
  }
}



export default GameControls;