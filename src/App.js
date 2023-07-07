

import React, { useState, useEffect } from 'react';
import './App.css';
import Pagination from './Components/Pagination';
import Search from './Components/Search';
import ModalEdit from './Components/ModalEdit';
import ModalDelete from './Components/ModalDelete';
import ModalAdd from './Components/ModalAdd';

function App() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const carsPerPage = 10;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('https://myfakeapi.com/api/cars/');
        const data = await response.json();
  
        setCars(data.cars);
        setTotalPages(Math.ceil(data.cars.length / carsPerPage));
  
        localStorage.setItem('cars', JSON.stringify(data.cars)); // Сохраняем данные в локальное хранилище
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };
  
    const storedCars = localStorage.getItem('cars');
    if (!storedCars || storedCars.length === 0) {
      fetchCars();
    } else {
      setCars(JSON.parse(storedCars));
      setTotalPages(Math.ceil(JSON.parse(storedCars).length / carsPerPage));
    }
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      const carsString = JSON.stringify(cars);
      localStorage.setItem('cars', carsString);
      setTotalPages(Math.ceil(cars.length / carsPerPage));
    }, 500)
  }, [cars]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  const handleEditModalOpen = (car) => {
    setSelectedCar(car);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleDeleteModalOpen = (car) => {
    setSelectedCar(car);
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpen(false);
  };

  const handleAddModalOpen = () => {
    setAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setAddModalOpen(false);
  };

  const handleEdit = (editedCar) => {
    const updatedCars = cars.map((car) => (car.id === editedCar.id ? editedCar : car));
    setCars(updatedCars);
    handleEditModalClose();
  };

  const handleDelete = (carId) => {
    const updatedCars = cars.filter((car) => car.id !== carId);
    setCars(updatedCars);
    handleDeleteModalClose();
  };

const handleAdd = (newCar) => {
	
  const newCarData = {
    id: Date.now(),
    ...newCar,
  };



	setCars((prevCars) => [newCarData, ...prevCars]);
  handleAddModalClose();
};

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  const filteredCars = cars.filter((car) =>
    Object.values(car)
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  

  return (
    <div className="app-container">
			<h1 className='app-title'>TEst tasK</h1>
			<div className="app-header">
			<button className="add-car-button" onClick={handleAddModalOpen}></button>
			<Search onSearch={handleSearch} />
		</div>

      <div className="table-container">
			<table className="car-table">
        <thead>
          <tr>
						<th>Company</th>
							<th>Model</th>
							<th>VIN</th>
							<th>Color</th>
							<th>Year</th>
							<th>Price</th>
							<th>Availability</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
					{currentCars.map((car) => (
						<tr key={car.id}>
							<td>{car.car || car.company}</td>
							<td>{car.car_model || car.model}</td>
							<td>{car.car_vin || car.vin}</td>
							<td>{car.car_color || car.color}</td>
							<td>{car.car_model_year || car.year}</td>
							<td>{car.price}</td>
							<td>{car.availability ? 'Yes' : 'No'}</td>
							<td>
								<select
									className="action-select"
									onChange={(e) => {
										const action = e.target.value;
										if (action === 'edit') {
											handleEditModalOpen(car);
											e.target.value = ''
										} else if (action === 'delete') {
											handleDeleteModalOpen(car);
											e.target.value = ''
										}
										}}
									>
								<option value="">Выберите действие</option>
								<option value="edit">Редактировать</option>
								<option value="delete">Удалить</option>
							</select>
								</td>
								</tr>
									))}
	
					</tbody>
        </table>
			</div>
        
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCars.length / carsPerPage)}
        onPageChange={handlePageChange}
      />

      {/* Edit Modal */}
      {editModalOpen && (
        <ModalEdit car={selectedCar} onClose={handleEditModalClose} onEdit={handleEdit} />
      )}

      {/* Delete Modal */}
      {deleteModalOpen && (
        <ModalDelete car={selectedCar} onClose={handleDeleteModalClose} onDelete={handleDelete} />
      )}

      {/* Add Modal */}
      {addModalOpen && <ModalAdd onClose={handleAddModalClose} onAdd={handleAdd} />}
    </div>
  );
}

export default App;



  















                  























