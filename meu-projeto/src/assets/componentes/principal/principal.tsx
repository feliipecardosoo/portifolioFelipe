// Principal.js
import React, { useState, useEffect } from 'react';
import styles from './principal.module.scss';
import ResumePDF from '../../curriculo/Curriculo Felipe Cardoso.pdf'; // Caminho para o PDF do currículo

const Principal = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 1500); // Mostrar os botões após 1.5 segundos

        return () => clearTimeout(timer);
    }, []); // Executar apenas uma vez ao montar o componente

    const abrirCurriculoPDF = () => {
        window.open(ResumePDF, '_blank');
    };

    const abrirProjetos = () => {
        // Lógica para abrir a página de projetos ou exibir informações dos projetos
        console.log('Abrir página de Projetos');
        // Aqui você pode adicionar a lógica para abrir a página de projetos ou mostrar mais informações sobre os projetos
    };

    return (
        <div className={styles.container}>
            <div className={styles.container__escrita}>
                <div className={styles.texto_animado}>
                    <h1>
                        Olá meu nome é <span className={styles.texto_animado_span}>Felipe Cardoso</span>
                    </h1>
                    <div className={styles.buttons}>
                        <button
                            className={`${styles.buttonCurriculo} ${showButton ? styles.showButton : ''}`}
                            onClick={abrirCurriculoPDF}
                        >
                            Ver Currículo
                        </button>
                        <button
                            className={`${styles.buttonCurriculo} ${showButton ? styles.showButton : ''}`}
                            onClick={abrirProjetos}
                        >
                            Projetos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Principal;
