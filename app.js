const books=window.LIBRARY_BOOKS;
const HOME_PAGE_SIZE=5;
const FULL_PAGE_SIZE=10;

const catalogHierarchy=[
 {name:'Все тексты'},
 {name:'Фантастика',children:[
  {name:'Советская фантастика'},
  {name:'Зарубежная фантастика'},
  {name:'Социалистическая фантастика'},
  {name:'Зарубежная фантастика (подборки)',children:[
   {name:'Романы и повести'},
   {name:'Рассказы'},
   {name:'Сборники рассказов'},
   {name:'Кинофантастика'},
   {name:'Чужие'}
  ]}
 ]},
 {name:'Приключенческая',children:[
  {name:'Переводы'},
  {name:'Отечественная'}
 ]},
 {name:'Детективы',children:[
  {name:'Русский детектив и боевик'},
  {name:'Детективы (перевод)'}
 ]},
 {name:'Детская',children:[
  {name:'Сказки'},
  {name:'Сказки (переводы)'},
  {name:'Сборники сказок'},
  {name:'Детская литература'}
 ]},
 {name:'Классика'},
 {name:'Проза, поэзия',children:[
  {name:'Русская поэзия'},
  {name:'Зарубежная поэзия'},
  {name:'Современная проза'},
  {name:'Довоенная литература'},
  {name:'Зарубежная драматургия'},
  {name:'Русская драматургия'},
  {name:'Проза 90-х - 00-х годов'},
  {name:'Проза (переводы)'}
 ]},
 {name:'История',children:[
  {name:'Отечественные исторические романы'},
  {name:'Исторические романы (переводы)'},
  {name:'Мемуары и жизнеописания'}
 ]},
 {name:'Старинная литература',children:[
  {name:'Старинная европейская литература'},
  {name:'Древневосточная литература'},
  {name:'История античности'},
  {name:'Переводы с греческого'},
  {name:'Переводы с латыни'},
  {name:'Китайская литература'}
 ]},
 {name:'Культура, ...логия, ...софия',children:[
  {name:'Культурология'},
  {name:'Античная философия'},
  {name:'Западная философия'},
  {name:'Русская философия'},
  {name:'Восточная философия'},
  {name:'Религиозная литература'},
  {name:'Эзотерика'},
  {name:'Астрология'},
  {name:'Политология'},
  {name:'Психология'}
 ]},
 {name:'Наука',children:[
  {name:'Популярные статьи'},
  {name:'Наука и гипотезы'},
  {name:'Проект 1812 год'},
  {name:'Юриспруденция'},
  {name:'Кибернетика'},
  {name:'Экономика'},
  {name:'Математика'},
  {name:'Экология'},
  {name:'Производство'},
  {name:'Физика'},
  {name:'Химия'}
 ]}
];

const noveltiesFeed=[
 {date:'22.10.26',title:'Аркадий и Борис Стругацкие — Пикник на обочине',sub:'Советская фантастика · сверенный текст',book:'Пикник на обочине'},
 {date:'20.10.26',title:'Михаил Булгаков — Мастер и Маргарита',sub:'Классика · полная редакция с примечаниями',book:'Мастер и Маргарита'},
 {date:'19.10.26',title:'Анна Ахматова — Стихотворения',sub:'Русская поэзия · сборники «Вечер» и «Чётки»',book:'Стихотворения'},
 {date:'17.10.26',title:'Надежда Тэффи — Воспоминания',sub:'История · мемуары и жизнеописания',book:'Воспоминания'},
 {date:'15.10.26',title:'Станислав Лем — Солярис',sub:'Социалистическая фантастика · перевод',book:'Солярис'}
];

const newsFeed=[
 {date:'22.10.26',title:'Обновлена иерархия разделов полного каталога',sub:'Добавлена древовидная навигация по 10 тематическим фондам и подкатегориям'},
 {date:'18.10.26',title:'Завершена вычитка 400 страниц классического фонда',sub:'Сообщество корректоров закрыло очередь OCR-правок за октябрь'},
 {date:'14.10.26',title:'Пополнение в разделе «Мои гости» и историческом архиве',sub:'Обновлены ссылки и зеркала других проектов Lib.ru'},
 {date:'09.10.26',title:'Улучшен режим чтения для экранов с высоким разрешением',sub:'Увеличен базовый кегль и контрастность бумажной темы'},
 {date:'02.10.26',title:'Архив преодолёл отметку в 120 480 текстовых публикаций',sub:'Ежемесячный отчёт о новых поступлениях и сверке текстов'}
];

const guestsSpecialProjects = [
  {title:'Журнал «Самиздат»',domain:'SAMLIB.RU',url:'http://samlib.ru/',since:'2000',desc:'Площадка современной сетевой литературы для публикаций авторов и живого обсуждения.',meta:'9 897 разделов'},
  {title:'Русская классика',domain:'AZ.LIB.RU',url:'http://az.lib.ru/',since:'2012',desc:'Фундаментальное собрание классической словесности с биографиями и библиографией.',meta:'Классический фонд'},
  {title:'Архив фантастики',domain:'FAN.LIB.RU',url:'http://fan.lib.ru/',since:'2004',desc:'Тематический раздел любителей фантастики, критики и авторских публикаций.',meta:'Фантастика и обзоры'},
  {title:'Творчество ветеранов',domain:'ARTOFWAR.RU',url:'http://artofwar.ru/',since:'2004',desc:'Военно-исторический литературный проект, мемуары, проза и документальные очерки.',meta:'Мемуары и проза'},
  {title:'Впечатления «Заграница»',domain:'WORLD.LIB.RU',url:'http://world.lib.ru/',since:'2002',desc:'Путевые заметки, очерки о жизни в разных странах и страноведческие записки.',meta:'847 разделов'},
  {title:'Активный туризм',domain:'TURIZM.LIB.RU',url:'http://turizm.lib.ru/',since:'2002',desc:'Отчёты о водных, горных и пеших походах, лоции, карты и походный опыт.',meta:'Походы и отчёты'},
  {title:'Музыкальный хостинг',domain:'MUSIC.LIB.RU',url:'http://music.lib.ru/',since:'2000',desc:'Авторская песня, рок и независимые музыкальные архивы Рунета.',meta:'8 467 разделов'},
  {title:'Клуб исторической книги',domain:'HISTORY / LIB.RU',url:'http://history.lib.ru/',since:'1996',desc:'Исследования, первоисточники, летописи и историко-биографические труды.',meta:'Исторический архив'},
  {title:'Авторская песня (КСП)',domain:'KSP / LIB.RU',url:'http://ksp.lib.ru/',since:'1995',desc:'Тексты с аккордами, сборники бардовской песни и фестивальные записи.',meta:'306 сборников'}
];

const guestsOtherSites = [
  {title:'LDN-Книги',domain:'LDN-KNIGI.LIB.RU',url:'http://ldn-knigi.lib.ru/',since:'1998',desc:'Редкие эмигрантские издания, мемуары, забытые исторические исследования и архивные публикации.',meta:'Исторический фонд'},
  {title:'Архив переводов Tarranova',domain:'TARRANOVA.LIB.RU',url:'http://tarranova.lib.ru/',since:'2000',desc:'Крупнейший сетевой архив авторских литературных и художественных переводов с европейских и восточных языков.',meta:'Архив переводов'},
  {title:'Толковые словари',domain:'SLOVAR.LIB.RU',url:'http://slovar.lib.ru/',since:'1997',desc:'Электронные словари Даля, Ожегова, Ушакова и справочники по нормам и грамматике русского языка.',meta:'Словарная база'},
  {title:'Военно-воздушная библиотека',domain:'AVIA.LIB.RU',url:'http://avia.lib.ru/',since:'2001',desc:'Собрание книг, чертежей, мемуаров лётчиков и материалов по истории отечественной и мировой авиации.',meta:'Авиация и техника'},
  {title:'ЖЗЛ на Lib.ru',domain:'ZZL.LIB.RU',url:'http://zzl.lib.ru/',since:'1999',desc:'Биографическая коллекция: жизнеописания выдающихся учёных, писателей, полководцев и мыслителей прошлого.',meta:'Биографии и судьбы'}
];

const guestsData = guestsSpecialProjects;

let homeState={cat:'Все тексты',sub:'',leaf:'',author:'',sort:'popularity',page:1};
let fullState={cat:'Все тексты',sub:'',leaf:'',author:'',sort:'popularity',page:1};
let activeBook=books[0],activeChapter=0,readerFont=19;
const grid=document.getElementById('bookGrid'),fullGrid=document.getElementById('fullCatalogGrid');

function renderUpdatesStrip(){
 const combined=[];
 for(let i=0;i<Math.max(noveltiesFeed.length,newsFeed.length);i++){
  if(noveltiesFeed[i])combined.push({type:'novelty',...noveltiesFeed[i]});
  if(newsFeed[i])combined.push({type:'news',...newsFeed[i]});
 }
 const track=document.getElementById('tickerTrack');
 if(track){
  const itemsHtml=combined.map(item=>`<button class="ticker-item" data-book="${item.book||''}"><span class="ticker-badge ${item.type==='news'?'news':''}">${item.type==='news'?'НОВОСТЬ':'НОВИНКА'}</span><b>${item.title}</b><time>${item.date}</time></button>`).join('');
  track.innerHTML=itemsHtml+itemsHtml;
  track.querySelectorAll('.ticker-item').forEach(btn=>btn.addEventListener('click',()=>{
   if(btn.dataset.book){const b=books.find(x=>x.title===btn.dataset.book);if(b){openReader(b);return}}
   const details=document.getElementById('updatesDetails');
   if(details&&details.hidden)toggleUpdatesPanel();
  }));
 }
 const novEl=document.getElementById('noveltiesList'),newsEl=document.getElementById('newsList');
 if(novEl){
  novEl.innerHTML=noveltiesFeed.map(n=>`<button class="update-row" data-book="${n.book}"><time>${n.date}</time><div><b>${n.title}</b><small>${n.sub}</small></div><span class="row-tag">ЧИТАТЬ ↗</span></button>`).join('');
  novEl.querySelectorAll('.update-row').forEach(r=>r.addEventListener('click',()=>openReader(books.find(b=>b.title===r.dataset.book)||books[0])));
 }
 if(newsEl){
  newsEl.innerHTML=newsFeed.map(n=>`<div class="update-row"><time>${n.date}</time><div><b>${n.title}</b><small>${n.sub}</small></div><span class="row-tag news">ХРОНИКА</span></div>`).join('');
 }
}
function toggleUpdatesPanel(){
 const details=document.getElementById('updatesDetails'),btn=document.getElementById('toggleUpdates');
 if(!details||!btn)return;
 const open=details.hidden;
 details.hidden=!open;
 btn.setAttribute('aria-expanded',String(open));
 btn.innerHTML=open?'Скрыть подробности <span>↑</span>':'Смотреть подробнее <span>↓</span>';
}
document.getElementById('toggleUpdates')?.addEventListener('click',toggleUpdatesPanel);
renderUpdatesStrip();

// Collapsible category rails (useful on mobile and desktop)
document.querySelectorAll('.rail-collapse-btn').forEach(btn=>{
 btn.addEventListener('click',()=>{
  const body=document.getElementById(btn.dataset.target);
  if(!body)return;
  const isHidden=body.hidden;
  body.hidden=!isHidden;
  const isOpen=isHidden;
  btn.setAttribute('aria-expanded',String(isOpen));
  const chevron=btn.querySelector('.rail-chevron');
  if(chevron){
   chevron.textContent=isOpen?'⌄':'▸';
  }
 });
});

