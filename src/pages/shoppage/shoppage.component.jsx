import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsFetching, selectIsLoaded } from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpiner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match, isFetching, isLoaded } = this.props;
        return (<div className="shop-page">
            <Switch>
                <Route exact path={`${match.path}`} render={ 
                    (props) => (<CollectionOverviewWithSpinner isLoading={isFetching} {...props} />)} />
                <Route path={`${match.path}/:collectionId`} render={
                    (props) => (<CollectionPageWithSpiner isLoading={!isLoaded} {...props} />)
                } />
            </Switch> 
        </div>);
    }
}

const mapStateToProps = state => ({
    isFetching: selectIsFetching(state),
    isLoaded: selectIsLoaded(state)
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);