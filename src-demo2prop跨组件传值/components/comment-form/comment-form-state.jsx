import React,{Component} from 'react'
import PropTypes from 'prop-types'
class CommentForm extends Component{
  state = {
    userName:'',
    content:''
  }
  handleUserName = (event)=>{
    const userName = event.target.value;
    this.setState({userName})
  }
  handleContent = (event) => {
    const content = event.target.value;
    this.setState({content})
  }
  collectData = ()=>{
  //  1.收集数据
    const comment = {
      userName:this.state.userName,
      content:this.state.content
    }
    console.log(comment);
  //  2.发送数据
    this.props.addComment(comment);
  //  3.清空内容
    
  }
  render(){
    const {userName,content} = this.state
    return(
      <form className="col-md-4">
        <div className="form-group">
          <label>用户名：</label>
          <input type="text" className="form-control" placeholder="用户名" value={userName} onChange={this.handleUserName}/>
        </div>
        <div className="form-group">
          <label>评论内容</label>
          <textarea className="form-control textarea-content" placeholder="评论内容" style={{height:'200px'}} value={content} onChange={this.handleContent}></textarea>
        </div>
        <button type="submit" className="btn btn-default btn-commit" style={{float:'right'}} onClick={this.collectData}>提交</button>
      </form>
    )
  }
}
export default CommentForm;
CommentForm.propTypes = {
  addComment:PropTypes.func.isRequired
}