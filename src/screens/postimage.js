import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Axios from "axios";
import * as FileSystem from "expo-file-system";

const Postimage = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    getPermission();
  }, []);
  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      FileSystem.readAsStringAsync(result.uri, {
        encoding: FileSystem.EncodingType.Base64,
      }).then((response) => postImage(response));
      setImage(result);
    }
  };

  const postImage = async (data) => {
    // console.log(image?.uri, "_____________-");
    const formBody = new FormData();
    formBody.append("image", data);
    try {
      const response = await Axios.post("3/upload", formBody);
      if (response.data) {
        alert("image posted successfully");
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
      {/* {image && (
        <Image
          style={{ width: "100%", height: "30%" }}
          source={{ uri: image }}
        />
      )} */}
    </View>
  );
};

export default Postimage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "lightskyblue",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    borderRadius: 12,
    marginVertical: 12,
  },
  txt: {
    padding: 6,
  },
});
