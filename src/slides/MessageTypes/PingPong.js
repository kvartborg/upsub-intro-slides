import React from 'react'
import View from '../../components/View'
import Code from '../../components/Code'

const code = `ping`

const res = `pong`

export default () => (
  <View>
    <h3>Ping Message</h3>
    <Code lang='http'>{code}</Code>
    <h3>Pong Message</h3>
    <Code lang='http'>{res}</Code>
  </View>
)
