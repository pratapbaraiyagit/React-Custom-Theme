import Cookies from 'js-cookie';

export default function RemoveCookies(cookiesName) {
  Cookies.remove(cookiesName);
}
