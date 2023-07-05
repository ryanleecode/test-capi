import { net } from "capi/nets"

export const polkadot = net.ws({
  url: "wss://rpc.polkadot.io/",
})