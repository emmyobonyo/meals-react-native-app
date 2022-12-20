import React from 'react'
import { View, Pressable, Text, StyleSheet, Platform } from 'react-native'

// Creating a tile item

function CategoryGridTile({ title, color }) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: '#ccc' }} // a ripple effect when a buttom is pressed on android
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          {/* This bg color is very important in displaying the border */}
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150, // This height here is very important
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white', //To have a shadow on iOS we need a background color
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // to ensure that the ripple effect does not go beyond the rounded corners
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
    backgroundColor: 'black',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    borderRadius: 8,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})
