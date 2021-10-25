import * as React from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Hidden } from "@mui/material";
import Logo from "../../assets/images/SwingScalp-01 2.png";
import Mobilemenu from "./Mobilemenu";
import Fab from "@mui/material/Fab";
import { AppBar, AppBarSection, AppBarSpacer, Avatar } from "@progress/kendo-react-layout";

import { Context as AuthContext } from "../../context/AuthContext";

import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
let kendokaAvatar = "https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png";
export default function ButtonAppBar() {
  const history = useHistory();
  const goToPage = React.useCallback((page) => history.push(`/${page}`), [history]);

  const { logout } = React.useContext(AuthContext);
  return (
    <>
      <AppBar>
        <AppBarSection>
          <button className="k-button k-button-clear">
            <span className="k-icon k-i-menu" />
          </button>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 4,
          }}
        />

        <AppBarSection>
          <a href="/">
            <img src={Logo} width="90px" height="80px" />
          </a>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 32,
          }}
        />

        <AppBarSection>
          <ul style={{ fontSize: "16px" }}>
            <li>
              <Button color="inherit" href="/dashboard">
                DASHBOARD
              </Button>
            </li>
            <li>
              <Button color="inherit" href="/journal">
                JOURNAL
              </Button>
            </li>
            <li>
              <Button color="inherit" href="/watchlist">
                WATCHLIST
              </Button>
            </li>

            <li>
              <Button color="inherit" href="/trade">
                TRADE STREAMS
              </Button>
            </li>
          </ul>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection>
          <Button size="medium" color="primary" onClick={() => logout().then(() => goToPage(""))}>
            Logout
          </Button>
        </AppBarSection>
      </AppBar>
      <style>{`
                              .title {
                    font-size: 18px;
                    margin: 0;
                }

                ul {
                    font-size: 14px;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }
                li {
                    margin: 0 10px;
                }
                li:hover {
                    cursor: pointer;
                    color: #84cef1;
                }
                .k-button {
                    padding: 0;
                }
                .k-badge-container {
                    margin-right: 8px;
                }

                
            `}</style>
    </>
  );
}
