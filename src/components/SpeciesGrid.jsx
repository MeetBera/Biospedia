// src/components/SpeciesGrid.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function SpeciesGrid({ selectedFamily, onBack }) {
  const navigate = useNavigate();

  if (!selectedFamily || !selectedFamily.speciesList) {
    return (
      <div className="text-center p-8 text-gray-600">
        No species data available.
        <button
          onClick={onBack}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          ← Back to Families
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={onBack}
        className="mb-8 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        ← Back to Families
      </button>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Species of {selectedFamily.name}
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {selectedFamily.speciesList.map((sp) => (
          <div
            key={sp.id}
            onClick={() => navigate(`/species/${sp.id}`)}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-300 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            title={`${sp.name} - ${sp.scientificName}`}
          >
            <img
              src={sp.image}
              alt={sp.name}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4">
              <h3 className="text-2xl font-semibold">{sp.name}</h3>
              <p className="text-sm italic">{sp.scientificName}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SpeciesGrid;
