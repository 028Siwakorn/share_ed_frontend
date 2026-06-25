const axios = require('axios');

async function testLogin() {
  try {
    const res = await axios.post('https://share-ed-backend-6jer.onrender.com/api/v1/auth/login', {
      email: 'test@test.com',
      password: 'password123'
    });
    console.log('Success:', res.data);
  } catch (err) {
    console.error('Error:', err.message);
    if (err.response) {
      console.error('Data:', err.response.data);
    }
  }
}

testLogin();
