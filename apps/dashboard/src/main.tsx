import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/app';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { RecoilRoot } from 'recoil';
import { ConfigProvider } from 'antd';

const direction = 'rtl';

// 👇🏻 Here's the place we add direction to the theme
const theme = extendTheme({ direction });

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <Router>
        <ConfigProvider direction="rtl">
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </ConfigProvider>
      </Router>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
);
