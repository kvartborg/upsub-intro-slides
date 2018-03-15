import React from 'react'
import View from '../components/View'
import Code from '../components/Code'

const code = `text channel
header-key: header-value

payload`

export default () => (
  <View>
    <h1>Basic Message Structure</h1>
    <Code lang='http'>{code}</Code>
  </View>
)
