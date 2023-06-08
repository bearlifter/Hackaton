import { TransferButton } from "Transfer (3)";
import { TotalSupply } from "TotalSupply";

export default function Settings() {
  return <div>
    
    <TransferButton to = "12" amount={5}></TransferButton>
    <TotalSupply></TotalSupply>
  </div>;
}