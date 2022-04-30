# Bitcoin: um sistema de dinheiro eletrônico ponto a ponto

de Satoshi Nakamoto [2008/10/31](/bitcoin.pdf)

<LanguageDropdown/>

## Resumo

Uma versão puramente peer-to-peer de dinheiro eletrônico permitiria que pagamentos online fossem enviados diretamente de uma parte para outra sem passar por uma instituição financeira. As assinaturas digitais fornecem parte da solução, mas os principais benefícios são perdidos se um terceiro confiável ainda for necessário para evitar gastos duplos. Propomos uma solução para o problema do gasto duplo usando uma rede peer-to-peer. A rede marca as transações com hashing em uma cadeia contínua de prova de trabalho baseada em hash, formando um registro que não pode ser alterado sem refazer a prova de trabalho. A cadeia mais longa não serve apenas como prova da sequência de eventos testemunhados, mas prova de que veio do maior pool de potência da CPU. Contanto que a maior parte do poder da CPU seja controlada por nós que não estão cooperando para atacar a rede, eles gerarão a cadeia mais longa e ultrapassarão os invasores. A própria rede requer uma estrutura mínima. As mensagens são transmitidas com base no melhor esforço, e os nós podem sair e se juntar à rede à vontade, aceitando a cadeia de prova de trabalho mais longa como prova do que aconteceu enquanto eles estavam fora.

## Introdução

O comércio na Internet passou a depender quase exclusivamente de instituições financeiras que atuam como terceiros confiáveis ​​para processar pagamentos eletrônicos. Embora o sistema funcione bem o suficiente para a maioria das transações, ele ainda sofre com as fraquezas inerentes ao modelo baseado em confiança. Transações totalmente irreversíveis não são realmente possíveis, uma vez que as instituições financeiras não podem evitar a mediação de disputas. O custo da mediação aumenta os custos de transação, limitando o tamanho mínimo prático da transação e eliminando a possibilidade de pequenas transações casuais, e há um custo mais amplo na perda da capacidade de fazer pagamentos não reversíveis por serviços não reversíveis. Com a possibilidade de reversão, a necessidade de confiança se espalha. Os comerciantes devem ser cautelosos com seus clientes, incomodando-os por mais informações do que eles precisariam. Uma certa porcentagem de fraude é aceita como inevitável. Esses custos e incertezas de pagamento podem ser evitados pessoalmente usando moeda física, mas não existe nenhum mecanismo para fazer pagamentos por um canal de comunicação sem uma parte confiável.

O que é necessário é um sistema de pagamento eletrônico baseado em provas criptográficas em vez de confiança, permitindo que duas partes dispostas façam transações diretamente uma com a outra sem a necessidade de um terceiro confiável. Transações que são computacionalmente impraticáveis ​​para reverter protegeriam os vendedores de fraudes, e mecanismos de caução de rotina poderiam ser facilmente implementados para proteger os compradores. Neste artigo, propomos uma solução para o problema do gasto duplo usando um servidor de timestamp distribuído peer-to-peer para gerar prova computacional da ordem cronológica das transações. O sistema é seguro desde que os nós honestos controlem coletivamente mais poder da CPU do que qualquer grupo cooperante de nós invasores.

## Transações

Definimos uma moeda eletrônica como uma cadeia de assinaturas digitais. Cada proprietário transfere a moeda para o próximo assinando digitalmente um hash da transação anterior e a chave pública do próximo proprietário e adicionando-os ao final da moeda. Um beneficiário pode verificar as assinaturas para verificar a cadeia de propriedade.

![](./transactions.svg)

O problema, claro, é que o beneficiário não pode verificar se um dos proprietários não gastou duas vezes a moeda. Uma solução comum é introduzir uma autoridade central confiável, ou hortelã, que verifica todas as transações quanto a gastos duplos. Após cada transação, a moeda deve ser devolvida à casa da moeda para emitir uma nova moeda, e apenas moedas emitidas diretamente da casa da moeda são confiáveis ​​para não serem gastas em dobro. O problema com esta solução é que o destino de todo o sistema monetário depende da empresa que administra a casa da moeda, com todas as transações tendo que passar por eles, assim como um banco.

