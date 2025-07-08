// js/history.js
export const History = {
    historyData: [],

    add: (expression, result) => {
        History.historyData.push({ expression, result });
    },

    getAll: () => {
        return History.historyData;
    },

    clear: () => {
        History.historyData = [];
    }
};
