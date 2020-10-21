import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal} from 'react-native'

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState("")

    const handleGoalInput = (goalText) => {
        setEnteredGoal(goalText)
    }

    const handleAddedGoal = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal("")
    }

    return ( 
        <Modal visible={props.isVisible} animationType="slide" >
        <View style={styles.inputContainer}>
            <TextInput placeholder='Goal' 
            style={styles.input}
            onChangeText={handleGoalInput}
            value={enteredGoal}/>
            <View style={styles.buttonContainer}>
               <View style={styles.button}>
                   <Button title="Cancel" color="red" onPress={props.onCancel} />
                </View> 
                <View style={styles.button}>
                    <Button title="Add Goal" 
                    onPress={handleAddedGoal}/>
                </View>
            </View>
      </View>
      </Modal>
     );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
      },
      input: {
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        width: '80%',
        marginBottom: 10
      },
      buttonContainer: {
          flexDirection: "row",
          justifyContent: 'space-between'
      },
      button: {
          width: '40%'
      }
})

export default GoalInput;