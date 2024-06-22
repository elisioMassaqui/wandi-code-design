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
  Select, // Import Select component from Chakra UI
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

  // Estado para gerenciar arquivos e seus conteúdos
  const [files, setFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [fileContents, setFileContents] = useState({});
  const [isNewFileDialogOpen, setNewFileDialogOpen] = useState(false); // Estado para controlar a abertura do modal de novo arquivo
  const [isCloseFileModalOpen, setCloseFileModalOpen] = useState(false); // Estado para controlar a abertura do modal de fechar arquivo
  const [newFileName, setNewFileName] = useState(''); // Estado para armazenar o nome do novo arquivo
  const [newFileLanguage, setNewFileLanguage] = useState('plaintext'); // Estado para armazenar a linguagem do novo arquivo

  // Estado para controlar a visibilidade do explorador de arquivos
  const [isFileExplorerVisible, setIsFileExplorerVisible] = useState(true);

  // Função para abrir o modal de novo arquivo
  const openNewFileDialog = () => {
    setNewFileName('');
    setNewFileDialogOpen(true);
  };

  // Função para criar um novo arquivo
  const createFile = () => {
    if (newFileName.trim() === '') return; // Evita criar arquivo sem nome
    const newFile = `${newFileName}.${newFileLanguage}`;
    setFiles([...files, newFile]);
    setActiveFile(newFile);
    setFileContents({ ...fileContents, [newFile]: '' }); // Inicializa o conteúdo do novo arquivo como vazio
    setNewFileDialogOpen(false); // Fecha o modal de novo arquivo após a criação
  };

  // Função para fechar o modal de novo arquivo
  const closeNewFileDialog = () => {
    setNewFileDialogOpen(false);
  };

  // Função para abrir o modal de confirmação ao fechar um arquivo
  const openCloseFileModal = (file) => {
    setActiveFile(file); // Define o arquivo ativo para fechamento
    setCloseFileModalOpen(true); // Abre o modal de confirmação
  };

  // Função para fechar o modal de confirmação ao fechar um arquivo
  const closeCloseFileModal = () => {
    setCloseFileModalOpen(false); // Fecha o modal de confirmação
    setActiveFile(null); // Limpa o arquivo ativo após o fechamento
  };

  // Função para fechar um arquivo
  const closeFile = () => {
    const updatedFiles = files.filter(f => f !== activeFile);
    setFiles(updatedFiles);
    setCloseFileModalOpen(false); // Fecha o modal após o fechamento do arquivo
    setActiveFile(null); // Limpa o arquivo ativo após o fechamento
    const { [activeFile]: deleted, ...remainingContents } = fileContents;
    setFileContents(remainingContents);
  };

  // Função para salvar o conteúdo do arquivo ativo
  const handleSaveFile = () => {
    if (!activeFile || !fileContents[activeFile]) return;

    const blob = new Blob([fileContents[activeFile]], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = activeFile;
    link.click();
  };

  // Função para atualizar o conteúdo do arquivo ativo
  const handleFileContentChange = (content) => {
    if (activeFile) {
      setFileContents({ ...fileContents, [activeFile]: content });
    }
  };

  return (
    <Box bg={bg} color={color} height="100vh">
      <Flex direction="column" height="100%">
        {/* Cabeçalho */}
        <Flex as="header" px="6" py="4" bg={headerBg} color={headerColor} alignItems="center" justifyContent="space-between">
          <HStack spacing="4">
            <Heading size="md">Wandi Code</Heading>
            <Tooltip label="Toggle Color Mode">
              <IconButton
                icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
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

        {/* Barra de Ferramentas */}
        <HStack as="nav" bg={toolbarBg} color="gray.200" p="4" spacing="4">
          <Tooltip label="Language">
              <Button variant="ghost" size="sm" onClick={openNewFileDialog}><FaCode /></Button>
          </Tooltip>
          <Tooltip label="Save File">
            <IconButton icon={<FaSave />} variant="ghost" size="sm" aria-label="Save File" onClick={handleSaveFile} />
          </Tooltip>
        </HStack>

        {/* Conteúdo Principal */}
        <Flex flex="1">
          {/* Barra Lateral Esquerda */}
          <VStack as="nav" width="100px" bg={sidebarBg} color="gray.200" p="4" spacing="4" _hover={{ bg: sidebarHoverBg }}>
            <Tooltip label="Explorer">
              <Button variant="ghost" size="sm" width="100%" onClick={() => setIsFileExplorerVisible(!isFileExplorerVisible)}><FaFolderOpen /></Button>
            </Tooltip>
          </VStack>

          {/* Explorador de Arquivos */}
          {isFileExplorerVisible && (
            <VStack as="nav" width="200px" bg={sidebarBg} color="gray.200" p="4" spacing="4" _hover={{ bg: sidebarHoverBg }}>
              <Heading size="sm">Files</Heading>
              {files.map((file) => (
                <HStack key={file} spacing="0" width="100%">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveFile(file)}
                    bg={activeFile === file ? sidebarHoverBg : 'transparent'}
                    width="100%"
                    justifyContent="space-between"
                  >
                    {file}
                    <IconButton icon={<FaTimes />} variant="ghost" size="xs" aria-label="Close File" onClick={() => openCloseFileModal(file)} />
                  </Button>
                </HStack>
              ))}
            </VStack>
          )}

          {/* Editor e Saída */}
          <Flex flex="1" direction="column">
            {/* Arquivos Criados */}
            <HStack spacing="4" p="4" bg={toolbarBg} borderBottom="1px solid" borderColor={sidebarHoverBg}>
              {files.map((file) => (
                <HStack key={file} spacing="0">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveFile(file)}
                    bg={activeFile === file ? sidebarHoverBg : 'transparent'}
                  >
                    {file}
                  </Button>
                </HStack>
              ))}
            </HStack>

            {/* Editor */}
            <Box flex="1" p="4" bg={bg} color={color} mx="4" borderRadius="md" boxShadow="md">
              {activeFile ? (
                <>
                  <Heading size="sm">{activeFile}</Heading>
                  <Input
                    mt="2"
                    value={fileContents[activeFile]}
                    onChange={(e) => handleFileContentChange(e.target.value)}
                    placeholder="Type your code here..."
                    size="sm"
                  />
                </>
              ) : (
                <>
                  <Heading size="sm">Welcome to Wandi Code!</Heading>
                  <Text mt="2">Here are some instructions to get started:</Text>
                  <Text mt="2">1. Choose an option from the left sidebar.</Text>
                  <Text mt="2">2. Enter your code in the central editor.</Text>
                  <Text mt="2">3. See the compilation output on the right.</Text>
                </>
              )}
            </Box>
            <Box bg={bg} color={color} p="4" mt="4" borderRadius="md" boxShadow="md">
              {/* Saída da Compilação aqui */}
              <Text fontSize="sm">Saída da Compilação</Text>
            </Box>
          </Flex>
        </Flex>

        {/* Rodapé */}
        <Box as="footer" p="4" bg={headerBg} color={headerColor} textAlign="center">
          <Text fontSize="sm">&copy; {new Date().getFullYear()} Wandi Code. Todos os direitos reservados.</Text>
        </Box>
      </Flex>

      {/* Modal para Novo Arquivo */}
      <Modal isOpen={isNewFileDialogOpen} onClose={closeNewFileDialog} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar Novo Arquivo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Digite o nome do arquivo"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
            />
            <Select
              mt="2"
              value={newFileLanguage}
              onChange={(e) => setNewFileLanguage(e.target.value)}
            >
              <option value="txt">Plain Text</option>
              <option value="js">JavaScript</option>
              <option value="ts">TypeScript</option>
              <option value="py">Python</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={createFile}>
              Criar
            </Button>
            <Button variant="ghost" onClick={closeNewFileDialog}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal para Fechar Arquivo */}
      <Modal isOpen={isCloseFileModalOpen} onClose={closeCloseFileModal} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fechar Arquivo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Deseja realmente fechar o arquivo "{activeFile}"?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeFile}>
              Fechar
            </Button>
            <Button variant="ghost" onClick={closeCloseFileModal}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default App;
