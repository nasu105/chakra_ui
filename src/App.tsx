import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';


import {theme} from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  );
}

export default App;
