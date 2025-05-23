import React, { useState } from "react";

const sampleData = [
  {
    name: "Lion",
    class: "Mammalia",
    family: "Felidae",
    traits: ["Warm-blooded", "Fur", "Live birth"]
  },
  {
    name: "Crocodile",
    class: "Reptilia",
    family: "Crocodylidae",
    traits: ["Cold-blooded", "Scales", "Lays eggs"]
  }
];

function Compare() {
  const [selected, setSelected] = useState(sampleData);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Compare Organisms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {selected.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-green-100"
          >
            <h3 className="text-2xl font-semibold text-brown-800 mb-2">{item.name}</h3>
            <p className="text-gray-700 mb-1"><strong>Class:</strong> {item.class}</p>
            <p className="text-gray-700 mb-3"><strong>Family:</strong> {item.family}</p>
            <ul className="list-disc pl-6 text-gray-700">
              {item.traits.map((trait, i) => (
                <li key={i}>{trait}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Compare;