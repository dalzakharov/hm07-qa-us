// eslint-disable-next-line no-undef
const config = require('../config');

test('DELETE kit status should be 200', async () => {
    let actualStatus;

    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE'
        });

        actualStatus = response.status;
    } catch (error) {
        console.error(error);
    }

    expect(actualStatus).toBe(200);
});

test('DELETE kit response should contain ok true', async () => {
    let response;

    try {
        response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error(error);
    }

    const data = await response.json();

    expect(data.ok).toBe(true);
});