function matchesFilter(b,state){
 if(state.author&&b.author!==state.author)return false;
 if(!state.cat||state.cat==='Все тексты')return true;
 if(b.category!==state.cat)return false;
 if(!state.sub)return true;
 if(state.sub==='Зарубежная фантастика (подборки)'){
  if(b.subcategory!=='Зарубежная фантастика'&&b.subcategory!=='Зарубежная фантастика (подборки)')return false;
  if(state.leaf&&b.subset&&b.subset.toLocaleLowerCase('ru')!==state.leaf.toLocaleLowerCase('ru'))return false;
  return true;
 }
 return b.subcategory?.toLocaleLowerCase('ru')===state.sub.toLocaleLowerCase('ru');
}
function sortBooks(list,sortMode){
 const arr=[...list];
 if(sortMode==='title')return arr.sort((a,b)=>a.title.localeCompare(b.title,'ru'));
 if(sortMode==='author')return arr.sort((a,b)=>a.author.localeCompare(b.author,'ru'));
 if(sortMode==='newest')return arr.sort((a,b)=>(b.addedOrder||0)-(a.addedOrder||0));
 return arr.sort((a,b)=>(b.popularity||0)-(a.popularity||0));
}
const COVER_VARIANTS=['cover-classic','cover-spine','cover-plate','cover-minimal'];
const COVER_COLOPHONS={
 'cover-classic':`<svg class="cover-colophon" viewBox="0 0 36 24" width="36" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 21 C15 19 8 19 3 20 L3 5 C8 4 15 4 18 6 C21 4 28 4 33 5 L33 20 C28 19 21 19 18 21 Z" stroke-width="1.3" fill="currentColor" fill-opacity="0.15"/><line x1="18" y1="6" x2="18" y2="21" stroke-width="1.3"/><path d="M6 8 C10 7 14 7.5 16 8 M6 11 C10 10 14 10.5 16 11 M6 14 C10 13 14 13.5 16 14" stroke-width="0.8" stroke-opacity="0.5"/><path d="M30 8 C26 7 22 7.5 20 8 M30 11 C26 10 22 10.5 20 11 M30 14 C26 13 22 13.5 20 14" stroke-width="0.8" stroke-opacity="0.5"/><path d="M18 6 Q17 14 15 18 L18 16.5 L21 18 Q19 14 18 6 Z" fill="currentColor" fill-opacity="0.3" stroke-width="0.6"/></svg>`,
 'cover-spine':`<svg class="cover-colophon" viewBox="0 0 36 26" width="36" height="26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 18 L8 23 C8 24.5 16 24.5 16 23 L16 18 Z" stroke-width="1.2" fill="currentColor" fill-opacity="0.15"/><ellipse cx="12" cy="18" rx="4" ry="1.2" stroke-width="1"/><path d="M14 17 C16 12 21 7 29 2 C28 5 25 8 21 11 C25 10 28 8 30 6 C27 10 23 14 17 17 Z" stroke-width="1.2" fill="currentColor" fill-opacity="0.12"/><line x1="14" y1="17" x2="29" y2="2" stroke-width="1"/></svg>`,
 'cover-plate':`<svg class="cover-colophon" viewBox="0 0 36 26" width="36" height="26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="2" y1="24" x2="34" y2="24" stroke-width="1" stroke-opacity="0.45"/><rect x="4.5" y="5" width="6.5" height="19" rx="0.5" stroke-width="1.1" fill="currentColor" fill-opacity="0.12"/><line x1="4.5" y1="8" x2="11" y2="8" stroke-width="0.8" stroke-opacity="0.7"/><line x1="4.5" y1="11" x2="11" y2="11" stroke-width="0.8" stroke-opacity="0.7"/><line x1="4.5" y1="15" x2="11" y2="15" stroke-width="0.8" stroke-opacity="0.7"/><line x1="4.5" y1="18" x2="11" y2="18" stroke-width="0.8" stroke-opacity="0.7"/><line x1="4.5" y1="21" x2="11" y2="21" stroke-width="0.8" stroke-opacity="0.7"/><rect x="11.5" y="3" width="7" height="21" rx="0.5" stroke-width="1.1" fill="currentColor" fill-opacity="0.16"/><line x1="11.5" y1="6.5" x2="18.5" y2="6.5" stroke-width="0.8" stroke-opacity="0.7"/><line x1="11.5" y1="10" x2="18.5" y2="10" stroke-width="0.8" stroke-opacity="0.7"/><line x1="11.5" y1="14" x2="18.5" y2="14" stroke-width="0.8" stroke-opacity="0.7"/><line x1="11.5" y1="17.5" x2="18.5" y2="17.5" stroke-width="0.8" stroke-opacity="0.7"/><line x1="11.5" y1="21" x2="18.5" y2="21" stroke-width="0.8" stroke-opacity="0.7"/><rect x="19" y="4" width="6.5" height="20" rx="0.5" stroke-width="1.1" fill="currentColor" fill-opacity="0.12"/><rect x="20" y="7.5" width="4.5" height="7.5" rx="0.3" stroke-width="0.7" stroke-dasharray="1 0.8" fill="currentColor" fill-opacity="0.18"/><line x1="21" y1="9.5" x2="23.5" y2="9.5" stroke-width="0.6"/><line x1="21" y1="11.5" x2="23.5" y2="11.5" stroke-width="0.6"/><line x1="21" y1="13.5" x2="23.5" y2="13.5" stroke-width="0.6"/><line x1="19" y1="18" x2="25.5" y2="18" stroke-width="0.8" stroke-opacity="0.7"/><line x1="19" y1="21" x2="25.5" y2="21" stroke-width="0.8" stroke-opacity="0.7"/><rect x="26" y="4.5" width="6.5" height="19.5" rx="0.5" stroke-width="1.1" fill="currentColor" fill-opacity="0.14"/><line x1="26" y1="7.5" x2="32.5" y2="7.5" stroke-width="0.8" stroke-opacity="0.7"/><line x1="26" y1="11" x2="32.5" y2="11" stroke-width="0.8" stroke-opacity="0.7"/><line x1="26" y1="15" x2="32.5" y2="15" stroke-width="0.8" stroke-opacity="0.7"/><line x1="26" y1="18.5" x2="32.5" y2="18.5" stroke-width="0.8" stroke-opacity="0.7"/><line x1="26" y1="21.5" x2="32.5" y2="21.5" stroke-width="0.8" stroke-opacity="0.7"/></svg>`,
 'cover-minimal':`<svg class="cover-colophon" viewBox="0 0 32 30" width="32" height="30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 3 C13 1.5 19 1.5 19 3 L19 5 L13 5 Z" stroke-width="1.1" fill="currentColor" fill-opacity="0.15"/><path d="M11 5 L21 5 L20 8 L12 8 Z" stroke-width="1.1" fill="currentColor" fill-opacity="0.2"/><line x1="13" y1="9.5" x2="19" y2="9.5" stroke-width="0.8" stroke-opacity="0.6"/><path d="M8 22 C5 17 5 10 11 8" stroke-width="1.2"/><path d="M24 22 C27 17 27 10 21 8" stroke-width="1.2"/><path d="M10.5 11 C9 14.5 9 17.5 11 20 L21 20 C23 17.5 23 14.5 21.5 11 Z" stroke-width="1.1" fill="currentColor" fill-opacity="0.1"/><path d="M16 18 C14.8 16.5 15 14.5 16 13 C17 14.5 17.2 16.5 16 18 Z" fill="currentColor" stroke-width="0.5" fill-opacity="0.8"/><path d="M10 14 Q16 16.5 22 14 M10 17 Q16 14.5 22 17" stroke-width="0.7" stroke-opacity="0.45"/><rect x="10" y="20" width="12" height="2.5" rx="0.5" stroke-width="1" fill="currentColor" fill-opacity="0.25"/><path d="M9.5 22.5 L7.5 26 C7 27 8 27.5 9 27.5 L23 27.5 C24 27.5 25 27 24.5 26 L22.5 22.5 Z" stroke-width="1.2" fill="currentColor" fill-opacity="0.2"/><line x1="7" y1="27.5" x2="25" y2="27.5" stroke-width="1.2"/></svg>`
};
function getCoverColophonSvg(variant){
 return COVER_COLOPHONS[variant]||COVER_COLOPHONS['cover-classic'];
}
function getCoverVariant(book,i){
 if(book.variant)return book.variant;
 let code=0;
 for(let c=0;c<book.title.length;c++)code=(code+book.title.charCodeAt(c))%COVER_VARIANTS.length;
 return COVER_VARIANTS[(code+(i||0))%COVER_VARIANTS.length];
}
function cardHtml(b,i){
 const variant=getCoverVariant(b,i);
 const colophon=getCoverColophonSvg(variant);
 return `<article class="book-card ${variant}" tabindex="0" role="button" data-title="${b.title}"><div class="cover ${b.color} ${variant}"><span class="cover-top">LIB.RU · ${String(1+i).padStart(2,'0')} / ${b.year}</span><div class="cover-body"><span class="cover-exlibris" aria-hidden="true">${colophon}</span><b>${b.short.replace('\n','<br>')}</b></div><small class="cover-foot">${b.subcategory.toUpperCase()} · ${b.year}</small></div><div class="book-info"><h3>${b.title}</h3><p>${b.author}</p><div class="book-tags"><span>${b.tag}</span><b>↗ ЧИТАТЬ</b></div></div></article>`;
}
function bindCards(container){container.querySelectorAll('.book-card').forEach(card=>{card.addEventListener('click',()=>openReader(books.find(b=>b.title===card.dataset.title)));card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openReader(books.find(b=>b.title===card.dataset.title))}})})}

function buildExplorerTree(containerId,state,onChange){
 const container=document.getElementById(containerId);
 if(!container)return;
 container.innerHTML=catalogHierarchy.map(cat=>{
  const hasChildren=Array.isArray(cat.children)&&cat.children.length>0;
  const isCatOpen=state.cat===cat.name;
  const isCatActive=state.cat===cat.name&&!state.sub;
  const subHtml=hasChildren?`<div class="tree-children" ${isCatOpen?'':'hidden'}>${cat.children.map(sub=>{
   const hasLeaves=Array.isArray(sub.children)&&sub.children.length>0;
   const isSubOpen=isCatOpen&&state.sub===sub.name;
   const isSubActive=isCatOpen&&state.sub===sub.name&&!state.leaf;
   const leafHtml=hasLeaves?`<div class="tree-children" ${isSubOpen?'':'hidden'}>${sub.children.map(leaf=>{
    const isLeafActive=isSubOpen&&state.leaf===leaf.name;
    return `<button type="button" class="tree-btn tree-leaf-btn ${isLeafActive?'active':''}" data-cat="${cat.name}" data-sub="${sub.name}" data-leaf="${leaf.name}"><span class="tree-caret">·</span><span class="tree-label">${leaf.name}</span></button>`;
   }).join('')}</div>`:'';
   return `<div class="tree-node"><button type="button" class="tree-btn tree-sub-btn ${isSubActive?'active':''}" data-cat="${cat.name}" data-sub="${sub.name}" data-has-leaves="${hasLeaves}"><span class="tree-caret">${hasLeaves?(isSubOpen?'▾':'▸'):'├'}</span><span class="tree-label">${sub.name}</span></button>${leafHtml}</div>`;
  }).join('')}</div>`:'';
  return `<div class="tree-node"><button type="button" class="tree-btn ${isCatActive?'active':''}" data-cat="${cat.name}" data-has-children="${hasChildren}"><span class="tree-caret">${hasChildren?(isCatOpen?'▾':'▸'):'■'}</span><span class="tree-folder">${hasChildren?'▤':'▦'}</span><span class="tree-label">${cat.name}</span></button>${subHtml}</div>`;
 }).join('');

 container.querySelectorAll('.tree-btn').forEach(btn=>btn.addEventListener('click',()=>{
  const cat=btn.dataset.cat||'',sub=btn.dataset.sub||'',leaf=btn.dataset.leaf||'';
  state.author='';
  if(leaf){
   state.cat=cat;state.sub=sub;state.leaf=leaf;
  }else if(sub){
   if(state.cat===cat&&state.sub===sub&&!state.leaf&&btn.dataset.hasLeaves==='true'){state.sub='';state.leaf='';}
   else{state.cat=cat;state.sub=sub;state.leaf='';}
  }else{
   if(state.cat===cat&&!state.sub&&btn.dataset.hasChildren==='true'){state.cat='Все тексты';state.sub='';state.leaf='';}
   else{state.cat=cat;state.sub='';state.leaf='';}
  }
  state.page=1;
  onChange();
 }));
}

