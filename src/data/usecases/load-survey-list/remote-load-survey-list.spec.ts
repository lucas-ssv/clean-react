import { HttpGetClientMock } from '@/data/test'
import { RemoteLoadSurveyList } from './remote-load-survey-list'
import faker from 'faker'

type SutTypes = {
  sut: RemoteLoadSurveyList
  httpGetClientMock: HttpGetClientMock
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientMock = new HttpGetClientMock()
  const sut = new RemoteLoadSurveyList(url, httpGetClientMock)
  return {
    sut,
    httpGetClientMock
  }
}

describe('RemoteLoadSurveyList', () => {
  test('Should call HttpGetClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientMock } = makeSut(url)
    await sut.loadAll()
    expect(httpGetClientMock.url).toBe(url)
  })
})
