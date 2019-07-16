import React, { useEffect, useState } from 'react';
import { useApolloClient } from 'react-apollo-hooks';
import styled from 'styled-components';
import { Heading } from 'rebass';
// import Image from '../components/image';
import SEO from '../components/seo';
import { WIDGET_VOTE_QUERY, SAVE_WIDGET_FEEDBACK_QUERY } from '../queries';
import { FullScreenForm } from '../components/FullScreenForm';
import { Footer } from '../components/styles';

const Fullscreen = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 140px, 0.9fr;
  align-items: center;
  min-height: 100vh;
  text-align: center;
`;

async function saveVote({ widgetId, voteType, apolloClient }) {
  await apolloClient.mutate({
    mutation: WIDGET_VOTE_QUERY,
    variables: {
      widgetId: widgetId,
      thumbsup: voteType === 'thumbsup',
      thumbsdown: voteType === 'thumbsdown'
    }
  });
}

const VoteTypeHeading = ({ voteType, name }) =>
  voteType === 'thumbsup' ? (
    <Heading fontSize={[5, 6, 7]}>👍 You enjoyed Randy's {name} 👍</Heading>
  ) : (
    <Heading fontSize={[5, 6, 7]}>
      👎 You didn't enjoy Randy's {name} 👎
    </Heading>
  );

const ThankYouView = () => (
  <>
    <div />
    <div>
      <img src='https://media0.giphy.com/media/QAsBwSjx9zVKoGp9nr/200.webp?cid=790b76115d2de8a235357736328fcffd&rid=200.webp' />
      <Heading fontSize={[3, 4, 5]}>❤️ Thank you, you're the best! ❤️</Heading>
    </div>
  </>
);

const FormView = ({ voteType, onSubmit, followupQuestions, name }) => (
  <>
    <VoteTypeHeading voteType={voteType} name={name} />
    <FullScreenForm onSubmit={onSubmit} followupQuestions={followupQuestions} />
  </>
);

const VotePage = ({ pageContext }) => {
  const apolloClient = useApolloClient();
  const { widgetId, voteType, followupQuestions, name } = pageContext;
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    saveVote({ widgetId, voteType, apolloClient });
  }, []);

  async function onSubmit(answers) {
    if (Object.values(answers).length >= followupQuestions.length) {
      setShowThankYou(true);
    }
    await apolloClient.mutate({
      mutation: SAVE_WIDGET_FEEDBACK_QUERY,
      variables: {
        widgetId,
        answers: JSON.stringify(answers)
      }
    });
  }

  return (
    <Fullscreen>
      <SEO title='Thank You' />
      {showThankYou ? (
        <ThankYouView />
      ) : (
        <FormView
          voteType={voteType}
          onSubmit={onSubmit}
          followupQuestions={followupQuestions}
          name={name}
        />
      )}
      <Footer>
        © {new Date().getFullYear()}, Built with ❤️ on the internet
      </Footer>
    </Fullscreen>
  );
};

export default VotePage;
