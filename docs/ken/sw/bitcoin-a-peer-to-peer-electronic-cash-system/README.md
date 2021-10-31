# Bitcoin: Peer-to-Peer Fedha za elektroniki Mfumo

na Satoshi Nakamoto [2008/10/31](/bitcoin.pdf)

<LanguageDropdown/>

## Kikemikali

Toleo la rika-kwa-rika la pesa taslimu za elektroniki litaruhusu malipo ya mkondoni kutumwa moja kwa moja kutoka chama kimoja hadi kingine bila kupitia taasisi ya kifedha. Digital saini hutoa sehemu ya suluhisho, lakini faida kuu hupotea ikiwa mtu wa tatu anayeaminika ni bado inahitajika kuzuia matumizi mara mbili. Tunapendekeza suluhisho kwa matumizi mawili tatizo kutumia mtandao wa wenzao. Muhtasari wa muhuri wa miamala kwa kutumia hashing kuwaingiza kwenye mlolongo unaoendelea wa uthibitisho-wa-kazi, kutengeneza rekodi ambayo haiwezi kuwa ilibadilishwa bila kufanya tena uthibitisho wa kazi. Mlolongo mrefu zaidi sio tu unathibitisha mlolongo wa hafla zilizoshuhudiwa, lakini ushahidi kwamba ilitoka kwa dimbwi kubwa zaidi la nguvu ya CPU.Kama kwa muda mrefu kama nguvu nyingi za CPUzinadhibitiwa na nodi ambazo hazishirikiani kushambulia mtandao, watatoa mlolongo mrefu zaidi na washambuliaji wa nafasi. Mtandao wenyewe unahitaji muundo mdogo. Ujumbe hutangazwa kwa msingi bora wa juhudi, na nodi zinaweza kuondoka na jiunge tena na mtandao kwa mapenzi, ukikubali mnyororo mrefu zaidi wa uthibitisho wa kazi kama uthibitisho wa nini
ilitokea wakati walikuwa wameenda.

## Utangulizi

Biashara kwenye mtandao imekuwa ikitegemea karibu taasisi za kifedha kutumika kama wahusika wa tatu kusindika malipo ya elektroniki. Wakati mfumo unafanya kazi vizuri ya kutosha kwa shughuli nyingi, bado inakabiliwa na udhaifu wa asili wa uaminifu mfano. Shughuli zisizoweza kurejeshwa kabisa haziwezekani, kwani ni ya kifedha taasisi haziwezi kuzuia usuluhishi wa mabishano. Gharama ya upatanishi huongeza shughuli gharama, kupunguza kiwango cha chini cha ununuzi wa vitendo na kukata uwezekano wa ndogo shughuli za kawaida, na kuna gharama pana katika upotezaji wa uwezo wa kufanya isigeuke malipo ya huduma ambazo hazibadiliki. Pamoja na uwezekano wa kubadilika, hitaji la uaminifu huenea. Wafanyabiashara lazima wawe na wasiwasi na wateja wao, wakiwashtaki kwa habari zaidi kuliko vile wangehitaji. Asilimia fulani ya ulaghai inakubaliwa kuwa haiwezi kuepukika. Gharama hizi na kutokuwa na uhakika wa malipo kunaweza kuepukwa kwa kibinafsi kwa kutumia mwili sarafu, lakini hakuna utaratibu wowote wa kufanya malipo juu ya kituo cha mawasiliano bila chama cha kuaminika.

Kinachohitajika ni mfumo wa malipo wa elektroniki kulingana na uthibitisho wa cryptographic badala ya uaminifu, kuruhusu vyama vyovyote vyenye nia ya kufanya moja kwa moja na kila mmoja bila hitaji la mtu wa tatu anayeaminika. Uuzaji ambao hauwezekani kwa hesabu kugeuza ungekuwa kulinda wauzichadji kutoka kwa ulaghai, na mifumo ya kawaida ya escrow inaweza kutekelezwa kwa urahisi
linda wanunuzi. Katika jarida hili, tunapendekeza suluhisho la shida ya matumizi mara mbili kwa kutumia rika-kwa-rika ilisambaza seva ya muhuri wa muda ili kutoa uthibitisho wa hesabu wa mpangilio wa shughuli. Mfumo huo uko salama ili mradi kama nodi za uamini kudhibiti kwa pamoja nguvu zaidi ya CPU kuliko kikundi chochote kinachoshirikiana cha nodi za washambuliaji.

