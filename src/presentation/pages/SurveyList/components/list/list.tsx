import { LoadSurveyList } from '@/domain/usecases'
import React from 'react'
import { SurveyItem, SurveyItemEmpty } from '..'
import Styles from './list-styles.scss'

type Props = {
  surveys: LoadSurveyList.Model[]
}

export const List: React.FC<Props> = ({ surveys }: Props) => {
  return (
    <ul className={Styles.listWrap} data-testid="survey-list">
      {surveys.length
        ? surveys.map((survey: LoadSurveyList.Model) => (
          <SurveyItem key={survey.id} survey={survey} />
        ))
        : (
          <SurveyItemEmpty />
          )
      }
    </ul>
  )
}
