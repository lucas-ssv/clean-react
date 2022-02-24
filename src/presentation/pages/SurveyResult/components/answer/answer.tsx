import { SurveyResultAnswerModel } from '@/domain/models'
import { SurveyResultContext } from '..'
import Styles from './answer-styles.scss'
import React, { MouseEvent, useContext } from 'react'

type Props = {
  answer: SurveyResultAnswerModel
}

export const Answer: React.FC<Props> = ({ answer }: Props) => {
  const { onAnswer } = useContext(SurveyResultContext)
  const activeClassName = answer.isCurrentAccountAnswer ? Styles.active : ''
  const answerClick = (event: MouseEvent): void => {
    if (event.currentTarget.classList.contains(Styles.active)) {
      return
    }
    onAnswer(answer.answer)
  }
  return (
    <li data-testid="answer-wrap" className={`${activeClassName} ${Styles.answerWrap}`} onClick={answerClick}>
      {answer.image && <img data-testid="image" src={answer.image} alt={answer.answer} />}
      <span data-testid="answer" className={Styles.answer}>{answer.answer}</span>
      <span data-testid="percent" className={Styles.percent}>{answer.percent}%</span>
    </li>
  )
}
