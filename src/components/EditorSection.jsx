import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react';

const EditorSection = ({ activeFile, fileLanguages, fileContents, handleFileContentChange }) => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const color = useColorModeValue('gray.800', 'white');

  return (
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
  );
};

export default EditorSection;
