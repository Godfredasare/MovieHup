import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import WrapIcon from "../components/WrapIcon";
import Color from "../config/Color";

const CastDetails = () => {
  return (
    <ScrollView style={styles.container}>
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
      <View style={{ flex: 1,  marginBottom: 15 }}>
        <View style={styles.wrapImage}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: "https://image.tmdb.org/t/p/w500//ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
            }}
          />
        </View>

        <View style={{ marginTop: hp(2) }}>
          <Text style={styles.name}>Geraldine Singer</Text>
          <Text style={styles.location}>Geraldine Singer</Text>
        </View>

        <View style={styles.details}>
          <View>
            <Text style={styles.gender}>Gender</Text>
            <Text style={styles.genderText}>Male</Text>
          </View>
          <View style={styles.HLine} />
          <View>
            <Text style={styles.gender}>Birthday</Text>
            <Text style={styles.genderText}>01-22-23</Text>
          </View>
          <View style={styles.HLine} />
          <View>
            <Text style={styles.gender}>Known For</Text>
            <Text style={styles.genderText}>Acting</Text>
          </View>
          <View style={styles.HLine} />

          <View>
            <Text style={styles.gender}>Popularity</Text>
            <Text style={styles.genderText}>1548</Text>
          </View>
        </View>

        <View style={{gap: 10, marginTop: hp(3)}}>
          <Text style={styles.bio}>Biography</Text>
          <Text style={styles.bio1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            facere recusandae. Minima ullam, magnam quidem incidunt explicabo
            beatae saepe, eius autem corporis deleniti reprehenderit doloribus
            expedita ipsam vitae ex suscipit? Delectus temporibus ratione
            aliquid, dicta commodi eos quidem ex fuga obcaecati veritatis atque
            non at neque, vel maiores quisquam pariatur alias illo voluptatum
            quaerat culpa harum quos ipsam odit! Explicabo! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Excepturi, facere recusandae.
            Minima ullam, magnam quidem incidunt explicabo beatae saepe, eius
            autem corporis deleniti reprehenderit doloribus expedita ipsam vitae
            ex suscipit? Delectus temporibus ratione aliquid, dicta commodi eos
            quidem ex fuga obcaecati veritatis atque non at neque, vel maiores
            quisquam pariatur alias illo voluptatum quaerat culpa harum quos
            ipsam odit! Explicabo!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CastDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.background,
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: hp(4),
  },
  wrapImage: {
    width: hp(15),
    height: hp(15),
    borderRadius: 100,
    alignSelf: "center",
    marginTop: hp(7),
  },

  image: {
    width: hp(15),
    height: hp(15),
    borderRadius: 100,
  },
  name: {
    fontSize: wp(7),
    alignSelf: "center",
    color: Color.textSlate300,
    fontWeight: "600",
  },
  location: {
    color: Color.grey,
    fontSize: hp(1.9),
    fontWeight: "500",
    alignSelf: "center",
  },
  details: {
    flexDirection: "row",
    width: "100%",
    height: hp(6),
    backgroundColor: "#263448",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginTop: hp(5),
  },
  HLine: {
    width: wp(0.5),
    height: "100%",
    backgroundColor: "grey",
  },
  gender: {
    fontSize: wp(3.5),
    alignSelf: "center",
    color: Color.textSlate300,
    fontWeight: "500",
  },
  genderText: {
    color: Color.grey,
    fontSize: hp(1.2),
    fontWeight: "500",
    alignSelf: "center",
  },
  bio: {
    fontSize: wp(5),
    color: Color.textSlate300,
    fontWeight: "500",
  },
  bio1: {
    color: Color.grey,
    fontSize: hp(2),
    fontWeight: "400",
    alignSelf: "center",
    width: '100%'
  },
});
