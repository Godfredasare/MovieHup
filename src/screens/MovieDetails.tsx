import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  
} from "react-native";
import React, { useEffect, useState } from "react";
import Color from "../config/Color";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import WrapIcon from "../components/WrapIcon";
import star from "../../assets/images/star.png";
import Genres from "../components/Genres";
import Button from "../components/Button";
import {
  ArrowDownTrayIcon,
  ShareIcon,
} from "react-native-heroicons/outline";
import Casts from "../components/Casts";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  fetchMoviesCreditDetails,
  fetchMoviesDetails,
} from "../service/fetchApi";
import { ScreenNavigationProp, StackNavigatorParamList } from "../navigation/appNavigation";

var { width, height } = Dimensions.get("window");


interface Genres {
  id: number;
  name: string;
}

export interface MovieDetailsInterface {
  id: number;
  overview: string;
  poster_path: string;
  original_title: string;
  release_date: string;
  genres: Genres[];
  runtime: number;
}

interface Casts {
  id: number
  original_name: string;
  profile_path: string;
  character: string;
}

export interface MovieCastsInterface {
  id: number;
  cast: Casts[];
}

interface Params {
  params: {id: number},
  key: string,
  path?: string | undefined,
  name: string
}



const MovieDetails = () => {
  const navigation = useNavigation();
  const {  params  } = useRoute<Params>();
  const [movieDetails, setMovieDetails] =
    useState<MovieDetailsInterface | null>(null);
  const [cast, setCast] = useState<Casts[]>([]);

  const getMovieDetails = async () => {
    const res = await fetchMoviesDetails(params.id);
    try {
    } catch (error) {
      console.log("Error fetching movie details", error);
    }
    setMovieDetails(res.data);
  };

  const getMovieCasts = async () => {
    const res = await fetchMoviesCreditDetails(params.id);
    try {
      setCast(res.data.cast);
    } catch (error) {
      console.log("Error fetching casts", error);
    }
  };

  useEffect(() => {
    getMovieDetails();
    getMovieCasts();
  }, [params.id]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapImage}>
        <View style={{ position: "relative" }}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`,
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
            onPress={() => navigation.goBack()}
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
          start={{ x: 0.5, y: 0.9 }}
          end={{ x: 0.5, y: 0 }}
        />

        {/* body */}
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{movieDetails?.original_title}</Text>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text style={styles.star}>
            7.5 <Image source={star} style={{ width: 15, height: 15 }} />
          </Text>

          <Text style={styles.star}>
            {"|" +
              "  " +
              movieDetails?.runtime +
              "mins" +
              "  " +
              "|" +
              "  " +
              movieDetails?.release_date}
          </Text>
        </View>

        {/* genres */}
        <ScrollView
          horizontal
          contentContainerStyle={{ gap: 10, paddingVertical: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          {movieDetails?.genres.map((genres) => (
            <View key={genres.id}>
              <Genres genres={genres.name} />
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 17,
          }}
        >
          <Button />
          <View style={styles.play}>
            <ArrowDownTrayIcon strokeWidth={2} color={Color.textSlate300} />
          </View>
          <View style={styles.play}>
            <ShareIcon strokeWidth={2} color={Color.textSlate300} />
          </View>
        </View>

        {/* description */}
        <Text style={styles.description}>{movieDetails?.overview}</Text>

        {/* top casts */}

        <View>
          <Text style={styles.castText}>Top Cast</Text>
          <ScrollView
            horizontal
            contentContainerStyle={{ gap: 10 }}
            showsHorizontalScrollIndicator={false}
          >
            {cast.map((casts) => (
              <View key={casts.id}>
                <Casts cast={casts} />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* similar movies */}
        <View>
          <Text style={styles.castText}>Top Cast</Text>
          {/* <MoviesList
                // moviesData={rated}
                title="Top Rated Movies"
                // handleNavigation={(id: number) =>
                //   navigation.navigate("Details", { id })
                // }
              /> */}
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
    gap: 15,
  },
  title: {
    color: Color.textSlate300,
    fontSize: hp(3.5),
    fontWeight: "700",
    width: "80%",
  },
  star: {
    color: Color.grey,
    fontWeight: "500",
  },
  play: {
    borderWidth: 1,
    borderColor: Color.textSlate300,
    padding: 7,
    borderRadius: 10,
  },
  castText: {
    color: Color.textSlate300,
    fontSize: hp(2.5),
    fontWeight: "500",
    paddingBottom: 15,
  },
  description: {
    color: Color.grey,
    fontSize: hp(1.9),
    fontWeight: "500",
  },
});
