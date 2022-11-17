import {
  PersonOutlineIcon,
  SettingsOutlinedIcon,
  ListAltOutlinedIcon,
  PeopleOutlinedIcon,
} from '../../../assets/icons';
import { Buttons, StyledLink } from '../../molecules/Buttons/Buttons';
import Searchbar from '../../molecules/Searchbar/Searchbar';
import { TopbarWrapper } from './Topbar.styles';

function Topbar() {
  return (
    <TopbarWrapper>
      <Searchbar />
      <Buttons>
        <StyledLink to='/settings'>
          <SettingsOutlinedIcon />
        </StyledLink>
        <StyledLink to='/profile'>
          <PersonOutlineIcon />
        </StyledLink>
        <StyledLink to='/tasks'>
          <ListAltOutlinedIcon />
        </StyledLink>
        <StyledLink to='/team'>
          <PeopleOutlinedIcon />
        </StyledLink>
      </Buttons>
    </TopbarWrapper>
  );
}
export default Topbar;
