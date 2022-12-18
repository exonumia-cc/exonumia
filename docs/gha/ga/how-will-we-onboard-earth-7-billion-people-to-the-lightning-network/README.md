# How Will We Onboard Earth’s 7.753 Billion People To The Lightning Network?

by John Cantrell [2022/01/05](https://twitter.com/JohnCantrell97/status/1478794692313632768)

<LanguageDropdown/>

I ran the numbers, let’s see how we can onboard the entire population of Earth onto the Lightning Network, how long it might take, and what we can do to speed the process up.

To onboard onto the lightning network it requires sending btc into a 2-of-2 multisig funding transaction with your channel partner.  To optimize space in this transaction we want 1 native segwit input and a single channel funding output.  This produces a tx of roughly 121vbytes.

If 100% of the transactions in a block were these channel opening txs we could onboard about 8,264 people to lightning per block.  With a global population of 7.753 billion people it would take roughly 938,166 blocks or 17.8 YEARS for everyone on Earth to have a channel.

Can we do any better? Thankfully, we have a couple options. One option that is possible today is to use batching! Batching means we can open more than one channel in a single transaction.  This means each additional channel can be represented by another output in the funding tx.

Each additional output we add consumes roughly 32vbytes.  With batching the best-case scenario is to fill the block with 1 transaction with 1 input and as many outputs as we can fit.  At 32vbytes per output this means we could open 31,247 channels per block!

Batching gets us a 3.78x improvement and drops the time to onboard the entire Earth to just 4.7 years. This isn’t terrible but it assumes we can use 100% of the block space for almost 5 years.  In reality it will happen slower over a longer time period.  Can we do even better?

It turns out we can, just not (easily) today.  The next optimization would be to support more than two people per channel and use signature aggregation to keep the output size small.  A Multiparty Channel extends the 2-of-2 multisig to a larger N-of-N multisig.

In theory this N could be 10, 100, maybe even 1000. At 10 people per channel we could onboard 312,470 people per block and the entire earth in just 172 days.  While batching gave us a modest improvement in efficiency, multiparty channels allow us to scale in orders of magnitude.

Theoretically they could be built today without any changes to Bitcoin but would require a massive engineering effort because of the complexities of lightning’s penalty mechanism.  Eltoo’s symmetric settlement txs greatly simplify the implementation of multiparty channels.

So can we onboard the entire population to lightning in a reasonable amount of time? It seems like the answer is yes, eventually we will get there. Will everyone on Earth want to be on lightning and need their own channel(s)? That’s not certain but I sure hope so!