import React, { useState } from 'react'
import {StyleSheet, TextInput, Button, Text, View} from 'react-native';


const AddTodo = () => {
    const [text, setText] = useState('')  


    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput 
                placeholder='Add to-do'
                onChangeText={changeHandler}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})
 
export default AddTodo;