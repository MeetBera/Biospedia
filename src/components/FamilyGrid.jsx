import React from "react";

function FamilyGrid({ selectedClass, onBack, onSelect }) {
  return (
    <>
      <button
        onClick={onBack}
        className="mb-8 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        ← Back to Classes
      </button>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Families of {selectedClass.name}
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {selectedClass.families?.length > 0 ? (
          selectedClass.families.map((family, idx) => (
            <div
              key={idx}
              onClick={() => onSelect(family)}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-300 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
              title={`${family.name} - approx. ${family.species} species`}
            >
              <img
                src={family.image}
                alt={family.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Floating Overlay Text */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                <h3 className="text-2xl font-semibold">{family.name}</h3>
                <p className="text-sm italic">~{family.species} species</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No families data available.
          </p>
        )}
      </div>
    </>
  );
}

export default FamilyGrid;
