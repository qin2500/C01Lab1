import { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function AddTask({onAddTask})
{
    const [title, setTitle] = useState("")

    const handelAddTask = () =>{
        onAddTask(title)
        setTitle("")

    }

    const styles = StyleSheet.create({
        addTodoForm: {
          margin: 10,
        },
        input: {
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        },
    });

    return(
        <div className="addToDoForm" style={styles.addTodoForm}>
            <TextInput

                onChangeText={(text) => setTitle(text)}
                returnKeyType="done"
                className = "input"
                style = {styles.input}
                
            />
            <Button title="+" onPress={()=>(handelAddTask())}/>
        </div>
    )
}