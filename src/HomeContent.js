
import React, { Component } from 'react';

import './HomeContent.scss';

//应聘职位
export default class Tab extends Component {
  constructor() {
    super();
    this.state = {
      list: ['web前端开发', 'PS技术'],
      content: [{ item: '在校期间，在大数据科研室学校web前端技术开发技术两年，从简单的网页搭建到深入的页面交互以及响应式设计等方面有了深刻的认识。IT编程是需要多加实践的，要不断反复进行上机操作，是学习编程开发的唯一方法。' },
      { item: 'PS技术最主要用来做平面设计、修复修改照片、网页制作、绘画、图标制作、界面设计等。' }],
      current: 0
    }
  }
  handleClick(index) {
    this.setState({ current: index });

  }
  currentClass(index) {

    return this.state.current === index ? 'current' : '';
  }
  contentClass(index) {
    return this.state.current === index ? 'active' : '';
  }
  render() {
    return (
       <div className='inner home-inner'>
        <div id="outer" >
          <ul id="tab" >
            {this.state.list.map((val, index) => {
              return (<List currentClass={this.currentClass.bind(this)} handleClick={this.handleClick.bind(this)} val={val} key={index} index={index} />)
            })}
          </ul>
          <div id="content" >
            {this.state.content.map((val, index) => {
              return (<Content key={index} val={val.item} index={index} contentClass={this.contentClass.bind(this)} />)
            })}

          </div>
          
        </div>
        
      </div>
      
    )
  }
}



class List extends Component {

  handleClick() {

    this.props.handleClick(this.props.index);
  }
  render() {
    return (
      <li className={this.props.currentClass(this.props.index)} onClick={this.handleClick.bind(this)} >{this.props.val}</li>
    )
  }
}

class Content extends Component {
  

  render() {
   
    return (
      
      <div className={this.props.contentClass(this.props.index)} >{this.props.val}啊啊啊啊啊啊啊啊</div>  
    )

  }

}