## Miamala

Tunafafanua sarafu ya elektroniki kama mlolongo wa saini za dijiti. Kila mmiliki huhamisha sarafu ijayo kwa kusaini dijiti hashi ya manunuzi ya awali na ufunguo wa umma wa mmiliki wa pili na kuongeza hizi hadi mwisho wa sarafu. Mlipaji anaweza kuthibitisha saini kwa thibitisha mlolongo wa umiliki.

![](./transactions.svg)

Shida ni kwamba mpokeaji hawezi kudhibitisha kuwa mmoja wa wamiliki hakutumia mara mbili sarafu. Suluhisho la kawaida ni kuanzisha mamlaka kuu inayoaminika, au mnanaa, ambayo huangalia kila shughuli kwa matumizi mara mbili. Baada ya kila shughuli, sarafu lazima irudishwe mnara kutoa sarafu mpya, na sarafu tu zilizotolewa moja kwa moja kutoka kwa mnanaa zinaaminika sio tumia mara mbili. Shida na suluhisho hili ni kwamba hatima ya mfumo mzima wa pesa inategemea kampuni inayoendesha mnanaa, na kila shughuli inapaswa kupitia kama benki.

Tunahitaji njia ya mlipaji kujua kwamba wamiliki wa zamani hawakusaini mapema yoyote shughuli. Kwa madhumuni yetu, shughuli ya mwanzo ndio inayohesabiwa, kwa hivyo hatufanyi hivyo
kujali juu ya majaribio ya baadaye ya kutumia mara mbili. Njia pekee ya kuthibitisha kutokuwepo kwa a
shughuli ni kujua shughuli zote. Katika mtindo wa msingi wa mnanaa, mnanaa alikuwa akijuashughuli zote na kuamua ni yupi aliyefika kwanza. Kukamilisha hii bila chama cha kuaminika,
shughuli lazima zitangazwe hadharani [1], na tunahitaji mfumo wa washiriki kukubali kwenye historia moja ya utaratibu ambao walipokelewa. Mlipaji anahitaji uthibitisho kuwa saa wakati wa kila shughuli, sehemu nyingi zilikubaliana kuwa ndio kwanza ilipokelewa.

## Timestamp Server

Suluhisho tunalopendekeza linaanza na seva ya timestamp. Seva ya timestamp inafanya kazi na kuchukua hash ya kizuizi cha vitu kuwa na muhuri wa wakati na kuchapisha hashi, kama vile katika gazeti au chapisho la Usenet [2-5]. Timestamp inathibitisha kuma data lazima ilikuwapo wakati huo, ni wazi, ili kuingia kwenye hashi. Kila timestamp inajumuisha ya awali timestamp katika hash yake, kutengeneza mlolongo, na kila muhuri wa nyongeza unaimarisha hizo mbele yake
.

![](./timestamp-server.svg)

## Uthibitisho wa Kazi

Ili kutekeleza seva iliyosambazwa ya timestamp kwa msingi wa rika-kwa-rika, tutahitaji kutumia mfumo wa uthibitisho wa kazi sawa na Hashcash ya Adam Back [6], badala ya gazeti au Usenet
machapisho. Uthibitisho-wa-kazi unajumuisha skanning ya thamani ambayo inapoharibiwa, kama vile na SHA-256, hashi huanza na idadi ya sifuri. Kazi ya wastani inayohitajika ni ufafanuzi katika idadi ya bits sifuri inahitajika na inaweza kuthibitishwa kwa kutekeleza mojahash.

Kwa mtandao wetu wa timestamp, tunatekeleza uthibitisho-wa-kazi kwa kuongeza nonce katika block mpaka thamani ipatikane ambayo inapeana hashi ya block bits zinazohitajika sifuri. Mara CPU
juhudi imetumika kuifanya itosheleze uthibitisho wa kazi, kizuizi hakiwezi kubadilishwa bila kufanya upya kazi. Kama vizuizi vya baadaye vimefungwa minyororo baada yake, kazi ya kubadilisha block ni pamoja na kufanya upya vitalu vyote baada yake.

![](./proof-of-work.svg)

