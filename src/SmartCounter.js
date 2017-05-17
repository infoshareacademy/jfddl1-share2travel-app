// import React from 'react'
// import { Button } from 'react-bootstrap'
// import { connect } from 'react-redux'
//
// const SmartCounter = (props) => (
//   <div>
//     <h1>SmartCounter</h1>
//     <h3>{props.value}</h3>
//     <p>
//       <Button onClick={() => props.updateCounter(1)}>Increment</Button>
//       <Button onClick={() => props.updateCounter(-1)}>Decrement</Button>
//     </p>
//   </div>
// )
//
// export default connect(
//   // mapStateToProps
//   state => ({
//     value: state.smartCounter.smartCounterValue
//   }),
//   // mapDispatchToProps
//   dispatch => ({
//     updateCounter: (delta) => dispatch({
//       type: 'UPDATE_COUNTER',
//       delta: delta
//     })
//   })
// )(SmartCounter)