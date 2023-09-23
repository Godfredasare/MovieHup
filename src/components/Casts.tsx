import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Color from "../config/Color";

interface Cast {
  id: number;
  original_name: string;
  character: string;
  profile_path: string | null;
}

interface Props {
  cast: Cast;
}

const Casts = ({ cast }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `https://image.tmdb.org/t/p/w500${cast.profile_path}` }}
      />
      <View style={{ justifyContent: "center", paddingLeft: 10 }}>
        <Text numberOfLines={1} style={styles.cast1}>
          {cast.original_name}
        </Text>
        <Text numberOfLines={1} style={styles.cast2}>
          {cast.character}
        </Text>
      </View>
    </View>
  );
};

export default Casts;

const styles = StyleSheet.create({
  container: {
    width: hp(25),
    height: hp(9),
    backgroundColor: "#263448",
    borderRadius: 15,
    flexDirection: "row",
    overflow: "hidden",
  },
  image: {
    width: hp(10),
    height: hp(9),
  },
  cast1: {
    color: Color.textSlate300,
    fontSize: hp(2),
    fontWeight: "600",
    flexShrink: 1,
    width: "90%",
  },
  cast2: {
    color: Color.grey,
    fontSize: hp(2),
    fontWeight: "600",
    width: "80%",
  },
});
