module.exports.all = (req,res) => {
  res.json({
    Hello: ['Hola', 'Hggggjjmn ello', 'Привет', '你好'],
    World: '🌎',
    at: new Date().toISOString()
  }
)}
