import { LoadSurveyList } from '@/domain/usecases'
import { AccessDeniedError } from '@/domain/errors'
import { Footer, Header } from '@/presentation/components'
import { Error, List, SurveyContext } from './components'
import React, { useContext, useEffect, useState } from 'react'
import Styles from './survey-list-styles.scss'
import { useNavigate } from 'react-router-dom'
import { ApiContext } from '@/presentation/contexts/Api/api-context'

type Props = {
  loadSurveyList?: LoadSurveyList
}

export const SurveyList: React.FC<Props> = ({ loadSurveyList }: Props) => {
  const history = useNavigate()
  const { setCurrentAccount } = useContext(ApiContext)
  const [state, setState] = useState({
    surveys: [] as LoadSurveyList.Model[],
    error: '',
    reload: false
  })

  useEffect(() => {
    if (loadSurveyList) {
      loadSurveyList.loadAll()
        .then(surveys => setState({ ...state, surveys }))
        .catch(error => {
          if (error instanceof AccessDeniedError) {
            setCurrentAccount(undefined)
            history('/login')
          } else {
            setState({ ...state, error: error.message })
          }
        })
    }
  }, [state.reload])

  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <SurveyContext.Provider value={{ state, setState }}>
          {state.error ? <Error /> : <List />}
        </SurveyContext.Provider>

      </div>
      <Footer />
    </div>
  )
}
