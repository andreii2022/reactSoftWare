
// import React, { useState, useEffect } from 'react';

// function ModalEdit({ car, onClose, onEdit }) {
//   const [editedCar, setEditedCar] = useState(car);

//   useEffect(() => {
//     setEditedCar(car);
//   }, [car]);

//   const handleFieldChange = (event) => {
//     const { name, value } = event.target;
//     setEditedCar((prevCar) => ({
//       ...prevCar,
//       [name]: value,
//     }));
//   };

//   const handleEdit = () => {
//     const editedCarCopy = { ...editedCar }; // Создаем копию объекта editedCar
//     onEdit(editedCarCopy); // Передаем копию объекта при вызове onEdit
//     onClose();
//   };
  

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Редактировать автомобиль</h2>
//         <form>
//           <div className="form-group">
//           <label htmlFor="company">Компания:</label>
// <input
//   type="text"
//   id="company"
//   name="company"
//   value={editedCar.car}
//   onChange={handleFieldChange}
//   required
// />

// <label htmlFor="model">Модель:</label>
// <input
//   type="text"
//   id="model"
//   name="model"
//   value={editedCar.car_model}
//   onChange={handleFieldChange}
//   required
// />

// <label htmlFor="vin">VIN:</label>
// <input
//   type="text"
//   id="vin"
//   name="vin"
//   value={editedCar.car_vin}
//   onChange={handleFieldChange}
//   required
// />

// <label htmlFor="color">Цвет:</label>
// <input
//   type="text"
//   id="color"
//   name="color"
//   value={editedCar.car_color}
//   onChange={handleFieldChange}
//   required
// />

// <label htmlFor="year">Год:</label>
// <input
//   type="number"
//   id="year"
//   name="year"
//   value={editedCar.car_model_year}
//   onChange={handleFieldChange}
//   required
// />

// <label htmlFor="price">Цена:</label>
// <input
//   type="number"
//   id="price"
//   name="price"
//   value={editedCar.price}
//   onChange={handleFieldChange}
//   required
// />

// <label htmlFor="availability">Наличие:</label>
// <select
//   id="availability"
//   name="availability"
//   value={editedCar.availability}
//   onChange={handleFieldChange}
// >
//   <option value={true}>Да</option>
//   <option value={false}>Нет</option>
// </select>

//           </div>
//           <div className="modal-actions">
//             <button type="button" onClick={handleEdit}>Сохранить</button>
//             <button type="button" onClick={onClose}>Отмена</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ModalEdit;

// import React, { useState } from 'react';

// const ModalEdit = ({ car, onClose, onEdit }) => {
//   const [editedCarData, setEditedCarData] = useState({
//     ...car,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onEdit(editedCarData);
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>Редактировать автомобиль</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Компания:
//             <input
//               type="text"
//               value={editedCarData.company}
//               onChange={(e) =>
//                 setEditedCarData({ ...editedCarData, company: e.target.value })
//               }
//             />
//           </label>
//           <label>
//             Модель:
//             <input
//               type="text"
//               value={editedCarData.model}
//               onChange={(e) =>
//                 setEditedCarData({ ...editedCarData, model: e.target.value })
//               }
//             />
//           </label>
//           <label>
//             VIN:
//             <input
//               type="text"
//               value={editedCarData.vin}
//               onChange={(e) =>
//                 setEditedCarData({ ...editedCarData, vin: e.target.value })
//               }
//             />
//           </label>
//           <label>
//             Год:
//             <input
//               type="text"
//               value={editedCarData.year}
//               onChange={(e) =>
//                 setEditedCarData({ ...editedCarData, year: e.target.value })
//               }
//             />
//           </label>
//           <label>
//             Цвет:
//             <input
//               type="text"
//               value={editedCarData.color}
//               onChange={(e) =>
//                 setEditedCarData({ ...editedCarData, color: e.target.value })
//               }
//             />
//           </label>
//           <label>
//             Цена:
//             <input
//               type="text"
//               value={editedCarData.price}
//               onChange={(e) =>
//                 setEditedCarData({ ...editedCarData, price: e.target.value })
//               }
//             />
//           </label>
//           <label>
//             Наличие:
//             <select
//               value={editedCarData.availability}
//               onChange={(e) =>
//                 setEditedCarData({
//                   ...editedCarData,
//                   availability: e.target.value === 'true',
//                 })
//               }
//             >
//               <option value={true}>Да</option>
//               <option value={false}>Нет</option>
//             </select>
//           </label>
//           <div className="modal-buttons">
//             <button type="submit">Сохранить</button>
//             <button onClick={onClose}>Закрыть</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ModalEdit;

import React, { useState } from 'react';

const ModalEdit = ({ car, onClose, onEdit }) => {
  const [editedCarData, setEditedCarData] = useState({
    ...car,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(editedCarData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Редактировать автомобиль</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Компания:
            <input
              type="text"
              value={editedCarData.car || ''}
              readOnly
            />
          </label>
          <label>
            Модель:
            <input
              type="text"
              value={editedCarData.car_model || ''}
              readOnly
            />
          </label>
          <label>
            VIN:
            <input
              type="text"
              value={editedCarData.car_vin || ''}
              readOnly
            />
          </label>
          <label>
            Год:
            <input
              type="text"
              value={editedCarData.car_model_year || ''}
              readOnly
            />
          </label>
          <label>
            Цвет:
            <input
              type="text"
              value={editedCarData.car_color || ''}
              onChange={(e) =>
                setEditedCarData({ ...editedCarData, car_color: e.target.value })
              }
            />
          </label>
          <label>
            Цена:
            <input
              type="text"
              value={editedCarData.price}
              onChange={(e) =>
                setEditedCarData({ ...editedCarData, price: e.target.value })
              }
            />
          </label>
          <label>
            Наличие:
            <select
              value={editedCarData.availability}
              onChange={(e) =>
                setEditedCarData({
                  ...editedCarData,
                  availability: e.target.value === 'true',
                })
              }
            >
              <option value={true}>Да</option>
              <option value={false}>Нет</option>
            </select>
          </label>
          <div className="modal-buttons">
            <button type="submit">Сохранить</button>
            <button onClick={onClose}>Закрыть</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;