Precisamos de uma maneira para o beneficiário saber que os proprietários anteriores não assinaram nenhuma transação anterior. Para nossos propósitos, a transação mais antiga é a que conta, então não nos importamos com tentativas posteriores de gastar duas vezes. A única maneira de confirmar a ausência de uma transação é estar ciente de todas as transações. No modelo baseado em hortelã, a casa da moeda estava ciente de todas as transações e decidia qual chegava primeiro. Para fazer isso sem uma parte confiável, as transações devem ser anunciadas publicamente[1], e precisamos de um sistema para que os participantes concordem com um único histórico da ordem em que foram recebidas. O beneficiário precisa provar que, no momento de cada transação, a maioria dos nós concordou que foi o primeiro recebido.

## Servidor de carimbo de data/hora

A solução que propomos começa com um servidor de timestamp. Um servidor de timestamp funciona pegando um hash de um bloco de itens para ser timestamp e publicando amplamente o hash, como em um jornal ou post da Usenet[2-5]. O carimbo de data/hora prova que os dados devem ter existido no momento, obviamente, para entrar no hash. Cada timestamp inclui o timestamp anterior em seu hash, formando uma cadeia, com cada timestamp adicional reforçando os anteriores.

![](./timestamp-server.svg)

## Comprovante de Trabalho

Para implementar um servidor de timestamp distribuído em uma base peer-to-peer, precisaremos usar um sistema de prova de trabalho semelhante ao Hashcash de Adam Back [6], em vez de postagens de jornal ou Usenet. A prova de trabalho envolve a varredura de um valor que, quando em hash, como com SHA-256, o hash começa com um número de bits zero. O trabalho médio necessário é exponencial no número de bits zero necessários e pode ser verificado executando um único hash.

Para nossa rede de timestamp, implementamos a prova de trabalho incrementando um nonce no bloco até que seja encontrado um valor que forneça ao hash do bloco os bits zero necessários. Uma vez que o esforço da CPU tenha sido gasto para fazê-lo satisfazer a prova de trabalho, o bloco não pode ser alterado sem refazer o trabalho. Como os blocos posteriores são encadeados depois dele, o trabalho para alterar o bloco incluiria refazer todos os blocos depois dele.

![](./proof-of-work.svg)

A prova de trabalho também resolve o problema de determinar a representação na tomada de decisão da maioria. Se a maioria fosse baseada em um endereço IP, um voto, ela poderia ser subvertida por qualquer pessoa capaz de alocar muitos IPs. A prova de trabalho é essencialmente um CPU, um voto. A decisão majoritária é representada pela cadeia mais longa, que tem o maior esforço de prova de trabalho investido nela. Se a maior parte do poder da CPU for controlada por nós honestos, a cadeia honesta crescerá mais rápido e superará as cadeias concorrentes. Para modificar um bloco passado, um invasor teria que refazer a prova de trabalho do bloco e de todos os blocos posteriores e, em seguida, alcançar e superar o trabalho dos nós honestos. Mostraremos mais adiante que a probabilidade de um invasor mais lento se aproximar diminui exponencialmente à medida que blocos subsequentes são adicionados.

Para compensar o aumento da velocidade do hardware e o interesse variável na execução de nós ao longo do tempo, a dificuldade da prova de trabalho é determinada por uma média móvel visando um número médio de blocos por hora. Se eles forem gerados muito rápido, a dificuldade aumenta.

## Rede

As etapas para executar a rede são as seguintes:

1. Novas transações são transmitidas para todos os nós.
2. Cada nó coleta novas transações em um bloco.
3. Cada nó trabalha para encontrar uma prova de trabalho difícil para seu bloco.
4. Quando um nó encontra uma prova de trabalho, ele transmite o bloco para todos os nós.
5. Os nós aceitam o bloco somente se todas as transações nele forem válidas e ainda não tiverem sido gastas.
6. Os nós expressam sua aceitação do bloco trabalhando na criação do próximo bloco na cadeia, usando o hash do bloco aceito como o hash anterior.

Os nós sempre consideram a cadeia mais longa como a correta e continuarão trabalhando para estendê-la. Se dois nós transmitem versões diferentes do próximo bloco simultaneamente, alguns nós podem receber um ou outro primeiro. Nesse caso, eles trabalham na primeira que receberam, mas salvam a outra ramificação caso ela fique mais longa. O empate será desfeito quando a próxima prova de trabalho for encontrada e uma ramificação se tornar mais longa; os nós que estavam trabalhando na outra ramificação mudarão para a mais longa.

