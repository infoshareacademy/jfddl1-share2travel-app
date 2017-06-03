import React, { Component } from 'react';
export default class Form extends Component{
    render(){
        return(
            <input type="text" onChange={this.onInputChange.bind(this)}/>

        )
    }

    onInputChange(event){
        this.props.onUserChange(event.target.value)
    }
}
