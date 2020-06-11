import React, { Component } from "react";
import {Link} from "react-router-dom"
import { Segment, Header, Button, Icon } from "semantic-ui-react";
import PostForm from "./PostForm";
class Post extends Component {
  state = { editing: false };
  toggleEdit = () => this.setState({ editing: !this.state.editing });
  render() {
    return (
      <Segment
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {this.state.editing ? (
          <PostForm
            {...this.props}
            edit={this.props.edit}
            toggle={this.toggleEdit}
          />
        ) : (
          <>
            <Header as="h3">{this.props.title}</Header>
            <p>{this.props.body}</p>
          </>
        )}
        <div>
          <Button icon color="blue" onClick={this.toggleEdit}>
            <Icon name="pencil" />
          </Button>
          <Button icon color="red">
            <Icon name="trash" />
          </Button>
          <Link to={{
            pathname: `/blog/${this.props.id}`,
            state: {
              key1:'some data',
              title: this.props.title,
              body: this.props.body,
            }
          }}>
          <Button icon color="green">
            <Icon name="eye" />
          </Button>
          </Link>
        </div>
      </Segment>
    );
  }
}
export default Post;