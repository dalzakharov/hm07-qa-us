# Sprint 7 project
# Urban Grocers API Testing

## Project Description

This project contains automated API tests for the Urban Grocers application. The tests verify HTTP response status codes and response bodies for GET, POST, PUT, and DELETE requests.

## Technologies and Techniques

- JavaScript
- Node.js
- Jest
- Fetch API
- JSON
- Asynchronous requests using `async/await`
- API response validation using Jest assertions

## API Documentation

The API endpoints and expected responses are based on the Urban Grocers apiDoc documentation, available at the `/docs/` path of the active API server.

## Test Files

- `getHandlers.test.js` — tests for retrieving the list of warehouses.
- `postHandlers.test.js` — tests for checking product availability in warehouses.
- `putHandlers.test.js` — tests for updating a product's price.
- `deleteHandlers.test.js` — tests for deleting kits.

Each file contains two tests: one checks the HTTP response status code, and the other checks the response body.

## How to Run the Tests

1. Install Node.js.
2. Open the project folder in a terminal.
3. Install dependencies:

   `npm install`

4. Set the active Urban Grocers server URL in `config.js`.
5. Run the tests:

   `npx jest`

On Windows PowerShell, if script execution is restricted, use:

`npx.cmd jest`

## Known Issues

During testing, unexpected behavior was observed in the `DELETE /api/v1/kits/:id` endpoint.

The API consistently returns HTTP status `200 OK` and the response body `{"ok": true}`, even when:

- The specified kit ID does not exist in the `kit_model` database table.
- The same kit ID is deleted repeatedly.
- Different IDs, including three-digit values, are used.

Additionally, deleting an existing kit did not appear to remove its record from the `kit_model` CSV resource.

This suggests a possible API defect: the endpoint reports successful deletion regardless of whether the kit exists or has actually been deleted.

The automated DELETE tests validate the documented HTTP status code and response body, as required by the project. They do not verify that the record was removed from the database.
