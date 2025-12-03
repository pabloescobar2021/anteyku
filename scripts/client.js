
// import './modules/cartClient'
// import './modules/headerClient.js'

// src/scripts/client.js
import { sumCart, getCart, addToCart, clearCart } from '../api/cart.js';
import { isUserAdmin } from '../api/sb_stuff.js';
import { supabase } from '../api/supabase.js';

// Экспортируем в window
window.supabase = supabase;
window.sumCart = sumCart;
window.getCart = getCart;
window.addToCart = addToCart;
window.clearCart = clearCart;
window.isUserAdmin = isUserAdmin;




// Уведомляем, что API готов
window.dispatchEvent(new CustomEvent('apiReady'));
