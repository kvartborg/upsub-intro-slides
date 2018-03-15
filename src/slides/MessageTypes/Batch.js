import React from 'react'
import View from '../../components/View'
import Code from '../../components/Code'

const code = `batch

[
  "text channel\\n\\nHello world!",
]
`

export default () => (
  <View>
    <h1>Batch Message</h1>
    <Code lang='http'>{code}</Code>
  </View>
)
