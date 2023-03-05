import styled from "styled-components";
import {ReactComponent as LogoText} from "../assets/icon/icon_main-text.svg";
import {ReactComponent as LogoImg} from "../assets/icon/icon_main-logo.svg";
import SizeBox from "../components/utils/blocks/SizeBox";
import Spacer from "../components/utils/blocks/Spacer";
import Selector from "../components/global/Selector";
import {useEffect, useState} from "react";
import {ContentLoaded, GradientAni} from "../components/utils/actions/Animations";
import {useNavigate} from "react-router-dom";
import {ReactComponent as Collection} from "../assets/image/img_text-nft.svg";
import {COLORS} from "../styles/colors";
import {ReactComponent as MenuBackClip} from "../assets/image/img_clip-backboard.svg";
import {ReactComponent as Search} from "../assets/image/img_search.svg";
import {ReactComponent as Apply} from "../assets/image/img_apply-btn.svg";
import {ReactComponent as Claim} from "../assets/image/img_claim-btn.svg";
import {ReactComponent as Blank} from "../assets/icon/icon_blank-check.svg";
import {ReactComponent as Check} from "../assets/icon/icon_full-check.svg";
import Token from "../assets/icon/Token.png";
import CityIcon from "../assets/icon/City.png";
import CityNFT from "../assets/image/city_nft.png";
import App from "../App";
import CircleLoading from "../components/global/CircleLoading";
import ImageLoader from "../components/utils/blocks/ImageLoader";
import ClaimModal from "../components/global/modal/ClaimModal";
import LoanModal from "../components/global/modal/LoanModal";
import LoanStatus from "../components/global/LoanStatus";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    animation: ${ContentLoaded} 1.0s;
`;

const BackFolder = styled.div`
    z-index: 1005;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: max-content;

    background-color: ${COLORS.board};
    border-radius: 20px;

    padding: 30px 45px;

    transition: all 0.4s;
`;

const MenuItem = styled.div`
    cursor: pointer;

    z-index: 1002;

    position: relative;

    display: flex;
    align-items: start;
    justify-content: start;
    padding-left: 30px;

    background-color: transparent;

    width: 256px;

    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    color: ${COLORS.black};
`;

const MenuBack = styled(MenuBackClip)`
    z-index: -1;

    position: absolute;

    width: 256px;

    left: 0px;
    top: ${p => p.hover ? '-12px' : '48px'};

    transition: all 0.2s;
`;

const ListIteOption = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;

    font-style: normal;
    font-weight: 700;
    font-size: calc(20px * 0.65);
    line-height: calc(23px * 0.65);

    color: rgba(0, 0, 0, 0.5);
`;

const ListItemContainer = styled.div`
    cursor: pointer;

    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 60px;
    border-radius: 17px;
    padding: 0px 20px;
    background-color: ${COLORS.white};

    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 30px;

    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

    &:before {
        content: "";
        position: absolute;
        z-index: 1;

        top: 0;
        left: 0;

        width: ${p => p.selected ? '100%' : '0%'};
        height: 100%;
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.7)),
        linear-gradient(269.51deg,
        #3D97D8 0.43%, #61E2B4 55.69%,
        #9FEB3F 84.09%, #FFDE60 99.58%);

        border-radius: 17px;
        transition: width 0.5s ease-in-out;
    }
`;

const ListItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
    
    z-index: 2;
`;

const SearchBtn = styled(Search)`
    cursor: pointer;
`;

const ApplyBtn = styled(Apply)`
    cursor: pointer;
`;

const ClaimBtn = styled(Claim)`
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }
`;

const ImageBtn = styled(ImageLoader)`

