// ===== CONFIGURAÇÕES DO JOGO =====
const FASES = [
    { nivel: 1, metaPontos: 50, metaPoluicao: 50, velocidade: 1.0, residuosPorFase: 10 },
    { nivel: 2, metaPontos: 100, metaPoluicao: 45, velocidade: 1.2, residuosPorFase: 15 },
    { nivel: 3, metaPontos: 150, metaPoluicao: 40, velocidade: 1.4, residuosPorFase: 20 },
    { nivel: 4, metaPontos: 200, metaPoluicao: 35, velocidade: 1.6, residuosPorFase: 25 },
    { nivel: 5, metaPontos: 300, metaPoluicao: 30, velocidade: 1.8, residuosPorFase: 30 }
];

// ===== BASE DE DADOS DE RESÍDUOS COM AS SUAS IMAGENS =====
const residuos = [
    // Fase 1 - Resíduos mais comuns
    {
        nome: "Garrafa de plástico",
        ecoponto: "amarelo",
        imagem: "https://images.pexels.com/photos/7767813/pexels-photo-7767813.jpeg",
        dica: "Garrafas de plástico são recicladas para fazer novas embalagens e fibras têxteis."
    },
    {
        nome: "Garrafa de vidro",
        ecoponto: "verde",
        imagem: "https://images.pexels.com/photos/15203362/pexels-photo-15203362.jpeg",
        dica: "Vidro é 100% reciclável infinitamente sem perder qualidade."
    },
    {
        nome: "Jornal",
        ecoponto: "azul",
        imagem: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&fit=crop",
        dica: "Jornais reciclados são transformados em papel reciclado, economizando água e energia."
    },
    {
        nome: "Casca de banana",
        ecoponto: "castanho",
        imagem: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&fit=crop",
        dica: "Cascas de fruta são resíduos orgânicos que podem ser compostados para adubo natural."
    },
    {
        nome: "Pilha usada",
        ecoponto: "vermelho",
        imagem: "https://cdn0.umcomo.com.br/pt/posts/1/3/7/como_reciclar_as_pilhas_usadas_9731_orig.jpg",
        dica: "Pilhas contêm metais pesados tóxicos que contaminam solo e água se não forem recicladas."
    },
    {
        nome: "Lata de refrigerante",
        ecoponto: "amarelo",
        imagem: "https://img.freepik.com/fotos-premium/uma-tampa-aberta-de-cerveja-ou-refrigerante-pode-ser-isolada-em-branco_167862-14730.jpg",
        dica: "Latas de alumínio são 100% recicláveis e economizam 95% da energia para produzir alumínio novo."
    },
    {
        nome: "Frascos de compota",
        ecoponto: "verde",
        imagem: "https://espiritorebelde.pt/store/5010-thickbox_default/frasco-de-vidro-ketchup-370ml.jpg",
        dica: "Frascos de vidro devem ser lavados antes de serem colocados no ecoponto verde."
    },
    {
        nome: "Caixa de cereais",
        ecoponto: "azul",
        imagem: "https://img.freepik.com/fotos-premium/caixa-branca-de-cereais-genericos-pacote-de-cafe-da-manha-instantaneo-em-branco-caixa-em-branco_145134-177.jpg",
        dica: "Embalagens de cartão são recicladas para fazer novas caixas e papel de embalagem."
    },
    {
        nome: "Restos de legumes",
        ecoponto: "castanho",
        imagem: "https://st3.depositphotos.com/1010613/15052/i/450/depositphotos_150528310-stock-photo-vegetable-and-fruit-peelings.jpg",
        dica: "Restos de legumes transformam-se em composto rico em nutrientes para plantas."
    },
    {
        nome: "Bateria de telemóvel",
        ecoponto: "vermelho",
        imagem: "https://pplware.sapo.pt/wp-content/uploads/2019/03/iphone-bateria-mudar-3.jpg",
        dica: "Baterias contêm materiais valiosos como lítio e cobalto que podem ser recuperados."
    },

    // Fase 2 - Resíduos intermediários
    {
        nome: "Embalagem de leite",
        ecoponto: "amarelo",
        imagem: "https://media.istockphoto.com/id/1035432692/pt/foto/white-blank-milk-or-juice-package-isolated-on-white-with-clipping-path.jpg?s=612x612&w=0&k=20&c=fJIJhjoE3ULQIEqvaS14JXLqAsuQe1dFkq6vkgf_UK0=",
        dica: "Embalagens de cartão para alimentos líquidos são compostas por várias camadas separadas na reciclagem."
    },
    {
        nome: "Garrafa de azeite",
        ecoponto: "verde",
        imagem: "https://static.lvengine.net/mercadodovidro/Imgs/produtos/product_293/MV6106CN.jpg",
        dica: "Garrafas de vidro para alimentos devem ser bem lavadas antes de reciclar."
    },
    {
        nome: "Revista",
        ecoponto: "azul",
        imagem: "https://www.lalouandco.fr/wp-content/uploads/2015/05/blurb-livre-photos-voyage-scandinavie-lalouandco-copenhague.jpg",
        dica: "Revistas têm papel de alta qualidade que pode ser reciclado várias vezes."
    },
    {
        nome: "Borras de café",
        ecoponto: "castanho",
        imagem: "https://viral.sapo.pt/wp-content/uploads/2023/09/shutterstock_249398773-825x500.jpg",
        dica: "Borras de café são excelentes para compostagem e também podem ser usadas como fertilizante direto."
    },
    {
        nome: "Lâmpada fluorescente",
        ecoponto: "vermelho",
        imagem: "https://datapixel.pt/wp-content/uploads/2018/04/0003515_lampada-fluorescente-compacta-3-tubos-e27-20w-6400k-c-sensor-crepuscular-3u.jpeg",
        dica: "Lâmpadas fluorescentes contêm mercúrio, metal tóxico que precisa de tratamento especial."
    },
    {
        nome: "Saco de plástico",
        ecoponto: "amarelo",
        imagem: "https://espiritorebelde.pt/store/12524-thickbox_default/sacos-plastico-alca-supermercado.jpg",
        dica: "Sacos de plástico podem entupir máquinas de triagem se não forem colocados dentro de saco maior."
    },
    {
        nome: "Vidro de janela",
        ecoponto: "verde",
        imagem: "https://portaseportais.com.br/wp-content/uploads/2024/10/Janela-em-Vidro-Temperado-da-Vidracaria-Bela-Vista-11.jpg",
        dica: "Vidro plano (janelas, espelhos) vai para o vidrão, mas não deve ser misturado com vidro de embalagem."
    },
    {
        nome: "Envelope",
        ecoponto: "azul",
        imagem: "https://blog.viking-direct.co.uk/wp-content/uploads/2019/05/envelope-size.jpg",
        dica: "Envelopes com janela de plástico devem ter essa parte removida antes de reciclar."
    },
    {
        nome: "Cascas de ovo",
        ecoponto: "castanho",
        imagem: "https://www.pensamentoverde.com.br/wp-content/uploads/2019/04/casca-de-ovo_capa.jpg",
        dica: "Cascas de ovo são ricas em cálcio e são excelentes para compostagem."
    },
    {
        nome: "Medicamentos vencidos",
        ecoponto: "vermelho",
        imagem: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&fit=crop",
        dica: "Medicamentos nunca devem ser deitados no lixo comum ou na sanita, pois contaminam a água."
    },

    // Fase 3 - Resíduos mais complexos
    {
        nome: "Embalagem de iogurte",
        ecoponto: "amarelo",
        imagem: "https://img.freepik.com/vetores-gratis/modelo-de-copo-e-garrafa-de-iogurte-branco_107791-28332.jpg?semt=ais_hybrid&w=740&q=80",
        dica: "Embalagens de iogurte devem ser escorridas e preferencialmente lavadas antes de reciclar."
    },
    {
        nome: "Pote de vidro de pickles",
        ecoponto: "verde",
        imagem: "https://www.seara.com.br/wp-content/uploads/2025/09/81fec4ecb702b03ff80cc987cf3714d5_Picles_em_conserva_pote.webp",
        dica: "Tampas metálicas dos potes de vidro devem ser colocadas no ecoponto amarelo."
    },
    {
        nome: "Caixa de sapatos",
        ecoponto: "azul",
        imagem: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/11/e5df84c5-2e90-4ae4-b3de-97417abf32f4.jpg",
        dica: "Caixas de cartão devem ser desmontadas para ocuparem menos espaço no ecoponto."
    },
    {
        nome: "Folhas secas",
        ecoponto: "castanho",
        imagem: "https://media.istockphoto.com/id/625881376/pt/foto/autumn-leaves-after-rain.jpg?s=612x612&w=0&k=20&c=HeCeJ83UKkxV61mIdlbWbw6A0ws78upqsR0j0Pl5EZ4=",
        dica: "Folhas secas são ótimas para compostagem, criando adubo rico em nutrientes."
    },
    {
        nome: "Carregador de telemóvel",
        ecoponto: "vermelho",
        imagem: "https://static.fnac-static.com/multimedia/Images/PT/NR/0d/80/55/5603341/1540-1.jpg",
        dica: "Carregadores contêm metais valiosos como cobre e ouro que podem ser recuperados."
    },
    {
        nome: "Escova de dentes",
        ecoponto: "amarelo",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/6/66/Toothbrush_x3_20050716_002.jpg",
        dica: "Escovas de dentes são feitas de plástico, mas as cerdas não são recicláveis."
    },
    {
        nome: "Garrafa de vinho",
        ecoponto: "verde",
        imagem: "https://proxy.organicadigital.com/img-d0c37dda8cd5b2e1.png?thumb=701x",
        dica: "Rolhas de cortiça das garrafas de vinho devem ser colocadas no ecoponto amarelo."
    },
    {
        nome: "Livro escolar",
        ecoponto: "azul",
        imagem: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&fit=crop",
        dica: "Livros em bom estado devem ser doados, mas os danificados podem ser reciclados."
    },
    {
        nome: "Aparas de relva",
        ecoponto: "castanho",
        imagem: "https://st2.depositphotos.com/5107431/47955/i/450/depositphotos_479555464-stock-photo-cut-grass-close-piled-hay.jpg",
        dica: "Relva cortada é resíduo orgânico excelente para compostagem."
    },
    {
        nome: "Telemóvel antigo",
        ecoponto: "vermelho",
        imagem: "https://www.primeit.pt/public/uploads/2022/07/uma-breve-hist%C3%B3ria-dos-telem%C3%B3veis.jpg",
        dica: "Telemóvel contém metais preciosos como ouro, prata e paládio que podem ser recuperados."
    },

    // Fase 4 - Resíduos avançados
    {
        nome: "Embalagem de manteiga",
        ecoponto: "amarelo",
        imagem: "https://images.ctfassets.net/6bg4cvlpvhc1/79WFH26xFXstRfzrin30VG/965c48f1fc171c8266477251acf6d93a/embalagem_manteiga_1405x680.jpg",
        dica: "Embalagens de plástico para alimentos gordurosos devem ser bem lavadas antes de reciclar."
    },
    {
        nome: "Frasco de perfume",
        ecoponto: "verde",
        imagem: "https://images.tcdn.com.br/img/img_prod/1161654/frasco_vidro_quadrado_100ml_recrave_15mm_com_valvula_easy_lock_15063_1_cbca0aa338fdea2febe592c20f37fc0a.jpg",
        dica: "Frascos de perfume são de vidro, mas os pulverizadores são metal e plástico."
    },
    {
        nome: "Caderno usado",
        ecoponto: "azul",
        imagem: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2024/12/17/gettyimages-2177133455-t81tiyt4arfq.jpg",
        dica: "Cadernos com espiral metálica devem ter essa parte removida antes de reciclar."
    },
    {
        nome: "Borras de chá",
        ecoponto: "castanho",
        imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc-8GOhIM8w5TJZP2X-Lgifb-zaVICGl4xa5M2-vgVIGz9mjvDUhckT4V6lWMXEJUTzHE6svP8l1CNuAdkmGWY6pzomqSd-JQLF2aXskS59DkQfMxM-Vahyphenhyphen66JtUghJ9G0r5c1zgS1vhu0/s1600/borra-de-cafe.jpg",
        dica: "Sacos de chá de plástico não são compostáveis, apenas os de papel."
    },
    {
        nome: "Rádio antigo",
        ecoponto: "vermelho",
        imagem: "https://media.istockphoto.com/id/472137701/pt/foto/r%C3%A1dio-antigo.jpg?s=612x612&w=0&k=20&c=Y-QuqiNyE_MsoAk5h0Gxdco6mtpOvFHSahcT4qweY7w=",
        dica: "Equipamentos eletrónicos contêm substâncias perigosas como chumbo e mercúrio."
    },
    {
        nome: "Copos de plástico",
        ecoponto: "amarelo",
        imagem: "https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dwd553ef66/images/col/747/7473690-cima.jpg?sw=2000&sh=2000",
        dica: "Copos de plástico descartáveis devem ser reciclados, mas é melhor usar copos reutilizáveis."
    },
    {
        nome: "Vidro de aquário",
        ecoponto: "verde",
        imagem: "https://static.wixstatic.com/media/bc45a0_2d9181cedb0b459295c9fcd1a8eb17de~mv2.jpg/v1/fill/w_480,h_294,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bc45a0_2d9181cedb0b459295c9fcd1a8eb17de~mv2.jpg",
        dica: "Vidro de aquário é considerado vidro especial; em pequenas quantidades pode ir para o vidrão, mas atenção ao peso e espessura."
    },
    {
        nome: "Saco de papel",
        ecoponto: "azul",
        imagem: "https://100metros.pt/wp-content/uploads/2021/06/Saco-de-Papel-com-Asa-Retorcida-1.jpg",
        dica: "Sacos de papel podem ser reciclados até 7 vezes antes de as fibras se degradarem."
    },
    {
        nome: "Restos de pão",
        ecoponto: "castanho",
        imagem: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&fit=crop",
        dica: "Pão pode ser compostado, mas também pode ser reaproveitado para fazer torradas ou pudim."
    },
    {
        nome: "Aspirador avariado",
        ecoponto: "vermelho",
        imagem: "https://ireland.apollo.olxcdn.com/v1/files/hyb527lfccid2-PT/image",
        dica: "Eletrodomésticos grandes têm componentes valiosos que podem ser recuperados e reutilizados."
    },

    // Fase 5 - Resíduos complexos
    {
        nome: "Embalagem de batatas fritas",
        ecoponto: "amarelo",
        imagem: "https://www.ideiapack-online.pt/WebRoot/epagesUK/Shops/960329864/6890/7F2F/AE67/D4A9/6CC9/0A0C/05B9/6FAA/Image_20230104_185615.png",
        dica: "Embalagens metalizadas de snacks são recicláveis."
    },
    {
        nome: "Espelho",
        ecoponto: "verde",
        imagem: "https://moveistore.com/wp-content/uploads/2022/09/Espelho-Alto-New-Royal-1274.jpg",
        dica: "Espelhos não devem ser colocados no vidrão porque têm camada refletora que interfere na reciclagem."
    },
    {
        nome: "Caixa de pizza",
        ecoponto: "azul",
        imagem: "https://pack-go.pt/wp-content/uploads/2021/08/Caixa-Pizza-aberta-600x600.jpg",
        dica: "Caixas de pizza gordurosas não são recicláveis, apenas as partes limpas."
    },
    {
        nome: "Casca de batata",
        ecoponto: "castanho",
        imagem: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&fit=crop",
        dica: "Cascas de batata são excelentes para compostagem, mas também podem ser usadas para fazer chips."
    },
    {
        nome: "Computador portátil",
        ecoponto: "vermelho",
        imagem: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&fit=crop",
        dica: "Computadores contêm metais preciosos e componentes que podem ser reutilizados."
    },
    {
        nome: "Tubo de pasta de dentes",
        ecoponto: "amarelo",
        imagem: "https://www.crea-al.org.br/app/uploads/2021/11/tubodepastadedentevazioblogdaengenharia.jpg",
        dica: "Tubos de pasta de dentes são feitos de plástico e metal."
    },
    {
        nome: "Garrafa de cerveja",
        ecoponto: "verde",
        imagem: "https://browin.pt/static/images/500/garrafa-para-cerveja-0-5-l-pacote-de-8-unidades-631437_a.webp",
        dica: "Garrafas de cerveja retornáveis podem ser reutilizadas até 50 vezes antes de serem recicladas."
    },
    {
        nome: "Rolo de papel de cozinha",
        ecoponto: "azul",
        imagem: "https://greensavers.sapo.pt/wp-content/uploads/2020/06/papel_cozinha.jpg",
        dica: "Rolos de papel de cozinha são feitos de cartão e são totalmente recicláveis."
    },
    {
        nome: "Restos de peixe",
        ecoponto: "castanho",
        imagem: "https://img.freepik.com/fotos-gratis/restos-de-peixes-cozidos-em-um-prato-branco_23-2148764772.jpg",
        dica: "Restos de peixe são orgânicos, mas podem atrair animais se não forem bem compostados."
    },
    {
        nome: "Máquina fotográfica",
        ecoponto: "vermelho",
        imagem: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=400&fit=crop",
        dica: "Máquinas fotográficas contêm componentes eletrónicos complexos que devem ser reciclados corretamente."
    },
    {
        nome: "Embalagem de biscoito",
        ecoponto: "amarelo",
        imagem: "https://saborbrasil.pt/wp-content/uploads/2019/08/Biscoito-Recheado-Bono-Sabor-Doce-de-Leite-Embalagem-90g.png",
        dica: "Embalagens de bolachas são feitas de plástico metalizado e são recicláveis."
    },
    {
        nome: "Jarra de vidro",
        ecoponto: "verde",
        imagem: "https://ocapi.nadir.com.br/on/demandware.static/-/Sites-nadir-main-catalog/default/dw164a16d7/nadir/zoom/54140100499091_a_1000px.webp",
        dica: "Jarras de vidro partidas devem ser embrulhadas em papel antes de serem deitadas fora para evitar acidentes."
    },
    {
        nome: "Fatura em papel",
        ecoponto: "azul",
        imagem: "https://static.vecteezy.com/ti/vetor-gratis/p1/15485697-recibo-de-caixa-fatura-de-papel-conjunto-de-fatura-de-compra-gratis-vetor.jpg",
        dica: "Papel das faturas é reciclável, mas considere optar por faturas eletrónicas para poupar papel."
    }
];

