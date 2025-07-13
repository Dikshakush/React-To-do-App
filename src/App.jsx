// App.jsx
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '.Components/Header';
import TodoForm from './Components/TodoForm';
import FilterButtons from './Components/FilterButtons';
import TodoList from './Components/TodoList';

const App = () => {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  const handleAddOrUpdate = () => {
    if (todo.trim() === '') return;

    if (editIndex !== null) {
      const updatedList = [...list];
      updatedList[editIndex].text = todo;
      setList(updatedList);
      setEditIndex(null);
    } else {
      setList([...list, { text: todo, completed: false }]);
    }

    setTodo('');
  };

  const handleDelete = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);

    if (editIndex === index) {
      setEditIndex(null);
      setTodo('');
    }
  };

  const handleEdit = (index) => {
    setTodo(list[index].text);
    setEditIndex(index);
  };

  const toggleCompleted = (index) => {
    const updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    setList(updatedList);
  };

  const handleClearCompleted = () => {
    const activeTasks = list.filter((item) => !item.completed);
    setList(activeTasks);
  };

  const filteredList = list.filter((item) => {
    if (filter === 'completed') return item.completed;
    if (filter === 'active') return !item.completed;
    return true;
  });

  const appTheme = darkMode ? 'bg-dark text-white min-vh-100' : 'bg-light text-dark min-vh-100';

  return (
    <div className={appTheme}>
      <Container className="pt-5 text-center">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TodoForm
          todo={todo}
          setTodo={setTodo}
          handleAddOrUpdate={handleAddOrUpdate}
          isEditing={editIndex !== null}
          darkMode={darkMode}
        />
        <FilterButtons
          filter={filter}
          setFilter={setFilter}
          handleClearCompleted={handleClearCompleted}
          list={list}
        />
        <TodoList
          list={filteredList}
          originalList={list}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          toggleCompleted={toggleCompleted}
          darkMode={darkMode}
        />
      </Container>
    </div>
  );
};

export default App;
