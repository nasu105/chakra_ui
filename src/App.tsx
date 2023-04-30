import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { LoginUserProvider } from './providers/LoginUserProvider';
import { router } from './router/Router';


import {theme} from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginUserProvider>
        <RouterProvider router={router}></RouterProvider>
      </LoginUserProvider>
    </ChakraProvider>
  );
}

export default App;