// ===== VARIÁVEIS GLOBAIS DO JOGO =====
let pontuacao = 0;
let poluicao = 0;
let faseAtual = 1;
let residuoAtual = null;
let jogoAtivo = false;
let residuosClassificados = 0;
let acertos = 0;
let erros = 0;
let somLigado = true;
let jogoSalvo = null;

// ===== SISTEMA PARA EVITAR REPETIÇÃO =====
let residuosUsadosNaFase = new Set(); // Índices dos resíduos usados na fase atual
let todosResiduosUsados = new Set(); // Todos os resíduos usados no jogo todo
let contadorResiduosFase = 0; // Contador de resíduos mostrados na fase atual

// ===== ELEMENTOS DO DOM =====
// Apresentação
const apresentacaoSection = document.getElementById('apresentacao');
const iniciarJogoBtn = document.getElementById('iniciarJogoBtn');
const continuarJogoBtn = document.getElementById('continuarJogoBtn');

// Jogo
const jogoSection = document.getElementById('jogo');
const residuoNome = document.getElementById('residuoNome');
const residuoImagem = document.getElementById('residuoImagem');
const residuoDica = document.getElementById('residuoDica');
const pontuacaoElement = document.getElementById('pontuacao');
const residuosClassificadosElement = document.getElementById('residuosClassificados');
const precisaoElement = document.getElementById('precisao');
const poluicaoPercentagem = document.getElementById('poluicaoPercentagem');
const poluicaoBar = document.getElementById('poluicaoBar');
const poluicaoStatus = document.getElementById('poluicaoStatus');
const pontuacaoAtual = document.getElementById('pontuacaoAtual');
const progressoPontuacao = document.getElementById('progressoPontuacao');
const poluicaoAtual = document.getElementById('poluicaoAtual');
const progressoPoluicao = document.getElementById('progressoPoluicao');
const feedbackText = document.getElementById('feedbackText');
const proximoResiduoBtn = document.getElementById('proximoResiduoBtn');
const reiniciarJogoBtn = document.getElementById('reiniciarJogoBtn');
const faseAtualElement = document.getElementById('faseAtual');
const faseProgresso = document.getElementById('faseProgresso');
const faseTexto = document.getElementById('faseTexto');
const metaPontuacao = document.getElementById('metaPontuacao');
const metaPoluicao = document.getElementById('metaPoluicao');

