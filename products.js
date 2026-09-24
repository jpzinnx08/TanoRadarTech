// products.js
// Configure aqui os produtos exibidos no site.
// Para adicionar, remover ou editar um produto, basta alterar este array.
//
// Campos de cada produto:
// - name: nome do produto exibido no card
// - image: caminho da imagem dentro da pasta images/ — troque facilmente por uma imagem melhor
// - description: breve descrição do produto (evite afirmar que a imagem é exatamente o modelo)
// - affiliateLink: link de afiliado (Mercado Livre)

const products = [
    {
        name: "Organizador de Fios e Cabos Espiral (10m)",
        image: "images/produto-4.webp",
        description: "Organizador espiral em formato de mangueira, ideal para agrupar e proteger cabos de computador, monitores e periféricos, deixando a fiação da mesa muito mais discreta.",
        affiliateLink: "https://meli.la/24dHAcS"
    },
    {
        name: "Suporte para Controle e Headset",
        image: "images/produto-2.webp",
        description: "Suporte de mesa com design compacto para acomodar controle e headset em um só lugar, liberando espaço e mantendo o setup gamer mais organizado.",
        affiliateLink: "https://meli.la/1eFFvC7"
    },
    {
        name: "Suporte de Mesa para Celular",
        image: "images/produto-1.webp",
        description: "Suporte ajustável para celular ou tablet, com base antiderrapante e ângulo regulável, útil para videochamadas, estudos ou acompanhar vídeos enquanto trabalha.",
        affiliateLink: "https://meli.la/2ZMkiZA"
    },
    {
        name: "Mini Soprador de Ar Portátil",
        image: "images/produto-3.webp",
        description: "Soprador de ar compacto e recarregável via USB-C, prático para remover poeira de teclados, gabinetes e outros acessórios do setup.",
        affiliateLink: "https://meli.la/2seJV4G"
    },
    {
        name: "Kit de Limpeza 8 em 1",
        image: "images/produto-5.webp",
        description: "Kit com escovas, microfibra, esponja e chave extratora de teclas, reunindo os itens mais usados para manter teclado, tela e periféricos limpos no dia a dia.",
        affiliateLink: "https://meli.la/29QoZbQ"
    }
];

// Expõe o array para script.js (top-level const não vira propriedade de window automaticamente)
window.products = products;
