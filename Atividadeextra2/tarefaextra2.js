function abrirCurso() {
    const selectCurso = document.getElementById("cursos");
    const cursoEscolhido = selectCurso.value;

    if (cursoEscolhido !== "") {
        const confirmar = confirm("Você deseja abrir as informações sobre o curso de " + cursoEscolhido + "?");

        if (confirmar) {
            let conteudoCurso = "";
            
            switch (cursoEscolhido) {
                case "Análise e desenvolvimento de sistemas":
                    conteudoCurso = `
                        <h2>Análise e Desenvolvimento de Sistemas</h2>
                        <p>Curso voltado para o desenvolvimento de software, com ênfase em lógica de programação, banco de dados, redes e segurança da informação.</p>
                    `;
                    break;
                case "Eletrônica Automotiva":
                    conteudoCurso = `
                        <h2>Eletrônica Automotiva</h2>
                        <p>O curso de Eletrônica Automotiva capacita profissionais para trabalhar com sistemas eletrônicos veiculares, abrangendo desde a instalação e manutenção de dispositivos eletrônicos até o diagnóstico e reparo de sistemas automotivos avançados.</p>
                    `;
                    break;
                case "Fabricação Mecânica":
                    conteudoCurso = `
                        <h2>Fabricação Mecânica</h2>
                        <p>O curso de Fabricação Mecânica prepara profissionais para atuar no desenvolvimento de processos e produtos industriais, com foco em técnicas de usinagem, soldagem, conformação e automação, visando a eficiência e qualidade na produção mecânica.</p>
                    `;
                    break;
                case "Gestão Empresarial - EAD":
                    conteudoCurso = `
                        <h2>Gestão Empresarial - EAD</h2>
                        <p>O curso de Gestão Empresarial - EAD forma profissionais capazes de gerenciar e coordenar atividades administrativas em diversas áreas de uma organização. O foco está em estratégias de negócios, planejamento, finanças, marketing e recursos humanos, com flexibilidade do ensino a distância, permitindo ao aluno conciliar estudos e trabalho.</p>
                    `;
                    break;
                case "Gestão da Qualidade":
                    conteudoCurso = `
                        <h2>Gestão da Qualidade</h2>
                        <p>O curso de Gestão da Qualidade capacita profissionais para desenvolver e implementar processos de melhoria contínua em organizações, assegurando que produtos e serviços atendam a normas e padrões de excelência. O foco está na análise de processos, auditoria, controle de qualidade e certificações, visando aumentar a eficiência e a satisfação dos clientes.</p>
                    `;
                    break;
                case "Logística":
                    conteudoCurso = `
                        <h2>Logística</h2>
                        <p>O curso de Logística prepara profissionais para gerenciar o fluxo de materiais e produtos em toda a cadeia de suprimentos, desde o planejamento e armazenamento até a distribuição. O foco está na otimização de processos logísticos, gestão de transportes, controle de estoques e operações em centros de distribuição, com o objetivo de garantir a eficiência e redução de custos.</p>
                    `;
                    break;
                case "Manufatura Avançada":
                    conteudoCurso = `
                        <h2>Manufatura Avançada</h2>
                        <p>O curso de Manufatura Avançada forma profissionais para trabalhar com tecnologias de ponta na indústria, como automação, robótica, inteligência artificial e impressão 3D. O foco está na modernização dos processos produtivos, integrando soluções digitais para aumentar a eficiência, flexibilidade e competitividade das operações industriais.</p>
                    `;
                    break;
                case "Processos Metalúrgicos":
                    conteudoCurso = `
                        <h2>Processos Metalúrgicos</h2>
                        <p>O curso de Processos Metalúrgicos capacita profissionais para atuar na transformação e tratamento de metais, abrangendo desde a extração até a fabricação de produtos metálicos. O foco está nos métodos de fundição, soldagem, conformação, tratamento térmico e controle de qualidade, visando otimizar a eficiência e durabilidade dos materiais utilizados na indústria.</p>
                    `;
                    break;
                case "Polímeros":
                    conteudoCurso = `
                        <h2>Polímeros</h2>
                        <p>O curso de Polímeros forma profissionais especializados na produção, transformação e aplicação de materiais poliméricos, como plásticos e borrachas. O foco está no desenvolvimento de novos materiais, processos de moldagem, reciclagem e controle de qualidade, visando atender às demandas da indústria com soluções inovadoras e sustentáveis.</p>
                    `;
                    break;
                case "Projetos Mecânicos":
                    conteudoCurso = `
                        <h2>Projetos Mecânicos</h2>
                        <p>O curso de Projetos Mecânicos capacita profissionais para criar e desenvolver projetos de sistemas e componentes mecânicos, utilizando ferramentas de modelagem 3D e técnicas de análise de resistência e eficiência. O foco está na aplicação de princípios de engenharia para otimizar o design e garantir a viabilidade técnica e econômica dos projetos, atendendo às necessidades da indústria.</p>
                    `;
                    break;
                case "Sistemas Biomédicos":
                    conteudoCurso = `
                        <h2>Sistemas Biomédicos</h2>
                        <p>O curso de Sistemas Biomédicos forma profissionais especializados em desenvolver e manter tecnologias e equipamentos utilizados na área da saúde. O foco está na integração de princípios de engenharia, informática e biomedicina para criar soluções inovadoras, como dispositivos de diagnóstico, monitoramento e tratamento, garantindo a segurança e eficácia nas aplicações clínicas.</p>
                    `;
                    break;
                default:
                    conteudoCurso = "<p>Curso não encontrado.</p>";
            }

            const janelaCurso = window.open("", "Curso", "width=600,height=300");
            janelaCurso.document.write(`
                <html>
                    <head>
                        <title>Curso de ${cursoEscolhido}</title>
                        <style>
                            body { font-family: Arial, sans-serif; padding: 20px; }
                            h2 { color: #333; }
                            p { font-size: 16px; }
                        </style>
                    </head>
                    <body>
                        ${conteudoCurso}
                    </body>
                </html>
            `);
            janelaCurso.document.close();
        }
    }
}
