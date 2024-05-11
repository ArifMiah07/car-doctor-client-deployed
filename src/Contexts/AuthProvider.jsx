import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import axios from "axios";
// import SignUp from "../Pages/SignUp/SignUp";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser);
            // //console.log('current user', currentUser);
            setLoading(false);

            //if user exist then issue a token
            if(currentUser){

                axios.post( 'https://car-doctor-sever-main.vercel.app/jwt' ,loggedUser, {withCredentials: true})
                .then(() => {
                    // //console.log('token response from auth provider: ',res.data);
                })
            }
            else{
                axios.post('https://car-doctor-sever-main.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(() =>{
                    //console.log(res.data);
                })
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser, 
        signIn,
        logOut,
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;