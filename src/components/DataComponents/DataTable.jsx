import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Col, Row } from "antd";
import { SheetComponent } from "@antv/s2-react";
import { setLang } from "@antv/s2";
import "@antv/s2-react/dist/style.min.css";
import { compact, isEmpty } from "lodash";

setLang("en_US");

var darkTheme;
var colours;
if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    darkTheme = true;
    colours = [
        "#e27c7c",
        "#a86464",
        "#6d4b4b",
        "#503f3f",
        "#333333",
        "#3c4e4b",
        "#456661",
        "#466964",
        "#599e94",
        "#6cd4c5",
    ];
} else {
    darkTheme = false;
    colours = [
        "#115f9a",
        "#1984c5",
        "#22a7f0",
        "#48b5c4",
        "#76c68f",
        "#a6d75b",
        "#c9e52f",
        "#f4f100",
        "#e1a692",
        "#de6e56",
        "#c23728",
    ];
}
const nanColour = "#a4a7a5d6";

const defaultTableSettings = {
    interaction: {
        selectedCellsSpotlight: false,
        hoverHighlight: false,
    },
};

const getTargetColor = (name, value, min, max) => {
    if (Number.isNaN(Number(value))) {
        return nanColour;
    }
    if (min == max && value) {
        return colours[9];
    }

    const colourIndex = Math.floor(((value - min) / (max - min)) * 10);

    return colours[colourIndex];
};

const resize = (size, minValue, coef) => {
    return Math.floor(size * coef);
};

const DataTable = ({ tableData }) => {
    const [windowSize, setWindowSize] = useState({
        width: resize(window.innerWidth, 640, 0.85),
        height: resize(window.innerHeight, 480, 0.7),
    });

    // make canvas resize automatically
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize({
                width: resize(window.innerWidth, 640, 0.85),
                height: resize(window.innerHeight, 480, 0.7),
            });
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const tableOptions = {
        interaction: {
            selectedCellsSpotlight: false,
            hoverHighlight: false,
        },
        style: {
            layoutWidthType: "colAdaptive",
        },
        theme: "dark",
        conditions: {
            background: [
                ...tableData.table_values.map((item) => {
                    return {
                        field: item.col,
                        mapping(value) {
                            const cellColour = getTargetColor(
                                item.col,
                                value,
                                item.min,
                                item.max
                            );

                            return {
                                fill: cellColour,
                            };
                        },
                    };
                }),
            ],
        },
    };

    return (
        <>
            {tableData.table_data && windowSize.width && windowSize.height && (
                <SheetComponent
                    dataCfg={tableData.table_data}
                    options={{
                        ...tableOptions,
                        ...tableData.table_options,
                    }}
                    adaptive={{
                        width: true,
                        height: false,
                        getContainer: () =>
                            document.getElementById("container"),
                    }}
                    sheetType="pivot"
                    themeCfg={{
                        name: darkTheme ? "dark" : "colorful",
                    }}
                />
            )}
        </>
    );
};

export default DataTable;
