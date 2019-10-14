import React from 'react'
import {connect} from 'react-redux'
import {getStream} from './actions'


class StreamShow extends React.Component {
    componentDidMount() {
        this.props.getStream(this.props.match.params.id)
    }

    render() {
        if(this.props.stream && this.props.stream !== undefined) {
            return (
                <div className="showContainer">
                    <div className="showData">
                        <div className="showTitle">{this.props.stream.title}</div>
                        <div className="showDescription">{this.props.stream.description}</div>
                    </div>
                </div>
            )
        }
        else{
            return(
                 <div></div>
             ) 
        }
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {getStream})(StreamShow)