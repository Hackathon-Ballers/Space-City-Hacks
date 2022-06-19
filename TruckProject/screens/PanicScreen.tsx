import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react'

var color = true;

export default function PanicScreen(){
    if(color){
    return (
        <View style={styles.container}>
          <Text style={{fontSize:100, color:'black'}}>PANIC PANIC</Text>
        </View>
    );
    } else {
        return (
            <View style={styles.container}>
              <Text style={{fontSize:100, color:'white'}}>PANIC PANIC</Text>
            </View>
        );
    }
}

setInterval(() => color = !color, 250)

const styles = StyleSheet.create({
    container: { 
        backgroundColor: 'red', 
        flex:10,
        alignItems: 'center', 
        justifyContent: 'center' 
    }
  });
