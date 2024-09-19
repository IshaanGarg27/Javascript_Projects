const div = document.getElementById('div')

window.addEventListener('keydown' , (e) => {
    console.log(e);
    div.innerHTML = `
                <table class="table" border="solid aqua 4px">
                <thead>
                    <tr>
                        <td>Key</td>
                        <td>Code</td>
                        <td>keyCode</td>
                    </tr>
                    <tr>
                        <td>${e.key}</td>
                        <td>${e.code}</td>
                        <td>${e.keyCode}</td>
                    </tr>
                </thead>
                </table>`
})