// Controlos
const homeBtn = document.getElementById('homeBtn');
const somBtn = document.getElementById('somBtn');
const somBtnJogo = document.getElementById('somBtnJogo');

// Modais
const modalVoltar = document.getElementById('modalVoltar');
const modalSalvar = document.getElementById('modalSalvar');
const modalNaoSalvar = document.getElementById('modalNaoSalvar');
const modalCancelar = document.getElementById('modalCancelar');
const modalContinuar = document.getElementById('modalContinuar');
const modalContinuarSim = document.getElementById('modalContinuarSim');
const modalContinuarNao = document.getElementById('modalContinuarNao');

// Mensagens
const mensagemFinal = document.getElementById('mensagemFinal');
const mensagemTitulo = document.getElementById('mensagemTitulo');
const mensagemTexto = document.getElementById('mensagemTexto');
const pontuacaoFinal = document.getElementById('pontuacaoFinal');
const faseFinal = document.getElementById('faseFinal');
const residuosFinal = document.getElementById('residuosFinal');
const jogarNovamenteBtn = document.getElementById('jogarNovamenteBtn');

const mensagemFase = document.getElementById('mensagemFase');
const mensagemFaseTitulo = document.getElementById('mensagemFaseTitulo');
const mensagemFaseTexto = document.getElementById('mensagemFaseTexto');
const pontuacaoFase = document.getElementById('pontuacaoFase');
const poluicaoFase = document.getElementById('poluicaoFase');
const precisaoFase = document.getElementById('precisaoFase');
const proximaFaseBtn = document.getElementById('proximaFaseBtn');

