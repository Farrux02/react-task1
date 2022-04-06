import { useState } from "react";
import "./main.css";

const Main = ({ products }) => {
  const newProducts = products.filter((product) => product.status === "new");

  const [show, setShow] = useState(false);

  const allProducts = products?.map((product) => (
    <div key={product.id} className="product-item-wrapper">
      <img src={product.image} alt={product.name} className="product__img" />
      <p className="product__name">{product.name}</p>
      {product.old_price ? (
        <p className="prodcut__old-price">{product.old_price} $</p>
      ) : (
        <p>Скидок нет</p>
      )}
      <p>
        <strong className="prodcut__price">{product.price} $</strong>
      </p>
      {product.monthly_pay ? (
        <p className="product__monthly-pay">
          От {product.monthly_pay} $/12 мес
        </p>
      ) : (
        <p className="product__monthly-pay">Рассрочка отсутствует</p>
      )}
      {product.in_stock !== 0 ? (
        <button className="cart-button">В корзину</button>
      ) : (
        <button className="cart-button cart-button--disabled">Товар недоступен</button>
      )}
    </div>
  ));

  const limitedProducts = products?.slice(0, 6).map((product) => (
    <div key={product.id} className="product-item-wrapper">
      <img src={product.image} alt={product.name} className="product__img" />
      <p className="product__name">{product.name}</p>
      {product.old_price ? (
        <p className="prodcut__old-price">{product.old_price} $</p>
      ) : (
        <p>Скидок нет</p>
      )}
      <p>
        <strong className="prodcut__price">{product.price} $</strong>
      </p>
      {product.monthly_pay ? (
        <p className="product__monthly-pay">
          От {product.monthly_pay} $/12 мес
        </p>
      ) : (
        <p className="product__monthly-pay">Рассрочка отсутствует</p>
      )}
      {product.in_stock !== 0 ? (
        <button className="cart-button">В корзину</button>
      ) : (
        <button className="cart-button cart-button--disabled">Товар недоступен</button>
      )}
    </div>
  ));

  return (
    <main className="products">
      <div className="container">
        <section className="products-new">
          <h1 className="products__heading">Новинки</h1>
          <div className="products-new__items">
            {newProducts?.map((product) => (
              <div key={product.id} className="product-item-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product__img"
                />
                <p className="product__name">{product.name}</p>
                {product.old_price ? (
                  <p className="prodcut__old-price">{product.old_price} $</p>
                ) : (
                  <p>Скидок нет</p>
                )}
                <p>
                  <strong className="prodcut__price">{product.price} $</strong>
                </p>
                {product.monthly_pay ? (
                  <p className="product__monthly-pay">
                    От {product.monthly_pay} $/12 мес
                  </p>
                ) : (
                  <p className="product__monthly-pay">Рассрочка отсутствует</p>
                )}
                {product.in_stock !== 0 ? (
                  <button className="cart-button">В корзину</button>
                ) : (
                  <button className="cart-button cart-button--disabled">
                    Товар недоступен
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="all-products">
          <div className="all-products__heading-wrapper">
            <h1 className="products__heading">Выбор покупателей</h1>
            <span onClick={() => setShow(!show)}>
              {!show ? "Смотреть все" : "Скрыть"}
            </span>
          </div>
          <div className="products-new__items">
            {!show ? limitedProducts : allProducts}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
