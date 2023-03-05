import styled from "styled-components";
import {COLORS} from "../../../styles/colors";

const Container = styled.button`
    pointer-events: ${p => p.active ? '' : 'none'};
    position: relative;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    
    background: ${COLORS.trans_white};
    border: none;
    border-radius: calc(20px * 0.65);
    box-sizing: border-box;
    box-shadow: 0px 10px 40px rgba(106, 80, 12, 0.3);

    font-style: normal;
    font-weight: 700;
    font-size: calc(48px * 0.65);
    line-height: 60px;

    transition: all 0.2s ease-in-out;

    &:hover {
        border: 5px solid ${COLORS.black};
    }

    &:before {
        content: "";
        position: absolute;
        
        width: 100%;
        height: 100%;
        
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 25px;
        
        transition: opacity 0.2s ease-in-out;
    }

    &:hover:before {
        opacity: 0;
    }
`;

function FoursquareBtn({forward = true, active = true,onClick, ...props}) {
    return (
        <Container className={forward ? 'f-column' : 'f-row'} onClick={onClick} active={active}>
            {props.children}
        </Container>
    );
}

export default FoursquareBtn;
