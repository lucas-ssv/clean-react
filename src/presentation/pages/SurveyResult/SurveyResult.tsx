import { Footer, Header, Loading, Error } from '@/presentation/components'
import Styles from './survey-result-styles.scss'
import React, { useEffect } from 'react'
import { LoadSurveyResult, SaveSurveyResult } from '@/domain/usecases'
import { useErrorHandler } from '@/presentation/hooks'
import { Result, surveyResultState, onSurveyAnswerState } from './components'
import { useRecoilState, useSetRecoilState } from 'recoil'

type Props = {
  loadSurveyResult: LoadSurveyResult
  saveSurveyResult: SaveSurveyResult
}

export const SurveyResult: React.FC<Props> = ({ loadSurveyResult, saveSurveyResult }: Props) => {
  const handleError = useErrorHandler((error: Error) => {
    setState(old => ({ ...old, surveyResult: null, isLoading: false, error: error.message }))
  })
  const [state, setState] = useRecoilState(surveyResultState)

  useEffect(() => {
    setOnAnswer({ onAnswer })
  }, [])

  useEffect(() => {
    loadSurveyResult.load().then(surveyResult => {
      setState(old => ({ ...old, surveyResult }))
    }).catch(handleError)
  }, [state.reload])

  const setOnAnswer = useSetRecoilState(onSurveyAnswerState)
  const onAnswer = (answer: string): void => {
    if (!state.isLoading) {
      setState(old => ({ ...old, isLoading: true }))
      saveSurveyResult.save({ answer }).then(surveyResult => {
        setState(old => ({ ...old, isLoading: false, surveyResult }))
      }).catch(handleError)
    }
  }

  const reload = (): void => {
    setState(old => ({ isLoading: false, surveyResult: null, error: '', reload: !old.reload }))
  }

  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
      <div data-testid="survey-result" className={Styles.contentWrap}>
        {state.surveyResult && <Result surveyResult={state.surveyResult} />}
        {state.isLoading && <Loading />}
        {state.error && <Error error={state.error} reload={reload} />}
      </div>
      <Footer />
    </div>
  )
}
