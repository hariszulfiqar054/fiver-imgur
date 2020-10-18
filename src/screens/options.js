import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Options = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("postimages")}
        style={styles.btn}
      >
        <Text style={styles.txt}>Post images</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("showimages")}
        style={styles.btn}
      >
        <Text style={styles.txt}>Show Images</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Options;

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
