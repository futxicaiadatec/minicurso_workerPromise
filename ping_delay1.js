self.onmessage = e => {
  const timestamp = Date.now()
  while (Date.now() - timestamp < 5000);
  self.postMessage(e.data)
}