Uthibitisho wa kazi pia hutatua tatizo la kuamua uwakilishi katika uamuzi wa wengi kutengeneza. Ikiwa wengi waliegemea kwenye-IP-anwani-kura-moja, inaweza kupotoshwa na
mtu yeyote anayeweza kutenga IP nyingi. Uthibitisho wa kazi kimsingi ni CPU-kura moja. Uamuzi wa wengi unawakilishwa na mlolongo mrefu zaidi, ambao una uthibitisho mkubwa zaidi wa kazi
juhudi zilizowekwa ndani yake. Ikiwa nguvu nyingi za CPU zinadhibitiwa na nodi za uaminifu, waaminifu mnyororo utakua kwa kasi zaidi na kupita minyororo yoyote inayoshindana. Ili kurekebisha kizuizi cha zamani, amshambulizi atalazimika kufanya tena uthibitisho wa kazi ya kizuizi na vizuizi vyote baada yake na kasha catch up na kuvuka kazi ya nodes waaminifu. Tutaonyesha baadaye kwamba. uwezekano wa mshambulizi polepole kupatana hupungua kwa kasi kama vizuizi vinavyofuata zinaongezwa.

Ili kufidia kuongeza kasi ya maunzi na maslahi tofauti ya kuendesha nodi wakati, ugumu wa uthibitisho wa kazi huamuliwa na wastani wa kusonga unaolenga wastani idadi ya vitalu kwa saa. Ikiwa zinazalishwa haraka sana, ugumu huongezeka.

## Network

Hatua za kuendesha mtandao ni kama ifuatavyo:

1. Shughuli mpya zinatangazwa kwa nodi zote.
2. Kila nodi inakusanya shughuli mpya kwenye kizuizi.
3. Kila nodi inafanya kazi katika kutafuta uthibitisho mgumu wa kazi kwa kizuizi chake.
4. Wakati nodi inapata uthibitisho wa kazi, inatangaza kizuizi kwa nodes zote.
5. Nodes kukubali kuzuia tu kama shughuli zote ndani yake ni halali na si tayari kutumika.
6. Nodi zinaonyesha kukubali kwao kwa kizuizi kwa kufanya kazi katika kuunda kizuizi kinachofuata mnyororo, kwa kutumia heshi ya kizuizi kilichokubaliwa kama heshi iliyotangulia.

Nodi kila wakati huzingatia mnyororo mrefu zaidi kuwa ndio sahihi na itaendelea kufanya kazi kuipanua. Ikiwa nodi mbili zitatangaza matoleo tofauti ya kizuizi kinachofuata kwa wakati mmoja, zingine nodi zinaweza kupokea moja au nyingine kwanza. Katika kesi hiyo, wanafanya kazi kwa kwanza wao imepokelewa,  lakini hifadhi tawi lingine ikiwa litakuwa refu. Tai itavunjwa lini uthibitisho unaofuata wa kazi unapatikana na tawi moja linakuwa refu; nodi zilizokuwa
kufanya kazi kwenye branch lingine basi itabadilika kuwa refu zaidi. Matangazo mapya ya shughuli si lazima yafikie nodi zote. Ilimradi wao kufikia nodi nyingi, wataingia kwenye kizuizi kabla ya muda mrefu. 

Matangazo ya kuzuia pia yanastahimili ya meseji zilizodondoshwa. Ikiwa nodi haipati kizuizi, itaomba wakati inapokea block inayofuata na kugundua ilikosa moja.

## Incentive

Kwa makubaliano, shughuli ya kwanza katika block ni shughuli maalum ambayo huanza sarafu mpya inayomilikiwa na muundaji wa block. Hii inaongeza motisha kwa nodi kusaidia mtandao, na hutoa njia ya awali ya kusambaza sarafu katika mzunguko, kwa kuwa hakuna kati mamlaka ya kuzitoa. Aidha ya kutosha ya mara kwa mara ya kiasi cha sarafu mpya ni sawa na wachimbaji dhahabu wanaotumia rasilimali kuongeza dhahabu kwenye mzunguko. Kwa upande wetu, ni Muda wa CPU na umeme unaotumika.

Motisha pia inaweza kufadhiliwa na ada za muamala. Ikiwa thamani ya pato la shughuli nichini ya thamani yake ya ingizo, tofauti ni ada ya muamala ambayo huongezwa kwa motisha thamani ya kizuizi kilicho na shughuli. Mara baada ya predetermined idadi ya sarafu na
aliingia katika mzunguko, motisha inaweza mpito kabisa kwa ada ya manunuzi na kuwa kabisa bila mfumuko wa bei.

