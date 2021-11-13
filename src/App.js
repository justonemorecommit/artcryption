import { Card, Container, Grid } from "@material-ui/core";

function App() {
  return (
    <Container>
      <Card>
        <Grid container fluid>
          <Grid item md={6}>
            <img src="/images/image.jpeg" />
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default App;
