import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import ErrorBoundary from "./ErrorBoundary";
import { Paper, Autocomplete, Button, Card, CardActionArea, CardContent, Grid, TextField, Typography } from "@material-ui/core";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SendIcon from "@material-ui/icons/Send";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardImg1 from "../assets/img/car1.png";
import CardImg2 from "../assets/img/car2.png";
import CardImg3 from "../assets/img/car3.png";

const LOCATIONS_FROM = [{ label: "Лесная поляна 34, п.8" }, { label: "Эрмитаж" }];

const LOCATIONS_TO = [
  { label: "Березовая роща 146, п.14", year: 1972 },
  { label: "Лесная поляна 34, п.8", year: 1994 },
];

const PageMap = () => {
  let mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoidGltcmF3b3JrMTIzIiwiYSI6ImNraHhoZjB6ODAxMnQycnM3b2lvcWlwemYifQ.vsaprJd2gGI-DvkUfwxDeA";
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/timrawork123/ckhxhn8r30ukv19khb7ah55qr",
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="map" ref={mapRef} />
      <form className="car form container--left w--400">
        <Paper style={{ padding: "25px", marginBottom: "10px" }}>
          <Autocomplete
            options={LOCATIONS_FROM}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Откуда"
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: <FiberManualRecordIcon fontSize="small" />,
                }}
              />
            )}
            popupIcon={<ExpandMoreIcon />}
          />
          <Autocomplete
            options={LOCATIONS_TO}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Куда"
                variant="standard"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: <SendIcon fontSize="small" color="secondary" />,
                }}
              />
            )}
            popupIcon={<ExpandMoreIcon />}
          />
        </Paper>
        <Paper style={{ padding: "25px", marginTop: "-25px" }}>
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="body1">Стандарт</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Стоимость
                    </Typography>
                    <Typography variant="h6">150 ₽</Typography>
                    <img className="car__img" src={CardImg1} alt="" />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="body1">Стандарт</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Стоимость
                    </Typography>
                    <Typography variant="h6">150 ₽</Typography>
                    <img className="car__img" src={CardImg2} alt="" />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="body1">Стандарт</Typography>
                    <Typography variant="caption" color="textSecondary">
                      Стоимость
                    </Typography>
                    <Typography variant="h6">150 ₽</Typography>
                    <img className="car__img" src={CardImg3} alt="" />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Button>Заказать</Button>
        </Paper>
      </form>
    </ErrorBoundary>
  );
};

export default PageMap;
