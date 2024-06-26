// components/CloseFileModal.js

import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';

const CloseFileModal = ({ isOpen, onClose, activeFile, onCloseFile }) => {
  const handleConfirmClose = () => {
    onCloseFile();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Close File</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Do you really want to close the file "{activeFile}"?</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleConfirmClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CloseFileModal;
