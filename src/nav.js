import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.scss'

const NavBar = () => (
    <div className="menu-content">
        <NavLink exact to='/' className="">首页</NavLink>
        <NavLink to='/Skill'>个人技能</NavLink>
        <NavLink to='/Interest'>兴趣爱好</NavLink>
        <NavLink to='/Message'>说说</NavLink>
        <NavLink to='/About'>关于我</NavLink>
        
        <NavLink className="menu-content-right">注册</NavLink>
        <NavLink className="menu-content-right">登录</NavLink>
    </div>
);



export default NavBar;