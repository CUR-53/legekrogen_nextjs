'use client';
import { square_PegFont } from '@/utils/fonts';
import ProductCard from '../../snippets/product-card/product-card';
import styles from './product-collection.module.css';
import { useEffect, useState } from 'react';

const ProductCollection = ({ data, recommended }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();

      let filteredData = recommended ? data.filter((productfilter) => productfilter.recommended === true) : data;
      setProducts(filteredData);
    };

    getProducts();
  }, [recommended]);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <span className={square_PegFont.className}>{data.title}</span> <span>{data.titleLineTwo}</span>
      </h2>
      <div className={styles.grid}>
        {products.map((Product) => {
          return <ProductCard key={Product._id} product={Product} />;
        })}
      </div>
    </section>
  );
};

export default ProductCollection;
