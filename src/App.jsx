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
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { 
  FaMoon, 
  FaSun, 
  FaFileCode, 
  FaPlay, 
  FaLanguage, 
  FaCode, 
  FaThemeco, 
  FaFolderOpen, 
  FaSearch, 
  FaGitAlt, 
  FaPuzzlePiece, 
  FaFileAlt, 
  FaSave, 
  FaTimes 
} from 'react-icons/fa';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.50', 'gray.900');
  const color = useColorModeValue('gray.800', 'white');
  const sidebarBg = useColorModeValue('gray.200', 'gray.800');
  const sidebarHoverBg = useColorModeValue('gray.300', 'gray.700');
  const headerBg = useColorModeValue('blue.600', 'blue.900');
  const headerColor = useColorModeValue('white', 'gray.200');
  const toolbarBg = useColorModeValue('gray.200', 'gray.800');

  return (
    <Box bg={bg} color={color} height="100vh">
      <Flex direction="column" height="100%">
        {/* Header */}
        <Flex as="header" px="6" py="4" bg={headerBg} color={headerColor} alignItems="center" justifyContent="space-between">
          <HStack spacing="4">
            <Heading size="md">Wandi Code</Heading>
            <Tooltip label="Toggle Color Mode">
              <IconButton
                icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                onClick={toggleColorMode}
                variant="ghost"
                size="sm"
                aria-label="Toggle Color Mode"
              />
            </Tooltip>
          </HStack>
          <HStack spacing="4">
            <Tooltip label="Run Code">
              <IconButton icon={<FaPlay />} variant="ghost" size="sm" aria-label="Run Code" />
            </Tooltip>
            <Tooltip label="Open Documentation">
              <Button variant="ghost" size="sm">Docs</Button>
            </Tooltip>
            <Tooltip label="Help">
              <Button variant="ghost" size="sm">Help</Button>
            </Tooltip>
          </HStack>
        </Flex>

        {/* Toolbar */}
        <HStack as="nav" bg={toolbarBg} color="gray.200" p="4" spacing="4">
          <Tooltip label="New File">
            <IconButton icon={<FaFileAlt />} variant="ghost" size="sm" aria-label="New File" />
          </Tooltip>
          <Tooltip label="Save File">
            <IconButton icon={<FaSave />} variant="ghost" size="sm" aria-label="Save File" />
          </Tooltip>
          <Tooltip label="Close File">
            <IconButton icon={<FaTimes />} variant="ghost" size="sm" aria-label="Close File" />
          </Tooltip>
        </HStack>

        {/* Main Content */}
        <Flex flex="1">
          {/* Sidebar */}
          <VStack as="nav" width="100" bg={sidebarBg} color="gray.200" p="4" spacing="4" _hover={{ bg: sidebarHoverBg }}>
            <Tooltip label="Language">
              <Button variant="ghost" size="sm" width="100%"><FaCode /></Button>
            </Tooltip>
            <Tooltip label="Tema">
              <Button variant="ghost" size="sm" width="100%"><FaThemeco /></Button>
            </Tooltip>
            <Tooltip label="Explorer">
              <Button variant="ghost" size="sm" width="100%"><FaFolderOpen /></Button>
            </Tooltip>
            <Tooltip label="Search">
              <Button variant="ghost" size="sm" width="100%"><FaSearch /></Button>
            </Tooltip>
            <Tooltip label="Extensions">
              <Button variant="ghost" size="sm" width="100%"><FaPuzzlePiece /></Button>
            </Tooltip>
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