function formatFilterTitle(state){
 if(state.author)return `АВТОР: ${state.author.toLocaleUpperCase('ru')}`;
 if(state.leaf)return `${state.cat} / ${state.leaf}`.toLocaleUpperCase('ru');
 if(state.sub)return `${state.cat} / ${state.sub}`.toLocaleUpperCase('ru');
 if(state.cat&&state.cat!=='Все тексты')return state.cat.toLocaleUpperCase('ru');
 return 'ВСЕ ТЕКСТЫ';
}

function getPaginationItems(page, totalPages) {
 if (totalPages <= 6) {
  const res = [];
  for (let i = 1; i <= totalPages; i++) res.push(i);
  return res;
 }
 if (page <= 4) {
  return [1, 2, 3, 4, '...', totalPages];
 }
 if (page >= totalPages - 3) {
  return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
 }
 if (page <= Math.floor(totalPages / 2)) {
  return [1, '...', page, page + 1, '...', totalPages];
 } else {
  return [1, '...', page - 1, page, '...', totalPages];
 }
}

function buildPaginationButtonsHtml(currentPage, totalPages) {
 const items = getPaginationItems(currentPage, totalPages);
 let html = `<button type="button" class="page-btn page-btn-prev" data-page="${currentPage - 1}" ${currentPage <= 1 ? 'disabled' : ''} aria-label="Предыдущая страница">←</button>`;

 for (let i = 0; i < items.length; i++) {
  const item = items[i];
  if (typeof item === 'number') {
   const isActive = item === currentPage;
   html += `<button type="button" class="page-btn ${isActive ? 'active' : ''}" data-page="${item}" aria-label="Страница ${item}" ${isActive ? 'aria-current="page"' : ''}>${item}</button>`;
  } else {
   let targetPage;
   if (i === 1) {
    const nextNum = typeof items[i + 1] === 'number' ? items[i + 1] : currentPage;
    targetPage = Math.max(1, nextNum - 1);
   } else {
    const prevNum = typeof items[i - 1] === 'number' ? items[i - 1] : currentPage;
    targetPage = Math.min(totalPages, prevNum + 1);
   }
   html += `<button type="button" class="page-btn page-ellipsis" data-page="${targetPage}" aria-label="Страница ${targetPage}" title="Страница ${targetPage}">…</button>`;
  }
 }

 html += `<button type="button" class="page-btn page-btn-next" data-page="${currentPage + 1}" ${currentPage >= totalPages ? 'disabled' : ''} aria-label="Следующая страница">→</button>`;
 return html;
}

function renderPaginationControls(metaId,navId,state,totalItems,onPageChange,pageSize=FULL_PAGE_SIZE){
 const totalPages=Math.max(1,Math.ceil(totalItems/pageSize));
 if(state.page>totalPages)state.page=totalPages;
 if(state.page<1)state.page=1;
 const startIdx=(state.page-1)*pageSize;
 const shownCount=Math.min(pageSize,Math.max(0,totalItems-startIdx));
 const metaEl=document.getElementById(metaId),navEl=document.getElementById(navId);
 if(metaEl){
  metaEl.textContent=`СТРАНИЦА ${state.page} ИЗ ${totalPages} · ПОКАЗАНО ${shownCount} ИЗ ${totalItems} ТЕКСТОВ`;
 }
 if(!navEl)return;
 if(totalPages<=1){
  navEl.innerHTML='';
  return;
 }
 navEl.innerHTML=buildPaginationButtonsHtml(state.page,totalPages);
 navEl.querySelectorAll('.page-btn').forEach(btn=>btn.addEventListener('click',()=>{
  const next=Number(btn.dataset.page);
  if(next>=1&&next<=totalPages&&next!==state.page){
   state.page=next;
   onPageChange();
  }
 }));
}

function renderHomeCatalog(){
 buildExplorerTree('homeCategoryTree',homeState,renderHomeCatalog);
 let filtered=books.filter(b=>matchesFilter(b,homeState));
 if(!filtered.length)filtered=books.filter(b=>homeState.cat==='Все тексты'||b.category===homeState.cat);
 const sorted=sortBooks(filtered,homeState.sort);
 const totalPages=Math.max(1,Math.ceil(sorted.length/HOME_PAGE_SIZE));
 if(homeState.page>totalPages)homeState.page=1;
 const start=(homeState.page-1)*HOME_PAGE_SIZE;
 const shown=sorted.slice(start,start+HOME_PAGE_SIZE);
 grid.innerHTML=shown.map((b,i)=>cardHtml(b,start+i)).join('');
 document.getElementById('resultLabel').textContent=formatFilterTitle(homeState);
 document.querySelector('#catalog .result-count b').textContent=String(sorted.length).padStart(2,'0');
 renderPaginationControls('homePaginationMeta','homePagination',homeState,sorted.length,()=>{
  renderHomeCatalog();
  document.getElementById('catalog')?.scrollIntoView({behavior:'smooth'});
 },HOME_PAGE_SIZE);
 bindCards(grid);
}

function renderFullCatalog(){
 buildExplorerTree('fullCategoryTree',fullState,renderFullCatalog);
 let filtered=books.filter(b=>matchesFilter(b,fullState));
 if(!filtered.length)filtered=books.filter(b=>fullState.cat==='Все тексты'||b.category===fullState.cat);
 const sorted=sortBooks(filtered,fullState.sort);
 const totalPages=Math.max(1,Math.ceil(sorted.length/FULL_PAGE_SIZE));
 if(fullState.page>totalPages)fullState.page=1;
 const start=(fullState.page-1)*FULL_PAGE_SIZE;
 const shown=sorted.slice(start,start+FULL_PAGE_SIZE);
 if(fullGrid){
  fullGrid.innerHTML=shown.map((b,i)=>cardHtml(b,start+i)).join('');
  document.getElementById('fullCatalogLabel').textContent=formatFilterTitle(fullState);
  document.getElementById('fullCatalogCount').textContent=String(sorted.length).padStart(2,'0');
  renderPaginationControls('fullPaginationMeta','fullPagination',fullState,sorted.length,()=>{
   renderFullCatalog();
   window.scrollTo({top:0,behavior:'smooth'});
  },FULL_PAGE_SIZE);
  bindCards(fullGrid);
 }
}

document.querySelectorAll('#homeSortPills .sort-pill').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('#homeSortPills .sort-pill').forEach(b=>b.classList.toggle('active',b===btn));
 homeState.sort=btn.dataset.sort;homeState.page=1;renderHomeCatalog();
}));
document.querySelectorAll('#fullSortPills .sort-pill').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('#fullSortPills .sort-pill').forEach(b=>b.classList.toggle('active',b===btn));
 fullState.sort=btn.dataset.sort;fullState.page=1;renderFullCatalog();
}));

const RU_ALPHABET=['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
const EN_ALPHABET=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const AUTHORS_PAGE_SIZE=20;
let authorsState={mode:'all',letter:'',page:1};

function getAuthorInitial(author){
 const clean=String(author||'').trim().replace(/^["'«\s]+/,'');
 return clean.charAt(0).toUpperCase();
}
function isRussianAuthor(author){
 return /^[А-ЯЁа-яё]/i.test(getAuthorInitial(author));
}
function isEnglishAuthor(author){
 return /^[A-Za-z]/i.test(getAuthorInitial(author));
}
function formatTextCount(count){
 const mod10=count%10,mod100=count%100;
 if(mod10===1&&mod100!==11)return `${count} ТЕКСТ`;
 if(mod10>=2&&mod10<=4&&(mod100<10||mod100>=20))return `${count} ТЕКСТА`;
 return `${count} ТЕКСТОВ`;
}
function formatAuthorNoun(count){
 const mod10=count%10,mod100=count%100;
 if(mod10===1&&mod100!==11)return 'АВТОР';
 if(mod10>=2&&mod10<=4&&(mod100<10||mod100>=20))return 'АВТОРА';
 return 'АВТОРОВ';
}

function authorChipHtml(author){
 const count=books.filter(b=>b.author===author).length;
 return `<button class="author-chip" data-author="${author}"><span>${author}</span><small>${formatTextCount(count)}</small><b>↗</b></button>`;
}
function bindAuthorChips(container){
 container.querySelectorAll('.author-chip').forEach(button=>button.addEventListener('click',()=>{
  const author=button.dataset.author;
  fullState.author=author;
  fullState.cat='Все тексты';
  fullState.sub='';
  fullState.leaf='';
  fullState.page=1;
  homeState.author=author;
  homeState.cat='Все тексты';
  homeState.sub='';
  homeState.leaf='';
  homeState.page=1;
  renderFullCatalog();
  renderHomeCatalog();
  goTo('catalog');
 }));
}

function getFilteredAuthors(){
 const allAuthors=[...new Set(books.map(b=>b.author))].sort((a,b)=>{
  const aRu=isRussianAuthor(a),bRu=isRussianAuthor(b);
  if(aRu&&!bRu)return -1;
  if(!aRu&&bRu)return 1;
  return a.localeCompare(b,aRu?'ru':'en');
 });
 let filtered=allAuthors;
 if(authorsState.mode==='ru'){
  filtered=filtered.filter(isRussianAuthor);
 }else if(authorsState.mode==='en'){
  filtered=filtered.filter(isEnglishAuthor);
 }
 if(authorsState.letter){
  filtered=filtered.filter(a=>getAuthorInitial(a)===authorsState.letter);
 }
 return filtered;
}

function renderAuthorsAlphabetBar(){
 const bar=document.getElementById('authorsAlphabetBar');
 if(!bar)return;
 if(authorsState.mode==='all'){
  bar.hidden=true;
  bar.style.display='none';
  bar.innerHTML='';
  bar.classList.remove('has-active');
  return;
 }
 bar.hidden=false;
 bar.style.display='flex';
 const alphabet=authorsState.mode==='en'?EN_ALPHABET:RU_ALPHABET;
 const allAuthors=[...new Set(books.map(b=>b.author))];
 const modeAuthors=allAuthors.filter(a=>{
  if(authorsState.mode==='ru')return isRussianAuthor(a);
  if(authorsState.mode==='en')return isEnglishAuthor(a);
  return true;
 });

 bar.classList.toggle('has-active',Boolean(authorsState.letter));
 bar.innerHTML=alphabet.map(letter=>{
  const count=modeAuthors.filter(a=>getAuthorInitial(a)===letter).length;
  const isActive=authorsState.letter===letter;
  const noClass=count===0?'has-no-authors':'';
  return `<button type="button" class="alphabet-letter-btn ${isActive?'active':''} ${noClass}" data-letter="${letter}" title="${count} ${formatAuthorNoun(count)}">${letter}</button>`;
 }).join('');

 bar.querySelectorAll('.alphabet-letter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
   const letter=btn.dataset.letter;
   authorsState.letter=(authorsState.letter===letter)?'':letter;
   authorsState.page=1;
   updateAuthorsUI();
  });
 });
}

function renderAuthorsPagination(totalItems){
 const totalPages=Math.max(1,Math.ceil(totalItems/AUTHORS_PAGE_SIZE));
 if(authorsState.page>totalPages)authorsState.page=totalPages;
 if(authorsState.page<1)authorsState.page=1;
 const startIdx=(authorsState.page-1)*AUTHORS_PAGE_SIZE;
 const shownCount=Math.min(AUTHORS_PAGE_SIZE,Math.max(0,totalItems-startIdx));
 const metaEl=document.getElementById('authorsPaginationMeta');
 const navEl=document.getElementById('authorsPagination');

 if(metaEl){
  if(totalItems===0){
   metaEl.textContent='АВТОРЫ НЕ НАЙДЕНЫ';
  }else{
   metaEl.textContent=`СТРАНИЦА ${authorsState.page} ИЗ ${totalPages} · ПОКАЗАНО ${shownCount} ИЗ ${totalItems} ${formatAuthorNoun(totalItems)}`;
  }
 }
 if(!navEl)return;
 if(totalPages<=1){
  navEl.innerHTML='';
  return;
 }
 navEl.innerHTML=buildPaginationButtonsHtml(authorsState.page,totalPages);

 navEl.querySelectorAll('.page-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
   const next=Number(btn.dataset.page);
   if(next>=1&&next<=totalPages&&next!==authorsState.page){
    authorsState.page=next;
    renderFullAuthorsList();
    document.getElementById('authorsModeSelector')?.scrollIntoView({behavior:'smooth'});
   }
  });
 });
}

