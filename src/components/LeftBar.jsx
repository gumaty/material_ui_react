import {Container, List, ListItem, Typography} from "@mui/material";
import {Home} from "@mui/icons-material";

const LeftBar = () => {
    return(
        <Container sx={{padding: "75px"}}>
            <List>
                <ListItem>
                    <Home />
                    <Typography>Home</Typography>
                </ListItem>
                <ListItem>
                    <Home />
                    <Typography>Home</Typography>
                </ListItem>
                <ListItem>
                    <Home />
                    <Typography>Home</Typography>
                </ListItem>
                <ListItem>
                    <Home />
                    <Typography>Home</Typography>
                </ListItem>
                <ListItem>
                    <Home />
                    <Typography>Home</Typography>
                </ListItem>
            </List>
        </Container>);
};

export default LeftBar;