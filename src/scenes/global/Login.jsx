import React from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
  setIsLoginOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoginOpen = useSelector((state) => state.cart.isLoginOpen);

  const handleFormSubmit = () => {};

  return (
    <Box //OVERLAY
      display={isLoginOpen ? "block" : "none"}
      backgroundColor="rgba(0,0,0,0.4)"
      position="fixed"
      zIndex="10"
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      {/* MODAL */}
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h3">Sign In</Typography>
            <IconButton onClick={() => dispatch(setIsLoginOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>


          {/* LOGIN FORM */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={loginSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      type="text"
                      label="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      sx={{ gridColumn: "span 4", marginBottom: "15px" }}
                    />
                     <TextField
                      fullWidth
                      type="password"
                      label="Password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      error={!!touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                      sx={{ gridColumn: "span 4", marginBottom: "15px" }}
                    />
                  </form>
                )}
              </Formik>
            </FlexBox>
            <Button
              type="submit"
              sx={{
                backgroundColor: shades.primary[400],
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = [
  yup.object().shape({
    email: yup.string().required("required"),
    password: yup.string().required("required"),
  }),
];

export default Login;
