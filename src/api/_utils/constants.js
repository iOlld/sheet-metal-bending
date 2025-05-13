export const baseConstants = {
  options() {
    const result = []
    for (const key in this) {
      if (typeof this[key] !== 'function')
        result.push(this[key])
    }
    return result
  },

  find(value) {
    let obj = null
    for (const key in this) {
      if (this[key] && this[key].value === value)
        obj = this[key]
    }
    if (obj)
      return obj
    return null
  },
}
