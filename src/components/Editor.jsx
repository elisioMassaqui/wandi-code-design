// File: Editor.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react';

const EditorComponent = ({
  activeFile,
  fileContents,
  fileLanguages,
  handleFileContentChange,
  bg,
  color,
  toolbarBg,
}) => {
  return (
    <Box flex="1" direction="column">
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

      <Box flex="1" p="4" bg={bg} color={color} mx="4" borderRadius="md" boxShadow="md">
        {activeFile ? (
          <Editor
            language={fileLanguages[activeFile]}
            theme="vs-dark"
            value={fileContents[activeFile]}
            onChange={handleFileContentChange}
          />
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
        <Text fontSize="sm">Compilation Output</Text>
      </Box>
    </Box>
  );
};

export default EditorComponent;
