import "./App.css";
import React, { useEffect, useState } from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { getAverages } from "./services/averages";
import { Average, RequestParams } from "./common/types";

function App() {
  const [averages, setAverages] = useState<Average[]>([]);
  useEffect(() => {
    const data: RequestParams = {
      begin: "2019-01-01",
      end: "2019-02-11",
      product: "nitrogendioxide",
      country: "DE",
    };
    getAverages(data).then((averages) => {
      setAverages(averages);
    });
  }, []);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"> Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Dashboard averages={averages} />
      </Container>
    </div>
  );
}

export default App;
