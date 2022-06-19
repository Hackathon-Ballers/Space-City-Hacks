import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react'

export default function HomeScreen(){
    return (
        <View style={styles.container}>
          <Text style={{fontSize:50, color:'white'}}>You are okay :)</Text>
          <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 10,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
