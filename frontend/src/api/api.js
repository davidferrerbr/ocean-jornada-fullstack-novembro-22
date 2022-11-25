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
        create: function() {
            return this.endpoint() + "/";
        },
        delete: function(id) {
            return this.endpoint() + "/" + id; 
        },
    },

    // MONTAR AS REQUISIÇÕES
    // GET
    buildApiGetRequest: (url) => {
        return fetch(url, {
            method: "GET",
        });
    },

    //POST
    buildApiPostRequest: (url, body) => {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: new Headers({
                "Content-type": "application/json",
            })
        });
    },

    // GET
    buildApiDeleteRequest: (url) => {
        return fetch(url, {
            method: "DELETE",
        });
    },
};