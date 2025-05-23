import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { taxonomy } from "../data/taxonomy";

function SpeciesDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve passed state
  const { phylum, class: cls, family } = location.state || {};

  let speciesData = null;

  outer: for (const ph of taxonomy) {
    for (const cl of ph.classes) {
      if (!cl.families) continue;
      for (const fam of cl.families) {
        if (!fam.speciesList) continue;
        const found = fam.speciesList.find((sp) => sp.id === id);
        if (found) {
          speciesData = {
            ...found,
            family: fam.name,
            class: cl.name,
            phylum: ph.phylum,
          };
          break outer;
        }
      }
    }
  }

  if (!speciesData) {
    return (
      <div className="max-w-2xl mx-auto p-10 text-center bg-white rounded-2xl shadow-xl mt-20 border border-green-100">
        <h2 className="text-4xl font-bold mb-4 text-green-900">Species Not Found</h2>
        <p className="text-green-700 mb-6">We couldn't locate the species you're looking for.</p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-800 transition"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8 sm:p-12 bg-white rounded-3xl shadow-2xl mt-16 border border-green-200">
      <button
        onClick={() =>
          navigate("/creatures", {
            state: { phylum, class: cls, family },
          })
        }
        className="mb-6 px-5 py-2 bg-green-700 text-white rounded-full shadow hover:bg-green-800 transition flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Go Back
      </button>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="rounded-xl overflow-hidden shadow-md border border-green-100">
          <img
            src={speciesData.image}
            alt={speciesData.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-4xl font-extrabold text-green-900">{speciesData.name}</h1>
          <h2 className="text-xl italic text-green-700">{speciesData.scientificName}</h2>
          <p className="text-lg text-green-800 leading-relaxed">{speciesData.description}</p>
        </div>
      </div>

      {/* Taxonomy Details */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: "Phylum", value: speciesData.phylum },
          { label: "Class", value: speciesData.class },
          { label: "Family", value: speciesData.family },
          { label: "Size", value: speciesData.size },
          { label: "Habitat", value: speciesData.habitat },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white border border-green-500 p-4 rounded-xl shadow-sm"
          >
            <span className="block text-sm text-green-600 uppercase tracking-wide mb-1">
              {item.label}
            </span>
            <span className="text-lg font-semibold text-green-900">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpeciesDetail;
