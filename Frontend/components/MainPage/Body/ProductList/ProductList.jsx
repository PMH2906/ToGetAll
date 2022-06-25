import styles from "./ProductList.module.css";
import Product from "./Product/Product";

const ProductList = () => {
  const product1 = [
    {
      id: 1,
      img: "https://user-images.githubusercontent.com/102516088/174077587-377e80d0-1a4b-4caa-84dc-d9873c8c5a00.gif",
    },]

  return (
    <div className={styles.pl}>
      <div className={styles.pltexts}>
        <h1 className={styles.pltitle}>Implementation Example</h1>
        <h2>It's ToGet:All</h2>
        <p className={styles.pldesc}>
          <strong> kakao map API를 활용하여 사용자가 설정한 위치 근방의 음식점을 조회할수 있을 뿐더러 '노래방','화장품'과 같은{<br />}{<br />} Keyword를 작성하여
            사용자의 needs를 충족시킬수 있게 하였습니다. 또한, 사용들간 채팅프로그램을 구현하여 {<br />}{<br />}같이 식사할 유저들을 모을수 있으며 현재 모집중인
            식사동행 채팅에 참여 할 수 있도록 하였습니다. </strong>
        </p>
      </div>
      <div className={styles.pllist}>
        {product1.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
