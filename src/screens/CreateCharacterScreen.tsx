import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface ICharacter {
  name: string;
  age?: string;
  languages?: string[];
}

function CreateCharacterScreen(): JSX.Element {
  const [character, setCharacter] = useState<ICharacter>({
    name: 'novato',
  });

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function changeHandler(text: string, fieldName: string): void {
    setCharacter(oldChar => {
      return {...oldChar, ...{[fieldName]: text}};
    });
  }

  return (
    <View style={[styles.pageContainer, backgroundStyle]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Tell me more about you {character.name}!
        </Text>
      </View>
      <View style={styles.inputsWrapper}>
        <View style={styles.textInputGroup}>
          <Text style={styles.textInputLabel}>Name:</Text>
          <TextInput
            placeholder="Insert Name"
            placeholderTextColor="#888888"
            value={character.name}
            onChangeText={text => {
              changeHandler(text, 'name');
            }}
            style={styles.textInput}
          />
        </View>
        <View style={styles.textInputGroup}>
          <Text style={styles.textInputLabel}>Age:</Text>
          <TextInput
            placeholder="Insert Age"
            placeholderTextColor="#888888"
            value={character.age}
            onChangeText={text => {
              changeHandler(text, 'age');
            }}
            keyboardType="number-pad"
            style={styles.textInput}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {flex: 1},
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {fontSize: 30},
  inputsWrapper: {flex: 1, flexDirection: 'row'},
  textInputGroup: {flex: 1, paddingHorizontal: 10, flexDirection: 'column'},
  textInputLabel: {fontSize: 18, paddingBottom: 5},
  textInput: {
    flex: 1,
    maxHeight: 60,
    backgroundColor: 'white',
    color: 'black',
  },
});

export default CreateCharacterScreen;
