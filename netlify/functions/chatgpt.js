const axios = require('axios')

const handler = async function (event) {
  const { input } = JSON.parse(event.body)

  if (input == null || input.length === 0) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Invalid Parameters' })
    }
  }

  const apiUrl = 'https://api.openai.com/v1/chat/completions'

  try {
    const context =
      'Write a poem in the style of William Blake. Make sure it is expressive and vivid. The poem should be about'

    /**
     * @type {AxiosResponse<ChatGPT.ICompletionResponse>}
     */
    const response = await axios.post(
      apiUrl,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `${context} ${input}`
          }
        ],
        temperature: 0.7,
        max_tokens: 4000
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    )

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          model: response.data.model,
          content: response.data.choices[0]?.message.content
        }
      })
    }
  } catch (e) {
    console.log(e)
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: e })
    }
  }
}

module.exports = { handler }
