/* ============================= ICONS ============================= */
const ICONS = {
  ledger:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>`,
  users:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M16.5 6.5a3.2 3.2 0 0 1 0 6.4M21.5 20c0-3-2-5.2-5-5.9"/></svg>`,
  box:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v9l9 5 9-5V8M12 13v9"/></svg>`,
  plus:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 5v14M5 12h14"/></svg>`,
  search:`<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>`,
  gear:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>`,
  pdf:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`,
  trash:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>`,
  edit:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>`,
  copy:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  arrow:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  x:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  empty:`<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h5"/></svg>`,
};

/* ============================= STATE ============================= */
const state = {
  view: 'accueil',
  clients: [],
  articles: [],
  documents: [],
  entreprise: { nom:'', adresse:'', siret:'', tva:'', iban:'', pied:'' },
  loaded: false,
  search: '',
  filter: 'tous',
  modal: null,      // {type, payload}
  editingDoc: null, // working copy of a document being created/edited
};

const uid = () => Math.random().toString(36).slice(2,10) + Date.now().toString(36).slice(-4);
const todayISO = () => new Date().toISOString().slice(0,10);
const eur = (n) => (isFinite(n)?n:0).toLocaleString('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:2}) + ' €';
const escapeHtml = (s='') => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._h);
  toast._h = setTimeout(()=>t.classList.remove('show'), 2200);
}

/* ============================= STORAGE ============================= */
async function loadAll(){
  try{
    const [c,a,d,e] = await Promise.all([
      safeGet('clients'), safeGet('articles'), safeGet('documents'), safeGet('entreprise')
    ]);
    state.clients = c ? JSON.parse(c) : [];
    state.articles = a ? JSON.parse(a) : [];
    state.documents = d ? JSON.parse(d) : [];
    state.entreprise = e ? JSON.parse(e) : state.entreprise;
  }catch(err){ console.error('load error', err); }
  state.loaded = true;
  render();
}
async function safeGet(key){
  try{ const r = await window.storage.get(key,false); return r ? r.value : null; }
  catch(e){ return null; }
}
async function save(key){
  try{
    const value = JSON.stringify(state[key]);
    await window.storage.set(key, value, false);
  }catch(e){ console.error('save error', key, e); toast('Erreur de sauvegarde locale'); }
}

/* ============================= NAVIGATION ============================= */
function navigate(view, payload){
  state.view = view;
  state.modal = null;
  if(view === 'nouveau'){
    state.editingDoc = payload || blankDoc('devis');
  }
  render();
}
function openModal(type, payload){ state.modal = {type, payload}; render(); }
function closeModal(){ state.modal = null; render(); }

/* ============================= DOMAIN LOGIC ============================= */
function blankDoc(type){
  return {
    id: uid(), type, statut:'brouillon',
    numero: nextNumero(type),
    date: todayISO(),
    clientId: '', clientSnapshot: null,
    lignes: [ blankLigne() ],
    conditions: type==='devis' ? '30 jours fin de mois' : 'Paiement à réception',
    lieDevisNumero: null,
    createdAt: Date.now(),
  };
}
function blankLigne(){ return { id: uid(), description:'', quantite:1, prixUnitaireHT:0, tauxTva:20 }; }

function nextNumero(type){
  const year = new Date().getFullYear();
  const prefix = type === 'devis' ? 'DEVIS' : 'FACT';
  const existing = state.documents.filter(d => d.type===type && d.numero.startsWith(`${prefix}-${year}-`));
  const nums = existing.map(d => parseInt(d.numero.split('-').pop(),10)).filter(n=>!isNaN(n));
  const next = (nums.length ? Math.max(...nums) : 0) + 1;
  return `${prefix}-${year}-${String(next).padStart(3,'0')}`;
}

function computeTotals(doc){
  let totalHT = 0; const tvaByRate = {};
  for(const l of doc.lignes){
    const lineHT = (parseFloat(l.quantite)||0) * (parseFloat(l.prixUnitaireHT)||0);
    totalHT += lineHT;
    const rate = parseFloat(l.tauxTva)||0;
    tvaByRate[rate] = (tvaByRate[rate]||0) + lineHT * rate/100;
  }
  const totalTVA = Object.values(tvaByRate).reduce((a,b)=>a+b,0);
  return { totalHT, tvaByRate, totalTVA, totalTTC: totalHT + totalTVA };
}

