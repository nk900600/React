import React, {Component} from "react";
import {Field,reduxForm} from "redux-form";
import {FetchPost} from "../../actions/fetchPosts";

class Create extends Component {

    renderError ({error , touched}){
        if (touched && error){
            return(
                <div className="ui error message">
                    <div className="header">
                        {error}

                    </div>
                </div>
            )
        }
    }


    renderInput = (formProps) =>{
        // console.log(formProps.meta);
        const className=`field ${formProps.meta.error && formProps.meta.touched ? 'error' :''}`;
        return(
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/>
                {this.renderError(formProps.meta) }
            </div>
            )
    };

    onSubmit(FormValues){
        console.log(FormValues)

    }


    render() {
        // console.log(this.props);
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="title" component={this.renderInput} label="Enter Title"/>
                     <Field name="descriptions" component={this.renderInput} label="Enter Description"/>
                     <button className="ui button primary"> Submit </button>
                </form>
            </div>
        )
    }
}

const validate =(formvalues)=>{
    const errors = {};

    if (!formvalues.title){
        errors.title = "enter a vaild title"

    }

    if (!formvalues.descriptions){
        errors.descriptions = "enter a vaild descriptions"

    }

    return errors

};


export default reduxForm({
    form: "streamCreate",
    validate: validate
})(Create)

