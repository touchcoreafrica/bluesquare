"use client";

import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const HeaderWithSubmenus = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "submenu-popper" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover for Menu
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
        <Paper>
          <MenuList>
            <MenuItem>
              <Typography>Menu Item 1</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>Menu Item 2</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>Menu Item 3</Typography>
            </MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    </div>
  );
};

export default HeaderWithSubmenus;
