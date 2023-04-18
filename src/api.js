import axios from 'axios';

const BASE_URL = "http://localhost:5000";

export async function countUsers() {
  const res = await axios.get(`${BASE_URL}/count`);
  return res.data;
}
export async function signup(body) {
  const res = await axios.post(`${BASE_URL}/signup`, body);
  return res.data;
}
export async function login(body) {
  const res = await axios.post(`${BASE_URL}/login`, body);
  return res.data;
}
export async function logout(token) {
  const res = await axios.delete(`${BASE_URL}/logout`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
}
export async function registerPatient(body, token) {
  const res = await axios.post(`${BASE_URL}/patient`, body , {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
}
export async function listAllPatients(token) {
  const res = await axios.get(`${BASE_URL}/patient`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
}
export async function scheduleAppointment(body, token) {
  const res = await axios.post(`${BASE_URL}/appointment`, body , {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
}
export async function listAppointmentByDate(date, token) {
  const res = await axios.get(`${BASE_URL}/appointment/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
}
