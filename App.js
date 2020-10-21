import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput, 
  ScrollView, 
  FlatList } from 'react-native';

import GoalItem from './components/GoalItem'

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState("")
  const [courseGoals, setCourseGoals] = useState([])

  const handleGoalInput = (goalText) => {
    setEnteredGoal(goalText)
  }

  const addGoalHandler = () => {
    setCourseGoals((currentGoals => 
      [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]))
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Goal' 
        style={styles.input}
        onChangeText={handleGoalInput}
        value={enteredGoal}/>
        <Button title="Add Goal" 
        onPress={addGoalHandler}/>
      </View>
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value} /> } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
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