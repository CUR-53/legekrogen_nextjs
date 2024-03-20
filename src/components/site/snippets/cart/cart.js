import { useBasket } from '@/context/basket';
import styles from './cart.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Cart = () => {
  const { basket, updateBasketItem, removeBasketItem } = useBasket(); // assuming you have a function to remove item from basket
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const getProductByRange = async () => {
      let idRange = basket.map((item) => item.id);

      if (idRange.length > 0) {
        let products = await fetch('api/products?range=' + idRange);
        products = await products.json();

        products.map((product) => {
          let basketAmount = basket.find((item) => item.id === product._id);

          if (basketAmount) {
            product.amount = basketAmount.amount;
          }
        });

        setBasketItems(products);
      }
    };

    getProductByRange();
  }, [basket]);

  const handleQuantityChange = (id, newAmount) => {
    const updatedItems = [...basketItems];
    const itemIndex = updatedItems.findIndex((item) => item._id === id);

    if (itemIndex !== -1) {
      if (newAmount === 0) {
        // Remove item from local storage
        removeBasketItem(id);
      } else {
        updatedItems[itemIndex].amount = newAmount;
        setBasketItems(updatedItems);
        updateBasketItem(id, newAmount);
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* Heading */}

      {/* Basket items */}
      <div className={styles.cartContent}>
        {basketItems.map((basketItem) => {
          return (
            <div key={basketItem._id} className={styles.basketItem}>
              <Image src={basketItem.image} alt={basketItem.title} width={100} height={100} />
              <div className={styles.basketItemcontainer}>
                <div className={styles.contentbox}>
                  <div className={styles.productTitle}>{basketItem.title}</div>
                  <div className={styles.amountButtons}>
                    <button onClick={() => handleQuantityChange(basketItem._id, basketItem.amount - 1)} disabled={basketItem.amount === 0}>
                      <p>-</p>
                    </button>
                    <span>{basketItem.amount}</span>
                    <button onClick={() => handleQuantityChange(basketItem._id, basketItem.amount + 1)}>
                      <p>+</p>
                    </button>
                  </div>
                </div>
                <div className={styles.productAmount}>{(basketItem.price * basketItem.amount).toFixed(2)} kr.</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total / footer */}
      <div className={styles.cartFooter}>
        <div className={styles.totalAmount}>
          <div>I alt</div>
          <div>{basketItems.reduce((acc, item) => acc + item.price * item.amount, 0).toFixed(2)} kr.</div>
        </div>
        <button className={styles.checkoutBtn}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
