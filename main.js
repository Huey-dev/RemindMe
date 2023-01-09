window.addEventListener('load', () => {
    todo = JSON.parse(localStorge.getItem('todos')) || [    ]
})