import React from "react"
import RadioPlayers from "../../containers/radio-players/radio-players.js"
import  "./radioplayer-page.css"

class RadioPlayerPage extends React.Component {

  render() {
    return (
      <div className="RadioPlayerFunction">
        <div>
          <RadioPlayers/>
        </div>
      </div>
    )
  }

}

export default RadioPlayerPage