Motisha inaweza kusaidia kuhimiza nodi kukaa waaminifu. Ikiwa mshambuliaji mwenye tamaa anaweza kukusanyika nguvu zaidi ya CPU kuliko nodi zote za uaminifu, angelazimika kuchagua kati yakuitumia kuwalaghai watu kwa kuiba malipo yake, au kuitumia kutengeneza sarafu mpya.Anapaswa kupata faida zaidi kucheza na sheria, sheria kama hizo ambazo zinampendelea zaidi sarafu mpya kuliko kila mtu mwingine pamoja, kuliko kudhoofisha mfumo na uhalali wa utajiri wake mwenyewe.

## Kurudisha Nafasi ya Diski

Mara baada ya shughuli ya hivi karibuni katika sarafu kuzikwa chini ya vitalu vya kutosha, shughuli zilizotumika kabla ya kutupwa ili kuhifadhi nafasi ya diski. Ili kuwezesha hili bila kuvunja block hashi, miamala huharakishwa katika Mti wa Merkle [7][2][5], na mzizi pekee umejumuishwa kwenye hash ya block. Blocks vya zamani vinaweza kuunganishwa kwa kukata matawi ya mti. The hashes za ndani hazihitaji kuhifadhiwa. 

![](./reclaiming-disk-space.svg)

Kichwa cha kuzuia kisicho na miamala kitakuwa takriban baiti 80. Ikiwa tunadhani blocks yanayotokana kila dakika 10, 80 byte * 6 * 24 * 365 = 4.2MB kwa mwaka. Na kompyuta mifumo ya kawaida inauzwa na 2GB ya RAM kama ya 2008, na Sheria ya Moore inayotabiri sasa ukuaji wa 1.2GB kwa mwaka, hifadhi haipaswi kuwa tatizo hata kama vichwa vya kuzuia vinapashwa kuwekwa kwenye kumbukumbu.

## Uthibitishaji wa Malipo Uliorahisishwa

Inawezekana kuthibitisha malipo bila kuendesha nodi kamili ya mtandao. Mtumiaji anahitaji tu weka nakala ya vichwa vya kuzuia vya mlolongo mrefu zaidi wa uthibitisho wa kazi, ambao anaweza kupata kuhoji nodi za mtandao hadi athibitishwe kuwa ana msururu mrefu zaidi, na kupata Merkle branch linalounganisha muamala kwenye kizuizi ambacho umetiwa muhuri wa wakati. Hawezi kuangalia muamala kwa ajili yake mwenyewe, lakini kwa kuiunganisha na mahali kwenye mlolongo, anaweza kuona kwamba node ya mtandao ina iliikubali, na vizuizi vilivyoongezwa baada ya kuthibitisha zaidi mtandao umeikubali.

![](./simplified-payment-verification.svg)

Kwa hivyo, uthibitishaji ni wa kuaminika mradi tu nodi za uaminifu zidhibiti mtandao, lakini ni zaidi hatarini iwapo mtandao ukizidiwa nguvu na mshambulizi. Wakati nodi za mtandao zinaweza kuthibitisha shughuli zao wenyewe, njia iliyorahisishwa inaweza kudanganywa na mshambulizi iliyoundwa shughuli kwa muda mrefu kama mshambuliaji anaweza kuendelea kuushinda mtandao. Mkakati mmoja kulinda dhidi ya hii itakuwa kukubali arifa kutoka kwa nodi za mtandao wakati wanagundua kizuizi batili, kinachosababisha programu ya mtumiaji kupakua kizuizi kamili na kuarifiwa shughuli za kuthibitisha kutokwenda. Biashara zinazopokea malipo ya mara kwa mara zitapokealabda bado wanataka kuendesha nodi zao kwa usalama huru zaidi na haraka uthibitishaji.

## Kuchanganya na Kugawanya Thamani

Ingawa itawezekana kushughulikia sarafu kibinafsi, itakuwa ngumu kutengeneza muamala tofauti kwa kila senti katika uhamisho. Ili kuruhusu thamani kugawanywa na kuunganishwa, miamala ina pembejeo na matokeo mengi. Kwa kawaida kutakuwa na pembejeo moja kutoka kwa muamala mkubwa wa awali au pembejeo nyingi zinazochanganya kiasi kidogo, na zaidi matokeo mawili: moja kwa ajili ya malipo, na moja kurudisha mabadiliko, kama yapo, kurudi kwa mtumaji.

![](./combining-splitting-value.svg)

