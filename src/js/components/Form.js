import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuidv1 from "uuid";
import { addArticle, deleteArticle, flushArticle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article)),
    deleteArticle: () => dispatch(deleteArticle()),
    flushArticle: () => dispatch(flushArticle())
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteHandle = this.deleteHandle.bind(this);
    this.flushHandle = this.flushHandle.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }
  deleteHandle() {
    this.props.deleteArticle();
    this.setState({ title: "" });
  }
  flushHandle() {
    this.props.flushArticle();
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
        <button onClick={this.deleteHandle} className="btn btn-success btn-lg">
          DELETE
        </button>
        <button onClick={this.flushHandle} className="btn btn-success btn-lg">
          FLUSH
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

ConnectedForm.propTypes = {
  addArticle: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  flushArticle: PropTypes.func.isRequired
};

export default Form;
