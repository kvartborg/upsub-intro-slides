import React from 'react'
import View from '../../components/View'
import Code from '../../components/Code'

const code = `{
  "headers": {
    "upsub-message-type": "text",
    "upsub-channel": "hello"
  },
  "payload": "\\"Hello world!\\"",
}`

export default () => (
  <View>
    <h1>Text Message</h1>
    <Code lang='js'>{code}</Code>
  </View>
)