// ===== SISTEMA DE SONS =====
class SistemaSom {
    constructor() {
        this.audioContext = null;
        this.somLigado = true;
        this.inicializar();
    }

    inicializar() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log("Web Audio API não suportada neste navegador");
            this.somLigado = false;
        }
    }

    tocarSom(tipo) {
        if (!this.somLigado || !this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        switch(tipo) {
            case 'acerto':
                oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + 0.3);
                break;
                
            case 'erro':
                oscillator.frequency.setValueAtTime(300, this.audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + 0.5);
                break;
                
            case 'clique':
                oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + 0.1);
                break;
                
            case 'vitoria':
                // Sequência de notas para vitória
                const notas = [523.25, 659.25, 783.99, 1046.50];
                let time = this.audioContext.currentTime;
                
                notas.forEach((freq, i) => {
                    const osc = this.audioContext.createOscillator();
                    const gain = this.audioContext.createGain();
                    osc.connect(gain);
                    gain.connect(this.audioContext.destination);
                    osc.frequency.setValueAtTime(freq, time);
                    gain.gain.setValueAtTime(0.15, time);
                    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);
                    osc.start(time);
                    osc.stop(time + 0.15);
                    time += 0.15;
                });
                break;
                
            case 'conclusao':
                // Som para conclusão de fase
                oscillator.frequency.setValueAtTime(523.25, this.audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.15, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.8);
                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + 0.8);
                break;
        }
    }

    alternarSom() {
        this.somLigado = !this.somLigado;
        return this.somLigado;
    }
}

const sistemaSom = new SistemaSom();

// ===== FUNÇÕES DO JOGO =====

/**
 * Inicializa o jogo verificando se há progresso salvo
 */
function inicializarJogo() {
    verificarJogoSalvo();
    atualizarInterfaceSom();
}

/**
 * Verifica se existe um jogo salvo no localStorage
 */
