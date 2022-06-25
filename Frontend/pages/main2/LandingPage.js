import React, { useState } from 'react'
import Chats from './Chats';
import MapContainer from './MapContainer'
import styles from './LandingPage.module.css'
import { useRouter } from 'next/router';

function LandingPage(props) {
  const router = useRouter();
  const intoChatSetting = () => {
    router.replace('/main2/chatSetting')
  }

  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');
  const [chats, setChats] = useState(props.chats);
  const [location, setLocation] = useState('');
  const [foodCategory, setCategory] = useState('');
  const locationChangeHandler = (event) => {
    const Text = `${event.target.value} ${foodCategory}`;
    setInputText(Text);
    setLocation(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    const Text = `${location} ${event.target.value}`;
    setInputText(Text);
    setCategory(event.target.value);
  };
  const API = async (location, foodCategory) => {
    try {
      const res = await fetch(`http://localhost:8080/chat/${location}/${foodCategory}`);
      const chatsData = await res.json();
      setChats(chatsData);
    } catch (error) {
      setChats(null);
    }
  };
  const inputTextChangeHandler = () => {
    setPlace(InputText);
    setInputText('');
    API(location, foodCategory);
  };
  return (
    <>

      <div className={styles.divbox}>
        <div className={styles.d}>
          <select className={styles.selectBox} name="Location" id="Location" onChange={locationChangeHandler} >
            <option value="서울" >지역 선택</option>
            <option value="공릉">공릉</option>
            <option value="계양">계양</option>
            <option value="홍대">홍대</option>
            <option value="강남">강남</option>
            <option value="서초">서초</option>
            <option value="망원">망원</option>
            <option value="노원">노원</option>
            <option value="혜화">혜화</option>
            <option value="반포">반포</option>
            <option value="뚝섬">뚝섬</option>
            <option value="일산">일산</option>
          </select>
        </div>
        <select className={styles.selectBox} name="Category" id="Category" onChange={categoryChangeHandler} >
          <option value="음식 종류 선택">음식 종류 선택</option>
          <option value="한식">한식</option>
          <option value="중식">중식</option>
          <option value="양식">양식</option>
          <option value="패스트푸드">패스트푸드</option>
          <option value="카페">카페</option>
          <option value="술집">술집</option>
          <option value="빵집">빵집</option>
          <option value="삼겹살">삼겹살</option>
          <option value="마라탕">마라탕</option>
          <option value="엽기떡볶이">엽기떡볶이</option>
          <option value="스콘">스콘</option>
          <option value="소주">소주</option>
        </select>
        <div>
          <button className={styles['button']} type="submit" onClick={inputTextChangeHandler} >검색</button>
        </div>
      </div>
      <MapContainer searchPlace={Place} />
      <button className={styles['button']} onClick={intoChatSetting}>채팅방 생성</button>
      <Chats chats={chats} />
    </>
  )
}
export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://localhost:8080/chat/옥수/햄버거");
    const chats = await res.json();
    return {
      props: { chats }
    };
  } catch (error) {
    console.log(error);
    return {
      props: {}
    }
  }
};

export default LandingPage;