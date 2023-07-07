
import React from 'react';

function ModalDelete({ car, onClose, onDelete }) {
  const handleDelete = () => {
    onDelete(car.id);
    onClose();
  };

  return (
    <div className="modal modal-delete">
      <div className="modal-content">
        <h2>Удалить автомобиль</h2>
        <p>Вы уверены, что хотите удалить этот автомобиль?</p>
        <div className="modal-actions">
          <button onClick={handleDelete}>Удалить</button>
          <button onClick={onClose}>Отмена</button>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;







