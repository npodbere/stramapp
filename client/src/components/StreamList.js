import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {getStreams, deleteStream, openCloseModal} from './actions'
import Modal from '../Modal'

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
    text-decoration: none;
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
                            <Link to={`/streams/${stream.id}`}>
                                <SmallerTitle>{stream.title}</SmallerTitle>
                            </Link>
                            <Description>{stream.description}</Description>
                        </div>
                        {stream.userID === this.props.oauth.id? 
                            <div>
                                {/* <Link to={{ pathname: "/streams/edit", props: { title: stream.title,description: stream.description, id: stream.id} }} className="button button-1">Edit</Link> */}
                                <Link to={`/streams/edit/${stream.id}`} className="button button-1">Edit</Link>
                                <button onClick={() => this.props.openCloseModal(stream.id, stream.title)} className="button">Delete</button>
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
                {this.props.modal.showModal ? <Modal title="Please Confirm Deletion" description={`Are you sure that you want to delete stream with title: ${this.props.modal.title}`}  action={() => this.props.deleteStream(this.props.modal.id)} redirect={() => this.props.openCloseModal()} />
                 : <React.Fragment></React.Fragment>}
            </StreamListContainer>
        )
    }
}

const mapStateToProps = state => {
    return{
        streams: Object.values(state.streams),
        oauth: state.oauth,
        modal: state.modal
    }
}

export default connect(mapStateToProps, {getStreams, deleteStream, openCloseModal})(StreamList)