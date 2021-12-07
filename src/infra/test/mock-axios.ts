import axios, { AxiosResponse } from 'axios'
import faker from 'faker'

export const mockHttpResponse = (): Omit<AxiosResponse<any>, 'config' | 'headers' | 'statusText'> => ({
  data: faker.random.objectElement(),
  status: faker.datatype.number()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue(mockHttpResponse)

  return mockedAxios
}