function renderFullAuthorsList(){
 const fullList=document.getElementById('fullAuthorList');
 if(!fullList)return;
 const filtered=getFilteredAuthors();
 const totalPages=Math.max(1,Math.ceil(filtered.length/AUTHORS_PAGE_SIZE));
 if(authorsState.page>totalPages)authorsState.page=1;
 const start=(authorsState.page-1)*AUTHORS_PAGE_SIZE;
 const pageAuthors=filtered.slice(start,start+AUTHORS_PAGE_SIZE);

 if(pageAuthors.length===0){
  const letterHint=authorsState.letter?`на букву «${authorsState.letter}»`:''
  fullList.innerHTML=`<div class="authors-empty-state"><p>В данном разделе ${letterHint} пока нет авторов в архиве.</p><button type="button" class="button button-paper" id="authorsResetBtn">Показать всех авторов <span>↗</span></button></div>`;
  document.getElementById('authorsResetBtn')?.addEventListener('click',()=>{
   authorsState.mode='all';
   authorsState.letter='';
   authorsState.page=1;
   updateAuthorsUI();
  });
 }else{
  fullList.innerHTML=pageAuthors.map(authorChipHtml).join('');
  bindAuthorChips(fullList);
 }
 renderAuthorsPagination(filtered.length);
}

function updateAuthorsUI(){
 document.querySelectorAll('#authorsModeSelector .authors-mode-tab').forEach(tab=>{
  const isActive=tab.dataset.mode===authorsState.mode;
  tab.classList.toggle('active',isActive);
  tab.setAttribute('aria-selected',String(isActive));
 });
 renderAuthorsAlphabetBar();
 renderFullAuthorsList();
}

let authorsModeBound=false;
function bindAuthorsModeSelector(){
 if(authorsModeBound)return;
 const container=document.getElementById('authorsModeSelector');
 if(!container)return;
 container.querySelectorAll('.authors-mode-tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
   const mode=btn.dataset.mode;
   if(authorsState.mode===mode)return;
   authorsState.mode=mode;
   authorsState.letter='';
   authorsState.page=1;
   updateAuthorsUI();
  });
 });
 authorsModeBound=true;
}

function renderAuthors(){
 const homeAuthors=[...new Set(books.map(b=>b.author))].sort((a,b)=>a.localeCompare(b,'ru'));
 const homeList=document.getElementById('authorList');
 if(homeList){homeList.innerHTML=homeAuthors.slice(0,3).map(authorChipHtml).join('');bindAuthorChips(homeList);}
 bindAuthorsModeSelector();
 updateAuthorsUI();
}

let guestsCurrentMode = 'special';

function guestCardHtml(g){
 return `<article class="guest-card" data-url="${g.url || ''}" tabindex="0" role="link" title="Перейти на ${g.domain}"><div><div class="guest-top"><span class="guest-domain">${g.domain}</span><span>С ${g.since} Г.</span></div><h3>${g.title}</h3><p>${g.desc}</p></div><div class="guest-foot"><span>${g.meta}</span><span>ОТКРЫТЬ САЙТ ↗</span></div></article>`;
}

function renderGuests(mode = guestsCurrentMode){
 guestsCurrentMode = mode;
 const homeG=document.getElementById('homeGuestsGrid');
 if(homeG) homeG.innerHTML=guestsSpecialProjects.slice(0,3).map(guestCardHtml).join('');
 const fullG=document.getElementById('fullGuestsGrid');
 const currentList = (mode === 'other') ? guestsOtherSites : guestsSpecialProjects;
 if(fullG) fullG.innerHTML=currentList.map(guestCardHtml).join('');
 
 const bindCards = (container) => {
  if (!container) return;
  container.querySelectorAll('.guest-card').forEach(c => {
   const url = c.dataset.url;
   const handleOpen = () => {
    if (url) {
     toast(`Переход на ${url}`);
     window.open(url, '_blank', 'noopener,noreferrer');
    } else {
     toast('Переход в гостевой раздел архива');
    }
   };
   c.addEventListener('click', handleOpen);
   c.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
     e.preventDefault();
     handleOpen();
    }
   });
  });
 };

 bindCards(homeG);
 bindCards(fullG);
}

function bindGuestsModeSelector(){
 const selector = document.getElementById('guestsModeSelector');
 if (!selector) return;
 const tabs = selector.querySelectorAll('.authors-mode-tab');
 tabs.forEach(tab => {
  tab.addEventListener('click', () => {
   const targetMode = tab.dataset.guestsMode;
   if (targetMode === guestsCurrentMode) return;
   tabs.forEach(t => {
    const isTarget = t === tab;
    t.classList.toggle('active', isTarget);
    t.setAttribute('aria-selected', isTarget ? 'true' : 'false');
   });
   renderGuests(targetMode);
  });
 });
}

renderHomeCatalog();renderFullCatalog();renderAuthors();renderGuests();

const searchDialog=document.getElementById('searchDialog'),searchInput=document.getElementById('searchInput'),searchResults=document.getElementById('searchResults');
function openSearch(){searchDialog.showModal();setTimeout(()=>searchInput.focus(),50);updateSearch('')}
document.getElementById('searchOpen').addEventListener('click',openSearch);
document.getElementById('heroSearch').addEventListener('click',openSearch);
const capSearch=document.getElementById('capsuleSearch');
if(capSearch)capSearch.addEventListener('click',openSearch);
searchDialog.addEventListener('click',e=>{if(e.target===searchDialog)searchDialog.close()});
document.querySelectorAll('.search-hint button').forEach(b=>b.addEventListener('click',()=>{searchInput.value=b.dataset.query;updateSearch(b.dataset.query)}));
searchInput.addEventListener('input',()=>updateSearch(searchInput.value));
function updateSearch(query){const q=query.trim().toLocaleLowerCase('ru');const results=books.filter(b=>!q||`${b.title} ${b.author} ${b.category} ${b.subcategory}`.toLocaleLowerCase('ru').includes(q)).slice(0,8);searchResults.innerHTML=results.length?results.map(b=>`<button class="search-result" data-title="${b.title}"><b>${b.title}</b><small>${b.author} · ${b.subcategory}</small></button>`).join(''):`<div class="no-results">Ничего не найдено. Попробуйте другое название или автора.</div>`;searchResults.querySelectorAll('.search-result').forEach(el=>el.addEventListener('click',()=>{searchDialog.close();openReader(books.find(b=>b.title===el.dataset.title))}))}
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}if(e.key==='Escape'){searchDialog.close();document.getElementById('readerDialog').close()}});

const DEFAULT_BOOK_REVIEWS = {
 'Пикник на обочине': [
  {rating:5,comment:'Один из ключевых текстов советской фантастики. Философия Зоны, жесткий реализм и образ Рэдрика Шухарта переданы безупречно.',date:'18.10.2026',user:'Архивный редактор'}
 ],
 'Мастер и Маргарита': [
  {rating:5,comment:'Фундаментальный роман библиотеки. Вычитка текста чистая, сохранены авторские ритм и композиция глав.',date:'12.10.2026',user:'Библиограф Lib.ru'}
 ],
 'Понедельник начинается в субботу': [
  {rating:5,comment:'Остроумная, живая сказка для научных сотрудников. Читается на одном дыхании в любом возрасте.',date:'05.10.2026',user:'Читатель зала'}
 ],
 'Война и мир': [
  {rating:5,comment:'Великий русский эпос. Электронный формат с навигацией по главам позволяет комфортно возвращаться к любимым сценам.',date:'28.09.2026',user:'Читатель фонда'}
 ],
 'Трудно быть богом': [
  {rating:5,comment:'Глубокая психологическая повесть о границах вмешательства в чужую историю. Не теряет актуальности.',date:'22.09.2026',user:'Корректор архива'}
 ]
};

let currentBookRating = 0;
const ROMAN_NUMERALS = ['', 'I', 'II', 'III', 'IV', 'V'];
const ratingScoreDescriptions = [
 '',
 'I из V — Слабо',
 'II из V — Посредственно',
 'III из V — Хорошо',
 'IV из V — Очень хорошо',
 'V из V — Шедевр архива'
];

function updateRatingVisuals(highlightScore, isPermanent = false) {
 const steps = document.querySelectorAll('#ratingScale .rating-step');
 steps.forEach(step => {
  const score = Number(step.dataset.score);
  if (isPermanent) {
   step.classList.toggle('active', score <= highlightScore);
   step.classList.remove('hovered');
  } else {
   step.classList.toggle('hovered', score <= highlightScore);
  }
 });
 const feedback = document.getElementById('ratingFeedback');
 if (feedback) {
  if (highlightScore > 0) {
   feedback.textContent = ratingScoreDescriptions[highlightScore] || `${ROMAN_NUMERALS[highlightScore] || highlightScore} из V`;
   feedback.classList.remove('warning');
  } else {
   feedback.textContent = 'Выберите от I до V';
   feedback.classList.remove('warning');
  }
 }
}

function initRatingScale() {
 const scale = document.getElementById('ratingScale');
 if (!scale) return;
 scale.querySelectorAll('.rating-step').forEach(btn => {
  const score = Number(btn.dataset.score);
  btn.addEventListener('mouseenter', () => updateRatingVisuals(score, false));
  btn.addEventListener('click', () => {
   currentBookRating = score;
   updateRatingVisuals(currentBookRating, true);
  });
 });
 scale.addEventListener('mouseleave', () => {
  updateRatingVisuals(currentBookRating, true);
 });
}

function getBookReviews(bookTitle) {
 const saved = JSON.parse(localStorage.getItem(`libru-reviews-${bookTitle}`) || '[]');
 const defaults = DEFAULT_BOOK_REVIEWS[bookTitle] || [
  {rating:5,comment:'Текст сверен по оригинальным архивным изданиям фонда Lib.ru.',date:'01.10.2026',user:'Редакция архива'}
 ];
 return [...saved, ...defaults];
}

function renderBookReviewsUI(book) {
 if (!book) return;
 currentBookRating = Number(localStorage.getItem(`libru-user-rating-${book.title}`)) || 0;
 updateRatingVisuals(currentBookRating, true);

 const commentInput = document.getElementById('reviewComment');
 if (commentInput) {
  const savedComment = localStorage.getItem(`libru-user-comment-${book.title}`) || '';
  commentInput.value = savedComment;
 }

 const reviews = getBookReviews(book.title);
 const countEl = document.getElementById('bookReviewsCount');
 if (countEl) countEl.textContent = String(reviews.length);

 const listEl = document.getElementById('bookReviewsList');
 if (listEl) {
  listEl.innerHTML = reviews.map(r => {
   const isUser = Boolean(r.isUser);
   const commentHtml = r.comment
    ? `<p class="review-comment-text">${r.comment.replace(/\n/g, '<br>')}</p>`
    : `<p class="review-comment-text empty-comment">Оценка сохранена без комментария</p>`;
   const romanScore = ROMAN_NUMERALS[r.rating] || r.rating;
   return `
    <article class="review-item ${isUser ? 'user-review' : ''}">
      <div class="review-item-head">
        <div class="review-user-info">
          <span class="review-user-name">${r.user || 'Читатель архива'}</span>
          ${isUser ? '<span class="review-user-tag">ВАШ ОТЗЫВ</span>' : ''}
          <time class="review-date">${r.date || '2026'}</time>
        </div>
        <span class="review-badge">★ ${romanScore} / V</span>
      </div>
      ${commentHtml}
    </article>
   `;
  }).join('');
 }
}

