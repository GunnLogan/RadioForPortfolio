import React from "react"
import "./radioPlayerItem.css"

export default class RadioPlayerItem extends React.Component {

  render() {
    const backgroundColor = { backgroundColor: `#${this.props.color}` }
    console.log(backgroundColor)

    return (
      <div className="radioPlayerContainer" style={backgroundColor} >
        <img className="logo" src={this.props.image} alt="radio logo not loading" />
        <div className="nameAndControls">
          <p>{this.props.name}</p>
          <div className="audioControls">
            <audio controls><source src={this.props.liveaudio} type="audio/mpeg" /></audio>
          </div>
        </div>
      </div>
    )
  }
}
