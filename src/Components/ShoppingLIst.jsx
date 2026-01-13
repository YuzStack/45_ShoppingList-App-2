import { useState } from 'react';
import { useEffect } from 'react';
import ListItem from './LIstItem';

// const items = [
//   { id: crypto.randomUUID(), text: 'Yam', isEditing: false, isChecked: true },
//   { id: crypto.randomUUID(), text: 'Beans', isEditing: false, isChecked: true },
//   { id: crypto.randomUUID(), text: 'Rice', isEditing: false, isChecked: false },
// ];

const ShoppingList = function () {
  const [inpValue, setInpValue] = useState('');

  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    return storedItems ? storedItems : [];
  });

  // Saves/Updates the data in localStorage everytime the value of state (items) changes
  useEffect(
    () => localStorage.setItem('items', JSON.stringify(items)),
    [items]
  );

  const handleFormSubmit = function (e) {
    e.preventDefault();

    // Prevent adding empty strings or just whitespace(s)
    if (!inpValue.trim()) return;

    // Good, but can be better
    // setItems([...items, { id: crypto.randomUUID(), inpValue }]);

    // Great, Functional Update Pattern for more safety
    setItems(prevItems => [
      ...prevItems,
      {
        id: crypto.randomUUID(),
        text: inpValue.trim(),
        isEditing: false,
        isChecked: false,
      },
    ]);

    setInpValue('');
  };

  const handleItemDel = function (id) {
    setItems(prevItems => prevItems.filter(itm => itm.id !== id));
  };

  const handleItemEdit = function (id) {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) return { ...item, isEditing: true };
        else return item;
      })
    );
  };

  const handleItemSaveEdit = function (id, text) {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) return { ...item, text, isEditing: false };
        else return item;
      })
    );
  };

  const handleItemCheck = function (id) {
    setItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) return { ...item, isChecked: !item.isChecked };
        else return item;
      });
    });
  };

  const handleClearList = function () {
    setItems([]);
  };

  const sortedItems = items
    .slice()
    .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

  return (
    <div className='bg-[#111828] text-white h-screen px-3 py-2 flex justify-center'>
      <div className='space-y-3'>
        <h1 className='text-3xl font-semibold text-center mb-[10vh]'>
          Shopping List App
        </h1>

        <p>Add the items to shop below :)</p>
        <form
          onSubmit={handleFormSubmit}
          className='bg-gray-50 text-black w-fit rounded-2xl'
        >
          <input
            value={inpValue}
            onChange={e => setInpValue(e.target.value)}
            required
            autoFocus
            placeholder='Item...'
            className='bg-transparent px-3 py-2 focus:outline-0'
          />
          <button className='bg-blue-600 text-white px-3 py-2 rounded-r-2xl cursor-pointer'>
            Add
          </button>
        </form>

        <ul className='list-items mt-[5vh] space-y-1.5'>
          {sortedItems.map(item => (
            <ListItem
              key={item.id}
              {...item}
              onDelete={handleItemDel}
              onEdit={handleItemEdit}
              onSubmit={handleItemSaveEdit}
              onCheck={handleItemCheck}
            />
          ))}
        </ul>

        {items.length > 1 && (
          <button
            onClick={handleClearList}
            className='bg-blue-600 py-0.5 px-1.5 float-right mt-2 rounded-lg'
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
