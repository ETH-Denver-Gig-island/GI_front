import styled from "styled-components";
import FoursquareBtn from "../components/global/buttons/FoursquareBtn";
import SizeBox from "../components/utils/blocks/SizeBox";
import ImageLoader from "../components/utils/blocks/ImageLoader";
import Peoples from '../assets/icon/icon_peoples.png';
import {ReactComponent as MainText} from "../assets/image/img_text-logo.svg";
import {ReactComponent as SubText} from "../assets/image/img_text-sub-main.svg";
import {ReactComponent as Main} from "../assets/image/img_main-page.svg";
import Spacer from "../components/utils/blocks/Spacer";
import RoundBorderBtn from "../components/global/buttons/RoundBorderBtn";
import {useNavigate} from "react-router-dom";
import {ContentLoaded} from "../components/utils/actions/Animations";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    max-width: 1180px;

    animation: ${ContentLoaded} 1.0s;
`;

function Lending() {
    const navigate = useNavigate();

    function moveSignUp() {
        // navigate('/signup');
    }

    async function connectWallet() {

    }

    return (
        <Container>
            <SizeBox h={84 * 0.65}/>
            <div className={'f-row'}>
                <Spacer/>
                <SizeBox w={235 * 0.65} h={62 * 0.65}>
                    <RoundBorderBtn onClick={moveSignUp}>
                        Connect Wallet
                    </RoundBorderBtn>
                </SizeBox>
            </div>

            <SizeBox h={89 * 0.65}/>
            <div className={'f-row a-end'}>
                <MainText width={587 * 0.65} height={121 * 0.65}/>

                <SizeBox w={63 * 0.65}/>
                <SubText width={364 * 0.65} height={38 * 0.65}/>
            </div>

            <SizeBox h={40}/>
            <Main width={'100%'} height={'100%'}/>
        </Container>
    );
}

export default Lending;