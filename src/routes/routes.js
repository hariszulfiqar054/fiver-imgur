import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from '../screens/auth';
import { useSelector } from 'react-redux';
import Postimage from '../screens/postimage';
import AllImages from '../screens/allImages';
import Options from '../screens/options';

// This screen code is all about stack navigation , here i implement the logic if the user is availble then return the other screen otherwise return the auth screens
const Stack = createStackNavigator();
const Routes = () => {
	const user = useSelector((state) => state?.user);

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{user === null ? (
					<Stack.Screen name="auth" component={Auth} options={{ headerShown: false }} />
				) : (
					<>
						<Stack.Screen name="option" component={Options} options={{ headerShown: false }} />

						<Stack.Screen name="postimages" component={Postimage} options={{ headerShown: false }} />
						<Stack.Screen name="showimages" component={AllImages} options={{ headerShown: false }} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;

const styles = StyleSheet.create({});
