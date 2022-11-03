
enum LoggerLevel {
    Debug = 1,
    Info,
    Warn,
    Error,
}

const loggerLevel = process.env.NODE_ENV == "development" ? LoggerLevel.Debug : LoggerLevel.Info

class Logger {
  static debug(...args: any[]) {
    if (loggerLevel <= LoggerLevel.Debug) {
        console.debug.apply(console, args)
    }
  }

  static info(...args: any[]) {
    if (loggerLevel <= LoggerLevel.Info) {
        console.info.apply(console, args)
    }
  }

  static warn(...args: any[]) {
    if (loggerLevel <= LoggerLevel.Warn) {
        console.warn.apply(console, args)
    }
  }

  static error(...args: any[]) {
    if (loggerLevel <= LoggerLevel.Error) {
        console.error.apply(console, args)
    }
  }
}

export default Logger