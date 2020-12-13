export const MAP_AND_LOCATION_API_KEY = "AIzaSyCE6xz4d_yHd7Z0I5Uw_rrD89VBFg1rBQo";
export const BASE_URL = "http://packnpost.infobitedemo.com";
export const GOOGLE_BASE_URL ="https://maps.googleapis.com";
export const api = {
LOGIN_URL : BASE_URL+"/user_api/user_login",
OTP_URL : BASE_URL+"/user_api/user_opt",
SOCIAL_URL : BASE_URL+"/user_api/user_social_login/",
PROFILE_UPDATE_URL : BASE_URL+"/user_api/user_profile_update/",
CHANGE_NUMBER_URL : BASE_URL+"/user_api/user_change_number/",
CHANGE_CONTACT_OTP_URL : BASE_URL+"/user_api/user_change_contact_opt/",
MANGE_USER_ADDRESS_URL : BASE_URL+"/user_api/manage_user_address/",
USER_ADDRESS_URL : BASE_URL+"/user_api/user_address/",
APPLICATION_PINCODE_URL : BASE_URL+"/user_api/application_pincode/",
MANAGE_USER_APP_TOKEN_URL : BASE_URL+"/user_api/manage_user_app_token/",
};

export const google_api = {
AUTO_COMPLETE_URL: "https://maps.googleapis.com/maps/api/place/textsearch/json?query="
};