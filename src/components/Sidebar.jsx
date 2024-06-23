import React from 'react';
import {
  VStack,
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import { FaCode, FaSave, FaFolderOpen } from 'react-icons/fa';

const Sidebar = ({ openNewFileDialog, handleSaveFile, openFileDrawer }) => (
  <VStack
    as="nav"
    width="100px"
    bg="gray.200"
    color="gray.200"
    p="4"
    spacing="4"
    _hover={{ bg: 'gray.300' }}
  >
    <Tooltip label="Language">
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="teal"
        aria-label="Create New File"
        fontSize="25px"
        onClick={openNewFileDialog}
        icon={<FaCode />}
      />
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
        icon={<FaFolderOpen />}
      />
    </Tooltip>
  </VStack>
);

export default Sidebar;