function verificarJogoSalvo() {
    const salvo = localStorage.getItem('cidadeSustentavel');
    if (salvo) {
        jogoSalvo = JSON.parse(salvo);
        continuarJogoBtn.style.display = 'inline-flex';
    } else {
        continuarJogoBtn.style.display = 'none';
    }
}

/**
 * Reinicia o sistema de controle de repetição para uma nova fase
 */
function reiniciarControleRepeticao() {
    residuosUsadosNaFase.clear();
    contadorResiduosFase = 0;
}

/**
 * Inicia um novo jogo
 */
function iniciarNovoJogo() {
    apresentacaoSection.style.display = 'none';
    jogoSection.style.display = 'block';
    jogoAtivo = true;
    
    // Reinicia todas as variáveis do jogo
    pontuacao = 0;
    poluicao = 0;
    faseAtual = 1;
    residuosClassificados = 0;
    acertos = 0;
    erros = 0;
    // Reinicia o controle de repetição
    reiniciarControleRepeticao();
    todosResiduosUsados.clear();
    
    // Atualiza a interface
    atualizarInterface();
    atualizarFase();
    
    // Seleciona o primeiro resíduo
    selecionarProximoResiduo();
    
    // Ativa os botões dos ecopontos
    ativarBotoesEcopontos();
    
    // Toca som de início
    sistemaSom.tocarSom('clique');
}

/**
 * Continua um jogo salvo
 */
function continuarJogoSalvo() {
    if (!jogoSalvo) return;
    
    apresentacaoSection.style.display = 'none';
    jogoSection.style.display = 'block';
    jogoAtivo = true;
    
    // Restaura o estado do jogo salvo
    pontuacao = jogoSalvo.pontuacao || 0;
    poluicao = jogoSalvo.poluicao || 0;
    faseAtual = jogoSalvo.faseAtual || 1;
    residuosClassificados = jogoSalvo.residuosClassificados || 0;
    acertos = jogoSalvo.acertos || 0;
    erros = jogoSalvo.erros || 0;
    
    // Atualiza a interface
    atualizarInterface();
    atualizarFase();
    
    // Seleciona um novo resíduo
    selecionarProximoResiduo();
    
    // Ativa os botões dos ecopontos
    ativarBotoesEcopontos();
    
    // Toca som de início
    sistemaSom.tocarSom('clique');
}

/**
 * Atualiza as informações da fase atual
 */
function atualizarFase() {
    const fase = FASES[faseAtual - 1];
    
    faseAtualElement.textContent = faseAtual;
    metaPontuacao.textContent = fase.metaPontos;
    metaPoluicao.textContent = `${fase.metaPoluicao}%`;
    
    // Atualiza progresso da fase
    const progresso = Math.min(100, (pontuacao / fase.metaPontos) * 100);
    faseProgresso.style.width = `${progresso}%`;
    faseTexto.textContent = `${pontuacao}/${fase.metaPontos} pontos`;
}

/**
 * Seleciona um novo resíduo sem repetir na fase atual
 */
function selecionarProximoResiduo() {
    // Se já mostramos muitos resíduos nesta fase, permitimos repetição
    const fase = FASES[faseAtual - 1];
    const maxResiduosAntesRepetir = Math.min(fase.residuosPorFase, residuos.length);
    
    if (contadorResiduosFase >= maxResiduosAntesRepetir) {
        // Permite repetição, mas tenta escolher um que não foi usado recentemente
        residuosUsadosNaFase.clear();
        contadorResiduosFase = 0;
    }
    
    // Filtra resíduos que não foram usados nesta fase
    let residuosDisponiveis = residuos.filter((r, index) => !residuosUsadosNaFase.has(index));
    
    // Se não houver resíduos disponíveis, usa todos
    if (residuosDisponiveis.length === 0) {
        residuosDisponiveis = [...residuos];
        residuosUsadosNaFase.clear();
    }
    
    // Seleciona um resíduo aleatório
    const indiceAleatorio = Math.floor(Math.random() * residuosDisponiveis.length);
    residuoAtual = residuosDisponiveis[indiceAleatorio];
    
    // Encontra o índice original
    const indiceOriginal = residuos.findIndex(r => r.nome === residuoAtual.nome);
    
    // Marca como usado
    residuosUsadosNaFase.add(indiceOriginal);
    todosResiduosUsados.add(indiceOriginal);
    contadorResiduosFase++;
    
    // Atualiza a interface com o novo resíduo
    residuoNome.textContent = residuoAtual.nome;
    residuoDica.textContent = residuoAtual.dica;
    
    // Limpa a imagem anterior
    residuoImagem.innerHTML = '';
    
    // Cria e adiciona a nova imagem
    const img = document.createElement('img');
    img.src = residuoAtual.imagem;
    img.alt = residuoAtual.nome;
    img.onload = function() {
        // Adiciona uma animação de entrada
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, 50);
    };
    
    // Adiciona fallback para erro de carregamento
    img.onerror = function() {
        img.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"><rect width="400" height="250" fill="%23f5f5f5"/><text x="200" y="125" font-family="Arial" font-size="16" text-anchor="middle" fill="%23999">Imagem não disponível</text></svg>';
    };
    
    residuoImagem.appendChild(img);
    
    // Desativa o botão "Próximo Resíduo" até o jogador fazer uma escolha
    proximoResiduoBtn.disabled = true;
    
    // Reseta o feedback educativo
    feedbackText.textContent = "Selecione o ecoponto correto para este resíduo";
    
    // Remove qualquer destaque anterior dos botões dos ecopontos
    removerDestaqueEcopontos();
}

/**
 * Ativa os event listeners para os botões dos ecopontos
 */
function ativarBotoesEcopontos() {
    // Remove event listeners existentes
    const botoesEcopontos = document.querySelectorAll('.ecoponto-btn');
    botoesEcopontos.forEach(botao => {
        const novoBotao = botao.cloneNode(true);
        botao.parentNode.replaceChild(novoBotao, botao);
    });
    
    // Adiciona novos event listeners
    document.querySelectorAll('.ecoponto-btn').forEach(botao => {
        botao.addEventListener('click', function() {
            if (!jogoAtivo || proximoResiduoBtn.disabled === false) return;
            
            sistemaSom.tocarSom('clique');
            const ecopontoSelecionado = this.getAttribute('data-ecoponto');
            verificarResposta(ecopontoSelecionado);
        });
    });
}

