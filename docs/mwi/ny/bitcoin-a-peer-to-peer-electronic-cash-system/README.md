---
supporters: 
    - 
        name: "BitMEX"
        href: "https://blog.bitmex.com/bitmex-grant-translation-of-bitcoin-content-into-african-languages/"
translators: 
    - 
        name: "I-star Magagula"
---

# Bitcoin: A Peer-to-Peer Electronic Cash System

by Satoshi Nakamoto [2008/10/31](/bitcoin.pdf)

<LanguageDropdown/>

## Ndemanga

Ndalama zapa computer za anzawo ndi anzawo zimalola kuti malipiro a pa intaneti atumizidwe kuchokera kugulu lina kupita ku lina popanda kupita ku bungwe lazachuma. Ma signature a digital amapereka gawo la yankho, koma phindu lalikulu limatayika ngati munthu wina wodalirika akufunikabe kuti apewe kuwononga kawiri. Tikupereka njira yothetsera vuto la kugwiritsa ntchito ndalama kawiri pogwiritsa ntchito intaneti ya anzawo. Network imatsimikizira nthawi yochitira zinthu powathamangitsa muunyolo wokhazikika wa umboni wa ntchito, kupanga mbiri yomwe singasinthidwe popanda kubwerezanso umboni wa ntchito. Unyolo wautali kwambiri sikuti umangokhala umboni wotsatizana wa zochitika zomwe zachitiridwa umboni, koma umboni wakuti zidachokera ku dziwe lalikulu kwambiri la mphamvu za CPU. Malingana ngati mphamvu zambiri za CPU zikuwongoleredwa ndi ma node omwe sagwirizana kuti awononge maukonde, amatulutsa owukira atali kwambiri komanso owukira kunja. Maukonde pawokha amafunikira kapangidwe kakang'ono. Mauthenga amaulutsidwa molimbika kwambiri, ndipo ma node amatha kuchoka ndikujowinanso maukonde pakufuna kwawo, kuvomereza unyolo wautali kwambiri wotsimikizira ntchito ngati umboni wa zomwe zidachitika atapita.

## Mawu Oyamba

Malonda pa intaneti adalira kwambiri mabungwe azachuma omwe amagwira ntchito ngati anthu ena odalirika kuti azikonza zolipira pakompyuta. Ngakhale dongosololi limagwira ntchito bwino pazochita zambiri, limakhalabe ndi zofooka zamtundu wa trust based model. Zochita zosasinthika kwenikweni sizingatheke, chifukwa mabungwe azachuma sangapewe kuyimira mikangano. Mtengo wa mkhalapakati umachulukitsa ndalama zogulira, kuchepetsa kukula kwamalonda ndikuchepetsa kuthekera kwa zochitika zing'onozing'ono, ndipo pamakhala mtengo wokulirapo pakutayika kwa kuthekera kolipira kosabweza kwa ntchito zomwe sizingabwezedwe. Ndi kuthekera kwa kusinthika, kufunika kokhulupirira kumafalikira. Amalonda ayenera kusamala ndi makasitomala awo, kuwavutitsa kuti adziwe zambiri kuposa momwe akanafunira. Chinyengo china chachinyengo chimavomerezedwa kukhala chosapeŵeka. Kusatsimikizika kwamitengo iyi ndi zolipirira zitha kupewedwa pamasom'pamaso pogwiritsa ntchito ndalama zenizeni, koma palibe njira yolipirira njira yolumikizirana popanda munthu wodalirika.

Chofunikira ndi njira yolipirira pakompyuta yozikidwa paumboni wa cryptographic m'malo mokhulupirira, kulola maphwando awiri omwe ali okonzeka kuchita zinthu mwachindunji popanda kufunikira kwa munthu wina wodalirika. Zochita zomwe sizingachitike kuti zisinthe zingateteze ogulitsa ku chinyengo, komanso njira zanthawi zonse za escrow zitha kukhazikitsidwa kuti ziteteze ogula. Mu pepalali, tikupereka yankho ku vuto la kugwiritsa ntchito ndalama kawiri pogwiritsa ntchito masitampu a anzawo ndi anzawo kuti apange umboni wokwanira wa dongosolo la zochitika. Dongosololi ndi lotetezeka bola ngati ma node okhulupilika pamodzi akuwongolera mphamvu zambiri za CPU kuposa gulu lililonse logwirizana la owukira.