Ikumbukwe kwamba shabiki-nje, ambapo shughuli inategemea shughuli kadhaa, na shughuli hizo zinategemea nyingi zaidi, sio shida hapa. Kamwe hakuna haja ya toa nakala kamili ya pekee ya historia ya muamala.

## Faragha

Mtindo wa kitamaduni wa benki hufikia kiwango cha faragha kwa kuzuia ufikiaji wa habari kwa pande zinazohusika na mtu wa tatu anayeaminika. Umuhimu wa kutangaza shughuli zote inazuia hadharani njia hii, lakini faragha bado inaweza kudumishwa kwa kuvunja mtiririko wa habari mahali pengine: kwa kuweka funguo za umma bila majina. Umma unaweza kuona hilo mtu anatuma kiasi kwa mtu mwingine, lakini bila maelezo ya kuunganisha muamala kwa mtu yeyote. Hii ni sawa na kiwango cha habari iliyotolewa na hisa kubadilishana, ambapo muda na ukubwa wa biashara ya mtu binafsi, "mkanda", ni kwa umma, lakini bila kueleza vyama ni akina nani.

![](./privacy.svg)

Kama ngome ya ziada, jozi mpya ya vitufe inapaswa kutumika kwa kila shughuli ili kuziweka kutoka kwa kuhusishwa na mmiliki wa kawaida. Baadhi ya kuunganisha bado hakuwezi kuepukika kwa pembejeo nyingi shughuli, ambazo lazima zifichue kwamba pembejeo zao zilimilikiwa na mmiliki mmoja. The hatari ni kwamba ikiwa mmiliki wa ufunguo utafichuliwa, kuunganisha kunaweza kufichua miamala mingine ambayo ilikuwa ya mmiliki mmoja.

## Mahesabu

Tunazingatia hali ya mshambulizi anayejaribu kutengeneza msururu mbadala kwa haraka zaidi kuliko mlolongo wa uaminifu. Hata kama hii imekamilika, haitoi mfumo wazi kwa kiholela mabadiliko, kama vile kuunda thamani kutoka kwa hewa nyembamba au kuchukua pesa ambazo hazikuwa za mshambuliaji. Nodi hazitakubali muamala batili kama malipo, na nodi za uaminifu haitakubali kamwe kizuizi kilicho nazo. Mshambulizi anaweza tu kujaribu kubadilisha moja yake shughuli za kurejesha pesa alizotumia hivi karibuni. 

Mbio kati ya mlolongo wa uaminifu na mnyororo wa washambuliaji inaweza kuwa na sifa kama Kutembea kwa nasibu kwa Binomial. Tukio la mafanikio ni mlolongo wa uaminifu unaopanuliwa na mmoja kuzuia, ikiongeza uongozi wake kwa +1, na tukio la kutofaulu ni mlolongo wa mshambuliaji unaopanuliwa kwa block moja, kupunguza pengo kwa -1.

Uwezekano wa mshambuliaji kupata nakisi fulani ni sawa na Mcheza kamari.Tatizo la uharibifu. Tuseme mcheza kamari aliye na mkopo usio na kikomo anaanza na upungufu na anacheza. uwezekano wa idadi isiyo na kikomo ya majaribio ya kujaribu kufikia uvunjaji. Tunaweza kuhesabu uwezekano atawahi kufikia uvunjaji, au kwamba mshambuliaji atawahi kupatana na waaminifu mlolongo, kama ifuatavyo[8] :

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
        <mtext>&#xA0;uwezekano wa nodi ya uaminifu hupata block</mtext>
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
        <mtext>&#xA0;uwezekano unaofuata mshambuliaji kupata inayofuata</mtext>
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
          <mtext>&#xA0;uwezekano wa mshambuliaji atawahi kupata kutoka kwa vizuizi &#xA0;</mtext>
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

Kwa kuzingatia dhana yetu kwamba
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>p</mi>
  <mo>&#x003E;<!-- > --></mo>
  <mi>q</mi>
</math>

, the probability drops exponentially as the number of blocks the attacker has to catch up with increases. With the odds against him, if he doesn't make a lucky lunge forward early on, his chances become vanishingly small as he falls further behind.

We now consider how long the recipient of a new transaction needs to wait before being sufficiently certain the sender can't change the transaction. We assume the sender is an attacker who wants to make the recipient believe he paid him for a while, then switch it to pay back to himself after some time has passed. The receiver will be alerted when that happens, but the sender hopes it will be too late.