/**
 * Remove o destaque dos botões dos ecopontos
 */
function removerDestaqueEcopontos() {
    document.querySelectorAll('.ecoponto-btn').forEach(botao => {
        botao.style.transform = 'scale(1)';
        botao.style.boxShadow = 'var(--sombra-leve)';
        botao.style.opacity = '1';
        botao.style.border = 'none';
        botao.style.animation = '';
    });
}

/**
 * Verifica se a resposta do jogador está correta
 * @param {string} ecopontoSelecionado - O ecoponto selecionado pelo jogador
 */
function verificarResposta(ecopontoSelecionado) {
    if (!residuoAtual) return;
    
    const correto = ecopontoSelecionado === residuoAtual.ecoponto;
    const botaoSelecionado = document.querySelector(`.ecoponto-btn[data-ecoponto="${ecopontoSelecionado}"]`);
    const botaoCorreto = document.querySelector(`.ecoponto-btn[data-ecoponto="${residuoAtual.ecoponto}"]`);
    
    // Destaca os botões
    if (correto) {
        // Resposta correta
        botaoSelecionado.style.animation = 'pulseVerde 0.5s';
        sistemaSom.tocarSom('acerto');
        
        // Atualiza pontuação e estatísticas
        acertos++;
        pontuacao += calcularPontuacaoResiduo();
        poluicao = Math.max(0, poluicao - 2); // Reduz a poluição
        
        // Feedback educativo para resposta correta
        const feedbacksCorretos = [
            "Excelente! Ao reciclar corretamente, reduzimos a poluição e poupamos recursos naturais.",
            "Muito bem! A reciclagem economiza energia e reduz as emissões de gases de efeito estufa.",
            "Correto! Cada material reciclado significa menos extração de recursos naturais.",
            "Perfeito! A reciclagem ajuda a reduzir a quantidade de resíduos em aterros sanitários.",
            "Ótima escolha! A reciclagem contribui para uma economia circular mais sustentável."
        ];
        const feedbackAleatorio = feedbacksCorretos[Math.floor(Math.random() * feedbacksCorretos.length)];
        feedbackText.textContent = feedbackAleatorio;
    } else {
        // Resposta incorreta
        botaoSelecionado.style.animation = 'pulseVermelho 0.5s';
        botaoCorreto.style.animation = 'pulseVerde 0.5s';
        sistemaSom.tocarSom('erro');
        
        // Atualiza estatísticas
        erros++;
        poluicao += calcularPenalidadePoluicao(); // Aumenta a poluição
        
        // Feedback educativo para resposta incorreta
        feedbackText.textContent = `Não é correto. ${residuoAtual.nome} deve ser colocado no ecoponto ${traduzirEcoponto(residuoAtual.ecoponto)}. ${residuoAtual.dica}`;
    }
    
    // Atualiza a contagem de resíduos classificados
    residuosClassificados++;
    
    // Atualiza a interface
    atualizarInterface();
    
    // Ativa o botão "Próximo Resíduo"
    proximoResiduoBtn.disabled = false;
    
    // Verifica se a fase foi concluída
    verificarConclusaoFase();
}

/**
 * Calcula a pontuação para um resíduo com base na fase atual
 * @returns {number} A pontuação a ser atribuída
 */
function calcularPontuacaoResiduo() {
    const fase = FASES[faseAtual - 1];
    const pontuacaoBase = 10;
    const fatorDificuldade = fase.velocidade;
    
    return Math.round(pontuacaoBase / fatorDificuldade);
}

/**
 * Calcula a penalidade de poluição com base na fase atual
 * @returns {number} O aumento de poluição
 */
function calcularPenalidadePoluicao() {
    const fase = FASES[faseAtual - 1];
    const penalidadeBase = 5;
    const fatorDificuldade = fase.velocidade;
    
    return Math.round(penalidadeBase * fatorDificuldade);
}

/**
 * Traduz o código do ecoponto para o nome em português
 * @param {string} ecoponto - Código do ecoponto
 * @returns {string} Nome do ecoponto em português
 */
function traduzirEcoponto(ecoponto) {
    const traducoes = {
        'amarelo': 'Amarelo',
        'verde': 'Verde',
        'azul': 'Azul',
        'castanho': 'Castanho',
        'vermelho': 'Vermelho'
    };
    
    return traducoes[ecoponto] || ecoponto;
}

/**
 * Atualiza todos os elementos da interface do jogo
 */
function atualizarInterface() {
    // Atualiza pontuação e estatísticas
    pontuacaoElement.textContent = pontuacao;
    residuosClassificadosElement.textContent = residuosClassificados;
    
    // Calcula e atualiza a precisão
    const precisao = residuosClassificados > 0 ? Math.round((acertos / residuosClassificados) * 100) : 100;
    precisaoElement.textContent = `${precisao}%`;
    
    // Atualiza a poluição (garante que está entre 0 e 100)
    poluicao = Math.max(0, Math.min(poluicao, 100));
    poluicaoPercentagem.textContent = `${poluicao}%`;
    poluicaoBar.style.width = `${poluicao}%`;
    
    // Atualiza o estado da cidade com base no nível de poluição
    atualizarEstadoCidade();
    
    // Atualiza as metas
    atualizarMetas();
}

/**
 * Atualiza o estado da cidade com base no nível de poluição
 */
