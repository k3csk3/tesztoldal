let amountInput = document.querySelector("input[name='amount-input']")

/*az amountInputnak megadtam, hogy az értéke az az input legyen, aminek a neve az, 
hogy "amount-input".Tehát, ha nyomok egy amountInputot, leírja a tulajdonságait,
ha pedig az "amountInput.value"-t kérem, akkor azt, amit beleírtak.*/

let ár = 1200;

let végösszeg = parseInt(amountInput.value) * ár;