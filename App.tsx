/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ToastAndroid,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

interface IDices {
  title: string;
  number: number;
  img: string;
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [diceResult, setdiceResult] = useState(0);
  let dices: IDices[] = [
    {
      title: 'D4',
      number: 4,
      img: 'https://cdn.pixabay.com/photo/2022/07/14/18/11/d4-die-7321725_960_720.png',
    },
    {
      title: 'D6',
      number: 6,
      img: 'https://cdn.pixabay.com/photo/2022/07/14/19/07/d6-die-7321815_960_720.png',
    },
    {
      title: 'D8',
      number: 8,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/6sided_dice_%28cropped%29.jpg/220px-6sided_dice_%28cropped%29.jpg',
    },
    {
      title: 'D10',
      number: 10,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ludeka.com.br%2FDD26AM&psig=AOvVaw3adnhLcxz6KNs-JGYUYIV0&ust=1677190233586000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDCttKSqv0CFQAAAAAdAAAAABAI',
    },
    {
      title: 'D100',
      number: 100,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ludeka.com.br%2FDD26AM&psig=AOvVaw3adnhLcxz6KNs-JGYUYIV0&ust=1677190233586000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDCttKSqv0CFQAAAAAdAAAAABAI',
    },
    {
      title: 'D12',
      number: 12,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ludeka.com.br%2FDD26AM&psig=AOvVaw3adnhLcxz6KNs-JGYUYIV0&ust=1677190233586000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDCttKSqv0CFQAAAAAdAAAAABAI',
    },
    {
      title: 'D20',
      number: 20,
      img: 'https://w7.pngwing.com/pngs/172/385/png-transparent-d20-dice-game-nat20-dnd-d-d-critical-hit-crit-polyhedral-rpg-thumbnail.png',
    },
  ];

  let rollTheDice = function (max: number, min: number = 1) {
    for (let index = 0; index < 10; index++) {
      setTimeout(() => {
        setdiceResult(Math.floor(Math.random() * (max + 1 - min) + min));
      }, 75 * index);
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={[styles.header]}>
          <Text
            style={[
              {
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 30,
              },
            ]}>
            ROLL THE DICES
          </Text>
        </View>
        <View style={[{flexDirection: 'row', flex: 4}]}>
          {dices.map(dice => {
            return (
              <View
                key={dice.title}
                onTouchEnd={() => {
                  rollTheDice(dice.number);
                }}
                style={[
                  {
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: 'black',
                    height: 64,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 2,
                  },
                ]}>
                {/* <Image
                  source={{uri: dice.img}}
                  style={{
                    flex: 1,
                    backgroundColor: 'white',
                    width: 64,
                    height: 64,
                  }}
                /> */}
                <Text>{dice.title}</Text>
              </View>
            );
          })}
        </View>
        <View style={[styles.diceResultContainer]}>
          <Text
            style={[
              {
                textAlign: 'center',
                color: 'red',
                fontWeight: 'bold',
                fontSize: 30,
              },
            ]}>
            {diceResult}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
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
  diceContainers: {
    flex: 1,
  },
  diceResultContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 150,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
