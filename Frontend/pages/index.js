import Head from "next/head";
import Mainpage from "../components/MainPage/Mainpage";

export default function Home() {
  return (
    <div>
    <Head>
      <title>ToGetAll</title>
      <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Fredoka+One&family=Gowun+Dodum&family=Jua&display=swap" rel="stylesheet"></link>
      <meta
        name="description"
        content="Web Design, App Development, Content Creation Agency Near Sweden"
      />
    </Head>
    <Mainpage/>
  </div>
  );
}