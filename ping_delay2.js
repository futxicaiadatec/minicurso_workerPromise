self.onmessage = e => {
  setTimeout(() => {
    self.postMessage(e.data)
  }, 5000)
}