As novas transmissões de transação não precisam necessariamente atingir todos os nós. Contanto que alcancem muitos nós, eles entrarão em um bloco em pouco tempo. As transmissões de bloco também são tolerantes a mensagens descartadas. Se um nó não receber um bloco, ele o solicitará quando receber o próximo bloco e perceber que perdeu um.

## Incentivo

Por convenção, a primeira transação em um bloco é uma transação especial que inicia uma nova moeda de propriedade do criador do bloco. Isso adiciona um incentivo para que os nós suportem a rede e fornece uma maneira de distribuir inicialmente as moedas em circulação, já que não há uma autoridade central para emiti-las. A adição constante de uma quantidade constante de novas moedas é análoga aos garimpeiros gastando recursos para adicionar ouro à circulação. No nosso caso, é o tempo de CPU e a eletricidade que são gastos.

O incentivo também pode ser financiado com taxas de transação. Se o valor de saída de uma transação for menor que seu valor de entrada, a diferença é uma taxa de transação que é adicionada ao valor de incentivo do bloco que contém a transação. Uma vez que um número predeterminado de moedas tenha entrado em circulação, o incentivo pode fazer a transição inteiramente para taxas de transação e ser completamente livre de inflação.

O incentivo pode ajudar a incentivar os nós a permanecerem honestos. Se um invasor ganancioso for capaz de reunir mais poder de CPU do que todos os nós honestos, ele teria que escolher entre usá-lo para fraudar pessoas roubando seus pagamentos ou usá-lo para gerar novas moedas. Ele deveria achar mais lucrativo jogar de acordo com as regras, tais regras que o favorecem com mais moedas novas do que todos os outros juntos, do que minar o sistema e a validade de sua própria riqueza.

## Recuperando espaço em disco

Uma vez que a última transação em uma moeda esteja enterrada em blocos suficientes, as transações gastas antes que possam ser descartadas para economizar espaço em disco. Para facilitar isso sem quebrar o hash do bloco, as transações são hash em uma Merkle Tree [7][2][5], com apenas a raiz incluída no hash do bloco. Blocos velhos podem então ser compactados cortando galhos da árvore. Os hashes internos não precisam ser armazenados.

![](./reclaiming-disk-space.svg)

Um cabeçalho de bloco sem transações teria cerca de 80 bytes. Se supusermos que os blocos são gerados a cada 10 minutos, 80 bytes * 6 * 24 * 365 = 4,2 MB por ano. Com os sistemas de computador normalmente vendidos com 2 GB de RAM a partir de 2008, e a Lei de Moore prevendo um crescimento atual de 1,2 GB por ano, o armazenamento não deve ser um problema, mesmo que os cabeçalhos dos blocos devam ser mantidos na memória.

## Verificação de pagamento simplificada

É possível verificar pagamentos sem executar um nó de rede completo. Um usuário só precisa manter uma cópia dos cabeçalhos de bloco da cadeia de prova de trabalho mais longa, que ele pode obter consultando os nós da rede até que esteja convencido de que tem a cadeia mais longa e obter a ramificação Merkle que vincula a transação ao bloco Ele não pode verificar a transação por si mesmo, mas ao vinculá-la a um local na cadeia, ele pode ver que um nó da rede a aceitou e os blocos adicionados depois confirmam que a rede a aceitou.

![](./simplified-payment-verification.svg)

Como tal, a verificação é confiável desde que os nós honestos controlem a rede, mas é mais vulnerável se a rede for dominada por um invasor. Embora os nós da rede possam verificar as transações por si mesmos, o método simplificado pode ser enganado pelas transações fabricadas de um invasor enquanto o invasor continuar a dominar a rede. Uma estratégia para se proteger contra isso seria aceitar alertas de nós da rede quando eles detectam um bloco inválido, solicitando que o software do usuário baixe o bloco completo e as transações alertadas para confirmar a inconsistência. As empresas que recebem pagamentos frequentes provavelmente ainda desejarão executar seus próprios nós para obter segurança mais independente e verificação mais rápida.

