import React from "react";
import {
  Button,
  Container,
  Paper,
  makeStyles,
  Grid,
  Typography,
  Fab,
  TextField,
 // InputAdornment,
  //IconButton
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";


const useStyles = makeStyles(() => ({
  paper: {
    width: `${80}%`,
    height: `${85}vh`,
    background: `#fff`,
    marginTop: `${2}em`,
    marginLeft: `${8}em`,
  },
  sign: {
    background: `#fff`,
    width: `${125}%`,
    height: `${85}vh`,
    marginLeft: `${-6.5}em`,
    paddingTop: `${2}em`,
  },
  login: {
    background: `red`,
    width: `${80}%`,
    height: `${85}vh`,
    padding: `${9}em ${4}em ${0}em ${4}em`,
  },
  fab: {
    marginLeft: `${1}em`,
    background: `#fff`,
  },
  signUp: {
    width: `${80}%`,
    height: `${80}vh`,
  },
  input: {
    marginTop: `${2}em`,
  },
}));

const SignupSchema = Yup.object().shape({
  email: Yup.string().email(`please input a valid email`).required("Required field"),
  name:Yup.string().required("Required field"),
  password:Yup.string().required("Required field"),
 
});
const Form = () => {
  const classes = useStyles();
  return (
    <>
      <style>{"body {background-color: #ffd80c; overflow:hidden;}"}</style>
      <Container>
        <Paper className={classes.paper} elevation={10}>
          <Grid container>
            <Grid item xs={6}>
              <Paper className={classes.login}>
                <Typography
                  style={{ color: `#fff`, fontFamily: `cursive` }}
                  variant="h5"
                  align="center"
                >
                  Welcome Back!
                </Typography>
                <Typography
                  style={{ color: `#fff`, fontFamily: `cursive` }}
                  align="center"
                >
                  To keep connected with us please login with your personal info
                </Typography>
                <Button
                  variant="outlined"
                  style={{
                    color: `#fff`,
                    border: `${2}px solid #fff`,
                    borderRadius: `${3}em`,
                    height: `${3}em`,
                    width: `${45}%`,
                    display: `block`,
                    marginLeft: `${2}em`,
                    marginTop: `${2}em`,
                  }}
                >
                  SIGN IN
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.sign}>
                <Container className={classes.signUp} maxWidth="sm">
                  <Typography
                    variant="h4"
                    align="center"
                    style={{ color: `red`, fontFamily: `cursive` }}
                  >
                    Create Account
                  </Typography>
                  <Fab size="small" className={classes.fab}>
                    f
                  </Fab>
                  <Fab size="small" className={classes.fab}>
                    G+
                  </Fab>
                  <Fab size="small" className={classes.fab}>
                    in
                  </Fab>
                  <Typography></Typography>
                  <Formik
                  enableReinitialize
                    initialValues={{
                      name: "",
                      email: "",
                      password: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(Values) => window.location.replace("locator")}
                  >
                    {({ handleSubmit, handleChange, errors }) => (
                    
                        <form onSubmit={handleSubmit}>
                          <TextField
                            type="text"
                            name={"name"}
                            variant="filled"
                            placeholder="Name"
                            fullWidth={true}
                            className={classes.input}
                            onChange={handleChange}
                              error={errors.name}
                            helperText={errors.name}
                          />
                          <TextField
                            name="email"
                            id="email"
                            type="email"
                            variant="filled"
                            placeholder="Email"
                            fullWidth={true}
                            className={classes.input}
                            onChange={handleChange}
                            error={errors.email}
                            helperText={errors.email}
                          />
                            {console.log(errors)}
                          <TextField
                            type="password"
                            name={"password"}
                            variant="filled"
                            placeholder="Password"
                            fullWidth={true}
                            className={classes.input}
                            onChange={handleChange}
                            error={errors.password}
                            helperText={errors.password}
                          //  InputProps={{endAdornment:(<InputAdornment onClick={handleClick} position="end">
                           //   <IconButton>{visible ?   : }</IconButton>
                           // </InputAdornment>),}}
                          />
                          <Button
                            style={{
                              color: `#fff`,
                              background: `red`,
                              borderRadius: `${3}em`,
                              height: `${3}em`,
                              width: `${25}%`,
                              display: `block`,
                              marginLeft: `${8}em`,
                              marginTop: `${1}em`,
                            }}
                            type="submit"
                          >
                            SIGN UP
                          </Button>
                        </form>
                      )}
                  </Formik>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Form;