The receiver generates a new key pair and gives the public key to the sender shortly before signing. This prevents the sender from preparing a chain of blocks ahead of time by working on it continuously until he is lucky enough to get far enough ahead, then executing the transaction at that moment. Once the transaction is sent, the dishonest sender starts working in secret on a parallel chain containing an alternate version of his transaction.

The recipient waits until the transaction has been added to a block and z
blocks have been linked after it. He doesn't know the exact amount of progress the attacker has made, but assuming the honest blocks took the average expected time per block, the attacker's potential progress will be a Poisson distribution with expected value:

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

To get the probability the attacker could still catch up now, we multiply the Poisson density for each amount of progress he could have made by the probability he could catch up from that point:

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

Rearranging to avoid summing the infinite tail of the distribution...

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

Converting to C code...

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

Running some results, we can see the probability drop off exponentially with z.

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

## Hitimisho

Tumependekeza mfumo wa miamala ya kielektroniki bila kutegemea uaminifu. Tulianza na mfumo wa kawaida wa sarafu zilizotengenezwa kutoka kwa saini za dijiti, ambayo hutoa nguvu udhibiti wa umiliki, lakini haujakamilika bila njia ya kuzuia matumizi ya mara mbili. Kusuluhisha hili, tulipendekeza mtandao wa rika-kwa-rika kwa kutumia uthibitisho wa kazi kurekodi historia ya umma miamala ambayo haraka inakuwa isiyowezekana kwa mvamizi kubadilisha ikiwa nodi za uaminifu hudhibiti nguvu nyingi za CPU. mtandao ni imara katika unstructured yake usahili. Nodi hufanya kazi zote mara moja na uratibu mdogo. Hawahitaji
kutambuliwa,
kwa kuwa ujumbe hauelezwi mahali fulani mahususi na unahitaji tu kuwasilishwa kwa msingi bora wa juhudi. Nodi zinaweza kuondoka na kujiunga na mtandao kwa hiari, kukubali uthibitisho wa kazimnyororo kama uthibitisho wa kile kilichotokea wakiwa wamekwenda. Wanapiga kura kwa nguvu zao za CPU, kueleza kukubali kwao vitalu halali kwa kufanyia kazi kuvirefusha na kukataa vitalu batili kwa kukataa kuvifanyia kazi. Sheria na motisha zozote zinazohitajika zinaweza kutekelezwa na utaratibu huu wa makubaliano.

## References

1. W. Dai, ["b-money,"](https://nakamotoinstitute.org/b-money/) [http://www.weidai.com/bmoney.txt](http://www.weidai.com/bmoney.txt), 1998.
2. H. Massias, X.S. Avila, and J.-J. Quisquater, ["Design of a secure timestamping service with minimal trust requirements,"](https://nakamotoinstitute.org/secure-timestamping-service.pdf) In 20th Symposium on Information Theory in the Benelux, May 1999.
3. S. Haber, W.S. Stornetta, ["How to time-stamp a digital document,"](https://nakamotoinstitute.org/time-stamp-digital-document.pdf) In Journal of Cryptology, vol 3, no 2, pages 99-111, 1991.
4. D. Bayer, S. Haber, W.S. Stornetta, ["Improving the efficiency and reliability of digital time-stamping,"](https://nakamotoinstitute.org/improving-time-stamping.pdf) In Sequences II: Methods in Communication, Security and Computer Science, pages 329-334, 1993.
5. S. Haber, W.S. Stornetta, ["Secure names for bit-strings,"](https://nakamotoinstitute.org/secure-names-bit-strings.pdf) In Proceedings of the 4th ACM Conference on Computer and Communications Security, pages 28-35, April 1997.
6. A. Back, ["Hashcash - a denial of service counter-measure,"](https://nakamotoinstitute.org/hashcash.pdf) ][http://www.hashcash.org/papers/hashcash.pdf](http://www.hashcash.org/papers/hashcash.pdf), 2002.
7. R.C. Merkle, ["Protocols for public key cryptosystems,"](https://nakamotoinstitute.org/public-key-cryptosystems.pdf) In Proc. 1980 Symposium on Security and Privacy, IEEE Computer Society, pages 122-133, April 1980.
8. W. Feller, ["An introduction to probability theory and its applications,"](https://nakamotoinstitute.org/introduction-probability-theory-vol-i.pdf) 1957.