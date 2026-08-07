export async function loadCategory(view) {
    let response = '';
    const message = '';
    
    if (view === 'algorithm')
        response = await fetch('../view/category/algorithm.html');
    else if (view === 'cSharp')
        response = await fetch('../view/category/csharp.html');
    else if (view === 'javascript')
        response = await fetch('');
    else if (view === 'tSql')
        response = await fetch('');
    else if (view === 'dataStructure')
        response = await fetch('');
    else
        message = 'Category does not found!';

    const html = await response.text();
    document.getElementById('main').innerHTML = html;
}