async function persistDoc(doc, {silent}={}){
  const idx = state.documents.findIndex(d=>d.id===doc.id);
  if(idx>=0) state.documents[idx] = doc; else state.documents.push(doc);
  await save('documents');
  if(!silent) toast(doc.type==='devis' ? 'Devis enregistré' : 'Facture enregistrée');
}
async function deleteDoc(id){
  state.documents = state.documents.filter(d=>d.id!==id);
  await save('documents');
  toast('Document supprimé');
  navigate('accueil');
}
async function convertToFacture(devis){
  const facture = JSON.parse(JSON.stringify(devis));
  facture.id = uid();
  facture.type = 'facture';
  facture.statut = 'brouillon';
  facture.numero = nextNumero('facture');
  facture.date = todayISO();
  facture.lieDevisNumero = devis.numero;
  facture.conditions = 'Paiement à réception';
  facture.createdAt = Date.now();
  state.documents.push(facture);
  await save('documents');
  toast('Facture créée à partir du devis');
  navigate('nouveau', facture);
}

async function upsertClient(client){
  const idx = state.clients.findIndex(c=>c.id===client.id);
  if(idx>=0) state.clients[idx]=client; else state.clients.push(client);
  await save('clients');
}
async function deleteClient(id){
  state.clients = state.clients.filter(c=>c.id!==id);
  await save('clients');
  toast('Client supprimé');
}
async function upsertArticle(article){
  const idx = state.articles.findIndex(a=>a.id===article.id);
  if(idx>=0) state.articles[idx]=article; else state.articles.push(article);
  await save('articles');
}
async function deleteArticle(id){
  state.articles = state.articles.filter(a=>a.id!==id);
  await save('articles');
  toast('Article supprimé');
}
async function saveEntreprise(profile){
  state.entreprise = profile;
  await save('entreprise');
  toast('Profil entreprise enregistré');
}

/* ============================= RENDER SHELL ============================= */
function render(){
  const app = document.getElementById('app');
  if(!state.loaded){
    app.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100vh;width:100%;color:var(--ink-soft);font-family:'Fraunces',serif;font-style:italic;">Chargement du registre…</div>`;
    return;
  }
  app.innerHTML = `
    ${renderSidebar()}
    <main>${renderView()}</main>
    ${state.modal ? renderModal() : ''}
  `;
  bindPostRender();
}

function renderSidebar(){
  const items = [
    {id:'accueil', label:'Tableau de bord', icon:ICONS.ledger},
    {id:'clients', label:'Clients', icon:ICONS.users},
    {id:'articles', label:'Articles & services', icon:ICONS.box},
    {id:'parametres', label:'Mon entreprise', icon:ICONS.gear},
  ];
  return `
  <div class="sidebar">
    <div class="brand">
      <div class="brand-mark">Le Registre</div>
      <div class="brand-sub">Devis &amp; factures · hors ligne</div>
    </div>
    <nav>
      ${items.map(it => `
        <button class="nav-btn ${state.view===it.id?'active':''}" data-nav="${it.id}">
          ${it.icon}<span>${it.label}</span>
        </button>`).join('')}
    </nav>
    <div class="sidebar-foot">
      Vos données restent sur cet appareil (stockage privé du navigateur). Rien n'est envoyé à un serveur.
      <button data-action="new-devis">+ Nouveau devis</button>
    </div>
  </div>`;
}

function renderView(){
  switch(state.view){
    case 'accueil': return renderAccueil();
    case 'clients': return renderClients();
    case 'articles': return renderArticles();
    case 'parametres': return renderParametres();
    case 'nouveau': return renderEditor();
    default: return renderAccueil();
  }
}

