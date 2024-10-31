const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_USER":
      sessionStorage.setItem("currentUser", JSON.stringify(action.payload));
      return { ...state, currentUser: action.payload };
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_LOGIN_MODAL":
      return { ...state, openLoginModal: action.payload };
    case "LOGOUT":
      window.location.href = "/";
      sessionStorage.clear();

    default:
      return state;
  }
};

export default reducer;
const initialState = {
  user: null,
  products: [],
  loading: false,
  wishlist: [],
};
