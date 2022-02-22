import React from 'react'
import Styles from './item-styles.scss'
import { Calendar, Icon, IconName } from '@/presentation/components'
import { LoadSurveyList } from '@/domain/usecases'
import { Link } from 'react-router-dom'

type Props = {
  survey: LoadSurveyList.Model
}

export const SurveyItem: React.FC<Props> = ({ survey }: Props) => {
  const iconName = survey.didAnswer ? IconName.thumbUp : IconName.thumbDown

  return (
    <li className={Styles.surveyItemWrap}>
      <div className={Styles.surveyContent}>
        <Icon className={Styles.iconWrap} iconName={iconName} />
        <Calendar date={survey.date} className={Styles.calendarWrap} />
        <p data-testid="question">{survey.question}</p>
      </div>
      <footer>
        <Link data-testid="link" to={`/surveys/${survey.id}`}>Ver resultado</Link>
      </footer>
    </li>
  )
}
