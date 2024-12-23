import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Импортируем Link для навигации
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bookImage from '../assets/lf.png';
import bookImage2 from '../assets/im2.png';
import foot from '../assets/Details.png';
import rek from '../assets/red_banner.png';
import "../styles/Books.css";

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    centerMode: true,
    centerPadding: '50px',
    
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Список книг с уникальными ID
  const books = [
    { id: 1, title: "Book Title 1", image: bookImage },
    { id: 2, title: "Book Title 2", image: bookImage2 },
    { id: 3, title: "Book Title 3", image: bookImage },
    { id: 4, title: "Book Title 4", image: bookImage2 },
    { id: 5, title: "Book Title 5", image: bookImage },
  ];
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate('/hello')
  }
  // Рендерим книги с использованием компонента Link
  const renderBooks = (books) => (
    books.map(book => (
      <div key={book.id} className="book-item">
        <Link to={`/book/${book.id}`}> 
          <img src={book.image} alt={book.title} className="book-image" />
        </Link>
        <h4 className="book-title">{book.title}</h4>
      </div>
    ))
  );

  return (
    <div className="homepage">
      <section className="bestsellers">
        <h2>Bestsellers</h2>
        <Slider {...sliderSettings}>
          {renderBooks(books)}
        </Slider>
      </section>

      <section className="featured">
        <h2>Featured Titles</h2>
        <Slider {...sliderSettings}>
          {renderBooks(books)}
        </Slider>
      </section>

      <div className="banner">
        <img src={rek} alt="Banner" />
      </div>

      <section className="top-rated">
        <h2>Top Rated Books</h2>
        <Slider {...sliderSettings}>
          {renderBooks(books)}
        </Slider>
      </section>

      <br></br>
      

      <footer className="footer">
        <img className="fooot" src={foot} alt="Footer Banner" />
      </footer>
    </div>
  );
};

export default HomePage;
