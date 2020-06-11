import React from "react";
import { Form } from "semantic-ui-react";

export default class PostForm extends React.Component {
  state = { title: "", body: "" };

  componentDidMount(){
    console.log("form mounted")
    console.log(this.props)
    if(this.props.id){
      this.setState({
        title: this.props.title,
        body: this.props.body,
      })
    }

  }

  handleSubmit = (e) => {
    console.log(this.state);
    // want add this state to some method coming props to
    // add post to Blog
    if(this.props.id){
      this.props.edit({id: this.props.id, ...this.state})
      //toggle the form
      this.props.toggle()
    }
    else{
    this.props.add(this.state);
    }
    this.setState ({
      title: '',
      body: '',
    })
  };

  handleChange = (e) => {
    console.log("name: ", e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            placeholder={"Enter Title"}
            label={"Title"}
            name={"title"}
            onChange={this.handleChange}
            value={this.state.title}
          />
          <Form.Input
            placeholder={"Enter Body"}
            label={"Body"}
            name={"body"}
            onChange={this.handleChange}
            value={this.state.body}
          />
          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}