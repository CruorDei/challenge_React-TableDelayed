import { useEffect, useState } from 'react';

function generateUniqueNumbers() {
  let numbers = [];
  while (numbers.length < 20) {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

function compareCroissant(a, b) {
  return a - b;
}

const numbers = generateUniqueNumbers();

function App() {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const delay = 1000;
    const sortedNumbers = [...numbers];
    sortedNumbers.sort(compareCroissant);


    let showItemsWithDelay = async () => {
      setVisibleItems([]);
      for (let i = 0; i < sortedNumbers.length; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        setVisibleItems(prevVisibleItems => [...prevVisibleItems, sortedNumbers[i]]);
      }
    };

    showItemsWithDelay();
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
        {numbers.map((number, index) => (
          <li key={index} style={{ margin: '0.5rem', padding: '1rem', border: '1px solid #ccc', textAlign: 'center' }}>
            {number}
          </li>
        ))}
      </ul>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }}>
      {visibleItems.map((visibleItem, index) => (
        <li key={index} style={{ margin: '0.5rem', padding: '1rem', border: '1px solid #ccc', textAlign: 'center' }}>
          {visibleItem}
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;