/* ============================= DASHBOARD ============================= */
function renderAccueil(){
  const docs = state.documents.slice().sort((a,b)=>b.createdAt-a.createdAt);
  const filtered = docs.filter(d=>{
    if(state.filter!=='tous' && d.type!==state.filter) return false;
    if(state.search){
      const c = clientLabel(d);
      const hay = (d.numero+' '+c).toLowerCase();
      if(!hay.includes(state.search.toLowerCase())) return false;
    }
    return true;
  });
  const nbDevis = docs.filter(d=>d.type==='devis').length;
  const nbFactures = docs.filter(d=>d.type==='facture').length;
  const now = new Date();
  const caMois = docs.filter(d=>d.type==='facture' && d.statut==='payee' && new Date(d.date).getMonth()===now.getMonth() && new Date(d.date).getFullYear()===now.getFullYear())
    .reduce((s,d)=> s + computeTotals(d).totalTTC, 0);
  const enAttente = docs.filter(d=>d.type==='facture' && d.statut!=='payee').reduce((s,d)=>s+computeTotals(d).totalTTC,0);

  return `
    <div class="page-head">
      <div><div class="eyebrow">Vue d'ensemble</div><h1>Tableau de bord</h1><p>Vos devis et factures, classés par ordre chronologique.</p></div>
      <button class="btn stamp" data-action="new-devis">${ICONS.plus} Nouveau devis</button>
    </div>

    <div class="stats">
      <div class="card stat"><div class="label">Devis émis</div><div class="value num">${nbDevis}</div></div>
      <div class="card stat"><div class="label">Factures émises</div><div class="value num">${nbFactures}</div></div>
      <div class="card stat"><div class="label">Encaissé ce mois-ci</div><div class="value num">${eur(caMois)}</div></div>
      <div class="card stat"><div class="label">En attente de paiement</div><div class="value num">${eur(enAttente)}</div></div>
    </div>

    <div class="toolbar">
      <div class="search">${ICONS.search}<input id="search-input" placeholder="Rechercher un numéro ou un client…" value="${escapeHtml(state.search)}"></div>
      <div class="chip-group">
        ${['tous','devis','facture'].map(f=>`<button class="chip ${state.filter===f?'active':''}" data-filter="${f}">${f==='tous'?'Tous':f==='devis'?'Devis':'Factures'}</button>`).join('')}
      </div>
    </div>

    <div class="card">
      <table>
        <thead><tr><th>Type</th><th>Numéro</th><th>Client</th><th>Date</th><th>Statut</th><th style="text-align:right">Total TTC</th><th></th></tr></thead>
        <tbody>
          ${filtered.length===0 ? `<tr class="empty-row"><td colspan="7">${docs.length===0 ? "Aucun document pour l'instant. Créez votre premier devis." : "Aucun résultat pour cette recherche."}</td></tr>` :
            filtered.map(d=>{
              const t = computeTotals(d);
              return `<tr class="clickable" data-open-doc="${d.id}">
                <td><span class="badge ${d.type}">${d.type==='devis'?'Devis':'Facture'}</span></td>
                <td class="num">${d.numero}</td>
                <td>${escapeHtml(clientLabel(d))}</td>
                <td class="num">${formatDate(d.date)}</td>
                <td>${statusBadge(d.statut)}</td>
                <td class="num" style="text-align:right">${eur(t.totalTTC)}</td>
                <td><span class="row-actions">${ICONS.arrow}</span></td>
              </tr>`;
            }).join('')}
        </tbody>
      </table>
    </div>
  `;
}
function clientLabel(d){ return d.clientSnapshot ? d.clientSnapshot.nom : '—'; }
function formatDate(iso){ if(!iso) return '—'; const [y,m,day]=iso.split('-'); return `${day}/${m}/${y}`; }
function statusBadge(s){
  const map = {brouillon:'Brouillon', envoye:'Envoyé', accepte:'Accepté', payee:'Payée'};
  return `<span class="status ${s}">${map[s]||s}</span>`;
}

