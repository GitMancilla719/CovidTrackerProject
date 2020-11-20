import React from 'react';
import { CssBaseline, Box  } from '@material-ui/core'
import AppStyle from './styles/App.style'
import Overview from './components/Overview'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const cls = AppStyle()

  return (
    <>
    <CssBaseline/>
    <Box className={cls.container}  mx='auto'>
      <CssBaseline/>
        <Box className={cls.Nav}>
          <Nav/>
        </Box>
        <Footer/>
    </Box>
    </>
  );
}

export default App;
