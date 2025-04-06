import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/Welcome/WelcomeScreen';
import CreateIdentity from './src/screens/Identity/CreateIdentityScreen';
import ImportIdentity from './src/screens/Identity/ImportIdentityScreen';
import Access from './src/screens/Access/AccessScreen';
import AccessResult from './src/screens/Access/AccessResultScreen';
import BottomTabs from './src/navigation/BottomTabs';
import ImportCredential from './src/screens/Credential/ImportCredentialScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={BottomTabs} />
        <Stack.Screen name="CreateIdentity" component={CreateIdentity} />
        <Stack.Screen name="ImportIdentity" component={ImportIdentity} />
        <Stack.Screen name="Access" component={Access} />
        <Stack.Screen name="AccessResult" component={AccessResult} />
        <Stack.Screen name="ImportCredential" component={ImportCredential} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