/* ============================= CLIENTS ============================= */
function renderClients(){
  const list = state.clients.slice().sort((a,b)=>a.nom.localeCompare(b.nom));
  return `
    <div class="page-head">
      <div><div class="eyebrow">Répertoire</div><h1>Clients</h1><p>Réutilisez ces fiches lors de la création de devis et factures.</p></div>
      <button class="btn stamp" data-action="new-client">${ICONS.plus} Nouveau client</button>
    </div>
    <div class="card">
      <table>
        <thead><tr><th>Nom</th><th>Adresse</th><th>N° TVA / SIRET</th><th>E-mail</th><th></th></tr></thead>
        <tbody>
          ${list.length===0 ? `<tr class="empty-row"><td colspan="5">Aucun client enregistré.</td></tr>` :
          list.map(c=>`
            <tr>
              <td><strong>${escapeHtml(c.nom)}</strong></td>
              <td>${escapeHtml(c.adresse||'—')}</td>
              <td class="num">${escapeHtml(c.numTva || c.siret || '—')}</td>
              <td>${escapeHtml(c.email||'—')}</td>
              <td><span class="row-actions">
                <button class="icon-btn" data-edit-client="${c.id}" title="Modifier">${ICONS.edit}</button>
                <button class="icon-btn" data-delete-client="${c.id}" title="Supprimer">${ICONS.trash}</button>
              </span></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/* ============================= ARTICLES ============================= */
function renderArticles(){
  const list = state.articles.slice().sort((a,b)=>a.description.localeCompare(b.description));
  return `
    <div class="page-head">
      <div><div class="eyebrow">Bibliothèque</div><h1>Articles &amp; services</h1><p>Vos prestations récurrentes, prêtes à insérer dans une ligne de devis.</p></div>
      <button class="btn stamp" data-action="new-article">${ICONS.plus} Nouvel article</button>
    </div>
    <div class="card">
      <table>
        <thead><tr><th>Description</th><th style="text-align:right">Prix unitaire HT</th><th style="text-align:right">TVA</th><th></th></tr></thead>
        <tbody>
          ${list.length===0 ? `<tr class="empty-row"><td colspan="4">Aucun article enregistré.</td></tr>` :
          list.map(a=>`
            <tr>
              <td>${escapeHtml(a.description)}</td>
              <td class="num" style="text-align:right">${eur(a.prixUnitaireHT)}</td>
              <td class="num" style="text-align:right">${a.tauxTva}%</td>
              <td><span class="row-actions">
                <button class="icon-btn" data-edit-article="${a.id}" title="Modifier">${ICONS.edit}</button>
                <button class="icon-btn" data-delete-article="${a.id}" title="Supprimer">${ICONS.trash}</button>
              </span></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/* ============================= PARAMETRES ============================= */
function renderParametres(){
  const e = state.entreprise;
  return `
    <div class="page-head">
      <div><div class="eyebrow">En-tête des documents</div><h1>Mon entreprise</h1><p>Ces informations apparaissent sur chaque devis et facture exportés en PDF.</p></div>
    </div>
    <div class="card" style="padding:24px;max-width:560px;">
      <form id="form-entreprise" style="display:flex;flex-direction:column;gap:14px;">
        <div class="field"><label>Nom de l'entreprise</label><input name="nom" value="${escapeHtml(e.nom)}" placeholder="Ex. Atelier Dupont" required></div>
        <div class="field"><label>Adresse</label><textarea name="adresse" placeholder="12 rue des Artisans, 75011 Paris">${escapeHtml(e.adresse)}</textarea></div>
        <div class="field-row">
          <div class="field"><label>SIRET</label><input name="siret" value="${escapeHtml(e.siret)}" placeholder="123 456 789 00012"></div>
          <div class="field"><label>N° TVA intracommunautaire</label><input name="tva" value="${escapeHtml(e.tva)}" placeholder="FR12345678900"></div>
        </div>
        <div class="field"><label>IBAN (facultatif)</label><input name="iban" value="${escapeHtml(e.iban)}" placeholder="FR76 XXXX XXXX XXXX XXXX XXXX XXX"></div>
        <div class="field"><label>Mention de pied de page</label><textarea name="pied" placeholder="Ex. TVA non applicable, art. 293 B du CGI">${escapeHtml(e.pied)}</textarea></div>
        <div style="display:flex;justify-content:flex-end;"><button type="submit" class="btn stamp">Enregistrer</button></div>
      </form>
    </div>
  `;
}

/* ============================= DOCUMENT EDITOR ============================= */
function renderEditor(){
  const doc = state.editingDoc;
  if(!doc) return renderAccueil();
  const totals = computeTotals(doc);
  const client = state.clients.find(c=>c.id===doc.clientId);

  return `
    <div class="page-head">
      <div>
        <div class="eyebrow">${doc.type==='devis'?'Devis':'Facture'} ${doc.lieDevisNumero?`· établie depuis ${doc.lieDevisNumero}`:''}</div>
        <h1 class="num">${doc.numero}</h1>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button class="btn secondary" data-action="back">← Retour</button>
        <button class="btn secondary" data-action="export-pdf">${ICONS.pdf} Exporter en PDF</button>
        ${doc.type==='devis' ? `<button class="btn stamp" data-action="to-facture">${ICONS.copy} Convertir en facture</button>` : ''}
        <button class="btn danger" data-action="delete-doc">${ICONS.trash} Supprimer</button>
      </div>
    </div>

    <div class="doc-grid">
      <div class="card doc-main">

        <div>
          <div class="section-title">Informations générales</div>
          <div class="field-row" style="margin-top:12px;">
            <div class="field"><label>Type de document</label>
              <select id="f-type">
                <option value="devis" ${doc.type==='devis'?'selected':''}>Devis</option>
                <option value="facture" ${doc.type==='facture'?'selected':''}>Facture</option>
              </select>
            </div>
            <div class="field"><label>Date</label><input id="f-date" type="date" value="${doc.date}"></div>
          </div>
          <div class="field-row" style="margin-top:12px;">
            <div class="field"><label>Statut</label>
              <select id="f-statut">
                ${['brouillon','envoye','accepte','payee'].map(s=>`<option value="${s}" ${doc.statut===s?'selected':''}>${({brouillon:'Brouillon',envoye:'Envoyé',accepte:'Accepté',payee:'Payée'})[s]}</option>`).join('')}
              </select>
            </div>
            <div class="field"><label>Conditions de règlement</label><input id="f-conditions" value="${escapeHtml(doc.conditions)}"></div>
          </div>
        </div>

        <div>
          <div class="section-title">Client</div>
          <div class="field-row" style="margin-top:12px;align-items:end;">
            <div class="field"><label>Sélectionner un client existant</label>
              <select id="f-client">
                <option value="">— Choisir —</option>
                ${state.clients.map(c=>`<option value="${c.id}" ${doc.clientId===c.id?'selected':''}>${escapeHtml(c.nom)}</option>`).join('')}
              </select>
            </div>
            <button class="btn secondary" data-action="new-client-inline" style="height:38px;">${ICONS.plus} Nouveau client</button>
          </div>
          ${client ? `<div class="hint" style="margin-top:8px;">${escapeHtml(client.adresse||'')} ${client.numTva?(' · '+escapeHtml(client.numTva)):''}</div>` : ''}
        </div>

        <div>
          <div class="section-title">Lignes de prestation</div>
          <table class="lines-table" style="margin-top:12px;">
            <thead><tr><th style="width:38%">Description</th><th style="width:14%">Qté</th><th style="width:18%">Prix HT</th><th style="width:12%">TVA %</th><th style="width:14%">Total HT</th><th></th></tr></thead>
            <tbody>
              ${doc.lignes.map((l,i)=>`
                <tr data-line="${l.id}">
                  <td>
                    <input list="articles-list" data-line-field="description" data-line-id="${l.id}" value="${escapeHtml(l.description)}" placeholder="Description">
                  </td>
                  <td><input type="number" min="0" step="0.5" data-line-field="quantite" data-line-id="${l.id}" value="${l.quantite}"></td>
                  <td><input type="number" min="0" step="0.01" data-line-field="prixUnitaireHT" data-line-id="${l.id}" value="${l.prixUnitaireHT}"></td>
                  <td><input type="number" min="0" step="0.1" data-line-field="tauxTva" data-line-id="${l.id}" value="${l.tauxTva}"></td>
                  <td class="num-col">${eur((parseFloat(l.quantite)||0)*(parseFloat(l.prixUnitaireHT)||0))}</td>
                  <td><button class="icon-btn" data-remove-line="${l.id}" ${doc.lignes.length===1?'disabled':''} title="Supprimer la ligne">${ICONS.x}</button></td>
                </tr>`).join('')}
            </tbody>
          </table>
          <datalist id="articles-list">
            ${state.articles.map(a=>`<option value="${escapeHtml(a.description)}">`).join('')}
          </datalist>
          <button class="btn secondary add-line" data-action="add-line">${ICONS.plus} Ajouter une ligne</button>
        </div>

      </div>

      <div class="doc-side">
        <div class="card doc-preview">
          <div class="stamp-mark">${({brouillon:'Brouillon',envoye:'Envoyé',accepte:'Accepté',payee:'Payée'})[doc.statut]}</div>
          <div class="doc-preview-head">
            <div>
              <h2>${doc.type==='devis'?'Devis':'Facture'}</h2>
              <div class="hint num">${doc.numero}</div>
            </div>
          </div>
          <div class="who" style="margin-top:14px;">
            <strong>${escapeHtml(state.entreprise.nom || 'Votre entreprise')}</strong><br>
            ${escapeHtml(state.entreprise.adresse||'').replace(/\n/g,'<br>')}
          </div>
          <div class="who" style="margin-top:12px;">
            <strong>Facturé à</strong><br>
            ${client ? escapeHtml(client.nom) : '—'}
          </div>
          <div class="totals">
            <div class="row"><span>Total HT</span><span class="num">${eur(totals.totalHT)}</span></div>
            ${Object.entries(totals.tvaByRate).map(([rate,amt])=>`<div class="row"><span>TVA ${rate}%</span><span class="num">${eur(amt)}</span></div>`).join('')}
            <div class="row grand"><span>Total TTC</span><span>${eur(totals.totalTTC)}</span></div>
          </div>
        </div>
        <div class="hint">Le PDF exporté reprendra automatiquement ces informations, l'en-tête de votre entreprise (page « Mon entreprise ») et le tampon de statut.</div>
      </div>
    </div>
  `;
}

/* ============================= MODALS ============================= */
function renderModal(){
  const {type, payload} = state.modal;
  if(type==='client') return renderClientModal(payload);
  if(type==='article') return renderArticleModal(payload);
  return '';
}
function renderClientModal(client){
  const c = client || {id:uid(), nom:'', adresse:'', numTva:'', email:''};
  return `
  <div class="overlay" data-close-modal>
    <div class="modal" onclick="event.stopPropagation()">
      <div class="modal-head"><h3>${client?'Modifier le client':'Nouveau client'}</h3><button class="icon-btn" data-close-modal>${ICONS.x}</button></div>
      <form id="form-client">
        <input type="hidden" name="id" value="${c.id}">
        <div class="modal-body">
          <div class="field"><label>Nom</label><input name="nom" value="${escapeHtml(c.nom)}" required autofocus></div>
          <div class="field"><label>Adresse</label><textarea name="adresse">${escapeHtml(c.adresse)}</textarea></div>
          <div class="field"><label>N° TVA / SIRET</label><input name="numTva" value="${escapeHtml(c.numTva)}"></div>
          <div class="field"><label>E-mail</label><input name="email" type="email" value="${escapeHtml(c.email)}"></div>
        </div>
        <div class="modal-foot">
          <button type="button" class="btn secondary" data-close-modal>Annuler</button>
          <button type="submit" class="btn stamp">Enregistrer</button>
        </div>
      </form>
    </div>
  </div>`;
}
function renderArticleModal(article){
  const a = article || {id:uid(), description:'', prixUnitaireHT:0, tauxTva:20};
  return `
  <div class="overlay" data-close-modal>
    <div class="modal" onclick="event.stopPropagation()">
      <div class="modal-head"><h3>${article?"Modifier l'article":'Nouvel article'}</h3><button class="icon-btn" data-close-modal>${ICONS.x}</button></div>
      <form id="form-article">
        <input type="hidden" name="id" value="${a.id}">
        <div class="modal-body">
          <div class="field"><label>Description</label><input name="description" value="${escapeHtml(a.description)}" required autofocus></div>
          <div class="field-row">
            <div class="field"><label>Prix unitaire HT (€)</label><input name="prixUnitaireHT" type="number" min="0" step="0.01" value="${a.prixUnitaireHT}"></div>
            <div class="field"><label>Taux de TVA (%)</label><input name="tauxTva" type="number" min="0" step="0.1" value="${a.tauxTva}"></div>
          </div>
        </div>
        <div class="modal-foot">
          <button type="button" class="btn secondary" data-close-modal>Annuler</button>
          <button type="submit" class="btn stamp">Enregistrer</button>
        </div>
      </form>
    </div>
  </div>`;
}

/* ============================= EVENTS ============================= */
function bindPostRender(){
  const app = document.getElementById('app');

  app.querySelectorAll('[data-nav]').forEach(b=>b.onclick = ()=> navigate(b.dataset.nav));
  const newDevisBtn = app.querySelector('[data-action="new-devis"]');
  if(newDevisBtn) newDevisBtn.onclick = () => navigate('nouveau', blankDoc('devis'));

  // dashboard
  const searchInput = app.querySelector('#search-input');
  if(searchInput){
    searchInput.oninput = (e) => { state.search = e.target.value; renderSoft(); };
    searchInput.focus();
    searchInput.selectionStart = searchInput.selectionEnd = searchInput.value.length;
  }
  app.querySelectorAll('[data-filter]').forEach(b=> b.onclick = ()=>{ state.filter=b.dataset.filter; render(); });
  app.querySelectorAll('[data-open-doc]').forEach(tr=> tr.onclick = ()=>{
    const doc = state.documents.find(d=>d.id===tr.dataset.openDoc);
    if(doc) navigate('nouveau', doc);
  });

  // clients page
  const newClientBtn = app.querySelector('[data-action="new-client"]');
  if(newClientBtn) newClientBtn.onclick = () => openModal('client', null);
  app.querySelectorAll('[data-edit-client]').forEach(b=> b.onclick = ()=> openModal('client', state.clients.find(c=>c.id===b.dataset.editClient)));
  app.querySelectorAll('[data-delete-client]').forEach(b=> b.onclick = ()=>{ if(confirm('Supprimer ce client ?')) deleteClient(b.dataset.deleteClient).then(render); });

  // articles page
  const newArticleBtn = app.querySelector('[data-action="new-article"]');
  if(newArticleBtn) newArticleBtn.onclick = () => openModal('article', null);
  app.querySelectorAll('[data-edit-article]').forEach(b=> b.onclick = ()=> openModal('article', state.articles.find(a=>a.id===b.dataset.editArticle)));
  app.querySelectorAll('[data-delete-article]').forEach(b=> b.onclick = ()=>{ if(confirm('Supprimer cet article ?')) deleteArticle(b.dataset.deleteArticle).then(render); });

  // entreprise form
  const formEnt = app.querySelector('#form-entreprise');
  if(formEnt) formEnt.onsubmit = (e)=>{
    e.preventDefault();
    const fd = new FormData(formEnt);
    saveEntreprise(Object.fromEntries(fd.entries())).then(render);
  };

  // client modal form
  const formClient = app.querySelector('#form-client');
  if(formClient) formClient.onsubmit = (e)=>{
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(formClient).entries());
    upsertClient(fd).then(()=>{ closeModal(); toast('Client enregistré'); });
  };
  const formArticle = app.querySelector('#form-article');
  if(formArticle) formArticle.onsubmit = (e)=>{
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(formArticle).entries());
    fd.prixUnitaireHT = parseFloat(fd.prixUnitaireHT)||0;
    fd.tauxTva = parseFloat(fd.tauxTva)||0;
    upsertArticle(fd).then(()=>{ closeModal(); toast('Article enregistré'); });
  };
  app.querySelectorAll('[data-close-modal]').forEach(el=> el.onclick = closeModal);

  // editor
  bindEditorEvents(app);
}

