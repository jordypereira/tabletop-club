export interface Resource<T> {
  'data': Array<T>
  'links': {
    'next': string | null
    'previous': string | null
  }
  'meta': {
    'total': number
    'pages': number
    'page': number
  }
}
