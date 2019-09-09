// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var countDigits = function(string) {
  // count how many digits are in a string
  var digitCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
      digitCount += 1;
    }
  }
  return digitCount;
};

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if (typeof(cardNumber) === 'number') {
    cardNumber = String(cardNumber);
    }

    const creditCardInfo = {
    DINERS_CLUB: {
      length: 14,
      prefix: /(^38)|(^39)/},
    AMERICAN_EXPRESS: {
      length: 15,
      prefix: /(^34)|(^37)/},
    VISA: {
      length: [13, 16, 19],
      prefix: /^4/
    },
    MASTERCARD: {
      length: 16,
      prefix: /(^51)|(^52)|(^53)|(^54)|(^55)/
    },
    DISCOVER: {
      length: [16, 19],
      prefix: /(^6011)|(^644)|(^645)|(^646)|(^647)|(^648)|(^649)|(^65)/
    },
    MAESTRO: {
      length: [12, 13, 14, 15, 16, 17, 18, 19],
      prefix: /(^5018)|(^5020)|(5038)|(6304)/
    },
    CHINA_UNIONPAY: {
      length: [16, 17, 18, 19],
      prefix: /(^62212[6-9])|(^6221[3-9][0-9])|(^622[2-8][0-9][0-9])|(^6229[0-1][0-9])|(^62292[0-5])|(^62[4-6])|(^628[2-8])/
    },
    SWITCH: {
      length: [16, 18, 19],
      prefix: /(^4903)|(^4905)|(^4911)|(^4936)|(^564182)|(^633110)|(^6333)|(^6759)/
    }
    };

    if (countDigits(cardNumber) === creditCardInfo.DINERS_CLUB.length && creditCardInfo.DINERS_CLUB.prefix.test(cardNumber)) {
      return "Diner's Club";
    } else if (countDigits(cardNumber) === creditCardInfo.AMERICAN_EXPRESS.length && creditCardInfo.AMERICAN_EXPRESS.prefix.test(cardNumber)) {
      return "American Express";
    } else if (creditCardInfo.VISA.length.includes(countDigits(cardNumber)) && creditCardInfo.SWITCH.length.includes(countDigits(cardNumber)) && creditCardInfo.VISA.prefix.test(cardNumber) && creditCardInfo.SWITCH.prefix.test(cardNumber)) {
      return "Switch";
    } else if (creditCardInfo.VISA.length.includes(countDigits(cardNumber)) && creditCardInfo.VISA.prefix.test(cardNumber)) {
      return "Visa";
    } else if (countDigits(cardNumber) === creditCardInfo.MASTERCARD.length && creditCardInfo.MASTERCARD.prefix.test(cardNumber)) {
      return "MasterCard";
    } else if (creditCardInfo.DISCOVER.length.includes(countDigits(cardNumber)) && creditCardInfo.DISCOVER.prefix.test(cardNumber)) {
      return "Discover";
    } else if (creditCardInfo.MAESTRO.length.includes(countDigits(cardNumber)) && creditCardInfo.MAESTRO.prefix.test(cardNumber)) {
      return "Maestro";
    } else if (creditCardInfo.CHINA_UNIONPAY.length.includes(countDigits(cardNumber)) && creditCardInfo.CHINA_UNIONPAY.prefix.test(cardNumber)) {
      return "China UnionPay";
    } else if (creditCardInfo.SWITCH.length.includes(countDigits(cardNumber)) && creditCardInfo.SWITCH.prefix.test(cardNumber)) {
      return "Switch";
    }

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


