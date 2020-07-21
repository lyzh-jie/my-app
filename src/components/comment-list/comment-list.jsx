import React,{Component} from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment-item'

export default class CommentList extends Component{
  //state的简写方式
  state = {
    display:'none'
  }
  //prop-types验证的简写方式
  static propTypes = {
    comments:PropTypes.array.isRequired,
    delComment:PropTypes.func.isRequired
  }
  render(){
    const {comments} = this.props;
    const display1 = comments.length > 0 ? 'none' : 'block';
    return(
      <ul className="col-md-8">
        <h3>评论回复：</h3>
        <h2 style={{display:display1}}>暂无评论，点击左侧添加评论！！！</h2>
        {comments.map((comment,index) => <CommentItem comment={comment} key={index} delComment={this.props.delComment} index={index}/>)
        // comments.map((comment,index) => {console.log(comment+'---'+index);})
        }
      </ul>
    )
  }
}

/*
CommentList.propTypes = {
  comments:PropTypes.array.isRequired,
  delComment:PropTypes.func.isRequired
}*/
