import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
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

  // useEffect(() => {
  //   const params = Object.fromEntries([...searchParams]);

  //   setFilters({
  //     category: params.category || "",
  //     gender: parrams.gender || "",
  //   })
  // })

  const handleFilterChange = (e) => {
    console.log(e.target, "here");
    const { name, value, type, checked } = e.target;
    
    let newFilters = { ...filters };

    if (type ==="checkbox") {
      //make sure multiple values are selected when checkbox is clicked
      if (checked){
        newFilters[name]= [ ...(newFilters[name] || []), value ];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }

    } else {
      newFilters[name] = value;
    };
    setFilters(newFilters);
    updateURLParams(newFilters);

    console.log(newFilters, "nf");
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0){
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]){
        params.append(key, newFilters[key]);
      }
    });
    console.log(params, "after appending");
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };
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
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked= { filters.category === category }
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
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked= { filters.gender === gender}
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
            
              <button
                key={color}
                name="color"
                value={color}
                onClick={handleFilterChange}
                className="w-8 h-8 border rounded-full border-gray-300 transition hover:scale-105"
                style={{ backgroundColor: color.toLowerCase() }}
              ></button>
           
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
              onChange={handleFilterChange}
              checked= { filters.size.includes(size)}
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
              onChange={handleFilterChange}
              checked= { filters.material.includes(material)}
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
              onChange={handleFilterChange}
              checked= { filters.brand.includes(brand)}
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
