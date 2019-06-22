import React from 'react';

const Link = props => {
  return (
    <a href={'#'+props.filterName} className={props.className} onClick={props.onClick}> {props.filterName} </a>
  );
}

export default Link;
