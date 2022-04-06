import React from "react";
import { ReactComponent as LogoIcon } from "../../Assets/image/MaxProff.svg";
import { cart, compare, favour, login } from "../../Assets/image";
import "./header.css";

const Header = ({ categories }) => {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="header-top-inner">
            <a href="!#" className="header-top__icon">
              <LogoIcon />
            </a>
            <form className="header-top-search-form">
              <input className="header-top-search-form__input" type="text" placeholder="Искать товары"/>
              <button className="header-top-search-form__btn">Search</button>
            </form>
            <div className="header-top-box">
              <ul className="header-top-box__list">
                <li className="header-top-box__list-item">
                  <a href="!#" className="header-top-box__list-link">
                    <img src={favour} alt="favourites" />
                    <p>Избранное</p>
                  </a>
                </li>
                <li className="header-top-box__list-item">
                  <a href="!#" className="header-top-box__list-link">
                    <img src={compare} alt="comparing" />
                    <p>Сравнение</p>
                  </a>
                </li>
                <li className="header-top-box__list-item">
                  <a href="!#" className="header-top-box__list-link">
                    <img src={cart} alt="cart" />
                    <p>Корзина</p>
                  </a>
                </li>
                <li className="header-top-box__list-item">
                  <a href="!#" className="header-top-box__list-link">
                    <img src={login} alt="login" />
                    <p>Войти</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <ul className="categorie-list">
            {categories?.map((categorie) => (
              <li key={categorie.id} className="categorie-list__item">
                <a href="!#">{categorie.name}</a>
              </li>
            ))}
            <li style={{marginLeft: '420px'}}>
              <a href="">Repo</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
