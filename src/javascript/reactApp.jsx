import ReactDom from 'react-dom';
import * as React from 'react';

import { Alert } from './Alert.tsx'

const App = (props) => {
  return (
    <div>
      <p> Hello, react App</p>
      <Alert message={"success"}/>
    </div>
  );
}

const reactRoot = document.getElementById('react-root');
if (reactRoot) {
  ReactDom.render(<App />, reactRoot);
} else {
  console.log('react root element not found');
}
