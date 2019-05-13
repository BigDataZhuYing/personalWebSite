import React, {Component} from 'react';
import {render} from 'react-dom';
import ReactSwiper from 'reactjs-swiper';
import './Skill.scss';

const ReactSwiperExample = () => {
    const items = [{
      image: 'file:///F:/gitdata/mydatafirst/my-example/src/img/lun-01.jpg',
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
               <ReactSwiperExample />
            </div>
        )
    }
}

