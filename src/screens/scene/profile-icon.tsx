import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const profileIcon = () => {
  return (
    <View style={styles.container}>
      {/* Content of your screen */}
      <TouchableOpacity style={styles.profileIconContainer}>
        <Image
          source={require('../../images/profile_icon.svg')}
          style={styles.profileIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'lightgray',
  },
  profileIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default profileIcon;