## Transactions

We define an electronic coin as a chain of digital signatures. Each owner transfers the coin to the next by digitally signing a hash of the previous transaction and the public key of the next owner and adding these to the end of the coin. A payee can verify the signatures to verify the chain of ownership.

![](./transactions.svg)

The problem of course is the payee can't verify that one of the owners did not double-spend the coin. A common solution is to introduce a trusted central authority, or mint, that checks every transaction for double spending. After each transaction, the coin must be returned to the mint to issue a new coin, and only coins issued directly from the mint are trusted not to be double-spent. The problem with this solution is that the fate of the entire money system depends on the company running the mint, with every transaction having to go through them, just like a bank.

We need a way for the payee to know that the previous owners did not sign any earlier transactions. For our purposes, the earliest transaction is the one that counts, so we don't care about later attempts to double-spend. The only way to confirm the absence of a transaction is to be aware of all transactions. In the mint based model, the mint was aware of all transactions and decided which arrived first. To accomplish this without a trusted party, transactions must be publicly announced[1], and we need a system for participants to agree on a single history of the order in which they were received. The payee needs proof that at the time of each transaction, the majority of nodes agreed it was the first received.

## Timestamp Server

The solution we propose begins with a timestamp server. A timestamp server works by taking a hash of a block of items to be timestamped and widely publishing the hash, such as in a newspaper or Usenet post[2-5]. The timestamp proves that the data must have existed at the time, obviously, in order to get into the hash. Each timestamp includes the previous timestamp in its hash, forming a chain, with each additional timestamp reinforcing the ones before it.

![](./timestamp-server.svg)

## Proof of Work

To implement a distributed timestamp server on a peer-to-peer basis, we will need to use a proof-of-work system similar to Adam Back's Hashcash[6], rather than newspaper or Usenet posts. The proof-of-work involves scanning for a value that when hashed, such as with SHA-256, the hash begins with a number of zero bits. The average work required is exponential in the number of zero bits required and can be verified by executing a single hash.

Pa netiweki yathu ya sitampu yanthawi, timagwiritsa ntchito umboni wa ntchitoyo powonjezera pang'ono mu block mpaka mtengo utapezeka womwe umapatsa block hash ziro bits zofunika. Khama la CPU litagwiritsidwa ntchito kuti likwaniritse umboni wa ntchito, chipikacho sichingasinthidwe popanda kuyambiranso ntchitoyo. Monga midadada pambuyo pake amamangidwa unyolo pambuyo pake, ntchito yosintha chipikacho ingaphatikizepo kukonzanso midadada yonse pambuyo pake.

![](./proof-of-work.svg)

Umboni wa ntchito umathetsanso vuto lodziyimira pawokha popanga zisankho zambiri. Ngati ambiri adatengera IP-adilesi-imodzi-voti, zitha kusokonezedwa ndi aliyense wokhoza kugawa IPS yambiri. Umboni-wa-ntchito kwenikweni ndi CPU-voti imodzi. Chisankho chochuluka chikuyimiridwa ndi unyolo wautali kwambiri, womwe uli ndi chitsimikiziro chachikulu cha ntchito yomwe idayikidwamo. Ngati mphamvu zambiri za CPU zikuwongoleredwa ndi mfundo zowona mtima, unyolo wowona mtima umakula mwachangu ndikupitilira unyolo uliwonse womwe ukupikisana nawo. Kuti asinthe chipika chapitachi, wowukirayo amayenera kubwerezanso umboni wa block ndi midadada yonse pambuyo pake ndikugwira ndikuposa ntchito zamanodi oona mtima. Tidzawonetsa pambuyo pake kuti
kuthekera kwa wowukira pang'onopang'ono kugwira kumachepa kwambiri ngati midadada yotsatira awonjezedwa.

Kulipiritsa kuwonjezereka kwa liwiro la hardware ndi chidwi chosiyana choyendetsa ma node pakapita nthawi, vuto la umboni wa ntchito limatsimikiziridwa ndi chiŵerengero chosuntha cholunjika pa avareji. Chiwerengero cha midadada pa ola. Ngati apangidwa mwachangu kwambiri, zovuta zimawonjezeka.

