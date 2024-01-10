import KUTE from 'kute.js' 

export const blueBlobs = KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { repeat: 999, duration: 3000, yoyo: true }
)

export const blackBlobs = KUTE.fromTo(
    '#blob-1-black',
    { path: '#blob-1-black' },
    { path: '#blob-2-black' },
    { repeat: 999, duration: 3000, yoyo: true }
)

const currentPage = window.location.pathname;

document.addEventListener("DOMContentLoaded", () => {
    if (currentPage === '/dist/about.html') {
        blueBlobs.start()
        blackBlobs.start()
    }
})
