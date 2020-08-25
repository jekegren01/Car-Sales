//import the cases from the reducer
import { ADD_FEATURE, REMOVE_FEATURE } from '../reducers';


//create each individual case action (w/ payload) and return type
export const addFeature = (feature) => {
    return { type: ADD_FEATURE, payload: feature}
};

export const removeFeature = (feature) => {
    return { type: REMOVE_FEATURE, payload: feature}
};