// This test was used for development of the Netlify function
import { config } from 'dotenv'

// @ts-expect-error Netlify handler function
import { handler } from '../../netlify/functions/chatgpt'
import { IDecodedBody, IResponse } from 'ChatGPT'

config()

describe('Netlify tests', () => {
  test.skip('William delivers', async () => {
    const event = {
      body: JSON.stringify({
        input: 'Lilies, strawberries and the blue sky'
      })
    }
    const response: IResponse = await handler(event)

    expect(response).toHaveProperty('statusCode', 200)

    try {
      const body: IDecodedBody = JSON.parse(response.body)
      expect(body.data?.model).toContain('gpt-3.5-turbo')
      expect(body.data?.content.length).not.toStrictEqual(0)
    } catch (e) {
      console.error(e)
      expect(1).toEqual(2)
    }

  }, 20000)
})
