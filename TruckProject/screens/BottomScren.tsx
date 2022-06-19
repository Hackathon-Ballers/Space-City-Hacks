import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react'

export default function BottomScreen(props){
    return (
        <>
        <View style={styles.container}>
          <Text style={{fontSize:50}}>Heart Rate: {props.count}</Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 9,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
