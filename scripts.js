
function convert() {
    var canadian;
    var american;
    var euro;
    var bitcoin;
    var ethereum;
    var currency = document.getElementById("currency").value;
    var amount = parseInt(document.getElementById("amount").value);
    var result = document.getElementById("result");
    var convertTo = document.getElementById("convertTo").value;

    switch (parseInt(currency)) {
        case 0:
            canadian = 1.35;
            american = 1.05;
            bitcoin = 0.000053;
            ethereum = 0.00099;
            euro = 1;
            break;
        case 1:
            canadian = 1.29;
            euro = 0.95;
            bitcoin = 0.000051;
            ethereum = 0.00095;
            american = 1;
            break;
        case 2:
            american = .78;
            euro = .74;
            bitcoin = .000039;
            ethereum = .0007326;
            canadian = 1;
            break;
        case 3:
            canadian = 25422.28;
            american = 19749.60;
            euro = 18861.86;
            ethereum = 18.65;
            bitcoin = 1;
            break;
        case 4:
            canadian = 1356.40;
            american = 1053.72;
            euro = 1006.29;
            bitcoin = 0.054;
            ethereum = 1;
            break;
    }

    switch (parseInt(convertTo)) {
        case 0:
            result.value = (amount * euro).toFixed(2) + "EU (1:" + euro + ")";
            break;
        case 1:
            result.value = (amount * american).toFixed(2) + "USD (1:" + american + ")";
            break;
        case 2:
            result.value = (amount * canadian).toFixed(2) + "CDN (1:" + canadian + ")";
            break;
        case 3:
            result.value = (amount * bitcoin).toFixed(2) + "BTC (1:" + bitcoin + ")";
            break;
        case 4:
            result.value = (amount * ethereum).toFixed(2) + "ETH (1:" + ethereum + ")";
            break;
    }


}