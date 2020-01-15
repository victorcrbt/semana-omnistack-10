import React from 'react';

import { Container, Sidebar, MainContent } from './styles';

export default function Main() {
  return (
    <Container>
      <Sidebar>
        <strong>Cadastrar</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </Sidebar>

      <MainContent>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/26396515?s=460&v=4"
                alt="Avatar"
              />

              <div className="user-info">
                <strong>Victor Batalha</strong>
                <span>Node.js, ReactJS, React Native</span>
              </div>
            </header>
            <p>
              Desenvolvedor Fullstack Javascript. NodeJS, ReactJS e React
              Native. Sempre buscando aprimorar os conhecimentos!
            </p>
            <a href="https://github.com/victorcrbt">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/26396515?s=460&v=4"
                alt="Avatar"
              />

              <div className="user-info">
                <strong>Victor Batalha</strong>
                <span>Node.js, ReactJS, React Native</span>
              </div>
            </header>
            <p>
              Desenvolvedor Fullstack Javascript. NodeJS, ReactJS e React
              Native. Sempre buscando aprimorar os conhecimentos!
            </p>
            <a href="https://github.com/victorcrbt">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/26396515?s=460&v=4"
                alt="Avatar"
              />

              <div className="user-info">
                <strong>Victor Batalha</strong>
                <span>Node.js, ReactJS, React Native</span>
              </div>
            </header>
            <p>
              Desenvolvedor Fullstack Javascript. NodeJS, ReactJS e React
              Native. Sempre buscando aprimorar os conhecimentos!
            </p>
            <a href="https://github.com/victorcrbt">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/26396515?s=460&v=4"
                alt="Avatar"
              />

              <div className="user-info">
                <strong>Victor Batalha</strong>
                <span>Node.js, ReactJS, React Native</span>
              </div>
            </header>
            <p>
              Desenvolvedor Fullstack Javascript. NodeJS, ReactJS e React
              Native. Sempre buscando aprimorar os conhecimentos!
            </p>
            <a href="https://github.com/victorcrbt">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </MainContent>
    </Container>
  );
}
