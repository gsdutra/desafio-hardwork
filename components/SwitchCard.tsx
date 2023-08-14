import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

const SwitchCard = ({ text }: any) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 5,
    borderColor: '#000',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default SwitchCard;
