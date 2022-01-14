import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './constants/theme';

ReactDOM.render(
  <ThemeProvider theme={theme} >
  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
  <CssBaseline />
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <div style={{border: 10,borderStyle:'solid',borderTopColor:'#ef2b2d',borderBottomColor:'#ef2b2d',borderLeftColor:'#d52628',borderRightColor:'#d52628'}}>

      <App />
      </div>
    </PersistGate>
  </Provider>
</ThemeProvider>,
 
  document.getElementById("root")
);
