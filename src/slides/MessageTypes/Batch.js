import React from 'react'
import View from '../../components/View'
import Code from '../../components/Code'

const code = `{
  "headers": {
    "upsub-message-type": "batch",
  },
  "payload": JSON.stringify([
    {
      "headers": {
        "upsub-message-type": "text",
        "upsub-channel": "hello"
      },
      "payload": "\\"Hello world!\\"",
    }
  ])
}`

export default () => (
  <View>
    <h1>Batch Message</h1>
    <Code lang='js'>{code}</Code>
  </View>
)
