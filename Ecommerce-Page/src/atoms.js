import { atom } from "recoil";

export const quantityAtom = atom({
  key: "quantityAtom",
  default: 0,
});

export const cartState = atom({
  key: "cartState",
  default: "Cart is empty",
});

export const cartOpenClose = atom({
  key: "cartOpenClose",
  default: false,
});

export const cartQuantity = atom({
  key: "cartQuantity",
  default: 0,
});

export const modelImageSlider = atom({
  key: "modelImageSlider",
  default: false,
});
