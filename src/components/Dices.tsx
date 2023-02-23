import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {IDice} from '../interfaces/IDice';

type incomingParams = {
  setDiceResult: Function;
};

function Dices({setDiceResult}: incomingParams): JSX.Element {
  let dices: IDice[] = [
    {
      title: 'D4',
      number: 4,
    },
    {
      title: 'D6',
      number: 6,
    },
    {
      title: 'D8',
      number: 8,
    },
    {
      title: 'D10',
      number: 10,
    },
    {
      title: 'D100',
      number: 100,
    },
    {
      title: 'D12',
      number: 12,
    },
    {
      title: 'D20',
      number: 20,
    },
  ];

  const rollTheDice = function (max: number, min: number = 1) {
    for (let index = 0; index < 10; index++) {
      setTimeout(() => {
        setDiceResult(Math.floor(Math.random() * (max + 1 - min) + min));
      }, 75 * index);
    }
  };

  return (
    <View style={styles.diceWrapper}>
      {dices.map(dice => {
        return (
          <View
            key={dice.title}
            onTouchEnd={() => {
              rollTheDice(dice.number);
            }}
            style={[styles.dice]}>
            <Text>{dice.title}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  diceWrapper: {flex: 1, flexDirection: 'row'},
  dice: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
});

export default Dices;
