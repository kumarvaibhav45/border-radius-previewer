import React from 'react';
import './stylesheets/index.scss';
import Form from './components/SizeHandlingForm/Form';
import ExportContainer from './components/ExportContainer/ExportContainer';
import DemoContainer from './components/DemoContainer/DemoContainer';
import { GlobalStateProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalStateProvider>
      <div className='App'>
        <h1>border radius previewer</h1>
        <DemoContainer />
        <ExportContainer />
        <Form />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
