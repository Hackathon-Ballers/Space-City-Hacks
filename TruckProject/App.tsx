import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Component } from 'react'
//import Sound from 'react-native-sound';
import CalibrateScreen from './screens/CalibrateScreen';
import HomeScreen from './screens/HomeScreen';
import PanicScreen from './screens/PanicScreen';
import BottomScreen from './screens/BottomScren';

var globalTime = 10;
var startTime = 0;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heartRate: 0,
      calibrating: true,
      count: 0,
      totalHeartBeat: 0,
      avgHeartBeat: 0,
      occurrencesUnderThreshold: 0,
      panic: false,
      panicSound: null
    }
  }
  render() {
    if (this.state.calibrating === false && !this.state.panic) {
      return (
        <View style={{flex: 1}}>
          <HomeScreen></HomeScreen>
          <BottomScreen count={this.state.heartRate}></BottomScreen>
        </View>
      );
    }
    else if (this.state.calibrating && !this.state.panic) {
      return (
        <CalibrateScreen count={this.state.count} startTime={startTime} endTime={globalTime}></CalibrateScreen>
      )
    } else if (this.state.panic) {
      return (
        <View style={{flex: 1}}>
        <PanicScreen></PanicScreen>
        <BottomScreen count={this.state.heartRate}></BottomScreen>
        </View>
      )
    }
  }
  getHeartRate = async () => {
    // If you're using the fake development server, use that URL HERE!
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
    let response = await fetch("http://192.168.1.167").then(response => response.json())
    this.setState({ heartRate: response['bpm'] })
    console.log(this.state.count)
    console.log("hr: " + this.state.heartRate);
    if (this.state.count > startTime && this.state.count < globalTime) {
      this.getAverage()
    } else if (this.state.count >= globalTime) {
      this.setState({ calibrating: false })
      let threshold = this.state.avgHeartBeat - 6
      console.log("threshold", threshold)
      if (this.state.heartRate <= threshold) {
        console.log("Under threshold")
        this.setState({ occurrencesUnderThreshold: this.state.occurrencesUnderThreshold + 1 })
      }
      else {
        this.setState({ occurrencesUnderThreshold: 0 })
      }
      console.log("under threshold: ", this.state.occurrencesUnderThreshold)
    }

    if (this.state.occurrencesUnderThreshold > 10) {
      this.setState({ panic: true })
    }
  }

  getAverage() {
    let totalHeartBeats = this.state.totalHeartBeat
    let count = this.state.count
    let calcAvg = totalHeartBeats / count
    this.setState((prevState, props) => ({
      totalHeartBeat: prevState.totalHeartBeat + prevState.heartRate
    }))
    console.log("avg " + this.state.totalHeartBeat / (globalTime - startTime))
    this.setState({ avgHeartBeat: this.state.totalHeartBeat / (globalTime - startTime) });
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
