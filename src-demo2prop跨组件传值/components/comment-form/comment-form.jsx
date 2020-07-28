import React,{Component} from 'react'
import PropTypes from 'prop-types'
class CommentForm extends Component{
  collectData = (event)=>{
    event.preventDefault();
  //  1.收集数据
    const userName = this.userNameInput.value;
    const content = this.contentInput.value;
    const comment = {userName,content};
    console.log(comment);
  //  2.发送数据
    this.props.addComment(comment);
  //  3.清空内容
    this.userNameInput.value = '';
    this.contentInput.value = '';

  }
  render(){
    return(
      <form className="col-md-4">
        <div className="form-group">
          <label>用户名：</label>
          <input type="text" className="form-control" placeholder="用户名" ref={input => this.userNameInput = input}/>
        </div>
        <div className="form-group">
          <label>评论内容</label>
          <textarea className="form-control textarea-content" placeholder="评论内容" style={{height:'200px'}} ref={input => this.contentInput =input}></textarea>
        </div>
        <button type="submit" className="btn btn-default btn-commit" style={{float:'right'}} onClick={this.collectData}>提交</button>
      </form>
    )
  }
}
CommentForm.propTypes = {
  addComment:PropTypes.func.isRequired
}
export default CommentForm;
