import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/logo_hw_branco.png')}
        style={{ width: 120, height: 30 }}></Image>
      <View style={styles.flex}>
        <Text style={[styles.text, styles.margin]}>Home</Text>
        <Image
          source={require('../assets/favicon.png')}
          style={{ width: 30, height: 30 }}></Image>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  margin: {
    marginRight: 20,
  },
  text: {
    color: '#fff',
  }
});