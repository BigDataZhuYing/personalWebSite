
import React, { Component } from 'react';


import './HomeContent.scss';

//应聘职位
export default class Tab extends Component {
  constructor() {
    super();
    this.state = {
      list: ['web前端开发', 'PS技术'],
      content: [{ item: <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017年至今，在校大数据科研室学习web前端开发技术两年，从简单的网页编写到深入的页面交互以及响应式设计等方面有了深刻的认识。IT编程是需要多加实践的，要不断反复进行上机操作，是学习编程开发的唯一方法。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前端开发是创建Web页面或app等前端界面呈现给用户的过程，通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互。它从网页制作演变而来，名称上有很明显的时代特征。在互联网的演化进程中，网页制作是Web1.0时代的产物，早期网站主要内容都是静态，以图片和文字为主，用户使用网站的行为也以浏览为主。随着互联网技术的发展和HTML5、CSS3的应用，现代网页更加美观，交互效果显著，功能更加强大。</p>
     },
      { item: <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PS是设计和绘画领域各种软件的基石。PS远远不止是用于日常照片的美化广告摄影、平面设计、文字排版、影像创意、网页制作、界面设计、UI图标、数码规划等等领域都发挥着重要作用。<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在网页规划建设中，网页布局设计是其至关重要的一节，它关系到网站能否吸引更多人的眼球，直接关系到网站的点击率。所以网页布局是否美观、规范、合理越来越受到网页设计师的重视。Photoshop的灵魂是图层，每层课防治不同的元素，图层之间可以相互链接，也可单独存放，每个图层上的图像位置可以随意挪动，每个图层上的图像大小、色阶、亮度、饱和度透明度等可单独设置。
      心理学研究表明一个网站的下载时间超过10秒，人们会自动转向其他网站。决定下载速度的因素有很多，其中网页大小、网页元素的优化和网络配置是重要的因素。其中网页大小与网页元素的优化是设计师需要解决的，使用Photoshop设计的网页经过裁切、整合处理后体积会小得多。</p> }],
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
      
      <div className={this.props.contentClass(this.props.index)} >{this.props.val}
          
      </div>  
    )

  }

}

