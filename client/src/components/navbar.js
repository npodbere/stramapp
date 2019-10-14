import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import GoogleAuth from './GoogleAuth'

const NavbarContainer = styled.div`
    background-color: blue;
    display: flex;
    padding: 5px 10px;
    justify-content: space-between;
    margin-bottom: 30px;
    box-shadow: 0 10px 40px 5px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
`



class Navbar extends React.Component {
    render() {
        return( 
            <NavbarContainer>
                <Link className="navButton" to="/">
                    Streams
                </Link>

                <GoogleAuth />
            </NavbarContainer>
        )
    }
}

export default Navbar