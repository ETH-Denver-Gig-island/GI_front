import styled from "styled-components";
import {COLORS} from "../../../styles/colors";

const Container = styled.button`
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
        transform: translateY(-5px);
    }
`;

function FoursquareBtn({forward = true, onClick, ...props}) {
    return (
        <Container className={forward ? 'f-column' : 'f-row'} onClick={onClick}>
            {props.children}
        </Container>
    );
}

export default FoursquareBtn;
