import { ListGroup, Row, Col, Form, Button } from 'react-bootstrap';

const TodoList = ({
  list,
  originalList,
  handleDelete,
  handleEdit,
  toggleCompleted,
  darkMode,
}) => {
  if (list.length === 0) {
    return <p className="text-muted">Your task list is empty 💤</p>;
  }

  return (
    <ListGroup>
      {list.map((item) => {
        const index = originalList.findIndex((t) => t === item);

        return (
          <ListGroup.Item
            key={index}
            className={darkMode ? 'bg-secondary text-white mb-2' : 'mb-2'}
          >
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Check
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleCompleted(index)}
                />
              </Col>
              <Col
                className="text-start"
                style={{
                  textDecoration: item.completed ? 'line-through' : 'none',
                }}
              >
                {item.text}
              </Col>
              <Col xs="auto">
                <Button
                  variant="outline-warning"
                  size="sm"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </Button>{' '}
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default TodoList;
