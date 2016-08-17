import React, {Component} from 'react';
import {Link} from 'react-router';

require("../style/order.css");
require("../style/meal-info.css");
require("../style/head.css");
export default class MealInfo extends Component {
  render() {
    return (
      <div>
        <div className="frame-1">
          <p className="name">
            美味校园&nbsp;&nbsp;<Link to='/main'>首页</Link>
          </p>
          <Link to='/order'>我的订单</Link>&nbsp;
          <Link to='/login'>登录</Link>&nbsp;
          <Link to='/register'>注册</Link>&nbsp;
        </div>

        <div className="head">logo</div>
        <div className="main">
          <div className="main-head">我的单</div>
          <div className="main-body">
            <div className="main-body-left"><img id="picture" src="./../picture/images-1.jpg"></img></div>
            <div className="main-body-right">
              <div className="meal-info">
                <div>水晶饺</div>
                <div>$6</div>
              </div>
              <div >
                <input className="order-button" value="预订" type="submit"/></div>
            </div>
          </div>
          <div className="main-root">
            <div className="back">
              <Link to='/main'>返回主页</Link></div>
          </div>
        </div>
      </div>
    );
  }
}
