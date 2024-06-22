import React, { useState } from 'react';
import {
Box,
Flex,
VStack,
HStack,
Heading,
Text,
Button,
IconButton,
Tooltip,
useColorMode,
useColorModeValue,
Input,
Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalFooter,
ModalBody,
ModalCloseButton,
Select,
Drawer, // Import Drawer component from Chakra UI
DrawerOverlay,
DrawerContent,
DrawerCloseButton,
DrawerHeader,
DrawerBody,
Spinner,
DrawerFooter,
} from '@chakra-ui/react';
import {
FaMoon,
FaSun,
FaFileCode,
FaPlay,
FaLanguage,
FaCode,
FaFolderOpen,
FaSearch,
FaGitAlt,
FaPuzzlePiece,
FaFileAlt,
FaSave,
FaTimes,
FaBars,
} from 'react-icons/fa';

const App = () => {
const { colorMode, toggleColorMode } = useColorMode();
const bg = useColorModeValue('gray.50', 'gray.900');
const color = useColorModeValue('gray.800', 'white');
const sidebarBg = useColorModeValue('gray.200', 'gray.800');
const sidebarHoverBg = useColorModeValue('gray.300', 'gray.700');
const headerBg = useColorModeValue('blue.600', 'blue.900');
const headerColor = useColorModeValue('white', 'gray.200');
const toolbarBg = useColorModeValue('gray.200', 'gray.800');

const [files, setFiles] = useState([]);
const [activeFile, setActiveFile] = useState(null);
const [fileContents, setFileContents] = useState({});
const [isNewFileDialogOpen, setNewFileDialogOpen] = useState(false);
const [isCloseFileModalOpen, setCloseFileModalOpen] = useState(false);
const [newFileName, setNewFileName] = useState('');
const [newFileLanguage, setNewFileLanguage] = useState('plaintext');
const [isFileDrawerOpen, setFileDrawerOpen] = useState(false); // State for file drawer

const openFileDrawer = () => setFileDrawerOpen(true);
const closeFileDrawer = () => setFileDrawerOpen(false);

const openNewFileDialog = () => {
setNewFileName('');
setNewFileDialogOpen(true);
};

const createFile = () => {
if (newFileName.trim() === '') return;
const newFile = `${newFileName}.${newFileLanguage}`;
setFiles([...files, newFile]);
setActiveFile(newFile);
setFileContents({ ...fileContents, [newFile]: '' });
setNewFileDialogOpen(false);
};

const closeNewFileDialog = () => {
setNewFileDialogOpen(false);
};

const openCloseFileModal = (file) => {
setActiveFile(file);
setCloseFileModalOpen(true);
};

const closeCloseFileModal = () => {
setCloseFileModalOpen(false);
setActiveFile(null);
};

const closeFile = () => {
const updatedFiles = files.filter(f => f !== activeFile);
setFiles(updatedFiles);
setCloseFileModalOpen(false);
setActiveFile(null);
const { [activeFile]: deleted, ...remainingContents } = fileContents;
setFileContents(remainingContents);
};

const handleSaveFile = () => {
if (!activeFile || !fileContents[activeFile]) return;

const blob = new Blob([fileContents[activeFile]], { type: 'text/plain' });
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = activeFile;
link.click();
};

const handleFileContentChange = (content) => {
if (activeFile) {
setFileContents({ ...fileContents, [activeFile]: content });
}
};

return (
<Box bg={bg} color={color} height="100vh">
  <Flex direction="column" height="100%">
    <Flex as="header" px="6" py="4" bg={headerBg} color={headerColor} alignItems="center"
      justifyContent="space-between">
      <HStack spacing="4">
        <Heading size="md">Wandi Code</Heading>
        <Tooltip label="Toggle Color Mode">
          <IconButton icon={colorMode==='light' ? <FaMoon /> :
          <FaSun />}
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
        <Tooltip label="Open Documentation">
          <Button variant="ghost" size="sm">Docs</Button>
        </Tooltip>
        <Tooltip label="Help">
          <Button variant="ghost" size="sm">Help</Button>
        </Tooltip>
      </HStack>
    </Flex>

    <HStack as="nav" bg={toolbarBg} color="gray.200"></HStack>

    <Flex flex="1">
      <VStack as="nav" width="100px" bg={sidebarBg} color="gray.200" p="4" spacing="4" _hover={{ bg: sidebarHoverBg }}>
      <Tooltip label="Language">
        <Button variant="ghost" size="sm" onClick={openNewFileDialog}>
          <FaCode />
        </Button>
      </Tooltip>
      <Tooltip label="Save File">
        <IconButton icon={<FaSave />} variant="ghost" size="sm" aria-label="Save File" onClick={handleSaveFile} />
      </Tooltip>
        <Tooltip label="Explorer">
          <Button variant="ghost" size="sm" width="100%" onClick={openFileDrawer}>
            <FaFolderOpen />
          </Button>
        </Tooltip>
      </VStack>

      <Drawer placement="left" onClose={closeFileDrawer} isOpen={isFileDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>File Explorer</DrawerHeader>
          <DrawerBody>
            <VStack spacing="2">
              {files.map((file) => (
              <HStack key={file} spacing="0" width="100%">
                <Button variant="ghost" size="sm" onClick={()=> setActiveFile(file)}
                  bg={activeFile === file ? sidebarHoverBg : 'transparent'}
                  width="100%"
                  justifyContent="space-between"
                  >
                  {file}
                  <IconButton icon={<FaTimes />} variant="ghost" size="xs" aria-label="Close File" onClick={() =>
                  openCloseFileModal(file)} />
                </Button>
              </HStack>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="blue" mr={3} onClick={closeFileDrawer}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Flex flex="1" direction="column">
        <HStack spacing="4" p="4" bg={toolbarBg} borderBottom="1px solid" borderColor={sidebarHoverBg}>
          {files.map((file) => (
          <HStack key={file} spacing="0">
            <Button variant="ghost" size="sm" onClick={()=> setActiveFile(file)}
              bg={activeFile === file ? sidebarHoverBg : 'transparent'}
              >
              {file}
            </Button>
          </HStack>
          ))}
        </HStack>

        <Box flex="1" p="4" bg={bg} color={color} mx="4" borderRadius="md" boxShadow="md">
          {activeFile ? (
          <>
            <Heading size="sm">{activeFile}</Heading>
            <Input mt="2" value={fileContents[activeFile]} onChange={(e)=> handleFileContentChange(e.target.value)}
            placeholder="Type your code here..."
            size="sm"
            />
          </>
          ) : (
          <>
            <Heading size="sm">Welcome to Wandi Code! </Heading>
            <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
            <Text mt="2">Here are some instructions to get started:</Text>
            <Text mt="2">1. Choose an option from the left sidebar.</Text>
            <Text mt="2">2. Enter your code in the central editor.</Text>
            <Text mt="2">3. See the compilation output on the right.</Text>
          </>
          )}
        </Box>
        <Box bg={bg} color={color} p="4" mt="4" borderRadius="md" boxShadow="md">
          <Text fontSize="sm">Compilation Output</Text>
        </Box>
      </Flex>
    </Flex>

    <Box as="footer" p="4" bg={headerBg} color={headerColor} textAlign="center">
      <Text fontSize="sm">&copy; {new Date().getFullYear()} Wandi Code. All rights reserved.</Text>
    </Box>
  </Flex>

  <Modal isOpen={isNewFileDialogOpen} onClose={closeNewFileDialog} isCentered>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Create New File</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Input placeholder="Enter file name" value={newFileName} onChange={(e)=> setNewFileName(e.target.value)}
        />
        <Select mt="2" value={newFileLanguage} onChange={(e)=> setNewFileLanguage(e.target.value)}
          >
          <option value="txt">Plain Text</option>
          <option value="js">JavaScript</option>
          <option value="ts">TypeScript</option>
          <option value="py">Python</option>
        </Select>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={createFile}>
          Create
        </Button>
        <Button variant="ghost" onClick={closeNewFileDialog}>Cancel</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>

  <Modal isOpen={isCloseFileModalOpen} onClose={closeCloseFileModal} isCentered>
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
        <Button variant="ghost" onClick={closeCloseFileModal}>Cancel</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
</Box>
);
};

export default App;