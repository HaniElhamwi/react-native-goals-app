import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString().toString() },
    ]);
    setEnteredGoalText("");
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function handleModal() {
    setOpenModal(!openModal);
  }

  return (
    <View style={styles.appContainer}>
      <View style={{ marginTop: 50 }}>
        <Button color="#5e0acc" onPress={handleModal} title="ADD GOAL" />
      </View>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        enteredGoalText={enteredGoalText}
        openModal={openModal}
        handleModal={handleModal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                deleteGoalHandler={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
    overflow: "scroll",
  },
});
