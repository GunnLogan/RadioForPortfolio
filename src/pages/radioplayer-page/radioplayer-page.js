import React from "react"
import RadioPlayers from "../../containers/radio-players/radio-players.js"
import "./radioplayer-page.css"

lass RadioPlayerPage extends React.Component {

  render() {
    return (
      <div className="RadioPlayerFunction">
        <header>
          <img src={window.location.origin + "/Sverigesradio_srgb.png"} />
        </header>
        <div className="allStations">
          <RadioPlayers />
        </div>
      </div>
    )
  }

}

export default RadioPlayerPage
