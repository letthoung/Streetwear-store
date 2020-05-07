import shopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = (collectionsMap) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = (errMessage) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errMessage
})