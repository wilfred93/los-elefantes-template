import './output.css'
let ytShare = document.getElementsByClassName("ytp-share-button")[0]
console.log(ytShare);
if (ytShare) {
    ytShare.remove();
}