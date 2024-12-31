# Unhandled 'data' event crash in Node.js HTTP server

This repository demonstrates a common error in Node.js HTTP servers: crashing due to unhandled large request payloads.  The `bug.js` file shows the problematic code.  The solution, in `bugSolution.js`, addresses this by implementing proper request body size handling using the `maxBodySize` option or a custom parser that prevents large payloads from overwhelming the server.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Send a large POST request to `http://localhost:3000` (e.g., using `curl` or a tool like Postman).
4. Observe the server crashing.

## Solution

The `bugSolution.js` file shows how to prevent this crash, either using the `maxBodySize` option or by manually processing the request data in chunks.