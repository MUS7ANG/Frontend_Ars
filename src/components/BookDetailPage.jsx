import React, { useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus, ChevronRight } from 'lucide-react';
import "../styles/Cart.css";
import bookImage2 from '../assets/im2.png';

// Sample book data
const books = [
  {
    id: 1,
    title: 'Война и мир',
    author: 'Лев Толстой',
    price: 999,
    description: 'Величайший роман о жизни российского общества в эпоху наполеоновских войн.',
    imageUrl: bookImage2
  },
  {
    id: 2,
    title: 'Преступление и наказание',
    author: 'Федор Достоевский',
    price: 799,
    description: 'Психологический роман о моральных исканиях и внутренних конфликтах.',
    imageUrl: bookImage2
  },
  {
    id: 3,
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    price: 899,
    description: 'Культовый роман о дьяволе, побывавшем в Москве 1930-х годов.',
    imageUrl: bookImage2
  },

  {
    id: 3,
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    price: 899,
    description: 'Культовый роман о дьяволе, побывавшем в Москве 1930-х годов.',
    imageUrl: bookImage2
  }

  ,

  {
    id: 3,
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    price: 899,
    description: 'Культовый роман о дьяволе, побывавшем в Москве 1930-х годов.',
    imageUrl: bookImage2
  }

  
];

const CartPage = () => {
  const [cart, setCart] = useState(
    books.map(book => ({...book, quantity: 1})).slice(0, 2)
  );

  const removeFromCart = (bookId) => {
    setCart(cart.filter(item => item.id !== bookId));
  };

  const updateQuantity = (bookId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(bookId);
    } else {
      setCart(cart.map(item => 
        item.id === bookId 
          ? {...item, quantity: newQuantity} 
          : item
      ));
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const delivery = subtotal > 0 ? 300 : 0;
    return subtotal + delivery;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Корзина</h1>
          <span className="ml-4 text-gray-600">({cart.length} книг)</span>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <ShoppingCart className="mx-auto mb-4 text-gray-400" size={64} />
            <p className="text-xl text-gray-600">Ваша корзина пуста</p>
            <button 
              className="mt-4 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
            >
              Продолжить покупки
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Список товаров */}
            <div className="md:col-span-2 space-y-6">
              {cart.map(item => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow-md p-6 flex items-center"
                >
                  <img 
                    
                    className="w-24 h-36 object-cover mr-6"
                  />
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-gray-600">{item.author}</p>
                    <p className="text-gray-500 mt-2">{item.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 p-1 rounded"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 p-1 rounded"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xl font-bold mr-4">
                          {item.price * item.quantity} $
                        </span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Блок оформления заказа */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Сумма заказа</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Товары</span>
                  <span>{calculateSubtotal()} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span>{calculateSubtotal() > 0 ? '300 ₽' : '0 ₽'}</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-xl">
                  <span>Итого</span>
                  <span>{calculateTotal()} ₽</span>
                </div>
                <button 
                  className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition flex items-center justify-center"
                >
                  Оформить заказ
                  <ChevronRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;