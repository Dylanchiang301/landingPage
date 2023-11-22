/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import './Navbar.css';
// import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (

    <nav className='app__navbar'>
      {/* <nav><nav/>tag是用來製作導覽列的tag，會搭配<a><a/>加入連結。 */}
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
        {/* //載入圖片，來源就是import的images中的gericht，若是圖片載入失敗，頁面就會秀出alt的文字"app logo"。 */}

      </div>

      <ul className="app__navbar-links">
        <li className='p__opensans'><a href='#home'>HOME</a></li>
        <li className='p__opensans'><a href='#about'>ABOUT</a></li>
        <li className='p__opensans'><a href='#menu'>MENU</a></li>
        <li className='p__opensans'><a href='#awards'>AWARDS</a></li>
        <li className='p__opensans'><a href='#contact'>CONTACT</a></li>
        {/* tag中herf='#home',#後面的名稱為id的名稱，會連接到 id= "home"的區塊 */}
      </ul>

      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>LOG IN / REGISTER</a>
        <div />
        <a href='#home' className='p__opensans'>BOOK TABLE</a>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          // 這邊表示if toggleMenu的值是true，就會執行下方程式
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ui className="app__navbar-smallscreen_links">
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href='#home'>HOME</a></li>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href='#about'>ABOUT</a></li>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href='#menu'>MENU</a></li>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href='#awards'>AWARDS</a></li>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><a href='#contact'>CONTACT</a></li>
            </ui>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar;
