import { useState } from "react";
import styles from "./Register.module.css";
import FormInput from "./FormInput";
import { postChatAPI } from '../../../../lib/api/chat'
import { useRouter } from 'next/router';

const Register = () => {

  const router = useRouter();

  const [values, setValues] = useState({
    title: "",
    limitedPerson: "",
    foodCategory: "",
    location: "",
  });

  const inputs = [

    {
      id: 1,
      name: "title",
      type: "text",
      placeholder: "title",
      label: "채팅방 이름을 설정해주세요.",
      required: true,
    },
    {
      id: 2,
      name: "limitedPerson",
      type: "text",
      placeholder: "limited person",
      label: "제한 인원수를 적어주세요.",
      required: true,
    },
    {
      id: 3,
      name: "foodCategory",
      type: "text",
      placeholder: "food category",
      label: "같이 드시고 싶은 음식을 설정해주세요.",
      required: true,
    },
    {
      id: 4,
      name: "location",
      type: "text",
      placeholder: "location",
      label: "회원님이 원하는 식당의 지역을 설정해주세요.",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addChat = () => {

    const data =
    {
      title: values.title,
      limitedPerson: values.limitedPerson,
      foodCategory: values.foodCategory,
      location: values.location
    }

    postChatAPI(data);
    router.replace('https://mihee.herokuapp.com/chat.html')
  }

  return (
    <div className={styles['register']}>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <h1 className={styles['h1']}>Toget:All</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className={styles['button']} type="button" onClick={addChat}>채팅방 활성화</button>
      </form>
    </div>
  );
};

export default Register;
