import React, { Component } from 'react'
import Logo from '../Logo'
import './PlaneView.css'

const random = (min, max) => Math.floor(Math.random() * max) + min

export default class PlaneView extends Component {
  planes = 12
  colors = ['primary', 'primary-light', 'info', 'info-light', 'danger', 'danger-light', 'dark-light', 'grey', 'grey-light']

  render () {
    return (
      <div className='plane-view'>
        <div className='planes'>
          {this.renderPlanes(1)}
          {this.renderPlanes(2)}
          {this.renderPlanes(3)}
          {this.renderPlanes(4)}
        </div>
        <div className='content'>
          <div className='wrapper'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

  renderPlane (color, x, y, heading, animation) {
    const style = {
      transform: `translate(${x}px, ${y}px) rotate(${heading}deg)`
    }

    animation = `trail animation-${animation}`

    return (
      <div key={color + heading + x + y} className={animation} style={style}>
        <Logo color={color} />
      </div>
    )
  }

  renderPlanes (animation) {
    const planes = []

    for (let i = 0; i < (this.planes / 4) + 1; i++) {
      planes.push(this.renderPlane(
        this.colors[random(0, this.colors.length - 1)],
        random(0, window.innerWidth),
        random(-window.innerHeight * 1.5, window.innerHeight * 1.5),
        random(0, 359),
        animation
      ))
    }

    return planes
  }
}
