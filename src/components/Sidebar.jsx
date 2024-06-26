import React from 'react';
import { VStack, Tooltip, IconButton } from '@chakra-ui/react';
import { FaCode, FaSave, FaFolderOpen } from 'react-icons/fa';

const Sidebar = ({ openNewFileDialog, handleSaveFile, openFileDrawer }) => {
  const sidebarBg = useColorModeValue('gray.200', 'gray.800');
  const sidebarHoverBg = useColorModeValue('gray.300', 'gray.700');

  return (
    <VStack
      as="nav"
      width="100px"
      bg={sidebarBg}
      color="gray.200"
      p="4"
      spacing="4"
      _hover={{ bg: sidebarHoverBg }}
    >
      <Tooltip label="Language">
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Create New File"
          fontSize="25px"
          onClick={openNewFileDialog}
        >
          <FaCode />
        </IconButton>
      </Tooltip>
      <Tooltip label="Save File">
        <IconButton
          icon={<FaSave />}
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Save File"
          fontSize="25px"
          onClick={handleSaveFile}
        />
      </Tooltip>
      <Tooltip label="Explorer">
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="teal"
          aria-label="Open File Explorer"
          fontSize="25px"
          onClick={openFileDrawer}
        >
          <FaFolderOpen />
        </IconButton>
      </Tooltip>
    </VStack>
  );
};

export default Sidebar;