function renderSoft(){
  // re-render just the dashboard table region without losing focus on search box
  const app = document.getElementById('app');
  const main = app.querySelector('main');
  if(main && state.view==='accueil'){
    const activeEl = document.activeElement;
    const wasSearch = activeEl && activeEl.id==='search-input';
    const caret = wasSearch ? activeEl.selectionStart : null;
    main.innerHTML = renderView();
    bindPostRender();
    if(wasSearch){
      const el = document.getElementById('search-input');
      el.focus(); el.selectionStart = el.selectionEnd = caret;
    }
  }
}

function bindEditorEvents(app){
  const doc = state.editingDoc;
  if(!doc || state.view!=='nouveau') return;

  const backBtn = app.querySelector('[data-action="back"]');
  if(backBtn) backBtn.onclick = ()=> navigate('accueil');

  const typeSel = app.querySelector('#f-type');
  if(typeSel) typeSel.onchange = ()=>{ doc.type = typeSel.value; renderEditorSoft(); };
  const dateInp = app.querySelector('#f-date');
  if(dateInp) dateInp.onchange = ()=>{ doc.date = dateInp.value; };
  const statutSel = app.querySelector('#f-statut');
  if(statutSel) statutSel.onchange = ()=>{ doc.statut = statutSel.value; persistDoc(doc,{silent:true}); renderEditorSoft(); };
  const condInp = app.querySelector('#f-conditions');
  if(condInp) condInp.onchange = ()=>{ doc.conditions = condInp.value; };

  const clientSel = app.querySelector('#f-client');
  if(clientSel) clientSel.onchange = ()=>{
    doc.clientId = clientSel.value;
    const c = state.clients.find(x=>x.id===doc.clientId);
    doc.clientSnapshot = c ? {nom:c.nom, adresse:c.adresse, numTva:c.numTva} : null;
    renderEditorSoft();
  };
  const newClientInline = app.querySelector('[data-action="new-client-inline"]');
  if(newClientInline) newClientInline.onclick = ()=> openModal('client', null);

  app.querySelectorAll('[data-line-field]').forEach(inp=>{
    inp.oninput = ()=>{
      const l = doc.lignes.find(x=>x.id===inp.dataset.lineId);
      if(!l) return;
      const field = inp.dataset.lineField;
      l[field] = (field==='description') ? inp.value : (parseFloat(inp.value)||0);
      renderEditorSoft(inp);
    };
  });
  app.querySelectorAll('[data-remove-line]').forEach(b=> b.onclick = ()=>{
    doc.lignes = doc.lignes.filter(l=>l.id!==b.dataset.removeLine);
    renderEditorSoft();
  });
  const addLineBtn = app.querySelector('[data-action="add-line"]');
  if(addLineBtn) addLineBtn.onclick = ()=>{ doc.lignes.push(blankLigne()); renderEditorSoft(); };

  const exportBtn = app.querySelector('[data-action="export-pdf"]');
  if(exportBtn) exportBtn.onclick = ()=> exportDocPdf(doc);

  const toFactureBtn = app.querySelector('[data-action="to-facture"]');
  if(toFactureBtn) toFactureBtn.onclick = ()=> convertToFacture(doc);

  const deleteBtn = app.querySelector('[data-action="delete-doc"]');
  if(deleteBtn) deleteBtn.onclick = ()=>{
    if(confirm('Supprimer définitivement ce document ?')) deleteDoc(doc.id);
  };

  // autosave on blur of the whole editor area
  const mainEl = app.querySelector('main');
  mainEl.addEventListener('focusout', ()=> persistDoc(doc, {silent:true}), true);
}

