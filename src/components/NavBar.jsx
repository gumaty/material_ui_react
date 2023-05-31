import {AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography} from "@mui/material";
import {Cancel, Mail, Search} from "@mui/icons-material";
import {useState} from "react";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return(
        <AppBar position="fixed">
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Typography variant="h5" component="h1">
                    LiKamCode
                </Typography>
                <Search sx={{display: { xs: open === true ? "none" : 'block', sm: 'none'}, cursor: "pointer"}} onClick={() => setOpen(true)}/>
                <Box sx={{display: { xs: open === true ? "flex" : "none", sm: 'flex'}, alignItems: "center", padding: "0 5px", width: open === true ? "70%" : "50%", backgroundColor: "#FFFFFF31", borderRadius: "5px"}}>
                    <Search />
                    <InputBase placeholder="Search..." sx={{ marginLeft: "5px", color: "white", width: "100%"}}/>
                    <Cancel sx={{display: { xs: open === true ? "block" : 'none', sm: 'none'}, cursor: "pointer"}} onClick={() => setOpen(false)}/>
                </Box>
                <Box sx={{display: open === true ? "none" : "flex", justifyContent: "flex-end", gap: "15px", alignItems: "center", width: "10%"}}>
                    <Badge badgeContent={4} color="secondary">
                        <Mail sx={{color: "white"}} />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_1280.jpg" />
                </Box>
            </Toolbar>
        </AppBar>);
};

export default NavBar;