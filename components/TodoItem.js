import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const TodoItem = ({ item: todos }) => {

    return (
        <TouchableOpacity>
            <Text style={styles.item }>
                {todos.text}
            </Text>
        </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
    item: {
        padding: 16,
        margintop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})


export default TodoItem;