## Combinando e Dividindo Valor

Embora seja possível lidar com moedas individualmente, seria difícil fazer uma transação separada para cada centavo em uma transferência. Para permitir que o valor seja dividido e combinado, as transações contêm várias entradas e saídas. Normalmente, haverá uma única entrada de uma transação anterior maior ou várias entradas combinando quantias menores e, no máximo, duas saídas: uma para o pagamento e outra retornando o troco, se houver, de volta ao remetente.

![](./combining-splitting-value.svg)

Deve-se notar que fan-out, onde uma transação depende de várias transações, e essas transações dependem de muitas mais, não é um problema aqui. Nunca há a necessidade de extrair uma cópia autônoma completa do histórico de uma transação.

## Privacidade

O modelo bancário tradicional atinge um nível de privacidade ao limitar o acesso às informações às partes envolvidas e ao terceiro confiável. A necessidade de anunciar publicamente todas as transações impede esse método, mas a privacidade ainda pode ser mantida quebrando o fluxo de informações em outro local: mantendo as chaves públicas anônimas. O público pode ver que alguém está enviando um valor para outra pessoa, mas sem informações que vinculem a transação a ninguém. Isso é semelhante ao nível de informação divulgado pelas bolsas de valores, onde o tempo e o tamanho do comércios individuais, a "fita", torna-se pública, mas sem dizer quem eram as partes.

![](./privacy.svg)

Como um firewall adicional, um novo par de chaves deve ser usado para cada transação para evitar que elas sejam vinculadas a um proprietário comum. Algumas ligações ainda são inevitáveis ​​com transações de múltiplas entradas, que necessariamente revelam que suas entradas eram de propriedade do mesmo proprietário. O risco é que, se o proprietário de uma chave for revelado, a vinculação poderá revelar outras transações que pertenciam ao mesmo proprietário.

## Cálculos

Consideramos o cenário de um invasor tentando gerar uma cadeia alternativa mais rapidamente do que a cadeia honesta. Mesmo que isso seja feito, não deixa o sistema aberto a mudanças arbitrárias, como criar valor do nada ou receber dinheiro que nunca pertenceu ao invasor. Os nós não aceitarão uma transação inválida como pagamento e os nós honestos nunca aceitarão um bloco que os contenha. Um invasor só pode tentar alterar uma de suas próprias transações para recuperar o dinheiro que gastou recentemente.

A corrida entre a cadeia honesta e a cadeia atacante pode ser caracterizada como uma caminhada aleatória binomial. O evento de sucesso é a cadeia honesta sendo estendida em um bloco, aumentando sua liderança em +1, e o evento de falha é a cadeia do invasor sendo estendida em um bloco, reduzindo a lacuna em -1.

A probabilidade de um atacante recuperar o atraso de um dado déficit é análoga a um problema de Gambler's Ruin. Suponha que um jogador com crédito ilimitado comece com déficit e jogue potencialmente um número infinito de tentativas para tentar atingir o ponto de equilíbrio. Podemos calcular a probabilidade de que ele atinja o ponto de equilíbrio ou que um invasor alcance a cadeia honesta, como segue[8]:

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable columnalign="right center left" rowspacing="3pt" columnspacing="0 thickmathspace" displaystyle="true">
    <mtr>
      <mtd>
        <mstyle mathsize="1.2em">
          <mi>p</mi>
        </mstyle>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mtext>&#xA0;probabilidade de um nó honesto encontrar o próximo bloco</mtext>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mstyle mathsize="1.2em">
          <mi>q</mi>
        </mstyle>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mtext>&#xA0;probabilidade de o invasor encontrar o próximo bloco</mtext>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mstyle mathsize="1.2em">
          <msub>
            <mi>q</mi>
            <mi>z</mi>
          </msub>
        </mstyle>
      </mtd>
      <mtd>
        <mi></mi>
        <mo>=</mo>
      </mtd>
      <mtd>
        <mrow>
          <mtext>&#xA0;probabilidade de o invasor alcançar&#xA0;</mtext>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>z</mi>
          </mrow>
          <mtext>&#xA0;blocos atrás</mtext>
        </mrow>
      </mtd>
    </mtr>
  </mtable>
