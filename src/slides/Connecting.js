import React from 'react'
import View from '../components/View'
import Code from '../components/Code'

const code = `# Example of auth url with request params
ws://localhost:4400?upsub-auth-id=root&upsub-secret=root
`

export default () => (
  <View>
    <h1>Connecting</h1>
    <ul>
      <li>HTTP Upgrade request</li>
      <li>Request Headers or Params</li>
      <ul>
        <li><code>upsub-auth-id</code></li>
        <li><code>upsub-secret</code></li>
        <li><code>upsub-public</code></li>
      </ul>
      <li>Allowed Origins</li>
      <ul>
        <li>Ensures connections from a browser is allowed</li>
      </ul>
    </ul>
    <Code lang='sh'>{code}</Code>
  </View>
)
