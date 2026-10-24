// eslint-disable-next-line no-undef
const config = require('../config');

test('PUT product price status should be 200', async () => {
    let actualStatus;

    try {
        const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                price: 175
            })
        });

        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }

    expect(actualStatus).toBe(200);
});

test('PUT product price response should contain ok true', async () => {
    let response;

    try {
        response = await fetch(`${config.API_URL}/api/v1/products/7`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                price: 175
            })
        });
    } catch (error) {
        console.error(error);
    }

    const data = await response.json();

    expect(data.ok).toBe(true);
});