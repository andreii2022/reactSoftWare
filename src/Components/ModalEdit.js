

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
				<div className="form-group">
            <label htmlFor="company">Компания:</label>
            <input
              type="text"
              value={editedCarData.car || ''}
              readOnly
            />
          </div>
					<div className="form-group">
            <label htmlFor="company">Модель:</label>
            <input
              type="text"
              value={editedCarData.car_model || ''}
              readOnly
            />
          </div>
					<div className="form-group">
            <label htmlFor="company">VIN:</label>
            <input
              type="text"
              value={editedCarData.car_vin || ''}
              readOnly
            />
          </div>
					<div className="form-group">
            <label htmlFor="company">Год:</label>
            <input
              type="text"
              value={editedCarData.car_model_year || ''}
              readOnly
            />
          </div>
					<div className="form-group">
            <label htmlFor="company">Цвет:</label>
            <input
              type="text"
              value={editedCarData.car_color || ''}
              onChange={(e) =>
                setEditedCarData({ ...editedCarData, car_color: e.target.value })
              }
            />
          </div>
					<div className="form-group">
            <label htmlFor="company">Цена:</label>
            <input
              type="text"
              value={editedCarData.price}
              onChange={(e) =>
                setEditedCarData({ ...editedCarData, price: e.target.value })
              }
            />
          </div>
					<div className="form-group">
            <label htmlFor="company">Наличие:</label>
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
          </div>
          <div className="modal-actions">
            <button type="submit">Сохранить</button>
            <button onClick={onClose}>Закрыть</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;






