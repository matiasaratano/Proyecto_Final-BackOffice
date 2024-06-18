import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import logo from '../assets/logobdt.png';

const Header = () => {
  return (
    <Box as="header" width="100%" bg="whiteAlpha.700" p={4} boxShadow="sm">
      <Flex align="center" mx="auto" justify="center" position="relative">
        <Image 
          src={logo} 
          alt="Logo" 
          boxSize={{ base: '70px', md: '80px', lg: '200px' }} 
          position="absolute"
          left="5px"
        />
        <Text 
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} 
          fontWeight="semibold"
          textAlign="center"
          _hover={{
            bgGradient: 'linear(to-r, purple.400, purple.600)',
            bgClip: 'text',
            textShadow: '1 1 1px rgba(103, 80, 164, 1), 0 0 2px rgba(103, 80, 164, 1)',
          }}
        >
          Menu Principal
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
