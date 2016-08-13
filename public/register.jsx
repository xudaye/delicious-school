import React, {Component} from 'react';
import {Link} from 'react-router';

require("../style/register.css");
export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="frame-1">
                    <p className="name">
                        美味校园
                    </p>
                    <Link to='/order'>我的订单</Link>&nbsp;
                    <Link to='/login'>登录</Link>&nbsp;
                    <Link to='/register'>注册</Link>&nbsp;
                </div>

                <div className="body-11">
                    <div className="body">
                        <from className="body-main">
                            <div className="body-head">注册</div>
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
                                <Link to='/main'><input className="submit" type="submit" value="注册"/></Link>
                            </div>
                        </from>
                    </div>
                </div>
            </div>
        )
    }
}

