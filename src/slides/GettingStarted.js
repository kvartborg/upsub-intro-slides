import React from 'react'
import PlaneView from '../components/PlaneView'
import Code from '../components/Code'

const code = `# Download and start the Dispatcher
docker run -d -p 4400:4400 upsub/dispatcher

# Download a client
npm install @upsub/client`

export default () => (
  <PlaneView>
    <center>
      <h1>Getting Started</h1>
      <br />
    </center>
    <Code lang='sh'>{code}</Code>
  </PlaneView>
)
