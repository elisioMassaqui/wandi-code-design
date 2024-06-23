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
  Input,
  Select,
} from '@chakra-ui/react';

const NewFileDialog = ({ isOpen, onClose, newFileName, setNewFileName, newFileLanguage, setNewFileLanguage, createFile }) => (
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
        <Button colorScheme="blue" mr={3} onClick={createFile}>
          Create
        </Button>
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

const CloseFileModal = ({ isOpen, onClose, activeFile, closeFile }) => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Close File</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>Do you really want to close the file "{activeFile}"?</Text>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={closeFile}>
          Close
        </Button>
        <Button variant="ghost" onClick={onClose}>
          Cancel
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export { NewFileDialog, CloseFileModal };
