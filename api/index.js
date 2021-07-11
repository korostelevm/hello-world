module.exports.all = (req,res) => {
  res.json({
    Hello: ['Hola'],
    World: '🌎',
    at: new Date().toISOString()
  }
)}
