import React from 'react';
//import connect for store use, import actions for use

import { addFeature } from '../actions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => {props.addFeature(props.feature)}}className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

//set up connect with mapStateToProps and mapDispatchToProps

const mapStateToProps = (state) => {
  return null
};

const mapDispatchToProps = {addFeature};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
