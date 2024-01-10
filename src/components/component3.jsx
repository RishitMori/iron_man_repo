// src/ComponentC.js
import { useSelector } from 'react-redux';

export const Component3 = () => {
  // Get the value from the Redux store
  const value = useSelector((state) => state.value);

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Component C</h2>
      <p style={styles.text}>Value from Redux store: {value}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '15px',
    border: '1px solid #4CAF50',
    borderRadius: '5px',
    backgroundColor: '#f8f8f8',
  },
  header: {
    color: '#4CAF50',
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1rem',
  },
};