function atualizarEstadoCidade() {
    let estado, cor, icone, mensagem;
    
    if (poluicao < 25) {
        estado = "limpa";
        cor = "var(--poluicao-limpa)";
        icone = "fas fa-leaf";
        mensagem = "Cidade Limpa";
    } else if (poluicao < 50) {
        estado = "moderada";
        cor = "var(--poluicao-moderada)";
        icone = "fas fa-cloud-sun";
        mensagem = "Cidade Moderada";
    } else if (poluicao < 75) {
        estado = "poluída";
        cor = "var(--poluicao-poluida)";
        icone = "fas fa-smog";
        mensagem = "Cidade Poluída";
    } else {
        estado = "crítica";
        cor = "var(--poluicao-critica)";
        icone = "fas fa-skull-crossbones";
        mensagem = "Cidade Crítica";
    }
    
    // Atualiza a cor do texto e ícone
    poluicaoPercentagem.style.color = cor;
    poluicaoStatus.style.color = cor;
    poluicaoStatus.innerHTML = `<i class="${icone}"></i> ${mensagem}`;
    
    // Atualiza a cor da borda do container de poluição
    document.querySelector('.poluicao-container').style.borderLeftColor = cor;
}

/**
 * Atualiza a visualização das metas do jogo
 */
function atualizarMetas() {
    const fase = FASES[faseAtual - 1];
    
    // Atualiza a pontuação atual
    pontuacaoAtual.textContent = pontuacao;
    const progressoPontuacaoPercent = Math.min(100, (pontuacao / fase.metaPontos) * 100);
    progressoPontuacao.style.width = `${progressoPontuacaoPercent}%`;
    
    // Atualiza a poluição atual
    poluicaoAtual.textContent = `${poluicao}%`;
    const progressoPoluicaoPercent = Math.min(100, (poluicao / fase.metaPoluicao) * 100);
    progressoPoluicao.style.width = `${progressoPoluicaoPercent}%`;
    
    // Altera a cor da barra de poluição com base na meta
    if (poluicao < fase.metaPoluicao) {
        progressoPoluicao.style.background = 'linear-gradient(to right, var(--cor-terciaria), var(--cor-primaria))';
    } else {
        progressoPoluicao.style.background = 'linear-gradient(to right, #FF9800, #F44336)';
    }
}

/**
 * Verifica se a fase atual foi concluída
 */
function verificarConclusaoFase() {
    const fase = FASES[faseAtual - 1];
    
    // Condições para conclusão da fase
    const faseConcluida = pontuacao >= fase.metaPontos && poluicao <= fase.metaPoluicao;
    const faseFalhada = poluicao >= 100;
    
    if (faseConcluida) {
        // Fase concluída com sucesso
        jogoAtivo = false;
        mostrarMensagemFase(true);
    } else if (faseFalhada) {
        // Fase falhada - poluição muito alta
        jogoAtivo = false;
        mostrarMensagemFase(false);
    }
}

/**
 * Mostra a mensagem de conclusão de fase
 * @param {boolean} sucesso - Indica se a fase foi concluída com sucesso
 */
function mostrarMensagemFase(sucesso) {
    const fase = FASES[faseAtual - 1];
    const precisao = residuosClassificados > 0 ? Math.round((acertos / residuosClassificados) * 100) : 100;
    
    if (sucesso) {
        mensagemFaseTitulo.textContent = `Fase ${faseAtual} Concluída!`;
        mensagemFaseTexto.textContent = faseAtual < FASES.length 
            ? `Parabéns! Conseguiste completar a fase ${faseAtual}. Prepara-te para a próxima fase!` 
            : `Parabéns! Completaste todas as fases do jogo. A cidade está agora sustentável!`;
        
        sistemaSom.tocarSom('conclusao');
    } else {
        mensagemFaseTitulo.textContent = `Fase ${faseAtual} Falhada`;
        mensagemFaseTexto.textContent = "A poluição da cidade atingiu níveis muito elevados. Tenta novamente com mais cuidado!";
        
        sistemaSom.tocarSom('erro');
    }
    
    // Atualiza os resultados da fase
    pontuacaoFase.textContent = pontuacao;
    poluicaoFase.textContent = `${poluicao}%`;
    precisaoFase.textContent = `${precisao}%`;
    
    // Configura o botão da próxima fase
    if (sucesso && faseAtual < FASES.length) {
        proximaFaseBtn.innerHTML = '<i class="fas fa-forward"></i> Próxima Fase';
        proximaFaseBtn.onclick = avancarParaProximaFase;
    } else if (sucesso) {
        proximaFaseBtn.innerHTML = '<i class="fas fa-trophy"></i> Ver Resultados Finais';
        proximaFaseBtn.onclick = mostrarResultadosFinais;
    } else {
        proximaFaseBtn.innerHTML = '<i class="fas fa-redo"></i> Tentar Novamente';
        proximaFaseBtn.onclick = reiniciarFase;
    }
    
    // Mostra a mensagem
    mensagemFase.style.display = 'flex';
}

/**
 * Avança para a próxima fase
 */
function avancarParaProximaFase() {
    faseAtual++;
    // Reinicia o controle de repetição para a nova fase
    reiniciarControleRepeticao();
    
    jogoAtivo = true;
    
    // Atualiza a interface
    atualizarFase();
    atualizarInterface();
    
    // Seleciona um novo resíduo
    selecionarProximoResiduo();
    
    // Fecha a mensagem
    mensagemFase.style.display = 'none';
    
    sistemaSom.tocarSom('clique');
}

/**
 * Reinicia a fase atual
 */
function reiniciarFase() {
    jogoAtivo = true;
    
    // Mantém a fase atual, mas reinicia pontuação e poluição da fase
    pontuacao = 0;
    poluicao = 0;
    residuosClassificados = 0;
    acertos = 0;
    erros = 0;
    // Reinicia o controle de repetição
    reiniciarControleRepeticao();
    
    // Atualiza a interface
    atualizarInterface();
    atualizarFase();
    
    // Seleciona um novo resíduo
    selecionarProximoResiduo();
    
    // Fecha a mensagem
    mensagemFase.style.display = 'none';
    
    sistemaSom.tocarSom('clique');
}

/**
 * Mostra os resultados finais do jogo
 */
function mostrarResultadosFinais() {
    const precisao = residuosClassificados > 0 ? Math.round((acertos / residuosClassificados) * 100) : 100;
    
    mensagemTitulo.textContent = "Jogo Concluído!";
    mensagemTexto.textContent = "Parabéns! Completaste todas as fases do Cidade Sustentável. A tua contribuição para um ambiente mais saudável fez a diferença!";
    
    pontuacaoFinal.textContent = pontuacao;
    faseFinal.textContent = faseAtual;
    residuosFinal.textContent = residuosClassificados;
    
    mensagemFase.style.display = 'none';
    mensagemFinal.style.display = 'flex';
    
    sistemaSom.tocarSom('vitoria');
}

