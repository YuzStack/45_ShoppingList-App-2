import { useState } from 'react';

const ListItem = function ({
  id,
  text,
  isEditing,
  isChecked,
  onDelete,
  onEdit,
  onSubmit,
  onCheck,
}) {
  const [inpValue, setInpValue] = useState(text);

  const handleFormSubmit = function (e) {
    e.preventDefault();

    // Prevent adding empty strings or just whitespace(s)
    if (!inpValue.trim()) return;

    onSubmit(id, inpValue);
  };

  return (
    <>
      {/* View Mode */}
      {!isEditing && (
        <li className='flex justify-between items-center '>
          <label className='flex items-center gap-1'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={() => onCheck(id)}
            />

            <span
              className={`p-0.5 cursor-pointer ${isChecked ? 'line-through' : ''}`}
            >
              {text}
            </span>
          </label>

          <div className='flex items-center gap-2'>
            <button
              onClick={() => onEdit(id)}
              className='p-0.5 text-xl font-semibold cursor-pointer'
              aria-label='Edit item'
            >
              <i className='fa-regular fa-pen-to-square'></i>
            </button>
            <button
              onClick={() => onDelete(id)}
              className='p-0.5 text-xl font-semibold cursor-pointer'
              aria-label='Delete item'
            >
              <i className='fa-solid fa-xmark'></i>
            </button>
          </div>
        </li>
      )}

      {/* Edit Mode */}
      {isEditing && (
        <form
          onSubmit={handleFormSubmit}
          className='flex justify-between items-center'
        >
          <input
            value={inpValue}
            onChange={e => setInpValue(e.target.value)}
            autoFocus
            className='p-0.5 px-1.5 bg-gray-50 text-gray-700 rounded-lg focus:outline-0'
          />
          <button
            className='p-0.5 text-xl font-semibold cursor-pointer'
            aria-label='Save Edit'
          >
            <i className='fa-solid fa-check'></i>
          </button>
        </form>
      )}
    </>
  );
};

export default ListItem;
