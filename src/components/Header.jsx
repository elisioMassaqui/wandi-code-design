import React from 'react';
import {
  Flex,
  HStack,
  Heading,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import { FaMoon, FaSun, FaPlay } from 'react-icons/fa';

const Header = ({ colorMode, toggleColorMode }) => (
  <Flex
    as="header"
    px="6"
    py="4"
    bg={colorMode === 'light' ? 'blue.600' : 'blue.900'}
    color={colorMode === 'light' ? 'white' : 'gray.200'}
    alignItems="center"
    justifyContent="space-between"
  >
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
      {/* Add more buttons as needed */}
    </HStack>
  </Flex>
);

export default Header;
