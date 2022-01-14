import React from "react";
// styles
import styles from './UserList.module.css';
// components
import SingleUser from './SingleUser'

const UserList = (props) => {
  return ( 
    <div className={ styles.userListContainer }>
      { props.userList.map( user => 
        <SingleUser 
          username={ user.username}
          age={ user.age}
          key={ user.id }
        />
      )}
    </div>
  );
}

export default UserList;