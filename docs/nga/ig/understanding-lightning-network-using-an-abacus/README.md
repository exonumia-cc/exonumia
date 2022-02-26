# Understanding Lightning Network using an Abacus

by Roy Sheinfeld [2018/03/25](https://medium.com/breez-technology/understanding-lightning-network-using-an-abacus-daad8dc4cf4bs)

<LanguageDropdown/>


I’ve received a lot of positive feedback following my previous article, [Lighting Network is the Future of Bitcoin](https://medium.com/@kingonly/the-future-of-bitcoin-3187aefe2746). However, while reading some of the feedback, it became clear to me that some people don’t fully understand how Lightning Network (LN) actually works. In this article, I will try to demystify the concept behind LN and its payment channels using an abacus analogy, without getting into the technical specifics of LN implementation.

This is an abacus:

![](./abacus.png)

Now, think of an [LN’s payment channel](https://cointelegraph.com/explained/lightning-network-explained#block-5) like one wire of an abacus, where the beads represent the bitcoins inside the channel. When Alice and Bob create a payment channel between them, Alice deposit bitcoins from the Blockchain inside the channel. For now, these bitcoins (e.g. 10 bits or 0.00001 BTC) belong to Alice. In this example, each bead equals one bit:

![](./alice-bob-1.png)

An abacus wire and a payment channel have shared characteristics:

- **Bidirectional:** like beads on an abacus wire can be moved from left to right and vice-versa, bitcoins can be moved from Alice to Bob and vice-versa.
- **Ownership:** in an abacus, beads can be either on the left or on the right, never in the middle of a wire. In the same manner, bitcoins in a payment channel can either belong to Alice or Bob.
- **Fixed:** similar to the way beads cannot be added or removed from a wire, Alice and Bob can exchange bitcoins between them, up to the number that was set when opening the payment channel. If they want to exchange a larger number of bitcoins, they will have to perform another on-chain transaction.

This is how the payment channel looks like after Alice sends 2 bits to Bob:

![](./alice-bob-2.png)

Alice now has 8 beads and Bob has 2 beads. Now, let’s say that Bob is also connected in LN to Carol using a 10 bit payment channel:

![](./alice-bob-carol-1.png)

With LN, Alice can pay Carol via Bob. In the abacus analogy, if Alice wants to send 2 bits to Carol, she moves 2 beads in Alice-Bob wire to the right (to Bob), and Bob moves 2 beads in Bob-Carol wire to the right (to Carol). This is how it looks like after Alice sends Carol 2 bits:

![](./alice-bob-carol-2.png)

It’s important to mention that if Bob agrees to participate in this transaction, he can’t accept Alice’s beads without moving the same number of beads to Carol.

Using the abacus analogy, it’s easy to explain the nature of off-chain LN transactions in general, and specifically what are the requirements a payment channel needs to meet in order to process a transaction. For example, it’s easy to see how Alice can’t send Carol more beads than Bob can handle. Then again, maybe in the future she would be able to do it using [AMPs](https://bitcoinist.com/atomic-multi-path-help-bitcoin-become-formidable-payment-instrument/), but that’s a story for another article…

**If you found this article helpful, please don’t forget to add claps (long press to add multiple claps) and share it.**