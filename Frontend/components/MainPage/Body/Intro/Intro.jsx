import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.i}>
      <div className={styles.left}>
        <div className={styles.leftwrapper}>
          <h2 className={styles.iintro}>Hello, My project name is</h2>
          <h1 className={styles.iname}>ToGet:All</h1>
          <div className={styles.ititle}>
            <div className={styles.ititlewrapper}>
              <div className={styles.ititleitem}>ToGet : 함께 얻어요</div>
              <div className={styles.ititleitem}>All : 모든것을</div>
              <div className={styles.ititleitem}>ToGet:All : 모든것을 함께 얻어요</div>
              <div className={styles.ititleitem}>환영합니다!</div>
              <div className={styles.ititleitem}>By PlayData</div>
            </div>
          </div>
          <p className={styles.idesc}>
            <br /><br />
            <strong><span className={styles.span}>방문해주셔서 감사합니다! 이 서비스는 쓸쓸히</span><br />
              <br /><br /><br />
              <span className={styles.span}>혼밥을 하는 사용자들에게 초점이 맞춰진 서비스입니다.</span> <br />
              <br /><br /><br />
              <span className={styles.span}> 저희 ToGet:All을 자주 방문하시어 쓸쓸한 식사시간이 아닌</span><br />
              <br /><br /><br />
              <span className={styles.span}>행복한 식사시간을 즐기시길 바랍니다!</span></strong>
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className={styles.iscroll}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className={styles.iright}>
        <div className={styles.ibg}></div>
        <img className={styles.circle} src="./img/spoon.png" alt="" />
      </div>
    </div>
  );
};

export default Intro;