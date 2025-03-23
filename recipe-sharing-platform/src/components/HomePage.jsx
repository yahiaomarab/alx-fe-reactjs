import { useState, useEffect } from "react";

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/data.json");
        const result = await response.json();
        setData(result);
      } catch (error) {}
    };
    fetchData();
  }, []); // Added dependency array to run once

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Recipts</h1>
      {data ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <li key={item.id} className="bg-white rounded-lg shadow-md p-4 align-center py-10">
              <img
                className="mb-4 w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
                src={item.image}
                alt={item.title}
              />
              <h2 className="text-2xl font-semibold mb-2 text-green-600 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-600 " >{item.summary}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default HomePage;
