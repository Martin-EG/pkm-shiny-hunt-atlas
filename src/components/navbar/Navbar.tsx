import { 
  CompleteShinyhuntDarkIconSrc, 
  CompleteShinyhuntLightIconSrc,
  ShinyhuntDarkIconSrc,
  ShinyhuntLightIconSrc
} from '@assets';
import { useResponsive } from '@hooks/responsive';
import { Button } from 'glamui-react';

import ShinyHuntProgress from '../shinyHuntProgress';

const Navbar = () => {
  const isDarkMode = document.querySelector('html')?.getAttribute('data-theme') === 'dark';
  const { isMobile } = useResponsive();
  const completeLogo = isDarkMode ? CompleteShinyhuntDarkIconSrc : CompleteShinyhuntLightIconSrc;
  const mobileLogo = isDarkMode ? ShinyhuntDarkIconSrc : ShinyhuntLightIconSrc;
  const logo = isMobile ? mobileLogo : completeLogo;

  const optionsDesktop = (
    <div className="flex gap-2">
      <Button variant="primary" size="sm">Dex</Button>
      <Button variant="transparent" size="sm">Hunts</Button>
      <Button variant="transparent" size="sm">Methods</Button>
    </div>
  );
  const optionsMobile = (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Dex</a></li>
        <li><a>Hunts</a></li>
        <li><a>Methods</a></li>
      </ul>
    </div>
  );

  const navigationOptions = isMobile ? optionsMobile : optionsDesktop;
  const navbarDirection = isMobile ? 'flex-row-reverse' : 'flex-row';

  return (
    <header className="navbar bg-base-100 py-4 px-4 shadow-sm items-center space-x-4 gap-4 justify-between">
      <div className={`flex ${navbarDirection} gap-4 flex-1 items-center`}>
        <img src={logo} alt="ShinyHunt Logo" className="h-12" />
        {navigationOptions}
      </div>
      <ShinyHuntProgress />

    </header>
  )
};

export default Navbar;