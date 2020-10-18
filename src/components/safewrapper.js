import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

const Safewrapper = ({ children }) => {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView>{children}</SafeAreaView>
    </>
  );
};

export default Safewrapper;