function handleReviewSubmit() {
 if (!activeBook) return;
 if (currentBookRating < 1 || currentBookRating > 5) {
  const feedback = document.getElementById('ratingFeedback');
  if (feedback) {
   feedback.textContent = 'Пожалуйста, сначала выберите оценку от I до V!';
   feedback.classList.add('warning');
  }
  toast('Пожалуйста, выберите оценку от I до V');
  return;
 }

 const commentInput = document.getElementById('reviewComment');
 const comment = commentInput ? commentInput.value.trim() : '';

 localStorage.setItem(`libru-user-rating-${activeBook.title}`, String(currentBookRating));
 localStorage.setItem(`libru-user-comment-${activeBook.title}`, comment);

 const existing = JSON.parse(localStorage.getItem(`libru-reviews-${activeBook.title}`) || '[]');
 const updated = existing.filter(r => !r.isUser);
 const now = new Date();
 const dateStr = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;
 updated.unshift({
  rating: currentBookRating,
  comment: comment,
  date: dateStr,
  user: 'Вы (читатель)',
  isUser: true
 });
 localStorage.setItem(`libru-reviews-${activeBook.title}`, JSON.stringify(updated));

 const romanScore = ROMAN_NUMERALS[currentBookRating] || currentBookRating;
 toast(comment ? `Ваш отзыв и оценка ${romanScore}/V сохранены!` : `Оценка ${romanScore}/V сохранена!`);
 renderBookReviewsUI(activeBook);
 if(typeof updateReaderBadges==='function')updateReaderBadges();
}

function scrollToReviewSection() {
 const sec = document.getElementById('bookReviewSection');
 if (sec && readingContent) {
  const contentRect = readingContent.getBoundingClientRect();
  const secRect = sec.getBoundingClientRect();
  const targetTop = readingContent.scrollTop + (secRect.top - contentRect.top) - 16;
  readingContent.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
 }
}

function scrollToTextTop() {
 const readerLayout = document.querySelector('.reader-layout');
 if (readerLayout) readerLayout.scrollTop = 0;
 if (readingContent) {
  readingContent.scrollTo({ top: 0, behavior: 'smooth' });
 }
}

const readerDialog=document.getElementById('readerDialog'),reader=document.querySelector('.reader'),readingContent=document.getElementById('readingContent');
function renderChapter(){
 const chapter=activeBook.chapters[activeChapter];
 document.getElementById('chapterMark').textContent=activeBook.author.toLocaleUpperCase('ru');
 document.getElementById('readingHeading').textContent=activeBook.title;
 document.getElementById('readingByline').textContent=`— ${chapter} —`;
 const reviewTag=document.getElementById('reviewChapterTag');
 if(reviewTag)reviewTag.textContent=`— ${chapter} —`;
 document.getElementById('readingText').innerHTML=activeBook.text.map((p,i)=>i===1?`<blockquote>«${p}»</blockquote>`:`<p>${p.replaceAll('\n','<br>')}</p>`).join('');
 document.querySelectorAll('.chapter-button').forEach((b,i)=>b.classList.toggle('active',i===activeChapter));
 const readerLayout=document.querySelector('.reader-layout');
 if(readerLayout)readerLayout.scrollTop=0;
 readingContent.scrollTop=0;
 updateProgress();
 if(typeof updateReaderBadges==='function')updateReaderBadges();
}
function openReader(book){
 activeBook=book;
 activeChapter=0;
 const readerLayout=document.querySelector('.reader-layout');
 if(readerLayout)readerLayout.scrollTop=0;
 if(readingContent)readingContent.scrollTop=0;

 document.getElementById('readerTitle').textContent=book.title;
 document.getElementById('readerAuthor').textContent=book.author;
 document.getElementById('chapterMark').textContent=book.author.toLocaleUpperCase('ru');
 document.getElementById('readingHeading').textContent=book.title;
 document.getElementById('readingByline').textContent=`— ${book.chapters[0] || ''} —`;
 const reviewTag=document.getElementById('reviewChapterTag');
 if(reviewTag)reviewTag.textContent=`— ${book.chapters[0] || ''} —`;

 const chapterList=document.getElementById('chapterList');
 chapterList.innerHTML=book.chapters.map((chapter,i)=>`<button class="chapter-button" data-chapter="${i}">${String(i+1).padStart(2,'0')} <span>${chapter}</span></button>`).join('');
 chapterList.querySelectorAll('.chapter-button').forEach(button=>button.addEventListener('click',()=>{
  activeChapter=Number(button.dataset.chapter);
  renderChapter();
 }));

 const savedChapter=Number(localStorage.getItem(`libru-chapter-${book.title}`))||0;
 activeChapter=Math.min(savedChapter,book.chapters.length-1);
 renderChapter();

 // Render reviews strictly for this book (resets currentBookRating to 0 if not rated)
 renderBookReviewsUI(book);

 readerDialog.showModal();

 // Only restore reading position if within reading text bounds (not at the reviews)
 const savedPos=Number(localStorage.getItem(`libru-position-${book.title}-${activeChapter}`))||0;
 const reviewSec=document.getElementById('bookReviewSection');
 const reviewTop=reviewSec?reviewSec.offsetTop:Infinity;
 if(savedPos>0 && savedPos < reviewTop - 120){
  readingContent.scrollTop=savedPos;
 } else {
  readingContent.scrollTop=0;
 }

 const bookmarks=JSON.parse(localStorage.getItem('libru-saved')||'[]');
 document.getElementById('saveBook').innerHTML=bookmarks.includes(book.title)?'★ <span>В закладках</span>':'☆ <span>Сохранить в закладки</span>';
 const savedCliTheme=localStorage.getItem('libru-cli-theme');
 if(savedCliTheme&&window.setReaderCliTheme)window.setReaderCliTheme(savedCliTheme);
 updateProgress();
}

function closeReaderCleanly(){
 readerDialog.close();
 const readerLayout=document.querySelector('.reader-layout');
 if(readerLayout)readerLayout.scrollTop=0;
 if(readingContent)readingContent.scrollTop=0;
 currentBookRating=0;
 updateRatingVisuals(0,true);
}

document.getElementById('readerClose').addEventListener('click',closeReaderCleanly);
readerDialog.addEventListener('click',e=>{if(e.target===readerDialog)closeReaderCleanly()});
readerDialog.addEventListener('close',closeReaderCleanly);
document.getElementById('backToTextBtn')?.addEventListener('click',scrollToTextTop);
readingContent.addEventListener('scroll',()=>{updateProgress();localStorage.setItem(`libru-position-${activeBook.title}-${activeChapter}`,String(readingContent.scrollTop));localStorage.setItem(`libru-chapter-${activeBook.title}`,String(activeChapter))});
function updateCliProgress(pct){
 const totalBlocks=10;
 const filledCount=Math.min(totalBlocks,Math.max(0,Math.round(pct/10)));
 const emptyCount=totalBlocks-filledCount;
 const filledEl=document.getElementById('cliProgFilled');
 const emptyEl=document.getElementById('cliProgEmpty');
 const pctEl=document.getElementById('cliProgPct');
 if(filledEl)filledEl.textContent='█'.repeat(filledCount);
 if(emptyEl)emptyEl.textContent='-'.repeat(emptyCount);
 if(pctEl)pctEl.textContent=`${pct}%`;
}
function updateProgress(){const max=readingContent.scrollHeight-readingContent.clientHeight;const pct=max>0?Math.round(readingContent.scrollTop/max*100):0;const progressBar=document.getElementById('progressBar');if(progressBar)progressBar.style.width=`${pct}%`;const mobileProgress=document.getElementById('mobileProgress');if(mobileProgress)mobileProgress.textContent=`${activeBook.chapters[activeChapter]?.toLocaleUpperCase('ru')} · ${pct}%`;updateCliProgress(pct)}
window.setReaderCliTheme=function(theme){
 const el=document.getElementById('readerCliProgress');
 if(!el)return;
 el.classList.remove('theme-green','theme-orange');
 el.classList.add(theme==='orange'?'theme-orange':'theme-green');
 localStorage.setItem('libru-cli-theme',theme);
};

function changeFont(n){readerFont=Math.max(16,Math.min(26,readerFont+n));reader.style.setProperty('--reader-size',readerFont+'px');localStorage.setItem('libru-font',readerFont)}
readerFont=Number(localStorage.getItem('libru-font'))||19;changeFont(0);
document.getElementById('fontDown').addEventListener('click',()=>changeFont(-1));
document.getElementById('fontUp').addEventListener('click',()=>changeFont(1));
const FAVICON_LIGHT="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%2320241f'/%3E%3Cg fill='%23fffefa'%3E%3Crect x='4' y='11' width='3' height='18'/%3E%3Crect x='4' y='26' width='7' height='3'/%3E%3Crect x='22' y='11' width='14' height='3'/%3E%3Crect x='22' y='18.5' width='8' height='3'/%3E%3Crect x='22' y='26' width='14' height='3'/%3E%3C/g%3E%3Cpolygon points='12,29 15,29 20,11 17,11' fill='%23c45129'/%3E%3C/svg%3E";
const FAVICON_DARK="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23fffefa'/%3E%3Cg fill='%2320241f'%3E%3Crect x='4' y='11' width='3' height='18'/%3E%3Crect x='4' y='26' width='7' height='3'/%3E%3Crect x='22' y='11' width='14' height='3'/%3E%3Crect x='22' y='18.5' width='8' height='3'/%3E%3Crect x='22' y='26' width='14' height='3'/%3E%3C/g%3E%3Cpolygon points='12,29 15,29 20,11 17,11' fill='%23c45129'/%3E%3C/svg%3E";
function syncThemeIcon(){const isDark=document.body.classList.contains('dark');const fav=document.getElementById('favicon');if(fav)fav.href=isDark?FAVICON_DARK:FAVICON_LIGHT;}
document.getElementById('themeToggle').addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('libru-dark',document.body.classList.contains('dark'));syncThemeIcon()});
if(localStorage.getItem('libru-dark')==='true')document.body.classList.add('dark');syncThemeIcon();

document.getElementById('saveBook').addEventListener('click',e=>{const saved=JSON.parse(localStorage.getItem('libru-saved')||'[]');const exists=saved.includes(activeBook.title);localStorage.setItem('libru-saved',JSON.stringify(exists?saved.filter(x=>x!==activeBook.title):[...saved,activeBook.title]));e.currentTarget.innerHTML=exists?'☆ <span>Сохранить в закладки</span>':'★ <span>В закладках</span>';toast(exists?'Убрано из закладок':'Сохранено в закладках');if(typeof updateReaderBadges==='function')updateReaderBadges();});
document.getElementById('readerReviewScrollBtn')?.addEventListener('click',scrollToReviewSection);
document.getElementById('mobileReviewBtn')?.addEventListener('click',scrollToReviewSection);
document.getElementById('bookReviewForm')?.addEventListener('submit',e=>{e.preventDefault();handleReviewSubmit()});
document.getElementById('reviewSubmitBtn')?.addEventListener('click',e=>{e.preventDefault();handleReviewSubmit()});
document.getElementById('readerAuthor')?.addEventListener('click',()=>{
 if(!activeBook)return;
 readerDialog.close();
 fullState.author=activeBook.author;
 fullState.cat='Все тексты';
 fullState.sub='';
 fullState.leaf='';
 fullState.page=1;
 homeState.author=activeBook.author;
 homeState.cat='Все тексты';
 homeState.sub='';
 homeState.leaf='';
 homeState.page=1;
 renderFullCatalog();
 renderHomeCatalog();
 goTo('catalog');
});
initRatingScale();
document.getElementById('contribute')?.addEventListener('click',()=>toast('Регистрация корректора появится в следующем этапе'));

let toastTimer;function toast(text){const el=document.getElementById('toast');el.textContent=text;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2400)}
document.querySelectorAll('.format-option').forEach(b=>b.addEventListener('click',()=>{const box=b.querySelector('.checkbox');box.classList.toggle('checked');box.textContent=box.classList.contains('checked')?'✓':''}));
document.getElementById('menuToggle').addEventListener('click',()=>document.querySelector('.main-nav').classList.toggle('open'));
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.main-nav').classList.remove('open')));

