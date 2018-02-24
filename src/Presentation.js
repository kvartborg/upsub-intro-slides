
import React, { Component } from 'react'
import {
  Deck,
  Slide
} from 'spectacle'
import createTheme from "spectacle/lib/themes/default"
import './Presentation.css'

import Footer from './components/Footer'
import PlaneView from './components/PlaneView'
import View from './components/View'
import Code from './components/Code'

import Start from './slides/Start'
import Intro from './slides/Intro'
import WhyWebSocket from './slides/WhyWebSocket'
import PubSub from './slides/PubSub'
import Channels from './slides/Channels'
import Message from './slides/Message'
import MessageTypes from './slides/MessageTypes'
import Authentication from './slides/Authentication'
import Connecting from './slides/Connecting'
import PresenceDetection from './slides/PresenceDetection'
import GettingStarted from './slides/GettingStarted'



const theme = createTheme({
  'primary': '#59CD90',
  'primary-light': '#7AD7A6',
  'info': '#559DF3',
  'info-light': '#77B1F5',
  'danger': '#EE6352',
  'danger-light': '#F18275',
  'dark': '#1C3144',
  'dark-light': '#495A69',
  'dark-transparent': 'rgba(0, 0, 0, 0.3)',
  'grey': '#DCE0D9',
  'grey-light': '#F2F2F2',
  'grey-transparent': 'rgba(0, 0, 0, .026)',
  'white': 'white',
  'white-light': '#FFFEFD',
  'quarternary': '#495A69',
})

export default class Presentation extends Component {
  render() {
    return (
      <div>
        <Deck
          transitionDuration={300}
          contentWidth={window.innerWidth}
          contentHeight={window.innerHeight}
          theme={theme}
          progress='bar'
          controls={false}
          bgColor='white'
        >
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <Start />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <Intro />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <WhyWebSocket />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <PubSub />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <Channels />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <Message />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <MessageTypes.Overview />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <MessageTypes.Text />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <MessageTypes.Batch />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <MessageTypes.Subscribe />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <MessageTypes.Unsubscribe />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <MessageTypes.PingPong />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <Authentication.Base />
          </Slide>
          <Slide bgColor='white'>
            <Authentication.Root />
          </Slide>
          <Slide bgColor='white'>
            <Authentication.UpSubController />
          </Slide>
          <Slide bgColor='white'>
            <Authentication.UpSubApps />
          </Slide>
          <Slide bgColor='white'>
            <Authentication.OtherApp />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <Connecting />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <PresenceDetection />
          </Slide>
          <Slide bgColor='white' transition={['slide', 'fade']}>
            <GettingStarted />
          </Slide>
        </Deck>
        <Footer />
      </div>
    )
  }
}
