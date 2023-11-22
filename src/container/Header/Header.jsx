import React from 'react';

import { SubHeading }from "../../components";
import { images } from "../../constants";
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    {/* 這裡的id對應到Navbar.jsx中<a></a>中href的#home */}
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      {/* title為SubHdeading的attribute，也就表示title是SubHeading的props。
      這個props可以在SubHeanding.jsx中，被SubHeading函數作為參數使用。 */}

      <h1 className='app__header-h1'> The key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: "2rem 0" }}> No. 1, Sec. 1, Wenhua Rd., Banqiao Dist., New Taipei City, Taiwan (R.O.C.) </p>
      <a href='#menu'> <button type='button' className='custom__button'> Explore Menu </button> </a>
      {/* 用<a href="#menu">包住<button>，這樣點擊button的時候就會導入id=menu的地方 */}

    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
