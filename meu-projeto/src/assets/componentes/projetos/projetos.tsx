import React, { useState, useEffect } from 'react';
import styles from './projetos.module.scss';
import imagemTeste from '../../styles/images/teste.png';
import novaImagem from '../../styles/images/nova-imagem.png'; // Importe a nova imagem aqui

interface Projeto {
    id: number;
}

const Projetos: React.FC = () => {
    const [visibleProjects, setVisibleProjects] = useState<Projeto[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll(`.${styles.card}`);

            cards.forEach((card) => {
                const id = parseInt(card.getAttribute('data-project-id') || '0', 10);
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

                if (isVisible && !visibleProjects.find(projeto => projeto.id === id)) {
                    setVisibleProjects((prevProjects) => [...prevProjects, { id }]);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Chamada inicial para verificar a visibilidade ao carregar a página
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visibleProjects]);

    const updateFirstProject = () => {
        // Atualizar o conteúdo do primeiro projeto
        const firstProject = document.querySelector(`.${styles.card}:first-child`);

        if (firstProject) {
            const h1Element = firstProject.querySelector(`.${styles.content} h1`);
            const pElement = firstProject.querySelector(`.${styles.content} p`);
            const imgElement = firstProject.querySelector(`.${styles.image}`);

            if (h1Element && pElement && imgElement) {
                h1Element.textContent = 'Controle de Membros';
                pElement.textContent = 'Projeto feito para igrejas com o intuito de ter o controle total de membros. Implementada na Igreja Batista da Trindade (Florianópolis-SC).';
                imgElement.setAttribute('src', novaImagem); // Altera o atributo src da imagem
                imgElement.setAttribute('alt', `Nova Imagem do Projeto 1`);
            }
        }
    };

    useEffect(() => {
        // Chamada para atualizar o primeiro projeto assim que o componente for montado
        updateFirstProject();
    }, []);

    return (
        <div className={styles.pai}>
            <div className={styles.escritas}>
                <h1 className={styles.escritas__h1}>Alguns Projetos: </h1>
            </div>
            <div className={styles.projetos}>
                {[1, 2, 3, 4].map((projetoIndex) => (
                    <div
                        key={projetoIndex}
                        className={`${styles.card} ${
                            visibleProjects.some(projeto => projeto.id === projetoIndex) ? styles.visible : ''
                        }`}
                        data-project-id={projetoIndex}
                    >
                        <div className={styles.imageContainer}>
                            <img
                                src={projetoIndex === 1 ? novaImagem : imagemTeste} // Altera a imagem com base no projetoIndex
                                alt={`Imagem do Projeto ${projetoIndex}`}
                                className={styles.image}
                            />
                            <div className={styles.overlay}></div>
                        </div>
                        <div className={styles.content}>
                            {projetoIndex === 1 ? (  // Verifica se é o primeiro projeto
                                <>
                                    <h1>Novo Título do Projeto</h1>
                                    <p>Nova descrição do projeto. Aqui você pode adicionar os detalhes atualizados.</p>
                                </>
                            ) : (
                                <> 
                                    <h1>Controle de Membros {projetoIndex}</h1>
                                    <p>Descrição do Projeto {projetoIndex}. Aqui você pode adicionar detalhes sobre o projeto.</p>
                                </>
                            )}
                        </div>
                        <div className={styles.links}>
                            <a
                                href={`URL_DO_REPOSITORIO_NO_GITHUB_PROJETO_${projetoIndex}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i> 
                                GitHub
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
