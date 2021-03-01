function doAsync(url, onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => onSuccess(xhr.responseText);
    xhr.onerror = () => onError(xhr.statusText);
    xhr.send();
}

// Usage:
doAsync('./index.html', function (data) {
    console.log('Got index.html success');
    doAsync('./style.css', function (data) {
        console.log('Got style.css success');
        doAsync('./script.js', function (data) {
            console.log('Got script.js success');
        })
    })
})