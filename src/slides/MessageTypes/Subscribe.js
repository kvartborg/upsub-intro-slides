import React from 'react'
import View from '../../components/View'
import Code from '../../components/Code'

const code = `{
  "headers": {
    "upsub-message-type": "subscribe",
  },
  "payload": "\\"channel/event\\""
}`

const res = `{
  "headers": {
    "upsub-message-type": "text",
    "upsub-channel": "channel/event:subscribed"
  },
  "payload": "\\"channel/event\\""
}`

export default () => (
  <View>
    <h1>Subscribe Message</h1>
    <Code lang='js'>{code}</Code>
    <h3>Response to client</h3>
    <Code lang='js'>{res}</Code>
  </View>
)
