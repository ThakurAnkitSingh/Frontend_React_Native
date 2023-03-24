import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { firebaseAuth } from "./firebase";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    const forgotPassword = async () => {

        await sendPasswordResetEmail(firebaseAuth, email, null).then(() => {
            alert(`Please check your email ${email}`);
        }).catch((err) => {
            alert('Invalid Email')
            console.log(err, "Error occurred in forget password")
        })
    }



    const handleLogIn = async () => {
        try {

            await signInWithEmailAndPassword(firebaseAuth, email, password);
            navigation.navigate('Tabs');

        }
        catch (err) {
            if (email === '') {
                alert('Please, Enter the Email');
            }
            else if (password === '') {
                alert('Please, Enter the Password');
            }
            else {
                alert('Invalid Email or Password')
            }
            console.log("Error occurred in Sign up", err);
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.text1}>
                Welcome to NordStone Login Page
            </Text>

            <Text style={styles.text}>
                Please Login or Register
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


            <View style={styles.btn}>
                <Button title="Login" onPress={handleLogIn} />
            </View>

            <Button title="Register" onPress={() => {
                navigation.navigate('Register Screen');
            }} />

            <TouchableOpacity onPress={forgotPassword}>
                <Text style={styles.textForget}>Forget password?</Text>
            </TouchableOpacity>
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
        borderWidth: 2,
        borderColor: "gray",
        marginVertical: 10,
        paddingHorizontal: 10,
        color: 'black'
    },
    text1: {
        textAlign: "center",
        fontSize: 35,
        color: 'black'

    },
    text: {
        textAlign: "center",
        fontSize: 25,
        marginTop: 20,
        color: 'black'

    },
    textForget: {
        marginVertical: 10,
        paddingHorizontal: 10,
        color: 'black'
    },
    btn: {
        paddingVertical: 10,
    }
});

export default LoginScreen;

