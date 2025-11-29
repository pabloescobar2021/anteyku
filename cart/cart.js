// cart.js
export function addToCart(product) {
  let cart = getCart()

  try{
    const cartData = localStorage.getItem('card')
    if(cartData) {
        const parsed = JSON.parse(cartData)
        if(Array.isArray(parsed)){
            cart = parsed
        } 
    }
  } catch(error){
    console.error('error parse',error)
    localStorage.removeItem('cart')
  }
  
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      quantity: 1
    });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  
  // Показываем уведомление
  showNotification(`${product.name} добавлен в корзину`);

  if (typeof document !== 'undefined') {
    document.dispatchEvent(new CustomEvent('cartUpdated'));
  }
  
  return cart;
}

export function getCart(){
    try{
        const cartData = localStorage.getItem('cart')
        if(cartData){
            const parsed = JSON.parse(cartData)
            return Array.isArray(parsed) ? parsed : []
        }
    } catch(error){
        console.error('error to read cart', error)
    }
    return []
}

export function sumCart(){
    try{
        const cartData = localStorage.getItem('cart')
        if(cartData){
            const parsed = JSON.parse(cartData)

            const sum = parsed.reduce((acc,item) => {
                const qty = typeof item.quantity === 'number' ? item.quantity : 1
                return acc + qty
            }, 0)
            return sum
        }
    } catch(error){
        console.error('error to read cart', error)
    }
    return []
}

export function clearCart(){
    try{
        localStorage.removeItem('cart')

    } catch(error){
        console.log(error,'error')
    }
}

function showNotification(message) {
  // Создаём уведомление
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in';
  notification.innerHTML = `
    <div class="flex items-center gap-3">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Удаляем через 3 секунды
  setTimeout(() => {
    notification.style.animation = 'slide-out 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}