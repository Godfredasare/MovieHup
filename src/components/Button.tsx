import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Color from "../config/Color";
import { PlayIcon } from "react-native-heroicons/solid";

const Button = () => {
  return (
    <View style={styles.button}>
      <PlayIcon color={Color.textSlate300} />
      <Text style={styles.premiumButtonText}>Get premium</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.secondary,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: hp(27),
    borderRadius: 10,
    flexDirection: 'row',
    gap: 5
  },
  premiumButtonText: {
    fontSize: hp(2.2),
    fontWeight: "600",
    color: Color.white,
  },
});
