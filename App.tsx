import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './app/navigation/RootNavigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
