import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpiner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }
    unsubcribeFromSnapshot = null;

    componentDidMount(){
        const { updateColllections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubcribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateColllections(collectionsMap);
            this.setState({loading: false});
        })
    }
    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (<div className="shop-page">
            <Switch>
                <Route exact path={`${match.path}`} render={ 
                    (props) => (<CollectionOverviewWithSpinner isLoading={loading} {...props} />)} />
                <Route path={`${match.path}/:collectionId`} render={
                    (props) => (<CollectionPageWithSpiner isLoading={loading} {...props} />)
                } />
            </Switch> 
        </div>);
    }
}

const mapDispatchToProps = dispatch => ({
    updateColllections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);