  import { sumCart, getCart, addToCart, clearCart } from '../../api/cart.js';
  import { isUserAdmin } from '../../api/sb_stuff.js';
  import { supabase } from "../../api/supabase.js";

  export { 
    sumCart, 
    getCart,
    addToCart,
    clearCart,
    isUserAdmin , 
    supabase }; // экспортируем для глобального доступа

