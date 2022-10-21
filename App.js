import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import SearchScreen from './screens/searchScreen';
import SneakerDetailScreen from './screens/sneakerDetailScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <View style={{ height: '100%' }}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Search Sneaker' }} />
          <Stack.Screen name="Sneaker" component={SneakerDetailScreen} options={({ route }) => ({ title: route.params.data.shoeName })} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}