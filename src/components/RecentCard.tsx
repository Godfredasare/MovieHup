import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Color from "../config/Color";

interface Recent {
  id: number;
  title?: string;
  overview?: string;
  poster_path: string;
}

interface Props {
  item: Recent;
  style?: object;
}
const RecentCard = ({ item, style }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={[styles.image, style]}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
      />
      {/* <View style={styles.new}>
        <Text style={styles.text}>NEW</Text>
      </View> */}
    </View>
  );
};

export default RecentCard;

const styles = StyleSheet.create({
  container: {
    width: hp(13),
    height: hp(18),
    borderRadius: 10,
  },
  image: {
    width: hp(13),
    height: hp(18),
    borderRadius: 8,
    //   overflow: 'hidden',

  },
  new: {
    // position: "relative",
    alignSelf: "flex-end",
    backgroundColor: Color.secondary,
    transform: [{ rotate: "35deg" }],
      overflow: 'scroll',
    alignItems: 'center',
    // borderTopEndRadius: 10,
    zIndex: 0,
    width: hp(5),
    height: hp(3),
    bottom: 30
  },
  text: {
    fontSize: hp(1.1),
  },
});
