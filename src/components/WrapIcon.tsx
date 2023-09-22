import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as IconOutline from "react-native-heroicons/outline";
import * as IconSolid from "react-native-heroicons/solid";
import Color from "../config/Color";

type IconType = "solid" | "outline";
type IconName = keyof typeof IconOutline | keyof typeof IconSolid;

interface Props {
  iconType?: IconType;
  icon: IconName; 
  strokeWidth?: number;
  size?: number,
  style?: object
}

const WrapIcon = ({ iconType, icon, strokeWidth,  size,style }: Props) => {
  const IconSet = iconType === "solid" ? IconSolid : IconOutline;
  const SelectedIcon = IconSet[icon as keyof typeof IconOutline | keyof typeof IconSolid];

  return (
    <View style={[styles.container, style]}>
      <SelectedIcon strokeWidth={strokeWidth} size={size} color={Color.white} />
    </View>
  );
};

export default WrapIcon;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(248, 250, 252, 0.5)',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
