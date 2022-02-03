import { SurveyList } from '@/presentation/pages'
import React from 'react'
import { makeRemoteLoadSurveyList } from '../../usecases'

export const MakeSurveyList: React.FC = () => {
  return (
    <SurveyList loadSurveyList={makeRemoteLoadSurveyList()} />
  )
}
