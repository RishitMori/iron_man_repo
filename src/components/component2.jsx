import { useDispatch } from 'react-redux';
import { updateValue } from '../Redux/store';

export const Component2 = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(updateValue(value));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Component B</h2>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type here"
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  header: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    fontSize: '1rem',
  },
};
