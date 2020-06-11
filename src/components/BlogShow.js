import React from "react"
import {Button} from "semantic-ui-react"

class BlogShow extends React.Component{

  componentDidMount(){
    // axios.get()
    console.log(this.props.location.state)
  }

  goHome =() => {
    this.props.history.push("/")
  }

  goBack = () =>{
    this.props.history.goBack()
  }

  render(){
    return(
      <div>
        <p>{this.props.match.params.id}</p>
        <p>{this.props.location.state.title}</p>
        <p>{this.props.location.state.body}</p>

        <h1>Blog show</h1>
        <Button onClick={this.goHome}>Home</Button>
        <Button onClick={this.goBack}>Back</Button>


      </div>
    )
  }
}

export default BlogShow