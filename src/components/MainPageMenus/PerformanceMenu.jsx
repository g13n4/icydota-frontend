import React from "react";
const { useState, useEffect } = React;
import { Layout, Menu, theme } from "antd";
import axios from "axios";
import { Col, Row } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const PerformanceMenu = ({ setDataCategory }) => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/menu_tc/").then((res) => {
            setMenuItems(res.data);
        });
    }, []);

    return (
        <Col>
            <Menu
                defaultSelectedKeys={["total"]}
                defaultOpenKeys={[]}
                mode={"vertical"}
                theme={"light"}
                items={menuItems}
                onClick={(item) =>
                    setDataCategory((prevState) => {
                        return {
                            ...prevState,
                            data_type: item.key,
                        };
                    })
                }
                style={{
                    overflow: "scroll",
                    maxHeight: "100%",
                    width: "100%",
                }}
            />
        </Col>
    );
};

export default PerformanceMenu;
