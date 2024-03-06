import React from "react";
import { Menu, Layout } from "antd";
import axios from "axios";

const { Header } = Layout;
const { useState, useEffect } = React;
import "./../styles/LeagueHeader.css";

const LeagueHeader = ({ leagueId, setLeagueId }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/league_header/").then((res) => {
      setMenuItems(res.data);
      setLeagueId(res.data[0].key.toString());
    });
  }, []);

  return (
    <>
      {leagueId && (
        <Header className="menu-header">
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[leagueId]}
            onClick={(e) => setLeagueId(e.key)}
            items={menuItems}
            className="menu-menu"
          />
        </Header>
      )}
    </>
  );
};

export default LeagueHeader;
