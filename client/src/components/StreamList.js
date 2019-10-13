import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {getStreams, deleteStream} from './actions'

const StreamListContainer = styled.div`
    padding: 10px 30px;
`
const Title = styled.div`
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 30px;
`
const StreamListInnerContainer = styled.div`
    padding: 10px 30px;
    border: 2px solid #000;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const SmallerTitle = styled.div`
    font-size: 26px;
    margin-bottom: 5px;
`
const Description = styled.div`
    font-size: 15px;
`

class StreamList extends React.Component {
    componentDidMount() {
        this.props.getStreams()
    }

    renderList = () => {
        return (
            this.props.streams.map(stream => {
                return (
                    <StreamListInnerContainer key={stream.id}>
                        <div>
                            <SmallerTitle>{stream.title}</SmallerTitle>
                            <Description>{stream.description}</Description>
                        </div>
                        {stream.userID === this.props.oauth.id? 
                            <div>
                                {/* <Link to={{ pathname: "/streams/edit", props: { title: stream.title,description: stream.description, id: stream.id} }} className="button button-1">Edit</Link> */}
                                <Link to={`/streams/edit/${stream.id}`} className="button button-1">Edit</Link>
                                <button onClick={() => this.props.deleteStream(stream.id)} className="button">Delete</button>
                            </div>
                        :
                        <div></div>
                        }
                    </StreamListInnerContainer>
                )
            })
        )
    }

    render() {
        return (
            <StreamListContainer>
                <Title>Streams</Title>
                {this.renderList()}
                {this.props.oauth.isSignedIn?
                    <Link to="/streams/new" className="button">Create New Stream</Link>
                :<div></div>
                }
            </StreamListContainer>
        )
    }
}

const mapStateToProps = state => {
    return{
        streams: Object.values(state.streams),
        oauth: state.oauth
    }
}

export default connect(mapStateToProps, {getStreams, deleteStream})(StreamList)