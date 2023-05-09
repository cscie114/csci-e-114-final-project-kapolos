declare module 'ChatGPT' {
  interface IEvent {
    body: {
      input: string
    }
  }

  export interface ICompletionResponse {
    id: string
    object: string
    created: number
    model: string
    usage: {
      prompt_tokens: number
      completion_tokens: number
      total_tokens: number
    }
    choices: Array<{
      message: {
        role: string
        content: string
      }
    }>
  }

  export interface IResponse {
    statusCode: number
    body: string
  }

  export interface IDecodedBody {
    data?: {
      model: number
      content: string
    }
    msg?: string
  }
}
