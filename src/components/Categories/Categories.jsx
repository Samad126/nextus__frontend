import React from "react";

function Categories({ activeFilter, setActiveFilter }) {
  const categories = [
    {
      title: "Fields",
      options: [
        "Development",
        "Business",
        "IT & Software",
        "Personal development",
        "Design",
        "Marketing",
        "Photography & Video",
        "Teaching & Academics",
      ],
    },
    {
      title: "Language",
      options: [
        "English",
        "Spanish",
        "Turkish",
        "Russian",
        "Italian",
        "Chinese",
      ],
    },
  ];

  return (
    <div className={`categories ${activeFilter ? "active-categories" : ""}`}>
      {categories.map((category, index) => (
        <div key={index} className="categories__row">
          <h1>{category.title}</h1>
          <div className="categories__options">
            {category.options.map((option, index) => (
              <label key={index}>
                <input type="checkbox" />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
