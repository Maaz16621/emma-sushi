// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { Box, VStack } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box>
          <VStack spacing={8}>
            <Routes>
              <Route index path='/' element={<Home />} />
              <Route path="/menu" element={<Menu />} />
            </Routes>
          </VStack>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;