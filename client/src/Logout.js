import { useEffect } from "react";
import { Redirect } from "react-router";
import { logOut } from './redux/User/user.actions'
import { connect } from 'react-redux'

function Logout(props){
    useEffect(() => {
        props.logOut()
    }, [])
    return <Redirect to={{pathname: '/login', state: {from: props.location}}} />;
}

const mapStateToProps = state => {
  return {
    user: state.user.userInfo
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Logout);