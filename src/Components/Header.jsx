import { Form } from 'react-bootstrap';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h1>📝 To-Do App</h1>
      <Form.Check
        type="switch"
        id="dark-mode-toggle"
        label={darkMode ? '🌙 Dark' : '☀️ Light'}
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
    </div>
  );
};

export default Header;
