---
translators: 
    - 
        name: "Armand Cronje"
        href: "https://twitter.com/ArmandCronje"
supporters: 
    - 
        name: "HRF"
        href: "https://bitcoinmagazine.com/business/hrf-gifts-4-bitcoin-to-bitcoin-projects"
---

# Verstaan Lightning Network met behulp van 'n Telraam

deur Roy Sheinfeld [2018/03/25](https://medium.com/breez-technology/understanding-lightning-network-using-an-abacus-daad8dc4cf4bs)

<LanguageDropdown/>


Ek het baie positiewe terugvoer ontvang na aanleiding van my vorige artikel, [Lighting Network is die toekoms van Bitcoin](https://medium.com/@kingonly/the-future-of-bitcoin-3187aefe2746). Terwyl ek van die terugvoer gelees het, het dit vir my duidelik geword dat sommige mense nie ten volle verstaan ​​hoe Lightning Network (LN) eintlik werk nie. In hierdie artikel sal ek probeer om die konsep agter LN en sy betalingskanale meer duidelik te maak deur 'n telbord-analogie te gebruik, sonder om in die tegniese spesifiekheid van LN-implementering in te gaan.

Hierdie is 'n telraam:

![](./abacus.png)

Nou, dink aan 'n [LN se betalingskanaal](https://cointelegraph.com/explained/lightning-network-explained#block-5) soos een draad van 'n telraam, waar die krale die bitcoins binne die kanaal voorstel. Wanneer Alice en Bob 'n betalingskanaal tussen hulle skep, deponeer Alice bitcoins vanaf die Blokketting binne die kanaal. Vir nou behoort hierdie bitcoins (bv. 10 bits of 0,00001 BTC) aan Alice. In hierdie voorbeeld is elke kraal gelyk aan een bit:

![](./alice-bob-1.png)

n Telraamdraad en 'n betalingskanaal het gedeelde karaktereienskappe

-**Tweerigting:** soos krale op 'n telraamdraad van links na regs geskuif kan word en vice-versa kan bitcoins van Alice na Bob geskuif word en vice-versa.
- **Eiendomsreg:** in 'n telraam kan krale óf aan die linkerkant óf aan die regterkant wees, nooit in die middel van 'n draad nie. Op dieselfde manier kan bitcoins in 'n betalingskanaal aan Alice of Bob behoort.
- **Vasgestel:** soortgelyk aan die manier waarop krale nie bygevoeg of verwyder kan word van 'n draad nie, kan Alice en Bob bitcoins tussen hulle uitruil. As hulle 'n groter aantal bitcoins wil ruil, sal hulle nog 'n transaksie aan die ketting moet uitvoer.

Dit is hoe die betalingskanaal lyk nadat Alice 2 bits na Bob gestuur het:

![](./alice-bob-2.png)

Alice het nou 8 krale en Bob het 2 krale. Nou, kom ons sê dat Bob ook in LN aan Carol gekoppel is deur 'n 10-bit-betalingskanaal te gebruik:

![](./alice-bob-carol-1.png)

Met LN kan Alice Carol via Bob betaal. In die telraam-analogie, as Alice 2 bits na Carol wil stuur, skuif sy 2 krale in die Alice-Bob-draad na regs (na Bob), en Bob skuif 2 krale in die Bob-Carol-draad na regs (na Carol). Dit is hoe dit lyk nadat Alice vir Carol 2 bits gestuur het:

![](./alice-bob-carol-2.png)

Dit is belangrik om te noem dat as Bob instem om aan hierdie transaksie deel te neem, hy nie Alice se krale kan aanvaar sonder om dieselfde aantal krale na Carol te skuif nie.

Deur die telraam-analogie te gebruik, is dit maklik om die aard van LN-transaksies buite die ketting in die algemeen te verduidelik, en spesifiek wat die vereistes is waaraan 'n betalingskanaal moet voldoen om 'n transaksie te verwerk. Dit is byvoorbeeld maklik om te sien hoe Alice nie vir Carol meer krale kan stuur as wat Bob kan hanteer nie. Dan weer, miskien sal sy dit in die toekoms kan doen met die gebruik van [AMP's](https://bitcoinist.com/atomic-multi-path-help-bitcoin-become-formidable-payment-instrument/), maar dit is 'n storie vir 'n ander artikel ...

**As jy hierdie artikel nuttig gevind het, moet asseblief nie vergeet om handeklappe by te voeg (langdruk om veelvuldige handeklappe by te voeg) en dit te deel nie.**