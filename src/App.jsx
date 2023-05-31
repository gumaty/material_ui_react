import NavBar from "./components/NavBar.jsx";
import {Container, CssBaseline, Grid} from "@mui/material";
import LeftBar from "./components/LeftBar.jsx";
import RightBar from "./components/RightBar.jsx";
import Feed from "./components/Feed.jsx";

const App = () => {
  return(
      <>
          <CssBaseline />
          <Container>
              <NavBar />
              <Grid container>
                  <Grid item sm={2}>
                      <LeftBar />
                  </Grid>
                  <Grid item sm={7}>
                      <Feed />
                  </Grid>
                  <Grid item sm={3}>
                      <RightBar />
                  </Grid>
              </Grid>
          </Container>
      </>
    );
};

export default App;