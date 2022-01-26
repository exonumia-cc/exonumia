# Koyeba Lightning Network na nzela ya Abakus

na Roy Sheinfeld [2018/03/25](https://medium.com/breez-technology/understanding-lightning-network-using-an-abacus-daad8dc4cf4bs)

<LanguageDropdown/>

Nazwi basango ya malamu na article nakomaki liboso na oyo etali [Lighting Network eza future
ya Bitcoin](https://medium.com/@kingonly/the-future-of-bitcoin-3187aefe2746). Kasi, tango natangi ba commentaires misusu, namoni ‘te bato mosusu ba
comprendre ndenge Lightning Network (LN) ezali penza te. Na article oyo, nakomeka ko limbola
LN n’a ba nzela nayango na analogie ya Abaque, toko kota na kati ya ndenge LN etambolaka te

Oyo eza Abakus:

![](./abacus.png)

Sikoyo, kanisa na [canal yakofuta na LN](https://cointelegraph.com/explained/lightning-network-explained#block-5) lokola singa ya boulier, epai wapi mayaka na kati ezwi
esika ya Bitcoin. Tango Alice n’a Bob bafungoli nzela ya kofutana, Alice atsie ba Bitcoin na nzela
ya Blockchain. Pona sik’oyo, ba Bitcoin (na ndakisa 10 bits to 0,00001BTC) eza ya Alice. Na
ndakisa oyo, liyaka moko na moko ekokani na bit moko:

![](./alice-bob-1.png)

Singa ya Abakus moko n’a nzela yako futa eza ndenge moko:

- **Milekeli mibale:** lokola mayaka ekoki ko koleka epai na epai, na loboko ya mwasi pe na
loboko ya mobali, Bitcoin pe ekoki koleka epai na epai kowuta epai ya Bob ekei epai ya
Alica to pe epai ya Alice ekei epai ya Bob.
- **Mokolo n’ango:** na Abakus, mayaka ekoki kozala na loboko ya mwasi, to pe na loboko y
aya mobali, na kati kati ya singa te. Lolenge moko, ba Bitcoin ya canal ya kofuta moko
ekoki kozala ya Alice to ya Bob.
- **Kobongola:** ndenge moko lokola okoki kolongola to kobakisa mayaka na singa te, Alice
n’a Bo bakoki kopesana ba Bitcoin, tii bakokokisa motango bandimaka the ebandeli. Soki
baling babongola motango ya ba Bitcoin, esengeli basala nzela mosusu pe babandisa ba
transaction mosusu.

This is how the payment channel looks like after Alice sends 2 bits to Bob:

![](./alice-bob-2.png)

Sikoyo Alice aza na mayaka 8 Bob aza na mayaka 2. Sik’oyo, toloba ‘te Bob pe akutani na Carol
na LN na canal kofuta 10 bits :

![](./alice-bob-carol-1.png)

Na LN, Alice akoki kofuta Carol na nzela ya Bob. Na ndakisa ya Abakus, soki Alice alilngin
atindela Carol ba bits 2, ako pusa mayaka 2 na singa oyo ezwami na kati kati ya Bob-Alice na
ngabo ya loboko ya mobali (epai ya Carol). Boye nde eko zala na suka soki Alice atindeli Carol ba
bits 2:

![](./alice-bob-carol-2.png)

Ezali na tina monene koloba ‘te soki Bob andimi kokota na boyokani oyo, akondima kozwa
mayaka ya Alice kaka soki akopesa motango elongobani ya mayaka na Carol.

Bosaleli ya Abakus, kolimbola lolelnge ya boyokani na LN libanda ya sheni ya monene, pe nza
penza na ba kpokoso nyoso canal ya kofuta ekutanaka n’ango pona kokokisa boyokani moko na
moko. Ndakisa, tokoki komona ‘te Alice akoki kotindela Carol mayaka te soki ekoleka epai ya
Bob te. Tango mosusu, na mikolo ezoya ekoki kosalema soki asaleli ba [AMPs](https://bitcoinist.com/atomic-multi-path-help-bitcoin-become-formidable-payment-instrument/), wana nde
tokolobela mokolo mosusu...

**Soki lokasa oyo eza na tin ape esungi yo, kozanga kobetat maboko (ebele ebele) pe kokabola te.**