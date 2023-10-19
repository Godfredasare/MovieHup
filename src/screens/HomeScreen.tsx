import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Color from "../config/Color";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import {
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import avarta from "../../assets/images/avatar.jpg";
import TrendingMovies from "../components/TrendingMovies";
import Primium from "../components/Primium";
import UpcomingMovies from "../components/UpcomingMovies";
import MoviesList from "../components/MovieList";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <Bars3BottomRightIcon color={Color.white} size={hp(4)} />
            <MagnifyingGlassIcon
              color={Color.white}
              size={hp(3)}
              strokeWidth={4}
            />
          </View>

          <View style={{ gap: 40 }}>
            <Primium premiumImage={avarta} />
            <TrendingMovies />
            <View style={{ gap: 30 }}>
              <MoviesList title="Popular" />
              <UpcomingMovies />
              <MoviesList title="Recent Movies" />
              <MoviesList title="Top Rated Movies" />
              {/* <RecentMovies />
              <TopRatedMovies /> */}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingTop: Platform.OS == "android" ? 35 : null,
    paddingBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },

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
