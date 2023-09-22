import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import WrapIcon from "./WrapIcon";
import Color from "../config/Color";

interface Props {
  premiumImage: ImageSourcePropType;
}



const Primium = ({ premiumImage }: Props) => {
  return (
    <View style={styles.premium}>
      <Image source={premiumImage} style={styles.premiumImage} />
      <LinearGradient
        colors={[
          "transparent",
          "rgba(23, 23, 23, 0.5)",
          "rgba(23, 23, 23, 0.6)",
        ]}
        style={styles.premiumGradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      />
      <View
        style={{
          position: "absolute",
          padding: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 7 }}>
          <Text style={styles.namePremium}>
            Watch favorite movies without any ads
          </Text>
          <View style={styles.button}>
            <Text style={styles.premiumButtonText}>Get premium</Text>
          </View>
        </View>
        <WrapIcon
          icon="XMarkIcon"
          iconType="outline"
          size={hp(2.7)}
          strokeWidth={3}
          style={{ width: hp(4), height: hp(4) }}
        />
      </View>
    </View>
  );
};

export default Primium;

const styles = StyleSheet.create({
  premium: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
  premiumImage: {
    width: "100%",
    height: hp(13),
    borderRadius: 15,
  },
  premiumGradient: {
    width: "100%",
    height: hp(13),
    borderRadius: 15,
    position: "absolute",
  },
  namePremium: {
    color: Color.white,
    width: "60%",
    fontSize: hp(2),
    fontWeight: "600",
  },
  button: {
    backgroundColor: Color.secondary,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    width: hp(18),
    borderRadius: 10,
  },
  premiumButtonText: {
    fontSize: hp(2),
    fontWeight: "600",
    color: Color.white,
  },
});
