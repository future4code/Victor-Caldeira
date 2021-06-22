import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import { StyledToolbar } from "./styled"
import { goToCadastroPage, goToLoginPage } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory()
  return (

    <AppBar position="static">
      <StyledToolbar>

        <Button onclick={() => goToCadastroPage (history)} color="inherit"> Lab.Eddit </Button>

        <Button onclick={() => goToLoginPage (history)} color="inherit"> Login </Button>

      </StyledToolbar>
    </AppBar>
  );
}

export default Header;