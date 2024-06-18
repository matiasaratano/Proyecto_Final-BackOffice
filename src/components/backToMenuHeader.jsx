import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logobdt.png';
import InicioButton from '../components/inicioButton';

const BTMHeader = () => {
  const navigate = useNavigate();

  const handleInicioClick = () => {
    navigate('/home');
  };

  return (
    <Box as="header" width="100%" bg="whiteAlpha.700" p={4} boxShadow="sm" height="85px"> 
      <Flex align="center" mx="auto" justify="center" position="relative" height="100%">
        <Image 
          src={logo} 
          alt="Logo" 
          boxSize={{ base: '70px', md: '80px', lg: '200px' }} 
          position="absolute"
          left="4"
        />
        <Text 
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} 
          fontWeight="semibold"
          textAlign="center"
          _hover={{
            bgGradient: 'linear(to-r, purple.400, purple.600)',
            bgClip: 'text',
            textShadow: '1px 1px 1px rgba(103, 80, 164, 1), 0 0 2px rgba(103, 80, 164, 1)',
          }}
        >
        </Text>
        <Box position="absolute" right="4">
          <InicioButton onClick={handleInicioClick} />
        </Box>
      </Flex>
    </Box>
  );
};

export default BTMHeader;
