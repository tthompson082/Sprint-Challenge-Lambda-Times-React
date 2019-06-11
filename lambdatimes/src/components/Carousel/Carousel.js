import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      selected: 0
    }
  }
  componentDidMount(){
    this.setState({
      carousel: carouselData,
    })
  }

  leftClick = () => {
    if(this.state.selected === 0) {
      this.setState({
        selected: this.state.carousel.length - 1
      })
    } else {
    this.setState(prevState => ({
      selected: prevState.selected - 1
    }))}

  }

  rightClick = () => {
    if(this.state.selected === this.state.carousel.length - 1) {
      this.setState({
        selected: 0
      })
    } else {
    this.setState(prevState => ({
      selected: prevState.selected + 1
    }))}

  }

  selectedImage = () => {
    return <img src={this.state.carousel[this.state.selected]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <img src={this.state.carousel[this.state.selected]} style={{display: 'block'}} />
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}