</math>

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mstyle mathsize="1.2em">
    <msub>
      <mi>q</mi>
      <mi>z</mi>
    </msub>
    <mo>=</mo>
    <mrow>
      <mo>{</mo>
      <mtable rowspacing="4pt" columnspacing="1em">
        <mtr>
          <mtd>
            <mn>1</mn>
          </mtd>
          <mtd>
            <mrow class="MJX-TeXAtom-ORD">
              <mtext class="MJX-tex-mathit" mathvariant="italic">if</mtext>
            </mrow>
            <mspace width="thickmathspace" />
            <mi>p</mi>
            <mo>&#x2264;<!-- ≤ --></mo>
            <mi>q</mi>
          </mtd>
        </mtr>
        <mtr>
          <mtd>
            <mo stretchy="false">(</mo>
            <mi>q</mi>
            <mrow class="MJX-TeXAtom-ORD">
              <mo>/</mo>
            </mrow>
            <mi>p</mi>
            <msup>
              <mo stretchy="false">)</mo>
              <mi>z</mi>
            </msup>
          </mtd>
          <mtd>
            <mrow class="MJX-TeXAtom-ORD">
              <mtext class="MJX-tex-mathit" mathvariant="italic">if</mtext>
            </mrow>
            <mspace width="thickmathspace" />
            <mi>p</mi>
            <mo>&gt;</mo>
            <mi>q</mi>
          </mtd>
        </mtr>
      </mtable>
      <mo>}</mo>
    </mrow>
  </mstyle>
</math>

Dada a nossa suposição de que
<math xmlns="http://www.w3.org/1998/Math/MathML">
<mi>p</mi>
<mo>><!-- > --></mo>
<mi>q</mi>
</math>, a probabilidade cai exponencialmente à medida que o número de blocos que o invasor precisa alcançar aumenta. Com as probabilidades contra ele, se ele não der uma investida de sorte no início, suas chances se tornam cada vez menores à medida que ele fica mais para trás.

Agora consideramos quanto tempo o destinatário de uma nova transação precisa esperar antes de ter certeza de que o remetente não pode alterar a transação. Assumimos que o remetente é um invasor que deseja fazer o destinatário acreditar que o pagou por um tempo e, em seguida, trocá-lo para pagar de volta a si mesmo depois de algum tempo. O receptor será alertado quando isso acontecer, mas o remetente espera que seja tarde demais.

O receptor gera um novo par de chaves e entrega a chave pública ao remetente pouco antes de assinar. Isso evita que o remetente prepare uma cadeia de blocos com antecedência, trabalhando nela continuamente até que tenha a sorte de avançar o suficiente, executando a transação naquele momento. Uma vez que a transação é enviada, o remetente desonesto começa a trabalhar em segredo em uma cadeia paralela contendo uma versão alternativa de sua transação.

O destinatário espera até que a transação seja adicionada a um bloco e z
blocos foram vinculados depois dele. Ele não sabe a quantidade exata de progresso que o atacante fez, mas assumindo que os bloqueios honestos levaram o tempo médio esperado por bloco, o progresso potencial do atacante será uma distribuição de Poisson com valor esperado:

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mstyle mathsize="1.2em">
    <mi>&#x03BB;<!-- λ --></mi>
    <mo>=</mo>
    <mi>z</mi>
    <mfrac>
      <mi>q</mi>
      <mi>p</mi>
    </mfrac>
  </mstyle>
</math>

