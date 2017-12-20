// @flow

export default (error?: Object | string) => {
  if (error instanceof Error) {
    throw error
  }
  throw new Error(error)
}
