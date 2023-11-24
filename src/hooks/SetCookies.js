import Cookies from 'js-cookie';

export default function SetCookies(cookiesName, cookiesValue) {
  Cookies.set(cookiesName, cookiesValue, {
    expires: 1,
  });
}
