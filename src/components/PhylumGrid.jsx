import React from "react";

function PhylumGrid({ taxonomy, onSelect }) {
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Major Taxonomic Phyla
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {taxonomy.map((phylum, idx) => (
          <div
            key={idx}
            onClick={() => onSelect(phylum)}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-300 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
            title={`${phylum.phylum} - approx. ${phylum.species} species`}
          >
            <img
              src={phylum.image}
              alt={phylum.phylum}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Floating Text Overlay */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4">
              <h3 className="text-2xl font-semibold">{phylum.phylum}</h3>
              <p className="text-sm italic">~{phylum.species} species</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PhylumGrid;
