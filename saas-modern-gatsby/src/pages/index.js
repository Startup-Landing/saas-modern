import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Clients from 'sections/clients';
import FeaturedSpace from 'sections/featured-space';
import OurCustomer from 'sections/our-customer';
import Gallery from 'sections/gallery';
import Pricing from 'sections/pricing';
import Blog from 'sections/blog';
import Subscription from 'sections/subscription';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Startup Landing 007" />
      <Banner />
      <Clients />
      <FeaturedSpace />
      <Gallery />
      <Pricing />
      <OurCustomer />
      <Blog />
      <Subscription />
    </Layout>
  );
}
