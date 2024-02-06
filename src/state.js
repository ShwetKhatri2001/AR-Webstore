import { create } from "zustand";

const useWishlistState = create((set) => ({
  wishProducts: [],
  addWishProduct: (product) => {
    set((state) => {
      return { wishProducts: [...state.wishProducts, product] };
    });
  },
  removeWishProduct: (product) => {
    set((state) => {
      return {
        wishProducts: state.wishProducts.filter((obj) => obj !== product),
      };
    });
  },
}));

export { useWishlistState };
