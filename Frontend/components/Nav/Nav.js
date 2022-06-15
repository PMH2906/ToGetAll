import styles from '../../styles/Nav/Nav.module.css'
import { useRouter } from 'next/router'

export default function Top() {

  const router = useRouter();

  const glory = () => {
    router.push('/user/glory');
  }

  const Login = () => {
    router.push('/user/login');
  }

  const SignUp = () => {
    router.push('/user/signup');
  }

    return (
        <div className={styles['navbar']}>
        <span className={styles['logo']}>ToGet:All</span>
        <ul className={styles['list']}>
          <li className={styles['listItem']}>
            <img
              src="https://th.bing.com/th/id/R.808452de6b9deeaa32776466a0bfcd9d?rik=44gjXDYQLnXfNQ&riu=http%3a%2f%2fcfile201.uf.daum.net%2fimage%2f991891505AE4441D2897DB&ehk=ZjIZjB2QoykhYFITZXBznpHqALV41trpoWN8PY23ErM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
              alt=""
              className={styles['avatar']}
            />
          </li>
          <li onClick={glory} className={styles['listItem']}>Glory</li>
          <li onClick={Login} className={styles['listItem']}>LogIn</li>
          <li onClick={SignUp} className={styles['listItem']}>SignUp</li>
        </ul>
        </div>
    );
        
}