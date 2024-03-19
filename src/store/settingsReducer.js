import {
    UPDATE_AGGREGATION_TYPE,
    UPDATE_AGGREGATION_COMPARISON,
    UPDATE_CCOMP_POSITION,
    UPDATE_CCOMP_TYPE,
    UPDATE_CCOMP_DATA_FIELD,
    UPDATE_COMPARISON,
    UPDATE_FLAT,
} from "./settingsConstants";

const defaultMenuState = {
    // aggregation
    aggregationType: "player",
    aggregationComparison: false,
    // cross comparison
    ccompPosition: "core",
    ccompType: "player",
    ccompTotalField: "total_gold",
    ccompWindowField: "l2",
    // comparison
    comparison: "player",
    flat: true,
    // bools
    is_basic: true,
    is_aggregation: false,
    is_comparison: false,
    is_ccomp: false,
};

export const settingsReducer = (state = defaultMenuState, action) => {
    switch (action.type) {
        case UPDATE_AGGREGATION_TYPE:
            return { ...state, aggregationType: action.payload };
        case UPDATE_AGGREGATION_COMPARISON:
            return {
                ...state,
                aggregationComparison: !state.aggregationComparison,
            };
        case UPDATE_CCOMP_POSITION:
            return { ...state, ccompPosition: action.payload };
        case UPDATE_CCOMP_TYPE:
            return { ...state, ccompType: action.payload };
        case UPDATE_CCOMP_DATA_FIELD:
            return { ...state, ccompTotalField: action.payload };
        case UPDATE_COMPARISON:
            return { ...state, comparison: action.payload };
        case UPDATE_FLAT:
            return { ...state, flat: !state.flat };
        default:
            return state;
    }
};
