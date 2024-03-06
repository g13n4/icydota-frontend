import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Col, Row } from "antd";
import { SheetComponent } from "@antv/s2-react";
import { setLang } from "@antv/s2";
import "@antv/s2-react/dist/style.min.css";
import { compact } from "lodash";

setLang("en_US");

const disableColor = "#d3d7d4";
const colors = [
    "#62BF7F",
    "#8ECB7D",
    "#A1D17F",
    "#C9DC81",
    "#FBDD80",
    "#FBB17B",
    "#FA8672",
    "#FB6A6D",
];

const defaultTableSettings = {
    interaction: {
        selectedCellsSpotlight: false,
        hoverHighlight: false,
    },
};

function getRange(data) {
    const values = data.map((d) => d.value);
    const compactValue = compact(values);

    return {
        min: Math.min(...compactValue),
        max: Math.max(...compactValue),
    };
}

function getIndex(fieldValue, rawData) {
    const { min, max } = getRange(rawData);
    const step = Math.floor((max - min) / (colors.length - 1));

    return Math.floor((fieldValue - min) / step);
}

const resize = (size, minValue, coef) => {
    return Math.max(Math.floor(size * coef), minValue);
};

const DataTable = ({ tableData, dataCategory }) => {
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
    };

    return (
        <>
            {tableData && windowSize.width && windowSize.height && (
                <SheetComponent
                    dataCfg={tableData}
                    options={{
                        ...tableOptions,
                        width: windowSize.width,
                        height: windowSize.height,
                    }}
                    sheetType="pivot"
                />
            )}
        </>
    );
};

export default DataTable;
