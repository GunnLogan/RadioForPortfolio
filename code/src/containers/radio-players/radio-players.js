import React from "react"
import RadioPlayerItem from "../../components/radioplayeritem/radioPlayerItem.js"
import  "./radio-players.css"


export default class RadioPlayers extends React.Component {

  state = {
    allRadioPlayers: []
  }

  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        allRadioPlayers: json.channels
      })
    })
  }

  render() {


    if (this.state.allRadioPlayers.length > 0) {
      return (
        <div className= "radioPlayersItem">
          {this.state.allRadioPlayers.map((item) => {
            return (
              <RadioPlayerItem name={item.name}
              image={item.image}
              imagetemplate={item.imagetemplate}
              liveaudio={item.liveaudio.url}
              color={item.color}
              />
            )
          })}
        </div>
        )
      } else {
      return <div className="notLoading">Radio gaga..</div>
    }
  }
}
