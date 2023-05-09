import React, { ChangeEvent, FC, useState } from 'react'

import type { Maybe, Perhaps } from '../../types'

import * as styles from './index.module.css'

interface IResult {
  model: string
  content: string
}

interface IAPIResponse {
  data: IResult
}

const PoetryMaker: FC<Record<string, never>> = () => {
  const [data, setData] = useState<Maybe<IResult>>(undefined)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isError, setError] = useState<boolean>(false)
  const [userInput, setUserInput] = useState<string>('')

  const fetchGPTPoem = async (input: string): Promise<Perhaps<IResult>> => {
    if (input.length === 0) {
      alert('Please type something for the poor AI to work with.')
      return
    }

    try {
      const res = await fetch('/.netlify/functions/chatgpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input })
      })

      const response = await res.json() as IAPIResponse

      return response.data
    } catch (e) {
      console.warn(e)

      return null
    }
  }

  const handleUserInputChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setUserInput(event.target.value)
  }

  const handleClick = (): void => {
    console.log(userInput)
    setLoading(true)
    void fetchGPTPoem(userInput).then(data => {
      if (data === null) {
        setError(true)

        return
      }

      setData(data)
      setLoading(false)
    })
  }

  if (isLoading) {
    return (<div className={styles.loading}>
      ...loading - it will take a moment or two...
    </div>)
  }

  if (isError) {
    return (<div className={styles.error}>
      Something went wrong - ChatGPT did not respond properly.
    </div>)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.formArea}>
        <label>
          What should the poem be about?
        </label>

        <aside>
          <p>Give BlakeAI a hint about what you want it to ponder upon.</p>
          <p>No ideas? How about "Lilies, strawberries and the blue sky" ?</p>
        </aside>

        <textarea
          value={userInput}
          onChange={handleUserInputChange}
          placeholder="Lilies, strawberries and the blue sky"/>

        <div className={styles.buttonWrapper}>
          <button onClick={handleClick}>Generate Poem</button>
        </div>
      </div>

      {data != null && (
        <div className={styles.poem}>
          {data.content}
        </div>
      )}

    </div>
  )
}

export default PoetryMaker