Para obter a probabilidade de que o invasor ainda possa alcançá-lo agora, multiplicamos a densidade de Poisson para cada quantidade de progresso que ele poderia ter feito pela probabilidade de que ele pudesse alcançá-lo a partir desse ponto:

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mstyle mathsize="1.2em">
    <munderover>
      <mo>&#x2211;<!-- ∑ --></mo>
      <mrow class="MJX-TeXAtom-ORD">
        <mi>k</mi>
        <mo>=</mo>
        <mn>0</mn>
      </mrow>
      <mrow class="MJX-TeXAtom-ORD">
        <mi mathvariant="normal">&#x221E;<!-- ∞ --></mi>
      </mrow>
    </munderover>
    <mfrac>
      <mrow>
        <msup>
          <mi>&#x03BB;<!-- λ --></mi>
          <mi>k</mi>
        </msup>
        <msup>
          <mi>e</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mo>&#x2212;<!-- − --></mo>
            <mi>&#x03BB;<!-- λ --></mi>
          </mrow>
        </msup>
      </mrow>
      <mrow>
        <mi>k</mi>
        <mo>!</mo>
      </mrow>
    </mfrac>
    <mo>&#x22C5;<!-- ⋅ --></mo>
    <mrow>
      <mo>{</mo>
      <mtable rowspacing="4pt" columnspacing="1em">
        <mtr>
          <mtd>
            <mo stretchy="false">(</mo>
            <mi>q</mi>
            <mrow class="MJX-TeXAtom-ORD">
              <mo>/</mo>
            </mrow>
            <mi>p</mi>
            <msup>
              <mo stretchy="false">)</mo>
              <mrow class="MJX-TeXAtom-ORD">
                <mo stretchy="false">(</mo>
                <mi>z</mi>
                <mo>&#x2212;<!-- − --></mo>
                <mi>k</mi>
                <mo stretchy="false">)</mo>
              </mrow>
            </msup>
          </mtd>
          <mtd>
            <mrow class="MJX-TeXAtom-ORD">
              <mtext class="MJX-tex-mathit" mathvariant="italic">if</mtext>
            </mrow>
            <mspace width="thickmathspace" />
            <mi>k</mi>
            <mo>&#x2264;<!-- ≤ --></mo>
            <mi>z</mi>
          </mtd>
        </mtr>
        <mtr>
          <mtd>
            <mn>1</mn>
          </mtd>
          <mtd>
            <mrow class="MJX-TeXAtom-ORD">
              <mtext class="MJX-tex-mathit" mathvariant="italic">if</mtext>
            </mrow>
            <mspace width="thickmathspace" />
            <mi>k</mi>
            <mo>&gt;</mo>
            <mi>z</mi>
          </mtd>
        </mtr>
      </mtable>
      <mo>}</mo>
    </mrow>
  </mstyle>
</math>

Reorganizando para evitar somar a cauda infinita da distribuição...

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mstyle mathsize="1.2em">
    <mn>1</mn>
    <mo>&#x2212;<!-- − --></mo>
    <munderover>
      <mo>&#x2211;<!-- ∑ --></mo>
      <mrow class="MJX-TeXAtom-ORD">
        <mi>k</mi>
        <mo>=</mo>
        <mn>0</mn>
      </mrow>
      <mrow class="MJX-TeXAtom-ORD">
        <mi>z</mi>
      </mrow>
    </munderover>
    <mfrac>
      <mrow>
        <msup>
          <mi>&#x03BB;<!-- λ --></mi>
          <mi>k</mi>
        </msup>
        <msup>
          <mi>e</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mo>&#x2212;<!-- − --></mo>
            <mi>&#x03BB;<!-- λ --></mi>
          </mrow>
        </msup>
      </mrow>
      <mrow>
        <mi>k</mi>
        <mo>!</mo>
      </mrow>
    </mfrac>
    <mrow>
      <mo>(</mo>
      <mrow>
        <mn>1</mn>
        <mo>&#x2212;<!-- − --></mo>
        <mo stretchy="false">(</mo>
        <mi>q</mi>
        <mrow class="MJX-TeXAtom-ORD">
          <mo>/</mo>
        </mrow>
        <mi>p</mi>
        <msup>
          <mo stretchy="false">)</mo>
          <mrow class="MJX-TeXAtom-ORD">
            <mo stretchy="false">(</mo>
            <mi>z</mi>
            <mo>&#x2212;<!-- − --></mo>
            <mi>k</mi>
            <mo stretchy="false">)</mo>
          </mrow>
        </msup>
      </mrow>
      <mo>)</mo>
    </mrow>
  </mstyle>
</math>

Convertendo para código C...

```c
#include 
double AttackerSuccessProbability(double q, int z)
{
	double p = 1.0 - q;
	double lambda = z * (q / p);
	double sum = 1.0;
	int i, k;
	for (k = 0; k <= z; k++)
	{
		double poisson = exp(-lambda);
		for (i = 1; i <= k; i++)
			poisson *= lambda / i;
		sum -= poisson * (1 - pow(q / p, z - k));
	}
	return sum;
}
```

