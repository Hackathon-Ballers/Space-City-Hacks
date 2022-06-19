import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

let heartRate = 0;

async function getData(){
  let heartRate = await fetch("http://192.168.1.167").then(response => response.json())
  console.log(heartRate['bpm'])
}

setInterval(getData, 1000);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{heartRate}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
