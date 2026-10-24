// eslint-disable-next-line no-undef
const config = require('../config');

test('POST warehouses check status should be 200', async () => {
    let actualStatus;

    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                products: [
                    { id: 5, quantity: 1 },
                    { id: 4, quantity: 5 }
                ]
            })
        });

        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }

    expect(actualStatus).toBe(200);
});

test('POST warehouses check response contains warehouse data', async () => {
    let response;

    try {
        response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                products: [
                    { id: 5, quantity: 1 },
                    { id: 4, quantity: 5 }
                ]
            })
        });
    } catch (error) {
        console.error(error);
    }

    const data = await response.json();

    expect(data).toHaveProperty('Everything You Need');
});