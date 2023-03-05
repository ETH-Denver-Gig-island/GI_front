import styled from "styled-components";
import {COLORS} from "../../styles/colors";
import {forwardRef} from "react";

const InputBoard = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;
    border-radius: 8px;

    background-color: ${COLORS.white};
`;

const InputBody = styled.input`
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;
    border-radius: 8px;

    background-color: ${COLORS.white};
    outline: none;
    border: ${COLORS.black} solid 1.5px;
    width: 100%;
    padding: 0px 0px 0px 20px;
    background-color: transparent;

    transition: all 0.3s;

    &::-webkit-input-placeholder {
        color: ${COLORS.gray_1};
        font-size: 14px;
        font-weight: 400;
    }

    &:focus {
        outline: none;
    }
`;

const Input = forwardRef(({
                              disabled = false,
                              input,
                              onChange,
                              holder = 'Input',
                              ...props
                          }, ref) =>
    <InputBoard>
        <InputBody ref={ref} disabled={disabled} placeholder={holder} defaultValue={input} onChange={onChange}/>
    </InputBoard>
);

export default Input;