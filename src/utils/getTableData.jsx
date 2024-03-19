import React, { useRef } from "react";
import axios from "axios";

const getLink = ({ dataCategory, leagueId }) => {
    const base = "http://127.0.0.1:8000";

    if (dataCategory.is_cross_comparison) {
        const dc = "performance_cross_comparison";

        return `${base}/${dc}/${leagueId}/${dataCategory.cross_comparison_type}/${dataCategory.cross_comparison_position}/`;
    } else if (dataCategory.is_aggregation) {
        const dc = "performance_aggregated_data";

        return `${base}/${dc}/${leagueId}/${dataCategory.aggregation_type}/`;
    } else if (dataCategory.is_basic) {
        const dc = "performance_data";

        return `${base}/${dc}/${dataCategory.match_id}/`;
    }
};

const getParams = ({ dataCategory }) => {
    const comparison = {};
    if (!dataCategory.is_cross_comparison & dataCategory.is_comparison) {
        comparison.comparison = dataCategory.comparison;
        comparison.flat = dataCategory.flat;
    }

    if (dataCategory.is_cross_comparison) {
        return {
            params: {
                data_field: dataCategory.cross_data_field,
                data_type: dataCategory.performance_submenu,
                flat: dataCategory.flat,
            },
        };
    } else if (dataCategory.is_aggregation) {
        return {
            params: {
                ...comparison,
                data_type: dataCategory.performance_submenu,
                game_stage: dataCategory.game_stage,
                comparison: dataCategory.is_comparison ? "general" : "none",
            },
        };
    } else if (dataCategory.is_basic) {
        return {
            params: {
                data_type: dataCategory.performance_submenu,
                game_stage: dataCategory.game_stage,
                ...comparison,
            },
        };
    }
};

const getTableData = ({ dataCategory, setMenuData, leagueId }) => {
    const link = getLink({ dataCategory, leagueId });
    const params = getParams({ dataCategory });

    axios.get(link, params).then((res) => {
        setMenuData(res.data);
    });
};

export default getTableData;
