import Layzr from 'layzr.js'

const lazyLoader = Layzr({
  normal: 'data-normal',
  threshold: 35
})

const main = () => {
  lazyLoader
    .update()
    .check()
    .handlers(true)
}

document.addEventListener('DOMContentLoaded', main)
