/* ================= PERSONALIZE YOUR BIRTHDAY GARDEN =================
   Change the name, message, and file paths here. Add/remove items in the
   five arrays below. Missing media files are handled with gentle fallbacks.
======================================================================= */
const birthdayConfig = {
  name: "Pattu",
  birthdayMessage: "The way you move through the world—with warmth, wonder, and that unmistakable light—is a gift to everyone lucky enough to know you. Today, I hope a little of that love finds its way back to you.",
  backgroundMusic: "assets/audio/background.mp3"
};

const sunflowers = [
  { title:"Your Smile", text:"Your smile has a way of making even an ordinary day feel like it might turn into something lovely." },
  { title:"Your Heart", text:"You care so deeply, so generously. I hope you know how rare and beautiful that is." },
  { title:"Your Kindness", text:"The kindness you offer so naturally leaves little traces of light wherever you go." },
  { title:"Your Laugh", text:"I would find my way back to your laugh in any room, on any day." },
  { title:"Your Little Habits", text:"All the tiny things that make you unmistakably you are some of my very favourite things." },
  { title:"Your Strength", text:"You have faced hard things with a quiet courage that deserves to be celebrated, too." },
  { title:"Your Care", text:"You notice what other people need. I hope today you let the people who love you take care of you." },
  { title:"Our Memories", text:"Every memory with you feels like a little keepsake I get to carry around in my heart." },
  { title:"How You Make Me Feel", text:"With you, the world feels softer, funnier, and a little more full of possibility." },
  { title:"Things I Adore", text:"Your curious mind, your warm heart, your unexpected jokes, your whole lovely self." },
  { title:"Things I Wish for You", text:"A year full of deep belly laughs, kind surprises, peaceful mornings, and every dream finding its way home." },
  { title:"Always Special", text:"There is only one you. That will always be reason enough to celebrate." }
];

const memories = [
  { title:"A favourite little moment", text:"The kind of moment that seemed small while it was happening, then quietly became one I kept close.", image:"assets/images/memory-1.jpg", audio:"" },
  { title:"That time we couldn't stop laughing", text:"I still think about it and smile. Some days are made brighter just by remembering.", image:"assets/images/memory-2.jpg", audio:"" },
  { title:"A day I wish I could replay", text:"No grand occasion needed—just you, me, and the lovely feeling of being right where we were.", image:"assets/images/memory-3.jpg", audio:"" },
  { title:"One for the memory box", text:"Here's to all the moments we've collected, and the many more waiting just around the corner.", image:"assets/images/memory-4.jpg", audio:"" }
];

const recordings = [
  { title:"A Little Message For You", description:"Something I wanted you to hear...", file:"assets/audio/recording-1.mp3" },
  { title:"One More Thing", description:"Listen when you have a quiet moment...", file:"assets/audio/recording-2.mp3" },
  { title:"A Birthday Wish", description:"A little wish, in my own voice.", file:"assets/audio/recording-3.mp3" }
];

