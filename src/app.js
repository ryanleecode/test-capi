/**
 * @title Raw RPC Subscription Usage
 * @description Interact directly with the RPC node's subscription methods.
 *
 * from https://github.com/paritytech/capi/blob/main/examples/raw_rpc/subscription.eg.ts
 */

import { polkadot } from "@capi/polkadot"
import { $, known } from "capi"

async function main() {
  /// Get an async iterator, which yields subscription events.
  const headerIter = polkadot.connection
    .subscribe("chain_subscribeFinalizedHeads", "chain_unsubscribeAllHeads")
    .iter()

  /// Create a simple counter so that we can break iteration at 3.
  let i = 0

  /// Iterate over its items and ensure they conform to the expected shape.
  for await (const header of headerIter) {
    $.assert(known.$header, header)
    console.log(header)
    i += 1
    if (i === 3) break
  }
}

(async function() {
  await main();
})();