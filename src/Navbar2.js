import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink, useLocation } from 'react-router-dom'; // useLocation to detect route
import { Link as ScrollLink } from 'react-scroll'; // For section scrolling

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Skill', 'Experience', 'Contact'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation(); // Get current route
  const isContactPage = location.pathname === "/contact"; // Check if user is on Contact page

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#F5EFE7', cursor: 'pointer' }}>
        <RouterLink to="/" style={{ textDecoration: 'none', color: '#F5EFE7' }}>
          Tushar..
        </RouterLink>
      </Typography>
      <Divider />
      {!isContactPage && ( // Hide nav items in mobile drawer on Contact page
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              {item === 'Contact' ? (
                <ListItemButton component={RouterLink} to="/contact" sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              ) : (
                <ListItemButton
                  component={ScrollLink}
                  to={item.toLowerCase()}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  sx={{ textAlign: 'center' }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: '#F5EFE7',
          position: 'relative',
        }}
      >
        <Toolbar sx={{ justifyContent: { xs: "center", sm: "space-between", md: "space-between" } }}>
          {/* Logo always visible */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: { xs: "center", sm: "left", md: "left" },
              color: '#F5EFE7',
            }}
          >
            <RouterLink to="/" style={{ textDecoration: 'none', color: '#F5EFE7' }}>
              Tushar..
            </RouterLink>
          </Typography>

          {/* Show menu icon only if not on Contact page */}
          {!isContactPage && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Show navigation items only if not on Contact page */}
          {!isContactPage && (
            <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' }, gap: 2 }}>
              {navItems.map((item) => (
                item !== "Contact" && ( // Skip "Contact" link here
                  <Button
                    key={item}
                    component={item === "Contact" ? RouterLink : ScrollLink}
                    to={item === "Contact" ? "/contact" : item.toLowerCase()}
                    smooth={item !== "Contact"}
                    offset={-64}
                    duration={500}
                    sx={{ color: '#F5EFE7', fontSize: { sm: '0.9rem', md: '1rem' } }}
                  >
                    {item}
                  </Button>
                )
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Hide drawer completely on Contact page */}
      {!isContactPage && (
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', sm: 'block', md: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      )}
    </Box>
  );
}
