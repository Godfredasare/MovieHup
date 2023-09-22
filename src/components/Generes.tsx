import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../config/Color'

const Generes = () => {
  return (
    <View style={styles.container}>
      <Text>Generes</Text>
    </View>
  )
}

export default Generes

const styles = StyleSheet.create({
    container:{
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.primary
    }
})