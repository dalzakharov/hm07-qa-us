// eslint-disable-next-line no-undef
const config = require('../config');

test('GET warehouses status should be 200', async () => {
    let actualStatus;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(actualStatus).toBe(200);
});

test('GET warehouses should return 4 warehouses', async () => {
    let response;
    try {
        response = await fetch(`${config.API_URL}/api/v1/warehouses`);
    } catch (error) {
        console.error(error);
    }
    const data = await response.json();
    expect(data.length).toBe(4);
});