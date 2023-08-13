// HomeScreen.js
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Card from '../components/Card';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.flex}>
      <Card
        title="Questões"
        description="Prepare-se de forma personalizada respondendo ao banco de questôes!"
        button="Começar"
        navigation={navigation}
      />
      <Card
        title="Personalizar"
        description=""
        button="Acessar"
        navigation={navigation}
      />
      <Card
        title="Métricas"
        description=""
        button="Acessar"
      />
      <Card
        title="Chatbot"
        description="Treine através de trívias geradas pelo nosso chatbot do Telegram!"
        button="Começar"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
