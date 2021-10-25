import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Hidden } from '@mui/material';
import Logo from '../../assets/images/SwingScalp-01 2.png'
import Mobilemenu from './Mobilemenu'
import Fab from '@mui/material/Fab';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="static" className="appbar-setting">
        <Toolbar>
          <Button
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
            href="/"
          >
            <img  src={Logo} width="148px" height="138px" />
          </Button>
          <Hidden  mdDown>
          <div className="appbar-btn" >
          <Typography variant="body2"sx={{marginTop:"30px"}} >
        Some quick example text to build on the card title and make up the bulk of the card content.
        </Typography>
         
          </div>
        
          <Button color="inherit" variant="contained" href="/signin" >signin</Button>
          
          </Hidden>
          <Hidden mdUp>
          <div className="signup-appbar" >
          <Mobilemenu/>
          </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
