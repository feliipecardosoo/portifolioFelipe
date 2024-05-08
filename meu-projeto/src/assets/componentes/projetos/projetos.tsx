import React, { useState, useEffect } from 'react';
import styles from './projetos.module.scss';
import imagemTeste from '../../styles/images/teste.png';

const Projetos: React.FC = () => {
    const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll(`.${styles.card}`);

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

                if (isVisible && !visibleIndexes.includes(index)) {
                    setVisibleIndexes((prevIndexes) => [...prevIndexes, index]);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Chamada inicial para verificar a visibilidade ao carregar a página
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visibleIndexes]);

    return (
        <div className={styles.pai}>
            <div className={styles.escritas}>
                <h1 className={styles.escritas__h1}>Alguns Projetos: </h1>
            </div>
            <div className={styles.projetos}>
                {[1, 2, 3].map((projetoIndex) => (
                    <div
                        key={projetoIndex}
                        className={`${styles.card} ${
                            visibleIndexes.includes(projetoIndex - 1) ? styles.visible : ''
                        }`}
                    >
                        <div className={styles.imageContainer}>
                            <img
                                src={imagemTeste}
                                alt={`Imagem do Projeto ${projetoIndex}`}
                                className={styles.image}
                            />
                            <div className={styles.overlay}></div>
                        </div>
                        <div className={styles.content}>
                            <h1>Nome do Projeto {projetoIndex}</h1>
                            <p>Descrição do Projeto {projetoIndex}.</p>
                        </div>
                        <div className={styles.links}>
                            <a
                                href={`URL_DO_REPOSITORIO_NO_GITHUB_PROJETO_${projetoIndex}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i> GitHub
                            </a>
                            <a
                                href={`URL_DO_CANAL_DO_YOUTUBE_PROJETO_${projetoIndex}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-youtube"></i> YouTube
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projetos;
