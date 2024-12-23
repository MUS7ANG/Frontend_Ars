import React, { useState } from 'react';
import { User, Book, ShoppingBag, Heart, Settings, LogOut } from 'lucide-react';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('purchases');
  
  const userData = {
    name: "Анна Петрова",
    email: "anna@example.com",
    joinDate: "Январь 2024",
    avatarUrl: "/api/placeholder/150/150",
  };

  const purchaseHistory = [
    { id: 1, title: "Мастер и Маргарита", author: "М.А. Булгаков", date: "15.12.2024", price: "850₽" },
    { id: 2, title: "Война и мир", author: "Л.Н. Толстой", date: "10.12.2024", price: "1200₽" },
    { id: 3, title: "Преступление и наказание", author: "Ф.М. Достоевский", date: "05.12.2024", price: "750₽" },
  ];

  const wishlist = [
    { id: 4, title: "Идиот", author: "Ф.М. Достоевский", price: "680₽" },
    { id: 5, title: "Евгений Онегин", author: "А.С. Пушкин", price: "450₽" },
  ];

  return (
    <div className="profile-container">
      <div className="profile-grid">
        {/* Профиль */}
        <div className="profile-sidebar">
          <div className="profile-info">
            <div className="avatar-container">
              <img
                src={userData.avatarUrl}
                alt="Аватар пользователя"
                className="avatar"
              />
            </div>
            <h2 className="username">{userData.name}</h2>
            <p className="user-email">{userData.email}</p>
            <p className="join-date">С нами с {userData.joinDate}</p>
          </div>
          
          <nav className="profile-nav">
            <button
              onClick={() => setActiveTab('purchases')}
              className={`nav-button ${activeTab === 'purchases' ? 'active' : ''}`}
            >
              <ShoppingBag size={20} /> Мои покупки
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`nav-button ${activeTab === 'wishlist' ? 'active' : ''}`}
            >
              <Heart size={20} /> Избранное
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`nav-button ${activeTab === 'settings' ? 'active' : ''}`}
            >
              <Settings size={20} /> Настройки
            </button>
          </nav>
        </div>

        {/* Основной контент */}
        <div className="main-content">
          <div className="content-card">
            <h2 className="content-title">
              {activeTab === 'purchases' && 'История покупок'}
              {activeTab === 'wishlist' && 'Список желаемого'}
              {activeTab === 'settings' && 'Настройки профиля'}
            </h2>

            {activeTab === 'purchases' && (
              <div className="purchases-list">
                {purchaseHistory.map(book => (
                  <div key={book.id} className="book-item">
                    <div className="book-info">
                      <h3 className="book-title">{book.title}</h3>
                      <p className="book-author">{book.author}</p>
                      <p className="purchase-date">Дата покупки: {book.date}</p>
                    </div>
                    <div className="book-actions">
                      <p className="book-price">{book.price}</p>
                      <button className="download-button">
                        Скачать чек
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="wishlist">
                {wishlist.map(book => (
                  <div key={book.id} className="book-item">
                    <div className="book-info">
                      <h3 className="book-title">{book.title}</h3>
                      <p className="book-author">{book.author}</p>
                    </div>
                    <div className="book-actions">
                      <p className="book-price">{book.price}</p>
                      <button className="buy-button">
                        Купить
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="settings-form">
                <div className="form-group">
                  <label>Имя</label>
                  <input
                    type="text"
                    defaultValue={userData.name}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    defaultValue={userData.email}
                  />
                </div>
                <button className="save-button">
                  Сохранить изменения
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;