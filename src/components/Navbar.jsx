// import { Badge } from "@material-ui/core";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
// import React from "react";
import * as React from 'react';
import { useState } from "react";
// import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { NavLink as RouterLink } from "react-router-dom";
import logo from '../assets/images/logo.png';
import { makeStyles } from '@mui/styles';

import { styled, alpha, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';

import Stack from '@mui/material/Stack';

import { red } from '@mui/material/colors';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import { SwipeableDrawer } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../css/Header.css';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';


import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const drawerWidth = 240;

// on hover button




function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// on hover button end

const blue2 = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomLink = styled('RouterLink')`

`;

const CustomButtonRoot2 = styled('span')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  
  font-weight: bold;
  font-size: 0.875rem;
  border: 0.2rem solid rgba(0, 0, 0, 0);
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  
  


  &:hover {
    
    color: white;
    border: 0.2rem solid #fff;
   
    box-shadow: 0 0 .2rem #fff,
    0 0 .2rem #fff,
    0 0 0.5rem #bc13fe,
    0 0 0.7rem #bc13fe,
    0 0 0.9rem #bc13fe,
    inset 0 0 0.8rem #bc13fe; 
    text-shadow:
    0 0 0.5px #fff,
    0 0 1px #fff,
    0 0 1.5px #fff,
    0 0 30px #5271ff,
    0 0 50px #5271ff,
    0 0 60px #5271ff,
    0 0 70px #5271ff,
    0 0 80px #5271ff;
}
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue2[700]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,);

function CustomButton2(props) {
  return (
  
  <CustomButtonRoot2  {...props} className={'insideActive'}  />
  
  )}

const useStyles = makeStyles(theme =>({
  activeList: {
    "&.active": {
      background:theme.palette.primary.main,
    }
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const darkTheme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      main: '#000',
    },
    light:{
      main:'#fff'
    }

  },
});



const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
  const { children,width,height, ...other } = props;
  
  return (
   
    <svg width={width} height={height} {...other} ref={ref}  >
      
      <polygon points={`0,${height} 0,0 ${width},0 ${width},${height}`} className="bg " />
      <polygon points={`0,${height} 0,0 ${width},0 ${width},${height}`} className="borderEffect" />
      <foreignObject x="0" y="0" width={width} height={height}>
        <div className="content">{children}</div>
      </foreignObject>
     
    </svg>
   
   
  );
});

ButtonRoot.propTypes = {
  
  children: PropTypes.node,
};

const blue = {
  50: '#fff0f0',
  100: '#ffc2c2',
  200: '#f39999',
  400: '#ff3333',
  500: '#ff0000',
  600: '#e50000',
  800: '#990000',
  900: '#750000',

};

const MyStyledButton = styled(Button)`

  color: white;
  &.${props => props.activeClassName} {
    color: red;
  }
`;

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }) => `
  overflow: visible;
  
  
  cursor: pointer;
  --main-color: ${theme.palette.mode === 'light' ? blue[600] : blue[100]};
  --text-color: ${'#002768'};
  --hover-color: ${theme.palette.mode === 'light' ? blue[50] : blue[900]};
  --active-color: ${theme.palette.mode === 'light' ? blue[100] : blue[800]};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
    
    
  }
  
  .activePage & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
    fill: var(--hover-color);
  }

  

  & .borderEffect {
    stroke: var(--text-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
    
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    

    .bg {
      fill: var(--hover-color) ;
      stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    
    }

    .borderEffect {
      stroke-dashoffset: -600;
    }
  }

  .activePage &,
  &.${buttonUnstyledClasses.focusVisible} {
    
    outline: 2px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    outline-offset: 2px;
  }

  &,
  &.${buttonUnstyledClasses} {
    
    outline: 2px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    outline-offset: 2px;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      
      line-height: 1.5;
      height: 100%;
      width:100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-color);
      text-transform: uppercase;
    }

    & .content div span {
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif !important;
      font-weight: bold;
    }

    & svg {
      margin: 0 5px;
    }
  }`,
);


const SvgButton = React.forwardRef(function SvgButton(props, ref) {
  console.log(props);
  return (
    <RouterLink exact aria-current="page"  ref={ref}  className={isActive=>isActive?"activePage":""} tabindex="0" to={props.to}>
<ButtonUnstyled  {...props} component={CustomButtonRoot}/>
</RouterLink>

  );
});

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      
      </MenuItem>
      
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={16} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const matches = useMediaQuery('(min-width:600px)');
  const [homeStyle, setHomeStyle] = useState(false);
  const classes = useStyles();

