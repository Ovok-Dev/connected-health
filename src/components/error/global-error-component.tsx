import { signOut } from '@/core';

import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GlobalErrorScreen: React.FC = ({}) => {
  const handleFetalError = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Oops! Something went wrong.</Text>
      <Button title="Back to Login" onPress={handleFetalError} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color
  },
  errorText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red', // Error text color
  },
});

export default GlobalErrorScreen;