## Network

Njira zoyendetsera netiweki ndi izi:

1. Zochita zatsopano zimawulutsidwa ku node zonse. 
2. Node iliyonse imasonkhanitsa zochitika zatsopano mu block.
3. Node iliyonse imagwira ntchito pakupeza umboni wovuta wa ntchito.
4. Node ikapeza umboni wa ntchito, imawulutsa chipika ku mfundo zonse block yake.
5. Node amavomereza chipika pokhapokha ngati zonse zomwe zili mmenemo zili zovomerezeka ndipo sizinagwiritsidwe ntchito kale.
6. Ma Node amasonyeza kuvomereza kwawo chipikacho pogwira ntchito popanga loko iunyolo, pogwiritsa ntchito hashi ya chipika chovomerezeka ngati hashi yapitayi.

Ma Node nthawi zonse amawona unyolo wautali kwambiri kukhala wolondola ndipo amayesetsa kuukulitsa. Ngati mfundo ziwiri zikuwulutsa mitundu yosiyanasiyana ya block yotsatira nthawi imodzi, ma node ena amatha kulandira imodzi kapena ina poyamba. Zikatero, amagwirirapo ntchito yoyamba imene analandira, koma nthambi inayo amasunga ngati ingatalike. Taye idzathyoledwa pamene umboni wotsatira wa ntchito ukupezeka ndipo nthambi imodzi imakhala yaitali, mfundo zomwe zinkagwira ntchito pa nthambi ina zidzasinthira ku yaitali. Kuwulutsa kwatsopano sikuyenera kufikira ma node onse. 

Bola iwo akafika m'malo ambiri, amalowa mumdadada posakhalitsa. Mawayilesi a block nawonso amalolera za mauthenga ogwetsedwa. Ngati node sichilandira chipika, imapempha ikalandira chipika chotsatira ndikuzindikira kuti chinaphonya chimodzi.

## Chilimbikitso

Mwamsonkhano, kugulitsa koyamba mu chipika ndikugulitsa kwapadera komwe kumayambitsa ndalama zatsopano za mlengi wa block. Izi zimawonjezera chilimbikitso kwa ma node kuti athandizire netiweki. ndipo imapereka njira yogawira ndalama zachitsulo poyambira, popeza palibe ulamuliro wapakati wozipereka. Kuwonjezeredwa kosalekeza kwa ndalama zachitsulo zatsopano ndizofanana ndi ochita migodi a golide omwe amawononga chuma kapena kuwonjezera golide pakuyenda. Kwa ife, ndi nthawi ya CPU ndi magetsi omwe amagwiritsidwa ntchito.

Chilimbikitso chingathenso kulipidwa ndi ndalama zogulira. Ngati mtengo wamtengo wapatali wa malondawo ndi wocheperapo kusiyana ndi mtengo wake wolowa, kusiyana kwake ndi ndalama zogulitsira zomwe zimawonjezeredwa kumtengo wolimbikitsa wa block yomwe ili ndi malondawo. Ndalama zodziwikiratu zikayamba kugwiritsidwa ntchito, chilimbikitsocho chikhoza kusinthiratu kupita ku chindapusa ndikukhala wopanda inflation.

The incentive may help encourage nodes to stay honest. If a greedy attacker is able to assemble more CPU power than all the honest nodes, he would have to choose between using it to defraud people by stealing back his payments, or using it to generate new coins. He ought to find it more profitable to play by the rules, such rules that favour him with more new coins than everyone else combined, than to undermine the system and the validity of his own wealth.

## Reclaiming Disk Space

Once the latest transaction in a coin is buried under enough blocks, the spent transactions before it can be discarded to save disk space. To facilitate this without breaking the block's hash, transactions are hashed in a Merkle Tree [7][2][5], with only the root included in the block's hash. Old blocks can then be compacted by stubbing off branches of the tree. The interior hashes do not need to be stored.

![](./reclaiming-disk-space.svg)

