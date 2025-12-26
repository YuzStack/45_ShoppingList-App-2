import { useState } from 'react';

const ShoppingList = function () {
  const [inpValue, setInpValue] = useState('');
  const [items, setItems] = useState([]);

  const handleFormSubmit = function (e) {
    e.preventDefault();
    // console.log('Yes!');

    setItems([...items, inpValue]);
    setInpValue('');
  };

  return (
    <div className='bg-[#111828] text-white h-screen px-3 py-2 flex justify-center'>
      <div className='space-y-3'>
        <h1 className='text-3xl font-semibold text-center mb-[10vh]'>
          Shopping List App
        </h1>

        <p>Add the items to shop below :)</p>
        <form
          onSubmit={handleFormSubmit}
          className='bg-gray-200 text-black w-fit rounded-2xl'
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
          {/* <li className='flex justify-between items-center'>
            <span className=' p-0.5'>Yam</span>
            <button className=' p-0.5 text-xl font-semibold cursor-pointer'>
              X
            </button>
          </li>
          <li className='flex justify-between items-center'>
            <span className=' p-0.5'>Yam</span>
            <button className=' p-0.5 text-xl font-semibold cursor-pointer'>
              X
            </button>
          </li>
          <li className='flex justify-between items-center'>
            <span className=' p-0.5'>Yam</span>
            <button className=' p-0.5 text-xl font-semibold cursor-pointer'>
              X
            </button>
          </li> */}

          {items.map(item => (
            <li key={item} className='flex justify-between items-center'>
              <span className=' p-0.5'>{item}</span>
              <button className=' p-0.5 text-xl font-semibold cursor-pointer'>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingList;
