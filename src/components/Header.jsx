// components/Header.js

import React from 'react';
import { Flex, Heading, IconButton, Tooltip } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ toggleColorMode }) => {
  return (
    <Flex as="header" px="6" py="4" bg="blue.600" color="white" alignItems="center" justifyContent="space-between">
      <Heading size="md">Wandi Code</Heading>
      <Tooltip label="Toggle Color Mode">
        <IconButton
          icon={<FaMoon />}
          onClick={toggleColorMode}
          variant="ghost"
          size="sm"
          aria-label="Toggle Color Mode"
        />
      </Tooltip>
    </Flex>
  );
};

export default Header;
