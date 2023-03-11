import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { db } from './firebase'

export default function TodoList() {

    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');


    useEffect(() => {
        const unsubscribe = db.collection('todos').orderBy('position').onSnapshot((snapshot) => {
            const todos = snapshot.docs.map((doc) => ({ id: doc.id, text: doc.data().text }));
            setTodos(todos);
        });

        return () => unsubscribe();
    }, []);

    const addTodo = async () => {
        const snapshot = await db.collection('todos').orderBy('position', 'desc').limit(1).get();
        const position = snapshot.docs.length > 0 ? snapshot.docs[0].data().position + 1 : 0;
        await db.collection('todos').add({ text, position });
        setText('');
    };



    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={text} onChangeText={setText} />
            <TouchableOpacity style={styles.button} onPress={addTodo}>
                <Text>Add Todo</Text>
            </TouchableOpacity>
            {todos.map((todo) => (
                <Text key={todo.id}> {todo.text}</Text>
            ))}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 2,
        borderColor: '#000000',
        padding: 10,
        margin: 10,
        width: '80%',
    },
    button: {
        backgroundColor: '#0080ff',
        padding: 15,
        margin: 10,
        borderRadius: 5,
    },
})
