// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { taxonomy } from "../data/taxonomy";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PhylumGrid from "../components/PhylumGrid";
import ClassGrid from "../components/ClassGrid";
import FamilyGrid from "../components/FamilyGrid";

function Home() {
  const [selectedPhylum, setSelectedPhylum] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedFamily, setSelectedFamily] = useState(null);

  const location = useLocation();
const state = location.state;

useEffect(() => {
  if (state?.phylum) setSelectedPhylum(state.phylum);
  if (state?.class) setSelectedClass(state.class);
  if (state?.family) setSelectedFamily(state.family);
}, []);


  return (
    <div>
      {/* <section className="bg-gradient-to-b from-green-400 to-white py-16 text-center px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Encyclopedia of Creatures
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Explore the vast diversity of life on Earth through our comprehensive guide
          to all creatures - from microscopic organisms to the largest mammals.
        </p>
      </section> */}

      <section className="max-w-7xl mx-auto px-4 py-12">
        {!selectedPhylum && (
          <PhylumGrid taxonomy={taxonomy} onSelect={setSelectedPhylum} />
        )}

        {selectedPhylum && !selectedClass && (
          <ClassGrid
            phylum={selectedPhylum}
            onBack={() => setSelectedPhylum(null)}
            onSelect={setSelectedClass}
          />
        )}

        {selectedClass && !selectedFamily && (
          <FamilyGrid
            selectedClass={selectedClass}
            onBack={() => setSelectedClass(null)}
            onSelect={setSelectedFamily}
          />
        )}

        {selectedFamily && (
          <>
            <button
              onClick={() => setSelectedFamily(null)}
              className="mb-8 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              ← Back to Families
            </button>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Species in {selectedFamily.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {selectedFamily.speciesList?.length > 0 ? (
                selectedFamily.speciesList.map((sp) => (
                  <Link
                    to={`/species/${sp.id}`}
                    key={sp.id}
                    state={{
                      family: selectedFamily,
                      class: selectedClass,
                      phylum: selectedPhylum,
                    }}
                    className="block bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-300 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
                  >

                    <div className="relative">
                      <img
                        src={sp.image}
                        alt={sp.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                        <h3 className="text-sm md:text-2xl font-semibold">{sp.name}</h3>
                        <p className="text-xs md:text-sm italic">{sp.scientificName}</p>
                      </div>
                    </div>

                  </Link>
                ))
              ) : (
                <p className="text-center text-gray-600">
                  No species data available in this family.
                </p>
              )}
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Home;