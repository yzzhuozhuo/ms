 class Emitter {
  constructor() {
    this.eventLists = new Map()
  }

  on = (eventName, fn) => {
    if (!eventName || !fn) return
    const eventFnList = this.eventLists.get(eventName) || []
    this.eventLists.set(eventName, eventFnList.concat(fn))
  }

  emit = (eventName, res) => {
    if (!eventName) return
    this.eventLists.get(eventName)?.forEach(fn => fn(res))
  }

  off = (eventName, fn) => {
    this.eventLists.delete(eventName)
    fn?.(res)
  }

  once = (eventName, fn) => {
    this.on(eventName, (res) => {
      fn(res)
      this.off(eventName)
    })
  }
 }

 const emitter = new Emitter()
//  emitter.on('getName', (res) => {
//   console.log('getName', res)
//  })


//  emitter.on('getName', (res) => {
//   console.log('getName1', res)
//  })

//  emitter.emit('getName', {
//   name: 'yz'
//  })


//  emitter.off('getName')

//  emitter.emit('getName', {
//   name: 'yz'
//  })

//  emitter.once('getName', (res) => {
//   console.log('getName once', res)
//  })

//  emitter.emit('getName', {
//   name: 'yz'
//  })

//  emitter.emit('getName', {
//   name: 'yz'
//  })