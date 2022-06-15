import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>ToGet:All</span>
          <br />
          Eat Together!
        </h1>
        <p className={style.desc}>
          1인가구의 증가와 더불어 외롭게 혼밥하는 사람들을 위한 서비스 웹페이지
        </p>
      </div>
      <div className={style.card}>
        <Image
          className={style.img}
          src={process.env.NEXT_PUBLIC_URL + "/img/Logo.png"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
