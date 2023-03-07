import React, { Component } from "react";
import PropTypes from "prop-types";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { withStyles } from "@material-ui/core";

const styles = theme => ({});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSidebar: false
    };
  }

  handleSidebarOpen = () => {
    this.setState({ openSidebar: true }, () =>
      console.log("Main.js state is true.")
    );
  };

  handleSidebarClose = () => {
    this.setState({ openSidebar: false });
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <Topbar onSidebarOpen={this.handleSidebarOpen} />
        <Sidebar
          open={this.state.openSidebar}
          onOpen={this.handleSidebarOpen}
          onClose={this.handleSidebarClose}
        />
        <main>{children}</main>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.node
};

export default withStyles(styles)(Main);
