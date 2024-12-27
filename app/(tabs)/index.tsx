import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value: string) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const calculateResult = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const clearExpression = () => {
    setExpression("");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.calculatorContainer}>
        <TextInput
          style={styles.input}
          value={expression}
          editable={false}
          placeholder="0"
          placeholderTextColor="#000"
        />
        <View style={styles.buttonGrid}>
          {/* First row */}
          <TouchableOpacity style={styles.button} onPress={clearExpression}>
            <Text style={styles.buttonTextBlue}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={clearExpression}>
            <Text style={styles.buttonTextBlue}>⌫</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("%")}>
            <Text style={styles.buttonTextBlue}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("/")}>
            <Text style={styles.buttonTextOrange}>÷</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("7")}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("8")}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("9")}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("*")}>
            <Text style={styles.buttonTextOrange}>×</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("4")}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("5")}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("6")}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("-")}>
            <Text style={styles.buttonTextOrange}>−</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("1")}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("2")}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("3")}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("+")}>
            <Text style={styles.buttonTextOrange}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={clearExpression}>
            <Text style={styles.buttonTextOrange}>↺</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick("0")}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonClick(".")}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.equaltoButton} onPress={calculateResult}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>Calculator by Aryan</Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const buttonSize = (windowWidth - 50) / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  calculatorContainer: {
    flex: 1,
    maxWidth: 400,
    alignSelf: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
    textAlign: 'right',
    fontSize: 40,
    fontWeight: '300',
    padding: 20,
    paddingTop:180,
    marginBottom: 10,
    color:"#FFFFFF"
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
  button: {
    backgroundColor: '#2A2A2A',
    width: buttonSize - 10,
    height: buttonSize - 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  equaltoButton:{
    backgroundColor: '#00FF00',
    width: buttonSize - 10,
    height: buttonSize - 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  buttonTextBlue: {
    fontSize: 24,
    color: '#00FF00',
  },
  buttonTextOrange: {
    fontSize: 24,
    color: '#808080',
  },
  buttonTextGreen: {
    fontSize: 24,
    color: '#00FF00',
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    color: '#00FF00',
  },
});

export default Calculator;
