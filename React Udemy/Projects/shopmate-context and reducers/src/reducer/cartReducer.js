export const cartReducer = (state, action) => {
  console.log(action);
  const { type, payload } = action;
  console.log("Type: ", type);

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.products };

    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.products };

    case "UPDATE_TOTAL":
      return { ...state, total: payload.total };

    default:
      throw new Error("No case found in cartReducer");
  }
};
