import './Card.css';
import React, { Component } from 'react'

export default class Card extends Component {
   classes = `card ${this.props.className}`

  render() {
    
    return (
      <div className={this.classes}>{this.props.children}</div>
    )
  }
}


  


