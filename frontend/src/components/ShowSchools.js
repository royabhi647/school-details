import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('http://localhost:3001/schools');
        setSchools(response.data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Schools List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {schools.map(school => (
          <div key={school.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transform transition-transform hover:scale-105">
            <div className="overflow-hidden">
              <img src={school.image} alt={school.name} className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110" />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <p className="text-gray-500">{school.city}</p>
              <h2 className="text-xl font-semibold">{school.name}</h2>
              <p className="text-gray-500">{school.address}</p>
              <div className="flex-grow"></div>
              <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSchools;