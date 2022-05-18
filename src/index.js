import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './constants/theme';
import './css/MainStyle.css';
import './css/Fonts.css';
import SimpleBar from 'simplebar-react';

import './css/simplebar.css';

const scrollableNodeRef = React.createRef();
// import "simplebar/src/simplebar.css";

ReactDOM.render(
  <ThemeProvider theme={theme} >
  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
  <CssBaseline />
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <SimpleBar style={{height: '100vh', }} scrollableNodeProps={{ ref: scrollableNodeRef }}>
          <App/>
        </SimpleBar>
    </PersistGate>'
  </Provider>
</ThemeProvider>,
 
  document.getElementById("root")
);
