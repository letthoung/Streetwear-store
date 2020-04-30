import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { CollectionItemContainer, ImageContainer, 
    CollectionFooterContainer, NameContainer, PriceContainer} from './collection-item.styles';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
    <CollectionItemContainer>
        <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
        <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
    </CollectionItemContainer>);
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);