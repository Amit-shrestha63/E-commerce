import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductByFilters = createAsyncThunk(
  "products/fetchProductByFilters",
  async ({
    collection,
    size,
    color,
    gender,
    minPrice,
    maxPrice,
    sortBy,
    search,
    category,
    material,
    brand,
    limit,
  }) => {
    const query = new URLSearchParams();
    if (collection) query.append("collection", collection);
    if (collection) query.append("size", size);
    if (collection) query.append("color", color);
    if (collection) query.append("gender", gender);
    if (collection) query.append("minPrice", minPrice);
    if (collection) query.append("maxPrice", maxPrice);
    if (collection) query.append("sortBy", sortBy);
    if (collection) query.append("search", search);
    if (collection) query.append("category", category);
    if (collection) query.append("material", material);
    if (collection) query.append("brand", brand);
    if (collection) query.append("limit", limit);

    const response = await axios.get(
      `${imort.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`
    );

    return response.data;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: null,
    similarProducts: [],
    loading: false,
    error: null,
    filters: {
      category: "",
      size: "",
      color: "",
      gender: "",
      brand: "",
      minPrice: "",
      maxPrice: "",
      sortBy: "",
      search: "",
      material: "",
      collection: "",
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },

    clearFilters: (state) => {
      state.filters = {
        category: "",
        size: "",
        color: "",
        gender: "",
        brand: "",
        minPrice: "",
        maxPrice: "",
        sortBy: "",
        search: "",
        material: "",
        collection: "",
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductByFilters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductByFilters.fulfilled, (state, action) => {
        state.loading = true;
        state.products = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchProductByFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setFilters, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;