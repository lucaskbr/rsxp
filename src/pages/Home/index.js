import React from 'react';

import { Container, ChallengeList, ChallengeCard, Title } from './styles';

import code from '../../assets/code.png';

export default function Home() {
  const challenges = [
    {
      title: 'Hellow word',
      description: 'Lorem',
      reward: '$1 na Steam',
    },
    {
      title: 'Quebrando regras',
      description: 'Lorem',
      reward: '25% de desconto no ifood',
    },
    {
      title: 'Desafio do milhao',
      description: 'Lorem',
      reward: '1 skin no fortnite',
    },
    {
      title: 'Agora vai',
      description: 'Lorem',
      reward: '1 desafio gratis',
    },
    {
      title: 'Criptografia da trakinas',
      description: 'Lorem',
      reward: '$1 de Credito no rappi',
    },
  ];

  const challengesTwo = [
    {
      title: 'Quebrando regras',
      description: 'Lorem',
      reward: '25% de desconto no ifood',
    },
  ];

  return (
    <>
      <Container>
        <Title>Desafios Disponiveis</Title>
        <ChallengeList>
          {challenges.map((challenge, index) => (
            <ChallengeCard>
              <img src={code} alt="" />
              <div>
                <h3>{challenge.title}</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy ...
                </p>
                <h4>Recompensa: {challenge.reward}</h4>
                <button type="button">Inscrever-se</button>
              </div>
            </ChallengeCard>
          ))}
        </ChallengeList>
        <Title>Desafios Patrocinados</Title>
        <ChallengeList>
          {challengesTwo.map((challenge, index) => (
            <ChallengeCard>
              <img src={code} alt="" />
              <div>
                <h3>{challenge.title}</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy ...
                </p>
                <h4>Recompensa: {challenge.reward}</h4>
                <button type="button">Inscrever-se</button>
              </div>
            </ChallengeCard>
          ))}
        </ChallengeList>
      </Container>
    </>
  );
}
