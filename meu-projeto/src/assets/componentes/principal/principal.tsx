import { useState, useEffect, useRef } from 'react';
import styles from './principal.module.scss';
import ResumePDF from '../../curriculo/Curriculo Felipe Cardoso.pdf';
import Projetos from '../projetos/projetos';

const Principal = () => {
    const [showButton, setShowButton] = useState(false);
    const [showScrollIcon, setShowScrollIcon] = useState(false); 
    // Inicializa como false

    showScrollIcon;

    const projetosRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const buttonTimer = setTimeout(() => {
            setShowButton(true);
        }, 1200);

        const scrollTimer = setTimeout(() => {
            setShowScrollIcon(true); // Define showScrollIcon como true após 3 segundos
        }, 3000); // 3 segundos

        return () => {
            clearTimeout(buttonTimer);
            clearTimeout(scrollTimer);
        };
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
                            <a href="https://wa.me/5548999684045" className={`${styles.btnzap} ${showButton ? styles.showButton : ''}`}>
                                <i className="fab fa-whatsapp"></i>
                            </a>
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
