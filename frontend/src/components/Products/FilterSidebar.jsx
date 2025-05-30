import { useState } from "react";

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const categories = ["Top Wear", "Bottom Wear"];
  const gender = ["Men", "Women"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Navy",
    "Beige",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyster",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];
  return (
    <div className="p-4">
      <h3 className="mb-4 text-xl font-medium text-gray-800">Filter</h3>
      {/* category filter */}
      <div className="mb-6">
        <label>Category</label>
        {categories.map((category) => (
          <div key={category}>
            <input
              type="radio"
              name="Category"
              value={category}
              className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />{" "}
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* gender filter */}
      <div className="mb-6">
        <label>Gender</label>
        {gender.map((gender) => (
          <div key={gender}>
            <input
              type="radio"
              name="Gender"
              value={gender}
              className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />{" "}
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* color filter */}
      <div className="mb-6">
        <label className="mb-2 font-medium text-gray-600 block">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <div key={color}>
              <button
                key={color}
                name="color"
                value={color}
                className="w-8 h-8 border rounded-full border-gray-300 transition hover:scale-105"
                style={{ backgroundColor: color.toLowerCase() }}
              ></button>
            </div>
          ))}
        </div>
      </div>

      {/* Size filter */}
      <div className="mb-6">
        <label className="mb-2 font-medium text-gray-600 block">Size</label>

        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              className="w-4 h-4 mr-2 text-blue-500 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>
      
      {/* Material filter */}
      <div className="mb-6">
        <label className="mb-2 font-medium text-gray-600 block">Material</label>

        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              className="w-4 h-4 mr-2 text-blue-500 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand filter */}
      <div className="mb-6">
        <label className="mb-2 font-medium text-gray-600 block">Brand</label>

        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              className="w-4 h-4 mr-2 text-blue-500 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price range  */}
      <div>
        <label className="mb-2 font-medium text-gray-600 block">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={priceRange[1]}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
       <div className="flex justify-between mt-2 text-gray-600">
       <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
       </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
