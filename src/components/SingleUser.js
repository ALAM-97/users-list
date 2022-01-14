import React from "react";
// style
import styles from './SingleUser.module.css';


const SingleUser = (props) => {
  return ( 
    <div className={ styles.singleUser }>
      { `${ props.username } (età ${ props.age })`  }
    </div>
  );
}

export default SingleUser;