import styled from "styled-components";
import {COLORS} from "../../../styles/colors";

const Container = styled.div`
    cursor: pointer;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    font-style: normal;
    font-weight: 700;
    font-size: calc(20px * 0.65);
    line-height: 25px;

    border-radius: 10px;
    border: ${COLORS.black} solid 3px;
`;

function RoundBorderBtn({onClick, ...props}) {
    return (
        <Container onClick={onClick}>
            {props.children}
        </Container>
    )
}

export default RoundBorderBtn;