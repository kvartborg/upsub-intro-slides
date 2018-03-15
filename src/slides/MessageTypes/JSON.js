import React from 'react'
import View from '../../components/View'
import Code from '../../components/Code'

const code = `json channel/event,

{ "hello": "world!" }`

export default () => (
  <View>
    <h1>JSON Message</h1>
    <Code lang='js'>{code}</Code>
  </View>
)
