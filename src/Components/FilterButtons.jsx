import { Button, ButtonGroup } from 'react-bootstrap';

const FilterButtons = ({ filter, setFilter, handleClearCompleted, list }) => {
  const hasCompleted = list.some((item) => item.completed);

  return (
    <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
      <ButtonGroup>
        <Button
          variant={filter === 'all' ? 'secondary' : 'outline-secondary'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'secondary' : 'outline-secondary'}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'secondary' : 'outline-secondary'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </ButtonGroup>

      <Button
        variant="outline-danger"
        size="sm"
        onClick={handleClearCompleted}
        disabled={!hasCompleted}
      >
        Clear Completed
      </Button>
    </div>
  );
};

export default FilterButtons;
