import Cookies from 'js-cookie';

export default function GetCookies(cookiesName) {
  return Cookies.get(cookiesName);
}
