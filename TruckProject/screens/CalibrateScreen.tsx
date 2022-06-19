import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react'

export default function CalibrateScreen(props){
  if(props.count < props.startTime){
    return (
        <View style={styles.container}>
          <Text>Please put your finger on the sensor.</Text>
          <Text>Calibration will begin in {props.startTime - props.count} seconds.</Text>
        </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Calibrating... {props.endTime - props.count} seconds remaining.</Text>
      </View>
  );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
