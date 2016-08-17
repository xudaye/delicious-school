import React, {Component} from 'react';
import {Link} from 'react-router';
// import log from './login.jpg'
require("../style/register.css");
require("../style/head.css");
require("../style/login.css");
export default class Login extends Component {
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

        <div className="body-11">
          {/*<img src= './login.jpg'/>*/}
          <div className="body">
            <from className="body-main">
              <div className="body-head">登录</div>
              <div className="username">
                用户名：
                <input type="text"/>
              </div>
              <br />
              <div className="password">密 码：
                <input type="password"/>
              </div>
              <br />
              <div className="body-foot">
                <Link to='/main'><input className="submit" type="submit" value="登录"/></Link>
              </div>
            </from>
          </div>
        </div>
      </div>

    )
  }
}




