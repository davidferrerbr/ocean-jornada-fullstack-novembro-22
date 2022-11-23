export const Api = {
    baseUrl: "http://127.0.0.1:3000/",

    // ENDPOINTS DE ITENS
    itens:{
        endpoint: () => {
            return Api.baseUrl + "itens";
        },
        readAll: function () {
            return this.endpoint() + "/";
        },
    },

    // MONTAR AS REQUISIÇÕES
    // GET
    buildApiGetRequest: (url) => {
        return fetch(url, {
            method: "GET",
        });
    },
};