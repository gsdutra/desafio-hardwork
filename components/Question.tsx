import { StyleSheet, View, Text } from 'react-native';

export default function Question({data}: any) {
  return (
  <View style={styles.body}>
    <Text style={styles.question}>{data.questao}</Text>
    <View style={styles.alternatives}>
      {data.alternativas.map((alternative: any) => (
        <View style={styles.alternativeCard} key={alternative.id}>
          <Text>{alternative.alternativa}</Text>
        </View>
      ))}
      </View>
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
  confirmButton: {

  }
});