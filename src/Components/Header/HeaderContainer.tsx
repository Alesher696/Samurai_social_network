import React from 'react'
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/auth-reducer";
import {storeType} from "../../redux/redux-store";
import {authMe} from "../../api/api";


class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const {email, id, login} = data.data
                    this.props.setUserDataAC(id, email, login)
                }
            })
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

export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer)