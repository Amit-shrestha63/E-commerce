import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrders = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: {
        city: "Sydney",
        country: "Australia",
      },
      orderItems: [
        {
          productId: "1",
          name: "T-shirt",
          price: 100,
          quantity: 1,
          image: "https://picsum.photos/500/500?random=1",
        },
        {
          productId: "2",
          name: "Shirt",
          price: 100,
          quantity: 1,
          image: "https://picsum.photos/500/500?random=2",
        },
      ],
    };

    setOrderDetails(mockOrders);
  }, [id]);

  return (
    <div className="p-4 mx-auto max-w-7xl sm:p-6">
      <h2 className="mb-6 text-xl font-bold sm:text-2xl">Order Details</h2>

      {!orderDetails ? (
        <p>No Order Details Found</p>
      ) : (
        <div className="p-4 border rounded-lg sm:p-6">
          {/* Order information */}
          <div className="flex flex-col mb-8 sm:flex-grow">
            <div>
              <h3 className="text-lg font-semibold md:text-xl">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col mt-4 sm:items-end sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-700 text-white"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-red-700 text-white"
                } px-3 py-1 rounded-full text-sm font-medium`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending"}
              </span>
            </div>
          </div>

          {/* Payment & Shipping Info */}
          <div className="grid grid-cols-1 gap-8 mb-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h4 className="mb-2 text-lg font-semibold">Payment Info</h4>
              <p>Payment Method: {orderDetails.paymentMethod}</p>
              <p>Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}</p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold">Shipping Info</h4>
              <p>Shipping Method: {orderDetails.shippingMethod}</p>
              <p>
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>

          {/* Product List */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Products</h4>
            <table className="min-w-full mb-4 text-gray-600">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Product</th>
                  <th className="px-4 py-2 border">Unit Price</th>
                  <th className="px-4 py-2 border">Qty</th>
                  <th className="px-4 py-2 border">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr key={item.productId} className="border-b">
                    <td className="flex items-center gap-3 px-4 py-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-600 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="px-8 py4">${item.price}</td>
                    <td className="px-8 py-4">${item.quantity}</td>
                    <td className="px-8 py-4">
                      ${item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Back to orders list */}
          <Link to="/my-orders" className="text-blue-500 hover:underline">Back to my orders</Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
