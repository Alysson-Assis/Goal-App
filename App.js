import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // controla se o modal está aberto ou fechado
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // armazena a lista de metas
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    // abre o modal
    setModalIsVisible(true);
  }

  function endGoalHandler() {
    // fecha o modal
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      // pega a lista atual e adiciona um novo item
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    // fecha o modal após adicionar
    endGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      // remove o item pelo id
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Button
        title="Adicionar Meta"
        color="#1800a3"
        onPress={startAddGoalHandler} // abre o modal ao clicar
      />

      <GoalInput
        visible={modalIsVisible} // controla visibilidade do modal
        onAddGoal={addGoalHandler} // adiciona nova meta
        onCancel={endGoalHandler} // fecha o modal
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals} // lista de metas

          renderItem={(itemData) => {
            // pega cada item e transforma em GoalItem
            return (
              <GoalItem
                // ver componente GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler} // remove item ao clicar
              />
            );
          }}

          keyExtractor={(item, index) => {
            // define chave única para cada item
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#93D6F6"
  },

  goalsContainer: {
    flex: 5,
  },
});
