import { LoadSurveyList } from '@/domain/usecases'
import React, { useContext } from 'react'
import { SurveyContext, SurveyItem, SurveyItemEmpty } from '..'
import Styles from './list-styles.scss'

export const List: React.FC = () => {
  const { state } = useContext(SurveyContext)

  return (
    <ul className={Styles.listWrap} data-testid="survey-list">
      {state.surveys.length
        ? state.surveys.map((survey: LoadSurveyList.Model) => (
          <SurveyItem key={survey.id} survey={survey} />
        ))
        : (
          <SurveyItemEmpty />
          )
      }
    </ul>
  )
}
