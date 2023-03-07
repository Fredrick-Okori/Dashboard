
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Grid, Avatar } from '@mui/material';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// //import logo
import Logo from './img/total.png';
 import avatar from './img/placeholder.jpg'

 //import summary component
import Summary from './Summary';
 import Table from './Table'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, MenuList } from '@mui/material';

import {
  Add,
  CompareArrowsOutlined,
  DeleteOutlineOutlined,
  FolderSharedOutlined,
  HomeOutlined,
  Settings,
  SettingsApplicationsOutlined,
} from "@mui/icons-material";


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

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

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const data = [
    {
      name: "Dashboard",
      icon: <HomeOutlined />,
    },
    { name: "Add Data", icon: <Add /> },
    { name: "Create", icon: <CompareArrowsOutlined /> },
    { name: "System Logs", icon: < FolderSharedOutlined /> },
    { name: "Recycle Bin", icon: < DeleteOutlineOutlined /> },
    { name: "Settings", icon: <Settings /> },
  ];

  const getList = () => (
     <>
      {data.map((item, index) => (
        <ListItem button  key={index}>
           <ListItemIcon style={{color: 'red'}}>{item.icon}</ListItemIcon>
           <ListItemText primary={item.name} />
         </ListItem>
       ))}
    </>
   );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Grid position="fixed" open={open}>
         <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuList />
          </IconButton>
          <Typography variant="h6" component="div"  >         
        </Typography>
        <Divider />         
        </Toolbar>        
      </Grid>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader> */}
       <Grid style={{
           display: 'flex',
           marginLeft: '20px',
           flexDirection: 'column',
           align: 'center',
           gap: '1rem'
         }}>
           <Grid>
             <img src={Logo} width='120px' alt=""
               style={{ padding: '7px' }}
            />
          </Grid>
           <Grid style={{padding:'7px', align: 'center'}}>
             <Avatar
               style={{align:'center'}}
              src={avatar}
            />
            <Typography variant='' style={{align: 'center'}}>Systems Manager</Typography>
            <Typography variant="body2">ADMIN</Typography>
          </Grid>

         </Grid>

        <List>
          {getList()}
        </List>

      </Drawer>
      <Main open={open}>
        <Typography variant="h6" component="div"  >
          Welcome To The ToolBox
        </Typography>


        <Divider />


         <Summary/>
       <Grid style={{marginTop: '20px'}}>
        <Table/>
       </Grid>
      </Main>
    </Box>
  );
}