import 'react-native-gesture-handler';

import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';

import { hydrateAuth, loadSelectedTheme } from '@/core';
import { RootNavigator } from '@/navigation';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { MedplumClient } from '@medplum/core';

import { MedplumProvider } from './medplum/medplum-context';
import { ClientId } from './screens/login/credentials';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ErrorBoundary } from 'react-error-boundary';
import GlobalErrorScreen from './components/error/global-error-component';

hydrateAuth();
loadSelectedTheme();
SplashScreen.preventAutoHideAsync();

const medplum = new MedplumClient({
  clientId: ClientId,
});

const App = () => {
  if (medplum.isLoading()) {
    return null;
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <MedplumProvider medplum={medplum}>
          <ErrorBoundary FallbackComponent={GlobalErrorScreen}>
            <RootNavigator />
          </ErrorBoundary>
          <FlashMessage position="top" />
        </MedplumProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
