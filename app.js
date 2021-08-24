const buyPriceEl = document.querySelector("#buy-price");
const qtyEl = document.querySelector("#qty");
const cmpEl = document.querySelector("#cmp");
const tellMeBtn = document.querySelector("#tell-me-btn");
const output = document.querySelector("#output");

const calculateProfitAndLoss = (costPrice, sellingPrice) => {
    let message = "";
    if(sellingPrice > costPrice){
        let profit = (sellingPrice-costPrice).toFixed(2);
        let profitPercentage = ((profit/costPrice)*100).toFixed(2);
        message = `Yay, you are in a profit of ${profit}. Your profit percentage is ${profitPercentage}%`;
    }else if(costPrice > sellingPrice){
        let loss = (costPrice-sellingPrice).toFixed(2);
        let lossPercentage = ((loss/costPrice)*100).toFixed(2);
        message = `Oh no! you are in a loss of ${loss}. Your loss percentage is ${lossPercentage}%`
    }
    return message;
};

tellMeBtn.addEventListener("click", () => {
  let message = "";
  let buyPrice = buyPriceEl.value;
  let qty = qtyEl.value;
  let cmp = cmpEl.value;
  if (buyPrice && qty && cmp) {
      buyPrice = Number(buyPrice);
      qty = Number(qty);
      cmp = Number(cmp);
      if(qty === 0){
          message = "You bought Nothing.\nYou Got Nothing.";
      }else{
        if (cmp !== buyPrice) {
            message = calculateProfitAndLoss(buyPrice*qty, cmp*qty);
        } else {
          message = "No Pain No Gain - No Gain No Pain";
        }
      }
  }else{
      message = "Hey, you missed one or more field(s)"
  }
  output.innerText = message;
});