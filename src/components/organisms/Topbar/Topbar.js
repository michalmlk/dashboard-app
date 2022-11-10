import {
  PersonOutlineIcon,
  SettingsOutlinedIcon,
  ListAltOutlinedIcon,
  PeopleOutlinedIcon,
} from '../../../assets/icons';
import Buttons from '../../molecules/Buttons/Buttons';
import Searchbar from '../../molecules/Searchbar/Searchbar';
import { TopbarWrapper } from './Topbar.styles';

function Topbar() {
  return (
    <TopbarWrapper>
      <Searchbar />
      <Buttons>
        <button type='button'>
          <SettingsOutlinedIcon />
        </button>
        <button type='button'>
          <PersonOutlineIcon />
        </button>
        <button type='button'>
          <ListAltOutlinedIcon />
        </button>
        <button type='button'>
          <PeopleOutlinedIcon />
        </button>
      </Buttons>
    </TopbarWrapper>
  );
}
export default Topbar;
