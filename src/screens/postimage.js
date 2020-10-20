import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Axios from 'axios';
import { useSelector } from 'react-redux';

const Postimage = ({ navigation }) => {
	const [image, setImage] = useState(null);
	const access_token = useSelector((state) => state?.user?.access_token);

	useEffect(() => {
		getPermission();
	}, []);
	const getPermission = async () => {
		if (Platform.OS !== 'web') {
			const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
			if (status !== 'granted') {
				alert('Sorry, we need camera roll permissions to make this work!');
			}
		}
	};

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
			// base64: true,
		});

		// console.log(result);

		if (!result.cancelled) {
			console.log(result);
			// console.log(result.base64);
			setImage(result);
		}
	};

	const postImage = async () => {
		// console.log(image?.uri, "_____________-");
		const formBody = new FormData();
		formBody.append('image', {
			name: 'chatImg.jpg',
			type: 'image/jpeg',
			uri: image?.uri,
		});
		try {
			const response = await Axios({
				method: 'POST',
				url: '3/upload',
				data: formBody,
				headers: { Authorization: `Bearer ${access_token}` },
			});
			if (response.data) {
				alert('image posted successfully');
				setImage(null);
				navigation.goBack();
			}
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={pickImage} style={styles.btn}>
				<Text style={styles.txt}>Post images</Text>
			</TouchableOpacity>
			{image && <Image style={{ width: '100%', height: '30%' }} source={{ uri: image?.uri }} />}
			{image && (
				<TouchableOpacity onPress={postImage} style={styles.btn}>
					<Text style={styles.txt}>Post images</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default Postimage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn: {
		backgroundColor: 'lightskyblue',
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5,
		borderRadius: 12,
		marginVertical: 12,
	},
	txt: {
		padding: 6,
	},
});