const views={
 home:document.getElementById('home'),
 catalog:document.getElementById('catalogPage'),
 authors:document.getElementById('authorsPage'),
 hitparad:document.getElementById('hitparadPage'),
 guests:document.getElementById('guestsPage'),
 community:document.getElementById('communityPage'),
 about:document.getElementById('aboutPage')
};
const titles={
 home:'Lib.ru — библиотека текстов',
 catalog:'Полный каталог — Lib.ru',
 authors:'Все авторы — Lib.ru',
 hitparad:'Хит-парад — Lib.ru',
 guests:'Мои гости — Lib.ru',
 community:'Сообщество — Lib.ru',
 about:'О проекте — Lib.ru'
};
function setView(view){
 const v=views[view]?view:'home';
 Object.keys(views).forEach(k=>{if(views[k])views[k].hidden=(k!==v)});
 document.querySelectorAll('.main-nav a').forEach(a=>a.classList.toggle('active',a.dataset.view===v));
 document.title=titles[v]||titles.home;
 if(v==='community'&&typeof updateReaderBadges==='function'){updateReaderBadges();}
}
function setUrl(url){try{history.replaceState(null,'',url)}catch(e){}}
function goTo(view,hash){
 setView(view);
 let targetId='';
 if(typeof hash==='string'){
  const hashIdx=hash.indexOf('#');
  if(hashIdx!==-1){targetId=hash.slice(hashIdx+1)}
  else if(!hash.includes('/')&&!hash.includes(':')){targetId=hash.replace(/^#/,'')}
 }
 if(view!=='home'){window.scrollTo({top:0,behavior:'auto'});setUrl('#'+view);return}
 const target=(targetId&&targetId!=='home')?document.getElementById(targetId):null;
 if(target)target.scrollIntoView({behavior:'smooth'});else window.scrollTo({top:0,behavior:'smooth'});
 setUrl(targetId&&targetId!=='home'?'#'+targetId:'#home');
}
document.querySelectorAll('a[data-view]').forEach(link=>link.addEventListener('click',e=>{
 e.preventDefault();
 const href=link.getAttribute('href')||'#home';
 const fragment=href.includes('#')?href.slice(href.indexOf('#')):'#'+(link.dataset.view||'home');
 goTo(link.dataset.view,fragment);
}));
function syncHash(){
 const h=(location.hash||'').replace('#','');
 if(views[h])setView(h);else setView('home');
}
syncHash();
window.addEventListener('hashchange',syncHash);

function initRetroPager(){
 const pagers=document.querySelectorAll('.retro-pager');
 if(!pagers.length)return;

 const quotes=[
  {quote:'«Рукописи не горят.»',author:'— М. Булгаков, «Мастер и Маргарита»'},
  {quote:'«Красота спасёт мир.»',author:'— Ф. Достоевский, «Идиот»'},
  {quote:'«Счастье для всех, даром, и пусть никто не уйдёт обиженный!»',author:'— А. и Б. Стругацкие, «Пикник на обочине»'},
  {quote:'«Если боитесь одиночества, то не женитесь.»',author:'— А. Чехов, «Записные книжки»'},
  {quote:'«И вечный бой! Покой нам только снится…»',author:'— А. Блок, «На поле Куликовом»'},
  {quote:'«Все счастливые семьи похожи друг на друга…»',author:'— Л. Толстой, «Анна Каренина»'},
  {quote:'«Человек создан для счастья, как птица для полёта.»',author:'— В. Короленко, «Парадокс»'},
  {quote:'«Не выходи из комнаты, не совершай ошибку.»',author:'— И. Бродский'}
 ];

 let currentIndex=0;
 let autoTimer=null;
 let isPaused=false;

 function renderQuote(index,withAnim=true){
  currentIndex=(index+quotes.length)%quotes.length;
  const current=quotes[currentIndex];
  const counterText=`MSG 0${currentIndex+1}/0${quotes.length}`;

  pagers.forEach(pager=>{
   const quoteEl=pager.querySelector('.pager-quote');
   const authorEl=pager.querySelector('.pager-author');
   const counterEl=pager.querySelector('.pager-counter');
   const messageWrap=pager.querySelector('.pager-message-wrap');

   if(!quoteEl||!authorEl)return;

   if(withAnim&&messageWrap){
    messageWrap.style.opacity='0';
    messageWrap.style.transform='translateY(-3px)';
    setTimeout(()=>{
     quoteEl.textContent=current.quote;
     authorEl.textContent=current.author;
     if(counterEl)counterEl.textContent=counterText;
     messageWrap.style.opacity='1';
     messageWrap.style.transform='translateY(0)';
    },160);
   }else{
    quoteEl.textContent=current.quote;
    authorEl.textContent=current.author;
    if(counterEl)counterEl.textContent=counterText;
   }
  });
 }

 function nextQuote(){
  renderQuote(currentIndex+1);
 }

 function prevQuote(){
  renderQuote(currentIndex-1);
 }

 function startAuto(){
  stopAuto();
  if(!isPaused){
   autoTimer=setInterval(nextQuote,4200);
  }
 }

 function stopAuto(){
  if(autoTimer){clearInterval(autoTimer);autoTimer=null;}
 }

 function togglePause(){
  isPaused=!isPaused;
  pagers.forEach(pager=>{
   const toggleBtn=pager.querySelector('.pager-toggle');
   if(toggleBtn){
    toggleBtn.textContent=isPaused?'HOLD':'READ';
    toggleBtn.style.color=isPaused?'var(--orange)':'#7de88b';
   }
  });
  if(isPaused){stopAuto();}
  else{startAuto();}
 }

 pagers.forEach(pager=>{
  const prevBtn=pager.querySelector('.pager-prev');
  const nextBtn=pager.querySelector('.pager-next');
  const toggleBtn=pager.querySelector('.pager-toggle');
  const screenEl=pager.querySelector('.pager-screen');

  if(prevBtn)prevBtn.addEventListener('click',e=>{e.stopPropagation();prevQuote();startAuto();});
  if(nextBtn)nextBtn.addEventListener('click',e=>{e.stopPropagation();nextQuote();startAuto();});
  if(toggleBtn)toggleBtn.addEventListener('click',e=>{e.stopPropagation();togglePause();});
  if(screenEl)screenEl.addEventListener('click',()=>{nextQuote();startAuto();});

  let startX=0;
  pager.addEventListener('touchstart',e=>{
   startX=e.touches[0].clientX;
  },{passive:true});
  pager.addEventListener('touchend',e=>{
   const diff=e.changedTouches[0].clientX-startX;
   if(diff<-25){nextQuote();startAuto();}
   else if(diff>25){prevQuote();startAuto();}
  },{passive:true});

  pager.addEventListener('mouseenter',()=>{if(!isPaused)stopAuto();});
  pager.addEventListener('mouseleave',()=>{if(!isPaused)startAuto();});
 });

 renderQuote(0,false);
 startAuto();
}

initRetroPager();

/* ==========================================================================
   READER BADGES & ACHIEVEMENTS LOGIC
   ========================================================================== */
function updateReaderBadges() {
  // Badges are currently presented as general community information
}

/* ==========================================================================
   RETRO CRT TV BROADCAST LOGIC & COMMUNITY VARIANTS
   ========================================================================== */
const liveCommunityBroadcasts = [
  {
    ch: 'CH 01 · В ЭФИРЕ',
    type: '[ОТМЕТКА: В ПРОЦЕССЕ]',
    title: '«Пикник на обочине»',
    desc: 'Читатель @stalker_94 читает главу 3 · Зона посещения',
    freq: '1994.0 МГц'
  },
  {
    ch: 'CH 02 · В ЭФИРЕ',
    type: '[РЕЦЕНЗИЯ V / V]',
    title: '«Мастер и Маргарита»',
    desc: '«Текст, опередивший время. В архиве вычитан безупречно!»',
    freq: '1994.2 МГц'
  },
  {
    ch: 'CH 03 · В ЭФИРЕ',
    type: '[НОВЫЙ РАНГ: РЕВИЗОР]',
    title: 'Читатель @bibliophile',
    desc: 'Открыт бейдж «Ревизор»: оставлено более 10 оценок и отзывов',
    freq: '1994.4 МГц'
  },
  {
    ch: 'CH 04 · В ЭФИРЕ',
    type: '[ОТМЕТКА: ПРОЧИТАНО]',
    title: '«Трудно быть богом»',
    desc: 'Читатель @arkady_b завершил роман · время чтения 4 ч 15 мин',
    freq: '1994.6 МГц'
  },
  {
    ch: 'CH 05 · В ЭФИРЕ',
    type: '[ЗАКЛАДКА НА ПОЛКУ]',
    title: '«Двенадцать стульев»',
    desc: '+28 читателей сохранили том в избранное за прошедшие сутки',
    freq: '1994.8 МГц'
  },
  {
    ch: 'CH 06 · В ЭФИРЕ',
    type: '[НОВЫЙ РАНГ: АРХИВАРИУС]',
    title: 'Читатель @old_reader',
    desc: 'Высшее звание: завсегдатай портала Lib.ru',
    freq: '1995.0 МГц'
  },
  {
    ch: 'CH 07 · В ЭФИРЕ',
    type: '[РЕЦЕНЗИЯ IV / V]',
    title: '«Собачье сердце»',
    desc: '«Перечитываю регулярно. Электронный текст удобен для заметок»',
    freq: '1995.2 МГц'
  },
  {
    ch: 'CH 08 · В ЭФИРЕ',
    type: '[ПУЛЬС БИБЛИОТЕКИ]',
    title: 'Ночной абонемент',
    desc: 'В архиве онлайн 142 читателя · 87% читают с мобильных устройств',
    freq: '1995.4 МГц'
  }
];

const tvBadgeBroadcasts = [
  {
    ch: 'CH 01 · СТУПЕНЬ I',
    type: '[ЧИТАТЕЛЬСКИЙ РАНГ · СТАРТ]',
    title: '🌱 Новичок',
    desc: 'Первая открытая книга архива · Начало читательского пути',
    freq: 'РАНГ 1 / 4'
  },
  {
    ch: 'CH 02 · СТУПЕНЬ II',
    type: '[ЧИТАТЕЛЬСКИЙ РАНГ · ОЦЕНКИ]',
    title: '★ Ревизор',
    desc: 'Более 10 оценок и отзывов · Вклад в читательский каталог архива',
    freq: 'РАНГ 2 / 4'
  },
  {
    ch: 'CH 03 · СТУПЕНЬ III',
    type: '[ЧИТАТЕЛЬСКИЙ РАНГ · ПОЛКА]',
    title: '📖 Книгочей',
    desc: 'Собрал архив в избранном · Персональная полка чтения создана',
    freq: 'РАНГ 3 / 4'
  },
  {
    ch: 'CH 04 · СТУПЕНЬ IV',
    type: '[ЧИТАТЕЛЬСКИЙ РАНГ · МАСТЕР]',
    title: '📜 Архивариус',
    desc: 'Завсегдатай портала · Почётный хранитель и исследователь фонда',
    freq: 'РАНГ 4 / 4'
  }
];

function initRetroTv() {
  const tvWrap = document.getElementById('retroTvWrap');
  const tvEl = document.getElementById('retroTv');
  const tubeEl = document.getElementById('tvCrtTube');
  const chTag = document.getElementById('tvChannelTag');
  const eventType = document.getElementById('tvEventType');
  const eventTitle = document.getElementById('tvEventTitle');
  const eventDesc = document.getElementById('tvEventDesc');
  const freqEl = tvEl ? tvEl.querySelector('.tv-freq') : null;
  const chKnob = document.getElementById('tvChannelKnob');
  const prevBtn = document.getElementById('tvPrevCh');
  const nextBtn = document.getElementById('tvNextCh');
  const powerBtn = document.getElementById('tvPowerBtn');

  if (!tvEl || !tubeEl) return;

  let activeBroadcasts = liveCommunityBroadcasts;
  let currentIndex = 0;
  let chAngle = 0;
  let isOn = true;
  let tvTimer = null;

  function render(index, withNoise = true) {
    if (!isOn) return;
    const b = activeBroadcasts[index % activeBroadcasts.length];
    if (!b) return;

    if (withNoise) {
      tubeEl.classList.add('switching');
      setTimeout(() => {
        if (chTag) chTag.textContent = b.ch;
        if (eventType) eventType.textContent = b.type;
        if (eventTitle) eventTitle.textContent = b.title;
        if (eventDesc) eventDesc.textContent = b.desc;
        if (freqEl) freqEl.textContent = b.freq;
      }, 70);
      setTimeout(() => {
        tubeEl.classList.remove('switching');
      }, 200);
    } else {
      if (chTag) chTag.textContent = b.ch;
      if (eventType) eventType.textContent = b.type;
      if (eventTitle) eventTitle.textContent = b.title;
      if (eventDesc) eventDesc.textContent = b.desc;
      if (freqEl) freqEl.textContent = b.freq;
    }
  }

  function startAuto() {
    stopAuto();
    if (!isOn) return;
    tvTimer = setInterval(() => {
      nextChannel();
    }, 4800);
  }

  function stopAuto() {
    if (tvTimer) {
      clearInterval(tvTimer);
      tvTimer = null;
    }
  }

  function nextChannel() {
    if (!isOn) return;
    currentIndex = (currentIndex + 1) % activeBroadcasts.length;
    chAngle += 45;
    if (chKnob) chKnob.style.transform = `rotate(${chAngle}deg)`;
    render(currentIndex, true);
  }

  function prevChannel() {
    if (!isOn) return;
    currentIndex = (currentIndex - 1 + activeBroadcasts.length) % activeBroadcasts.length;
    chAngle -= 45;
    if (chKnob) chKnob.style.transform = `rotate(${chAngle}deg)`;
    render(currentIndex, true);
  }

  function togglePower() {
    isOn = !isOn;
    tvEl.classList.toggle('tv-off', !isOn);
    if (powerBtn) powerBtn.classList.toggle('on', isOn);
    if (isOn) {
      tubeEl.classList.add('switching');
      render(currentIndex, false);
      setTimeout(() => tubeEl.classList.remove('switching'), 250);
      startAuto();
    } else {
      stopAuto();
    }
  }

  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextChannel(); startAuto(); });
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevChannel(); startAuto(); });
  if (chKnob) chKnob.addEventListener('click', (e) => { e.stopPropagation(); nextChannel(); startAuto(); });
  if (tubeEl) tubeEl.addEventListener('click', () => { if (isOn) { nextChannel(); startAuto(); } });
  if (powerBtn) powerBtn.addEventListener('click', (e) => { e.stopPropagation(); togglePower(); });

  if (tvWrap) {
    tvWrap.addEventListener('mouseenter', stopAuto);
    tvWrap.addEventListener('mouseleave', () => { if (isOn) startAuto(); });
  }

  window.retroTvApi = {
    setMode: (mode) => {
      activeBroadcasts = (mode === 'badges') ? tvBadgeBroadcasts : liveCommunityBroadcasts;
      currentIndex = 0;
      render(currentIndex, true);
    },
    next: nextChannel,
    prev: prevChannel,
    togglePower: togglePower
  };

  render(currentIndex, false);
  startAuto();
}

