import { makeRemoteLoadSurveyResult } from '../../usecases'
import { SurveyResult } from '@/presentation/pages'
import React from 'react'
import { useParams } from 'react-router-dom'
import { makeRemoteSaveSurveyResult } from '../../usecases/save-survey-result/remote-save-survey-result-factory'

export const MakeSurveyResult: React.FC = () => {
  const { id } = useParams()

  return (
    <SurveyResult
      loadSurveyResult={makeRemoteLoadSurveyResult(id)}
      saveSurveyResult={makeRemoteSaveSurveyResult(id)}
    />
  )
}
