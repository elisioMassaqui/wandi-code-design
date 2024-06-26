// components/NewFileDialogModal.js

import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Select,
} from '@chakra-ui/react';

const NewFileDialogModal = ({ isOpen, onClose, onCreateFile }) => {
  const [newFileName, setNewFileName] = useState('');
  const [newFileLanguage, setNewFileLanguage] = useState('javascript');

  const handleCreateFile = () => {
    if (newFileName.trim() === '') return;
    onCreateFile(newFileName, newFileLanguage);
    setNewFileName('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New File</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Enter file name"
            value={newFileName}
            onChange={(e) => setNewFileName(e.target.value)}
          />
          <Select
            mt="2"
            value={newFileLanguage}
            onChange={(e) => setNewFileLanguage(e.target.value)}
          >
            <option value="plaintext">Plain Text</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleCreateFile}>
            Create
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewFileDialogModal;
