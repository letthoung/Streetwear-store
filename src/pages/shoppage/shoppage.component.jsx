import React from 'react';
import { connect } from 'react-redux';

import { selectCollections } from '../../redux/shop/shop.selector';
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = ({collections}) => {

    return (<div className="shop-page">
        {
            collections.map(({ id, ...otherCollectionProps }) => 
                (<CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>))
        }    
    </div>);
    
}

const mapStateToProps = (state) => ({
    collections: selectCollections(state)
})

export default connect(mapStateToProps)(ShopPage);