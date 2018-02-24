import React from 'react'
import View from '../../components/View'
import Code from '../../components/Code'

const code = `{
  "headers": {
    "upsub-message-type": "ping",
  },
  "payload": ""
}`

const res = `{
  "headers": {
    "upsub-message-type": "pong",
  },
  "payload": ""
}`

export default () => (
  <View>
    <h3>Ping Message</h3>
    <Code lang='js'>{code}</Code>
    <h3>Pong Message</h3>
    <Code lang='js'>{res}</Code>
  </View>
)
