
import React, { useState } from 'react';

function ModalAdd({ onClose, onAdd }) {
  const [newCar, setNewCar] = useState({
    company: '',
    model: '',
    vin: '',
    color: '',
    year: '',
    price: '',
    availability: true,
  });
  console.log(newCar)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    const newCarData = {
      id: Date.now(),
      ...newCar,
    };

    onAdd(newCarData);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Добавить автомобиль</h2>
        <form>
          <div className="form-group">
            <label htmlFor="company">Компания:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={newCar.company}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="model">Модель:</label>
            <input
              type="text"
              id="model"
              name="model"
              value={newCar.model}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="vin">VIN:</label>
            <input
              type="text"
              id="vin"
              name="vin"
              value={newCar.vin}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Цвет:</label>
            <input
              type="text"
              id="color"
              name="color"
              value={newCar.color}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Год:</label>
            <input
              type="number"
              id="year"
              name="year"
              value={newCar.year}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Цена:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={newCar.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="availability">Наличие:</label>
            <select
              id="availability"
              name="availability"
              value={newCar.availability}
              onChange={handleInputChange}
              >
                <option value="true">Да</option>
                <option value="false">Нет</option>
              </select>
            </div>
            <div className="modal-actions">
              <button type="button" onClick={handleAdd}>Сохранить</button>
              <button type="button" onClick={onClose}>Отмена</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default ModalAdd;




