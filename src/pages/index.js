import React from 'react';
import RootLayout from '../../components/layout/RootLayout';

const HomePage = () => {
  return(
    <div>
      this is HomePage
    </div>
  )
   
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}