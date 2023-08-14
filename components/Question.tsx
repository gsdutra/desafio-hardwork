import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { useState } from 'react';

export default function Question({ data, visible }: any) {
  const [selectedAnswer, setSelectedAnswer] = useState(undefined);

  return (
    <View style={visible? styles.body:{display: 'none'}}>
      <Text style={styles.question}>{data.questao}</Text>
      <View style={styles.alternatives}>
        {data.alternativas.map((alternative: any) => (
          <TouchableHighlight
            style={alternative.id === selectedAnswer ? styles.selectedAlternativeCard : styles.alternativeCard}
            key={alternative.id}
            onPress={() => setSelectedAnswer(alternative.id)}>
            <Text style={alternative.id === selectedAnswer ? {color: '#ddd'} : {}}>{alternative.alternativa}</Text>
          </TouchableHighlight>
        ))}
      </View>
      <Text
        style={styles.button}
      >
        Confirmar resposta
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    padding: 20
  },
  question: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 18
  },
  alternatives: {

  },
  alternativeCard: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  selectedAlternativeCard: {
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#F6F6F6',
    width: '70%',
    padding: 10,
    borderRadius: 30,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
});