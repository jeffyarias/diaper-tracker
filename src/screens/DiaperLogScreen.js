import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

export default function DiaperLogScreen() {
  const [wipesLow, setWipesLow] = useState(false);

  const handleLog = async (type) => {
    const timestamp = new Date().toISOString();
    const newLog = { type, timestamp, wipesLow };

    try {
      const stored = await AsyncStorage.getItem('diaper_logs');
      const logs = stored ? JSON.parse(stored) : [];
      logs.push(newLog);
      await AsyncStorage.setItem('diaper_logs', JSON.stringify(logs));

      Alert.alert('Logged!', `${type} diaper logged successfully.`);
      setWipesLow(false);
    } catch (error) {
      console.error('Failed to save log:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/baby-background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <LottieView
          source={require('../../assets/animations/baby.json')}
          autoPlay
          loop
          style={styles.animation}
        />

        <Text style={styles.title}>👶 Baby Log Center</Text>

        <TouchableOpacity style={styles.button} onPress={() => handleLog('wet')}>
          <Text style={styles.buttonText}>Log Wet Diaper</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handleLog('dirty')}>
          <Text style={styles.buttonText}>Log Dirty Diaper</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, wipesLow && { backgroundColor: 'orange' }]}
          onPress={() => setWipesLow(!wipesLow)}
        >
          <Text style={styles.buttonText}>
            {wipesLow ? 'Wipes Marked as Low' : '🧻 Mark Wipes as Low'}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    //backgroundColor: 'rgba(255, 255, 255, 0.85)', // optional soft white overlay
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // soft overlay
  },
  title: {
    fontFamily: 'Baloo2_700Bold',
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  animation: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#80d4ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
