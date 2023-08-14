import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Card({ title, description, button, navigation }: any) {
  return (
    <LinearGradient style={styles.card}
      colors={['rgb(130,18,180)', 'rgba(255,55,122,1)']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.cardHeader}>
        <Image source={require('../assets/favicon.png')} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(title)}
      >
        <Text style={{fontWeight: 'bold'}}>{button}</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    margin: 10,
    padding: 10,
    flexDirection: 'column',
    width: '90%',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 14,
    wordWrap: 'break-word',
    color: 'white',
  },
  button: {
    backgroundColor: '#F6F6F6',
    width: '30%',
    padding: 10,
    borderRadius: 30,
    alignSelf: 'flex-end',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
});