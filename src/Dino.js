import React, {Component} from 'react';
import Comment from './Comment.js'
import './App.css';



class Dino_blog extends Component {

  constructor(props) {
    super()
    this.state = {
      body: props.body
    }
  }

  state = {
    tempBody: ''
  }

  handleBodyEdit = () => {
    //console.log(this.state)
    let input = prompt("Edit the body")
    //console.log(input)
    this.setState({
      body: input
    })

  }

  handleFromEdit = (e) => {
    e.preventDefault();
    //console.log(e)
    this.setState({
      body: this.state.tempBody
    })
  }

  render() {
    let allComments = this.props.post.comments.map((c,i)=> {
      return <Comment key={i} body={c}/>
    })
    // console.log(allComments)
    // console.log(this.props)
    return(
      <div class="dino_blog">
        <h1>{this.props.post.title}</h1>
        <p>by {this.props.post.author}</p>
        <p>{this.state.body}</p>
        <form onSubmit={this.handleFromEdit}>
        <h5>New body Content</h5>
          <input type="text" name="body" onChange={e => this.setState({tempBody: e.target.value})} />
          <input type="submit" />

        </form>

        {/* <button onClick={this.handleBodyEdit}> Edit the body of this article</button> */}
        <div class="comments">
          <h3>Comments:</h3>
          {allComments}

          {/* <ul>
            <li>{this.props.post.comments[0]}</li>
            <li>{this.props.post.comments[1]}</li>
            <li>{this.props.post.comments[2]}</li>
          </ul> */}
        </div>
      </div>
    )
  }
}

export default Dino_blog;

