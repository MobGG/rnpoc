import React, { Component } from 'react';
import { YellowBox } from 'react-native';

import Routers from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
      'Warning: isMounted(...) is deprecated',
    ]);
  }

  componentDidMount() { }

  render() {
    return <Routers />;
  }
}

export default App;
