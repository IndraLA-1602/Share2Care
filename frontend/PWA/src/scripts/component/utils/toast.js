import Noty from "noty";

/**
 *
 * @param {string} msg
 * @param {Noty.Type} type
 */
const toast = (msg, type = "success") => {
  new Noty({
    type: type,
    text: msg,
    // type,
    theme: "metroui",
  }).show();
};

export default toast;
