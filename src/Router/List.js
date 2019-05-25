import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import * as actions from './Action/';

class List extends React.Component {
  render() {
    const { items } = this.props;
    console.log("dsd");
    return (
      <div>
        {items &&
          items.map(item => (
            <div>
              <Link to="/item" key={item.id}>
                {' '}
                {item.name}
              </Link>
              <br />
            </div>
          ))}
        <br />

        <input placeholder="add book" id="id" />
        <button
          onClick={() =>
            this.props.onClick(document.getElementById('id').value)
          }
        >
          Add
        </button>
      </div>
    );
  }
}
  
const mapStateToProps = state => {
  return {
    items: state.items,
  };  
};

const mapDisPatchToProps = (dispatch, props) => {
  return {
    onClick: name => {
      dispatch(actions.addItem(name));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps,
)(List);
