import React from 'react';
import { Box, Image, Spinner } from '@chakra-ui/react';
import logo from '../assets/images/logo.png';

const Preloader = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bg="white"
      zIndex="10000"
    >
      <Box position="relative" width="100px" height="100px">
        <Spinner
          thickness="5px"
          speed="1s"
          emptyColor="transparent"
          color="rgb(251 198 236)" // Adjusted spinner color to be slightly darker
          width="110px" height="110px"
          position="absolute"
      
        />
        <Image
          src={logo}
          alt="Logo"
          boxSize="100px"
          position="absolute"
          top="55%"
          left="55%"
          transform="translate(-50%, -50%)"
          filter="drop-shadow(0 0 10px rgba(0, 0, 0, 0.1))"
        />
      </Box>
    </Box>
  );
};

export default Preloader;
