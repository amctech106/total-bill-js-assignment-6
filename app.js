// تمام ایلمنٹس کو سلیکٹ کیا گیا ہے --------------------

let inp = document.querySelector("input");
let add = document.querySelector("#add");
let show = document.querySelector("#show");
let h6 = document.querySelector("h6");
//خالی ایرے بعد میں ایک ایک ایٹم ایڈ ہوگا ---------------

let bill = [];

///ایٹم ایڈ کیا جارہا ہے ----------------------------------

add.addEventListener("click", function () {
  let num = parseFloat(inp.value);
  bill.push(num/3*10);

  //نمبر ڈالنے کے بعد انپٹ خالی ہوجائے ---------------

  inp.value = "";

  ///یہاں سے زلٹ شو کیا جا رہا ہے ۔ --------------  ---------
  

  show.addEventListener("click", function () {
    let total = Math.round(bill.reduce((item, total) => item + total, 0));
    let discount = Math.round((3 / total) * 100);
    let totalAfterDis = Math.round(total - discount);

    ///یہاں سے رزلٹ کا کام شروع ہو رہا ہے ۔ --------------------

    h6.innerHTML = `
        Total Amount is : ${total}<br>
        3% Discount is : ${discount}<br>
        Paid Amount is : ${totalAfterDis}
    `;
  });
});