Executando alguns resultados, podemos ver a probabilidade cair exponencialmente com z.

```
q=0.1
z=0    P=1.0000000
z=1    P=0.2045873
z=2    P=0.0509779
z=3    P=0.0131722
z=4    P=0.0034552
z=5    P=0.0009137
z=6    P=0.0002428
z=7    P=0.0000647
z=8    P=0.0000173
z=9    P=0.0000046
z=10   P=0.0000012

q=0.3
z=0    P=1.0000000
z=5    P=0.1773523
z=10   P=0.0416605
z=15   P=0.0101008
z=20   P=0.0024804
z=25   P=0.0006132
z=30   P=0.0001522
z=35   P=0.0000379
z=40   P=0.0000095
z=45   P=0.0000024
z=50   P=0.0000006
```

Resolvendo para P menor que 0,1%...

```
P < 0.001
q=0.10   z=5
q=0.15   z=8
q=0.20   z=11
q=0.25   z=15
q=0.30   z=24
q=0.35   z=41
q=0.40   z=89
q=0.45   z=340
```

## Conclusão

Propusemos um sistema para transações eletrônicas sem depender de confiança. Começamos com a estrutura usual de moedas feitas a partir de assinaturas digitais, que fornece um forte controle de propriedade, mas é incompleta sem uma maneira de evitar gastos duplos. Para resolver isso, propusemos uma rede peer-to-peer usando prova de trabalho para registrar um histórico público de transações que rapidamente se torna computacionalmente impraticável para um invasor alterar se os nós honestos controlarem a maior parte do poder da CPU. A rede é robusta em sua simplicidade não estruturada. Os nós funcionam todos de uma vez com pouca coordenação. Eles não precisam ser identificados, pois as mensagens não são roteadas para nenhum local específico e só precisam ser entregues com base no melhor esforço. Os nós podem sair e se juntar à rede à vontade, aceitando a cadeia de prova de trabalho como prova do que aconteceu enquanto eles estavam fora. Eles votam com seu poder de CPU, expressando sua aceitação de blocos válidos trabalhando para estendê-los e rejeitando blocos inválidos recusando-se a trabalhar neles. Quaisquer regras e incentivos necessários podem ser aplicados com este mecanismo de consenso.

## Referências

1. W. Dai, ["b-money,"](https://nakamotoinstitute.org/b-money/) [http://www.weidai.com/bmoney.txt](http://www.weidai.com/bmoney.txt), 1998.
2. H. Massias, X.S. Avila, and J.-J. Quisquater, ["Design of a secure timestamping service with minimal trust requirements,"](https://nakamotoinstitute.org/secure-timestamping-service.pdf) In 20th Symposium on Information Theory in the Benelux, May 1999.
3. S. Haber, W.S. Stornetta, ["How to time-stamp a digital document,"](https://nakamotoinstitute.org/time-stamp-digital-document.pdf) In Journal of Cryptology, vol 3, no 2, pages 99-111, 1991.
4. D. Bayer, S. Haber, W.S. Stornetta, ["Improving the efficiency and reliability of digital time-stamping,"](https://nakamotoinstitute.org/improving-time-stamping.pdf) In Sequences II: Methods in Communication, Security and Computer Science, pages 329-334, 1993.
5. S. Haber, W.S. Stornetta, ["Secure names for bit-strings,"](https://nakamotoinstitute.org/secure-names-bit-strings.pdf) In Proceedings of the 4th ACM Conference on Computer and Communications Security, pages 28-35, April 1997.
6. A. Back, ["Hashcash - a denial of service counter-measure,"](https://nakamotoinstitute.org/hashcash.pdf) ][http://www.hashcash.org/papers/hashcash.pdf](http://www.hashcash.org/papers/hashcash.pdf), 2002.
7. R.C. Merkle, ["Protocols for public key cryptosystems,"](https://nakamotoinstitute.org/public-key-cryptosystems.pdf) In Proc. 1980 Symposium on Security and Privacy, IEEE Computer Society, pages 122-133, April 1980.
8. W. Feller, ["An introduction to probability theory and its applications,"](https://nakamotoinstitute.org/introduction-probability-theory-vol-i.pdf) 1957.