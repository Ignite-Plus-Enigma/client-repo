import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
      >
        Categories
      </Link>
      <Typography color="textPrimary">Children</Typography>
    </Breadcrumbs>
  );
}
