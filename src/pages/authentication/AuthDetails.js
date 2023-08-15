import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

export default function AuthDetails() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })

        userSignOut();
        navigate("/");
        
        return() => {
            listen();
        }
        
    },[]);

    const userSignOut = () =>{
        signOut(auth).then(()=>{
            console.log("signed out sucessful");
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div></div>
  )
}