updateReaderBadges();
initRetroTv();
bindGuestsModeSelector();

const profileBtn = document.getElementById('communityProfileBtn');
if (profileBtn) {
  profileBtn.addEventListener('click', () => {
    toast('Личный кабинет и профиль читателя появятся в следующем обновлении');
  });
}
document.querySelectorAll('.signin').forEach(btn => {
  btn.addEventListener('click', () => {
    toast('Личный кабинет и профиль читателя появятся в следующем обновлении');
  });
});


/* ==========================================================================
   HITPARAD (ХИТ-ПАРАД КНИГ) SYSTEM LOGIC
   ========================================================================== */

const allHitparadBooks = [
  { rank: 1, roman: 'I', title: 'Я был на этой войне (Чечня-95, часть 1)', author: 'Вячеслав Миронов', score: '9.5', votes: 150 },
  { rank: 2, roman: 'II', title: 'Мастер и Маргарита', author: 'Михаил Булгаков', score: '9.4', votes: 496 },
  { rank: 3, roman: 'III', title: 'Маленький принц', author: 'Антуан де Сент-Экзюпери', score: '9.4', votes: 266 },
  { rank: 4, roman: 'IV', title: 'Правда, мы будем всегда?', author: 'Сергей Козлов', score: '9.3', votes: 291 },
  { rank: 5, roman: 'V', title: 'Про Федота-стрельца, удалого молодца', author: 'Леонид Филатов', score: '9.3', votes: 393 },
  { rank: 6, author: 'Аркадий и Борис Стругацкие', title: 'Пикник на обочине', score: '9.3', votes: 151 },
  { rank: 7, author: 'Аркадий и Борис Стругацкие', title: 'Понедельник начинается в субботу', score: '9.3', votes: 230 },
  { rank: 8, author: 'Ричард Бах', title: 'Чайка по имени Джонатан Ливингстон', score: '9.3', votes: 374 },
  { rank: 9, author: 'Габриэль Гарсиа Маркес', title: 'Сто лет одиночества', score: '9.3', votes: 202 },
  { rank: 10, author: 'Патрик Зюскинд', title: 'Парфюмер. История одного убийцы', score: '9.3', votes: 192 },
  { rank: 11, author: 'Сергей Лукьяненко', title: 'Лабиринт отражений', score: '9.2', votes: 729 },
  { rank: 12, author: 'Роджер Желязны', title: 'Девять принцев Амбера', score: '9.2', votes: 247 },
  { rank: 13, author: 'Омар Хайям', title: 'Рубаи', score: '9.2', votes: 237 },
  { rank: 14, author: 'Ричард Бах', title: 'Иллюзии, или приключения Мессии, который Мессией быть не хотел', score: '9.2', votes: 173 },
  { rank: 15, author: 'Виктор Пелевин', title: 'Затворник и Шестипалый', score: '9.1', votes: 257 },
  { rank: 16, author: 'Виктор Пелевин', title: 'Чапаев и Пустота', score: '9.0', votes: 370 },
  { rank: 17, author: 'Роберт Асприн', title: 'Другой отличный миф', score: '8.9', votes: 175 },
  { rank: 18, author: 'Венедикт Ерофеев', title: 'Москва — Петушки', score: '8.9', votes: 266 },
  { rank: 19, author: 'Гарри Гаррисон', title: 'Неукротимая планета', score: '8.7', votes: 164 },
  { rank: 20, author: 'Виктор Суворов', title: 'Аквариум', score: '8.6', votes: 215 },
  { rank: 21, author: 'Андрей Богатырев', title: 'Времена английского глагола', score: '8.5', votes: 351 },
  { rank: 22, author: 'Владимир Набоков', title: 'Лолита', score: '8.4', votes: 172 },
  { rank: 23, author: 'Виктор Пелевин', title: 'Принц Госплана', score: '8.0', votes: 275 },
  { rank: 24, author: 'Станислав Лем', title: 'Солярис', score: '8.0', votes: 312 },
  { rank: 25, author: 'Илья Ильф, Евгений Петров', title: 'Двенадцать стульев', score: '7.9', votes: 440 }
];

const hitparadTop5 = allHitparadBooks.slice(0, 5);
const hitparadListBooks = allHitparadBooks.slice(5);

const hitparadCriteria = [
  { roman: 'X', title: 'Классика, шедевр', desc: 'Высший балл архива — эталон мировой литературы' },
  { roman: 'IX', title: 'Шедевр с оговорками', desc: 'Выдающийся текст с мелкими недочетами' },
  { roman: 'VIII', title: 'Очень хорошая книга', desc: 'Качественное чтение, рекомендуемое всем' },
  { roman: 'VII', title: 'Просто хорошая книга', desc: 'Добротная литература для приятного вечера' },
  { roman: 'VI', title: 'Нормально', desc: 'Средний уровень, можно было и не читать' },
  { roman: 'V', title: 'Так себе, терпимо', desc: 'Читать совершенно не обязательно' },
  { roman: 'I–IV', title: 'Отрицательно', desc: 'Различные степени отрицательного отношения' },
  { roman: '—', title: 'Не читал', desc: '«Не берусь ставить оценку» без влияния на балл' }
];

function getHitparadMode() {
  const w = window.innerWidth;
  if (w < 500) return 'mobile';
  if (w < 1000) return 'tablet';
  return 'desktop';
}

let lastHitparadMode = getHitparadMode();

