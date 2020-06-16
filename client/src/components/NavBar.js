import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/departments">
      <Menu.Item>
        Departments
      </Menu.Item>
    </Link>
  </Menu>
)

export default Navbar;
