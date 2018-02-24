import React from 'react'
import View from '../components/View'
import Code from '../components/Code'

const code = `# Basic channel
channel/event

# Wildcard: *
channel/*/event

# Wildcard: >
channel/>/event
`

export default () => (
  <View>
    <h1>Channels</h1>
    <Code lang='sh'>{code}</Code>
  </View>
)
