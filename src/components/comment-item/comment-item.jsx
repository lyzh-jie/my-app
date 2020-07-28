import React, {Component} from 'react';
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

import './comment-item.css'

class CommentItem extends Component {
  btnDel = () => {
    const index = this.props.index;
    console.log(index);
    // this.props.delComment(index);
    PubSub.publish('delete',index)

  }
  render () {
    const {comment} = this.props;
    return (
      <li>
        <p>{comment.userName}回复：</p>
        <p className="content-p">{comment.content}</p>
        <div className="btn-del" onClick={this.btnDel}>删除</div>
      </li>

    )
  }
}

export default CommentItem;
CommentItem.propTypes = {
  comment:PropTypes.object.isRequired,
}
