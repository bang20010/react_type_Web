import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword , GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../lib/firebase'
import { useNavigate } from 'react-router-dom';


export interface SignUpPageProps {}

const SignUpPage: React.FunctionComponent<SignUpPageProps> = (props) => {
    // const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    };
};

export default SignUpPage;