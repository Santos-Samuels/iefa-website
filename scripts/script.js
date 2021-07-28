function hideScrollBar() {
    div = document.querySelector('body')

    div.classList.contains('hideScroll') ? div.classList.remove('hideScroll') : div.classList.add('hideScroll')
}