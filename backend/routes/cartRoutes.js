const express = require("express");
const Product = require("../models/Product");
const Cart = require("../models/Cart");

const router = express.Router();
const getCart = async (userId, guestId) => {
  if (userId) {
    return await Cart.findOne({ user: userId });
  } else if (guestId) {
    return await Cart.findOne({ guestId: guestId });
  }
};

// @route POST /api/cart
// @desc Add product to cart for the guest ot the logged in user
// @access Public
router.post("/", async (req, res) => {
  console.log("Post /api/cart called");

  const { productId, quantity, size, color, guestId, userId } = req.body;

  const product = await Product.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  //   console.log("Product found", productId);

  let cart = await getCart(userId, guestId);

  if (cart) {
    console.log("dosent");
  } else {
    const newCart = await Cart.create({
      user: userId ? userId : undefined,
      guestId: guestId ? guestId : "guest_" + new Date().getTime(),
    });
  }
});


module.exports = router;
