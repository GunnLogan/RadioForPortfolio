import React from "react"



export default class RadioPlayerItems extends React.Component {

  state = {
    allRadioPlayersItems: []
  }

  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json.channels()
      }).then ((json.channels) => {
      this.setState({
        allRadioPlayersItems: json.channels
      })
    })
  }
