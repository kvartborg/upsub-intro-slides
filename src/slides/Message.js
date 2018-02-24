import React from 'react'
import View from '../components/View'
import Code from '../components/Code'

const code = `{
  "headers": {},
  "payload": "",
}`

export default () => (
  <View>
    <h1>Basic Message Structure</h1>
    <Code lang='js'>{code}</Code>
  </View>
)
