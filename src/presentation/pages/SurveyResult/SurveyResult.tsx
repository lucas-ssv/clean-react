import { Footer, Header, Loading, Error } from '@/presentation/components'
import Styles from './survey-result-styles.scss'
import React, { useEffect, useState } from 'react'
import { LoadSurveyResult, SaveSurveyResult } from '@/domain/usecases'
import { useErrorHandler } from '@/presentation/hooks'
import { Result, SurveyResultContext } from './components'

type Props = {
  loadSurveyResult: LoadSurveyResult
  saveSurveyResult: SaveSurveyResult
}

export const SurveyResult: React.FC<Props> = ({ loadSurveyResult, saveSurveyResult }: Props) => {
  const handleError = useErrorHandler((error: Error) => {
    setState(old => ({ ...old, surveyResult: null, isLoading: false, error: error.message }))
  })
  const [state, setState] = useState({
    isLoading: false,
    error: '',
    surveyResult: null as LoadSurveyResult.Model,
    reload: false
  })

  useEffect(() => {
    loadSurveyResult.load().then(surveyResult => {
      setState(old => ({ ...old, surveyResult }))
    }).catch(handleError)
  }, [state.reload])

  const onAnswer = (answer: string): void => {
    setState(old => ({ ...old, isLoading: true }))
    saveSurveyResult.save({ answer }).then(surveyResult => {
      setState(old => ({ ...old, isLoading: false, surveyResult }))
    }).catch(handleError)
  }

  const reload = (): void => {
    setState(old => ({ isLoading: false, surveyResult: null, error: '', reload: !old.reload }))
  }

  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
      <SurveyResultContext.Provider value={{ onAnswer }}>
        <div data-testid="survey-result" className={Styles.contentWrap}>
          {state.surveyResult && <Result surveyResult={state.surveyResult} />}
          {state.isLoading && <Loading />}
          {state.error && <Error error={state.error} reload={reload} />}
        </div>
      </SurveyResultContext.Provider>
      <Footer />
    </div>
  )
}
