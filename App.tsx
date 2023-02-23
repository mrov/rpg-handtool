import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Dices from './src/Dices';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [diceResult, setdiceResult] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={[styles.header]}>
          <Text style={[styles.rollText]}>ROLL THE DICES</Text>
        </View>
        <View style={[styles.dicesContainer]}>
          <Dices setDiceResult={setdiceResult} />
        </View>
        <View style={[styles.diceResultContainer]}>
          <Text style={[styles.diceResultText]}>{diceResult}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    height: 250,
  },
  rollText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  dicesContainer: {flexDirection: 'row', flex: 4},
  diceResultContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 150,
  },
  diceResultText: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default App;
