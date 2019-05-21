import React from 'react';
import '../styles/Page.css';

const Page = props => {
  const { children } = props;
  return (
    <section className="page">
      {children}
    </section>
  )
}

export default Page;