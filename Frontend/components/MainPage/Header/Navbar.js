import { useState } from "react";
import { useRouter } from 'next/router'
import style from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const Login = () => {
    router.push('/user/login');
  }

  const SignUp = () => {
    router.push('/user/signup');
  }

  const Service = () => {
    router.push('/main2');
  }

  return (
    <div className={style.container}>
      <Link href="/">ToGet:All</Link>
      <ul className={style.list}>
        <li onClick={Login} className={style.listItem}>
          <Link href="/">Login</Link>
        </li>
        <li onClick={SignUp} className={style.listItem}>
          <Link href="/">SignUp</Link>
        </li>
        <li onClick={Service} className={style.listItem}>
          <Link href="/">Service</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
