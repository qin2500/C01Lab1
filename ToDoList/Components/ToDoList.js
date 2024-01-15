import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from "./AddTask";

export default function ToDoList({titles}){

    const [toDos, setToDos] = useState(titles.map((title)=>({id: uuidv4(), title: title})))

    const addToDo = (title) =>{
        console.log(title)
        setToDos([...toDos, {id: uuidv4(), title: title}])
    }

    const removeToDo = (id) =>{
        let newList = toDos.filter((item)=>(
            (item.id != id)
        ))
        setToDos(newList)
    }


    const styles = StyleSheet.create({
        todoListContainer: {
          margin: 10,
        },
        todoItem: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          marginVertical: 5,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
        },
    });
    console.log(toDos)
    return(
        <div className="todoListContainer" style={styles.todoListContainer}>
            {toDos.map((toDo)=>(
                <div style={styles.todoItem}>
                    <h1>
                        {toDo.title}
                    </h1>
                    <Button title="-" onPress={() => removeToDo(toDo.id)} />
                </div>
            ))}
            <AddTask onAddTask={addToDo}/>
        </div>

    )
}




