import React from "react";

const questions = [
  {
    q: "What is taxonomy?",
    a: "Taxonomy is the science of classification of organisms into groups based on similarities and differences."
  },
  {
    q: "What is a phylum?",
    a: "A phylum is a major taxonomic rank below kingdom and above class, grouping organisms based on fundamental body plans."
  },
  {
    q: "Are birds dinosaurs?",
    a: "Yes, modern birds evolved from theropod dinosaurs and are considered living dinosaurs."
  }
];

function QA() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questions.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border-l-4 border-green-600 p-4 rounded shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-brown-800">{item.q}</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QA;
