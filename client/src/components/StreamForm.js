import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
    renderInput({input, label, meta}) {
        return ( 
            <div className="inputBlock">
                <label className="inputLabel">{label}</label>
                <input className="inputField" {...input} autoComplete="off" />
                {meta.touched ?
                    <div className="inputError">{meta.error}</div>:
                <div></div>
                }
            </div>
        )
    }

    handleSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="formPadding">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter description" />
                <button className="submitButton">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if (!formValues.title) {
        errors.title = "You must enter a title"
    }

    if (!formValues.description) {
        errors.description = "You must enter a description"
    }

    return errors
}

export default reduxForm({
    form: 'StreamForm',
    validate
})(StreamForm)
