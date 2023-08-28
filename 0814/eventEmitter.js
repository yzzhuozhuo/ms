class EventEmitter {
  constructor () {
    this.eventList = {}
  }

  on = (funName, fun) => {
    if (!funName || !fun) return
    this.eventList[funName] = this.eventList[funName] || []
    this.eventList[funName].push(fun)
  }

  emit = (funName, arg) => {
    if (!funName) return
    this.eventList[funName]?.forEach(fun => {
      fun(arg)
    })
  }

  off = (funName) => {
    if (!funName) return
    delete this.eventList[funName]
  }

  once = (funName, fun) => {
    // const _this = this
    // function _fun (arg) {
    //   fun(arg)
    //   _this.off(funName)
    // }
    const _fun = (arg) => {
      fun(arg)
      this.off(funName)
    }
    this.on(funName, _fun)
  }
}

const eventEmitter = new EventEmitter()

function getName (name) {
  console.log('getName', name)
}

// eventEmitter.on('getName', getName)

// eventEmitter.off('getName')

// eventEmitter.emit('getName', 'yz')

eventEmitter.once('getName', getName)

// eventEmitter.once('getName', getName)

eventEmitter.emit('getName', 'yz')

eventEmitter.emit('getName', 'yz')



