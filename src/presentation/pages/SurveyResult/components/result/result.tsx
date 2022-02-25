import { Calendar } from '@/presentation/components'
import Styles from './result-styles.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LoadSurveyResult } from '@/domain/usecases'
import { Answer } from '..'

type Props = {
  surveyResult: LoadSurveyResult.Model
}

export const Result: React.FC<Props> = ({ surveyResult }: Props) => {
  const history = useNavigate()

  return (
    <>
      <hgroup>
        <Calendar date={surveyResult.date} className={Styles.calendarWrap} />
        <h2 data-testid="question">{surveyResult.question}</h2>
      </hgroup>
      <ul data-testid="answers" className={Styles.answersList}>
        {surveyResult.answers.map(answer => <Answer key={answer.answer} answer={answer} />)}
      </ul>
      <button data-testid="back-button" className={Styles.button} onClick={() => history('/')}>Voltar</button>
    </>
  )
}
