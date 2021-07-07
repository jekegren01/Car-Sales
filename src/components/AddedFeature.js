import React from 'react';
//import connect for store use, import actions for use
import { removeFeature } from '../actions';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => {props.removeFeature(props.feature)}} className="button">X</button>
      {props.feature.name}
    </li>
  );
};


//set up connect with mapStateToProps and mapDispatchToProps
const mapStateToProps = (state) => {
  return null
};

const mapDispatchToProps = {removeFeature};

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
