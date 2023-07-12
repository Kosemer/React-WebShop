import { useReducer, useState, useEffect } from "react";
import CartContext from "./cart-context";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
const defaultShippingCost = 1699;
const defaultCartState = {
  // A localStorage-ből olvasom ki az adatokat, ha van.
  items: cartFromLocalStorage ? cartFromLocalStorage.items : [],
  totalAmount: cartFromLocalStorage ? cartFromLocalStorage.totalAmount : 0,
  shippingCost: 1699,
  isLoggedIn: true,
  isBurgerMenuClicked: false,
  orderId: 1000,
  orderStatus: {
    cart: false,
    order: false,
    data: false,
    confirmation: false,
  },
  navigatePages: {
    deliveryMethod: "/delivery-method",
    deliveryDetails: "/delivery-details",
  },
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //Annak ellenőrzése, hogy a termék már a kosár része-e
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    ); // Igaz lesz az értéke, ha az "item.id" egyenlő az "action.item.id"-val.
    const existingCartItem = state.items[existingCartItemIndex]; // Ez azt jelenti, hogy megpróbálok hozzáférni az "items" tömbömben lévő "existingCartItemIndex"-hez. Ilyen elem csak akkor van, ha a "findIndex" talált. Tehát van a kosárban olyan termék, ami megeggyezik azzal amit újra bele akarunk tenni. (Mondjuk kétszer adjuk hozzá a kosárhoz a "Diablo III" játékot).
    //Ha nincs ilyen akkor egy nem létező elemhez próbálunk hozzáférni, így a "carrtItem" nulla lesz.

    let updatedItems;
    let updatedItem;
    let updatedShippingCost;

    if (existingCartItem) {
      // Ha az "existingCartItem" igaz, tehát van már ilyen eleme a kosarunknak
      updatedItem = {
        // akkor az "updatedItem" egyenlő lesz egy objetumban, ahol egy "spread" operátorral hozzáfűzöm az "existingCartItem"-et.
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount, // és frissítem a teljes összeget "totalAmount" a kosárban már meglévő elem "existingCartItem" összegével és a most hozzáadott elem "action.item" összegével.
      };
      updatedItems = [...state.items]; // És akkor az "updatedItems" egyenlő egy új tömbbel, ahová a régi objektumot másolom.
      updatedItems[existingCartItemIndex] = updatedItem; // És az "updatedItems" tömböm "existingCartItemIndex" elemét felülírom az "updatedItem"-el. Tehát a régi objetummal írom felül és így nem kerül mégegyszer hozzáadásra a "Diablo III". Hanem megmarad ugyanúgy egyszer és csak a teljes összeg változik "totalAmount".
    } else {
      // HA EGY ELEMET ELŐSZÖR ADUNK HOZZÁ A KOSÁRHOZ.
      updatedItem = { ...action.item }; // Akkor az "updatedItem" egy vadonatúj elem, ahova másolom az "action.item"-et (Az action.item az "ADD" dispatch-ből jön, tehát amit a gombbal épp hozzáadsz a kosárhoz)
      updatedItems = state.items.concat(action.item); // Az "updatedItems" pedig egyenlő lesz a "state.items" és az "action.item" egyesítésével. Tehát a már meglévő kosár tartalma (state.items) és az újonnan hozzáadott elem (action.item) egyesítése egy új tömbbe.
    }
    // SZÁLLÍTÁSI KÖLTSÉG
    if (updatedTotalAmount >= 100000) {
      updatedShippingCost = "Ingyenes";
    }
    if (updatedTotalAmount < 100000) {
      updatedShippingCost = defaultCartState.shippingCost;
    }
    // LOCALSTORAGE UPDTAE
    const cartItems = {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      shippingCost: updatedShippingCost,
    };
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // LOCALSTORAGE UPDTAE

    const updatedOrderId = state.orderId + 1;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      shippingCost: updatedShippingCost,
      orderId: updatedOrderId,
    };
  }
  if (action.type === "REMOVE") {
    let updatedShippingCost = 0;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      // Ha a kosárban már csak egy darab van az adott elemből, akkor az egész elemet el akarom távolítani a tömbből.
      updatedItems = state.items.filter((item) => item.id !== action.id); // A "filter" egy szűrő, ami egy új tömböt ad vissza. Ha igaz lesz a feltétel akkor az újonnan visszaadott tömbben tartom az elemet. Ha hamis akkor pedig tőrlöm a fentebb lévő ("existingCartItemIndex") "action.id" azonosítóval.
      // "item => item.id !== action.id" Ezzel az ellenőrzéssel megbizonyosodunk róla, hogy minden elem ahol az "item.id" nem egyenlő az "action.id"-val az megmarad a tömbben, de az egyetlen elem, ahol az "item.id" egyenlő az "action.id"-val az törlésre kerül. Ami végülis azt jelenti, hogy az újonnan visszaadott tömbben ez az elem már nem lesz benne.
    } else {
      // Ha több van belőle mint egy, akkor meg akarom tartani az elemet a tömbben, csak az összeget akarom frissíteni.
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    // SZÁLLÍTÁSI KÖLTSÉG
    if (updatedTotalAmount > 100000) {
      updatedShippingCost = "Ingyenes";
    }
    if (updatedTotalAmount < 100000) {
      updatedShippingCost = defaultCartState.shippingCost;
    }
    // LOCALSTORAGE UPDTAE
    const cartItems = {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      shippingCost: updatedShippingCost,
    };
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // LOCALSTORAGE UPDTAE
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      shippingCost: updatedShippingCost,
    };
  }
  return { defaultCartState };
};

