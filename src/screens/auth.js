import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/actions/auth.action";

const Auth = () => {
  const dispatch = useDispatch();
  //Getting access token and saving it to redux store
  const getAccessToken = async () => {//Getting the access token and stored in the redux store to access it from anywhere
    try {
      const response = await axios.post("oauth2/token", {
        refresh_token: "8af91696ae6404e9262a099a568bc5f429a64e31",
        client_id: "c2cd62f9d13f53a",
        client_secret: "a602b0caffffaff54333ca2922ac5928c2c96a42",
        grant_type: "refresh_token",
      });

      dispatch(saveUser(response.data));
    } catch (error) {
      console.log(error.message);
      alert("Error");
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getAccessToken} style={styles.btn}>
        <Text style={styles.txt}>Press to login with aouth2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Auth;

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
  },
  txt: {
    padding: 6,
  },
});
