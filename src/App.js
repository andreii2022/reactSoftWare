
import React, { useState, useEffect } from 'react';
import './App.css';
import Pagination from './Components/Pagination';
import Search from './Components/Search';

function App() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const carsPerPage = 10;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('https://myfakeapi.com/api/cars/');
        const data = await response.json();
        setCars(data.cars);
        setTotalPages(Math.ceil(data.cars.length / carsPerPage));
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchCars();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  const filteredCars = cars.filter((car) =>
    car.car.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <div className="app-container">
      <Search onSearch={handleSearch} />
      <table>
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
              <td>{car.car}</td>
              <td>{car.car_model}</td>
              <td>{car.car_vin}</td>
              <td>{car.car_color}</td>
              <td>{car.car_model_year}</td>
              <td>{car.price}</td>
              <td>{car.availability}</td>
              <td>
                <select>
                  <option value="">Выберите действие</option>
                  <option value="edit">Редактировать</option>
                  <option value="delete">Удалить</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCars.length / carsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;






















