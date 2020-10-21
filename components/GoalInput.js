import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native'

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState("")

    const handleGoalInput = (goalText) => {
        setEnteredGoal(goalText)
    }


    return ( 
        <View style={styles.inputContainer}>
            <TextInput placeholder='Goal' 
            style={styles.input}
            onChangeText={handleGoalInput}
            value={enteredGoal}/>
            <Button title="Add Goal" 
            onPress={() => props.onAddGoal(enteredGoal)}/>
      </View>
     );
}
 
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      },
      input: {
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        width: '80%'
      },
})