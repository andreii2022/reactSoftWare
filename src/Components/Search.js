// import React, { useState } from 'react';

// function Search({ onSearch }) {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     onSearch(searchTerm);
//   };

//   return (
//     <div className="search">
//       <input
//         type="text"
//         placeholder="Поиск..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Искать</button>
//     </div>
//   );
// }

// export default Search;

// import React, { useState } from 'react';

// function Search({ onSearch }) {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (event) => {
//     const term = event.target.value;
//     setSearchTerm(term);
//     onSearch(term);
//   };

//   return (
//     <div className="search">
//       <input
//         type="text"
//         placeholder="Поиск..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//     </div>
//   );
// }

// export default Search;

// import React, { useState } from 'react';

// function Search({ onSearch }) {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (event) => {
//     const term = event.target.value.toLowerCase();
//     setSearchTerm(term);
//     onSearch(term);
//   };

//   return (
//     <div className="search">
//       <input
//         type="text"
//         placeholder="Поиск..."
//         value={searchTerm}
//         onChange={handleSearch}
//         autoComplete="off"
//       />
//     </div>
//   );
// }

// export default Search;

import React, { useState } from 'react';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={handleSearch}
        autoComplete="off"
      />
    </div>
  );
}

export default Search;





