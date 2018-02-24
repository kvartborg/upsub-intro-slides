import React from 'react'
import View from '../../components/View'
import Logo from '../../components/Logo'
import './PubSub.css'

export default () => (
  <View>
    <center>
      <h1>Publish/Subscribe pattern</h1>
      <div className='pub-sub'>
        <div className='publishers'>
          <div className='block'>Publisher</div>
          <div className='stream'>
            <Logo width='28' />
          </div>
        </div>
        <div className='dispatcher'>
          <div className='block'>Dispatcher</div>
          <div className='stream first'>
            <Logo width='28' />
          </div>
          <div className='stream middle'>
            <Logo width='28' />
          </div>
          <div className='stream last'>
            <Logo width='28' />
          </div>
        </div>
        <div className='subscribers'>
          <div className='block'>Subscriber</div>
          <div className='block'>Subscriber</div>
          <div className='block'>Subscriber</div>
        </div>
      </div>
    </center>
  </View>
)
