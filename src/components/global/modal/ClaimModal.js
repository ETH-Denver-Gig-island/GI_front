import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import X from '../../../assets/icon/X.png';
import Spacer from "../../utils/blocks/Spacer";
import ImageLoader from "../../utils/blocks/ImageLoader";
import SizeBox from "../../utils/blocks/SizeBox";
import {COLORS} from "../../../styles/colors";
import {ReactComponent as CityNFT} from "../../../assets/image/img_city-nft.svg";
import {useState} from "react";
import {ReactComponent as Claim} from "../../../assets/image/img_claim-btn.svg";
import CircleLoading from "../CircleLoading";
import {ContentLoaded} from "../../utils/actions/Animations";

const BackBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: calc(1355px * 0.65);
    height: calc(816px * 0.65);
    border-radius: 20px;
    background-color: ${COLORS.white};

    padding: calc(32px * 0.65);

    font-style: normal;
    font-weight: 700;
    font-size: calc(36px * 0.65);
    line-height: calc(41px * 0.65);

    color: ${COLORS.black};

    animation: ${ContentLoaded} 0.4s;
    animation-fill-mode: forwards;
`;

const XBtn = styled(ImageLoader)`
    cursor: pointer;
    
    padding: 10px;
`;

const ClaimBtn = styled(Claim)`
    cursor: pointer;

    transition: all 0.2s ease-in-out;
    
    &:hover {
        transform: translateY(-5px);
    }
`;

function ClaimModal({setClaim, setModal, ...props}) {
    const [loading, setLoading] = useState(false);

    const claim = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 4000));
        setClaim(true);

        setLoading(false);
        setModal(false);
    }

    return (
        <ModalWrapper>
            <BackBoard>
                {
                    loading ? <CircleLoading/> :
                        <>
                            <div className={'f-row'}>
                                <Spacer/>
                                <XBtn src={X} w={30 * 0.65} h={30 * 0.65} onClick={() => setModal(false)}/>
                            </div>

                            <SizeBox h={14 * 0.65}/>
                            <div className={'f-row a-center j-center'}>
                                You selected 1 proof of income NFTs
                            </div>

                            <SizeBox h={69 * 0.65}/>
                            <div className={'f-row a-center j-center'}>
                                <CityNFT width={302 * 0.65} height={420 * 0.65}/>
                            </div>

                            <SizeBox h={80 * 0.65}/>
                            <div className={'f-row j-center'}>
                                <ClaimBtn width={226 * 0.65} height={65 * 0.65}
                                          onClick={claim}/>
                            </div>
                        </>
                }
            </BackBoard>
        </ModalWrapper>
    );
}

export default ClaimModal;