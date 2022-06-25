import styles from "./About.module.css";

const About = () => {
  return (
    <>

      <div className={styles.i}>
        <div>
          <h1 className={styles.atitle}><strong >About Project</strong></h1>
        </div>
        <div className={styles.a}>
          <div className={styles.aleft}>
            <div className={styles.acardbg}></div>
            <div className={styles.acard}>
              <img
                src="https://media3.giphy.com/media/Lq1WsALYxzNe8L5vcR/giphy.gif?cid=790b76111d315aee06d8fd186bf137e49d0bced6216592f7&rid=giphy.gif&ct=g"
                alt=""
                className={styles.aimg}
              />
            </div>
          </div>
          <div className={styles.aright}>
            <strong className={styles.script}>
              <p className={styles.asub}>
                단순 복습을 위한 프로젝트가 아닌,{<br />} 혼밥러들을 위한 프로젝트이다.
              </p></strong>

            <p className={styles.adesc}>
              <strong> <span>KaKao Map API를 적용하여 단순히 유저가 설정한 지역의 음식점 뿐만 아니라, 주변 상권의 즐길거리도 제공을 한다.</span><br /><br />
                <span> 또한 유저들간 대화를 할 수 있는 대화방을 개설하여 유저들이 가고싶어 하는 음식점을 동행 할 사용자들을 모집하는 기능을 추가하였다.</span></strong>
            </p>
            <div className={styles.aaward}>
              <img src="data:image/png;base64,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" alt="" className={styles.aawardimg} />
              <div className={styles.aawardtexts}>
                <h4 className={styles.aawardtitle}>Playdata Design Awards 2022</h4>
                <p className={styles.aawarddesc}>
                  수상 예정
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
