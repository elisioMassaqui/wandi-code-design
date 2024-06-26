import React from 'react';
import { HStack, Button } from '@chakra-ui/react';

const FileTabs = ({ files, setActiveFile, activeFile }) => {
  const sidebarHoverBg = useColorModeValue('gray.300', 'gray.700');
  const toolbarBg = useColorModeValue('gray.200', 'gray.800');

  return (
    <HStack spacing="4" p="4" bg={toolbarBg} borderBottom="1px solid" borderColor={sidebarHoverBg}>
      {files.map((file) => (
        <Button
          key={file}
          variant="ghost"
          size="sm"
          onClick={() => setActiveFile(file)}
          bg={activeFile === file ? sidebarHoverBg : 'transparent'}
        >
          {file}
        </Button>
      ))}
    </HStack>
  );
};

export default FileTabs;
