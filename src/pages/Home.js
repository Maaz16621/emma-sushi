import React from 'react';
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

const Home = () => {
 

  const carouselStyle = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false} // Hide navigation arrows
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      swipeable // Enable swipe navigation
      emulateTouch // Enable touch events emulation for desktop
    >
      <div>
        <Flex style={{ ...carouselStyle, backgroundImage: `url(${image1})` }}>
          <Box textAlign="center" p={8} color="white">
            <Heading as="h1" size="2xl" mb={4}>
              Welcome to Our Website
            </Heading>
            <Text fontSize="xl">Explore our amazing features</Text>
          </Box>
        </Flex>
      </div>
      <div>
        <Flex style={{ ...carouselStyle, backgroundImage: `url(${image2})` }}>
          <Box textAlign="center" p={8} color="white">
            <Heading as="h1" size="2xl" mb={4}>
              Discover Something New
            </Heading>
            <Text fontSize="xl">Experience innovation</Text>
          </Box>
        </Flex>
      </div>
      <div>
        <Flex style={{ ...carouselStyle, backgroundImage: `url(${image3})` }}>
          <Box textAlign="center" p={8} color="white">
            <Heading as="h1" size="2xl" mb={4}>
              Connect with Us
            </Heading>
            <Text fontSize="xl">Join our community</Text>
          </Box>
        </Flex>
      </div>
    </Carousel>
  );
};

export default Home;
