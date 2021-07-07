export default function handler(req, res) {
  const todos = [
    {
      id: '1',
      text: 'greeting',
      complete: false
    },
    {
      id: '2',
      text: 'greeting2',
      complete: false
    }
  ]
  res.status(200).json({ todos })
}
