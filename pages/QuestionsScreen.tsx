import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Question from '../components/Question';

export default function QuestionsScreen() {
  //OBS: Não usei fetch pois a API não está com o CORS habilitado, até usei um proxy para testar mas mesmo assim não funcionou, então deixei o json aqui mesmo
  const questions = {
    "ok": true,
    "msg": "",
    "obj": [
      {
        "prova": "ABC",
        "id_questao": 123,
        "questao": "Adolescente, 15 anos de idade, procura atendimento ambulatorial após internação por cetoacidose diabética, quando foi diagnosticado com diabetes..............., é correto afirmar:",
        "alternativas": [
          { "id": 1, "alternativa": "Alternativa A lorem ipsum dolor sit amet" },
          { "id": 2, "alternativa": "Alternativa B lorem ipsum dolor sit amet" },
          { "id": 3, "alternativa": "Alternativa C lorem ipsum dolor sit amet" },
          { "id": 4, "alternativa": "Alternativa D lorem ipsum dolor sit amet" }
        ]
      },
      {
        "prova": "XYZ",
        "id_questao": 456,
        "questao": "Adolescente, 16 anos de idade, procura atendimento ambulatorial após internação por cetoacidose diabética, quando foi diagnosticado com diabetes..............., é correto afirmar:",
        "alternativas": [
          { "id": 1, "alternativa": "Alternativa A lorem ipsum dolor sit amet" },
          { "id": 2, "alternativa": "Alternativa B lorem ipsum dolor sit amet" },
          { "id": 3, "alternativa": "Alternativa C lorem ipsum dolor sit amet" },
          { "id": 4, "alternativa": "Alternativa D lorem ipsum dolor sit amet" }
        ]
      },
      {
        "prova": "FGH",
        "id_questao": 789,
        "questao": "Adolescente, 17 anos de idade, procura atendimento ambulatorial após internação por cetoacidose diabética, quando foi diagnosticado com diabetes..............., é correto afirmar:",
        "alternativas": [
          { "id": 1, "alternativa": "Alternativa A lorem ipsum dolor sit amet" },
          { "id": 2, "alternativa": "Alternativa B lorem ipsum dolor sit amet" },
          { "id": 3, "alternativa": "Alternativa C lorem ipsum dolor sit amet" },
          { "id": 4, "alternativa": "Alternativa D lorem ipsum dolor sit amet" }
        ]
      }
    ]
  };

  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const apiUrl = 'https://hardworkmedicina.com.br/exemploQuestoes.json';

  return (
    <View>
      <Question data={questions.obj[selectedQuestion]} />
      <View style={styles.selectQuestion}>
        {questions.obj.map((question: any, key: number) => (
            <Text onPress={() => setSelectedQuestion(key)} key={key}
            style={styles.questionNum}>{question.id_questao}</Text>
          ))}
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  selectQuestion: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  questionNum: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  }
});