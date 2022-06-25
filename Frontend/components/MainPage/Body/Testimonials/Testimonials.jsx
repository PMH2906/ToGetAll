import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "서예원",
      title: "FRONT-END",
      img:
        "./img/yw.jpg",
      desc:
        "어떤 프로젝트든 하다 보면 경험하지 못했던 것을 많이 배우게 되는 것 같다. 다 같이 으쌰으쌰한 팀원들에게 너무 감사하고 팀원들 짱짱!",
      git: "https://github.com/woodybuzz02"
    },
    {
      id: 2,
      name: "백체은",
      title: "BACK-END",
      img:
        "./img/ce.jpg",
      desc:
        "내가 서있는 곳은 우매함의 봉우리였다. 가능할 줄 알았던 대부분은 할 수 없었다. 열정의 폭주기관차 팀원들 덕분에 이나마 할 수 있었다.",
      git: "https://github.com/sairo415"

    },
    {
      id: 3,
      name: "박미희",
      title: "BACK-END",
      img:
        "./img/mh.jpg",
      desc:
        "ToGetAll이라는 하나의 웹 서비스를 구현하면서, 팀원들과의 협업과 소통, front, backend 지식을 많이 배울 수 있었습니다.",
      featured: true,
      git: "https://github.com/PMH2906"
    },

  ];
  const data2 = [
    {
      id: 4,
      name: "김영광",
      title: "FRONT-END",
      img:
        "./img/yk.jpg",
      desc:
        "이번 프로젝트는 평소와 달리 4일이라는 기간을 줘 기획 단계부터 구현까지 천천히 경험할 수 있어 뜻깊은 시간이었고, 팀원들에게 감사하다.",
      git: "https://github.com/95Glory"
    },
    {
      id: 5,
      name: "원종혁",
      title: "FRONT-END",
      img:
        "./img/jh.jpg",
      desc:
        "프로젝트를 통해 실력에 대한 현실적인 좌표를 확인할 수 있었고 공통된 목표를 위해 팀원들과 의견을 조율해 협업해가는 좋은 경험을 했다.",
      git: "https://github.com/Gaboza-JH"
    },
  ]

  return (
    <div className={styles.i}>
      <div >
        <div className={styles.testimonials} id="testimonials">
          <h1 className={styles.h1}>Members</h1>
          <div className={styles.container}>
            {data.map((d) => (
              <div className={styles.card}>
                <div className={styles.top}>
                  <img src="./img/right-arrow.png" className={styles.left} alt="" />
                  <img src={d.img} className={styles.user} alt="" />
                  <a href={d.git}><img src="./img/github3.png" className={styles.right} alt="" /></a>
                </div>
                <div className={styles.center}>
                  {d.desc}
                </div>
                <div className={styles.bottom}>
                  <h3 className={styles.h3}>{d.name}</h3>
                  <h4 className={styles.h4}>{d.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.testimonials} id="testimonials">
          <div className={styles.container}>
            {data2.map((d2) => (
              <div className={styles.card}>
                <div className={styles.top}>
                  <img src="./img/right-arrow.png" className={styles.left} alt="" />
                  <img src={d2.img} className={styles.user} alt="" />
                  <a href={d2.git}><img src="./img/github3.png" className={styles.right} alt="" /></a>
                </div>
                <div className={styles.center}>
                  {d2.desc}
                </div>
                <div className={styles.bottom}>
                  <h3 className={styles.h3}>{d2.name}</h3>
                  <h4 className={styles.h4}>{d2.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}