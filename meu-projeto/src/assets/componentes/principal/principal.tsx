import React, { useState, useEffect, useRef } from 'react';
import styles from './principal.module.scss';
import ResumePDF from '../../curriculo/Curriculo Felipe Cardoso.pdf';
import Projetos from '../projetos/projetos';

const Principal = () => {
    const [showButton, setShowButton] = useState(false);
    const projetosRef = useRef<HTMLDivElement>(null); // Definir o tipo da referência como HTMLDivElement

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    const abrirCurriculoPDF = () => {
        window.open(ResumePDF, '_blank');
    };

    const scrollToProjetos = () => {
        if (projetosRef.current) {
            projetosRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
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
                            onClick={scrollToProjetos}
                        >
                            Projetos
                        </button>
                    </div>
                </div>
            </div>
           
        </div>
         <div ref={projetosRef}>
         <Projetos />
        </div>
        </>
    );
};

export default Principal;
