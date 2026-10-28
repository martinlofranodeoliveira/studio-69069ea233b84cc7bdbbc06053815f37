const data=JSON.parse(document.getElementById('preview-data').textContent);
const nav=document.querySelector('nav'), content=document.querySelector('main');
function element(tag,text){const el=document.createElement(tag);if(text!==undefined)el.textContent=text;return el;}
function show(screen){content.replaceChildren(element('h1',screen.name),element('p',screen.description));
 const form=element('form');form.addEventListener('submit',event=>event.preventDefault());
 for(const name of screen.fields){const label=element('label',name),input=element('input');input.placeholder='Exemplo demonstrativo';input.maxLength=200;label.append(input);form.append(label);}
 const feedback=element('p');feedback.setAttribute('role','status');
 for(const name of screen.actions){const button=element('button',name);button.type='button';button.addEventListener('click',()=>{feedback.textContent='Ação demonstrativa: '+name+'. Nenhum dado foi enviado ou salvo.';});form.append(button);}
 content.append(form,feedback);for(const button of nav.children)button.setAttribute('aria-current',String(button.dataset.screen===screen.id));}
for(const screen of data.screens){const button=element('button',screen.name);button.type='button';button.dataset.screen=screen.id;button.addEventListener('click',()=>show(screen));nav.append(button);}show(data.screens[0]);
const list=document.querySelector('#requirements');for(const requirement of data.requirements){const row=element('li');row.append(element('strong',requirement.title));const items=element('ul');for(const item of requirement.acceptance)items.append(element('li',item));row.append(items);list.append(row);}
