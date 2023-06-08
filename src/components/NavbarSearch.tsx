import {
  createStyles,
  Navbar,
  TextInput,
  Code,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ActionIcon,
  Tooltip,
  rem,
} from "@mantine/core";

import { Account } from "./layout/header/account";
import { Outlet, useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  navbar: {
    padding: 0,
    margin: 0,
    borderRight: 0,
    top: 0,
  },

  section: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    marginBottom: theme.spacing.md,

    "&:not(:last-of-type)": {
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },
  },

  searchCode: {
    fontWeight: 700,
    fontSize: rem(10),
    backgroundColor: "#283f84",
  },

  mainLinks: {
    paddingLeft: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingRight: `calc(${theme.spacing.md} - ${theme.spacing.xs})`,
    paddingBottom: theme.spacing.md,
  },

  mainLink: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: theme.fontSizes.xs,
    padding: `${rem(8)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: rem(20),
    height: rem(20),
    pointerEvents: "none",
  },

  collections: {
    paddingLeft: `calc(${theme.spacing.md} - ${rem(6)})`,
    paddingRight: `calc(${theme.spacing.md} - ${rem(6)})`,
    paddingBottom: theme.spacing.md,
  },

  collectionsHeader: {
    paddingLeft: `calc(${theme.spacing.md} + ${rem(2)})`,
    paddingRight: theme.spacing.md,
    marginBottom: rem(5),
  },

  collectionLink: {
    display: "block",
    padding: `${rem(8)} ${theme.spacing.xs}`,
    textDecoration: "none",
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.xs,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    lineHeight: 1,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },
}));

const links = [
  { label: "Home", path: "/app/Home" },
  { label: "Settings", path: "/app/settings" },
  { label: "Profile", path: "/app/Profile" },
  { label: "Messages", notifications: 4, path: "/app/Messages" },
  { label: "Sells", notifications: 1, path: "/login" },
];

const collections = [
  { label: "Electronics" },
  { label: "Clothing" },
  { label: "Cars" },
  { label: "Services" },
  { label: "Food" },
  { label: "Apartments" },
  { label: "Toys" },
  { label: "Animal Prodcuts" },
  { label: "Sport Products" },
];

export function NavbarSearch() {
  const { classes } = useStyles();

  const navigate = useNavigate();

  const mainLinks = links.map((link) => (
    <UnstyledButton
      key={link.label}
      className={classes.mainLink}
      onClick={() => navigate(link.path)}
    >
      <div className={classes.mainLinkInner}>
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const collectionLinks = collections.map((collection) => (
    <a
      href="/"
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }} />
      {collection.label}
    </a>
  ));

  return (
    <>
      <Navbar w="300px" p="md" className="classesnavbar">
        <Navbar.Section className={classes.section}>
          <Account />
        </Navbar.Section>

        <TextInput placeholder="Search" size="xs" mb="sm" />

        <Navbar.Section className={classes.section}>
          <div className={classes.mainLinks}>{mainLinks}</div>
        </Navbar.Section>

        <Navbar.Section className={classes.section}>
          <Group className={classes.collectionsHeader} position="apart">
            <Text size="xs" weight={500} color="dimmed">
              Collections
            </Text>
          </Group>
          <div className={classes.collections}>{collectionLinks}</div>
        </Navbar.Section>

        {/* <button onClick={() => app.auth().signOut()}>Sign Out</button> */}
      </Navbar>
      <Outlet />
    </>
  );
}
