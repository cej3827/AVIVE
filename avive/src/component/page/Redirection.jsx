import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Redirection = (props) => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

//인가코드 백으로 보내기
  useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: "GET",
        url: `http://localhost:8080/oauth?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 보내겠다는뜻
        },
      }).then((res) => { //백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
        console.log(res);
        //계속 쓸 정보들( ex: 이름) 등은 localStorage에 저장해두자
        // localStorage.setItem("name", res.data.account.nickname);
        //로그인이 성공하면 이동할 페이지
        navigate("/Home1");
      });
    };
    kakaoLogin();
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;