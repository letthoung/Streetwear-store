import React, {Component} from 'react';
import SHOPDATA from './shop.data';
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOPDATA
        }
    }

    render() {
        const { collections } = this.state;
        return (<div className="shop-page">
            {collections.map(({ id, ...otherCollectionProps }) => (<CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>))}    
        </div>);
    }

    return ;
}

export default ShopPage;