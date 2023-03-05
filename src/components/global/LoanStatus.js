import styled from "styled-components";
import {COLORS} from "../../styles/colors";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
    
    border-radius: 10px;

    font-style: normal;
    font-weight: 700;
    font-size: calc(20px * 0.65);
`;

const status = {
    InProgress: [COLORS.blue, COLORS.trans_blue],
}

// 0: In Progress, 1: Done, 2: Reject
function LoanStatus({mode}) {
    return (
        <Container>
        </Container>
    );
}

export default LoanStatus;