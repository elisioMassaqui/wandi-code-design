// components/FileExplorer.js

import React from 'react';
import { VStack, HStack, Button, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';

const FileExplorer = () => {
  const sidebarHoverBg = useColorModeValue('gray.300', 'gray.700');
  const files = []; // Replace with actual files state

  return (
    <VStack as="nav" width="100px" bg="gray.200" color="gray.200" p="4" spacing="4" _hover={{ bg: sidebarHoverBg }}>
      {/* Map over files state */}
      {files.map((file) => (
        <HStack key={file} spacing="0" width="100%" alignItems="center" justifyContent="space-between">
          <Button variant="ghost" size="sm">
            {file}
            <IconButton
              icon={<FaTimes />}
              variant="ghost"
              size="xs"
              aria-label="Close File"
              // onClick={() => openCloseFileModal(file)}
            />
          </Button>
        </HStack>
      ))}
    </VStack>
  );
};

export default FileExplorer;
