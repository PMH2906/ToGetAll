import React from 'react'
import { useState } from "react";
import { useRouter } from 'next/router'
import styles from './Goto.module.css'
import Link from "next/link";

const Goto = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const GoMain = () => {
    router.push('/main2');
  }

  return (
    <>
      <div className={styles.pl}>
        <div className={styles.pltexts}>
          <h1 className={styles.pltitle}>자, 그럼 우리이제 식사하러 가보실까요?</h1>
          <div class={styles.buttoncontainer}>
            <button onClick={GoMain} className={styles.btn}><Link href="/main2">OK,Let's Go!</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Goto