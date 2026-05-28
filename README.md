# 📱 Goals App — React Native

O projeto consiste em uma lista de metas/tarefas onde é possível:

- ➕ Adicionar metas
- ❌ Remover metas ao clicar
- 📋 Renderizar lista dinamicamente
- 🪟 Abrir e fechar Modal
- 🧠 Trabalhar com `state`, `props` e componentes reutilizáveis

---

# 🚀 Tecnologias Utilizadas

- React Native
- Expo
- JavaScript
- Hooks (`useState`)

---

# 📂 Estrutura do Projeto

```bash
components/
 ├── GoalInput.js
 └── GoalItem.js

App.js
```

---

# 🧠 Conceitos Aprendidos

## useState

Utilizado para:

- armazenar lista de metas
- controlar visibilidade do modal
- controlar texto digitado

Exemplo:

```jsx
const [courseGoals, setCourseGoals] = useState([]);
```

---

## Props

Comunicação entre componentes.

Exemplo:

```jsx
<GoalInput onAddGoal={addGoalHandler} />
```

---

## FlatList

Renderização otimizada de listas.

```jsx
<FlatList data={courseGoals} />
```

---

## Modal

Utilizado para abrir e fechar a área de criação de metas.

```jsx
<Modal visible={props.visible} animationType="slide">
```

---

## Pressable

Componente clicável utilizado para remover metas.

```jsx
<Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
```

---

# 🔄 Fluxo da Aplicação

```
Usuário abre modal
↓
Digita uma meta
↓
Meta é enviada para o App.js
↓
Lista é atualizada
↓
FlatList renderiza novo item
↓
Usuário pode remover clicando na meta
```

---

# 📦 Funcionalidades

## ✅ Adicionar Meta

- Input controlado com `useState`
- Validação para impedir metas vazias

```jsx
if (enteredGoalText.trim().length === 0) {
  return;
}
```

---

## ❌ Remover Meta

A meta é removida utilizando `filter()`.

```jsx
currentCourseGoals.filter((goal) => goal.id !== id)
```

---

# 🎯 Objetivo do Projeto

Praticar fundamentos essenciais do React Native:

- Componentização
- Manipulação de estado
- Props
- Eventos
- Renderização de listas
- Estruturação de projeto

---

# 📱 Testes

O aplicativo foi testado:

- ✅ Expo Go
- ✅ Android via USB (ADB)
- ✅ APK Build

---

# 👨‍💻 Autor

Alysson Santos