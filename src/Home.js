import React from 'react'

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
      <div>
        <h1>TIME</h1>
        {/*<p>Current time: {this.state.time.toTimeString()}</p>*/}
      </div>
    )
  }
})

export default Home