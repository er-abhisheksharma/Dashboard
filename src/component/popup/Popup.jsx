import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Close from '@mui/icons-material/Close';
import Help from '@material-ui/icons/ContactSupport';
import './Popup.css';
import Card from '../Card';
import Charts from '../Charts';
import { Link } from 'react-router-dom';

const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));



export default function PersistentDrawerRight() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    
    setOpen(true);
    document.getElementById("popup").style.marginRight = "15%";
    document.getElementById("popup").style.width = "800px";
  };

  const handleDrawerClose = () => {
    setOpen(false);
    document.getElementById("popup").style.marginRight = "0%";
  };

  return (

    <div id="popup"> 
    <div className='maintitle'>
      <span id="maintitle">CPA DASHBOARD  </span>
      <u id="submaintitle"> Switch to PPC Dashboard</u>
    </div>

    <Charts className='chart' />

    <div className='title'>
      <div className="tagtext">BROWSE CPA OFFERS</div>
      <div className="tagtext">CPA OFFERS WALL</div>
      <div className="tagtext">CPA EARNING STATS</div>
    </div>
    <div className='carddata'>
      <div className='cardrow'>
        <Card/>
        <Card/>
      </div>
    <div className='cardrow'>
      <Card/>
      <Card/>
    </div>
    </div>
    
    <Box sx={{ display: 'flex' }} id="Main">

          <Help  style={{ fontSize: 60}} className='helpicon' color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}/>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader >
            <span>HELP VIDEO   <Close onClick={handleDrawerClose} className="closeicon"/>  </span>
          
        </DrawerHeader>
        <Divider />
        <iframe className='iframe' width="200" height="100" src="https://www.youtube.com/embed/21Ud1KMkNbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Divider />
        <div className='info'>
          <span>CPA QUICK INFO</span><br/><br/>

          <a href='www.google.com' target="_blank" className='infolink'> -: BROWSE OFFER</a><br/><br/>
          <a href='www.google.com' target="_blank" className='infolink'> -: BROWSE OFFER</a><br/><br/>
          <a href='www.google.com' target="_blank" className='infolink'> -: BROWSE OFFER</a>
        </div>
      </Drawer>
    </Box>
    </div>
  );
}
