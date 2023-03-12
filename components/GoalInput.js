import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  return (
    <Modal visible={props.openModal}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.jpg")}
          style={styles.image}
        />
        <TextInput
          placeholder="your corse goal!"
          style={styles.textInput}
          onChangeText={props.goalInputHandler}
          value={props.enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={props.addGoalHandler} />
          </View>
          <View>
            <Button
              style={styles.button}
              title="Cancel"
              onPress={props.handleModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "Column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 3,
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
