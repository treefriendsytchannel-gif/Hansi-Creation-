const langBtn=document.getElementById('langBtn');
let english=false;
langBtn.addEventListener('click',()=>{
  english=!english;
  langBtn.textContent=english?'සිං':'EN';
  document.querySelectorAll('[data-si]').forEach(el=>el.textContent=english?el.dataset.en:el.dataset.si);
  document.querySelector('.si-text').style.display=english?'none':'block';
  document.querySelector('.en-text').style.display=english?'block':'none';
});
document.querySelectorAll('.filter').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card=>{
      card.style.display=(f==='all'||card.dataset.category===f)?'block':'none';
    });
  });
});
document.querySelectorAll('.order').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const product=btn.dataset.product;
    const msg=`Hello Hansi Creation & Hansi Fashion!%0A%0AI would like to order/inquire about:%0A${encodeURIComponent(product)}%0A%0APlease send me more details.`;
    window.open(`https://wa.me/94775822307?text=${msg}`,'_blank');
  });
});

// Product search
const productSearch=document.getElementById('productSearch');
productSearch.addEventListener('input',()=>{
  const q=productSearch.value.trim().toLowerCase();
  document.querySelectorAll('.product-card').forEach(card=>{
    const text=card.textContent.toLowerCase();
    card.classList.toggle('search-hidden', q && !text.includes(q));
  });
});

// Website sharing with Web Share API + copy-link fallback
const shareStatus=document.getElementById('shareStatus');
async function shareWebsite(){
  const shareData={title:'Hansi Creation & Hansi Fashion',text:'Hansi Creation & Hansi Fashion — Teddy Bears, Gifts & Fashion',url:window.location.href};
  if(navigator.share){
    try{ await navigator.share(shareData); if(shareStatus) shareStatus.textContent='Shared successfully ♡'; }
    catch(e){}
  }else{
    try{ await navigator.clipboard.writeText(window.location.href); if(shareStatus) shareStatus.textContent='Website link copied!'; }
    catch(e){ if(shareStatus) shareStatus.textContent='Copy the website link from your browser address bar.'; }
  }
}
document.getElementById('shareBtn').addEventListener('click',shareWebsite);
const shareBig=document.getElementById('shareBig'); if(shareBig) shareBig.addEventListener('click',shareWebsite);
const copyLink=document.getElementById('copyLink'); if(copyLink) copyLink.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(window.location.href);shareStatus.textContent='Website link copied!';}
  catch(e){shareStatus.textContent='Copy the website link from your browser address bar.';}
});
