const axios = require('axios');

//url do thingsboard apontando para minha máquina pessoal
const url = 'http://192.168.0.121:18080/api/v1/Mb8j5hnWzdyY3EzdXxlW/telemetry';
const token = 'umidity';

let temperature = 20;
let humidity = 50;
let luminosity = 8000;

setInterval(() => {
  // Gerar um valor aleatório entre -1 e 1 para adicionar à temperatura atual
  const tempVariation = (Math.random() * 2) - 1;
  temperature += tempVariation;
  temperature = Math.max(Math.min(temperature, 40), -10); // Limitar a temperatura entre -10 e 40
  
  // Gerar um valor aleatório entre -1 e 1 para adicionar à umidade atual
  const humVariation = (Math.random() * 2) - 1;
  humidity += humVariation;
  humidity = Math.max(Math.min(humidity, 100), 0); // Limitar a umidade entre 0 e 100

  // Gerar um valor aleatório entre -1 e 1 para adicionar à luminosidade atual
  const lumVariation = (Math.random() * 2) - 1;
  luminosity += lumVariation;
  luminosity = Math.max(Math.min(luminosity, 32000), 0); // Limitar a umidade entre 0 e 32000
  
  const date = new Date();
  const ts = date.getTime();
  
  // Criar um objeto JSON com temperatura e umidade
  const data = {
    temperature: Math.round(temperature),
    humidity: Math.round(humidity),
    luminosity,
    ts
  };

  // Enviar os dados para o Thingsboard
  axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': `Bearer ${token}`
    }
  })
  .then(() => {
    console.log('Dados enviados com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao enviar dados:', err);
  });
}, 5000);
