export const set = (state, payload) =>
  Object.assign(state, { ...state, ...payload })

export const toggle = property => state => (state[property] = !state[property])
