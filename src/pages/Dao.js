import styled from "styled-components";
import {ContentLoaded} from "../components/utils/actions/Animations";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    animation: ${ContentLoaded} 1.0s;
`;

function Dao() {
    return (
        <Container>

        </Container>
    );
}

export default Dao;