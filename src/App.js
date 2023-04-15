import './App.css';
import {useEffect, useState} from "react";
import ScrollToTop from "./components/utils/actions/ScrollTop";
import {Navigate, Route, Router, Routes} from "react-router-dom";
import Lending from "./pages/Lending";
import {createGlobalStyle} from "styled-components";
import SignUp from "./pages/SignUp";
import Import from "./pages/Import";
import Dao from "./pages/Dao";
import User from "./pages/User";
import SizeBox from "./components/utils/blocks/SizeBox";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: Roboto;
    }
`;

function App() {
    const [loading, setLoading] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [userType, setUserType] = useState(1);

    const [account, setAccount] = useState();
    const [web3, setWeb3] = useState();

    useEffect(() => {
        setLoading(true);
        // Token Verify
        setIsLogged(true);
        setLoading(false);
    }, []);

    if (loading) {
        return (<div className={'App'}>
            ... Loading
        </div>);
    }

    return (
        <div className={'App'}>
            {/* Currently, this is demo mode. <br/>
            Within a week, we plan to connect and make it available for testing on<br/>
            the Goerli testnet and other various layers. */}
            <ScrollToTop/>
            <GlobalStyle/>
            {/*<Header/>*/}
            <Routes>
                <Route exact path="/" element={<Lending/>}/>
                {isLogged ?
                    <>
                        <Route exact path={'/signup'} element={<SignUp/>}/> {/* Sing Up */}
                        <Route exact path={'/wallet'}
                               element={<Import setWeb3={setWeb3} setAccount={setAccount}/>}/> {/* Import Wallet */}
                        <Route exact path={'/mypage'} element={userType === 0 ? <Dao/> : <User/>}/> {/* My Page */}
                    </> :
                    <>
                        {/*<Route path={'*'} element={<Navigate to={'/'}/>}/>*/}
                    </>}
            </Routes>

            <SizeBox h={120}/>
        </div>
    );
}

export default App;