/**
 * Salva o progresso atual do jogo
 */
function salvarProgresso() {
    const progresso = {
        pontuacao,
        poluicao,
        faseAtual,
        residuosClassificados,
        acertos,
        erros,
        timestamp: new Date().getTime()
    };
    
    localStorage.setItem('cidadeSustentavel', JSON.stringify(progresso));
    jogoSalvo = progresso;
    
    // Mostra feedback visual
    const feedback = document.createElement('div');
    feedback.className = 'feedback-salvo';
    feedback.innerHTML = '<i class="fas fa-save"></i> Progresso salvo com sucesso!';
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--cor-primaria);
        color: white;
        padding: 15px 20px;
        border-radius: var(--borda-arredondada-pequena);
        box-shadow: var(--sombra-media);
        z-index: 3000;
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2s forwards;
    `;
    
    document.body.appendChild(feedback);
    setTimeout(() => feedback.remove(), 2300);
}

/**
 * Exclui o jogo salvo
 */
function excluirJogoSalvo() {
    localStorage.removeItem('cidadeSustentavel');
    jogoSalvo = null;
    continuarJogoBtn.style.display = 'none';
}

/**
 * Alterna o estado do som
 */
function alternarSom() {
    somLigado = sistemaSom.alternarSom();
    atualizarInterfaceSom();
}

/**
 * Atualiza a interface dos botões de som
 */
function atualizarInterfaceSom() {
    const icone = somLigado ? 'fa-volume-up' : 'fa-volume-mute';
    const titulo = somLigado ? 'Desligar som' : 'Ligar som';
    const classe = somLigado ? '' : 'mudo';
    
    somBtn.innerHTML = `<i class="fas ${icone}"></i>`;
    somBtn.title = titulo;
    somBtn.className = `som-btn ${classe}`;
    
    somBtnJogo.innerHTML = `<i class="fas ${icone}"></i>`;
    somBtnJogo.title = titulo;
    somBtnJogo.className = `som-btn ${classe}`;
}

// ===== EVENT LISTENERS =====

// Botão para iniciar novo jogo
iniciarJogoBtn.addEventListener('click', iniciarNovoJogo);

// Botão para continuar jogo salvo
continuarJogoBtn.addEventListener('click', function() {
    if (jogoSalvo) {
        modalContinuar.style.display = 'flex';
        sistemaSom.tocarSom('clique');
    }
});

// Botão para próximo resíduo
proximoResiduoBtn.addEventListener('click', function() {
    if (!jogoAtivo) return;
    selecionarProximoResiduo();
    sistemaSom.tocarSom('clique');
});

// Botão para reiniciar fase
reiniciarJogoBtn.addEventListener('click', reiniciarFase);

// Botão para voltar ao menu
homeBtn.addEventListener('click', function() {
    modalVoltar.style.display = 'flex';
    sistemaSom.tocarSom('clique');
});

// Botões de som
somBtn.addEventListener('click', alternarSom);
somBtnJogo.addEventListener('click', alternarSom);

// Modal de voltar ao menu
modalSalvar.addEventListener('click', function() {
    salvarProgresso();
    modalVoltar.style.display = 'none';
    jogoSection.style.display = 'none';
    apresentacaoSection.style.display = 'block';
    verificarJogoSalvo();
    sistemaSom.tocarSom('clique');
});

modalNaoSalvar.addEventListener('click', function() {
    excluirJogoSalvo();
    modalVoltar.style.display = 'none';
    jogoSection.style.display = 'none';
    apresentacaoSection.style.display = 'block';
    sistemaSom.tocarSom('clique');
});

modalCancelar.addEventListener('click', function() {
    modalVoltar.style.display = 'none';
    sistemaSom.tocarSom('clique');
});

// Modal de continuar jogo
modalContinuarSim.addEventListener('click', function() {
    modalContinuar.style.display = 'none';
    continuarJogoSalvo();
    sistemaSom.tocarSom('clique');
});

modalContinuarNao.addEventListener('click', function() {
    excluirJogoSalvo();
    modalContinuar.style.display = 'none';
    iniciarNovoJogo();
    sistemaSom.tocarSom('clique');
});

// Botão para jogar novamente (na mensagem final)
jogarNovamenteBtn.addEventListener('click', function() {
    mensagemFinal.style.display = 'none';
    iniciarNovoJogo();
    sistemaSom.tocarSom('clique');
});

// Fechar modais ao clicar fora
window.addEventListener('click', function(event) {
    if (event.target === modalVoltar) {
        modalVoltar.style.display = 'none';
    }
    if (event.target === modalContinuar) {
        modalContinuar.style.display = 'none';
    }
    if (event.target === mensagemFinal) {
        mensagemFinal.style.display = 'none';
    }
    if (event.target === mensagemFase) {
        mensagemFase.style.display = 'none';
    }
});

// ===== ANIMAÇÕES CSS DINÂMICAS =====
// Adiciona animações CSS dinâmicas para feedback visual
const style = document.createElement('style');
style.textContent = `
    @keyframes pulseVerde {
        0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
        70% { box-shadow: 0 0 0 15px rgba(76, 175, 80, 0); }
        100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
    }
    
    @keyframes pulseVermelho {
        0% { box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.7); }
        70% { box-shadow: 0 0 0 15px rgba(244, 67, 54, 0); }
        100% { box-shadow: 0 0 0 0 rgba(244, 67, 54, 0); }
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===== INICIALIZAÇÃO =====
// Inicializa o jogo quando a página carrega
window.addEventListener('DOMContentLoaded', function() {
    inicializarJogo();
    ativarBotoesEcopontos();
    atualizarInterface();
    
    console.log('Jogo "Cidade Sustentável" inicializado com sucesso!');
    console.log(`Base de dados com ${residuos.length} resíduos carregada.`);
    console.log(`Jogo dividido em ${FASES.length} fases progressivas.`);
});