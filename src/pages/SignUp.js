import styled from "styled-components";
import FoursquareBtn from "../components/global/buttons/FoursquareBtn";
import SizeBox from "../components/utils/blocks/SizeBox";
import ImageLoader from "../components/utils/blocks/ImageLoader";
import Peoples from '../assets/icon/icon_peoples.png';
import {ReactComponent as People} from "../assets/icon/icon_people.svg";
import {ReactComponent as Choose} from "../assets/image/img_text-choose.svg";
import {useNavigate} from "react-router-dom";
import {ContentLoaded} from "../components/utils/actions/Animations";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${ContentLoaded} 1.0s;
`;

function SignUp() {
    const navigate = useNavigate();

    function moveDao() {

    }

    function moveUser() {
        navigate('/wallet');
    }

    return (
        <Container>
            <SizeBox h={133 * 0.65}/>
            <Choose width={645 * 0.65} height={116 * 0.65}/>

            <SizeBox h={175 * 0.65}/>
            <div className={'f-row a-center j-center'}>
                <SizeBox w={360 * 0.65} h={360 * 0.65}>
                    <FoursquareBtn active={false}>
                        <ImageLoader src={Peoples} w={161 * 0.65} h={91 * 0.65}/>

                        <SizeBox h={63 * 0.65}/>
                        DAO(Locked)
                    </FoursquareBtn>
                </SizeBox>

                <SizeBox w={100 * 0.65}/>
                <SizeBox w={360 * 0.65} h={360 * 0.65}>
                    <FoursquareBtn onClick={moveUser}>
                        <People width={65 * 0.65} height={91 * 0.65}/>

                        <SizeBox h={63 * 0.65}/>
                        Individual
                    </FoursquareBtn>
                </SizeBox>
            </div>
        </Container>
    );
}

export default SignUp;