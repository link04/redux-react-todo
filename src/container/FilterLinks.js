import React from 'react';
import { connect } from 'react-redux';
import Link from '../presentational/Link';

class FilterLinks extends React.Component {

  render(){
    console.log(this.props);
    return(
      <div>
        <Link className={this.props.filter === 'FILTER_ALL' ? 'active-link' : null} onClick={() => this.props.updateFilter('FILTER_ALL')} filterName="All" />|
        <Link className={this.props.filter === 'FILTER_COMPLETED' ? 'active-link' : null} onClick={() => this.props.updateFilter('FILTER_COMPLETED')} filterName="Completed" />|
        <Link className={this.props.filter === 'FILTER_INCOMPLETE' ? 'active-link' : null} onClick={() => this.props.updateFilter('FILTER_INCOMPLETE')} filterName="Incomplete"  />
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  filter: state.filterReducer.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter) => dispatch({type: 'UPDATE_FILTER', payload: filter})
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterLinks);
