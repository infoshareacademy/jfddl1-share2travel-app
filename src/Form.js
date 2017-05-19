import React, { Component } from 'react';
export default class Form extends Component{
    render(){
        return(
            <input type="text" onChange={this.onInputChange.bind(this)}/>

        )
    }

    onInputChange(event){
        // console.log(event.target.value)
        this.props.onUserChange(event.target.value)
    }
}