A block header with no transactions would be about 80 bytes. If we suppose blocks are generated every 10 minutes, 80 bytes * 6 * 24 * 365 = 4.2MB per year. With computer systems typically selling with 2GB of RAM as of 2008, and Moore's Law predicting current growth of 1.2GB per year, storage should not be a problem even if the block headers must be kept in memory.

## Simplified Payment Verification

It is possible to verify payments without running a full network node. A user only needs to keep a copy of the block headers of the longest proof-of-work chain, which he can get by querying network nodes until he's convinced he has the longest chain, and obtain the Merkle branch linking the transaction to the block it's timestamped in. He can't check the transaction for himself, but by linking it to a place in the chain, he can see that a network node has accepted it, and blocks added after it further confirm the network has accepted it.

![](./simplified-payment-verification.svg)

Momwemonso, chitsimikizirocho ndi chodalirika malinga ngati ma node owona mtima akuwongolera maukonde, koma amakhala pachiwopsezo kwambiri ngati maukonde agonjetsedwa ndi wowukira. Ngakhale ma netiweki atha kudzitsimikizira okha zomwe zachitika, njira yophweka imatha kupusitsidwa ndi zochitika zopeka za wowukirayo malinga ngati wowukirayo apitilize kugonjetsa netiweki. Njira imodzi yodzitetezera ku izi ingakhale kuvomereza zidziwitso kuchokera ku node zapaintaneti pamene awona chipika chosavomerezeka, zomwe zimachititsa kuti pulogalamu ya wosuta itulutse chipika chonse ndi kuchenjeza zochitika kuti zitsimikizire kusagwirizana. Mabizinesi omwe amalandila ndalama pafupipafupi adzafunabe kuyendetsa ma node awo kuti akhale odziyimira pawokha komanso kuti atsimikizire mwachangu.

## Kuphatikiza ndi Kugawa Mtengo

Ngakhale kuti zingakhale zotheka kugwiritsa ntchito ndalama zachitsulo payokha, sikungakhale kovuta kupanga malonda osiyana pa senti iliyonse posamutsa. Kuti mtengo ugawidwe ndikuphatikizidwa, zochitika zimakhala ndi zolowetsa ndi zotuluka zingapo. Nthawi zambiri pamakhala kulowetsa kumodzi kuchokera kuzinthu zazikulu zam'mbuyomu kapena zolowetsa zingapo kuphatikiza ndalama zing'onozing'ono, komanso zotuluka ziwiri: imodzi yolipira, ndi ina yobwezera zosintha, ngati zilipo, kubwerera kwa wotumiza.

![](./combining-splitting-value.svg)

Tiyenera kudziwa kuti fan-out, pomwe kugulitsa kumadalira zochitika zingapo, ndipo zomwe zimachitika zimadalira zina zambiri, si vuto pano. Sipafunikanso kutulutsa mbiri yodziyimira yokha yambiri yamalonda.

## Zazinsinsi

Mabanki achikhalidwe amakwaniritsa chinsinsi pochepetsa mwayi wopeza zidziwitso kwa omwe akukhudzidwa ndi anthu ena odalirika. Kufunika kolengeza zochitika zonse poyera kumalepheretsa njirayi, koma chinsinsi chikhoza kusungidwabe pophwanya kufalikira kwa chidziwitso kumalo ena: posunga makiyi a anthu onse mosadziwika. Anthu amatha kuwona kuti wina akutumiza ndalama kwa munthu wina, koma popanda chidziwitso cholumikizira: aliyense. Izi ndizofanana ndi kuchuluka kwa chidziwitso chomwe chimatulutsidwa ndi kusinthanitsa katundu, kumene nthawi ndi kukula kwa malonda a munthu payekha, "tepi", amapangidwa poyera, koma osauza omwe maphwandowo anali.

![](./privacy.svg)

Monga chowotcha chowonjezera chowonjezera, makiyi atsopano ayenera kugwiritsidwa ntchito pazochita zilizonse kuchokera pakulumikizidwa ndi eni ake wamba. Kulumikizana kwina sikungalephereke ndi zolowetsa zambiri, zomwe zimawonetsa kuti zolowa zawo zinali za eni ake. Choopsa ndi chakuti ngati mwini wake wa kiyi awululidwa, kulumikiza kungavumbulutse zochitika zina zomwe zinali za mwiniwakeyo.

