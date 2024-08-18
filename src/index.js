import logo from './assets/images/logo.png';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import reportWebVitals from './reportWebVitals';
import Preloader from './components/Preloader'; // Make sure to adjust the path as necessary

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as necessary

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <ChakraProvider>
        {loading ? <Preloader /> : <App />}
      </ChakraProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
