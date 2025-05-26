import React from 'react';

export default function TodoItem({ text, onDelete }) {
  return (
    <div style={styles.item}>
      <span>{text}</span>
      <button onClick={onDelete} style={styles.delete}>❌</button>
    </div>
  );
}

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px'
  },
  delete: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px'
  }
};
