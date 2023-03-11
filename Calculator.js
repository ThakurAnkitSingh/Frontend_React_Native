import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CalculatorScreen = () => {


    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');


    const apiUrl = 'https://render-calculator.onrender.com';

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


            <DropDownPicker
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
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
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
    },
});










// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';

// export default function Calculator() {
//     const [num1, setNum1] = useState(0);
//     const [num2, setNum2] = useState(0);
//     const [operator, setOperator] = useState('+');
//     const [result, setResult] = useState(0);

//     // const calculateResult = async () => {
//     //     const url = 'https://your-heroku-app-url.com/calculate'; // replace with your own URL
//     //     const response = await fetch(url, {
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify({
//     //             num1,
//     //             num2,
//     //             operator,
//     //         }),
//     //     });
//     //     const data = await response.json();
//     //     setResult(data.result);
//     // };

//     return (
//         <View>
//             <Text>Number 1:</Text>
//             <TextInput
//                 keyboardType="numeric"
//                 onChangeText={(value) => setNum1(Number(value))}
//                 value={String(num1)}
//             />

//             <Text>Number 2:</Text>
//             <TextInput
//                 keyboardType="numeric"
//                 onChangeText={(value) => setNum2(Number(value))}
//                 value={String(num2)}
//             />

//             <Text>Operator:</Text>

//             <Button title="Calculate"  />
//             {/* onPress={calculateResult} */}

//             <Text>Result: {result}</Text>
//         </View>
//     );
// }

