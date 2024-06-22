import React from 'react';
import {
  Box,
  Flex,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  IconButton,
  Tooltip,
  Divider,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun, FaFileCode, FaPlay } from 'react-icons/fa';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.50', 'gray.900');
  const color = useColorModeValue('gray.800', 'white');
  const sidebarBg = useColorModeValue('gray.200', 'gray.800');
  const sidebarHoverBg = useColorModeValue('gray.300', 'gray.700');
  const headerBg = useColorModeValue('blue.600', 'blue.900');
  const headerColor = useColorModeValue('white', 'gray.200');

  return (
    <Box bg={bg} color={color} height="100vh">
      <Flex direction="column" height="100%">
        {/* Header */}
        <Flex as="header" px="6" py="4" bg={headerBg} color={headerColor} alignItems="center" justifyContent="space-between">
          <HStack spacing="4">
            <IconButton
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              variant="ghost"
              size="md"
              aria-label="Toggle Color Mode"
              _hover={{ transform: 'rotate(360deg)' }}
            />
            <Heading size="md">Wandi Code</Heading>
          </HStack>
          <HStack spacing="4">
            <IconButton
              icon={<FaPlay />}
              variant="ghost"
              size="md"
              aria-label="Run Code"
              _hover={{ transform: 'scale(1.2)' }}
            />
            <Button variant="ghost" size="md" leftIcon={<FaFileCode />} _hover={{ textDecoration: 'underline' }}>
              Docs
            </Button>
            <Button variant="ghost" size="md" leftIcon={<FaFileCode />} _hover={{ textDecoration: 'underline' }}>
              Help
            </Button>
          </HStack>
        </Flex>

        {/* Main Content */}
        <Flex flex="1">
          {/* Sidebar */}
          <VStack as="nav" width="64" bg={sidebarBg} color="gray.200" p="4" spacing="4" _hover={{ bg: sidebarHoverBg }}>
            <Button variant="ghost" size="md" leftIcon={<FaFileCode />} _hover={{ textDecoration: 'underline' }}>
              Explorer
            </Button>
            <Button variant="ghost" size="md" leftIcon={<FaFileCode />} _hover={{ textDecoration: 'underline' }}>
              Search
            </Button>
            <Button variant="ghost" size="md" leftIcon={<FaFileCode />} _hover={{ textDecoration: 'underline' }}>
              Git
            </Button>
            <Button variant="ghost" size="md" leftIcon={<FaFileCode />} _hover={{ textDecoration: 'underline' }}>
              Extensions
            </Button>
          </VStack>

          {/* Editor and Output */}
          <Flex flex="1" direction="column">
            <Box flex="1" p="4" bg={bg} color={color} mx="4" borderRadius="md" boxShadow="md">
              <Heading size="sm">Welcome to Wandi Code!</Heading>
              <Text mt="2">Here are some instructions to get started:</Text>
              <Text mt="2">1. Choose an option from the left sidebar.</Text>
              <Text mt="2">2. Enter your code in the central editor.</Text>
              <Text mt="2">3. See the compilation output on the right.</Text>
            </Box>
            <Box bg={bg} color={color} p="4" mt="4" borderRadius="md" boxShadow="md">
              {/* Compilation output here */}
              <Text fontSize="sm">Compilation Output</Text>
            </Box>
          </Flex>
        </Flex>

        {/* Footer */}
        <Box as="footer" p="4" bg={headerBg} color={headerColor} textAlign="center">
          <Text fontSize="sm">&copy; {new Date().getFullYear()} Wandi Code. All rights reserved.</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default App;
