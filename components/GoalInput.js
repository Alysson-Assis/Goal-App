import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  Modal,
} from "react-native";

function GoalInput(props) {
  // armazena o texto digitado no input
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    // atualiza o state conforme o usuário digita
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    // impede adicionar tarefa vazia
    if (enteredGoalText.trim().length === 0) {
      return;
    }

    // envia o texto para o componente pai
    props.onAddGoal(enteredGoalText);

    // limpa o input após adicionar
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/goal.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Sua meta do curso!"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Cancelar" onPress={props.onCancel} color={"#f62222"} />
            </View>
            <View style={styles.button}>
              <Button title="Adicionar" onPress={addGoalHandler} />
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
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#93D6F6",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#000000",
    width: "100%",
    color: "#818181",
    padding: 8,
    borderRadius: 6,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 10,
  },
  image: {
    height: 200,
    width: 200,
    margin: 24,
  },
});
