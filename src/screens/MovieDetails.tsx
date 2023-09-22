import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Color from "../config/Color";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import WrapIcon from "../components/WrapIcon";
import avarta from "../../assets/images/avatar.jpg";
import star from "../../assets/images/star.png";

var { width, height } = Dimensions.get("window");

const MovieDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapImage}>
        <View style={{ position: "relative" }}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: "https://image.tmdb.org/t/p/w500//ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
            }}
          />
        </View>

        {/* header */}
        <View style={styles.header}>
          <WrapIcon
            iconType="outline"
            icon="ChevronLeftIcon"
            strokeWidth={2.5}
            size={hp(3.4)}
          />
          <WrapIcon
            iconType="outline"
            icon="HeartIcon"
            size={hp(3.4)}
            strokeWidth={2.5}
          />
        </View>

        {/* gradient */}
        <LinearGradient
          colors={["rgba(12, 17, 23, 2)", "rgba(12, 17, 23, 0)"]}
          style={{
            width,
            height: height * 0.4,
            position: "absolute",
            bottom: 0,
          }}
          start={{ x: 0.5, y: 0.9 }} // Start from the bottom
          end={{ x: 0.5, y: 0 }} // End at the top
        />

        {/* bodu */}
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Spider-Man: Across the Spider-Verse</Text>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text style={styles.star}>
            7.5 <Image source={star} style={{ width: 15, height: 15 }} />
          </Text>

          <Text style={styles.star}>95 mins</Text>
          <Text style={styles.star}>2023-07-26</Text>
        </View>

        
      </View>
    </ScrollView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.background,
    flex: 1,
  },
  wrapImage: {},
  image: {
    width: "100%",
    height: hp(54),
  },
  premiumGradient: {
    width: width,
    height: hp(13),
    borderRadius: 15,
    position: "absolute",
    bottom: "auto",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
    position: "absolute",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: hp(3),
  },
  body: {
    position: "relative",
    top: hp(-20),
    paddingHorizontal: 15,
    gap: 10
  },
  title: {
    color: Color.textSlate300,
    fontSize: hp(3.5),
    fontWeight: "700",
  },
  star: {
    color: Color.grey,
    fontWeight: "500",
  },
});