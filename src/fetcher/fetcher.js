function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new Error(response.statusText);
}

export function get(url) {
    // const token = localStorage.getItem('token');

    return fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    })
        .then((response) => checkStatus(response))
        .then((response) => response.json())
        .catch((error) => {
            return error;
        });
}

export function post(url, data) {
    // const token = localStorage.getItem('token');

    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data || {})
    })
        .then((response) => checkStatus(response))
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
}

export function postNoContent(url, data) {
    // const token = localStorage.getItem('token');

    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data || {})
    })
        .then((response) => checkStatus(response))
        .catch((error) => {
            return error;
        });
}

export function postNoContentNoAuth(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data || {})
    })
        .then((response) => checkStatus(response))
        .catch((error) => {
            throw error;
        });
}

export function patch(url, data) {
    // const token = localStorage.getItem('token');

    return fetch(url, {
        method: 'PATCH',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data || {})
    })
        .then((response) => checkStatus(response))
        .catch((error) => {
            return error;
        });
}


export function del(url) {

    return fetch(url, {
        method: 'DELETE',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    })
        .then((response) => checkStatus(response))
        .catch((error) => {
            return error;
        });
}