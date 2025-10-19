---
translators: 
    - 
        name: "Tebogo Makgakga"
        href: "https://x.com/tebogo_makgakga/"
supporters: 
    - 
        name: "BitMEX"
        href: "https://blog.bitmex.com/bitmex-grant-translation-of-bitcoin-content-into-african-languages/"
---

# Kunzwisisa Lightning Network tichishandisa Abacus

by Roy Sheinfeld [2018/03/25](https://medium.com/breez-technology/understanding-lightning-network-using-an-abacus-daad8dc4cf4bs)

<LanguageDropdown/>


Ndakawana mhinduro dzakanaka dzakawanda mushure mechinyorwa changu chakapfuura,  [Lighting Network is the Future of Bitcoin](https://medium.com/@kingonly/the-future-of-bitcoin-3187aefe2746). Zvisinei, pandaiverenga dzimwe mhinduro, ndakaona kuti havasi vanhu vese vakanyatso nzwisisa kuti Lightning Network (LN) inonyatsoshanda sei. Muchinyorwa chino, ndichaedza kutsanangura zviri nyore pfungwa yeLN nekushanda kwe mapayment channel ayo, ndichishandisa ngano yeabacus, ndisinga nyanyo pindi mune zviri technical zvemashandisirwo eLN.

Iyi i abacus:

![](./abacus.png)

Ikozvino, funga nezve [LN’s payment channel](https://cointelegraph.com/explained/lightning-network-explained#block-5) sekunge waya imwe ye-abacus, apo mabeads aripo anomiririra mabitcoins ari mukati mechannel. Kana Alice naBob vakagadzira payment channel(nzira yekubhadharisana) pakati pavo, Alice anoisa mabitcoins kubva kuBlockchain iri mukati mechannel. Parizvino, aya mabitcoins (semuenzaniso, 10bits kana 0.00001 BTC) ndeaAlice. Mumuenzaniso uyu, bead rimwe rine huremu hwakaenzana nebit rimwe:

![](./alice-bob-1.png)

Waya yeabacus nepayment channel (nenzira yekubhadhara) zvine zvinhu zvakafanana:

- **Inoshanda kumativi maviri (Bidirectional):** Semabeads aripa waya yeabacus anokwanisa kufambiswa kubva kuruboshwe(left) kuenda kurudyi(right) uye zvichipesana, mabitcoins anogona kuti atumirwe kubva kuna Alice achipihwa Bob kana kupesanisa matumiro acho pakati pavo zvakare.
   
- **Kuva muridzi:** Mukati meabacus, mabeads anogona kunge ari kuruboshwe(left) kana kurudyi(right), haangamboendi pakati pewaya chero zvadi. Saizvozvo, mabitcoins ari mupayment channel (nzira yekubhadharisana) anogona kunge ari aAlice kana aBob.
  
- **Huwandu husingapfurire zvakaiswa pekutanga:** Sezvo mabeads asingakwanise kuwedzerwa kana kubviswa pawaya, Alice naBob vanogona kuchinjana mabitcoins pakati pavo, asi vachingosvika kunhamba yakanga yaiswa pavakavhura payment channel. Kana vachida kuchinjana mabitcoins akawanda, vanofanira kuita imwe on-chain transaction. 

Aya ndiwo maratidziro epayment channel (nzira yekubhadhara) mushure mekunge Alice atumira 2 bits kuna Bob:

![](./alice-bob-2.png)

Alice ava nemabeads masere (8) naBob ava nemabeads maviri (2). Zvino, ngatitii Bob abatanidzwa muLN naCarol vachishandisa 10 bit payment channel (nzira yekubhadharisana):

![](./alice-bob-carol-1.png)

NeLN, Alice anogona kubhadhara Carol kuburikidza naBob. Mumuenzaniso we abacus, kana Alice achida kutumira 2 bits kuna Carol, anofambisa mabeads maviri pawaya yaAlice-Bob achiendesa kurudyi (kuna Bob), uye Bob anofambisa mabeads maviri pawaya yaBob-Carol achiendesa kurudyi (kuna Carol). Aya ndiwo maratidziro ayo mushure mekunge Alice atumira Carol 2 bits:

![](./alice-bob-carol-2.png)

Zvakakosha kutaura kuti kana Bob akabvuma kuvamo mutransaction iyi, haachakwanisa kutora mabeads aAlice asina kufambisa mabeads akafanana kuna Carol.

Kana tichishandisa ngano yeabacus, zvirinyore kutsanangura mamiriro e-off-chain LN transactions, uye   nezvinhu zvinodiwa kuti payment channel igone kuita transaction. Semuenzaniso, zvirinyore kuona kuti Alice haakwanise kutumira Carol mabeads akawanda kupfuura anogona kutambirwa naBob. Asi, pamwe mukufamba kwenguva anogona kuzvikwanisa achishandisa [AMPs](https://bitcoinist.com/atomic-multi-path-help-bitcoin-become-formidable-payment-instrument/), asi iyo yave nyaya yechimwe chinyorwa…

**Kana wawana chinyorwa ichi chichibatsira kunzwisisa kwako, ndokumbirawo kuti usakanganwe kuombera uye nekutumira vamwe.**
