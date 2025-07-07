const account = {
  _balans: 1000, // başlanğıc balans

  get balansInfo() {
    return `Mövcud balans: ${this._balans} AZN`;
  },

  set köçür(məbləğ) {
    if (məbləğ <= this._balans) {
      this._balans -= məbləğ;
      console.log(`${məbləğ} AZN köçürüldü. Yeni balans: ${this._balans} AZN`);
    } else {
      console.log("Kifayət qədər vəsait yoxdur!");
    }
  }
};

// İstifadə nümunəsi:
console.log(account.balansInfo); 
account.köçür = 300;             
console.log(account.balansInfo); 
account.köçür = 800;             
