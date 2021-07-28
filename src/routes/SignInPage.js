import React from 'react';
import UserAuthenticationForm from '../components/UserAuthenticationForm';
import ScrollToTop from '../components/ScrollToTop';
const SignInPage = () => {
  return (
    <>
      <ScrollToTop />
      <UserAuthenticationForm formType="signIn" />
    </>
  );
};

export default SignInPage;
