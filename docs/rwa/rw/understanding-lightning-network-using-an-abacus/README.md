# Gusobanukirwa Umurabyo Ukoresheje Abacus

na Roy Sheinfeld [2018/03/25](https://medium.com/breez-technology/understanding-lightning-network-using-an-abacus-daad8dc4cf4bs)

<LanguageDropdown/>

Nakiriye ibitekerezo byinshi byiza bikurikira ingingo yanjye ibanza, [Lighting Network
ni Kazoza ka Bitcoinopen mumadirishya mishya](https://medium.com/@kingonly/the-future-of-bitcoin-3187aefe2746). Ariko, mugihe usoma bimwe
mubitekerezo, byanyeretse ko abantu bamwe batumva neza uburyo Lightning
Network (LN) mu byukuri ikora. Muri iyi ngingo, Nzagerageza kwerekana igitekerezo
inyuma ya LN na imiyoboro yayo yo kwishyura ukoresheje ikigereranyo cya abacus,
utiriwe winjira muburyo bwa tekiniki bwo gushyira mubikorwa LN

Iyi ni abacus:

![](./abacus.png)

Noneho, tekereza kuri [Umuyoboro wo kwishyura wa LN ufunguye mu idirishya rishya](https://cointelegraph.com/explained/lightning-network-explained#block-5)
nkumugozi umwe wa abacus, aho amasaro agereranya Bitcoin imbere umuyoboro.
Iyo Alice na Bob bashizeho umuyoboro wo kwishyura hagati yabo, Alice kubitsa
Bitcoin kuva muri Blockchain imbere mumuyoboro Kuri ubu, iyi Bitcoin (urugero: bits
10 cyangwa 0.00001 BTC) ni iya Alice. Muri uru rugero, buri saro rihwanye na bit:

![](./alice-bob-1.png)

Umugozi wa abacus numuyoboro wo kwishyura bifite ibintu bisangiye:

- **Icyerekezo:** nk'amasaro ku nsinga ya abacus irashobora kwimurwa uhereye
ibumoso ugana iburyo na Ibinyuranye, Bitcoins birashobora kwimurwa kuva
Alice kuri Bob naho ubundi.
- **Nyirubwite:** muri abacus, amasaro arashobora kuba ibumoso cyangwa iburyo,
nta na rimwe hagati y'insinga. Muri ubwo buryo bumwe, Bitcoin mu
muyoboro wo kwishyura irashobora kuba iya Alice cyangwa Bob.
- **Byagenwe:** bisa nuburyo amasaro adashobora kongerwaho cyangwa gukurwa
kumurongo, Alice na Bob barashobora guhana Bitcoin hagati yabo, kugeza ku
mubare washyizweho mugihe ufungura umuyoboro wo kwishyura. Niba
bashaka guhana umubare munini wa Bitcoin, bagomba gukora ikindi gikorwa
cyurunigi.

This is how the payment channel looks like after Alice sends 2 bits to Bob:

![](./alice-bob-2.png)

Alice ubu afite amasaro 8 naho Bob afite amasaro 2. Noneho, reka tuvuge ko Bob
nawe ahujwe muri LN kuri Carol ukoresheje umuyoboro wa 10 bit:

![](./alice-bob-carol-1.png)

Hamwe na LN, Alice arashobora kwishyura Carol akoresheje Bob. mugereranya ya
abacus, niba Alice ashaka kohereza bits 2 kuri Carol, yimura amasaro 2 muri Alice-
Bob wire iburyo (kuri Bob), na Bob yimura amasaro 2 mumurongo wa Bob-Carol
iburyo (kuri Carol). Nuburyo busa nkiyi nyuma yuko Alice yohereje Carol 2 bits:

![](./alice-bob-carol-2.png)

It’s important to mention that if Bob agrees to participate in this transaction, he can’t accept Alice’s beads without moving the same number of beads to Carol.

Ni ngombwa kuvuga ko niba Bob yemeye kugira uruhare muri ubu bucuruzi, we
ntashobora kwemera amasaro ya Alice atimuye umubare umwe wamasaro kuri
Carol. Ukoresheje ikigereranyo cya abacus, biroroshye kubisobanura imiterere ya
ibicuruzwa bitari umunyururu LN muri rusange, kandi byumwihariko nibihe
bisabwa umuyoboro wokwishura ukeneye kubahiriza kugirango utunganyirize
ibikorwa. Kurugero, biroroshye kubona uburyo Alice adashobora kohereza Carol
amasaro menshi kuruta Bob ashobora kubyitwaramo. 
Hanyuma nanone, birashoboka ko ejo hazaza azashobora kubikora akoresheje
[AMPs](https://bitcoinist.com/atomic-multi-path-help-bitcoin-become-formidable-payment-instrument/), ariko iyo ni inkuru yikindi kiganiro...


**Niba wasanze iyi ngingo igufasha, nyamuneka ntuzibagirwe kongeramo amashyi (kanda ndende kugirango wongere amashyi menshi) hanyuma ubisangire.**