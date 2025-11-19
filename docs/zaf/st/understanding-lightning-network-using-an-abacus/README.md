---
translators: 
    -   
        name: "Maipa Todsello"
        href: "maipatodsello@gmail.com"
    -
        name: "Bonoloma Foyane"
        href: "bonolomafoyane.work@gmail.com"
        
supporters: 
    - 
        name: "BitMEX"
        href: "https://blog.bitmex.com/bitmex-grant-translation-of-bitcoin-content-into-african-languages/"
---

# Ho utloisisa Lightning Network ka Abakasi

by Roy Sheinfeld [2018/03/25](https://medium.com/breez-technology/understanding-lightning-network-using-an-abacus-daad8dc4cf4bs)

<LanguageDropdown/>


I’ve received a lot of positive feedback following my previous article, [Lighting Network is the Future of Bitcoin](https://medium.com/@kingonly/the-future-of-bitcoin-3187aefe2746). However, while reading some of the feedback, it became clear to me that some people don’t fully understand how Lightning Network (LN) actually works. In this article, I will try to demystify the concept behind LN and its payment channels using an abacus analogy, without getting into the technical specifics of LN implementation.

Sena ke abacus:

![](./abacus.png)

Joale, nahana ka tsela ea tefo ea LN [LN’s payment channel](https://cointelegraph.com/explained/lightning-network-explained#block-5) e tshwana le thapo e le ’ngoe ea abacus, moo liphala li emela libitcoin tse ka hare ho tsamaiso. Ha Alice le Bob ba theha tsela ea tefo pakeng tsa bona, Alice o kenya libitcoin tse tsoang ho Blockchain ka hare ho kanale. Hajoale, libitcoin tsena (mohlala, 10 bits kapa 0.00001 BTC) ke tsa Alice. Mohlaleng ona, phala e le'ngoe e lekana le bit e le 'ngoe:

![](./alice-bob-1.png)

Thapo ea abacus le tsamaiso ea tefo li na le litshobotsi tse tshwanang:

- **Bidirectional:** joaloka liphala holim’a terata ea abakasi, li ka tsamaea ka litsela tse peli, ho tloha ka letshehadi ho ea ka letona le morao, libitcoin le tsona di ka fetisetsoa ho Alice ho ea ho Bob le morao.
- **Boipuso:** Ka abacus, liphala li ka ba ka letshehali kapa ka letona, empa e seng bohareng ba thapo. Ka tsela e tshwanang, libitcoin ka hare ho tsamaiso ea tefo di ka ba tsa Alice kapa tsa Bob.
- **E sa fetoheng:** jwalo ka ha liphala tse holim’a terata tse sa ka tsa eketsoa kapa ho tlosoa, Alice le Bob ba ka fapanyetsana libitcoin pakeng tsa bona feela ho fihlela palo e behiloeng ha ba bula tsamaiso ea tefo. Ha ba batla ho fapanyetsana palo e kholo haholo, ba tla tlameha ho etsa tsebo e ngoe ea on-chain.
  
Jwale Alice o na le liphala tse 8 mme Bob o na le liphala tse  2. Jwale, ha re re Bob le eena o hokahane le Carol ka LN ho sebelisa tsamaiso ea tefo ea bits tse 10:

![](./alice-bob-2.png)

Alice now has 8 beads and Bob has 2 beads. Now, let’s say that Bob is also connected in LN to Carol using a 10 bit payment channel:

![](./alice-bob-carol-1.png)

Ka LN, Alice a ka lefa Carol  a sebelisa Bob. Ka mohlala oa abacus, haeba Alice a batla ho romella Carol bits tse 2, o tsamaisa phala tse 2 ho thapo ea Alice-Bob ho letona (ho ea ho Bob), mme Bob o phahamisa phala tse 2 ho thapo ea Bob-Carol ho letona (ho ea ho Carol).Sena ke kamoo ho shebahalang ka mor’a hore Alice a romelle Carol bits tse 2:

![](./alice-bob-carol-2.png)

Ho bohlokwa ho bolela hore haeba Bob a lumela ho kenya letsoho phapanyetsanong ena, ha a kgone ho amohela liphala tsa Alice ntle le ho phahamisa palo e tshwanang ea liphala ho Carol.

Ka mohlala oa abacus, ho bonolo ho hlalosa tlhaho ea lipapanyetsano tsa LN tse ka ntle ho blockchain (off-chain) ka kakaretso, le hore tsamaiso ea tefo e lokela ho fihlela eng ho khona ho sebetsa phapanyetsano. Mohlala, ho bonolo ho bona hore Alice ha a kgone ho romella Carol diphala tse fetang tse Bob a ka tsamaisang. Leha ho le jwalo, mohlomong nakong e tlang a ka khona ho etsa sena ka ho sebelisa [AMPs](https://bitcoinist.com/atomic-multi-path-help-bitcoin-become-formidable-payment-instrument/), empa eo ke pale bakeng sa sengoloa se seng… [AMPs](https://bitcoinist.com/atomic-multi-path-help-bitcoin-become-formidable-payment-instrument/), Ka mohlala oa abacus, ho bonolo ho hlalosa tlhaho ea lipapanyetsano tsa LN tse ka ntle ho blockchain (off-chain) ka kakaretso, le hore tsamaiso ea tefo e lokela ho fihlela eng ho khona ho sebetsa phapanyetsano. Mohlala, ho bonolo ho bona hore Alice ha a kgone ho romella Carol diphala tse fetang tse Bob a ka tsamaisang. Leha ho le jwalo, mohlomong nakong e tlang a ka khona ho etsa sena ka ho sebelisa [AMPs](https://bitcoinist.com/atomic-multi-path-help-bitcoin-become-formidable-payment-instrument/), empa eo ke pale bakeng sa sengoloa se seng…

**Haeba o fumane sengoloa sena se thusitse, o se ke wa lebala ho phahamisetsa matsoho (long press ho eketsa matsoho a mangata) mme o arolelane le ba bang.**
