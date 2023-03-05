import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import ImageLoader from "../../utils/blocks/ImageLoader";
import {COLORS} from "../../../styles/colors";
import Select from '../../../assets/image/city_loan.png';
import Next from '../../../assets/image/next_btn.png';
import {useState} from "react";
import {ContentLoaded} from "../../utils/actions/Animations";
import Spacer from "../../utils/blocks/Spacer";
import X from "../../../assets/icon/X.png";
import Sign from "../../../assets/image/sign_btn.png";
import SizeBox from "../../utils/blocks/SizeBox";
import Input from "../Input";
import CircleLoading from "../CircleLoading";

const BackBoard1 = styled.div`
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

const BackBoard2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: calc(830px * 0.65);
    height: calc(949px * 0.65);

    border-radius: 20px;
    background-color: ${COLORS.white};

    padding: calc(60px * 0.65) calc(50px * 0.65);

    color: ${COLORS.black};
    font-style: normal;
    font-weight: 700;
    font-size: calc(36px * 0.65);
    line-height: calc(41px * 0.65);

    animation: ${ContentLoaded} 0.4s;
    animation-fill-mode: forwards;
`;

const SubText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: calc(20px * 0.65);
    line-height: calc(23px * 0.65);

    color: rgba(0, 0, 0, 0.7);
`;

const MiniText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;

    color: ${COLORS.black};
`;

const XBtn = styled(ImageLoader)`
    cursor: pointer;

    padding: 10px;
`;

const ImgBtn = styled(ImageLoader)`
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    border: ${p => p.selected ? `5px solid ${COLORS.black}` : 'none'};

    &:hover {
        transform: translateY(-5px);
    }
`;

function LoanModal({setLoan, setModal, ...props}) {
    const [selected, setSelected] = useState(false);
    const [next, setNext] = useState(false);

    const [loading, setLoading] = useState(false);

    const nextClick = () => {
        if (!selected) {
            return;
        }
        setNext(true);
    }

    const signClick = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 4000));
        setLoan(true);

        setLoading(false);
        setModal(false);
    }

    return (
        <ModalWrapper>
            {
                !next ?
                    <BackBoard1>
                        <div className={'f-row'}>
                            <Spacer/>
                            <XBtn src={X} w={30 * 0.65} h={30 * 0.65} onClick={() => setModal(false)}/>
                        </div>

                        <SizeBox h={14 * 0.65}/>
                        <div className={'f-row a-center j-center'}>
                            Select DAO and check loan details
                        </div>

                        <SizeBox h={69 * 0.65}/>
                        <div className={'f-row a-center j-center'}>
                            <ImgBtn src={Select} w={380 * 0.65} h={363 * 0.65}
                                    selected={selected}
                                    onClick={() => setSelected(v => !v)}/>
                        </div>

                        <SizeBox h={80 * 0.65}/>
                        <div className={'f-row j-center'}>
                            <ImgBtn src={Next} w={226 * 0.65} h={65 * 0.65}
                                    onClick={nextClick}/>
                        </div>
                    </BackBoard1> :
                    <BackBoard2>
                        {
                            loading ?
                                <CircleLoading/> :
                                <>
                                    <SizeBox h={60 * 0.65}/>
                                    <div className={'f-row a-start j-start'}>
                                        Select DAO and check loan details
                                    </div>

                                    <SizeBox h={14 * 0.65}/>
                                    <div className={'f-row a-start j-start'}>
                                        <SubText>
                                            You can apply for short term loan to LFG
                                        </SubText>
                                    </div>

                                    <SizeBox h={71 * 0.65}/>
                                    <div className={'f-row a-start j-start'}>
                                        <MiniText>
                                            DAO Name
                                        </MiniText>
                                    </div>
                                    <SizeBox h={5}/>
                                    <SizeBox w={730 * 0.65} h={78 * 0.65}>
                                        <Input input={'CityDAO'} disabled={true}/>
                                    </SizeBox>

                                    <SizeBox h={28 * 0.65}/>
                                    <div className={'f-row a-start j-start'}>
                                        <MiniText>
                                            Interest Rate (Monthly)
                                        </MiniText>
                                    </div>
                                    <SizeBox h={5}/>
                                    <SizeBox w={730 * 0.65} h={78 * 0.65}>
                                        <Input input={'15%'} disabled={true}/>
                                    </SizeBox>

                                    <SizeBox h={28 * 0.65}/>
                                    <div className={'f-row a-start j-start'}>
                                        <MiniText>
                                            Borrowing Amount (USDC)(Max)
                                        </MiniText>
                                    </div>
                                    <SizeBox h={5}/>
                                    <SizeBox w={730 * 0.65} h={78 * 0.65}>
                                        <Input input={'2000'} disabled={true}/>
                                    </SizeBox>

                                    <SizeBox h={28 * 0.65}/>
                                    <div className={'f-row a-start j-start'}>
                                        <MiniText>
                                            Period
                                        </MiniText>
                                    </div>
                                    <SizeBox h={5}/>
                                    <SizeBox w={730 * 0.65} h={78 * 0.65}>
                                        <Input input={'30days'} disabled={true}/>
                                    </SizeBox>

                                    <SizeBox h={30}/>
                                    <ImgBtn src={Sign} w={226 * 0.65} h={65 * 0.65} onClick={signClick}/>
                                </>
                        }
                    </BackBoard2>
            }
        </ModalWrapper>
    );
}

export default LoanModal;