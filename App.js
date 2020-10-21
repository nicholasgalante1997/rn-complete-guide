import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, 
  Text, 
  View, 
  Button, 
  FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    
    setCourseGoals((currentGoals => 
      [...currentGoals, {id: Math.random().toString(), value: goalTitle}])
    )

    setIsAddMode(false)
    
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false)
  }

  const removeGoalHandler = (id) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id )
    })
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput isVisible={isAddMode} 
      onAddGoal={addGoalHandler} 
      onCancel={cancelGoalHandler} />
      <FlatList 
      data={courseGoals} 
      renderItem={itemData => 
      <GoalItem title={itemData.item.value} 
      id={itemData.item.id}
      onDelete={removeGoalHandler}/> } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
})