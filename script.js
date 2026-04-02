const urlBar = document.getElementById('url-bar');
const goBtn = document.getElementById('go-btn');
const browserView = document.getElementById('browser-view');

function loadSite() {
    let url = urlBar.value.trim();
    if (!url.startsWith('http')) {
        url = 'https://' + url;
    }
    browserView.src = url;
}

goBtn.addEventListener('click', loadSite);
urlBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loadSite();
});
