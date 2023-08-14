import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SwitchCard from '../components/SwitchCard';
import Slider from '@react-native-community/slider';

export default function PersonalizeScreen() {
  const [value, setValue] = useState(0)
  const handleValueChange = (event: any) => {
    event.preventDefault();
    setValue(event.target.value);
  };
  return (
    <LinearGradient
      colors={['rgb(130,18,180)', 'rgba(255,55,122,1)']}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}
    >
      <View style={styles.card}>
        <Text style={styles.title}> Definir meta Diária de questões </Text>
        <View style={styles.sliderContainer}>
          <Slider
            style={{ width: '70%', height: 40 }}
            value={value}
            onValueChange={setValue}
            minimumValue={0}
            maximumValue={200}
            step={1}
          ></Slider>
          <Text style={styles.smallCard}> {value} </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}> Questões por Grandes áreas: </Text>
        <SwitchCard text='Clinica médica' />
        <SwitchCard text='Cirurgia geral' />
        <SwitchCard text='Pediatria' />
        <SwitchCard text='Ginecologia e obstétrica' />
        <SwitchCard text='Medicina preventiva' />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}> Questões de provas específicas </Text>
        <View style={styles.smallCard}>
          <Text style={styles.p}> Busque provas </Text>
          <Text style={styles.italic}> Exemplo: USP, SUS-SP, SURCE... </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}> Questões de temas específicos </Text>
        <View style={styles.smallCard}>
          <Text style={styles.p}> Busque temas </Text>
          <Text style={styles.italic}> Asma, Tuberculose, Pneumonia... </Text>
        </View>
      </View>
      <Text style={styles.button}> Começar </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  gradient: {
    flex: 1,
  },
  smallCard: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderColor: '#000',
    borderWidth: 1,

  },
  p: {
    fontSize: 16,
  },
  italic: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#555',
  },
  button: {
    backgroundColor: '#F6F6F6',
    width: '30%',
    padding: 10,
    borderRadius: 30,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  }
});