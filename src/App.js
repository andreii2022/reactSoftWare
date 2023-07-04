// import React, { useState } from 'react';

// import data from './mock-data.json'



// function App() {

// const [contacts, setContact] = useState(data)

//   return (
// <div className='app-container'>
//   <table >
//     <thead>
//       <tr>
//         <th>Company</th>   
//         <th>Model</th>
//         <th>VIN</th>
//         <th>Color</th>
//         <th>Year</th>
//         <th>Price</th>
//         <th>Availability</th>
//         <th>Actions</th>
        
//       </tr>
//     </thead>
//     <tbody>
//       {contacts.map((contact) => (
//         <tr>
//         <td>{contact.car}</td>        
//         <td>{contact.car_model}</td>
//         <td>{contact.car_vin}</td>
//         <td>{contact.car_color}</td>
//         <td>{contact.car_model_year}</td>
//         <td>{contact.price}</td>
//         <td>{contact.availability}</td>
//         <td>
//         <select>
//                   <option value="">Выберите действие</option>
//                   <option value="edit">Редактировать</option>
//                   <option value="delete">Удалить</option>
//                   {/* Добавьте дополнительные опции здесь */}
//                 </select>
//         </td>
//       </tr>
//       ))}
      
//     </tbody>
//   </table>
// </div>




//   )
// }

// export default App;






// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await fetch('https://myfakeapi.com/api/cars/');
//         const data = await response.json();
//         setCars(data.cars);
//       } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//       }
//     };

//     fetchCars();
//   }, []);

//   return (
//     <div className='app-container'>
//       <table>
//         <thead>
//           <tr>
//             <th>Company</th>
//             <th>Model</th>
//             <th>VIN</th>
//             <th>Color</th>
//             <th>Year</th>
//             <th>Price</th>
//             <th>Availability</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cars.map((car) => (
//             <tr key={car.id}>
//               <td>{car.car}</td>
//               <td>{car.car_model}</td>
//               <td>{car.car_vin}</td>
//               <td>{car.car_color}</td>
//               <td>{car.car_model_year}</td>
//               <td>{car.price}</td>
//               <td>{car.availability}</td>
//               <td>
//                 <select>
//                   <option value="">Выберите действие</option>
//                   <option value="edit">Редактировать</option>
//                   <option value="delete">Удалить</option>
//                   {/* Добавьте дополнительные опции здесь */}
//                 </select>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        &lt;
      </button>
      <span>{currentPage}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
}

function App() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const carsPerPage = 14;

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

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <div className="app-container">
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
                  {/* Добавьте дополнительные опции здесь */}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;













