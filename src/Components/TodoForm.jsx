import { Form, InputGroup, Button } from 'react-bootstrap';

const TodoForm = ({ todo, setTodo, handleAddOrUpdate, isEditing, darkMode }) => {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddOrUpdate();
      }}
    >
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter your Task..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className={darkMode ? 'bg-secondary text-white' : ''}
        />
        <Button variant={isEditing ? 'warning' : 'primary'} type="submit">
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </InputGroup>
    </Form>
  );
};

export default TodoForm;
