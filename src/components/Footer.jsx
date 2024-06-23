import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" p="4" bg="blue.600" color="white" textAlign="center">
      <Text fontSize="sm">&copy; {new Date().getFullYear()} Wandi Code. Todos os direitos reservados.</Text>
    </Box>
  );
};

export default Footer;
