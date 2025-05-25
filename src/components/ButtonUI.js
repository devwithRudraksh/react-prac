import React from 'react';

export default function ButtonUI({ label, onClick }) {
  return (
    <button onClick={onClick} style={styles.button}>
      {label}
    </button>
  );
}

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};
