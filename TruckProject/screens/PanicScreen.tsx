import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react'

export default function PanicScreen(){
    return (
        <View style={styles.container}>
          <Text>PANIC PANIC</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: 'red', 
        height: 500, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
  });