const photos = [
  { image:"assets/images/photo-1.png", title:"🌻 Smile", caption:"That smile has a way of making everything feel a little brighter." },
  { image:"assets/images/photo-2.png", title:"🌙 Moon", caption:"If the moon had a favorite person, I think it would be you." },
  { image:"assets/images/photo-3.jpeg", title:"😈 Devil", caption:"A little innocent, a little devil… and somehow completely irresistible." },
  { image:"assets/images/photo-4.jpeg", title:"🦋 Butterfly", caption:"Beautiful, free, and impossible not to notice." },
  { image:"assets/images/photo-5.png", title:"✨ Eyes", caption:"Your eyes have a way of saying what words never could." },
  { image:"assets/images/photo-6.png", title:"🌸 Beauty", caption:"Some beauty is seen. Yours is felt." },
  { image:"assets/images/photo-7.png", title:"☀️ Sunshine", caption:"You carry your own sunshine wherever you go." },
  { image:"assets/images/photo-8.jpeg", title:"💫 Glow", caption:"There is something about you that makes every picture glow." },
  { image:"assets/images/photo-9.png", title:"❤️ Heart", caption:"A beautiful heart is always more precious than a beautiful face." },
  { image:"assets/images/photo-10.png", title:"🌿 Grace", caption:"The way you carry yourself has a quiet kind of elegance." },
  { image:"assets/images/photo-11.jpeg", title:"😌 Peace", caption:"Somehow, your presence makes even ordinary moments feel peaceful." },
  { image:"assets/images/photo-12.jpeg", title:"💎 Precious", caption:"Rare things don't need to ask to be noticed." },
  { image:"assets/images/photo-13.jpeg", title:"🌹 Charm", caption:"You have the kind of charm that stays in someone's thoughts." },
  { image:"assets/images/photo-14.jpeg", title:"👑 Queen", caption:"Not because you need a crown, but because you already carry yourself like one." },
  { image:"assets/images/photo-15.jpeg", title:"🌅 Sunset", caption:"Like a sunset, you make even ordinary moments worth stopping for." },
  { image:"assets/images/photo-16.jpeg", title:"🌻 Warmth", caption:"You have a warmth that feels like coming home." },
  { image:"assets/images/photo-17.jpeg", title:"🥰 Cuteness", caption:"That little smile? Completely unfair." },
  { image:"assets/images/photo-18.jpeg", title:"🔥 Attitude", caption:"Sweet when you want to be, fierce when you need to be." },
  { image:"assets/images/photo-19.png", title:"🌌 Stardust", caption:"Somewhere between a dream and reality, there is you." },
  { image:"assets/images/photo-20.jpeg", title:"🪄 Magic", caption:"I don't know how you do it, but you make little moments magical." },
  { image:"assets/images/photo-21.jpeg", title:"🎀 Elegance", caption:"Effortlessly beautiful, without ever needing to try too hard." },
  { image:"assets/images/photo-22.jpeg", title:"🌊 Calm", caption:"There is something beautiful about the quiet side of you." },
  { image:"assets/images/photo-23.jpeg", title:"💙 Innocence", caption:"That innocent look hides a personality I could never stop discovering." },
  { image:"assets/images/photo-24.jpeg", title:"😏 Mischief", caption:"That look says “I'm innocent”… and somehow I don't believe you." },
  { image:"assets/images/photo-25.png", title:"🫶 Care", caption:"The little ways you care are the things people remember forever." },
  { image:"assets/images/photo-26.png", title:"🌻 You", caption:"After all the smiles, memories, butterflies and little moments… my favorite thing is simply you.", finalNote:"26 photos. 26 little pieces of you. And somehow, still not enough to capture everything that makes you special. 🦋🌻" }
];