function CartProvider(props) {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    cartFromLocalStorage || defaultCartState
  );

  const [cssMobile, setCssMobile] = useState(true);

  useEffect(() => {
    // Beolvassa a shippingCost értékét a localStorage-ból
    const shippingCostFromLocalStorage = localStorage.getItem("shippingCost");
    if (shippingCostFromLocalStorage) {
      dispatchCartAction({
        type: "SET_SHIPPING_COST",
        shippingCost: shippingCostFromLocalStorage,
      });
    }
  }, []);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  /////
  const replaceCartItems = (items) => {
    dispatchCartAction({
      type: "REPLACE",
      items,
    });
  };

  const [parentId, setParentId] = useState("");
  const [nextPage, setNextPage] = useState("");

  //DeliveryMethod values
  const [selectedShippingMethod, setSelectedShippingMethod] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showPaymentErrorMessage, setShowPaymentErrorMessage] = useState(false);

  //DeliveryDetails values
  const [formValues, setFormValues] = useState({
    email: "",
    phone: "",
    name: "",
    postalCode: "",
    city: "",
    street: "",
    floor: "",
  });

  //Order ID
  const [orders, setOrders] = useState([]);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    shippingCost: cartState.shippingCost,
    isLoggedIn: true,
    orderId: defaultCartState.orderId,
    orderStatus: {
      cart: false,
      order: false,
      data: false,
      confirmation: false,
    },
    navigatePages: {
      deliveryMethod: "/delivery-method",
      deliveryDetails: "/delivery-details",
    },
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    cssMobile: cssMobile,
    setCssMobile: setCssMobile,
    replaceCartItems: replaceCartItems,
    parentId: parentId,
    setParentId: setParentId,
    nextPage: nextPage,
    setNextPage: setNextPage,
    selectedShippingMethod: selectedShippingMethod,
    setSelectedShippingMethod: setSelectedShippingMethod,
    selectedPaymentMethod: selectedPaymentMethod,
    setSelectedPaymentMethod: setSelectedPaymentMethod,
    showErrorMessage: showErrorMessage,
    setShowErrorMessage: setShowErrorMessage,
    showPaymentErrorMessage: showPaymentErrorMessage,
    setShowPaymentErrorMessage: setShowPaymentErrorMessage,
    formValues: formValues,
    setFormValues: setFormValues,
    orders: orders,
    setOrders: setOrders,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
