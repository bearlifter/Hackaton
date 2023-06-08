import { useApi, useAccount } from "@gear-js/react-hooks";
import { Header, Footer, ApiLoader } from "components";
import { withProviders } from "hocs";
import { Button, Container, Grid, Group, MantineProvider } from "@mantine/core";
import { NavbarSearch } from "components/NavbarSearch";
import { CarouselCard } from "components/CarouselCard";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "pages/home";
import Settings from "pages/settings/Settings";
import Profile from "pages/Profile/Profile";
import Messages from "pages/Messages/Messages";
import Login from "pages/Login/Login";

function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  const isAppReady = isApiReady && isAccountReady;

  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/app" element={<NavbarSearch />}>
              <Route path="/app/home" element={<Home />} />
              <Route path="settings" element={<Settings />} />
              <Route
                path="Profile"
                element={
                  <Profile
                    avatar="..\src\assets\images\socials\PFP.jpeg"
                    name="Axel Caldera"
                    title="Software Engineer"
                    phone="+52 646 179 1099"
                    email="axelmoises4@gmail.com"
                  />
                }
              />
              <Route path="Messages" element={<Messages />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export const App = withProviders(Component);
