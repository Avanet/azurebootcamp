import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Azure Bootcamp 2019 - Medellin', 'Avanet', 'Community']} />
    <h1>Hi people</h1>
    <p>Welcome to your new Avanet site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <a href="//www.papercall.io/global-azure-2019">Call for Papers</a>
  </Layout>
);

export default IndexPage;
