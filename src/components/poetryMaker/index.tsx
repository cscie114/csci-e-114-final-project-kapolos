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
    return (<div>
      ...loading
    </div>)
  }

  if (isError) {
    return (<div>
      Something went wrong
    </div>)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.formArea}>
        <label>
          What should the poem be about?
          <textarea value={userInput} onChange={handleUserInputChange} />
        </label>
        <div className="buttonWrapper">
          <button onClick={handleClick}>Generate Poem</button>
        </div>
      </div>

      {data != null && (
        <div className={styles.result}>
          {data.content}
        </div>
      )}

    </div>
  )
}

export default PoetryMaker
