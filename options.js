$(document).ready(function() {
    var deliveryDetails = {

        // NAIROBI
        "CBDCITY": {"fee": "Free", "expected_date": "24 January"},
        "KILIMANI": {"fee": "KSh 100", "expected_date": "25 January"},
        "BOMAS": {"fee": "KSh 150", "expected_date": "25 January"},
        "BURUBURU": {"fee": "KSh 200", "expected_date": "25 January"},
        "DAGORETTI": {"fee": "KSh 250", "expected_date": "25 January"},
        "EMBAKASI": {"fee": "KSh 300", "expected_date": "25 January"},
        "LUNDA": {"fee": "KSh 350", "expected_date": "25 January"},
        "HURUMA": {"fee": "KSh 400", "expected_date": "25 January"},
        "KAHAWA": {"fee": "KSh 450", "expected_date": "25 January"},
        "KAREN": {"fee": "KSh 500", "expected_date": "25 January"},

        // BARINGO
        "ELDAMARAVINE": {"fee": "KSh 200", "expected_date": "26 January"},
        "KARBARNETTOWN": {"fee": "KSh 250", "expected_date": "27 January"},

        // KIRINYAGA 
        "KAGIO": {"fee": "KSh 250", "expected_date": "27 January"},
        "KERUGOYATOWN": {"fee": "KSh 350", "expected_date": "27 January"},
        "MWEA": {"fee": "KSh 450", "expected_date": "27 January"},


        // MOMBASA
        "LIKONI": {"fee": "KSh 550", "expected_date": "27 January"},
        "NYALI": {"fee": "KSh 650", "expected_date": "27 January"},
        "BAMBURI": {"fee": "KSh 750", "expected_date": "27 January"},

        // KIAMBU 
        "GATUNDU": {"fee": "KSh 550", "expected_date": "27 January"},
        "BANANA": {"fee": "KSh 250", "expected_date": "27 January"},
        "KIKUYU": {"fee": "KSh 750", "expected_date": "27 January"},

        // KAKAMEGA
        "BUTERE": {"fee": "KSh 450", "expected_date": "27 January"},
        "KAKAMEGATOWN": {"fee": "KSh 850", "expected_date": "27 January"},
        "MUMIAS": {"fee": "KSh 950", "expected_date": "27 January"},

        // KISUMU
        "BUTERE": {"fee": "KSh 250", "expected_date": "27 January"},
        "KAKAMEGATOWN": {"fee": "KSh 350", "expected_date": "27 January"},
        "MASENO": {"fee": "KSh 650", "expected_date": "27 January"},

        // NAKURU
        "BAHATI": {"fee": "KSh 150", "expected_date": "27 January"},
        "NAKURUCBD": {"fee": "KSh 250", "expected_date": "27 January"},
        "NAIVASHA": {"fee": "KSh 350", "expected_date": "27 January"},

        // NYANDARUA
        "OLKOROU": {"fee": "KSh 550", "expected_date": "27 January"},

        // UASHIN GISHU
        "BUTERE": {"fee": "KSh 450", "expected_date": "27 January"},
        "KAKAMEGATOWN": {"fee": "KSh 350", "expected_date": "27 January"},
        "MUMIAS": {"fee": "KSh 250", "expected_date": "27 January"},

    };
    
    function updateDeliveryDetails(town) {
        var details = deliveryDetails[town];
        if (details) {
            $('#delivery_fee').text("Delivery fees: " + details.fee);
            $('#expected_date').text("Delivery expected by: " + details.expected_date);
        }
    }

    function populateTowns(city) {
        var townSelect = document.getElementById('town');
        var optionsToShow = townSelect.querySelectorAll('option[data-city="' + city + '"]');
        var firstTownValue = optionsToShow[0] ? optionsToShow[0].value : '';
        
        // Hide all options first
        Array.from(townSelect.options).forEach(option => option.hidden = true);
        
        // Show only the options that match the selected city
        optionsToShow.forEach(option => option.hidden = false);

        // Set the first town as selected and update the delivery details
        if (firstTownValue) {
            townSelect.value = firstTownValue;
            updateDeliveryDetails(firstTownValue);
        }
    }

    $("#city").change(function() {
        var city = $(this).val();
        populateTowns(city);
    });

    $("#town").change(function() {
        var town = $(this).val();
        updateDeliveryDetails(town);
    });

    // Initialize the towns dropdown and delivery details on page load
    $("#city").trigger('change');
});