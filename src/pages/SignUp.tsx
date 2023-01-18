import React, { useState , useContext} from 'react';
import { createUserWithEmailAndPassword,} from 'firebase/auth';
import { auth } from '../lib/firebase'
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../lib/context/authContext';
import "../css/SignUp.css";


// export interface SignUpPageProps {}

const SignUpPage = () => {
   
    //const navigate = useNavigate();
    const userInfo = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [authing, setAuthing] = useState(false);
    const [isCreate, setIsCreate] = useState(false);
    const [checked, setChecked] = useState(false);

    const createUser = async () => {
        setAuthing(true);
        await createUserWithEmailAndPassword(auth, email, pwd)
            .then((response) => {
                alert(`${email}님 회원가입을 성공했습니다.`);
            })
            .catch((error) => {
                alert(`${email}님 회원가입이 실패했습니다.`);
                setAuthing(false);
            });
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(`이메일 : ${e.target.value}`);
        setEmail(e.target.value);
      };
    
      const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(e.target.value);
        setPwd(e.target.value);
      };
    
      function toggle(value:boolean ){
        console.log(checked);
        return !value;
      }
    return(
        <div className="signContent">
            <div className="title"> 
                <h2>회원 가입</h2>
            </div>
            <div className="form">
                <input type="iemailte" placeholder="이메일" onChange={handleEmail} value={email} />
                <input type="password" placeholder="비밀번호"  onChange={handlePwd} value = {pwd}/> 
                <input type="text" placeholder="비밀번호 확인"  onChange={handlePwd} value = {pwd}/> 
                <input type="text" placeholder="핸드폰 번호" onChange={handleEmail} value={email} />
                <input type="text" placeholder="닉네임" onChange={handleEmail} value={email} />
                <input type="text" placeholder="비밀번호"  onChange={handlePwd} value = {pwd}/> 
                
                    <div className="checkDIv">
        <input type="checkbox" className='checkBox' onChange ={()=>setChecked(toggle)}/>
            <p>개인정보 활용에 동의하시겠습니까?</p>
        </div>
    
        <div className="agreeDiv">
                "개인정보 보호, 보안 개인정보 수집 및 활용 개인정보는 개인 식별 정보, 금융 및 결제 정보, 인증 정보 및 개인 식별 정보에 연결하여 간접적으로 이용자를 식별할 수 있는 모든 정보를 의미합니다. 개인정보를 수집하는 상품은 개인정보의 수집 전 개인정보 수집에 대한 명시적인 이용자 동의절차를 구현하여야 합니다.\n\n 개인정보의 수집 동의 시, 수집하는 개인정보의 항목과 목적, 보유기간을 반드시 포함하여야 합니다.개인정보를 수집하는 상품은 ‘개인정보처리방침’을 공개하여야 합니다. \n개인정보 처리방침 작성 예시 위치정보의 보호 및 이용 등에 관한 법률에 따라 개인위치정보를 대상으로 하는 위치정보사업을 영위하는 경우, ‘위치기반서비스 사업자 신고필증’을 첨부하여야 합니다. 앱 접근권한 법규 준수 접근권한을 서비스에 필요한 범위 내로 최소화해야 합니다. \n\n 접근권한에 대한 동의를 받기 전 필수적 접근권한과 선택적 접근권한을 구분하여 접근권한이 필요한 항목 및 그 이유 등을 이용자에게 알기 쉽게 고지한 후, 동의를 받아야 합니다. 방송통신위원회 스마트폰 앱 접근권한 개인정보보호 안내서 악성행위 방지 이용자의 데이터 또는 기기를 위험에 노출 시킬 수 있는 모든 악의적인 코드 또는 행위를 금지합니다. (예: 바이러스, 스파이웨어, 트로이 목마, 애드웨어, 루팅 등) 이용자의 기기 및 프로그램, Network를 이용하여 이용자 및 타인에게 해를 끼치는모든  코드 또는 행위를 금지합니다. \n\n (예: 스팸, DDoS, 크립토재킹 등) 이용자에게 불편을 초래하거나 사용자를 속이는 모든 코드 또는 행위를 금지합니다. (예: 피싱, 사기광고 등)",
                </div>
            <button onSubmit = {createUser} >회원가입</button>
                       </div>
        </div>
    );
};

export default SignUpPage;
