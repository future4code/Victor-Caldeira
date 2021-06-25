import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import { StyledToolbar } from "./styled"
import { goToCadastroPage, goToLoginPage } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';

const Header = ({ rightButtonText, setRightButtonText }) => {
  const token = localStorage.getItem("token")
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButtonText("login")
      goToLoginPage(history)
    }
    else {
      goToLoginPage(history)
    }
  }

  return (

    <AppBar position="static">
      <StyledToolbar>
        <Button onclick={() => goToCadastroPage(history)} color="inherit"> Lab.Eddit </Button>

        <Button onclick={rightButtonAction} color="inherit"> {rightButtonText} </Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header