function renderEditorSoft(focusInput){
  const app = document.getElementById('app');
  const main = app.querySelector('main');
  const focusedId = document.activeElement ? document.activeElement.dataset && document.activeElement.dataset.lineId : null;
  const focusedField = document.activeElement ? document.activeElement.dataset && document.activeElement.dataset.lineField : null;
  main.innerHTML = renderView();
  bindPostRender();
  if(focusedId && focusedField){
    const el = app.querySelector(`[data-line-id="${focusedId}"][data-line-field="${focusedField}"]`);
    if(el){ el.focus(); }
  }
}

/* ============================= PDF EXPORT ============================= */
function exportDocPdf(doc){
  persistDoc(doc, {silent:true});
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({unit:'pt', format:'a4'});
  const totals = computeTotals(doc);
  const client = state.clients.find(c=>c.id===doc.clientId) || doc.clientSnapshot;
  const e = state.entreprise;
  const marginX = 48;
  let y = 56;

  pdf.setFont('helvetica','bold'); pdf.setFontSize(20);
  pdf.setTextColor(27,42,74);
  pdf.text(doc.type==='devis' ? 'DEVIS' : 'FACTURE', marginX, y);
  pdf.setFontSize(11); pdf.setFont('helvetica','normal'); pdf.setTextColor(90,90,90);
  pdf.text(doc.numero, marginX, y+16);

  pdf.setFontSize(10); pdf.setTextColor(120,120,120);
  pdf.text(`Date : ${formatDate(doc.date)}`, 400, y-6, {align:'left'});
  pdf.text(`Statut : ${({brouillon:'Brouillon',envoye:'Envoyé',accepte:'Accepté',payee:'Payée'})[doc.statut]}`, 400, y+10);
  if(doc.lieDevisNumero) pdf.text(`Établie depuis le devis ${doc.lieDevisNumero}`, 400, y+26);

  y += 48;
  pdf.setDrawColor(216,210,194); pdf.line(marginX, y, 547, y);
  y += 22;

  pdf.setFontSize(9); pdf.setTextColor(150,150,150); pdf.text('ÉMETTEUR', marginX, y);
  pdf.setFontSize(9); pdf.text('CLIENT', 320, y);
  y += 14;
  pdf.setFontSize(10.5); pdf.setTextColor(27,42,74); pdf.setFont('helvetica','bold');
  pdf.text(e.nom || 'Votre entreprise', marginX, y);
  pdf.text(client ? (client.nom||'') : '—', 320, y);
  pdf.setFont('helvetica','normal'); pdf.setTextColor(60,60,60);
  let y2 = y+14;
  (e.adresse||'').split('\n').forEach(line=>{ pdf.text(line, marginX, y2); y2+=13; });
  let y3 = y+14;
  if(client && client.adresse){ (client.adresse||'').split('\n').forEach(line=>{ pdf.text(line, 320, y3); y3+=13; }); }
  if(e.siret) { pdf.text(`SIRET : ${e.siret}`, marginX, y2); y2+=13; }
  if(e.tva) { pdf.text(`TVA : ${e.tva}`, marginX, y2); y2+=13; }
  if(client && client.numTva){ pdf.text(`TVA : ${client.numTva}`, 320, y3); y3+=13; }

  y = Math.max(y2, y3) + 24;

  const rows = doc.lignes.map(l => [
    l.description || '—',
    String(l.quantite),
    (parseFloat(l.prixUnitaireHT)||0).toFixed(2)+' €',
    (parseFloat(l.tauxTva)||0)+'%',
    (((parseFloat(l.quantite)||0)*(parseFloat(l.prixUnitaireHT)||0)).toFixed(2))+' €'
  ]);
  pdf.autoTable({
    startY: y,
    margin:{left:marginX, right:48},
    head:[['Description','Qté','Prix unit. HT','TVA','Total HT']],
    body: rows,
    styles:{font:'helvetica', fontSize:9.5, textColor:[27,42,74], cellPadding:6},
    headStyles:{fillColor:[27,42,74], textColor:[245,240,228]},
    alternateRowStyles:{fillColor:[247,243,233]},
    columnStyles:{1:{halign:'right'},2:{halign:'right'},3:{halign:'right'},4:{halign:'right'}}
  });

  let ty = pdf.lastAutoTable.finalY + 24;
  const totalsX = 400;
  pdf.setFontSize(10); pdf.setTextColor(60,60,60);
  pdf.text('Total HT', totalsX, ty); pdf.text((totals.totalHT.toFixed(2))+' €', 547, ty, {align:'right'});
  ty += 15;
  Object.entries(totals.tvaByRate).forEach(([rate,amt])=>{
    pdf.text(`TVA ${rate}%`, totalsX, ty); pdf.text(amt.toFixed(2)+' €', 547, ty, {align:'right'});
    ty += 15;
  });
  pdf.setDrawColor(216,210,194); pdf.line(totalsX, ty, 547, ty); ty += 14;
  pdf.setFont('helvetica','bold'); pdf.setFontSize(12.5); pdf.setTextColor(27,42,74);
  pdf.text('Total TTC', totalsX, ty); pdf.text(totals.totalTTC.toFixed(2)+' €', 547, ty, {align:'right'});

  ty += 34;
  pdf.setFont('helvetica','normal'); pdf.setFontSize(9.5); pdf.setTextColor(90,90,90);
  pdf.text(`Conditions de règlement : ${doc.conditions || '—'}`, marginX, ty);
  if(e.iban){ ty+=14; pdf.text(`IBAN : ${e.iban}`, marginX, ty); }

  // stamp
  pdf.setDrawColor(179,58,46); pdf.setTextColor(179,58,46);
  pdf.setLineWidth(1.4);
  pdf.circle(500, 130, 40, 'S');
  pdf.setFontSize(9); pdf.setFont('helvetica','bold');
  const label = ({brouillon:'BROUILLON',envoye:'ENVOYÉ',accepte:'ACCEPTÉ',payee:'PAYÉE'})[doc.statut];
  pdf.text(label, 500, 133, {align:'center'});

  if(e.pied){
    pdf.setFont('helvetica','italic'); pdf.setFontSize(8.5); pdf.setTextColor(140,140,140);
    pdf.text(e.pied, marginX, 800, {maxWidth:500});
  }

  pdf.save(`${doc.numero}.pdf`);
  toast('PDF exporté');
}

/* ============================= INIT ============================= */
loadAll();
