
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("")
  const [courseGoals, setCourseGoals] = useState([])

  const handleChange = (enteredText) => {  // it sets what the use enters into the courseGoals
    setEnteredGoal(enteredText)
  }

  const handleSubmit = () => {
    console.log(enteredGoal);
    setCourseGoals([...courseGoals, enteredGoal]) // we create a new array and add all elements from the old array, then we add a new element which is the goal
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          value={enteredGoal}
          onChangeText={handleChange} //we dont add paranthesis because we want to execute on each key stroke
          style={styles.input}
        />
        <Button title="ADD" onPress={handleSubmit}/>
      </View>
      <View>
        <View>
          {/* We map over our array of items and display them to the screen */}
          {courseGoals.map(goal =>
            <View key={goal} style={styles.listItem}>
              <Text >{goal}</Text>
            </View>)} 
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});
