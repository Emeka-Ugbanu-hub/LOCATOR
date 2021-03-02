import React,{useState} from "react";
import {
Paper,
MenuList,
MenuItem,
makeStyles,
Box,
Fab,
Grid,
Select,
FormControl,
Typography,
}from "@material-ui/core";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const useStyles = makeStyles(() => ({
    paper: {
      width: `${100}%`,
      height: `${100}vh`,
    },
    box: {
background:`#0e0e0e`,
height: `${25}vh`,
paddingLeft:`${2}em`,
    },
    select: {
background:`#fff`,
width:`${20}em`,
textAlign:`center`,
    },
  search: {
      display:`flex`,
      marginLeft:`${10}em`,
      marginTop:`${1}em`,
  }
  }));

const Main = (props) => {
    const classes = useStyles();
    const [age, setAge] = useState('');     

  const handleChange = (event) => {
    setAge(event.target.value);
  };
 
    return(
        <>
         <style>{"body {background-color: #ffd80c; overflow:hidden;}"}</style>
         <Grid container>
         <Grid item xs={3}>
         <Paper className={classes.paper} >
             <Box className={classes.box}>
<Fab>  <input type="file"  accept="image/*" name="image" id="file" style={{opacity:"0",cursor:`pointer`}}></input> </Fab>
<Fab size="small" style={{width:`${6}px`,height:`${0.5}px`,background:`red`}}></Fab>
             </Box>
        <MenuList>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper>
      </Grid>
      <Grid item xs={9}>
<Box className={classes.search}> 
    <Typography>Nearest:</Typography>
    <FormControl >
        <Select
          className={classes.select}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Pizza Joint</MenuItem>
          <MenuItem value={20}>Hotel</MenuItem>
          <MenuItem value={30}>Small Chop Joint</MenuItem>
          <MenuItem value={40}>Burger Joint</MenuItem>
          <MenuItem value={50}>Hair Salon</MenuItem>
        </Select>
      </FormControl>
    <Typography>To me</Typography>
</Box>

<Map google={props.google} zoom={14}>
 
 
</Map>
      </Grid>
      </Grid>
        </>
    )
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCkggqAD3Elzjr1uHMcoZLwC-_SXMTfOaE")
  })(Main)