import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Menu from './components/Menu';
import Content from './components/Content';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Menu />
        <Routes>
          <Content />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
