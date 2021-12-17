document.getElementById('filterInput').addEventListener('keyup', () => {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    let ul = document.getElementById('names');
    let lis = ul.querySelectorAll('li.collection-header');
    let li = ul.querySelectorAll('li.collection-item');
    li.forEach(item => {
        let a = item.getElementsByTagName('a')[0];
       item.style.display = a.innerHTML.toUpperCase().startsWith(filterValue) ? 'block' : 'none';
       
    })

    lis.forEach(item => {
        let b = item.getElementsByTagName('h5')[0];
       item.style.display = b.innerHTML.toUpperCase().startsWith(filterValue) ? 'block' : 'none';
       
    })

    
    
})