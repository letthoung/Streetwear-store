import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx';

const CollectionPreview = ({routeName, title, items}) => {
    return (<div className="collection-preview"> 
        <h1 className="title"><Link to={`/shop/${routeName}`}>{title.toUpperCase()}</Link></h1>
        <div className="preview"> 
            {
                items
                .filter((i, index) => index < 4)
                .map((item) => (<CollectionItem key={item.id} item={item} />) )
            }
        </div>
    </div>);
}

export default withRouter(CollectionPreview);