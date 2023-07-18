// src/mocks.js
// 1. Import the library.
import { setupWorker, rest } from 'msw'

// 2. Describe network behavior with request handlers.
const worker = setupWorker(
  rest.post('https://api.gorkemyagci.com/login', (req, res, ctx) => {
    const {email} = req.body
    return res(
      //ctx.delay(1500),
      ctx.status(200, 'Mocked status'),
      ctx.json({
        email: email,
      }),
    )
  }),
)

worker.start()