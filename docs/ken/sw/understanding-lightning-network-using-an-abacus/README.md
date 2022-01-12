---
supporters: 
    - 
        name: "HRF"
        href: "https://bitcoinmagazine.com/business/hrf-gifts-4-bitcoin-to-bitcoin-projects"
translators: 
    - 
        name: "Neo Simba"
        href: "https://twitter.com/neolokosy"
---
# Kuelewa Mtandao wa Umeme kwa kutumia na Abacus

na Roy Sheinfeld [2018/03/25](https://medium.com/breez-technology/understanding-lightning-network-using-an-abacus-daad8dc4cf4bs)

<LanguageDropdown/>


Nimepokea maoni mengi chanya kufuatia nakala yangu iliyopita, Mtandao wa Taa ndio
Mustakabali wa Bitcoin. Hata hivyo, nikisoma baadhi ya maoni, ilinidhihirikia hilo baadhi ya watu
hawaelewi kikamilifu jinsi Mtandao wa Umeme (LN) unavyofanya kazi. Katika hili makala,
nitajaribu kufichua dhana ya LN na njia zake za malipo kwa kutumia mlinganisho wa abacus, bila
kuingia katika maelezo ya kiufundi ya utekelezaji wa LN.

Hii ni abacus:

![](./abacus.png)

Sasa, fikiria [njia ya malipo ya LN](https://cointelegraph.com/explained/lightning-network-explained#block-5) kama waya moja ya abacus, ambapo shanga kuwakilisha bitcoins
ndani ya chaneli. Alice na Bob wanapounda kituo cha malipo kati yao, Alice huweka bitcoins
kutoka kwa Blockchain ndani ya chaneli. Kwa sasa, hizi bitcoins (k.m. biti 10 au 0.00001 BTC) ni
mali ya Alice. Katika mfano huu, kila shanga ni sawa kidogo:

![](./alice-bob-1.png)

Waya ya abacus na kituo cha malipo vina sifa zinazoshirikiwa:

- **Mielekeo miwili:** kama ushanga kwenye waya wa abacus unaweza kuhamishwa kutoka kushoto
kwenda kulia na kinyume chake, bitcoins zinaweza kuhamishwa kutoka Alice hadi Bob na
kinyume chake.
- **Umiliki:** kaƟka abacus, shanga zinaweza kuwa upande wa kushoto au kulia, kamwe kaƟka
katikati ya waya. Vivyo hivyo, bitcoins kwenye njia ya malipo zinaweza pia mali ya Alice au Bob.
- **Imewekwa:** sawa na njia ya shanga haiwezi kuongezwa au kuondolewa kutoka kwa waya, Alice
na Bob anaweza kubadilishana bitcoins kati yao, hadi nambari ambayo iliwekwa wakati kufungua
njia ya malipo. Ikiwa wanataka kubadilishana idadi kubwa ya bitcoins, watalazimika kufanya
shughuli nyingine ya mtandaoni.

Hivi ndivyo njia ya malipo inavyoonekana baada ya Alice kutuma biti 2 kwa Bob:

![](./alice-bob-2.png)

Alice sasa ana shanga 8 na Bob ana shanga 2. Sasa, hebu tuseme kwamba Bob pia ameunganishwa
katika LN kwa Carol kwa kutumia njia ya malipo ya biti 10:

![](./alice-bob-carol-1.png)

Akiwa na LN, Alice anaweza kumlipa Carol kupitia Bob. Katika mlinganisho wa abacus, ikiwa Alice
anataka kutuma bits 2 kwa Carol, anasogeza shanga 2 kwenye waya wa Alice-Bob kwenda kulia
(kwa Bob), na Bob anasogeza shanga 2 ndani Bob-Carol waya kulia (kwa Carol). Hivi ndivyo
inavyoonekana baada ya Alice kutuma Carol 2 bits:

![](./alice-bob-carol-2.png)

Ni muhimu kutaja kwamba ikiwa Bob anakubali kushiriki katika shughuli hii, hawezi kukubali shanga za
Alice bila kuhamisha idadi sawa ya shanga kwa Carol.

Kwa kutumia mlinganisho wa abacus, ni rahisi kueleza asili ya shughuli za LN za nje ya mnyororo
katika jumla, na hasa ni mahitaji gani ambayo kituo cha malipo kinahitaji kutimiza ili kushughulikia
muamala. Kwa mfano, ni rahisi kuona jinsi Alice hawezi kutuma Carol shanga nyingi kuliko Bob
anaweza kushughulikia. Halafu tena, labda katika siku zijazo angeweza kuifanya kwa kutumia
[AMP](https://bitcoinist.com/atomic-multi-path-help-bitcoin-become-formidable-payment-instrument/), lakini hiyo ni hadithi ya makala nyingine...

**Ikiwa umepata nakala hii kuwa ya msaada, tafadhali usisahau kuongeza makofi (bonyeza kwa muda mrefu ili kuongeza makofi mengi) na ushiriki.**