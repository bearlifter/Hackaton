import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(900),
    backgroundSize: "cover",
    backgroundImage: "url(undraw_secure_login_pdn4 (2))",
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: rem(900),
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/app/home");
  };

  const { classes } = useStyles();
  return (
    <div className="mainlogin">
      <div className="leftpage">
        <div className={classes.wrapper}>
          <Paper className={classes.form} radius={0} p={30}>
            <Title
              order={2}
              className={classes.title}
              ta="center"
              mt="md"
              mb={50}
            >
              Welcome back to SHOPAZON!
            </Title>

            <TextInput
              label="Email address"
              placeholder="hello@gmail.com"
              size="md"
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
            />
            <Checkbox label="Keep me logged in" mt="xl" size="md" />
            <Button onClick={navigateToHome} fullWidth mt="xl" size="md">
              Login
            </Button>

            <Text ta="center" mt="md">
              Don't have an account?{" "}
              <Anchor<"a">
                href="#"
                weight={700}
                onClick={(event) => event.preventDefault()}
              >
                Register
              </Anchor>
            </Text>
          </Paper>
        </div>
      </div>
      <div className="rightpage"></div>
    </div>
  );
}
