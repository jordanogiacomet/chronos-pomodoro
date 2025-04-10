import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // Não segue o link

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    // document.documentElement.setAttribute('data-theme', theme);
  }

  // useEffect(() => {
  //   console.log('useEffect sem dependências', Date.now());
  // }); // Executado toda vez que o componente renderiza na tela, vimos que quando a página inicia ele é executado, e se mudamos o tema, ele é executado também. Todas as vezes que eu uso setTheme e mudo o valor de theme, quer dizer que essa função do meu componente precisa ser executada novamente. Eu não tenho como pegar o valor novo sem executar essa função. Mas isso é que quando eu mudar QUALQUER coisa, ele irá executar novamente. E se essa função executou, o componente INTEIRO precisa ser renderizado na tela novamente. Como vimos com a renderização do componente, tudo é renderizado denovo em qualquer mudança.

  // A segunda forma de usar o useEffect é:
  // useEffect(() => {
  //   console.log('useEffect com array deps vazio', Date.now());
  // }, []); // Executa somente quando o React monta o componente na tela pela primeira vez, geralmente esse useEffect, quando eu sair da página, ou recarregar ela, ele será executado. Se eu mudar qualquer outra coisa no componente, ele não executa. Isso é útil por que? Quando eu vou buscar dados de uma API. Quando meu componente carrega na tela, eu conecto na API e puxo os produtos e jogo na tela. Se o componente renderizar denovo eu não quero ter que ficar buscando denovo os produtos

  // A terceira forma de usar o useEffect é:
  useEffect(() => {
    console.log('Theme mudou', theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme); // Nesse ponto terei o valor de theme atualizado, então efetivamente eu posso setar o atributo como efeito colateral
  }, [theme]); // Executa a função somente quando o valor dessa dependência mudar. Quando eu dou o setTheme, o valor de theme vai mudar e então esse useEffect será executado. logo, caimos fora do problema de funções set que não executam no momento, esse useEffect SÓ executa quando realmente a dependência mudar.

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
