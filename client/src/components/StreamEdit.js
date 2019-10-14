import React from 'react'
import {updateStream, getStream} from './actions'
import {connect} from 'react-redux'
import _ from 'lodash'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.getStream(this.props.match.params.id)
    }

    handleSubmit = (formValues) => {
        this.props.updateStream(this.props.match.params.id, formValues)
    }

    render() {
        return (
            <div>
                <h3>Create Stream</h3>
                <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {updateStream, getStream})(StreamEdit)