import React, {Component} from 'react';
import {Link} from 'react-router';
require('../style/main.css');

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="frame">

          <Header/>
          <Body/>

          <div>
            <div className="frame-2">
              <h5>商家列表</h5>
              <div className="text-1">
                <a href='#c'>美味食府</a>
                <Link to='/meal-info'>美味冒菜</Link>
              </div>

            </div>

            <div className="frame-3">


              <div className="frame-3-1">
                <Link to='/meal-info'><img src="./2.jpg" className="img-1"></img></Link>
              </div>
              <div className="frame-3-1">
                <Link to='/meal-info'><img src="./1.jpg" className="img-1"></img></Link>
              </div>
              <div className="frame-3-1">
                <Link to='/meal-info'><img src="./3.jpg" className="img-1"></img></Link>
              </div>
              <div className="frame-3-1">
                <Link to='/meal-info'><img src="./4.jpg" className="img-1"></img></Link>
              </div>

              <a name="c">
                <div className="frame-3-2">
                  <Link to='/meal-info'><img src="./5.jpg" className="img-1"></img></Link>
                </div>
                <div className="frame-3-2">
                  <Link to='/meal-info'><img src="./6.jpg" className="img-1"></img></Link>
                </div>
                <div className="frame-3-2">
                  <Link to='/meal-info'><img src="./7.jpg" className="img-1"></img></Link>
                </div>
                <div className="frame-3-2">
                  <Link to='/meal-info'><img src="./8.jpg" className="img-1"></img></Link>
                </div>
              </a>

              <a name="b">
                <div className="frame-3-3">
                  <Link to='/meal-info'><img src="./9.jpg" className="img-1"></img></Link>
                </div>
                <div className="frame-3-3">
                  <Link to='/meal-info'><img src="./10.jpg" className="img-1"></img></Link>
                </div>
                <div className="frame-3-3">
                  <Link to='/meal-info'><img src="./8.jpg" className="img-1"></img></Link>
                </div>
                <div className="frame-3-3">
                  <Link to='/meal-info'><img src="./1.jpg" className="img-1"></img></Link>
                </div>
              </a>

              <a name="c">
                <div className="frame-3-3">
                  <Link to='/meal-info'><img src="./9.jpg" className="img-1"></img></Link>
                </div>
                <div className="frame-3-3">
                  <Link to='/meal-info'><img src="./10.jpg" className="img-1"></img></Link>
                </div>
                <div className="frame-3-3">
                  <Link to='/meal-info'><img src="./8.jpg" className="img-1"></img></Link>
                </div>
                <div className="frame-3-3">
                  <Link to='/meal-info'><img src="./1.jpg" className="img-1"></img></Link>
                </div>
              </a>

              <a name="c">
                <div className="frame-3-3">
                  <Link to='/meal-info'><img src="./9.jpg" className="img-1"></img></Link>
                </div>
                <div className="frame-3-3">
                  <Link to='/meal-info'><img src="./10.jpg" className="img-1"></img></Link>
                </div>
                <div className="frame-3-3">
                  <Link to='/meal-info'><img src="./8.jpg" className="img-1"></img></Link>
                </div>
                <div className="frame-3-3">
                  <Link to='/meal-info'><img src="./1.jpg" className="img-1"></img></Link>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="frame-1">
        <p className="name">
          美味校园&nbsp;&nbsp;
        </p>
        <Link to='/order'>我的订单</Link>&nbsp;
        <Link to='/login'>登录</Link>&nbsp;
        <Link to='/register'>注册</Link>&nbsp;
      </div>
    );
  }
}

class Body extends Component {
  render() {
    return (
      <div className="frame-4">
        <div id="myCarousel" className="carousel slide">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <Link to='/meal-info'><img src="./13.jpg" alt=" " className="img-2"/></Link>
            </div>
            <div className="item">
              <Link to='/meal-info'><img src="./14.jpg" alt=" " className="img-2"/></Link>
            </div>
            <div className="item">
              <Link to='/meal-info'><img src="./15.jpg" alt=" " className="img-2"/></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {Header};
