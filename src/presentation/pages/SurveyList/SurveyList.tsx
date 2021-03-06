import { LoadSurveyList } from '@/domain/usecases'
import { Footer, Header, Error } from '@/presentation/components'
import { useErrorHandler } from '@/presentation/hooks'
import { List, surveyListState } from './components'
import Styles from './survey-list-styles.scss'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

type Props = {
  loadSurveyList?: LoadSurveyList
}

export const SurveyList: React.FC<Props> = ({ loadSurveyList }: Props) => {
  const handleError = useErrorHandler((error: Error) => {
    setState(old => ({ ...old, error: error.message }))
  })
  const [state, setState] = useRecoilState(surveyListState)

  const reload = (): void => {
    setState(old => ({
      surveys: [],
      error: '',
      reload: !old.reload
    }))
  }

  useEffect(() => {
    if (loadSurveyList) {
      loadSurveyList.loadAll()
        .then(surveys => setState(old => ({ ...old, surveys })))
        .catch(handleError)
    }
  }, [state.reload])

  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        {state.error ? <Error error={state.error} reload={reload} /> : <List surveys={state.surveys} />}
      </div>
      <Footer />
    </div>
  )
}
