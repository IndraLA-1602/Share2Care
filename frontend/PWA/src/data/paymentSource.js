import CONFIG from "../globals/config";
import redirect from "../scripts/component/utils/redirect";
import toast from "../scripts/component/utils/toast";

class Payment {
  $key = "";
  $prodId = "";
  $cartId = "";
  constructor($prodId, $cartId = false) {
    this.$prodId = $prodId;
    this.$cartId = $cartId;
  }
  async getSnapKey() {
    const token = localStorage.getItem("token");
    const data = {
      prodId: this.$prodId,
    };
    const request = await fetch(CONFIG.BASE_URL + "payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const response = await request.json();
    this.$key = response.client_key;
  }

  async pay() {
    var _this = this;
    await this.getSnapKey();
    window.snap.pay(this.$key, {
      onSuccess: function (result) {
        /* You may add your own implementation here */
        alert("payment success!");
        console.log(result);
      },
      onPending: async function (result) {
        const token = localStorage.getItem("token");
        let data = {
          order_id: result.order_id,
        };
        if (_this.$cartId) {
          data["cart_id"] = _this.$cartId;
        }
        const request = await fetch(CONFIG.BASE_URL + "payment/success", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });
        const response = await request.json();
        toast("Checkout Berhasil", "success");
        redirect("/home");
      },
      onError: function (result) {
        /* You may add your own implementation here */
        toast("Something Error", "error");
        alert("payment failed!");
        console.log(result);
      },
      onClose: function () {
        /* You may add your own implementation here */
        alert("you closed the popup without finishing the payment");
      },
    });
  }
}

export default Payment;
