/**
 * Created by Grzegorz Wieczorek on 31.05.2017.
 */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Button, mountNode, Load} from 'react-bootstrap'
//
//
// const LoadingButton = React.createClass({
//   getInitialState() {
//     return {
//       isLoading: false
//     };
//   },
//
//   render() {
//     let isLoading = this.state.isLoading;
//     return (
//       <Button
//         bsStyle="primary"
//         disabled={isLoading}
//         onClick={!isLoading ? this.handleClick : null}>
//         {isLoading ? 'Loading...' : 'Loading state'}
//       </Button>
//     );
//   },
//
//   handleClick() {
//     this.setState({isLoading: true});
//
//
//     setTimeout(() => {
// 
//       this.setState({isLoading: false});
//     }, 2000);
//   }
// });
//
// ReactDOM.render(<LoadingButton />, mountNode);
//
// export default Load