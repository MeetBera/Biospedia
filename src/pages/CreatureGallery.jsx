import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import landCreatures from "../data/land.js";

const sortOptions = [
  { label: "Name (A-Z)", value: "name" },
  { label: "Size (Alphabetical)", value: "size" },
];

const habitatTypes = [
  "All",
  "Land",
  "Aquatic",
  "Prehistoric Land",
  "Prehistoric Aquatic",
];

const CreatureGallery = () => {
  const [creatures, setCreatures] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [habitatTypeFilter, setHabitatTypeFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

useEffect(() => {
  let filtered = [...landCreatures];

  if (categoryFilter !== "All") {
    filtered = filtered.filter((c) => c.category === categoryFilter);
  }

  if (search.trim()) {
    filtered = filtered.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  switch (sortBy) {
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "speciesCount":
      filtered.sort(
        (a, b) => (b.speciesList?.length || 0) - (a.speciesList?.length || 0)
      );
      break;
    default:
      break;
  }

  setCreatures(filtered);
}, [categoryFilter, sortBy, search]);


  const handleClick = (creature) => {
    navigate(`/species/${creature.id}`, {
      state: {
        phylum: creature.phylum || null,
        class: creature.class || null,
        family: creature.category || null,
      },
    });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl md:text-5xl text-green-700 font-bold">Creatures</h1>

      {/* Filters */}
      <div className="flex gap-4 items-center flex-wrap">

        <select
          value={habitatTypeFilter}
          onChange={(e) => setHabitatTypeFilter(e.target.value)}
          className="border rounded p-2"
        >
          {habitatTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded p-2"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded p-2 w-60"
        />
      </div>

      {/* Creature Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {creatures.map((c) => (
          <div
            key={c.id}
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => handleClick(c)}
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
              <h2 className="text-white md:text-lg text-xs font-bold">{c.name}</h2>
              <p className="text-white  text-xs md:text-sm italic">{c.scientificName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatureGallery;
