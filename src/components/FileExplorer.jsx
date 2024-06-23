import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  VStack,
  HStack,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';

const FileExplorer = ({ isOpen, onClose, files, setActiveFile, activeFile, openCloseFileModal }) => (
  <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>File Explorer</DrawerHeader>
      <DrawerBody>
        <VStack spacing="2">
          {files.map((file) => (
            <HStack
              key={file}
              spacing="0"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveFile(file)}
                bg={activeFile === file ? 'gray.300' : 'transparent'}
                width="100%"
              >
                {file}
                <IconButton
                  icon={<FaTimes />}
                  variant="ghost"
                  size="xs"
                  aria-label="Close File"
                  onClick={() => openCloseFileModal(file)}
                />
              </Button>
            </HStack>
          ))}
        </VStack>
      </DrawerBody>
      <DrawerFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default FileExplorer;
