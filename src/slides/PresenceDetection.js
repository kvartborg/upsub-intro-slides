import React from 'react'
import View from '../components/View'
import Code from '../components/Code'

const code = `# All presence notifications will flow the channel below
upsub/presence/>

# Get notified about specific connection
upsub/presence/<connection-name>/connect
upsub/presence/<connection-name>/disconnect
`

export default () => (
  <View>
    <h1>Presence Detection</h1>
    <ul>
      <li>Set <code>upsub-connection-name</code> as header or param</li>
      <li>Connection name should be unique</li>
      <li>Get notified when the connection state changes</li>
    </ul>
    <Code lang='sh'>{code}</Code>
  </View>
)
