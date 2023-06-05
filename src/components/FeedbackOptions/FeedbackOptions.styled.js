import styled from "@emotion/styled";

export const ButtonsList = styled.ul`
display: flex;
justify-content: center;
padding-left: 0px;
border-radius: 4px;
li button {
    font-size: 48px;
    border-radius: 8px;
};
.good {
    margin-right: 20px;
    background-color: green;
};
.neutral {
    margin-right: 20px;
    background-color: gray;
};
.bad {
    background-color: red;
};
`;