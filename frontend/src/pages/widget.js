import React, { useEffect } from 'react';
import { CentralColumn, Heading } from '../components/styles';
import { useApolloClient } from 'react-apollo-hooks';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import { WIDGET_QUERY } from '../queries';

async function getWidget({ widgetId, apolloClient }) {
  const result = await apolloClient.query({
    query: WIDGET_QUERY,
    variables: {
      widgetId: widgetId
    }
  });

  return result.data.widget;
}

const widgetPage = ({ pageContext }) => {
  const apolloClient = useApolloClient();
  const { widgetId, name } = pageContext;
  console.log(widgetId, name);
  useEffect(() => {
    getWidget({ widgetId, apolloClient });
  }, []);

  return (
    <Layout>
      <SEO title='Thank You' />
      <CentralColumn style={{ paddingTop: '2em' }}>
        <Heading h2>Did {name} spark joy?</Heading>
      </CentralColumn>
    </Layout>
  );
};

export default widgetPage;
