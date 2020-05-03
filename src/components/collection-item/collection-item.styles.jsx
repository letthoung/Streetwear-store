import styled from 'styled-components';


export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom: 20px;
`;

export const NameContainer = styled.div`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.div`
    width: 10%;
`;

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    ${ImageContainer}:hover {
        opacity: 0.8;
    }
`;