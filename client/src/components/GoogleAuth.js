import React from 'react'
import { connect } from 'react-redux'
import {signInOutTry} from '../components/actions'



class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:
                '456679763147-moffnra0fhqhvldhprv5mtoeh0ti31t6.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.props.signInOutTry(this.auth.isSignedIn.get(), this.auth.currentUser.get().getId())
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange =() => {
        this.props.signInOutTry(this.auth.isSignedIn.get(), this.auth.currentUser.get().getId())
    }

    SignInOut = () => {
        const {isSignedIn} = this.props
        if (isSignedIn) {
            this.auth.signOut()
        }
        else {
            this.auth.signIn()
        }
        


        
    }

    renderButton = () => {
        const {isSignedIn} = this.props
        if (isSignedIn) {
            return <div>SignOut</div>
        }
        else {
            return <div>SignIn</div>
        }
    }

    render() {
        return (
            <div className="navButton" onClick={this.SignInOut}>{this.renderButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
   return {
        isSignedIn: state.oauth.isSignedIn,
        id: state.oauth.id
    }
}

export default connect(mapStateToProps, {signInOutTry})(GoogleAuth) 