## Kuwerengera

Timalingalira zochitika za wowukira akuyesera kupanga unyolo wina mwachangu kuposa unyolo wowona mtima, Ngakhale izi zitakwaniritsidwa, sizimatsegula dongosolo kuti lisinthe mosasamala, monga kupanga phindu kuchokera kumlengalenga kapena kutenga ndalama zomwe sizinali zake. t wowukira. Ma Node sangavomereze kugulitsa kosavomerezeka ngati malipiro, ndipo ma node oona mtima sangavomereze chipika chomwe chili nawo. Wowukira atha kungoyesa kusintha chimodzi mwazomwe adachita kuti abweze ndalama zomwe adawononga posachedwa.

Mpikisano pakati pa unyolo wowona mtima ndi unyolo wowukira ukhoza kudziwika ngati Binomial Random Walk. Chochitika chopambana ndi unyolo wowona mtima womwe ukukulitsidwa ndi chipika chimodzi, ndikuwonjezera kutsogola kwake ndi +1, ndipo cholephera ndi unyolo wa owukirawo womwe umakulitsidwa ndi chipika chimodzi, kuchepetsa kusiyana ndi -1.

Kuthekera kwa wowukirayo kutengera kupereŵera komwe kwapatsidwa kumafanana ndi a Gambler kuwononga vuto. Tiyerekeze kuti wotchova njuga yemwe ali ndi ngongole zopanda malire amangoyamba kupereŵera ndipo amaseŵera mwina chiwerengero chosawerengeka cha mayesero kuti ayesetse kuti GB awonongeke. Titha kuwerengera mwayi womwe angakumane nawo, kapena kuti wowukirayo angakumane ndi owona mtima unyolo, motere[8]:

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
        <mtext>&#xA0; mwayi wowona mtima upeza block</mtext>
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
        <mtext>&#xA0;kutheka kuti wowukirayo apeza mwayi wotsatira wa block</mtext>
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
          <mtext>&#xA0; kuti wowukirayo apeze &#xA0;</mtext>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>z</mi>
          </mrow>
          <mtext>&#xA0;blocks behind</mtext>
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

Poganizira maganizo athu kuti
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>&#x003E;<!-- > --></mo>
  <mi>q</mi>
</math>

, kuthekera kumatsika mokulirapo pomwe kuchuluka kwa midadada yomwe wowukirayo akuyenera kuthana nayo pakuwonjezeka. Ndizovuta zotsutsana naye, ngati sapanga mwayi wopita patsogolo, mwayi wake umakhala wochepa kwambiri pamene akugwera kumbuyo.

Tsopano tikuganizira utali woti wolandira ntchito yatsopano adikire nthawi yayitali asanatsimikize kuti wotumizayo sangasinthe ntchitoyo. Tikuganiza kuti wotumizayo ndi wachiwembu yemwe akufuna kupangitsa wolandirayo kukhulupirira kuti adamulipira kwakanthawi, kenako nkusintha kuti abweze kwa iye pakapita nthawi. Wolandira adzachenjezedwa izi zikachitika, koma wotumizayo akuyembekeza kuti kuchedwa.

Wolandirayo amapanga makiyi atsopano ndipo amapereka kiyi yapagulu kwa wotumiza posachedwa kusaina. Izi zimalepheretsa wotumizayo kukonzekera midadada yambiri pasadakhale pogwira ntchito pa izo mosalekeza mpaka iye ali ndi mwayi wokwanira kuti apite patsogolo mokwanira, ndiyeno kupha transaction panthawiyo. Ntchitoyo ikatumizidwa, wotumiza wachinyengo amayamba chinsinsi chogwira ntchito pa unyolo wofanana womwe uli ndi mtundu wina wamalonda ake.

Wolandirayo amadikirira mpaka malonda awonjezedwe ku block ndipo z blocks akhala olumikizidwa pambuyo pake. Sakudziwa kuchuluka kwake komwe wowukirayo wapanga, koma poganiza kuti midadada yowona mtima idatenga nthawi yomwe ikuyembekezeka pa block iliyonse, kupita patsogolo kwa wowukirayo kudzakhala kugawa kwa Poisson komwe kumayembekezeredwa:

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

