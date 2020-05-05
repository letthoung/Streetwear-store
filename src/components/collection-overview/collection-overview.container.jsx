import { connect } from 'react-redux';
import { compose } from 'redux';

import { selectIsFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = (state) => ({
    isLoading: selectIsFetching(state)
});

const CollectionOverviewContainer = compose(connect(mapStateToProps),WithSpinner)(CollectionOverview);

export default CollectionOverviewContainer;
