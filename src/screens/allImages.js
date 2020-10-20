import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AllImages = () => {
	const access_token = useSelector((state) => state?.user?.access_token);
	console.log(access_token);
	const [data, setData] = useState(null);
	useEffect(() => {
		getData();
	}, []);
	const getData = async () => {
		try {
			const response = await axios({
				method: 'GET',
				url: '3/account/me/images',
				headers: { Authorization: `Bearer ${access_token}` },
			});
			setData(response?.data);
		} catch (error) {
			alert(error.message);
		}
	};
	return (
		// <View style={{ flex: 1 }}>
		<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
			{data?.data?.map((img) => (
				<View style={styles.imgContainer}>
					<Image
						style={{ flex: 1 }}
						source={{
							uri: img?.link,
						}}
					/>
				</View>
			))}
		</ScrollView>
		// </View>
	);
};

export default AllImages;

const styles = StyleSheet.create({
	imgContainer: {
		width: '100%',
		height: '30%',
		marginVertical: 12,
	},
});
