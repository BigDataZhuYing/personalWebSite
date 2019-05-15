import React, {Component} from 'react';
import {render} from 'react-dom';
import ReactSwiper from 'reactjs-swiper';
import Progress from './progress';
import './Skill.scss';

const ReactSwiperExample = () => {
    const items = [{
      image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci1.jpg',
      title: '图片1',
      link: 'http://jd.com'
    }, {
      image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci2.jpg',
      title: '图片2',
    }, {
      image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci3.jpg',
      title: '图片3',
      link: 'http://jd.com'
    }, {
      image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci4.jpg',
      title: '图片4',
    }];
  
    const swiperOptions = {
      preloadImages: true,
      autoplay: 6000,
      autoplayDisableOnInteraction: false
    };
    return (
      <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
                   className="swiper-example" />
    );
  };
  
export default class Detail extends React.Component {
    
    render() {
        return (
            <div className="skill">
              <div className="swiper">
                <ReactSwiperExample />
              </div>
              <div className="content">
                <div className="skill-content">
                  <dl>
                    <dt><img className="pentagon" src={require('./img/skill-html.jpg')} /></dt>
                    <dd><h3>如果把网页说成盖房子，那么HTML就是在搭建房子。</h3>房子的每一块砖、每一根钢筋都需要精准搭牢，有了地基才能谈外表。
                    html是一种超文本标记语言，静态网页也是由，html的标记和标记中的属性，来体现出来。搭建网页中最常用到的标签有标题、表单、按钮、列表和链接等，各式各样的标签丰富了页面的结构。
                    <Progress nums={100} index={90} progressColor='#00a3cf' />
                    </dd>
                  </dl>
                </div>
              </div>
              
            </div>
        )
    }
}

