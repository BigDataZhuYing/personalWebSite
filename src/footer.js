import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <div className="footerinner">
            <ul className="share">
                <li><span class="iconfont iconqq-copy-copy "></span></li>
                <li><span class="iconfont iconweibo  "></span></li>
                <li><span class="iconfont iconwechat  "></span></li>
            </ul>
            <div className="footerinfo">
                <p>Telephone：18133592015</p>
                <p>Email:1375086371@qq.com</p>
                <p>河北省张家口市河北北方学院</p>
                <p>河北省定州市</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Footer