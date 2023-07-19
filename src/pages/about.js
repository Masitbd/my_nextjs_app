import React from 'react';
import RootLayout from '../../components/layout/RootLayout';

const About = () => {
    return (
        <div>
            This is about page
        </div>
    );
};

export default About;

About.getLayout = function getLayout(page){
    return (
        <RootLayout>{page}</RootLayout>
    )
}