import React from "react";

function ClassGrid({ phylum, onBack, onSelect }) {
  return (
    <>
      <button
        onClick={onBack}
        className="mb-8 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        ← Back to Phyla
      </button>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Classes of {phylum.phylum}
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {phylum.classes.map((cls, idx) => (
          <div
            key={idx}
            onClick={() => onSelect(cls)}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-300 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            title={`${cls.name} - approx. ${cls.species} species`}
          >
            <img
              src={cls.image}
              alt={cls.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Floating Text Overlay */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4">
              <h3 className="text-xl font-semibold">{cls.name}</h3>
              <p className="text-sm italic">~{cls.species} species</p>
              <p className="text-sm mt-1">{cls.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ClassGrid;
