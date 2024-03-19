import React, {useState, useEffect} from "react";
import { Menu, Layout } from "antd";
import axios from "axios";
const { Header } = Layout;
import "./../styles/LeagueHeader.css";
import { useDispatch, useSelector } from "react-redux"


const LeagueHeader = () => {
    const leagueMenu = useSelector(state => state.menu.leagueMenu)
    const leagueMenuDefault = useSelector(state => state.menu.leagueMenuDefault)
    console.log(leagueMenu, leagueMenuDefault)


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/league_header/").then((res) => {
            setMenuItems(res.data);
            setLeagueId(res.data[0].key.toString());
        });
    }, []);

    return (leagueMenuDefault &&
            <Header className="menu-header">
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={leagueMenuDefault}
                    onClick={(e) => setLeagueId(e.key)}
                    items={leagueMenu}
                    className="menu-menu"
                />
            </Header>
    );
};

export default LeagueHeader;
