import React from 'react';
import bgImage from './img/bg.jpg';
import Tab from './HomeContent';
import CommentInput from './CommentInput';
import CommentList from './CommentList';



import './index.scss';



export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          data:[{href:'http://www.w3school.com.cn/',name:'w3cschool',expound:'在 w3school，你可以找到你所需要的所有的网站建设教程。'},
                {href:'https://www.runoob.com/',name:'菜鸟教程',expound:'提供了编程的基础技术教程'},
                {href:'https://www.imooc.com/',name:'慕课网',expound:'慕课网(IMOOC)是IT技能学习平台'},
                
                ],
          list:[{title:'aaaaa',content:'ssssssssssssss',date:'2019/05/01'}],
          comments: []
        }
      }
      componentDidMount(){
      }
      getPathname = () => {
          console.log(this.props.location);
      }
      // 动态加载信息的函数
      scrollLoad = (container) => {
    
      }
    handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
}
    render() {
        const { list, data } = this.state;
        return (
            
            <div className="home-content">
                <div className="bgImage">
                    <img src={bgImage} height="580px"width="100%" />
                    <div className="blogTitle">
                        <h1>Welcome to this place. I'm Zhu Ying.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Love life, love travel, love code world</h1>
                         
                    </div>
                    {/* <div className="visit">我是信管专业的大三学生<br/>爱生活 爱旅行 爱代码世界</div> */}
                </div>
                <div className="before">
                       —————生活中的每一个人都是你的老师。即使老是弄得你头昏脑胀的人也不例外。 因为你从他们身上可以知道自己的水准。
                </div>
                <div className="alink">
                {data && data.map((item, index) => {})}
                   <div className="link-head">热门链接</div>
                   <div className="link-content">
                       <ul>
                       {data && data.map((item, index) => {
                           return <li  key={index+'key'}><a href={item.href}>{item.name}</a><span>{item.expound}</span></li>
                       })}
                           
                       </ul>
                   </div>
                </div>
               <Tab/>
               <div className="note">
                    <div className="note-head">评论区</div>
                    <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                    <CommentList comments={this.state.comments}/>
               </div>
                
                
                

               
            </div>
            
        )
    }
}

