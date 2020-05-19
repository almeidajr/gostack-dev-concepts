import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * Emulador: localhost -> adb reverse tcp:3333 tcp:3333
 * Emulador: 10.0.2.2
 * Físico: IP da máquina
 */
