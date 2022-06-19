import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react'

// async function getData() {
//   // If you're using the fake development server, use that URL HERE!
//   let response = await fetch("http://192.168.1.33").then(response => response.json())
//   heartRate = response['bpm']
//   // console.log(heartRate)
// }

// setInterval(getData, 1000);
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { heartRate: 0 }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.heartRate}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  getHeartRate = async () => {
    // If you're using the fake development server, use that URL HERE!
    let response = await fetch("http://192.168.1.33").then(response => response.json())
    this.setState({ heartRate: response['bpm'] })
  }
  componentDidMount() {
    console.log("mounted")
    setInterval(this.getHeartRate, 1000)
  }
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
