import React, { useState } from "react";
const cart = {
  products: [
    {
      name: "Stylish jacket",
      size: "L",
      color: "Black",
      price: 50,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual sneakers",
      size: "L",
      color: "white",
      price: 100,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 150,
};

const Checkout = () => {
    const [checkoutID, setCheckoutID] = useState(null);
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    });

    const handleCreateCheckout = (e) => {
        e.preventDefault();
        // this will be an async function and it will fetch the api checkout function from backend
        setCheckoutID("1234");
    }
  return (
    <div className="grid grid-col-1 gap-8 px-6 py-10 mx-auto tracking-tighter lg:grid-cols-2 max-w-7xl">
      {/* Left section */}
      <div className="p-6 bg-white rounded-lg">
        <h2 className="mb-6 text-2xl uppercase">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="mb-4 text-lg">Contact details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>

          <h3 className="mb-4 text-lg">Delivery</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) => {
                    setShippingAddress({
                        ...shippingAddress,
                        firstName: e.target.value,
                    });
                }}
           
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) => {
                    setShippingAddress({
                        ...shippingAddress,
                        lastName: e.target.value,
                    });
                }}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label>Address</label>
            <input 
            type="text" 
            value={shippingAddress.address} 
            onChange={(e) => {
                setShippingAddress({
                    ...shippingAddress,
                    address: e.target.value,
                });
            }}
            className="w-full p-2 border rounded" 
            required />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) => {
                    setShippingAddress({
                        ...shippingAddress,
                        city: e.target.value,
                    });
                }}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) => {
                    setShippingAddress({
                        ...shippingAddress,
                        postalCode: e.target.value,
                    });
                }}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input 
            type="text" 
            value={shippingAddress.country}
            onChange={(e) => {
                setShippingAddress({
                    ...shippingAddress,
                    country: e.target.value,
                });
            }}
            className="w-full p-2 border rounded" 
            required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input 
            type="tel" 
            value={shippingAddress.phone}
            onChange={(e) => {
                setShippingAddress({
                    ...shippingAddress,
                    phone: e.target.value,
                });
            }}
            className="w-full p-2 border rounded" 
            required />
          </div>

          <div className="mt-6">
            {
                !checkoutID ? (
                    <button
                    type="submit"
                    className="w-full py-3 bg-black text-white rounded"
                  >
                    Continue to Payment
                  </button>
                ): (
                    <div>
                        <h3>Pay with Paypal</h3>
                    </div>
                )
            }
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
