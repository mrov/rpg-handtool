import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import Dices from '../components/Dices';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function RollDicesScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [diceResult, setdiceResult] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const allHeightStyle = () => {
    return {
      height: Dimensions.get('window').height,
    };
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={[allHeightStyle(), {flex: 1, flexDirection: 'column'}]}>
          <View style={[styles.header]}>
            <Text style={[styles.rollText]}>ROLL THE DICES</Text>
          </View>
          <View style={[styles.dicesContainer]}>
            <Dices setDiceResult={setdiceResult} />
          </View>
          <View style={[styles.diceResultContainer]}>
            <Text style={[styles.diceResultText]}>{diceResult}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    maxHeight: 250,
    justifyContent: 'center',
  },
  rollText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  dicesContainer: {
    flex: 1,
    maxHeight: 200,
    flexDirection: 'row',
  },
  diceResultContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  diceResultText: {
    flex: 1,
    textAlign: 'center',
    color: 'tomato',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default RollDicesScreen;
