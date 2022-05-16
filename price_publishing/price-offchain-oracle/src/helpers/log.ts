import dateHelpers from './date'

const log = (name: string, value: any) => console.log(`${dateHelpers.currentDateTime()} ${name}`, value)

const warn = (name: string, args) => console.log(`${dateHelpers.currentDateTime()} ${name}`, ...args)

export default {
  log,
  warn
}
