module.exports.all = (req,res) => {
  res.json({
    Hello: ['Hola', 'Hggggjjjhhhh yo bill hhhhghfgggello', 'Привет', '你好'],
    World: '🌎',
    at: new Date().toISOString()
  }
)}
