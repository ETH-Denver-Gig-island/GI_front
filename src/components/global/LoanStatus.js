import styled from "styled-components";
import {COLORS} from "../../styles/colors";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    border-radius: 10px;
    background-color: ${p => p.back};

    font-style: normal;
    font-weight: 700;
    font-size: calc(20px * 0.65);
    color: ${p => p.color};
`;

const status = [
    ['In Progress', COLORS.green, COLORS.trans_green],
    ['Done', COLORS.blue, COLORS.trans_blue],
    ['Reject', COLORS.red, COLORS.trans_red],
]

// 0: In Progress, 1: Done, 2: Reject
function LoanStatus({mode}) {
    return (
        <Container color={status[mode][1]} back={status[mode][2]}>
            {status[mode][0]}
        </Container>
    );
}

export default LoanStatus;