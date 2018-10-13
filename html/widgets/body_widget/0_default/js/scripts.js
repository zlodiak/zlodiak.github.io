console.log('widget start');
const tableEl = $('#table');
console.log('tableEl', tableEl);
console.log('tableEl html', tableEl.html());
tableEl.on('click', () => { alert('click!'); });