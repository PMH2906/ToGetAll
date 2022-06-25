import styles from "./Product.module.css";

const Product = ({ img, link }) => {
  return (
    <div className={styles.p}>
      <div className={styles.pbrowser}>
        <div className={styles.pcircle}></div>
        <div className={styles.pcircle}></div>
        <div className={styles.pcircle}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className={styles.pimg} />
      </a>
    </div>
  );
};

export default Product;