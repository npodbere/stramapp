import React from 'react'
import {createStream} from './actions'
import {connect} from 'react-redux'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component {

    handleSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render() {
        return (
            <div>
                <h3>Create Stream</h3>
                <StreamForm onSubmit={this.handleSubmit} />
            </div>
        )
    }
}

// export default withRouter(connect(null, {createStream})(forWrapped))
export default connect(null, {createStream})(StreamCreate)