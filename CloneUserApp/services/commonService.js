import axios from 'axios';
import {api, google_api, MAP_AND_LOCATION_API_KEY} from '.';
// import { AsyncStorage } from 'react-native';

function login(mobile_no) {
  const formData = new FormData();
  formData.append('contact', mobile_no);
  return new Promise((resolve, reject) => {
    axios
      .post(`${api.LOGIN_URL}`, formData, {
        headers: {
          'access-control-allow-origin': '*',
          'content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => {
        resolve(response);
      })
      .catch(err => reject(err));
  });
}

async function otpVerify(mobile_no, otp_code) {
  const formData = new FormData();
  formData.append('contact', mobile_no);
  formData.append('otp', otp_code);
  console.log('test==>', formData);
  return new Promise(async (resolve, reject) => {
    axios
      .post(`${api.OTP_URL}`, formData, {
        headers: {
          'access-control-allow-origin': '*',
          'content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => {
        resolve(JSON.stringify(response.data));
      })
      .catch(err => reject(err));
  });
}

async function updateProfile(data) {
  const formData = new FormData();
  formData.append('first_name', data.first_name);
  formData.append('last_name', data.last_name);
  formData.append('email', data.email);
  formData.append('gender', data.gender);
  formData.append('dob', data.dob);
  formData.append('session_id', data.session_id);
  formData.append('user_profile_image', data.user_profile_image);
  console.log('test==>', formData);
  return new Promise(async (resolve, reject) => {
    axios
      .post(`${api.PROFILE_UPDATE_URL}`, formData, {
        headers: {
          'access-control-allow-origin': '*',
          'content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => {
        resolve(JSON.stringify(response.data));
      })
      .catch(err => reject(err));
  });
}

function updateContact(mobile_no) {
  const formData = new FormData();
  formData.append('contact', mobile_no);
  return new Promise((resolve, reject) => {
    axios
      .post(`${api.CHANGE_NUMBER_URL}`, formData, {
        headers: {
          'access-control-allow-origin': '*',
          'content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => {
        resolve(response);
      })
      .catch(err => reject(err));
  });
}

async function updateContactotpVerify(mobile_no, otp_code) {
  const formData = new FormData();
  formData.append('contact', mobile_no);
  formData.append('otp', otp_code);
  console.log('test==>', formData);
  return new Promise(async (resolve, reject) => {
    axios
      .post(`${api.CHANGE_CONTACT_OTP_URL}`, formData, {
        headers: {
          'access-control-allow-origin': '*',
          'content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => {
        resolve(JSON.stringify(response.data));
      })
      .catch(err => reject(err));
  });
}

async function updateFcmToken(data) {
  const formData = new FormData();
  formData.append('user_ip', data.user_ip);
  formData.append('session_id', data.session_id);
  formData.append('token', data.fcm_token);
  console.log('test==>', formData);
  return new Promise(async (resolve, reject) => {
    axios
      .post(`${api.MANAGE_USER_APP_TOKEN_URL}`, formData, {
        headers: {
          'access-control-allow-origin': '*',
          'content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => {
        resolve(JSON.stringify(response.data));
      })
      .catch(err => reject(err));
  });
}

async function searchLocation(search_text) {
  console.log('search_key===>' + search_text);
  return new Promise(async (resolve, reject) => {
    axios
      .get(
        `${google_api.AUTO_COMPLETE_URL +
          search_text +
          '&key=' +
          MAP_AND_LOCATION_API_KEY}`,
        {},
      )
      .then(response => {
        resolve(JSON.stringify(response.data));
      })
      .catch(err => reject(err));
  });
}

export const commonService = {
  login,
  otpVerify,
  updateProfile,
  updateContact,
  updateContactotpVerify,
  updateFcmToken,
  searchLocation,
};