Kuti tipeze mwayi woti wowukirayo atha kugwirabe, timachulukitsa kuchuluka kwa Poisson pakupita patsogolo kulikonse komwe akanatha kuchita ndi mwayi womwe adatha mfundo imeneyo:

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

Kukonzekeranso kupewa kufotokoza mwachidule mchira wopandamalire wa kugawa...

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

Kusintha kukhala C kodi....

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

Potsatira zotsatira zina, titha kuwona kutsika kwakukulu ndi z.

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

Solving for P less than 0.1%...

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

## Mapeto

Takonza dongosolo la zochitika pakompyuta popanda kudalira chidaliro. Tinayamba ndi ndondomeko yanthawi zonse ya ndalama zopangidwa kuchokera ku siginecha za digito, zomwe zimapereka ulamuliro wamphamvu wa umwini, koma ndi zosakwanira popanda njira yopewera kuwononga kawiri. Kuti tithane ndi izi, tidakonza zoti pakhale ma netiweki a anzawo ndi anzawo pogwiritsa ntchito umboni wa ntchito kuti alembe mbiri yapagulu ya zochitika zomwe zimachitika mwachangu kuti woukirayo asinthe. Node oona mtima amawongolera mphamvu zambiri za CPU. Netiweki ndi yolimba mu kuphweka kwake kosapangidwira. Node zimagwira ntchito zonse mwakamodzi popanda kulumikizana pang'ono. Iwo safunikira kuzindikiridwa, popeza kuti mauthenga samatumizidwa kumalo enaake ndipo amangofunikira kuperekedwa kokha mwa khama. Ma Node amatha kuchoka ndikujowinanso maukonde pakufuna kwawo, kuvomereza unyolo wotsimikizira ntchito ngati umboni wa zomwe zidachitika atapita. Amavota ndi mphamvu zawo za CPU, kuwonetsa kuvomereza kwawo midadada yovomerezeka poyesetsa kukulitsa ndikukana midadada yosavomerezeka pokana kuigwira. Malamulo ndi zolimbikitsa zilizonse zofunika zitha kutsatiridwa ndi mgwirizanowu.

## References

1. W. Dai, ["b-money,"](https://nakamotoinstitute.org/b-money/) [http://www.weidai.com/bmoney.txt](http://www.weidai.com/bmoney.txt), 1998.
2. H. Massias, X.S. Avila, and J.-J. Quisquater, ["Design of a secure timestamping service with minimal trust requirements,"](https://nakamotoinstitute.org/secure-timestamping-service.pdf) In 20th Symposium on Information Theory in the Benelux, May 1999.
3. S. Haber, W.S. Stornetta, ["How to time-stamp a digital document,"](https://nakamotoinstitute.org/time-stamp-digital-document.pdf) In Journal of Cryptology, vol 3, no 2, pages 99-111, 1991.
4. D. Bayer, S. Haber, W.S. Stornetta, ["Improving the efficiency and reliability of digital time-stamping,"](https://nakamotoinstitute.org/improving-time-stamping.pdf) In Sequences II: Methods in Communication, Security and Computer Science, pages 329-334, 1993.
5. S. Haber, W.S. Stornetta, ["Secure names for bit-strings,"](https://nakamotoinstitute.org/secure-names-bit-strings.pdf) In Proceedings of the 4th ACM Conference on Computer and Communications Security, pages 28-35, April 1997.
6. A. Back, ["Hashcash - a denial of service counter-measure,"](https://nakamotoinstitute.org/hashcash.pdf) ][http://www.hashcash.org/papers/hashcash.pdf](http://www.hashcash.org/papers/hashcash.pdf), 2002.
7. R.C. Merkle, ["Protocols for public key cryptosystems,"](https://nakamotoinstitute.org/public-key-cryptosystems.pdf) In Proc. 1980 Symposium on Security and Privacy, IEEE Computer Society, pages 122-133, April 1980.
8. W. Feller, ["An introduction to probability theory and its applications,"](https://nakamotoinstitute.org/introduction-probability-theory-vol-i.pdf) 1957.