import React, { useEffect, useState } from 'react';
import { Flex, Link, Box, useColorMode, Image, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import '../assets/css/navbar.css'; // Import your custom CSS for navbar styling
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkStyles = {
    color: '#d5929d', // Ensure the text is the specified pink color
    position: 'relative',
    _after: {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '3px',
      bottom: '-4px',
      left: '0',
      backgroundColor: '#d5929d',
      transform: 'scaleX(0)',
      transformOrigin: 'bottom right',
      transition: 'transform 0.3s ease-in-out',
    },
    _hover: {
      _after: {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
      },
    },
  };

  return (
    <Flex
      className={`navbar ${scroll ? 'navbar-scroll' : ''}`}
      position="fixed"
      top="0"
      left="50%"
      transform="translateX(-50%)"
      zIndex="1000"
      p={4}
      transition="background-color 0.3s ease"
      borderRadius="50px"
      borderColor="#d5929d"
      borderWidth="1px"
      boxShadow="lg"
      bgColor="white"
      marginTop="30px"
      align="center"
      justify="center"
    >
      <Link as={RouterLink} to="/" sx={linkStyles} mx={4}>
        <Text>Home</Text>
      </Link>
      <Link as={RouterLink} to="/menu" sx={linkStyles} mx={4}>
        <Text>Menu</Text>
      </Link>
      <Box position="relative" width="120px" marginTop="-120px">
        <Image src={logo} alt="Logo" position="absolute" boxSize="inherit" />
      </Box>
      <Link
        as={RouterLink}
        to="/menu"
        sx={linkStyles} mx={4}
        onClick={toggleColorMode}
      >
        <Text>{colorMode === 'light' ? 'Dark' : 'Light'}</Text>
      </Link>
    </Flex>
  );
};

export default Navbar;