function renderHitparadPodium() {
  const container = document.getElementById('hitparadPodium');
  const eyebrow = document.getElementById('podiumEyebrow');
  if (!container) return;

  const mode = getHitparadMode();
  let ranks;
  if (mode === 'desktop') {
    ranks = [4, 2, 1, 3, 5];
  } else if (mode === 'tablet') {
    ranks = [2, 1, 3];
  } else {
    ranks = [1];
  }
  if (eyebrow) {
    eyebrow.innerHTML = '<span class="live-dot"></span> ПЬЕДЕСТАЛ ПОЧЁТА';
  }

  const podiumBooks = ranks.map(r => allHitparadBooks.find(b => b.rank === r)).filter(Boolean);

  container.innerHTML = podiumBooks.map(b => {
    const isFirst = b.rank === 1;
    const roman = b.roman || (b.rank === 1 ? 'I' : b.rank === 2 ? 'II' : b.rank === 3 ? 'III' : b.rank === 4 ? 'IV' : 'V');
    return `
      <div class="podium-step podium-step-${b.rank}">
        <article class="podium-card" data-title="${b.title}" tabindex="0" role="button" aria-label="Открыть книгу ${b.title}">
          <div>
            <div class="podium-card-top">
              <span class="podium-score-badge">${b.score} ★</span>
              <span class="podium-votes">${b.votes} голосов</span>
            </div>
            <h3>${b.title}</h3>
          </div>
          <p class="podium-author">${b.author}</p>
        </article>
        <div class="podium-stand">
          <span class="podium-stand-rank">${b.rank}</span>
          <span class="podium-stand-label">${isFirst ? 'ЧЕМПИОН' : roman + ' МЕСТО'}</span>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.podium-card').forEach(card => {
    const handleCard = () => {
      const title = card.dataset.title;
      const found = (typeof books !== 'undefined' && Array.isArray(books)) ? books.find(b => b.title === title) : null;
      if (found && typeof openReader === 'function') {
        openReader(found);
      } else {
        toast(`Открытие книги: «${title}»`);
      }
    };
    card.addEventListener('click', handleCard);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCard();
      }
    });
  });
}

let hitparadTablePage = 1;
const HITPARAD_PAGE_SIZE = 10;

function renderHitparadTable(page = hitparadTablePage) {
  hitparadTablePage = page;
  const rowsContainer = document.getElementById('hitparadTableRows');
  const countEl = document.getElementById('hitparadTableCount');
  const metaEl = document.getElementById('hitparadPaginationMeta');
  const navEl = document.getElementById('hitparadPagination');
  const tableEyebrow = document.getElementById('hitparadTableEyebrow');

  if (!rowsContainer) return;

  const mode = getHitparadMode();
  let minRank = 6;
  if (mode === 'tablet') minRank = 4;
  else if (mode === 'mobile') minRank = 2;

  if (tableEyebrow) {
    tableEyebrow.textContent = 'ОСНОВНОЙ РЕЙТИНГ';
  }

  const tableBooks = allHitparadBooks.filter(b => b.rank >= minRank);
  const total = tableBooks.length;
  const totalPages = Math.max(1, Math.ceil(total / HITPARAD_PAGE_SIZE));
  if (hitparadTablePage > totalPages) hitparadTablePage = totalPages;
  if (hitparadTablePage < 1) hitparadTablePage = 1;

  const startIdx = (hitparadTablePage - 1) * HITPARAD_PAGE_SIZE;
  const pageBooks = tableBooks.slice(startIdx, startIdx + HITPARAD_PAGE_SIZE);

  if (countEl) countEl.textContent = `ПОКАЗАНО ${pageBooks.length} ИЗ ${total} КНИГ`;
  if (metaEl && pageBooks.length) {
    const startNum = pageBooks[0].rank;
    const endNum = pageBooks[pageBooks.length - 1].rank;
    metaEl.textContent = `СТРАНИЦА ${hitparadTablePage} ИЗ ${totalPages} · МЕСТА ${startNum}–${endNum}`;
  }

  rowsContainer.innerHTML = pageBooks.map(b => `
    <div class="hitparad-row" data-title="${b.title}">
      <span class="row-rank">#${b.rank}</span>
      <div class="row-title-wrap">
        <a href="#reader" class="book-link" data-title="${b.title}">${b.title}</a>
        <span class="book-author">${b.author}</span>
      </div>
      <span class="row-score">${b.score} ★</span>
      <span class="row-votes">${b.votes}</span>
    </div>
  `).join('');

  rowsContainer.querySelectorAll('.book-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const title = link.dataset.title;
      const found = (typeof books !== 'undefined' && Array.isArray(books)) ? books.find(b => b.title === title) : null;
      if (found && typeof openReader === 'function') {
        openReader(found);
      } else {
        toast(`Открытие книги: «${title}»`);
      }
    });
  });

  if (navEl && typeof buildPaginationButtonsHtml === 'function') {
    navEl.innerHTML = buildPaginationButtonsHtml(hitparadTablePage, totalPages);
    navEl.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = Number(btn.dataset.page);
        if (next >= 1 && next <= totalPages && next !== hitparadTablePage) {
          renderHitparadTable(next);
        }
      });
    });
  }
}

// Criteria cards rewind / carousel
let criteriaStartIndex = 0;

function getCriteriaVisibleCount() {
  const w = window.innerWidth;
  if (w < 500) return 1;
  if (w < 1000) return 2;
  return 3;
}

let lastCriteriaVisibleCount = getCriteriaVisibleCount();

function renderCriteriaCards() {
  const track = document.getElementById('criteriaCardsTrack');
  const prevBtn = document.getElementById('criteriaPrevBtn');
  const nextBtn = document.getElementById('criteriaNextBtn');

  if (!track) return;

  const visibleCount = getCriteriaVisibleCount();
  const total = hitparadCriteria.length;
  const maxStart = Math.max(0, total - visibleCount);

  if (criteriaStartIndex > maxStart) criteriaStartIndex = maxStart;
  if (criteriaStartIndex < 0) criteriaStartIndex = 0;

  const visibleItems = hitparadCriteria.slice(criteriaStartIndex, criteriaStartIndex + visibleCount);

  track.innerHTML = visibleItems.map((c, i) => {
    const globalIdx = criteriaStartIndex + i;
    return `
      <article class="criterion-card" data-idx="${globalIdx}" tabindex="0" role="button" aria-label="Критерий ${c.roman}: ${c.title}">
        <h3><span class="criterion-roman">${c.roman}</span> ${c.title}</h3>
        <p>${c.desc}</p>
      </article>
    `;
  }).join('');

  if (prevBtn) {
    prevBtn.disabled = (criteriaStartIndex <= 0);
  }
  if (nextBtn) {
    nextBtn.disabled = (criteriaStartIndex >= maxStart);
  }

  track.querySelectorAll('.criterion-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = Number(card.dataset.idx);
      const c = hitparadCriteria[idx];
      if (c) toast(`Критерий ${c.roman}: «${c.title}» — ${c.desc}`);
    });
  });
}

function bindCriteriaControls() {
  const prevBtn = document.getElementById('criteriaPrevBtn');
  const nextBtn = document.getElementById('criteriaNextBtn');
  const track = document.getElementById('criteriaCardsTrack');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (criteriaStartIndex > 0) {
        criteriaStartIndex--;
        renderCriteriaCards();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const visibleCount = getCriteriaVisibleCount();
      const maxStart = Math.max(0, hitparadCriteria.length - visibleCount);
      if (criteriaStartIndex < maxStart) {
        criteriaStartIndex++;
        renderCriteriaCards();
      }
    });
  }

  // Touch swipe support
  if (track) {
    let startX = 0;
    track.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', e => {
      const diff = e.changedTouches[0].clientX - startX;
      const visibleCount = getCriteriaVisibleCount();
      const maxStart = Math.max(0, hitparadCriteria.length - visibleCount);
      if (diff < -30 && criteriaStartIndex < maxStart) {
        criteriaStartIndex++;
        renderCriteriaCards();
      } else if (diff > 30 && criteriaStartIndex > 0) {
        criteriaStartIndex--;
        renderCriteriaCards();
      }
    }, { passive: true });
  }

  // Unified window resize listener for Hitparad
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newMode = getHitparadMode();
      if (newMode !== lastHitparadMode) {
        lastHitparadMode = newMode;
        hitparadTablePage = 1;
        renderHitparadPodium();
        renderHitparadTable(1);
      }
      const newVis = getCriteriaVisibleCount();
      if (newVis !== lastCriteriaVisibleCount) {
        lastCriteriaVisibleCount = newVis;
        renderCriteriaCards();
      }
    }, 120);
  });
}

const altRankingsData = {
  libru: [
    {
      title: 'Литературная премия «Русская Фантастика»',
      domain: 'FANT.LIB.RU',
      since: '2001–2003',
      desc: 'Ежегодная читательская сетевая премия за лучшие русскоязычные фантастические романы и повести.',
      meta: 'Сводные итоги премии',
      url: 'http://fan.lib.ru/'
    },
    {
      title: 'Прообраз «Хитпарада» — Fido-Top70',
      domain: 'FIDO-TOP70 / LIB.RU',
      since: '1995',
      desc: 'Исторический рейтинг читательских предпочтений, сформированный узлами эхоконференций FidoNet.',
      meta: 'Архив FidoNet',
      url: 'https://lib.ru/HITPARAD/'
    },
    {
      title: 'Мой Top 100 — читательские списки',
      domain: 'TOP100 / LIB.RU',
      since: '1998',
      desc: 'Индивидуальные «золотые сотни» книг, составленные давними постоянными читателями библиотеки.',
      meta: 'Читательские сотни',
      url: 'https://lib.ru/HITPARAD/'
    },
    {
      title: 'Любимые книги Бориса Стругацкого',
      domain: 'STRUGATSKY / LIB.RU',
      since: '1999',
      desc: 'Персональный рекомендательный список произведений от классика советской и мировой фантастики.',
      meta: 'Рекомендация автора',
      url: 'https://lib.ru/STRUGACKIE/'
    },
    {
      title: 'Детские книги из Fido7.Su.Books',
      domain: 'CHILDREN / LIB.RU',
      since: '1997',
      desc: 'Список лучших произведений для детей и юношества по многолетним отзывам сети Fido7.',
      meta: 'Золотой фонд детства',
      url: 'https://lib.ru/KIDS/'
    },
    {
      title: 'Статистический музыкальный рейтинг',
      domain: 'MUSIC.LIB.RU',
      since: '2000',
      desc: 'Хит-парад авторской песни, рок-композиций и музыкальных рецензий независимого сервера.',
      meta: 'Музыкальный чарт',
      url: 'http://music.lib.ru/'
    }
  ],
  external: [
    {
      title: '100 best books of century by Waterstone',
      domain: 'WATERSTONES.COM',
      since: '1997',
      desc: 'Опрос читателей старейшей британской книжной сети о ста величайших книгах двадцатого века.',
      meta: 'Британский опрос',
      url: 'https://www.waterstones.com/'
    },
    {
      title: 'Modern Library: 100 Best by RandomHouse',
      domain: 'MODERNLIBRARY.COM',
      since: '1998',
      desc: 'Культовый рейтинг англоязычных романов XX века по версии экспертного совета и интернет-голосования.',
      meta: 'Зарубежная классика',
      url: 'https://www.modernlibrary.com/'
    },
    {
      title: 'Лучшие романы по опросу ВЦИОМ',
      domain: 'WCIOM.RU',
      since: '2002',
      desc: 'Всероссийский социологический срез читательских предпочтений по выборке из 2400 респондентов.',
      meta: 'Социология чтения',
      url: 'https://wciom.ru/'
    },
    {
      title: 'Рейтинг авторов в «Русской фантастике»',
      domain: 'RUSF.RU',
      since: '1999',
      desc: 'Сводный рейтинг произведений и авторов фантастического жанра под редакцией Ватолина.',
      meta: 'Сетевая фантастика',
      url: 'https://www.rusf.ru/'
    },
    {
      title: 'Лидеры продаж книжного магазина «Озон»',
      domain: 'OZON.RU',
      since: '2000',
      desc: 'Статистика фактического читательского спроса и покупательских симпатий книжного сектора Рунета.',
      meta: 'Сводка продаж',
      url: 'https://www.ozon.ru/'
    },
    {
      title: 'Лауреаты премий «Хьюго» и «Небула»',
      domain: 'HUGO.WORLDSF.ORG',
      since: '1953',
      desc: 'Полный хронологический перечень обладателей главных мировых наград в области научной фантастики.',
      meta: 'Зал славы SF',
      url: 'https://www.thehugoawards.org/'
    }
  ]
};

let altRankingsMode = 'libru';
let altRankingsPage = 1;
const ALT_RANKINGS_PAGE_SIZE = 3;

function renderAltRankings(mode = altRankingsMode, page = altRankingsPage) {
  altRankingsMode = mode;
  altRankingsPage = page;

  const container = document.getElementById('altRankingsGrid');
  const metaEl = document.getElementById('altPaginationMeta');
  const navEl = document.getElementById('altPagination');

  if (!container) return;

  const list = altRankingsData[mode] || altRankingsData.libru;
  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / ALT_RANKINGS_PAGE_SIZE));
  if (altRankingsPage > totalPages) altRankingsPage = totalPages;
  if (altRankingsPage < 1) altRankingsPage = 1;

  const startIdx = (altRankingsPage - 1) * ALT_RANKINGS_PAGE_SIZE;
  const pageItems = list.slice(startIdx, startIdx + ALT_RANKINGS_PAGE_SIZE);

  if (metaEl) {
    metaEl.textContent = `СТРАНИЦА ${altRankingsPage} ИЗ ${totalPages} · ПОКАЗАНО ${pageItems.length} ИЗ ${total} РЕЙТИНГОВ`;
  }

  container.innerHTML = pageItems.map(item => `
    <article class="guest-card" data-url="${item.url || ''}" tabindex="0" role="link" title="Перейти к рейтингу ${item.title}">
      <div>
        <div class="guest-top">
          <span class="guest-domain">${item.domain}</span>
          <span>с ${item.since} г.</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
      <div class="guest-foot">
        <span>${item.meta}</span>
        <span>ОТКРЫТЬ ЧАРТ ↗</span>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.guest-card').forEach(card => {
    const handleOpen = () => {
      const url = card.dataset.url;
      const title = card.querySelector('h3')?.textContent || '';
      toast(`Открытие рейтинга: «${title}»`);
      if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    };
    card.addEventListener('click', handleOpen);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpen();
      }
    });
  });

  if (navEl && typeof buildPaginationButtonsHtml === 'function') {
    navEl.innerHTML = buildPaginationButtonsHtml(altRankingsPage, totalPages);
    navEl.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const next = Number(btn.dataset.page);
        if (next >= 1 && next <= totalPages && next !== altRankingsPage) {
          renderAltRankings(altRankingsMode, next);
        }
      });
    });
  }
}

function bindAltRankingsSelector() {
  const selector = document.getElementById('altRankingsSelector');
  if (!selector) return;
  const tabs = selector.querySelectorAll('.authors-mode-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetMode = tab.dataset.altMode;
      if (targetMode === altRankingsMode) return;
      tabs.forEach(t => {
        const isTarget = t === tab;
        t.classList.toggle('active', isTarget);
        t.setAttribute('aria-selected', isTarget ? 'true' : 'false');
      });
      renderAltRankings(targetMode, 1);
    });
  });
}

// Initialise Hitparad
renderHitparadPodium();
renderHitparadTable(1);
renderCriteriaCards();
bindCriteriaControls();
renderAltRankings('libru', 1);
bindAltRankingsSelector();
