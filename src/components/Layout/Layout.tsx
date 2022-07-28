import { Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import React from 'react';
import { observer } from 'mobx-react';
import Sidebar from './Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import { DRAWER_WIDTH } from '#/constants';
import { styled } from '@mui/material';

const Root = styled('div')({
  display: 'flex',
});

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Header = styled('header')(() => ({
  display: 'flex',
}));

const Content = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  maxWidth: '100%',
  overflowX: 'hidden',
}));

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

const Layout = (props: ContainerProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const Layout: FC = ( {children }) => {
  //   const [mobileOpen, setMobileOpen] = React.useState(false);
  //   const handleDrawerToggle = () => {
  //     setMobileOpen(!mobileOpen);
  //   };
  return (
    <Root>
      <StyledAppBar position="fixed">
        <Toolbar>
          <StyledIconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </StyledIconButton>
          <Typography variant="h6" noWrap>
            My App
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Header></Header>
      <Sidebar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <Content>
        <Toolbar />
        {props.children}
      </Content>
    </Root>
  );
};

export default observer(Layout);
