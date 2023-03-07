import React, { Component } from "react";
import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  withStyles
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import PropTypes from "prop-types";

const styles = theme => ({
  flexGrow: {
    flexGrow: 1
  },
  nav__link_decoration: {
    textDecoration: "none"
  },
  nav__title_color: {
    color: theme.palette.white,
    "&:hover": {
      color: "#adadad"
    }
  }
});

class Topbar extends Component {
  render() {
    const { classes, onSidebarOpen, ...rest } = this.props;
    return (
      <AppBar {...rest} className={classes.root}>
        <Container>
          <Toolbar>
            <RouterLink to="/" className={classes.nav__link_decoration}>
              <Typography variant="h2" className={classes.nav__title_color}>
                Martins Webshop
              </Typography>
            </RouterLink>
            <div className={classes.flexGrow} />
            <Hidden mdDown>
              <IconButton color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </Hidden>
            <Hidden lgUp>
              <IconButton color="inherit" onClick={onSidebarOpen}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default withStyles(styles)(Topbar);
