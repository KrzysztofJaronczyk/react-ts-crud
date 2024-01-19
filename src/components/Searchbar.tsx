import React from 'react';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';

const SearchBar: React.FC = () => {
    return (
        <div className="flex items-center justify-center relative">
            <input
                type="text"
                placeholder="Search..."
                className="text-gray-300 bg-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            />
            <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400">
        <MagnifyingGlassCircleIcon className="h-5 w-5" />
      </span>
        </div>
    );
};

export default SearchBar;