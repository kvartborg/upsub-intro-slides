import React from 'react'
import View from '../../components/View'
import Code from '../../components/Code'

const code = `text channel/event

Hello world!`

export default () => (
  <View>
    <h1>Text Message</h1>
    <Code lang='http'>{code}</Code>
  </View>
)
