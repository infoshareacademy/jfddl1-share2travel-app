import React from 'react'
import Popup from './Popup'

const Home = React.createClass({

  intervalId: null,

  getInitialState: () => ({
    time: new Date()
  }),

  componentDidMount: function() {
    this.intervalId = setInterval(
      () => {
        this.setState({
          time: new Date()
        })

        console.log(this.state.time)
      }, 1000)
  },

  componentWillUnmount: function () {
    clearInterval(this.intervalId)
  },

  render: function () {
    return (
      <Popup/>
    )
  }
})

export default Home