import styled from "styled-components";
import {ReactComponent as Wallet} from "../assets/image/img_text-import.svg";
import SizeBox from "../components/utils/blocks/SizeBox";
import FoursquareBtn from "../components/global/buttons/FoursquareBtn";
import {ReactComponent as Meta} from "../assets/image/img-meta-logo.svg";
import StaticSquareBtn from "../components/global/buttons/StaticSquareBtn";
import {useState} from "react";
import Web3Api, {WEB3_ERRORS} from "../network/Web3Api";
import CircleLoading from "../components/global/CircleLoading";
import {useNavigate} from "react-router-dom";
import {ContentLoaded} from "../components/utils/actions/Animations";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${ContentLoaded} 1.0s;
`;

function Import({setAccount, setWeb3}) {
    const web3API = new Web3Api();
    const [loading, setLoading] = useState(false);
    const navigator = useNavigate();

    let account;
    let web3;

    const connectHandler = async () => {
        setLoading(true);
        let result = await web3API.connect();

        switch (result) {
            case WEB3_ERRORS.NO_WALLET:
                break;
            case WEB3_ERRORS.REJECTED:
                break;
            case WEB3_ERRORS.NET_ERROR:
                break;
            default:
                account = result.account;
                web3 = result.web3;
                break;
        }

        setLoading(false);
        if(account) {
            console.log(account);
            navigator('/mypage');
        }
    };

    return (
        <Container>
            <SizeBox h={133 * 0.65}/>
            <Wallet width={495 * 0.65} height={118 * 0.65}/>

            <SizeBox h={236 * 0.65}/>
            <SizeBox w={628 * 0.65} h={255 * 0.65}>
                <StaticSquareBtn forward={false} onClick={connectHandler}>
                    {
                        loading ?
                            <CircleLoading/> :
                            <>
                                Go to <SizeBox w={30 * 0.65}/> <Meta width={266 * 0.65} height={63 * 0.65}/>
                            </>
                    }
                </StaticSquareBtn>
            </SizeBox>
        </Container>
    );
}

export default Import;