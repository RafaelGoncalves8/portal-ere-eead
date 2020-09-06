<template>
    <div class="content">
        <div class="wrapper">
            <img src="../assets/2.jpeg">
        </div>
        <div class="color"></div>
        <div class="wrapper" id="a-luta">
            <h1>A LUTA</h1>
<p>Estamos vivendo a maior crise sanitária e econômica da  história: 2020 vai ficar marcado pra sempre como o ano em que o mundo parou por causa da pandemia da COVID-19. No Brasil, as Universidades Públicas, tão atacadas durante anos, e inimigas declaradas de Bolsonaro e sua turma, cumprem um papel fundamental ao produzir ciência e desenvolver projetos voltados para a comunidade, como as pesquisas sobre o vírus, para que assim seja produzida uma vacina e a produção de álcool em gel pelos laboratórios dos cursos de química e farmácia.</p>
<p>Só que para Bolsonaro e sua turma, a universidade pública deve acabar da forma que conhecemos e se tornar uma fábrica de diplomas aptos a responder os interesses do mercado e produzir de forma barata mão de obra para atender aos empresários, e nada mais barato que o Ensino à Distância (EAD) ou o Ensino Remoto.</p>
<p>O cenário da pandemia foi perfeito para que esse plano fosse colocado em prática. Por mais que se diga que seja algo temporário, a intenção do MEC é transformar a exceção em regra, para que assim, o governo tenha mais e mais dinheiro para liberar para o sistema financeiro.</p>
<p>Somos contra a implementação do EAD e do Ensino Remoto nas Universidades pois eles significam:</p>
<ul>
   <li>O fim do tripé de ensino, pesquisa e extensão <li>
   <li>Sucateamento da Educação</li>
   <li>Exclusão de estudantes que não tem acesso à equipamentos como computadores e tablets</li>
   <li>Exclusão de estudantes que não tem acesso à internet (lembrando que pacote de acesso às redes sociais não significa acesso à internet)</li>
   <li>Passam a falsa idéia de “retomada” das atividades das Universidades Públicas, ignorando totalmente sua produção científica e seus projetos de extensão</li>
</ul>
<p>Por isso, é mais do que necessária a máxima unidade contra esses ataques, para que se possa garantir a educação de qualidade e o papel social da Universidade Pública. Pensando nisso, nós, estudantes em luta contra o Ensino Remoto e o EAD criamos esse site. Queremos aglutinar o máximo de pessoas em torno dessa luta, de norte à sul do Brasil, para que, no dia 14.07 seja um dia nacional de luta contra essa forma de ataque, seja nas redes, seja nas ruas cumprindo todas as normas da OMS de distanciamento, uso de máscara e álcool em gel para a higiene da mãos e superfícies. </p>
<p>Venha se somar a essa luta, pela garantia da qualidade do ensino e do papel social da Universidade Pública!</p>
        </div>
    </div>
</template>

<style>
.content {
    display: flex;
    flex-direction: column;
}

.color {
    background-color: #D95d39;
    height: 50px;
}

img {
    filter: grayscale(100%);
    min-height: 100px;
}

.wrapper {
    background-color: #DDD;
    min-width: 50%;
}

#a-luta {
    padding: 50px;
    overflow: auto;
}


@media screen and (min-width: 768px) {
.content {
    flex-direction: row;
    width: calc(100% - 200px);
    height: 100%;
}

.color {
    width: 50px;
    height: 100%;
}

#a-luta {
    padding: 50px;
    min-width: 300px;
}
}

</style>
