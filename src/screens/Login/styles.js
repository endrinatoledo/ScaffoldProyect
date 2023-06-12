import styled from "styled-components";

export const LoginScreenContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.primary};
`;

export const Text = styled.Text`
    color: ${(props) => props.theme.colors.mainText};
`;
