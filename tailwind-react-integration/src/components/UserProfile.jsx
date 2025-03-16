import React from "react";

function UserProfile() {
  return (
    <div className=" my-20 bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-10 rounded-lg shadow-lg text-center transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h1 className=" my-4 text-lg sm:text-lg md:text-xl text-blue-800 my-3 transition-colors duration-300 ease-in-out hover:text-blue-500">
        John Doe
      </h1>
      <p className="text-sm sm:text-sm md:text-base text-gray-600 px-2">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
