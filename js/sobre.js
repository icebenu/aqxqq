window.addEventListener('load', function (windowEvent) {
    var dateBtn = this.document.querySelectorAll('[data-btn-date]');
    var image = this.document.querySelector('[data-image-info]');
    var paragraph = this.document.querySelector(".paragraph-info");
    var spanInfo = this.document.querySelector('.span-info');
    var ciclo = this.document.querySelector('.ciclos-historia');
    var imagesObject = {
        1944: ['./images/historia-1944.png', 'DA ITÁLIA PARA O RIO', 'A nossa história começa com a chegada de Carmelo De Luca ao Rio de Janeiro. Vindo da Itália, seu primeiro trabalho era descarregar frutas de navios na praça XV. No entanto, a cidade cercada por àgua despertou seu interesse por peixes e, em 1945 abriu sua primeira peixaria na Rua 11, do então Mercado Municipal da cidade.', '1'],
        1950: ['./images/timeline-2.jpg', 'PEIXARIAS JAHU', 'O tempo passou rápido e não demorou muito para o Sr. Carmelo, com a ajuda de seus filhos, abrir novas peixarias. O nome Jahu, apelido dado por amigos, identificava os estabelecimentos que, desde já, surpreendiam os clientes com um inovador sistema de entregas.', '2'],
        1960: ['./images/timeline-3.jpg', 'FRIGORÍFICO JAHU CHEGA A SÃO PAULO', 'Em 1966, dois de seus filhos assumem as peixarias do Rio de Janeiro, para que Sr. Carmelo e seus outros dois filhos pudessem expandir os negócios para São Paulo. Assim nasce, em Moema, o Frigorífico Jahu.', '3'],
        1970: ['./images/timeline-4.jpg', 'NOSSA PRIMEIRA INDÚSTRIA', 'O pioneirismo se soma à vontade de crescer expandindo a empresa para o Rio Grande do Sul. É criada a primeira indústria da família, formada pelo barracão de recebimento e armazenagem de pescado, que realizava a distribuição para SP e RJ.', '4'],
        1980: ['./images/timeline-5.jpg', 'EXPANSÃO E EVOLUÇÃO', 'Fomos adquirindo novas áreas até comprarmos o Frigorifico Calombé, em 1986, e nos estabelecermos na atual localidade em Duque de Caxias, Rio de Janeiro. E o desenvolvimento não para por aí. A modernização das instalações e a preocupação com recursos humanos resultaram em maior segurança, melhorias na linha de produção e aquisição de certificados de qualidade. O controle e a excelência em pescado se traduziram no lançamento da nossa marca de produtos Frescatto.', '5'],
        1990: ['./images/timeline-6.jpg', 'MAIS NOVIDADES', 'Em 1997, após expansão industrial e administrativa, realizamos uma evolução das embalagens Frescatto e o lançamento da marca Bouna Pesca. Com um rígido controle de qualidade, da origem à entrega, garantimos uma grande variedade de pescados aos brasileiros.', "6"],
        2014: ['./images/timeline-7.jpg', 'REBRANDING', 'Para comemorar nosso aniversário de 70 anos, revitalizamos nossas marcas! O mundo mudou nas últimas 7 décadas, e a Frescatto Company também. Nasceu a Frescatto Company, nossa nova marca corporativa, e reposicionamos Frescatto e Buona Pesca como marcas de produtos.', "7"],
        2015: ['./images/timeline-8.jpg', 'INAUGURAÇÃO PORTO FRESCATTO', 'Um ano após reposicionar a marca, inauguramos a nossa primeira loja conceito, nossa peixaria moderna: a Porto Frescatto visa estender nossa expertise em pescados diretamente para a mesa do consumidor. Nossa primeira loja fica localizada no Leblon, na Zona Sul carioca, e nossa segunda loja, aberta em 2017, fica localizada na Barra da Tijuca, contando também com um restaurante.', "8"],
        2019: ['./images/timeline-9.jpg', '75 ANOS DE EXCELÊNCIA', 'No ano de despedida de uma década recheada de novidades, comemoramos 75 anos de existência cheios de vitalidade e com a mesma paixão de sempre, mostrando que mesmo sendo uma empresa quase centenária, nos mantemos motivados em inovar e buscar novos meios de levar pescados de qualidade e procedência confiável à mesa do brasileiro.', "9"],
        2020: ['./images/timeline-10.jpg', 'NOVOS VENTOS', 'Demos as boas-vindas à década que se inicia da maneira mais adequada à época em que vivemos: inaugurando nosso serviço de e-commerce e ampliando nossos serviços de venda direta para a cidade de São Paulo.', '10']
    };
    document.querySelectorAll('.title ').forEach(function (item) {
        item.addEventListener('click', function () {
            document.querySelectorAll('.title').forEach(function (element) {
                if (item != element) {
                    element.parentElement.classList.remove('active');
                }
            });
            item.parentElement.classList.toggle('active');
            console.log(item.parentElement);
        });
    });
    dateBtn.forEach(function (element) {

        element.addEventListener('click', function (btn) {
            //Remove classe active dos outroes botoes
            dateBtn.forEach(botao => {
                botao.classList.remove('active');
            });

            //Coloca classe active no botao correto
            const botao = btn.target;
            botao.classList.add('active');


            const b = document.querySelector('.info-historia' );
            const pos = b.getAttribute('pos');

            if( pos !== imagesObject[this.value][3] ){

                if (image.src === "http://" + window.location.host + "/" + imagesObject[this.value][0].substring(3)) {
                    image.src = '';
                    paragraph.innerText = '';
                    return spanInfo.innerText = '';
                }
                image.src = imagesObject[this.value][0];
                paragraph.innerText = imagesObject[this.value][2];
                spanInfo.innerText = imagesObject[this.value][1];
                var width = window.innerWidth;
                // ciclo.style.left = imagesObject[this.value][3];
                b.setAttribute('pos',  imagesObject[this.value][3]  );

            }
        });
    });

    //Starta primeiro valor, click vem antes, pois o valor pos impossiblita click no mesmo elemento
    document.querySelector("button[value='1944']").click();
    document.querySelector('.info-historia').setAttribute('pos','1');

});
