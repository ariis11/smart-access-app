import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TabRoutes } from '../types/navigation';
import { View, Text } from 'react-native';
import HomeScreen from '../screens/Home/HomeScreen';
import HistoryScreen from '../screens/History/HistoryScreen';

const Tab = createBottomTabNavigator();

function ProfilePlaceholder() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile screen coming soon...</Text>
        </View>
    );
}

export default function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }: { route: { name: TabRoutes } }) => {
                const icons: Record<TabRoutes, 'home-outline' | 'time-outline' | 'person-outline'> = {
                    History: 'time-outline',
                    Home: 'home-outline',
                    Profile: 'person-outline',
                };

                return {
                    tabBarIcon: ({ color, size }: { color: string; size: number }) => (
                        <Ionicons
                            name={icons[route.name as TabRoutes] || 'ellipse-outline'}
                            size={size}
                            color={color}
                            accessibilityLabel={`${route.name} tab`}
                            testID={`${route.name}-tab-icon`}
                        />
                    ),
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                };
            }}
        >
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfilePlaceholder} />
        </Tab.Navigator>
    );
}
