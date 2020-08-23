import React from 'react';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/img/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt='github explorer' />
    <Title>Explore repositórios no Github</Title>

    <Form action=''>
      <input type='text' placeholder='Digite o nome do repositório' />
      <button type='submit'>Pesquisar</button>
    </Form>

    <Repositories>
      <a href='teste'>
        <img
          src='https://avatars0.githubusercontent.com/u/53241706?s=460&u=04efd975649153ee5b1a0a9d861c16a36b767528&v=4'
          alt='Henrique leal'
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy lemon squezzy</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href='teste'>
        <img
          src='https://avatars0.githubusercontent.com/u/53241706?s=460&u=04efd975649153ee5b1a0a9d861c16a36b767528&v=4'
          alt='Henrique leal'
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy lemon squezzy</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href='teste'>
        <img
          src='https://avatars0.githubusercontent.com/u/53241706?s=460&u=04efd975649153ee5b1a0a9d861c16a36b767528&v=4'
          alt='Henrique leal'
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy lemon squezzy</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