const letters = [
  { title:"Open Me", label:"For right now", text:"I hope today gives you a hundred reasons to smile. And if it doesn't, remember you can always borrow one of mine. I am so glad you are here." },
  { title:"Read This When You Miss Me", label:"For a quiet moment", text:"Close your eyes for a second and imagine me cheering you on from wherever I am. I am always, always in your corner." },
  { title:"A Little Secret", label:"Just between us", text:"One of my favourite things about life is that somehow, in all the big wide world, I got to know you." },
  { title:"For Your Special Day", label:"A wish for the year", text:"May this new year bring you closer to the things that make you feel most like yourself. You deserve the whole bright sky." }
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const backgroundAudio = $("#backgroundAudio");
const voiceAudio = $("#voiceAudio");
let activeVoiceCard = null;
let voiceWasMusicPlaying = false;
let musicVolumeBeforeVoice = 0.34;
let currentPhoto = 0;
let toastTimer;

function safeText(value) { return String(value ?? ""); }
function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("visible");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("visible"), 2800);
}
function setBirthdayContent() {
  document.title = `Happy Birthday, ${birthdayConfig.name} | Your Birthday Garden`;
  $$('[data-name]').forEach(node => node.textContent = birthdayConfig.name);
  $("#birthdayMessage").textContent = birthdayConfig.birthdayMessage;
}
function flowerSvg() {
  return `<svg class="flower-svg" viewBox="0 0 120 150" aria-hidden="true"><path d="M60 65 C58 94 62 119 59 147" fill="none" stroke="#5d7549" stroke-width="5" stroke-linecap="round"/><path d="M59 111 C40 95 28 101 32 111 C39 124 51 120 59 111Z" fill="#7e925b"/><path d="M60 126 C78 108 91 113 86 123 C79 135 68 134 60 126Z" fill="#536d47"/><g class="flower-petals">${Array.from({length:12},(_,i)=>`<ellipse cx="60" cy="40" rx="8" ry="21" transform="rotate(${i*30} 60 55)" fill="${i%2?'#efc75e':'#e4af43'}"/>`).join("")}<circle cx="60" cy="55" r="16" fill="#503626"/><circle cx="60" cy="55" r="12" fill="#765036"/><g fill="#d1a44d">${Array.from({length:9},(_,i)=>`<circle cx="${52+(i*17%17)}" cy="${48+(i*13%15)}" r="1.3"/>`).join("")}</g></g></svg>`;
}
function renderFlowers() {
  const grid = $("#flowerGrid");
  grid.innerHTML = sunflowers.map((flower,i)=>`<button class="flower-item" type="button" data-flower="${i}" aria-label="Open ${safeText(flower.title)}"><span>${flowerSvg()}</span><strong>${safeText(flower.title)}</strong><small>Reason no. ${String(i+1).padStart(2,"0")}</small></button>`).join("");
  grid.addEventListener("click", event => {
    const button=event.target.closest("[data-flower]"); if(!button)return;
    button.classList.add("bloomed");
    const item=sunflowers[Number(button.dataset.flower)];
    openContent(`<div class="section-kicker"><span>✳</span><i></i> A little reminder</div><h2>${safeText(item.title)}</h2><p>${safeText(item.text)}</p>`);
  });
}
function makeWave() { return Array.from({length:27},(_,i)=>`<i style="--h:${5+((i*19+7)%12)}px;--n:${i}"></i>`).join(""); }
function renderRecordings() {
  const list=$("#recordingList");
  if(!recordings.length){list.innerHTML='<div class="player-empty">Your voice messages will find a home here. Add audio file paths to the <code>recordings</code> list in <code>js/script.js</code>.</div>';return;}
  list.innerHTML=recordings.map((item,i)=>`<article class="player-card" data-player="${i}"><button class="player-play" aria-label="Play ${safeText(item.title)}" data-play="${i}">▶</button><div class="player-meta"><strong>${safeText(item.title)}</strong><p>${safeText(item.description)}</p><div class="player-wave" aria-hidden="true">${makeWave()}</div><div class="player-time"><span data-current="${i}">0:00</span><input aria-label="Seek ${safeText(item.title)}" data-seek="${i}" type="range" min="0" max="100" value="0"><span data-duration="${i}">--:--</span></div></div><input class="player-volume" type="range" min="0" max="1" step="0.01" value="1" aria-label="Recording volume" title="Recording volume"></article>`).join("");
  list.addEventListener("click",event=>{const b=event.target.closest("[data-play]");if(b)toggleVoice(Number(b.dataset.play));});
  list.addEventListener("input",event=>{const s=event.target.closest("[data-seek]");if(s&&Number(s.dataset.seek)===Number(voiceAudio.dataset.index)&&voiceAudio.duration)voiceAudio.currentTime=(Number(s.value)/100)*voiceAudio.duration;});
  list.addEventListener("input",event=>{if(event.target.matches(".player-volume"))voiceAudio.volume=Number(event.target.value);});
}
function formatTime(seconds){if(!Number.isFinite(seconds))return "0:00";return `${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,"0")}`;}
function finishVoice(){
  if(activeVoiceCard)activeVoiceCard.classList.remove("active");
  activeVoiceCard=null;voiceAudio.dataset.index="";
  if(voiceWasMusicPlaying){backgroundAudio.volume=musicVolumeBeforeVoice;backgroundAudio.play().catch(()=>{});}
  voiceWasMusicPlaying=false;
}
function toggleVoice(index){
  const item=recordings[index];if(!item)return;
  if(Number(voiceAudio.dataset.index)===index&&!voiceAudio.paused){voiceAudio.pause();return;}
  if(activeVoiceCard)activeVoiceCard.classList.remove("active");
  voiceAudio.pause();voiceAudio.src=item.file;voiceAudio.dataset.index=String(index);
  activeVoiceCard=$(`[data-player="${index}"]`);activeVoiceCard?.classList.add("active");
  voiceWasMusicPlaying=!backgroundAudio.paused;musicVolumeBeforeVoice=Number($("#musicVolume").value||.34);
  if(voiceWasMusicPlaying){backgroundAudio.volume=Math.min(musicVolumeBeforeVoice,.08);}
  voiceAudio.play().then(()=>{}).catch(()=>{finishVoice();showToast(`Add your recording at ${item.file} to listen here.`);});
}
voiceAudio.addEventListener("play",()=>{const i=Number(voiceAudio.dataset.index);$$('[data-play]').forEach(b=>b.textContent=Number(b.dataset.play)===i?"Ⅱ":"▶");});
voiceAudio.addEventListener("pause",()=>{$$('[data-play]').forEach(b=>b.textContent="▶");});
voiceAudio.addEventListener("pause",()=>{if(voiceWasMusicPlaying){backgroundAudio.volume=musicVolumeBeforeVoice;voiceWasMusicPlaying=false;}});
voiceAudio.addEventListener("ended",finishVoice);
voiceAudio.addEventListener("timeupdate",()=>{const i=Number(voiceAudio.dataset.index);const current=$(`[data-current="${i}"]`),seek=$(`[data-seek="${i}"]`);if(current)current.textContent=formatTime(voiceAudio.currentTime);if(seek&&voiceAudio.duration)seek.value=String(voiceAudio.currentTime/voiceAudio.duration*100);});
voiceAudio.addEventListener("loadedmetadata",()=>{const i=Number(voiceAudio.dataset.index),duration=$(`[data-duration="${i}"]`);if(duration)duration.textContent=formatTime(voiceAudio.duration);});
function renderMemories(){
  const garden=$("#memoryGarden"), positions=[[14,20],[30,54],[68,17],[82,51],[43,18],[57,63],[22,71],[75,77]];
  memories.forEach((memory,i)=>{const pos=positions[i%positions.length],button=document.createElement("button");button.type="button";button.className="memory-butterfly";button.style.left=`${pos[0]}%`;button.style.top=`${pos[1]}%`;button.style.animationDelay=`${-i*.53}s`;button.setAttribute("aria-label",`Open memory: ${memory.title}`);button.innerHTML=`🦋<span>${safeText(memory.title)}</span>`;button.addEventListener("click",()=>showMemory(memory,button));garden.append(button);});
}
function showMemory(memory,button){
  const preview=$("#memoryPreview");preview.classList.add("memory-selected");
  const img=memory.image?`<img src="${safeText(memory.image)}" alt="A photo from ${safeText(memory.title)}" onerror="this.outerHTML='<div class=&quot;dialog-fallback&quot;>A memory, held close ✦</div>'">`:"<div class=\"dialog-fallback\">A memory, held close ✦</div>";
  preview.innerHTML=`<span class="preview-icon">✦</span><span>${safeText(memory.title)}</span>`;
  if(button){button.animate?.([{transform:"scale(1)"},{transform:"scale(1.5) translateY(-30px)"}],{duration:reducedMotion?1:500,easing:"ease-out"});}
  openContent(`<div class="section-kicker"><span>🦋</span><i></i> A memory to keep</div><h2>${safeText(memory.title)}</h2>${img}<p>${safeText(memory.text)}</p>${memory.audio?`<button class="primary-button dialog-audio" data-memory-audio="${safeText(memory.audio)}">▶ &nbsp; Listen to this memory</button>`:""}`);
  const audioButton=$("[data-memory-audio]");audioButton?.addEventListener("click",()=>{voiceAudio.src=memory.audio;voiceAudio.play().catch(()=>showToast(`Add the recording at ${memory.audio} to listen.`));});
}
function renderPhotos(){const stage=$("#photoStage");if(!photos.length){stage.innerHTML="<div class=\"player-empty\">Add your favourite photographs to the photos list in js/script.js.</div>";$("#galleryCount").textContent="Your memories will appear here";return;}stage.replaceChildren();photos.forEach((photo,i)=>{const card=document.createElement("figure");card.className="photo-card";card.dataset.photo=String(i);card.setAttribute("role","button");card.tabIndex=0;card.setAttribute("aria-label","View "+safeText(photo.title)+": "+safeText(photo.caption));const image=document.createElement("img");image.loading="lazy";image.src=safeText(photo.image);image.alt=safeText(photo.title)+" — "+safeText(photo.caption);image.onerror=()=>{const placeholder=document.createElement("div");placeholder.className="photo-placeholder";placeholder.innerHTML="your lovely<br>moment ✦";image.replaceWith(placeholder);};const caption=document.createElement("figcaption"),title=document.createElement("strong"),text=document.createElement("span");title.textContent=safeText(photo.title);text.textContent=safeText(photo.caption);caption.append(title,text);card.append(image,caption);const delta=(i-currentPhoto+photos.length)%photos.length,normalized=delta>photos.length/2?delta-photos.length:delta;card.style.zIndex=String(10-Math.abs(normalized));card.style.transform="translateX("+(normalized*68-50)+"%) translateY("+(Math.abs(normalized)*4)+"px) rotate("+(normalized*7)+"deg)";card.style.opacity=Math.abs(normalized)>2?"0":"1";stage.append(card);});$("#galleryCount").textContent="A handful of lovely moments";stage.onclick=event=>{const card=event.target.closest("[data-photo]");if(card){currentPhoto=Number(card.dataset.photo);renderPhotos();openPhoto(currentPhoto);}};stage.onkeydown=event=>{if((event.key==="Enter"||event.key===" ")&&event.target.matches("[data-photo]")){event.preventDefault();openPhoto(Number(event.target.dataset.photo));}};}function movePhoto(delta){if(!photos.length)return;currentPhoto=(currentPhoto+delta+photos.length)%photos.length;renderPhotos();}function openPhoto(index){currentPhoto=index;const photo=photos[index];if(!photo)return;const image=$("#lightboxImage");image.src=photo.image;image.alt=photo.title+": "+photo.caption;image.onerror=()=>{image.removeAttribute("src");image.alt="Photo unavailable";};$("#lightboxCaption").textContent=[photo.title,photo.caption,photo.finalNote].filter(Boolean).join("\n\n");$("#lightbox").showModal();}function renderLetters(){const list=$("#letterList");list.innerHTML=letters.map((letter,i)=>`<button class="envelope" type="button" data-letter="${i}" aria-label="Open letter: ${safeText(letter.title)}"><span class="envelope-art"><span class="envelope-flap"></span><span class="envelope-seal">♡</span></span><span class="envelope-label">${safeText(letter.title)}</span><small>${safeText(letter.label)}</small></button>`).join("");list.addEventListener("click",event=>{const button=event.target.closest("[data-letter]");if(!button)return;const letter=letters[Number(button.dataset.letter)];openContent(`<div class="section-kicker"><span>♡</span><i></i> A letter, just for you</div><h2>${safeText(letter.title)}</h2><p>${safeText(letter.text)}</p><p class="message-signoff">Always, <span>♡</span></p>`);});}
function openContent(html){$("#dialogContent").innerHTML=`<div class="dialog-inner">${html}</div>`;$("#contentDialog").showModal();}
function setupDialogs(){
  $$(".dialog-close").forEach(b=>b.addEventListener("click",()=>b.closest("dialog").close()));
  $("#contentDialog").addEventListener("click",event=>{if(event.target===$("#contentDialog"))$("#contentDialog").close();});
  $("#lightbox").addEventListener("click",event=>{if(event.target===$("#lightbox"))$("#lightbox").close();});
  $(".lightbox-close").addEventListener("click",()=>$("#lightbox").close());
  $(".lightbox-prev").addEventListener("click",()=>{movePhoto(-1);openPhoto(currentPhoto);});$(".lightbox-next").addEventListener("click",()=>{movePhoto(1);openPhoto(currentPhoto);});
  document.addEventListener("keydown",event=>{if(!$("#lightbox").open)return;if(event.key==="ArrowLeft"){movePhoto(-1);openPhoto(currentPhoto);}if(event.key==="ArrowRight"){movePhoto(1);openPhoto(currentPhoto);}});
  let touchStart=0;$("#lightbox").addEventListener("touchstart",e=>{touchStart=e.changedTouches[0].clientX;},{passive:true});$("#lightbox").addEventListener("touchend",e=>{const dx=e.changedTouches[0].clientX-touchStart;if(Math.abs(dx)>45){movePhoto(dx<0?1:-1);openPhoto(currentPhoto);}},{passive:true});
}
function setupMusic(){
  backgroundAudio.src=birthdayConfig.backgroundMusic;const panel=$("#musicPanel"),toggle=$("#musicToggle"),play=$("#musicPlay"),volume=$("#musicVolume");backgroundAudio.volume=Number(volume.value);
  function update(){const playing=!backgroundAudio.paused;toggle.classList.toggle("playing",playing);toggle.setAttribute("aria-label",playing?"Pause background music":"Play background music");play.textContent=playing?"Ⅱ":"▶";}
  async function startMusic(){try{await backgroundAudio.play();}catch{showToast(`Add background music at ${birthdayConfig.backgroundMusic} to hear it.`);}update();}
  toggle.addEventListener("click",()=>{panel.hidden=false;if(backgroundAudio.paused)startMusic();else{backgroundAudio.pause();update();}});
  play.addEventListener("click",()=>backgroundAudio.paused?startMusic():(backgroundAudio.pause(),update()));
  $("#musicMute").addEventListener("click",()=>{backgroundAudio.muted=!backgroundAudio.muted;$("#musicMute").textContent=backgroundAudio.muted?"×":"◖";});
  volume.addEventListener("input",()=>{backgroundAudio.volume=Number(volume.value);if(Number(volume.value)>0)backgroundAudio.muted=false;});
  $("#musicClose").addEventListener("click",()=>panel.hidden=true);
  backgroundAudio.addEventListener("play",update);backgroundAudio.addEventListener("pause",update);
  backgroundAudio.addEventListener("timeupdate",()=>{const progress=$("#musicProgress");if(progress&&backgroundAudio.duration)progress.style.width=`${backgroundAudio.currentTime/backgroundAudio.duration*100}%`;});
  $("#enterGarden").addEventListener("click",()=>{document.body.classList.add("entered");$("#message").scrollIntoView({behavior:reducedMotion?"auto":"smooth"});panel.hidden=false;startMusic();});
}
function setupCake(){const cake=$("#cake"),button=$("#blowCandles"),reveal=$("#cakeReveal");let done=false;function blow(){if(done)return;done=true;cake.classList.add("blown");$("#cakeHint").textContent="May this year be as wonderful as you are.";reveal.classList.add("shown");button.querySelector("span").textContent="Your wish is on its way";button.disabled=true;for(let i=0;i<10;i++){const petal=document.createElement("span");petal.textContent=i%2?"✦":"·";petal.style.cssText=`position:fixed;left:${45+Math.random()*10}%;top:${55+Math.random()*10}%;z-index:40;color:#e9b74e;font-size:${16+Math.random()*18}px;pointer-events:none;animation:riseIn 1.2s ease-out reverse both`;document.body.append(petal);setTimeout(()=>petal.remove(),1400);}}
  button.addEventListener("click",blow);cake.addEventListener("click",blow);cake.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();blow();}});
}
function setupPage(){
  const topbar=$("#topbar");function onScroll(){topbar.classList.toggle("scrolled",scrollY>70);const max=document.documentElement.scrollHeight-innerHeight;$("#pageProgress").style.width=`${max>0?scrollY/max*100:0}%`;}
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();$("#galleryPrev").addEventListener("click",()=>movePhoto(-1));$("#galleryNext").addEventListener("click",()=>movePhoto(1));
  $("#replayExperience").addEventListener("click",()=>{if(!reducedMotion){$$('.finale-line').forEach(el=>{el.style.animation="none";void el.offsetHeight;el.style.animation="";});}$("#opening").scrollIntoView({behavior:reducedMotion?"auto":"smooth"});});
}
function init(){setBirthdayContent();renderFlowers();renderRecordings();renderMemories();renderPhotos();renderLetters();setupDialogs();setupMusic();setupCake();setupPage();}
init();
