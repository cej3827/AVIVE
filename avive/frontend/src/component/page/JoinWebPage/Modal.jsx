import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Background = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(3px);
`;

const ModalContainer = styled.div`
    position: absolute;
    width: 300px;
    height: 200px;

    background: #FFFFFF;
    border: 2px solid #111154;
    border-radius: 10px;
`;

function Modal(){
    return(
        <Container>
            <Background>
                <ModalContainer></ModalContainer>
            </Background>
        </Container>
    );
}

export default Modal;