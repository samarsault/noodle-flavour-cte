module.exports = {
  bits_id: {
    type: String,
    match: /\d{4}[ABH](A|[0-9])(PS|([ABH]|[0-9])(A|[0-9]))\d{4}G/
  },
  phone: {
    type: String,
    match: /\d{10}/
  }
};
