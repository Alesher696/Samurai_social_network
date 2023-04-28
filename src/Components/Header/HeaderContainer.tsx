import React from 'react'
import {Header} from "./Header";
import {connect} from "react-redux";
import {GetAuthUserDataTC} from "../../redux/auth-reducer";
import {storeType} from "../../redux/redux-store";



class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
       this.props.GetAuthUserDataTC()
    }

    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}
                       setActiveButton={this.props.setActiveButton}
                       activeButton={this.props.activeButton}
        />
    }
}

const mapStateToProps = (state: storeType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {GetAuthUserDataTC})(HeaderContainer)