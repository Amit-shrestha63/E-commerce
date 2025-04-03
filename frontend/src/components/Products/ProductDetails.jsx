import { useState, useEffect } from "react";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This stylish jacket is perfect for any occasion.",
  brand: "Fashion",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(selectedProduct.images[0]?.url);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    }
    if (action === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-6xl p-8 mx-auto bg-white rounded-lg ">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="flex-col hidden mr-6 space-y-4 md:flex">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`object-cover w-20 h-20 border rounded-lg cursor-pointer ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="object-cover w-full h-auto rounded-l"
              />
            </div>
          </div>

          {/* Mobile Thumbnails */}
          <div>
            <div className="flex mb-4 space-x-4 md:hidden overscroll-x-auto">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index}`}
                  className="object-cover w-20 h-20 border rounded-sm cursor-pointer"
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
              {selectedProduct.name}
            </h1>
            <p className="mb-1 text-lg text-gray-600 line-through">
              {selectedProduct.originalPrice}{" "}
            </p>
            <p className="mb-2 text-xl text-gray-500">{selectedProduct.price}</p>
            <p className="mb-4 text-gray-600">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 border rounded-full ${
                      selectedColor === color
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <p className="text-gray-400">Size:</p>
              <div className="flex gap-2 mt-2 ">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity</p>
              <div className="flex items-center mt-2 space-x-4">
                <button
                  className="px-2 py-1 text-lg bg-gray-200 rounded"
                  onClick={() => handleQuantityChange("minus")}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="px-2 py-1 text-lg bg-gray-200 rounded"
                  onClick={() => handleQuantityChange("plus")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;







// import { useState, useEffect } from "react";

// const selectedProduct = {
//   name: "Stylish Jacket",
//   price: 120,
//   originalPrice: 150,
//   description: "This stylish jacket is perfect for any occasion.",
//   brand: "Fashion",
//   material: "Leather",
//   sizes: ["S", "M", "L", "XL"],
//   colors: ["Red", "Blue"],
//   images: [
//     {
//       url: "https://picsum.photos/500/500?random=1",
//       altText: "Stylish Jacket",
//     },
//     {
//       url: "https://picsum.photos/500/500?random=2",
//       altText: "Stylish Jacket 2",
//     },
//   ],
// };

// const ProductDetails = () => {
//   const [mainImage, setMainImage] = useState(null);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     if (selectedProduct?.images?.length > 0) {
//       setMainImage(selectedProduct.images[0].url);
//     }
//   }, [selectedProduct]);

//   const handleQuantityChange = (action) => {
//     if (action === "plus") {
//       setQuantity((prev) => prev + 1);
//     }
//     if (action === "minus" && quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="py-6">
//       <div className="max-w-6xl p-8 mx-auto bg-white rounded-lg ">
//         <div className="flex flex-col md:flex-row">
//           {/* left thumbnails */}
//           <div className="flex-col hidden mr-6 space-y-4 md:flex">
//             {/* pass selectedProduct */}
//             {selectedProduct.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image.url}
//                 alt={image.altText || `Thumbnail ${index}`}
//                 //className="object-cover w-20 h-20 border rounded-sm cursor-pointer"
//                 className={`object-cover w-20 h-20 border rounded-lg cursor-pointer ${
//                   mainImage === image.url ? "border-black" : "border-gray-300"
//                 }`}
//                 onClick={() => setMainImage(image.url)}
//               />
//             ))}
//           </div>
//           {/* main image */}
//           <div className="md:w-1/2">
//             <div className="mb-4">
//               <img
//                 src={selectedProduct.images[0]?.url}
//                 alt="Main Product"
//                 className="object-cover w-full h-auto rounded-l"
//               />
//             </div>
//           </div>

//           {/* mobile thumbnails */}
//           <div>
//             <div className="flex mb-4 space-x-4 md:hidden overscroll-x-auto">
//               {selectedProduct.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={mainImage}
//                   alt={image.altText || `Thumbnail ${index}`}
//                   className="object-cover w-20 h-20 border rounded-sm cursor-pointer"
//                   onClick={() => setMainImage(image.url)}
//                 />
//               ))}
//             </div>
//           </div>
//           {/* Right side */}
//           <div className="md:w-1/2 md:ml-10">
//             <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
//               {selectedProduct.name}
//             </h1>
//             <p className="mb-1 text-lg text-gray-600 line-through">
//               {selectedProduct.originalPrice}{" "}
//             </p>
//             <p className="mb-2 text-xl text-gray-500">
//               {selectedProduct.price}
//             </p>
//             <p className="mb-4 text-gray-600">{selectedProduct.description}</p>
//             <div className="mb-4">
//               <p className="text-gray-700">Color:</p>
//               <div className="flex gap-2 mt-2">
//                 {selectedProduct.colors.map((color, index) => (
//                   <button
//                     key={color}
//                     onClick={() => setSelectedColor(color)}
//                     className={`w-8 h-8 border rounded-full ${
//                       selectedColor === color
//                         ? "border-4 border-black"
//                         : "border-gray-300"
//                     }`}
//                     style={{
//                       backgroundColor: color.toLocaleLowerCase(),
//                       filter: "brightness(0.5)",
//                     }}
//                   ></button>
//                 ))}
//               </div>
//             </div>
//             {/* container for sizes */}
//             <div className="mb-4">
//               <p className="text-gray-400">Size:</p>
//               <div className="flex gap-2 mt-2 ">
//                 {selectedProduct.sizes.map((size) => (
//                   <button
//                     key={size}
//                     className={`px-4 py-2 border roundded ${
//                       selectedSize === size ? "bg-black text-white" : ""
//                     }`}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             {/* container for quantity */}
//             <div className="mb-6">
//               <p className="text-gray-700">Quantity</p>
//               <div className="flex items-center mt-2 space-x-4">
//                 <button
//                   className="px-2 py-1 text-lg bg-gray-200 rounded"
//                   onClick={() => handleQuantityChange("minus")}
//                 >
//                   -
//                 </button>
//                 <span>{quantity}</span>
//                 <button
//                   className="px-2 py-1 text-lg bg-gray-200 rounded"
//                   onClick={() => handleQuantityChange("plus")}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

// import { useState, useEffect } from "react";

// const selectedProduct = {
//     name: "Stylish Jacket",
//     price: 120,
//     originalPrice: 150,
//     description: "This stylish jacket is perfect for any occasion.",
//     brand: "Fashion",
//     material: "Leather",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Red", "Blue"],
//     images: [
//         {
//             url: "https://picsum.photos/500/500?random=1",
//             altText: "Stylish Jacket",
//         },
//         {
//             url: "https://picsum.photos/500/500?random=2",
//             altText: "Stylish Jacket 2",
//         },
//     ],
// };

// const ProductDetails = () => {
//     const [mainImage, setMainImage] = useState(selectedProduct.images[0]?.url || "");

//     return (
//         <div className="py-6">
//             <div className="max-w-6xl p-8 mx-auto bg-white rounded-lg">
//                 <div className="flex flex-col md:flex-row">
//                     {/* Left thumbnails */}
//                     <div className="flex-col hidden mr-6 space-y-4 md:flex">
//                         {selectedProduct.images.map((image, index) => (
//                             <img
//                                 key={index}
//                                 src={image.url}
//                                 alt={image.altText || `Thumbnail ${index}`}
//                                 className={`object-cover w-20 h-20 border rounded-lg cursor-pointer ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
//                                 onClick={() => setMainImage(image.url)}
//                             />
//                         ))}
//                     </div>
//                     {/* Main image */}
//                     <div className="md:w-1/2">
//                         <div className="mb-4">
//                             <img src={mainImage} alt="Main Product" className="object-cover w-full h-auto rounded-lg" />
//                         </div>
//                     </div>
//                     {/* Mobile thumbnails */}
//                     <div className="md:hidden">
//                         <div className="flex mb-4 space-x-4 overflow-x-auto">
//                             {selectedProduct.images.map((image, index) => (
//                                 <img
//                                     key={index}
//                                     src={image.url}
//                                     alt={image.altText || `Thumbnail ${index}`}
//                                     className={`object-cover w-20 h-20 border rounded-lg cursor-pointer ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
//                                     onClick={() => setMainImage(image.url)}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                     {/* Right side (Product Info) */}
//                     <div className="flex-1 p-4">
//                         <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
//                         <p className="text-gray-700">{selectedProduct.description}</p>
//                         <div className="flex items-center mt-4">
//                             <span className="text-lg font-bold text-red-500">${selectedProduct.price}</span>
//                             <span className="ml-2 text-gray-500 line-through">${selectedProduct.originalPrice}</span>
//                         </div>
//                         <div className="mt-4">
//                             <h4 className="font-semibold">Brand:</h4>
//                             <p>{selectedProduct.brand}</p>
//                         </div>
//                         <div className="mt-4">
//                             <h4 className="font-semibold">Material:</h4>
//                             <p>{selectedProduct.material}</p>
//                         </div>
//                         <div className="mt-4">
//                             <h4 className="font-semibold">Sizes:</h4>
//                             <p>{selectedProduct.sizes.join(", ")}</p>
//                         </div>
//                         <div className="mt-4">
//                             <h4 className="font-semibold">Colors:</h4>
//                             <p>{selectedProduct.colors.join(", ")}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;




