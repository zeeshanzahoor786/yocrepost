if (typeof __tcfapi !== 'function') {
    console.log('TCF API is not available on this page.');
} else {
    var vendorId = 154;
    var command = 'getTCData';
    function handleTCData(tcData, success) {
        if (success) {
            var vendorConsent = tcData.vendor.consents[vendorId];
            if (vendorConsent) {
                console.log('User has given consent to YOC AG.');
            } else {
                console.log('User has not given consent to YOC AG.');
            }
        } else {
            console.log('Error fetching TCData: ', tcData);
        }
    }
    __tcfapi(command, 2, handleTCData);
}
