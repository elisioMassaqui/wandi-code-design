// components/EditorPane.js

import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react'; // Example component for Monaco Editor

const EditorPane = () => {
  const activeFile = null; // Replace with actual active file state

  return (
    <Box flex="1" p="4" bg="gray.50" color="gray.800" mx="4" borderRadius="md" boxShadow="md">
      {activeFile ? (
        <MonacoEditor /> /* Replace with your Monaco Editor component */
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

export default EditorPane;
