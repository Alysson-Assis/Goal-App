import { Pressable, StyleSheet, Text, View } from "react-native";
function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#ddd" }}

      // prepara a função com o id para executar no clique
      onPress={props.onDeleteItem.bind(this, props.id)}

      // aplica estilo ao pressionar o item
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalsItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalsItem: {
    marginHorizontal: 8,
    marginTop: 10,
    borderRadius: 6,
    backgroundColor: "#00a7fb",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
