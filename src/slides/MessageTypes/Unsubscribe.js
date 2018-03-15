import React from 'react'
import View from '../../components/View'
import Code from '../../components/Code'

const code = `unsubscribe

channel/event`

const res = `text channel/event:unsubscribed

channel/event`

export default () => (
  <View>
    <h1>Unsubscribe Message</h1>
    <Code lang='http'>{code}</Code>
    <h3>Response to client</h3>
    <Code lang='http'>{res}</Code>
  </View>
)
