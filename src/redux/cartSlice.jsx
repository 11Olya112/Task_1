import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    /*отримує об'єкт елемента для додавання в стан як корисне навантаження.
    Щоб додати елемент, ми спочатку перевіряємо, чи існує він за допомогою findметоду;
    якщо так, то збільшуємо його кількість, а якщо ні, то додаємо до стану за допомогою pushметоду.
    */
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    /* отримує ідентифікатор елемента як корисне навантаження,
    який використовується для пошуку елемента в стані за допомогою findметоду,
    а потім збільшує його кількість на 1.*/
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    /*цей редьюсер отримує ідентифікатор елемента
    як корисне навантаження. За ID знаходимо
    та зменшуємо кількість товару в стані лише
    тоді, коли його кількість більша за 1.*/
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    /* отримує ідентифікатор елемента як корисне навантаження,
    яке потім використовується для видалення стану за допомогою filterметоду. */
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
