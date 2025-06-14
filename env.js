function getValue(value, { type = String, required = false, validate = () => true } = {}) {
  let result = value || undefined

  if (!result && required)
    throw new Error('Env variable is required!')

  if (result && type === Boolean)
    result = [true, '1', 'true', 'True'].includes(result)
  else if (result && type === Number)
    result = Number.parseFloat(result)
  else if (result && type === Array)
    result = result.split(',')

  const validated = validate(result)
  if (!validated)
    throw new Error(`Env value ${name} is not valid!`)

  return result
}

export default function (env) {
  return {
    PORT: getValue(env.PORT),
    HOST: getValue(env.HOST),
  }
}
