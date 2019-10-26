import React from 'react';
import Head from 'next/head';
import Header from '../includes/header';

const MainLayout = props => {
  return (
    <>
      <Head>
        <title>Pizzeria</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/static/css/all.min.css" />
        <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/css/styles.css" />
      </Head>

      <div className="mainLayout_container">
        <Header />

        <div className="main_container">{props.children}</div>
      </div>
    </>
  );
};

export default MainLayout;
