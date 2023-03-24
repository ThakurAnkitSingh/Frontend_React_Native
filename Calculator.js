import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CalculatorScreen = () => {


    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');


    const apiUrl = 'https://calculator-react-native.onrender.com';

    const calculate = async () => {
        await axios.post(`${apiUrl}/calculate`, { num1, num2, value })
            .then(response => {
                setResult(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState([
        { label: '+', value: 'addition' },
        { label: '-', value: 'subtraction' },
        { label: '*', value: 'multiplication' },
    ]);


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Number 1:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={(value) => setNum1(Number(value))}
                value={String(num1)}
            />

            <Text style={styles.label}>Number 2:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={(value) => setNum2(Number(value))}
                value={String(num2)}
            />

            <Text style={styles.label}>Operator:</Text>


            <DropDownPicker style={styles.drop}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />

            <Button title="Calculate" style={styles.button} onPress={() => {
                calculate();
            }} />

            <Text style={styles.result}>Result: {result}</Text>
        </View>
    );
}

export default CalculatorScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'black'
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color: 'black'
    },
    dropdownContainer: {
        width: 200,
        height: 40,
        marginVertical: 10,
    },
    dropdown: {
        backgroundColor: '#fafafa',
    },
    dropdownItem: {
        justifyContent: 'flex-start',
    },
    dropDown: {
        backgroundColor: '#fafafa',
    },
    button: {
        marginTop: 50,
        width: '100%',
    },
    result: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30,
        color: 'black'
    },
    drop: {
        marginVertical: 10,
    }
});