const ColorButton = styled(Button)(({ theme }) => ({
  
  color: theme.palette.getContrastText(red[500]),
 fontWeight: 'bold',
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));

  return (
    
<ThemeProvider 
theme={darkTheme.primary}
>

    <Box sx={{ display:'flex', overflow:'hidden' , }}>
    <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar position="relative" open={open} style={{ background: 'transparent', boxShadow: 'none'}}
        // color="dark"  
        // enableColorOnDark
        >
        
          <Toolbar sx={{maxWidth: 'xl', width:'100%', margin:'0 auto'}} >
            
            <Box
            sx={{flex:1, justifyContent:'left',display: { xs: 'flex', md: 'none' }}}>
           <IconButton
            
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{  ...(open && { display: 'none' }) }}
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            
            
            </Box>
            <Box sx={{flex:1, justifyContent:'left',display: { xs: 'none', md: 'flex' }}}>
            
              <IconButton size="large" aria-label="facebook" color="inherit">
              
                  <FacebookIcon />
                
              </IconButton>
              <IconButton size="large" aria-label="Twitter" color="inherit">
              
                  <InstagramIcon />
                
              </IconButton>
              <IconButton size="large" aria-label="Instagram" color="inherit">
              
              <TwitterIcon />
            
          </IconButton>
              </Box>
            <Box
             
              sx={{ flex: 1, textAlign:'center',margin:'10px'}}
            >
              {/* {
            matches?<img src={logo} alt="Logo" height="100" width="100"/>:<img src={logo} alt="Logo" height="70" width="70"/>

            } */}
              <h1 class="neonText">
              Prasanna  Tuladhar
              </h1>
            </Box>
            
          <Box  sx={{ flex:1, justifyContent:'right', display: { xs: 'none', md: 'flex' } }}>
            <Box>
            
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={16} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Badge badgeContent={16} color="error">
                <AccountCircle />
                </Badge>
              </IconButton>
              
              
  {/* <Link 
        component={RouterLink} to="/cart">
          
              <Badge badgeContent={2} color="primary"> */}
                {/* <ShoppingCartOutlined /> */}
              {/* </Badge>
          
            </Link> */}
            </Box>
            </Box>
            
            <Box sx={{ flex:1, justifyContent:'right',display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
           
          </Toolbar>
          {matches ?

          // Navigation bar

          <Toolbar 
          component="nav"
          variant="dense"
          sx={{ justifyContent: 'center', overflowX: 'auto', }}>
          
          <List sx={{marginLeft:'5px',marginRight:'5px',margin:'10px'}} >
              <RouterLink exact to="/"  style={{textDecoration:'none'}} className={isActive=>(isActive?'textActive':'')}>
                <CustomButton2 >HOME</CustomButton2>
              </RouterLink>
              
          </List>

          <List exact sx={{marginLeft:'5px',marginRight:'5px'}} >
          <RouterLink exact to="/products"  style={{textDecoration:'none'}} className={isActive=>(isActive?'textActive':'')}>
                <CustomButton2 >SHOP</CustomButton2>
              </RouterLink>
          </List>
          <List active sx={{textAlign:'center',marginLeft:'5px',marginRight:'5px'}}>
              <RouterLink exact to="/cart"  style={{textDecoration:'none'}} className={isActive=>(isActive?'textActive':'')}>
                <CustomButton2 >CONTACT US</CustomButton2>
              </RouterLink>
          </List>
          <List active sx={{textAlign:'center',marginLeft:'5px',marginRight:'5px'}}>
            <RouterLink exact to="/success"  style={{textDecoration:'none'}} className={isActive=>(isActive?'textActive':'')}>
                <CustomButton2 >ABOUT US</CustomButton2>
              </RouterLink>
          </List>
        

          {/* <Search  sx={{justifyContent:'right'}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search> */}
          
            </Toolbar>
            
            // Navigation bar end
            
            :null}
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <SwipeableDrawer
        sx={{
        
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top:10,
            left:9,
            bottom:10,
            // backgroundColor:'#4e1e1e',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
        <Divider />

        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}

        
        
        <List sx={{textAlign:'center'}} >
            <SvgButton    
                to="/"  width="200" height="50"> 
              <ListItemIcon>
                <InboxIcon sx={{flex:1}} />
              </ListItemIcon >
              <ListItemText primary={'Home'} />
            </SvgButton>
        </List>

        <List sx={{textAlign:'center'}} >
            <SvgButton     
                to="/products"  width="200" height="50"> 
              <ListItemIcon>
                <InboxIcon sx={{flex:1}} />
              </ListItemIcon >
              <ListItemText primary={'Shop'} />
            </SvgButton>
        </List>
        <List sx={{textAlign:'center'}} >
            <SvgButton     
                to="/cart"  width="200" height="50"> 
              <ListItemIcon>
                <InboxIcon sx={{flex:1}} />
              </ListItemIcon >
              <ListItemText primary={'Contact Us'} />
            </SvgButton>
        </List>
        <List sx={{textAlign:'center'}} >
            <SvgButton     
                to="/success"  width="200" height="50"> 
              <ListItemIcon>
                <InboxIcon sx={{flex:1}} />
              </ListItemIcon >
              <ListItemText primary={'About Us'} />
            </SvgButton>
        </List>
      </SwipeableDrawer>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  </ThemeProvider> 
  );
};


export default Navbar;
