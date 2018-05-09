self.onmessage = e => setTimeout(() => {
  self.postMessage(e.data)
}, Math.random() * 5000)
