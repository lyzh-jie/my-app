import React, {Component} from 'react';
import CommentForm from '../comment-form/comment-form'
import CommentList from '../comment-list/comment-list'


import './comment-app.css'
class CommentApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments: [
        {userName:'Tom',content:'cartoons有利于小朋友智力发展'},
        {userName:'Jerry',content:'watching cartoon伤害小朋友的眼睛'}]
    }
  }
  addComment=(comment) => {
    const {comments} = this.state;
    comments.unshift(comment);
    this.setState(comments);
  }
  delComment = (index) => {
   const {comments} = this.state;
   comments.splice(index,1);
   this.setState(comments);
  }
  render () {
    const {comments} = this.state;
    return (
      <div>
        <h1>请发表对小朋友看动画片的看法</h1>
        <div className="container">
          <CommentForm addComment={this.addComment}/>
          <CommentList comments={comments} delComment={this.delComment}/>
        </div>
      </div>
    )
  }
}

export default CommentApp;