`;

const list = ['Goerli', 'Aurora-test', 'Filecoin-Hyp']

function User() {
    const navigator = useNavigate();

    const [chainIndex, setChainIndex] = useState(0);
    const [nftCount, setNFTCount] = useState(0);

    const [tabIndex, setTabIndex] = useState(0);

    const [isClaim, setIsClaim] = useState(false);
    const [isLoan, setIsLoan] = useState(false);

    const [fakeLoading, setFakeLoading] = useState(false);

    const [selectClaim, setSelectClaim] = useState(false);

    const [claimModal, setClaimModal] = useState(false);
    const [loanModal, setLoanModal] = useState(false);

    useEffect(() => {
        async function load() {
            setFakeLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setFakeLoading(false);
        }

        load();
    }, [tabIndex]);

    return (
        <>
            {claimModal && <ClaimModal setClaim={setIsClaim} setModal={setClaimModal}/>}
            {loanModal && <LoanModal setLoan={setIsLoan} setModal={setLoanModal}/>}
            <Container>
                <SizeBox h={57 * 0.65}/>
                <div className={'f-row a-center'}>
                    <div style={{cursor: 'pointer'}} className={'row a-center'} onClick={() => navigator('/')}>
                        <LogoText width={188 * 0.65} height={50 * 0.65}/>

                        <SizeBox w={6 * 0.65}/>
                        <LogoImg width={48 * 0.65} height={39 * 0.65}/>
                    </div>

                    <Spacer/>
                    <SizeBox w={140} h={50}>
                        <Selector list={list} index={chainIndex} setIndex={setChainIndex}/>
                    </SizeBox>
                </div>

                <SizeBox h={144 * 0.65}/>
                <div className={'f-row a-center'} style={{fontWeight: '400', fontSize: '18px'}}>
                    <Collection/>

                    <SizeBox w={20}/>
                    Total <SizeBox w={5}/>
                    {/*<div style={{fontWeight: 'bold'}}>{nftCount} NFTs</div>*/}
                    <div style={{fontWeight: 'bold'}}>{isClaim ? 1 : 0} NFTs</div>
                </div>

                <SizeBox h={20}/>
                <div className={'f-row'}>
                    {isClaim && <ImageBtn src={CityNFT} w={302 * 0.65} h={420 * 0.65}/>}
                </div>
                <SizeBox h={20}/>

                <SizeBox h={40}/>
                <div className={'f-row'}>
                    <MenuItem onClick={() => {
                        setTabIndex(0);
                    }}>
                        Claim
                        <MenuBack hover={tabIndex === 0}/>
                    </MenuItem>
                    <MenuItem onClick={() => {
                        setTabIndex(1);
                    }}>
                        Applying Loan
                        <MenuBack hover={tabIndex === 1}/>
                    </MenuItem>
                </div>

                <SizeBox h={13}/>
                <BackFolder>
                    {fakeLoading ? <div className={'f-column a-center j-center'}>
                        <SizeBox h={50}/>
                        <CircleLoading/>
                        <SizeBox h={50}/>
                    </div> : <>
                        <div className={'f-row'}>
                            <SearchBtn width={490 * 0.65} height={65 * 0.65}/>
                            <Spacer/>
                            {tabIndex === 1 &&
                                <ApplyBtn width={226 * 0.65} height={65 * 0.65} onClick={() => setLoanModal(true)}/>}
                        </div>

                        {tabIndex === 0 ? <>
                            {!isClaim && <>
                                <SizeBox h={42 * 0.65}/>
                                <ListIteOption>
                                    <SizeBox w={100}/>
                                    DAO
                                    <Spacer/>
                                    <SizeBox w={10}/>
                                    Total Income
                                    <Spacer/>
                                    Working Period
                                    <SizeBox w={80}/>
                                    <Spacer/>
                                    Roles
                                    <SizeBox w={100}/>
                                </ListIteOption>

                                <SizeBox h={20 * 0.65}/>
                                <ListItemContainer selected={selectClaim}
                                                   onClick={() => setSelectClaim(v => !v)}>
                                    <ListItemWrapper>
                                        {selectClaim ?
                                            <Check width={42 * 0.65} height={42 * 0.65}>
                                            </Check> :
                                            <Blank width={42 * 0.65} height={42 * 0.65}>
                                            </Blank>}<SizeBox w={78 * 0.65}/>
                                        <ImageLoader src={CityIcon} w={24 * 0.65} h={24 * 0.65}/>
                                        <SizeBox w={6}/>
                                        CityDAO
                                        <Spacer/>
                                        <ImageLoader src={Token} w={22 * 0.65} h={22 * 0.65}/>
                                        <SizeBox w={6}/>
                                        2,000
                                        <Spacer/>
                                        2022.02.03 - 2022.06.04
                                        <Spacer/>
                                        Contract Developer
                                    </ListItemWrapper>
                                </ListItemContainer>
                            </>}

                            <SizeBox h={60}/>
                            <ClaimBtn width={226 * 0.65} height={65 * 0.65} onClick={() => {
                                if (!selectClaim) {
                                    return;
                                }
                                setClaimModal(true);
                            }}/>
                        </> : <>
                            {isLoan && <>
                                <SizeBox h={42 * 0.65}/>
                                <ListIteOption>
                                    <SizeBox w={20 * 0.65}/>
                                    DAO
                                    <Spacer/>
                                    <SizeBox w={95}/>
                                    Loan Amount
                                    <SizeBox w={150}/>
                                    Payday
                                    <Spacer/>
                                    Interest Rate(Monthly)
                                    <SizeBox w={32}/>
                                    <Spacer/>
                                    Status
                                    <SizeBox w={50}/>
                                </ListIteOption>

                                <SizeBox h={20 * 0.65}/>
                                <ListItemContainer>
                                    <ImageLoader src={CityIcon} w={24 * 0.65} h={24 * 0.65}/>
                                    <SizeBox w={6}/>
                                    CityDAO
                                    <Spacer/>
                                    <ImageLoader src={Token} w={22 * 0.65} h={22 * 0.65}/>
                                    <SizeBox w={6}/>
                                    2,000
                                    <Spacer/>
                                    2023.12.01
                                    <Spacer/>
                                    15%
                                    <Spacer/>
                                    <SizeBox w={144 * 0.65} h={42 * 0.65}>
                                        <LoanStatus mode={0}/>
                                    </SizeBox>
                                </ListItemContainer>
                            </>}
                        </>}
                    </>}
                </BackFolder>
            </Container>
        </>
    );
}

export default User;