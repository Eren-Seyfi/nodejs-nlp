module.exports = async function(manager) {
  // Eğitim verilerini ekliyoruz
  manager.addDocument('tr', 'Bugün harika hissediyorum', 'greetings.happy');
  manager.addAnswer('tr', 'greetings.happy', 'Bunu duyduğuma sevindim!');

  // Modeli eğitiyoruz
  await manager.train();
  manager.save();
};
