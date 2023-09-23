import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../config/Color'
import { heightPercentageToDP } from 'react-native-responsive-screen'

interface Props {
  genres: string
}

const Genres = ({genres}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{genres}</Text>
    </View>
  )
}

export default Genres

const styles = StyleSheet.create({
    container:{
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.primary,
        borderRadius: 15,
        paddingHorizontal: 13
    },
    text:{
        color: Color.textSlate300,
        fontSize: heightPercentageToDP(1.8),
        fontWeight: '600'
    }
})