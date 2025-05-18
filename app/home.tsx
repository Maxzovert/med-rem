import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const home = () => {
  return (  
    <View style={styles.continer}>
        <Text style={styles.title}>Hellooooo baaaabuuuuu kaiseee hoooo</Text>
        <Text style={styles.title}>Dekho maine kyaaa banaya</Text>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
    continer: {
      flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        marginBottom: 10,
        textShadowColor: "rgba(0,0,0,0.2)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
        textAlign: 'center',
        marginTop: 20
      },

})

