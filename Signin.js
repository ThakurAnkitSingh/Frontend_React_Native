import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { firebaseAuth } from "./firebase";
import validator from 'validator';


const SigninScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const handleSignIn = async () => {
        try {

            if (!validator.isEmail(email)) {
                alert('Invalid email', 'Please enter a valid email address.');
            } else if (!validator.isStrongPassword(password)) {
                alert(
                    'Weak password',
                    'Please enter a strong password (minimum 8 characters and at least 1 letter and 1 number).'
                );
            }
            else {
                await createUserWithEmailAndPassword(firebaseAuth, email, password);
                alert("Successfully Created Account");
                navigation.navigate('Log In Screen')
            }

        }
        catch (err) {
            alert('Email and Password should be valid')
            console.log("Error occurred in Sign up", err);
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text}>
                Welcome to NordStone Register Page, Please register...
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor='black'
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor='black'
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                textContentType="password"
            />
            <Button title="Register" onPress={handleSignIn} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: "gray",
        marginVertical: 10,
        paddingHorizontal: 10,
        color: 'black'
    },
    text: {
        textAlign: "center",
        fontSize: 25,
        marginTop: 20,
        color: 'black'
    },
});

export default SigninScreen;

