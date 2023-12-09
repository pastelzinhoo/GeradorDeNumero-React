import "./App.css";
import { AiOutlineLinkedin } from "react-icons/ai"; // Importando o Icone do Linkedin
import { FaGithubSquare } from "react-icons/fa"; // Importando Icone Github
import { FaTwitter } from "react-icons/fa"; // Importando Icone Twitter
import React, { useState } from 'react';  // Importando useState para aplicação

export default function PaginaPrincipal() {    // Função Principal da aplicação
  
  const [NumeroAleatorio, SetNumeroAleatorio] = useState(0);  // Variavel composta, SetNumeroAleatorio é uma função e NumeroAleatorio é uma variavel dentro da função
  function clique() {
    const NovoNumero = Math.floor(Math.random() * (100-1) + 1); //Algoritmo matematico para gerar número Aleatorio
    SetNumeroAleatorio(NovoNumero)                              // Chamando a função e declarando o valor de NovoNumero para dentro da variavel NumeroAleatorio que esta dentro...
  }                                                             // ... da função SetNumeroAleatorio que foi chamada
  
  return (                                                      // Tudo que esta dentro de Return é a parte visivel do código a cima dele temos a parte lógica
    <main>
        <div className="Container-Numero"> 
          <h1>{NumeroAleatorio}</h1>                            {/* Colocando Nossos números Aleatorio dentro do titulo <h1> */}
            <button onClick={clique}>GERAR NÚMERO</button>      {/* Ligando o botão com a função através do onClick onde ele chama função clicar */}
        </div>
        <ul>
          <li className="Linkedin">                              {/* Foi colocado classes e divs dentro dos icones para poder estiliza-los melhor */}
          <a href="https://www.linkedin.com/in/murilo-abreu-19462a267/"><AiOutlineLinkedin /></a>    {/* Chamando o icone Linkedin através da biblioteca React Icons */}
          </li>
          <li className="Github">                                 {/* Foi colocado classes e divs dentro dos icones para poder estiliza-los melhor */}
          <a href=""><FaGithubSquare /></a>                       {/* Chamando o icone Github através da biblioteca React Icons */}
          </li>
          <li className="Twitter">                                {/* Foi colocado classes e divs dentro dos icones para poder estiliza-los melhor */}
          <a href=""><FaTwitter /></a>                            {/* Chamando o icone Twitter através da biblioteca React Icons */}
          </li>
        </ul>
    </main>
  );
}
