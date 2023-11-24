import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Routes from 'routes/index';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GetCookies from 'hooks/GetCookies';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoader, setIsUserLogin } from 'store/reducers/User/auth.slice';
import RemoveCookies from 'hooks/RemoveCookies';
import SetCookies from 'hooks/SetCookies';
import Loader from 'Components/Common/Loader';
import { showMessage } from 'store/reducers/common.slice';
import { getUserPermissionData } from 'store/reducers/User/user.slice';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { isLoader } = useSelector(({ auth }) => auth);

  useEffect(() => {
    dispatch(setIsLoader(true));
    const values = GetCookies('TokenCRM');
    if (values) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${atob(values)}`;
      dispatch(setIsUserLogin(true));
      RemoveCookies('TokenCRM');
      SetCookies('TokenCRM', btoa(atob(values)));
    } else {
      navigate('/login');
    }
    dispatch(setIsLoader(false));
  }, [dispatch, navigate]);

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response.status === 401) {
          RemoveCookies('UserSessionCRM');
          RemoveCookies('TokenCRM');
          setTimeout(() => {
            dispatch(
              showMessage({
                message: 'Logged out Successfully',
                varient: 'success',
              }),
            );
            navigate('/login');
          }, 1000);
        }
        return Promise.reject(error);
      },
    );
    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [navigate]);

  const userData = GetCookies('UserSessionCRM');
  const userSession = userData ? JSON.parse(atob(userData)) : null;

  useEffect(() => {
    if (userSession?._id !== '' && userData) {
      dispatch(getUserPermissionData(userSession?._id));
    }
  }, [dispatch, userData, userSession?._id]);

  return (
    <>
      <Helmet
        titleTemplate="%s - CRMBO Administration Control"
        defaultTitle="CRMBO Administration Control"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="A CRMBO Administration Control application"
        />
      </Helmet>
      {isLoader && <Loader />}
      <Routes />
    </>
  );
}
