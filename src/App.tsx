import React from 'react';
import { Button } from 'antd';
import { AppBar } from './modules/app-bar/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Button type="primary">Button</Button>
      <img src="assets/icon.png" alt="test" />
    </div>
  )
}

export default App
