/* ENS101 midterm: theory lessons (T1-T6). Loaded by ders.html; read as window.LESSONS_TEORI.
   Sources: Stephan et al., Thinking Like an Engineer (s. = book page), F24 midterm, F25 midterm answer key. */
window.LESSONS_TEORI = [
  {
    id: "t1", no: "T1", part: "teori",
    title: "Ethics", sub: "Ethical decision making, NSPE canons",
    minutes: 30, source: "Kitap Ch 2, s. 36–45 + F25 anahtarı",
    blocks: [
      { type: "teach", h: "Etik neden var?", html: `
<p>Her gün küçük ethical (etik) kararlar veririz: hız sınırını aşmak, kasiyer fazla para üstü verince söylemek, alışveriş arabasını yerine götürmek. Bunlar küçük şeyler. Ama bir mühendisin kararı <b>binlerce insanın hayatını</b> etkileyebilir. Kitap bu yüzden günlük kararlarla pratik yapmayı önerir (s. 36).</p>
<p>Kitaba göre insanlar ethical karar vermeye <b>iki nedenle</b> çalışır (s. 36):</p>
<ol>
<li><b>altruism</b> (özgecilik): dünyayı herkes için daha iyi bir yer yapmak istemek.</li>
<li>Kötü sonuçlardan kaçınmak: para cezası, hapis, işini kaybetmek.</li>
</ol>
<p>İdeal bir toplumda ikinci neden olmazdı. Etik dışı davranış yaygın olduğu için toplumlar kurallar, kodlar ve yasalar yazmıştır (s. 37).</p>
<div class="box"><b>Akılda tut:</b> Kitap “en etik kararı garanti eden bir algoritma yok” der. Ama düşünmeye yardım eden <b>4 adımlı bir yöntem</b> verir (s. 37). Sınav bu yöntemi sorar.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Ethical decision making means choosing the right action when a choice affects other people. People try to make ethical decisions for two reasons. The first is altruism: they want to make the world a better place for everyone. The second is to avoid bad results, such as fines, jail or losing a job. Engineers need ethics because their decisions can affect the lives of thousands of people.</p></div>` },

      { type: "teach", h: "4 adım: büyük resim", html: `
<p>Ethical decision making (etik karar verme) 4 adımdır (s. 38–41). Önce tabloyu ezberle, sonra her adımı tek tek açacağız.</p>
<table>
<tr><th>Adım</th><th>Ne yaparsın</th><th>Anahtar kelime</th></tr>
<tr><td>1</td><td><b>Issues</b> (sorunlar, <i>What</i>) ve <b>stakeholders</b> (paydaşlar, <i>Who</i>) belirle</td><td>What + Who</td></tr>
<tr><td>2</td><td>Alternatifleri <b>üç perspective</b>'ten değerlendir: <b>consequences</b>, <b>intent</b>, <b>character</b></td><td>3 bakış</td></tr>
<tr><td>3</td><td><b>Correlate perspectives</b>: üç sonucu karşılaştır</td><td>uyuşuyor mu?</td></tr>
<tr><td>4</td><td><b>Act</b>: kararı uygula</td><td>cesaret</td></tr>
</table>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>The ethical decision-making procedure has four steps. Step 1: determine the issues (What) and the stakeholders (Who). Step 2: evaluate the alternatives from three perspectives: consequences, intent and character. Step 3: correlate the perspectives, that is, compare the three results. Step 4: act on the decision.</p></div>` },

      { type: "teach", h: "Adım 1: Issues ve stakeholders", html: `
<p><b>Issues (What)</b>: sorun ne? Kişisel özgürlük, ulusal güvenlik, yaşam kalitesi, ekonomi, adalet, eşitlik gibi her şey olabilir (s. 38).</p>
<p><b>Stakeholders (Who)</b>: karardan kim etkilenebilir? Dikkat: stakeholder <b>insan olmak zorunda değil</b>. Bir kişi, bir grup, bir kurum ya da bir <b>doğal sistem</b> olabilir (s. 38).</p>
<p>Bu adımda stakeholder'ların <b>nasıl</b> etkileneceğini henüz düşünmezsin. Sadece listeyi çıkarırsın (s. 38).</p>
<p><b>Kitaptaki örnek (Example 2-1, s. 38):</b> Alaska'daki bir yaban hayatı koruma alanında (ANWR) petrol arama yapılsın mı?</p>
<table>
<tr><th>Issues (What)</th><th>Stakeholders (Who)</th></tr>
<tr><td>Oil independence<br>The price of gasoline<br>Possible impacts on the ecosystem</td><td>Oil companies<br>The general population of the U.S.<br>Other countries we buy oil from<br>The flora and fauna in ANWR<br>The native people in Alaska</td></tr>
</table>
<div class="box">“Flora and fauna” (bitkiler ve hayvanlar) da bir stakeholder'dır. Sınavda “stakeholder sadece insandır” şıkkı görürsen yanlıştır.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>In Step 1, I ask two questions: What are the issues, and Who might be affected? The issues are the problems or values involved in the decision. The stakeholders are the individuals, groups, institutions or natural systems that might be affected. A stakeholder does not have to be a person.</p><p>For example, if a company wants to drill for oil in a wildlife refuge, the issues are oil independence and the possible impact on the ecosystem. The stakeholders are the oil companies, the general population and the flora and fauna in the refuge.</p></div>` },

      { type: "check", id: "t1-c1", title: "Issues ve stakeholders", pool: [
        { q: "Ethical decision making'in 1. adımında, bir karardan etkilenebilecek kişi, grup, kurum ya da doğal sistemlere ne ad verilir?",
          en: "In Step 1 of ethical decision making, the individuals, groups, institutions or natural systems that might be affected by a decision are called _________.",
          fields: [{ kind: "text", accept: ["stakeholders", "stakeholder", "the stakeholders"] }],
          why: "Who sorusunun cevabı stakeholders'tır; insan olmak zorunda değildir (s. 38).",
          hint: "What = issues, Who = ?" },
        { q: "Bir yaban hayatı koruma alanında petrol arama kararı düşün. Aşağıdakilerden hangisi bir issue değil, bir stakeholder'dır?",
          en: "Consider the decision to drill for oil in a wildlife refuge. Which of the following is a stakeholder rather than an issue?",
          fields: [{ kind: "mc", opts: ["The price of gasoline", "Oil independence", "The flora and fauna in the refuge", "Possible impacts on the ecosystem"], ans: 2 }],
          why: "Fiyat, bağımsızlık ve ekosisteme etki issue'dur (What). Flora and fauna etkilenen taraftır, yani stakeholder'dır (Example 2-1, s. 38)." },
        { q: "Stakeholder'lar için hangisi doğrudur?",
          en: "Which statement about stakeholders is correct?",
          fields: [{ kind: "mc", opts: ["Yalnızca karardan para kazanan veya kaybeden kişilerdir.", "İnsan olmak zorunda değildir; bir kurum ya da doğal sistem de stakeholder olabilir.", "Sadece kararı veren mühendis ve işvereni sayılır.", "1. adımda her stakeholder'ın nasıl etkileneceği ayrıntılı olarak hesaplanır."], ans: 1,
            enOpts: ["They are only the people who gain or lose money from the decision.", "They do not have to be people; an institution or a natural system can also be a stakeholder.", "Only the deciding engineer and the employer count.", "In Step 1, you calculate in detail how each stakeholder will be affected."] }],
          why: "Stakeholder bir kişi, grup, kurum ya da doğal sistem olabilir. 1. adımda nasıl etkileneceklerine henüz bakılmaz; o iş 2. adımdaki consequences'ındır (s. 38)." },
        { q: "1. adımda “sorun ne?” (What) sorusunun cevabı olan maddelere ne denir? (Who sorusunun cevabı stakeholders'tır.)",
          en: "In Step 1, the answers to the question “What?” are called the _________ (the answers to “Who?” are the stakeholders).",
          fields: [{ kind: "text", accept: ["issues", "issue", "the issues"] }],
          why: "Step 1: determine What the issues are and Who might be affected (s. 38)." },
        { q: "Ethical decision making'in 1. adımında hangi iki soru sorulur?",
          en: "Which two questions are asked in Step 1 of ethical decision making?",
          fields: [{ kind: "mc", opts: ["Why and When", "How and How much", "What and Who", "Where and When"], ans: 2 }],
          why: "What = issues, Who = stakeholders (s. 38)." }
      ]},

      { type: "teach", h: "Adım 2: Üç perspective", html: `
<p>Her alternatifi üç farklı gözlükle incele (s. 38–40):</p>
<table>
<tr><th>Perspective</th><th>Sorduğu soru</th><th>Dikkat</th></tr>
<tr><td><b>Consequences</b> (sonuçlar)</td><td>Her alternatif her stakeholder'ı nasıl etkiler? Her etkiye bir önem (<b>weight</b>) ver.</td><td>Milyonları etkileyen zarar, bir düzine kişiyi etkileyen aynı zarardan neredeyse her zaman daha önemlidir.</td></tr>
<tr><td><b>Intent</b> (niyet)</td><td>Bu işi yapanın niyeti ne? Buna <b>“rights” perspective</b> da denir.</td><td><b>Sonuca hiç bakmaz</b>, sadece niyete bakar. İyi niyet bazen kötü sonuç verir; intent bu tuzaktan kaçar.</td></tr>
<tr><td><b>Character</b> (karakter)</td><td>İyi karakterli biri bunu yapar mı? Bu eylem karakterimi geliştirir mi, bozar mı?</td><td>Saygı duyduğun, karakteri sağlam birinin ne yapacağını da sorabilirsin.</td></tr>
</table>
<p><b>Intent için Kant'ın üç sorusu</b> (Categorical Imperative'den, s. 39):</p>
<ol>
<li>Bu eylemi <b>herkes</b> yapmalı mı?</li>
<li>Bu davranış <b>yasa</b> olarak yazılmalı mı?</li>
<li>Bu eylemin <b>mağduru</b> ben olsam ister miydim?</li>
</ol>
<p><b>Örnek (Example 2-3, s. 40):</b> İnternetten yasa dışı müzik indirmek. Intent soruları: Herkes istediği müziği bedavaya almalı mı? Yasa bunu serbest bırakmalı mı? Geçinmeye çalışan bir müzisyen olsan gelirinin kesilmesini ister miydin?</p>
<div class="box"><b>Hızlı ayırt etme:</b> Soruda “etkilenir, zarar, kaç kişi” varsa <b>consequences</b>. “Herkes yapsa, yasa olsa, mağdur ben olsam” varsa <b>intent</b>. “İyi bir insan yapar mı, beni nasıl biri yapar” varsa <b>character</b>.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>In Step 2, I evaluate each alternative from three perspectives. The consequences perspective asks how each alternative affects each stakeholder, and I give a weight to each effect. The intent perspective looks only at the intention behind the action, not at the result; it is also called the rights perspective. The character perspective asks if a person of good character would do this, and if the action would improve or damage my character.</p><p>For intent, I can ask: Should everyone do this? Should it be a law? Would I like to be the victim?</p></div>` },

      { type: "check", id: "t1-c2", title: "Üç perspective", pool: [
        { q: "“Bunu herkes yapsa olur mu? Bu davranış yasa olsa olur mu? Mağdur ben olsam ister miydim?” soruları hangi perspective'e aittir?",
          en: "The questions “Should everyone do this? Should this behavior be codified in law? Would I like to be the victim?” belong to which perspective?",
          fields: [{ kind: "mc", opts: ["Consequences", "Intent", "Character", "Correlation"], ans: 1 }],
          why: "Bunlar Kant'ın Categorical Imperative'inden türetilen intent soruları (s. 39)." },
        { q: "“İyi karakterli biri bunu yapar mıydı? Bu eylem benim karakterimi geliştirir mi, bozar mı?” soruları hangi perspective'e aittir?",
          en: "The questions “Would a person of good character do this? Does this action enhance or degrade my character?” belong to which perspective?",
          fields: [{ kind: "mc", opts: ["Intent", "Consequences", "Stakeholders", "Character"], ans: 3 }],
          why: "Character perspective'i (s. 40)." },
        { q: "Hangi perspective her alternatifin her stakeholder'ı nasıl etkileyeceğini sorar ve her etkiye bir weight verir?",
          en: "Which perspective asks how each alternative will affect each stakeholder and assigns a weight to each effect?",
          fields: [{ kind: "mc", opts: ["Intent", "Character", "Consequences", "Issues"], ans: 2 }],
          why: "Consequences; milyonları etkileyen bir etki genellikle daha ağır basar (s. 38)." },
        { q: "Sonuca hiç bakmayan, yalnızca niyetleri dikkate alan ve “rights” perspective olarak da anılan perspective hangisidir?",
          en: "Which perspective does not consider the outcome at all, only the intentions, and is sometimes called the “rights” perspective?",
          fields: [{ kind: "text", accept: ["intent", "the intent perspective", "intent perspective", "intention", "intentions"] }],
          why: "Intent perspective (s. 39)." },
        { q: "Intent perspective'inde aşağıdaki sorulardan hangisi sorulur?",
          en: "Which of the following questions belongs to the intent perspective?",
          fields: [{ kind: "mc", opts: ["Would a person of good character do this?", "How many people will be harmed, and how badly?", "Is this something I believe everyone should do?", "Who might be affected by this decision?"], ans: 2 }],
          why: "“Herkes yapmalı mı?” Kant'ın sorusudur, yani intent (s. 39). Diğerleri character, consequences ve Step 1 (Who) soruları." }
      ]},

      { type: "teach", h: "Adım 3 ve 4: Correlate ve Act", html: `
<p><b>Adım 3: Correlate perspectives</b> (s. 40)</p>
<ul>
<li>Üç perspective aynı sonuca varıyorsa: o eylemin en iyi seçim olduğuna <b>güvenin yüksektir</b>.</li>
<li>Uyuşmuyorsa: soruyu yeniden düşün. Daha önce konuşmadığın insanlarla konuş. Bir stakeholder'ı ya da sonucu atladın mı? Weight'leri doğru verdin mi?</li>
<li>Her şeye rağmen uyuşmuyorsa: <b>üçte ikiye uy</b> (“go with two out of three”).</li>
</ul>
<p><b>Adım 4: Act</b> (s. 41)</p>
<ul>
<li>Genellikle <b>en zor adımdır</b>, çünkü ethical davranış <b>cesaret</b> ister.</li>
<li>Kitabın örnekleri: işini kaybetmeyi göze alan <b>whistle-blower</b>; köleleri özgürlüğe götürmek için hayatını defalarca riske atan Harriet Tubman; seçimi kaybedeceğini bile bile doğruyu savunan politikacı.</li>
<li>Kendine sor: “Doğru olduğunu bildiğim şeyi yapacak cesaretim var mı?”</li>
</ul>
<div class="box">Kitaptaki e-sigara örneğinde (Example 2-5, s. 41–42) yazarlar 3. adımda karar vermeyi reddeder: farklı insanlar vicdanen farklı sonuçlara varabilir. Yani sınavda “tek doğru etik cevap” beklenmez; <b>yöntemi doğru uygulaman</b> beklenir.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>In Step 3, I correlate the three perspectives. If all three agree, I have a high level of confidence that this is the best choice. If they do not agree, I rethink the problem and talk to more people. If they still disagree, I go with two out of three.</p><p>Step 4 is to act. It is often the hardest step, because ethical action often requires courage.</p></div>` },

      { type: "check", id: "t1-c3", title: "Correlate ve Act", pool: [
        { q: "Üç perspective, tüm çabana rağmen aynı sonuca varmıyor. Kitap ne yapmanı önerir?",
          en: "The three perspectives still do not agree, no matter how hard you try. What does the book recommend?",
          fields: [{ kind: "mc", opts: ["Always follow the consequences perspective", "Ask your employer to decide", "Do nothing until all three agree", "Go with two out of three"], ans: 3 }],
          why: "Convergence sağlanamazsa “go with two out of three” (s. 40)." },
        { q: "Kitaba göre dört adımın genellikle en zoru hangisidir?",
          en: "According to the book, which of the four steps is often the hardest?",
          fields: [{ kind: "mc", opts: ["Step 1, because all the stakeholders are hard to list", "Step 2, because there are three different perspectives", "Step 3, because the three perspectives may disagree", "Step 4 (act), because ethical action often requires courage"], ans: 3 }],
          why: "Act: “often the hardest step of all to take, since ethical action often requires courage” (s. 41)." },
        { q: "Ethical decision making'de “correlate perspectives” kaçıncı adımdır?",
          en: "Which step number is “correlate perspectives” in the four-step ethical decision-making procedure?",
          fields: [{ kind: "num", val: 3 }],
          why: "1 issues and stakeholders, 2 three perspectives, 3 correlate, 4 act (s. 38–41)." },
        { q: "Üç perspective de aynı sonuca varıyorsa ne söylenebilir?",
          en: "What can you conclude if all three perspectives lead to the same conclusion?",
          fields: [{ kind: "mc", opts: ["Analiz yanlıştır, çünkü perspective'ler hiçbir zaman uyuşmaz.", "Yine de 4. adım atlanmalı ve karar ertelenmelidir.", "Bu eylemin ethical açıdan en iyi seçim olduğuna güvenin yüksektir.", "Kararı mutlaka bir avukata danışmak gerekir."], ans: 2,
            enOpts: ["The analysis is wrong, because the perspectives never agree.", "Step 4 should still be skipped and the decision postponed.", "You have a high level of confidence that this action is the best ethical choice.", "You must ask a lawyer to make the decision."] }],
          why: "Üçü uyuşursa “high level of confidence” (s. 40)." },
        { q: "Ethical decision making'in dört adımının doğru sırası hangisidir?",
          en: "What is the correct order of the four steps of ethical decision making?",
          fields: [{ kind: "mc", opts: ["Correlate → Issues and stakeholders → Act → Three perspectives", "Three perspectives → Issues and stakeholders → Act → Correlate", "Issues and stakeholders → Three perspectives → Correlate → Act", "Act → Correlate → Three perspectives → Issues and stakeholders"], ans: 2 }],
          why: "Önce What/Who, sonra consequences/intent/character, sonra correlate, en son act (s. 38–41)." }
      ]},

      { type: "teach", h: "Plagiarism; legal ile ethical aynı şey değil", html: `
<p><b>Plagiarism</b> (intihal): başkasının işini kendi işin gibi sunmak. Çoğunlukla yazı için kullanılır ama başka medyaya da uzanır (s. 42).</p>
<ul>
<li>Kitaba göre plagiarism <b>kendi başına yasa dışı değildir</b>, ama geniş ölçüde <b>unethical</b> kabul edilir.</li>
<li>İçinde <b>copyright infringement</b> (telif hakkı ihlali) varsa yasa dışı olur.</li>
<li>Öğrenci için plagiarism neredeyse her yerde <b>academic dishonesty</b> sayılır.</li>
<li>Tek bir benzer cümle büyük olasılıkla tesadüftür. Belirleyici olan <b>intent</b>'tir: bilerek mi kopyaladın? (s. 43)</li>
</ul>
<p><b>Legal ≠ ethical.</b> Bir şeyin yasal olması onu etik yapmaz; etik bir şey de bazen yasa dışı olabilir. F24 sınavı bunu doğrudan sordu.</p>
<table>
<tr><th>Durum</th><th>Örnek</th></tr>
<tr><td><b>Legal but not ethical</b></td><td>Plagiarism (copyright ihlali yoksa; s. 42). Arkadaşlarınla birlikte fakir bir öğrenciyle arkasından alay etmek (Example 2-4, s. 40). Yasal gereklilikleri karşılayan ama nadiren güvenlik hatası veren bir malzemeyi kullanmak (F25 Q2).</td></tr>
<tr><td><b>Ethical but not legal</b></td><td>Harriet Tubman'ın köleleri özgürlüğe kaçırması: o dönemde yasa dışıydı (s. 41). Yaralı bir çocuğu hastaneye yetiştirmek için hız sınırını aşmak (kitabın ICA 2-1 listesindeki durum, s. 46).</td></tr>
</table>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Plagiarism means presenting someone else's work as my own. It is not illegal by itself, but it is widely considered unethical. It becomes illegal if it includes copyright infringement. For a student, it is academic dishonesty.</p><p>Legal and ethical are not the same. An example of something legal but not ethical is plagiarism without copyright infringement. An example of something ethical but not legal is Harriet Tubman helping slaves to escape when it was against the law.</p></div>` },

      { type: "check", id: "t1-c4", title: "Plagiarism, legal ve ethical", pool: [
        { q: "Kitaba göre plagiarism için hangisi doğrudur?",
          en: "According to the book, which statement about plagiarism is correct?",
          fields: [{ kind: "mc", opts: ["Kendi başına yasa dışı değildir ama unethical kabul edilir; copyright infringement varsa yasa dışı olur.", "Her durumda yasa dışıdır; kim yaparsa yapsın para ya da hapis cezası gerektirir.", "Sadece yazılı metinler için geçerlidir; resim, müzik ya da kod gibi başka medyada olmaz.", "Niyet hiç önemli değildir; başka bir kaynağa benzeyen tek bir cümle bile kesin plagiarism'dir."], ans: 0,
            enOpts: ["It is not illegal per se but is widely considered unethical; it becomes illegal if it involves copyright infringement.", "It is always illegal and, whoever does it, requires a fine or a prison sentence.", "It applies only to written text, never to other media such as pictures, music or code.", "Intent does not matter at all; even one sentence that resembles another source is definitely plagiarism."] }],
          why: "Plagiarism per se is not illegal, but unethical; copyright infringement varsa yasa ihlalidir (s. 42)." },
        { q: "Başkasının işini kendi işin gibi sunmaya ne denir?",
          en: "Claiming someone else's work as your own is called _________.",
          fields: [{ kind: "text", accept: ["plagiarism", "plagiarizing", "plagiarising"] }],
          why: "Plagiarism (s. 42)." },
        { q: "Aşağıdakilerden hangisi legal ama unethical bir eyleme örnektir?",
          en: "Which of the following is an example of an action that is legal but not ethical?",
          fields: [{ kind: "mc", opts: ["Ağır yaralı bir çocuğu hastaneye yetiştirmek için hız sınırını aşmak", "Copyright ihlali olmadan bir arkadaşın ödevini kendi adınla teslim etmek", "Bir köprünün güvenli olmadığını yetkililere bildirmek", "Bir projede yalnızca uzmanlık alanındaki işleri kabul etmek"], ans: 1,
            enOpts: ["Speeding to rush a badly injured child to the hospital", "Submitting a friend's homework under your own name, without copyright infringement", "Reporting to the authorities that a bridge is unsafe", "Accepting only the work within your area of competence on a project"] }],
          why: "Copyright ihlali yoksa plagiarism yasa dışı değildir ama unethical'dır (s. 42). Hız sınırını aşmak tersi: ethical olabilir ama legal değil." },
        { q: "Aşağıdakilerden hangisi ethical ama legal olmayan bir eyleme örnektir?",
          en: "Which of the following is an example of an action that is ethical but not legal?",
          fields: [{ kind: "mc", opts: ["Bir sınavda kopya çekmek", "Kasiyer fazla para üstü verdiğinde sesini çıkarmamak", "Arkadaşlarla birlikte bir öğrenciyle arkasından alay etmek", "Harriet Tubman'ın köleleri özgürlüğe kaçırması"], ans: 3,
            enOpts: ["Cheating on an exam", "Keeping quiet when a cashier gives you too much change", "Mocking a student behind her back together with friends", "Harriet Tubman leading slaves to freedom"] }],
          why: "Kitap Tubman'ı cesaretle doğruyu yapmaya örnek verir (s. 41); eylem o dönemde yasa dışıydı. Diğerleri unethical." },
        { q: "Bir parça tüm legal requirements'ı karşılıyor ama nadiren de olsa kullanıcıyı yaralayabilecek şekilde kırılıyor. En ilgili ethical principle hangisidir?",
          en: "A component meets every legal requirement but occasionally fails in a way that can injure users. Which ethical principle is most relevant?",
          fields: [{ kind: "mc", opts: ["Loyalty to the employer", "Protecting trade secrets", "Public safety, health, and welfare", "Meeting the delivery schedule"], ans: 2 }],
          why: "Yasal olması etik olduğu anlamına gelmez; Canon 1 public safety, health, and welfare'ı her şeyin üstünde tutar (s. 44; F25 Q2)." }
      ]},

      { type: "teach", h: "NSPE: Engineer's Creed ve Fundamental Canons", html: `
<p>Mühendislerin, halkın çoğunun anlamadığı özel bir bilgisi vardır. Bu bilgi büyük iyilik de, büyük zarar da yapabilir. Bu yüzden meslek kuruluşları kendi davranış kodlarını yazmıştır. En bilineni <b>NSPE</b>'nin (National Society of Professional Engineers) <b>Code of Ethics for Engineers</b>'ıdır (s. 43).</p>
<p><b>Engineer's Creed</b> (mühendis yemini, s. 43). Mühendis söz verir:</p>
<ul>
<li>To give the utmost of performance</li>
<li>To participate in none but honest enterprise</li>
<li>To live and work according to the laws of man and the highest standards of professional conduct</li>
<li>To place <b>service before profit</b>, the honor and standing of the profession before personal advantage, and the <b>public welfare above all other considerations</b></li>
</ul>
<p><b>Fundamental Canons</b> (temel kurallar, s. 44). Engineers, in the fulfillment of their professional duties, shall:</p>
<ol>
<li><b>Hold paramount the safety, health, and welfare of the public</b></li>
<li>Perform services only in areas of their <b>competence</b></li>
<li>Issue public statements only in an <b>objective and truthful</b> manner</li>
<li>Act for each employer or client as <b>faithful agents or trustees</b></li>
<li>Avoid <b>deceptive acts</b></li>
<li>Conduct themselves honorably, responsibly, ethically, and lawfully so as to enhance the honor, reputation, and usefulness of the profession</li>
</ol>
<div class="box"><b>Hafıza ipucu:</b> 1 halk, 2 uzmanlık, 3 dürüst açıklama, 4 işverene sadakat, 5 aldatma yok, 6 onurlu davranış. Halkın güvenliği <b>1. sırada</b> ve işverene sadakatin (4) <b>önünde</b>. Mühendis halkın güvenliğini her şeyin üstünde tutmalıdır (hold paramount).</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>NSPE is the National Society of Professional Engineers. Its Code of Ethics for Engineers includes the Engineer's Creed and the Fundamental Canons. In the Creed, the engineer promises to place service before profit and the public welfare above all other considerations.</p><p>Canon 1 says engineers shall hold paramount the safety, health, and welfare of the public. The other canons say: perform services only in areas of their competence; issue public statements only in an objective and truthful manner; act for each employer or client as faithful agents or trustees; avoid deceptive acts; and conduct themselves honorably, responsibly, ethically, and lawfully so as to enhance the honor, reputation, and usefulness of the profession.</p><p>The purpose of a code of ethics is to protect public safety and to guide professional conduct.</p></div>` },

      { type: "check", id: "t1-c5", title: "NSPE canons ve creed", pool: [
        { q: "Fundamental Canon 1'deki boşluğu doldur: Engineers shall hold paramount the safety, health, and _________ of the public.",
          en: "Complete Fundamental Canon 1: Engineers shall hold paramount the safety, health, and _________ of the public.",
          fields: [{ kind: "text", accept: ["welfare"] }],
          why: "Hold paramount the safety, health, and welfare of the public (s. 44)." },
        { q: "Aşağıdakilerden hangisi NSPE Fundamental Canons'tan biri DEĞİLDİR?",
          en: "Which of the following is NOT one of the NSPE Fundamental Canons?",
          fields: [{ kind: "mc", opts: ["Perform services only in areas of their competence", "Avoid deceptive acts", "Maximize the profit of their employer", "Issue public statements only in an objective and truthful manner"], ans: 2 }],
          why: "Kâr bir canon değildir; Creed tam tersine “service before profit” der (s. 43–44)." },
        { q: "Bir yazılım mühendisi, hiç bilmediği bir alanda köprü taşıyıcı hesabı yapmayı “nasılsa öğrenirim” diyerek kabul ediyor. En doğrudan hangi canon'u ihlal ediyor?",
          en: "A software engineer agrees to do the load calculations for a bridge, a field he has never worked in, saying “I will learn it on the way.” Which canon does he violate most directly?",
          fields: [{ kind: "mc", opts: ["Act for each employer or client as faithful agents or trustees", "Perform services only in areas of their competence", "Avoid deceptive acts", "Issue public statements only in an objective and truthful manner"], ans: 1 }],
          why: "Canon 2: perform services only in areas of their competence (s. 44)." },
        { q: "Engineer's Creed'e göre mühendis neyi “all other considerations”ın üstüne koyar?",
          en: "According to the Engineer's Creed, what does the engineer place above all other considerations?",
          fields: [{ kind: "mc", opts: ["Personal advantage", "The employer's profit", "The honor of the client", "The public welfare"], ans: 3 }],
          why: "“...and the public welfare above all other considerations” (s. 43)." },
        { q: "Bir engineering code of ethics'in asıl amacı nedir?",
          en: "What is the main purpose of a professional code of ethics for engineers?",
          fields: [{ kind: "mc", opts: ["To protect public safety and guide professional conduct", "To set minimum salaries for engineers in every country", "To speed up the approval of new designs by the government", "To reduce the cost of products for the customers"], ans: 0 }],
          why: "F25 Q1 cevabı B: protect public safety and guide professional conduct. Kitapta Canon 1 ile örtüşür (s. 44)." },
        { q: "Engineer's Creed'deki boşluğu doldur: To place service before _________.",
          en: "Complete the Engineer's Creed: “To place service before _________.”",
          fields: [{ kind: "text", accept: ["profit", "profits"] }],
          why: "Service before profit (s. 43)." }
      ]},

      { type: "teach", h: "Whistle-blowing ve social responsibility", html: `
<p><b>Whistle-blowing</b> (ihbarcılık): bir güvenlik sorununu <b>önce kurum içinde</b>, gerekirse <b>kurum dışında</b> bildirmek. Bu tanım F25 cevap anahtarından (Q3); kitap terimi tanımlamaz. Kitap whistle-blower'ı yalnızca <b>Step 4 (act)</b> örneği olarak anar: işini kaybetmeyi göze alır, yani cesaret ister (s. 41).</p>
<p><b>Social responsibility</b> (sosyal sorumluluk): bireyin <b>toplumun geneline fayda sağlayacak şekilde davranma yükümlülüğü</b> (s. 44, yan not).</p>
<ul>
<li>Mühendisler toplumun üstünde değildir; aynı sorunlardan (ekonomi, eğitim, işsizlik, ulusal güvenlik, çevre) etkilenirler (s. 45).</li>
<li>Sadece teknik sorunlara odaklanıp “teknik olmayanları toplum çözer” diye düşünemezsin. Mühendislik becerilerini toplumsal sorunlarda da <b>aktif</b> kullanmalısın; seyirci kalmamalısın (s. 45).</li>
<li>Canon ve Creed'e meslekte uymak <b>ve</b> kişisel hayatta toplumsal sorunlara katılmak birlikte social responsibility'yi yerine getirir (s. 45).</li>
</ul>
<div class="exam"><b>Sınavda nasıl sorulur</b><br>
F24 Q6 (2 puan, açık uçlu): “Give an example of an action that is legal but not ethical, and something ethical but not legal.” Her biri için bir örnek yaz: plagiarism (copyright ihlali yok) ve Harriet Tubman ya da yaralıyı hastaneye yetiştirmek.<br>
F25 Q1 (MC): “What is the primary purpose of an engineering code of ethics?” → protect public safety and guide professional conduct.<br>
F25 Q2 (MC): yasal gereklilikleri karşılayan ama nadiren güvenlik hatası veren malzeme → public welfare and safety.<br>
F25 Q3 (boşluk): “Engineers who report safety concerns internally and externally when necessary are engaging in ___.” → whistle-blowing.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Whistle-blowing means reporting a safety concern inside the organization first, and outside it if necessary. It is an example of Step 4 (act), because it needs courage and the engineer may lose the job. Public safety comes before loyalty to the employer.</p><p>Social responsibility is the ideology that an individual has an obligation to act to benefit society at large. Engineers are part of society, so they should use their skills to help solve societal problems, not only technical ones.</p><p>Model answer (F24 Q6): Plagiarism without copyright infringement is legal but not ethical. Helping slaves escape, as Harriet Tubman did, was ethical but not legal at that time.</p></div>` },

      { type: "check", id: "t1-c6", title: "Whistle-blowing ve social responsibility", pool: [
        { q: "Bir güvenlik sorununu önce şirket içinde, gerekirse şirket dışında bildiren mühendis ne yapmış olur?",
          en: "Engineers who report safety concerns internally, and externally when necessary, are engaging in _________.",
          fields: [{ kind: "text", accept: ["whistle-blowing", "whistleblowing", "whistle blowing"] }],
          why: "Whistle-blowing; tanım F25 Q3 anahtarından. Kitap whistle-blower'ı Step 4'ün cesaret örneği olarak anar (s. 41)." },
        { q: "Kitaba göre social responsibility nedir?",
          en: "According to the book, what is social responsibility?",
          fields: [{ kind: "mc", opts: ["The duty to keep all company information secret", "The obligation of an individual to act to benefit society at large", "The rule that engineers must obey only written laws", "The right of engineers to refuse any team work"], ans: 1 }],
          why: "“Social responsibility is the ideology that an individual has an obligation to act to benefit society at large” (s. 44)." },
        { q: "Kitapta whistle-blower hangi adımın örneği olarak geçer?",
          en: "In the book, the whistle-blower is given as an example of which step?",
          fields: [{ kind: "mc", opts: ["Step 1: issues and stakeholders", "Step 2: consequences", "Step 3: correlate perspectives", "Step 4: act"], ans: 3 }],
          why: "Act adımı cesaret ister; whistle-blower işini riske atar (s. 41)." },
        { q: "Kitaba göre mühendisin social responsibility'si için hangisi doğrudur?",
          en: "According to the book, which statement about an engineer's social responsibility is correct?",
          fields: [{ kind: "mc", opts: ["Mühendisler sadece teknik sorunları çözmeli, gerisini topluma bırakmalıdır.", "Canon ve Creed'e uymak yeterlidir; toplumsal sorunlarla ilgilenmek gereksizdir.", "Mühendis becerilerini teknik olmayan toplumsal sorunların çözümünde de aktif olarak kullanmalıdır.", "Mühendisler toplumun üstündedir ve toplumsal sorunlardan etkilenmez."], ans: 2,
            enOpts: ["Engineers should solve only technical problems and leave the rest to society.", "Following the Canons and the Creed is enough; there is no need to deal with societal issues.", "Engineers should actively use their skills to help solve non-technical societal issues as well.", "Engineers are above society and are not affected by its problems."] }],
          why: "Kitap: becerilerini toplumsal sorunlarda aktif kullan, pasif seyirci olma; mühendisler toplumun üstünde değildir (s. 45)." },
        { q: "Bir mühendis bir köprüdeki ciddi güvenlik açığını müdürüne bildiriyor; müdür hiçbir şey yapmıyor. Canon 1 ve F25 anahtarına göre en uygun davranış hangisidir?",
          en: "An engineer reports a serious safety flaw in a bridge to her manager, who does nothing. According to Canon 1 and the F25 key, what is the most appropriate action?",
          fields: [{ kind: "mc", opts: ["Sessiz kalmak, çünkü işverene sadakat her şeyden önce gelir.", "Sorunu gerekirse şirket dışındaki yetkililere de bildirmek.", "Raporu değiştirip sorunu gizlemek.", "İstifa edip kimseye bir şey söylememek."], ans: 1,
            enOpts: ["Stay silent, because loyalty to the employer comes first.", "Report the problem to authorities outside the company if necessary.", "Change the report and hide the problem.", "Resign and tell no one."] }],
          why: "Halkın güvenliği işverene sadakatin önündedir (Canon 1 ve 4, s. 44). İç kanal sonuç vermezse dışarıya bildirmek whistle-blowing'dir (F25 Q3)." }
      ]}
    ]
  },
  {
    id: "t2", no: "T2", part: "teori",
    title: "Design process", sub: "Brainstorming, criteria, decision matrix",
    minutes: 40, source: "Kitap Ch 3, s. 53–64 + F25 anahtarı",
    blocks: [
      { type: "teach", h: "Tasarım nedir?", html: `
<p><b>Design</b> yaratıcı bir süreçtir: problemi tanımlarsın, fikir ararsın, çözüm geliştirirsin, çözümü paylaşırsın (s. 53).</p>
<p>İki önemli özelliği var:</p>
<ul>
<li><b>Multiobjective</b> (çok amaçlı): tasarımın birden fazla hedefi vardır, bu yüzden <b>birden fazla çözüm</b> çıkar. Bir çözüm bazı hedefleri çok iyi karşılar, bazılarını hiç karşılamaz. Amaç, <b>en önemli hedefleri karşılayan</b> tasarımı bulmaktır (s. 53).</li>
<li><b>Iterative</b> (tekrarlı): design, build, test, redesign... Uygularken ve kullanırken yeni bilgi çıkar, tasarım yeniden döner (s. 62).</li>
</ul>
<p><b>Genel adımlar</b> (s. 54):</p>
<ol>
<li><b>Problem definition</b> (ya da specification). Kitaba göre kritik adım, çünkü <b>diğer bütün adımları şekillendirir</b>.</li>
<li><b>Generating ideas</b> (innovating, developing possible solutions; research da girebilir).</li>
<li><b>Analysis</b>: tasarımı parçalarına ayırıp varsayımlarını, faydalarını ve risklerini incelemek.</li>
<li><b>Prototyping, implementation, testing</b>.</li>
</ol>
<p><b>Problemi nasıl tanımladığın, bulduğun çözümleri belirler</b> (s. 58–59). Elektrik hatlarındaki buz örneği: “hatta buz var” dersen buzu kırmayı, “hatta donabilecek su var” dersen hattı kuru tutmayı, “hat çok soğuk” dersen ısıtmayı düşünürsün. Dum Dum şirketi iki tadın karıştığı lolipopları atmak yerine “Mystery” flavor diye satar: problemi farklı tanımlamak para kazandırır.</p>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Design is a creative process. First I define the problem, then I generate ideas, develop solutions and share the solution. Design is multiobjective: it has more than one goal, so there is more than one possible solution. The aim is to find the design that meets the most important objectives. Design is also iterative: I design, build, test and redesign.</p><p>The general steps are: (1) problem definition (or specification), (2) generating ideas, (3) analysis, and (4) prototyping, implementation and testing. Problem definition is the critical step, because it shapes all the other steps. The way I define the problem decides which solutions I find.</p></div>` },

      { type: "check", id: "t2-c1", title: "Tasarım süreci", pool: [
        { q: "Kitaba göre “design is inherently multiobjective.” Bu ne demektir?",
          en: "The book says that design is inherently multiobjective. What does this mean?",
          fields: [{ kind: "mc", opts: ["Her problemin tek bir doğru çözümü vardır ve amaç onu bulmaktır.", "Birden fazla çözüm vardır; amaç en önemli hedefleri karşılayan tasarımı bulmaktır.", "Tasarım yalnızca maliyet hedefine göre yapılır.", "Tasarım bir kez yapılır ve bir daha değiştirilmez."], ans: 1,
            enOpts: ["Every problem has a single correct solution, and the goal is to find it.", "There are multiple solutions; the goal is to find the design that meets the most important objectives.", "Design is done only according to the cost objective.", "A design is made once and never changed again."] }],
          why: "Multiobjective: birden fazla çözüm; amaç en önemli hedefleri karşılayanı bulmak (s. 53)." },
        { q: "Design, build, test, redesign döngüsü tasarımın hangi özelliğini gösterir? Tasarım _________ bir süreçtir.",
          en: "The cycle “design, build, test, redesign” shows that design is _________.",
          fields: [{ kind: "text", accept: ["iterative", "iterative process", "an iterative process"] }],
          why: "Design tends to be iterative (s. 62)." },
        { q: "Kitaba göre diğer bütün adımları şekillendirdiği için kritik olan tasarım adımı hangisidir?",
          en: "According to the book, which design step is critical because it shapes all the others?",
          fields: [{ kind: "mc", opts: ["Prototyping", "Testing", "Problem definition", "Implementation"], ans: 2 }],
          why: "“This step is critical because it shapes all the others” (s. 54)." },
        { q: "Genel bir tasarım sürecinin adımlarının doğru sırası hangisidir?",
          en: "What is the correct order of the steps in a general design process?",
          fields: [{ kind: "mc", opts: ["Prototyping → problem definition → testing → generating ideas", "Generating ideas → testing → problem definition → analysis", "Analysis → prototyping → generating ideas → problem definition", "Problem definition → generating ideas → analysis → prototyping"], ans: 3 }],
          why: "Problem definition → generating ideas → analysis → prototyping, implementation, testing (s. 54)." },
        { q: "Dum Dum şirketi iki tadın karıştığı lolipopları atmak yerine “Mystery” flavor diye satıyor. Kitap bu örnekle neyi gösterir?",
          en: "The Dum Dum company sells the lollipops that combine two flavors as “Mystery” flavor instead of throwing them away. What does the book illustrate with this example?",
          fields: [{ kind: "mc", opts: ["Problemi farklı tanımlamak farklı ve yaratıcı çözümler doğurur.", "Üretimde hata olmamalı, makineler her tat değişiminde temizlenmelidir.", "Pairwise comparisons her zaman en iyi değerlendirme yöntemidir.", "Kriterler, çözümler üretildikten sonra seçilmelidir."], ans: 0,
            enOpts: ["Defining the problem differently leads to different, creative solutions.", "There must be no errors in production; the machines must be cleaned at every flavor change.", "Pairwise comparisons are always the best evaluation method.", "Criteria should be chosen after the solutions have been generated."] }],
          why: "“The way in which the problem is defined will affect the set of solutions explored” (s. 59)." }
      ]},

      { type: "teach", h: "Brainstorming", html: `
<p><b>Brainstorming</b> (beyin fırtınası) fikir üretmenin bir yöntemidir. Üç kuralı vardır (s. 55):</p>
<ol>
<li><b>More is better.</b> Çok fikir üret.</li>
<li><b>Variety is better.</b> Çeşitli fikir üret.</li>
<li><b>Do not criticize.</b> Eleştirme. Bu kural önemlidir, çünkü ilk iki kural <b>ancak eleştiri yoksa</b> gerçekleşir.</li>
</ol>
<p>Kitabın sloganı: <b>“In brainstorming, quality is quantity.”</b> Ne kadar çok fikir üretirsen, içinden birkaç kaliteli fikir çıkma olasılığı o kadar artar. “The best way to get a good idea is to get lots of ideas!” (s. 55)</p>
<p><b>Hikâye (s. 55):</b> 1952'de bir telefon şirketi 700 mil telefon hattındaki buzu temizlemek zorundaydı. Herkes (yöneticiler, sekreterler, mühendisler, hat işçileri) brainstorming'e katıldı. Biri şaka yollu “ayılar direklere tırmansa buz düşer” dedi. Eleştirilmedi; “direklere bal koyalım”, “balı helikopterle taşıyalım” fikirleri geldi. Sonunda bir sekreter helikopter pervanesinin rüzgârının buzu silkeleyebileceğini söyledi. Fikir denendi ve işe yaradı.</p>
<p>Aynı problem beş deneyimli helikopter pilotuna verildi. Onlar da aynı çözüme ulaştı, ama bu çözüm listelerindeki <b>36. fikirdi</b>. 35'te dursalardı belki daha zayıf bir çözümle kalırlardı. Ders: <b>variety</b> ve <b>eleştirmemek</b> değerlidir, <b>quantity</b> şarttır.</p>
<div class="box">F24 Q3: “What is your first choice for generating ideas for a design problem? Why?” Cevap: <b>brainstorming</b>; çünkü çok ve çeşitli fikir üretir, eleştiri yasağı sıra dışı fikirleri ortaya çıkarır, fikir sayısı arttıkça iyi fikir bulma olasılığı artar. Üç kuralı da yaz.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Brainstorming is a method for generating ideas. It has three rules: (1) more is better, (2) variety is better, and (3) do not criticize. The third rule is important, because the first two work only if nobody criticizes.</p><p>In brainstorming, quality is quantity. If I have many ideas, I am more likely to find a few good ones.</p><p>Model answer (F24 Q3): My first choice for generating ideas is brainstorming. It produces many different ideas in a short time. Because nobody criticizes, people also say unusual ideas. When the number of ideas grows, the chance of a good idea grows too. The rules are: more is better, variety is better, and do not criticize.</p></div>` },

      { type: "check", id: "t2-c2", title: "Brainstorming", pool: [
        { q: "Aşağıdakilerden hangisi brainstorming kurallarından biri DEĞİLDİR?",
          en: "Which of the following is NOT a rule of brainstorming?",
          fields: [{ kind: "mc", opts: ["More is better", "Variety is better", "Do not criticize", "Judge every idea at once"], ans: 3 }],
          why: "Kurallar: more is better, variety is better, do not criticize. Değerlendirme sonra yapılır (s. 55)." },
        { q: "Boşluğu doldur: Kitaba göre “In brainstorming, quality is _________.”",
          en: "Complete the statement from the book: “In brainstorming, quality is _________.”",
          fields: [{ kind: "text", accept: ["quantity"] }],
          why: "Quality is quantity: fikir sayısı arttıkça kaliteli fikir bulma olasılığı artar (s. 55)." },
        { q: "Telefon hattı hikâyesinde helikopter pilotlarından oluşan grup, helikopterle buz silkeleme fikrine kaçıncı fikirde ulaştı?",
          en: "In the telephone-line story, at which idea number did the group of helicopter pilots reach the helicopter solution?",
          fields: [{ kind: "num", val: 36 }],
          why: "36. fikir; 35'te dursalardı bu çözümü kaçıracaklardı (s. 55)." },
        { q: "Brainstorming'de “do not criticize” kuralı neden önemlidir?",
          en: "Why is the rule “do not criticize” important in brainstorming?",
          fields: [{ kind: "mc", opts: ["Toplantının daha kısa sürmesini sağlar.", "İlk iki kuralın gerçekleşmesi için gereklidir.", "Yalnızca uzmanların konuşmasını sağlar.", "Kriterleri belirlemeyi gereksiz kılar."], ans: 1,
            enOpts: ["It makes the meeting shorter.", "It is necessary for the first two rules to be achieved.", "It lets only the experts speak.", "It makes defining criteria unnecessary."] }],
          why: "“The third rule is important if the first two are to be achieved” (s. 55)." },
        { q: "Bir tasarım probleminde fikir üretmek için ilk tercihin ne olmalı ve neden?",
          en: "What is your first choice for generating ideas for a design problem, and why?",
          fields: [{ kind: "mc", opts: ["Pairwise comparisons, because they compare every pair of options for each criterion", "A decision matrix, because it multiplies each score by the weight of its criterion", "Asking only the most senior engineer, because experience always beats new ideas", "Brainstorming, because many varied ideas increase the chance of finding high-quality ones"], ans: 3 }],
          why: "F24 Q3. Pairwise ve decision matrix fikir üretmez, fikirleri değerlendirir. Brainstorming: quality is quantity (s. 55)." }
      ]},

      { type: "teach", h: "Criteria: önce kriter, sonra değerlendirme", html: `
<p><b>Criteria</b> (kriterler): çözümleri değerlendirirken neyin önemli olduğunu söyleyen ölçütler (s. 59).</p>
<p><b>Kriterler değerlendirme başlamadan önce net tanımlanmalı.</b> Böylece bütün fikirler adil değerlendirilir ve <b>hidden criteria</b>'ya (gizli kriterlere) dayanan tartışmalar önlenir (s. 59).</p>
<p>Neden önce kriter? Önce çözüm üretirsen insanlar bir “en iyi çözüm” fikrine kapılır, sonra kriterleri <b>beğendikleri çözüme uyacak şekilde</b> seçer. Kitap bunu daha zararlı bulur; bu yüzden önce <b>constraints and criteria</b> belirlenir (s. 59).</p>
<p><b>Kriter clear and measurable olmalı</b> (açık ve ölçülebilir, s. 59):</p>
<table>
<tr><th>Ürün</th><th>Belirsiz kriter</th><th>Clear and measurable</th></tr>
<tr><td>Computer</td><td>Inexpensive</td><td>Less than $300</td></tr>
<tr><td>Automobile</td><td>Environmentally friendly</td><td>Has an estimated MPG of at least 50</td></tr>
<tr><td>Bookshelf</td><td>Easy to assemble</td><td>Requires only a screwdriver</td></tr>
</table>
<p><b>Az kriter iyidir.</b> Rule of thumb: 10 anlamlı kriter düşünebildiysen, çözümleri karşılaştırırken <b>en önemli 2 tanesini</b> kullan. Uzmanlar, müşteriler ve araştırma en önemlilerini seçmene yardım eder (s. 60).</p>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Criteria tell us what is important when we evaluate solutions. I must define the criteria before I start the evaluation. Then all ideas are judged fairly, and there are no arguments about hidden criteria. If people see a best solution first, they may choose criteria that fit it.</p><p>A criterion must be clear and measurable. For example, inexpensive becomes less than $300, and environmentally friendly becomes an estimated MPG of at least 50. It is better to use few criteria. If I have ten, I can compare the solutions using the two most important ones.</p></div>` },

      { type: "check", id: "t2-c3", title: "Criteria first, clear and measurable", pool: [
        { q: "Kriterler neden çözümler üretilmeden önce tanımlanmalıdır?",
          en: "Why should criteria be defined before solutions are generated?",
          fields: [{ kind: "mc", opts: ["Çünkü kriterler bir kez yazıldıktan sonra hiçbir şekilde değiştirilemez.", "Çünkü brainstorming sırasında her fikir bir kritere göre puanlanmak zorundadır.", "Çünkü önce çözüm üretilirse insanlar beğendikleri çözüme uyan kriterleri seçer.", "Çünkü müşteri kriterleri hiçbir zaman açıkça söylemez, tahmin etmek gerekir."], ans: 2,
            enOpts: ["Because once criteria are written down they can never be changed.", "Because during brainstorming every idea must be scored against a criterion.", "Because if solutions come first, people choose criteria that fit the solution they already prefer.", "Because the client never states the criteria clearly, so they must be guessed."] }],
          why: "Önce çözüm üretilirse katılımcılar kriterleri tercih ettikleri fikre uydurur (s. 59)." },
        { q: "Bir bilgisayar için aşağıdakilerden hangisi clear and measurable bir criterion'dır?",
          en: "For a computer, which of the following is a clear and measurable criterion?",
          fields: [{ kind: "mc", opts: ["Inexpensive", "Easy to use", "Costs less than $300", "Aesthetically pleasing"], ans: 2 }],
          why: "“Inexpensive” yerine “less than $300” (Comprehension Check 3-1, s. 59)." },
        { q: "Kitaptaki rule of thumb'a göre 10 anlamlı criterion düşünebildiysen, çözümleri karşılaştırırken en önemli kaç tanesini kullanmalısın?",
          en: "According to the book's rule of thumb, if you can think of 10 meaningful criteria, how many of the most important ones should you use to compare solutions?",
          fields: [{ kind: "num", val: 2 }],
          why: "“Consider only the two most important criteria” (s. 60)." },
        { q: "“Easy to assemble” kriterinin bir bookshelf için clear and measurable hali hangisidir?",
          en: "For a bookshelf, which is a clear and measurable version of the criterion “easy to assemble”?",
          fields: [{ kind: "mc", opts: ["Looks simple", "Has a modern design", "Is liked by most people", "Requires only a screwdriver"], ans: 3 }],
          why: "Requires only a screwdriver (s. 59). Diğerleri ölçülemez." },
        { q: "Kriterler değerlendirme başlamadan önce tanımlanırsa, hangi tür kriterlere dayanan tartışmalar önlenir? _________ criteria",
          en: "Defining the criteria before evaluation begins helps avoid arguments based on _________ criteria.",
          fields: [{ kind: "text", accept: ["hidden"] }],
          why: "“This helps avoid arguments based on hidden criteria” (s. 59)." }
      ]},

      { type: "teach", h: "Requirement, criterion, constraint, trade-off", html: `
<p>Müşteri (client) ne istediğini söyler. Sen bunu mühendislik şartlarına çevirirsin. Bunu yaparken <b>wants</b> (istekler) ile <b>needs</b> (ihtiyaçlar) ayrılır (s. 61):</p>
<table>
<tr><th>Terim</th><th>Anlam</th><th>Örnek</th></tr>
<tr><td><b>Criteria</b> = wants</td><td>Ne kadar iyi karşılanırsa o kadar iyi; seçenekler bunlarla puanlanır.</td><td>Daha hafif, daha ucuz, daha güzel</td></tr>
<tr><td><b>Requirements</b> = needs</td><td>Mutlaka karşılanmalı. Karşılamayan çözüm <b>doğrudan elenir</b> (s. 61).</td><td>Legal (CAFE yakıt standartları, building codes); şirket içi (“üretim maliyeti $50'ı geçmemeli”); müşteriden (“en az %90 geri dönüştürülmüş malzeme”)</td></tr>
</table>
<p><b>Evaluation'ın ilk adımı:</b> minimum requirements'ı karşılamayan çözümleri ele. Onlar “out-of-bounds”tur (s. 61).</p>
<p>Aşağıdaki iki terim kitapta tanımlanmıyor; F25 sınavında ders slaytlarından geldi. Tanımlar <b>F25 cevap anahtarından</b>:</p>
<ul>
<li><b>Requirement</b>: tasarımın <b>yerine getirmesi gereken bir işlev</b> (a function the design must perform). <b>Constraint</b> (kısıt): tasarımın <b>aşmaması gereken bir sınır</b> (a limitation or boundary the design must not violate). Örnek: bütçe, boyut, süre. (F25 Q4)</li>
<li><b>Trade-off</b> (ödünleşim): bir özelliği iyileştirmek için başka bir özellikten vazgeçmek. F25 örneği: daha iyi görünüm için yüksek maliyet mi, basit yapım için düşük maliyet mi? (F25 Q6, anahtarda “tradeoff” diye yazılmış)</li>
</ul>
<div class="box">Kitap da “identifying <b>constraints and criteria</b> first” (s. 59) ve proje planlamasında “satisfying all constraints” (s. 72) der, ama constraint'i tanımlamaz.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Requirements are needs. A solution that does not meet a requirement is eliminated. Criteria are wants. The better a solution meets a criterion, the better it scores. Requirements can be legal, from the company or from the client.</p><p>A requirement is a function the design must perform. A constraint is a limitation or boundary the design must not violate. For example, a budget, a size limit or a deadline is a constraint.</p><p>A trade-off means giving up one feature to improve another. For example, I can choose a higher cost for a better appearance, or a lower cost for a simple construction.</p></div>` },

      { type: "check", id: "t2-c4", title: "Requirement, constraint, trade-off", pool: [
        { q: "Requirement, tasarımın yerine getirmesi gereken bir işlevi tanımlar. Constraint ise nedir?",
          en: "A requirement describes a function the design must perform, while a constraint is:",
          fields: [{ kind: "mc", opts: ["A limitation or boundary the design must not violate", "An optional feature that would be nice to have", "A goal set by the marketing department", "A preference of the manufacturing team"], ans: 0 }],
          why: "F25 Q4 anahtarı: a limitation or boundary the design must not violate (bütçe, boyut, süre). Kitap bu terimi tanımlamaz." },
        { q: "Bir bisiklet tasarımında “daha hafif kadro için daha yüksek maliyet” ile “daha ucuz ama daha ağır kadro” arasında seçim yapmak bir _________ örneğidir.",
          en: "In a bicycle design, choosing between a lighter frame at a higher cost and a cheaper but heavier frame is an example of a _________.",
          fields: [{ kind: "text", accept: ["tradeoff", "trade-off", "trade off", "tradeoffs", "trade-offs"] }],
          why: "Bir özelliği kazanmak için diğerinden vazgeçmek trade-off'tur (F25 Q6 anahtarı; kitapta tanım yok)." },
        { q: "Kitaba göre wants ve needs nasıl eşleşir?",
          en: "According to the book, how do wants and needs correspond to design terms?",
          fields: [{ kind: "mc", opts: ["Wants = requirements, needs = criteria", "Wants = constraints, needs = trade-offs", "Wants = criteria, needs = requirements", "Wants = stakeholders, needs = issues"], ans: 2 }],
          why: "“Separating the wants (criteria) from the needs (requirements)” (s. 61)." },
        { q: "“Bitmiş ürünün üretim maliyeti $50'ı geçmemeli” şartı kitaba göre nereden gelen bir requirement'tır?",
          en: "According to the book, “the finished product must not cost more than $50 to manufacture” is a requirement that comes from where?",
          fields: [{ kind: "mc", opts: ["It is imposed legally", "It comes from within your company", "It comes from your client", "It is only a criterion, not a requirement"], ans: 1 }],
          why: "Requirement kaynakları: legal, şirket içi ($50 örneği), müşteri (%90 geri dönüştürülmüş malzeme) (s. 61)." },
        { q: "Seçenekleri criteria'ya göre değerlendirirken ilk adım nedir?",
          en: "When evaluating solutions against the criteria, what is the first step?",
          fields: [{ kind: "mc", opts: ["Bütün seçenekleri weighted benefit analysis ile puanlamak", "Pairwise comparisons tablolarını toplamak", "En ucuz çözümü hemen seçmek", "Minimum requirement'ları karşılamayan çözümleri elemek"], ans: 3,
            enOpts: ["Score all options with a weighted benefit analysis", "Add up the pairwise comparison tables", "Immediately choose the cheapest solution", "Eliminate the solutions that do not meet the minimum requirements"] }],
          why: "“The first step will be to eliminate any solutions that do not meet the minimum requirements” (s. 61)." }
      ]},

      { type: "teach", h: "Pairwise comparisons", html: `
<p>Minimum requirements'ı geçen seçenekler kaldı. Şimdi aralarından seçeceksin. İlk yöntem <b>pairwise comparisons</b> (ikili karşılaştırma, s. 61):</p>
<ul>
<li>Her <b>criterion</b> için ayrı bir tablo yap.</li>
<li>Her hücrede <b>sütundaki seçeneği satırdaki seçenekle</b> karşılaştır: <b>0</b> = sütundaki daha kötü, <b>1</b> = eşit, <b>2</b> = sütundaki daha iyi.</li>
<li>Her sütunu topla. En yüksek toplam o kriterde en iyisidir.</li>
<li>Bunu her kriter için yap, sonra toplamları topla (s. 62).</li>
</ul>
<p><b>Örnek</b> (criterion: safety). A, B'den daha az güvenli; A ile C eşit; B, C'den daha güvenli.</p>
<table>
<tr><th>Safety</th><th>A</th><th>B</th><th>C</th></tr>
<tr><td>A</td><td>–</td><td>2</td><td>1</td></tr>
<tr><td>B</td><td>0</td><td>–</td><td>0</td></tr>
<tr><td>C</td><td>1</td><td>2</td><td>–</td></tr>
<tr><td><b>Total</b></td><td><b>1</b></td><td><b>4</b></td><td><b>1</b></td></tr>
</table>
<p>Nasıl okunur: A sütunu, B satırı = 0, çünkü A, B'den kötü. B sütunu, A satırı = 2, çünkü B, A'dan iyi. Safety'de kazanan <b>B</b>.</p>
<div class="box"><b>Dezavantaj (sınav sorusu!):</b> pairwise comparisons'da <b>bütün kriterler eşit ağırlıktadır</b>. Oysa bazı kriterler diğerlerinden daha önemlidir (s. 62). Çözüm: weighted benefit analysis.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Pairwise comparison is a method for choosing between options. For each criterion, I make a table and compare the options in pairs. A cell gets 0 if the column option is worse, 1 if they are equal, and 2 if the column option is better. I add up each column. The highest total is the best option for that criterion. Then I add the totals of all criteria.</p><p>The disadvantage is that all criteria have the same weight. But some criteria are more important than others. Weighted benefit analysis solves this problem.</p></div>` },

      { type: "check", id: "t2-c5", title: "Pairwise comparisons", pool: [
        { q: "Criterion: cost (ucuz olan daha iyi). Maliyet sıralaması Z &lt; X &lt; Y (Z en ucuz). Pairwise tabloda Z'nin sütun toplamı kaçtır?",
          en: "Criterion: cost (cheaper is better). The costs are ordered Z &lt; X &lt; Y (Z is the cheapest). In the pairwise comparison table, what is the column total for Z?",
          fields: [{ kind: "num", val: 4 }],
          why: "Z, X'ten iyi (2) ve Y'den iyi (2): toplam 4. Kural: 0 kötü, 1 eşit, 2 iyi (s. 61).",
          hint: "Z'yi diğer iki seçenekle tek tek karşılaştır." },
        { q: "Pairwise comparisons tablosunda sütundaki seçenek satırdaki seçenekle eşitse hücreye hangi sayı yazılır?",
          en: "In a pairwise comparison table, what number is entered when the option in the column ranks equally with the option in the row?",
          fields: [{ kind: "num", val: 1 }],
          why: "0 = worse, 1 = equal, 2 = better (s. 61)." },
        { q: "Pairwise comparisons yönteminin temel dezavantajı nedir?",
          en: "What is the main disadvantage of the pairwise comparisons approach?",
          fields: [{ kind: "mc", opts: ["It cannot handle more than two options", "It needs special software", "It ignores the minimum requirements", "All criteria have equal weight"], ans: 3 }],
          why: "“All criteria have equal weight, whereas some criteria are likely to be more important” (s. 62)." },
        { q: "Bir criterion'da P seçeneği Q'dan daha iyi, R'den daha iyi ve S ile eşit. Pairwise tabloda P'nin sütun toplamı kaçtır?",
          en: "For one criterion, option P is better than Q, better than R, and equal to S. What is P's column total in the pairwise comparison table?",
          fields: [{ kind: "num", val: 5 }],
          why: "2 + 2 + 1 = 5 (s. 61)." },
        { q: "Pairwise tabloda bir hücredeki 0 ne anlama gelir?",
          en: "In a pairwise comparison table, what does a 0 in a cell mean?",
          fields: [{ kind: "mc", opts: ["The column option is worse than the row option", "The column option is better than the row option", "Both options rank equally", "The comparison was skipped"], ans: 0 }],
          why: "0 = sütundaki seçenek satırdakinden kötü (s. 61)." }
      ]},

      { type: "teach", h: "Weighted benefit analysis = decision matrix", html: `
<p><b>Weighted benefit analysis</b> (ağırlıklı fayda analizi): her kritere bir <b>weight</b> (önem puanı) verilir, her seçenek her kriterden bir <b>score</b> alır. Toplam = Σ (weight × score). En yüksek toplam kazanır (s. 62). F25 sınavı aynı tabloya <b>decision matrix</b> dedi: “compare design alternatives using weighted criteria” (F25 Q5).</p>
<p><b>Kitabın örneği (Table 3-2, s. 62).</b> Skorlar 0–10.</p>
<table>
<tr><th>Criterion</th><th>Weight</th><th>Option 1</th><th>Option 2</th><th>Option 3</th></tr>
<tr><td>Cost</td><td>2</td><td>2</td><td>6</td><td>10</td></tr>
<tr><td>Safety</td><td>8</td><td>10</td><td>4</td><td>6</td></tr>
<tr><td>Weight</td><td>10</td><td>7</td><td>7</td><td>2</td></tr>
<tr><td>Wow</td><td>5</td><td>2</td><td>4</td><td>6</td></tr>
<tr><td><b>Total</b></td><td></td><td>4+80+70+10 = <b>164</b></td><td>12+32+70+20 = <b>134</b></td><td>20+48+20+30 = <b>118</b></td></tr>
</table>
<p>Adım adım Option 1: cost 2×2 = 4, safety 8×10 = 80, weight 10×7 = 70, wow 5×2 = 10. Toplam 164. <b>Kazanan Option 1.</b> Dikkat: Option 3 en ucuz (cost 10) ama cost'un weight'i sadece 2, o yüzden az etkiliyor.</p>
<p><b>Senin sıran (çöz, sonra kontrol et).</b> Laptop seçimi. Weights: price 3, battery 5, mass 2.</p>
<table>
<tr><th>Criterion</th><th>Weight</th><th>A</th><th>B</th><th>C</th></tr>
<tr><td>Price</td><td>3</td><td>4</td><td>9</td><td>6</td></tr>
<tr><td>Battery</td><td>5</td><td>8</td><td>5</td><td>7</td></tr>
<tr><td>Mass</td><td>2</td><td>6</td><td>7</td><td>9</td></tr>
</table>
<p>Cevap: A = 12+40+12 = 64; B = 27+25+14 = 66; C = 18+35+18 = <b>71</b>. Kazanan C.</p>
<div class="box">Bir puanlayıcının “7”si diğerininkinden farklı olabilir. Bunu azaltmak için ölçeği tanımla: kitapta 0 not satisfactory, 1 barely applicable, 2 fairly good, 3 good, 4 very good/ideal (Table 3-3, s. 62).</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Weighted benefit analysis gives each criterion a weight, which shows its importance. Each option gets a score for each criterion. The total is the sum of weight times score, and the highest total wins.</p><p>A decision matrix is used to compare design alternatives using weighted criteria. For example, a cheap option can lose if cost has a low weight and safety has a high weight.</p></div>` },

      { type: "check", id: "t2-c6", title: "Decision matrix hesabı", pool: [
        { q: "Kitabın tablosu: weights cost 2, safety 8, weight 10, wow 5. Option 2'nin skorları sırasıyla 6, 4, 7, 4. Option 2'nin toplam puanı kaçtır?",
          en: "Weights: cost 2, safety 8, weight 10, wow 5. Option 2 scores 6, 4, 7 and 4 on these criteria. What is the weighted total for Option 2?",
          fields: [{ kind: "num", val: 134 }],
          why: "2×6 + 8×4 + 10×7 + 5×4 = 12 + 32 + 70 + 20 = 134 (Table 3-2, s. 62)." },
        { q: "Weights: price 3, battery 5, mass 2. C seçeneğinin skorları: price 6, battery 7, mass 9. C'nin toplam puanı kaçtır?",
          en: "Weights: price 3, battery 5, mass 2. Option C scores 6 on price, 7 on battery and 9 on mass. What is C's weighted total?",
          fields: [{ kind: "num", val: 71 }],
          why: "3×6 + 5×7 + 2×9 = 18 + 35 + 18 = 71. Toplam = Σ(weight × score) (s. 62)." },
        { q: "Weights: price 3, battery 5, mass 2.<br>A: 4, 8, 6 · B: 9, 5, 7 · C: 6, 7, 9 (sırasıyla price, battery, mass).<br>Decision matrix'e göre hangi seçenek kazanır?",
          en: "Weights: price 3, battery 5, mass 2. Scores (price, battery, mass): A 4, 8, 6; B 9, 5, 7; C 6, 7, 9. Which option does the decision matrix select?",
          fields: [{ kind: "mc", opts: ["Option A", "Option B", "Option C", "A and B tie"], ans: 2 }],
          why: "A = 64, B = 66, C = 71. En yüksek toplam C (s. 62)." },
        { q: "Kitabın tablosunda (cost 2, safety 8, weight 10, wow 5) safety'nin weight'i 8'den 2'ye düşürülürse Option 1'in toplamı kaç olur? Option 1 skorları: 2, 10, 7, 2.",
          en: "In the book's table (cost 2, safety 8, weight 10, wow 5), the weight of safety is lowered from 8 to 2. Option 1 scores 2, 10, 7 and 2. What is Option 1's new total?",
          fields: [{ kind: "num", val: 104 }],
          why: "2×2 + 2×10 + 10×7 + 5×2 = 4 + 20 + 70 + 10 = 104. Weight değişince sıralama da değişebilir (s. 62)." },
        { q: "Bir decision matrix mühendislere ne yapmakta yardım eder?",
          en: "What does a decision matrix help engineers do?",
          fields: [{ kind: "mc", opts: ["Plan the dates and places of the weekly team meetings", "Record the raw data of an experiment in a single table", "Assign each task and its due date to a team member", "Choose among design alternatives by scoring them on weighted criteria"], ans: 3 }],
          why: "F25 Q5: compare design alternatives using weighted criteria. Kitaptaki adı weighted benefit analysis (s. 62). Görev atamak responsibility matrix'tir." },
        { q: "Su şişesi tasarımı. Weights: durability 4, cost 3, looks 1. Bir seçeneğin skorları: durability 3, cost 2, looks 4. Toplam puanı kaçtır?",
          en: "Water bottle design. Weights: durability 4, cost 3, looks 1. One option scores 3 on durability, 2 on cost and 4 on looks. What is its weighted total?",
          fields: [{ kind: "num", val: 22 }],
          why: "4×3 + 3×2 + 1×4 = 12 + 6 + 4 = 22 (yöntem s. 62)." }
      ]},

      { type: "teach", h: "Reality check ve sustainability", html: `
<p><b>Reality check</b> (gerçeklik kontrolü, s. 62): kriterlere en iyi uyan çözümü buldun. Uygulamadan önce dur:</p>
<ul>
<li>Elenen fikirlerden yeniden düşünülmeyi hak eden var mı?</li>
<li>Elenen fikirlerin önemli parçaları seçilen tasarıma eklenebilir mi?</li>
<li>Bir fikrin aslında elenmemesi gerektiği ortaya çıkarsa <b>seçim kriterlerini değiştirmek</b> uygun olabilir.</li>
</ul>
<p><b>Sustainability</b> (sürdürülebilirlik, s. 64): “meeting the needs of the present without compromising the ability of future generations to do the same.” Tanım temelde <b>insanlarla</b> ilgilidir.</p>
<ul>
<li><b>Üç boyut:</b> <b>environmental</b>, <b>social</b>, <b>economic</b>. Üçü dengelenmeli. “Environmental” ile sustainability aynı şey değildir.</li>
<li>Tasarıma <b>sonradan eklenemez</b> (“cannot be bolted onto a design at the end”).</li>
<li>Yeni bir bina projesinde ilk soru: bu proje <b>gerçekten gerekli mi?</b></li>
<li>En iyi fırsatlar <b>projenin başında</b>, planlama ve tasarım sırasındadır.</li>
</ul>
<div class="exam"><b>Sınavda nasıl sorulur</b><br>
F24 Q3 (açık uçlu): “What is your first choice for generating ideas for a design problem? Why?” → brainstorming + 3 kural + quality is quantity.<br>
F25 Q4 (MC): “A requirement describes a function the design must perform, while a constraint is:” → a limitation or boundary the design must not violate.<br>
F25 Q5 (MC): “What is the primary purpose of a decision matrix in engineering design?” → to compare design alternatives using weighted criteria.<br>
F25 Q6 (boşluk): “choosing between higher cost for better aesthetics versus lower cost for simple construction is an example of a ___.” → tradeoff.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>A reality check comes after the best solution is chosen and before it is implemented. I ask whether any eliminated idea deserves another look, and whether parts of those ideas can be added to the chosen design. If an idea should not have been eliminated, it may be appropriate to change the selection criteria.</p><p>Sustainability means meeting the needs of the present without compromising the ability of future generations to do the same. It has three dimensions: environmental, social and economic, and they must be balanced. Sustainability cannot be bolted onto a design at the end; the best opportunities are at the start of a project.</p></div>` },

      { type: "check", id: "t2-c7", title: "Reality check ve sustainability", pool: [
        { q: "En iyi çıkan çözümü uygulamadan önce durup elenen fikirlere yeniden bakmaya ne denir? _________ check",
          en: "Before implementing the best-fitting solution, you stop and reconsider the ideas that were eliminated. This is called a _________ check.",
          fields: [{ kind: "text", accept: ["reality", "reality check"] }],
          why: "Reality check (s. 62)." },
        { q: "Kitaba göre sustainability'nin üç boyutu hangileridir?",
          en: "According to the book, what are the three dimensions of sustainability?",
          fields: [{ kind: "mc", opts: ["Environmental, technical, legal", "Environmental, social, economic", "Social, political, cultural", "Economic, safety, aesthetic"], ans: 1 }],
          why: "Environmental, social, economic; üçü dengelenmeli (s. 64)." },
        { q: "Kitaptaki sustainability tanımı hangisidir?",
          en: "Which is the most common definition of sustainability given in the book?",
          fields: [{ kind: "mc", opts: ["Using only renewable materials in every product that an engineer designs", "Protecting trees and animals for their own sake, regardless of people's needs", "Meeting the needs of the present without compromising the ability of future generations to do the same", "Keeping a product working for as long as possible without any repairs"], ans: 2 }],
          why: "Brundtland tanımı (s. 64). Kitap tanımın insanlarla ilgili olduğunu vurgular." },
        { q: "Kitaba göre sustainability için hangisi doğrudur?",
          en: "According to the book, which statement about sustainability is correct?",
          fields: [{ kind: "mc", opts: ["Projenin sonunda, tasarım bittikten sonra kolayca eklenebilir.", "Yalnızca çevre boyutu önemlidir; diğer boyutlar ikincildir.", "Sadece inşaat mühendislerini ve mimarları ilgilendiren bir konudur.", "En iyi fırsatlar projenin başında, planlama ve tasarım sırasında çıkar."], ans: 3,
            enOpts: ["It can easily be added at the end of the project, after the design is finished.", "Only the environmental dimension matters; the other dimensions are secondary.", "It is a topic that concerns only civil engineers and architects.", "The best opportunities occur early, during project planning and design."] }],
          why: "Sustainability sonradan eklenemez; en iyi fırsatlar planlama ve tasarımda (s. 64)." },
        { q: "Reality check sırasında elenen bir fikrin aslında elenmemesi gerektiği anlaşılıyor. Kitaba göre ne yapılabilir?",
          en: "During the reality check you realize that an idea really should not have been eliminated. According to the book, what may be appropriate?",
          fields: [{ kind: "mc", opts: ["Bütün tasarım süreci iptal edilir.", "Seçilen çözüm yine de değiştirilmeden uygulanır.", "Elenen fikir hiçbir şekilde kullanılamaz.", "Seçim kriterlerinde bir değişiklik uygun olabilir."], ans: 3,
            enOpts: ["The whole design process is cancelled.", "The chosen solution is implemented unchanged anyway.", "The eliminated idea can never be used.", "A change in the selection criteria may be appropriate."] }],
          why: "“A change in the selection criteria may be appropriate” (s. 62)." }
      ]}
    ]
  },
  {
    id: "t3", no: "T3", part: "teori",
    title: "Teamwork", sub: "Team behavior, CATME, project timeline",
    minutes: 30, source: "Kitap Ch 3, s. 65–73 + F25 anahtarı",
    blocks: [
      { type: "teach", h: "Group ve team farkı", html: `
<p>Kitap iki kelimeyi ayırır (s. 65):</p>
<table>
<tr><th>Terim</th><th>Tanım</th><th>Örnek</th></tr>
<tr><td><b>Group</b></td><td>A number of people who come together at the same place, at the same time.</td><td>Aynı otobüs durağında bekleyen insanlar</td></tr>
<tr><td><b>Team</b></td><td>Individuals cooperating to accomplish a common goal.</td><td>Bir köprü projesini birlikte bitirmeye çalışan 4 öğrenci</td></tr>
</table>
<p>Fark: group'ta sadece <b>aynı yer ve zaman</b> var. Team'de <b>ortak hedef</b> ve <b>iş birliği</b> var.</p>
<p>Birlikte çalışan insanlarda fikir ve beceri çeşitliliğinden çok iyilik çıkabilir, ama <b>conflict</b> (çatışma) de çıkabilir. Conflict verimli de olabilir, verimsiz de; bu yüzden <b>yönetilmesi</b> gerekir. Takım çalışacaksa <b>ground rules</b> (temel kurallar) olmalı (s. 65).</p>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>A group is a number of people who come together at the same place, at the same time. A team is a set of individuals cooperating to accomplish a common goal. For example, people waiting at a bus stop are a group, and four students who build a bridge together are a team.</p><p>Working together can bring many ideas and skills, but it can also cause conflict. Conflict can be productive or unproductive, so a team must manage it. A team needs ground rules.</p></div>` },

      { type: "check", id: "t3-c1", title: "Group ve team", pool: [
        { q: "Kitaba göre team nedir?",
          en: "According to the book, what is a team?",
          fields: [{ kind: "mc", opts: ["Individuals cooperating to accomplish a common goal", "A number of people who come together at the same place, at the same time", "People who work for the same company", "Students who are enrolled in the same course"], ans: 0 }],
          why: "Team: individuals cooperating to accomplish a common goal. İkinci şık group'un tanımı (s. 65)." },
        { q: "Aynı yerde, aynı zamanda bir araya gelen insanlara ne denir? (team değil)",
          en: "A number of people who come together at the same place, at the same time, is called a _________.",
          fields: [{ kind: "text", accept: ["group", "a group"] }],
          why: "Group (s. 65)." },
        { q: "Bir otobüs durağında aynı anda bekleyen 10 kişi kitaba göre nedir?",
          en: "According to the book's definitions, ten people waiting at the same bus stop at the same time form:",
          fields: [{ kind: "mc", opts: ["A team", "A team charter", "A group", "A responsibility matrix"], ans: 2 }],
          why: "Aynı yer ve zaman var, ortak hedef ve iş birliği yok: group (s. 65)." },
        { q: "Kitaba göre takım içindeki conflict için hangisi doğrudur?",
          en: "According to the book, which statement about conflict in a team is correct?",
          fields: [{ kind: "mc", opts: ["Conflict her zaman zararlıdır ve tamamen önlenmelidir.", "Conflict verimli de verimsiz de olabilir; yönetilmesi gerekir.", "Conflict sadece kötü takımlarda görülür.", "Conflict çıkarsa takım hemen dağıtılmalıdır."], ans: 1,
            enOpts: ["Conflict is always harmful and must be avoided completely.", "Conflict can be productive or unproductive, so it must be managed.", "Conflict appears only in bad teams.", "If conflict appears, the team must be dissolved immediately."] }],
          why: "“Conflict can be both productive and unproductive, you need to manage it” (s. 65)." },
        { q: "Bir pit ekibi yarışta lastikleri birkaç saniyede değiştirmek için birlikte çalışıyor. Kitaba göre bu nedir?",
          en: "A pit crew works together to change the tires of a race car in a few seconds. According to the book's definitions, this is:",
          fields: [{ kind: "mc", opts: ["A group", "A team", "A crowd", "An audience"], ans: 1 }],
          why: "Ortak hedef için iş birliği yapan bireyler: team (s. 65)." }
      ]},

      { type: "teach", h: "Team behavior: takım nasıl işler?", html: `
<p>Bir takımın, özellikle yeni bir takımın <b>en kritik görevi</b> şu üçünü belirlemektir (s. 65):</p>
<ol>
<li><b>Purpose</b> (amaç)</li>
<li><b>Process</b> (iş yapma şekli)</li>
<li><b>A means of measuring team progress</b> (ilerlemeyi ölçme yolu)</li>
</ol>
<p>Kitabın düşünmeni istediği başlıklar (s. 65–66):</p>
<table>
<tr><th>Başlık</th><th>Ne demek</th></tr>
<tr><td><b>Ground rules</b></td><td>Kabul edilebilir ve edilemez davranış üzerinde consensus.</td></tr>
<tr><td><b>Decision making</b></td><td>Kararlar nasıl verilecek? <b>Consensus</b>, <b>majority vote</b> (gizli ya da el kaldırarak) ya da başka yöntem.</td></tr>
<tr><td><b>Communication</b></td><td>Genellikle en zor kısım. Gerçekten dinlemek, yapıcı geri bildirim; toplantıda herkes katılır ve dinler.</td></tr>
<tr><td><b>Roles</b></td><td>Uzun projede roller <b>dönüşümlü</b> olmalı, herkes her rolü öğrensin.</td></tr>
<tr><td><b>Participation</b></td><td>İş nasıl dağıtılacak; biri hastalanırsa yük nasıl kayacak.</td></tr>
<tr><td><b>Values</b></td><td>Her üyenin kendine özgü katkısını kabul etmek.</td></tr>
<tr><td><b>Outcomes</b></td><td>Son hedefe ulaşıldığını hangi ölçülerle anlayacağız.</td></tr>
</table>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>The most critical task of a team, especially a new team, is to decide its purpose, its process and a means of measuring team progress.</p><p>A team should also agree on ground rules, decision making (for example, consensus or majority vote), communication, roles, participation, values and outcomes. Communication is often the hardest part. In a long project, the roles should rotate, so every member learns every role.</p></div>` },

      { type: "check", id: "t3-c2", title: "Team behavior", pool: [
        { q: "Kitaba göre yeni bir takımın en kritik görevi nedir?",
          en: "According to the book, what is the most critical task for a new team?",
          fields: [{ kind: "mc", opts: ["Establishing its purpose, process, and a means of measuring progress", "Choosing a team name, a logo and a motto for the group", "Electing a permanent leader who will make every decision", "Buying all the materials the project will need at once"], ans: 0 }],
          why: "Purpose, process, and a means of measuring team progress (s. 65)." },
        { q: "Kitapta takımın karar verme yöntemi için örnek olarak verilen seçenekler hangileridir?",
          en: "Which decision-making methods does the book give as examples for a team?",
          fields: [{ kind: "mc", opts: ["Coin toss or seniority", "The professor always decides", "Consensus or majority vote", "Whoever speaks loudest decides"], ans: 2 }],
          why: "Consensus, majority vote (secret or show of hands) ya da başka yöntem (s. 66)." },
        { q: "Uzun süreli bir projede roles için kitap ne önerir?",
          en: "What does the book recommend about roles in a long-term project?",
          fields: [{ kind: "mc", opts: ["Roller hiç değişmemeli; herkes en iyi olduğu işi yapmalı.", "Roller dönüşümlü olmalı ki herkes her rolü öğrenme şansı bulsun.", "Bütün roller lidere verilmeli.", "Roller her toplantıda kura ile belirlenmeli."], ans: 1,
            enOpts: ["Roles should never change; everyone should do what they are best at.", "Roles should rotate so that everyone has a chance to learn each role.", "All roles should be given to the leader.", "Roles should be drawn by lot at every meeting."] }],
          why: "“In a long-term project, roles should rotate” (s. 66)." },
        { q: "Takım üyelerinin kabul edilebilir ve kabul edilemez davranışlar üzerinde consensus'a vardığı kurallara ne denir?",
          en: "The rules on which team members reach consensus about acceptable and unacceptable behavior are called _________.",
          fields: [{ kind: "text", accept: ["ground rules", "groundrules", "ground rule"] }],
          why: "Ground rules (s. 65)." },
        { q: "Bir üye hastalanınca iş yükünün nasıl kaydırılacağına önceden karar vermek hangi team behavior başlığına girer?",
          en: "Deciding in advance how to handle shifts in workload when a team member is sick belongs to which team-behavior topic?",
          fields: [{ kind: "mc", opts: ["Values", "Outcomes", "Participation", "Communication"], ans: 2 }],
          why: "Participation: iş dağılımı ve hastalıkta yük kayması (s. 66)." }
      ]},

      { type: "teach", h: "Peer evaluation ve CATME", html: `
<p>ABET, mühendislik mezunlarının <b>multidisciplinary teams</b>'te çalışabilmesini ister. Takım çoğu zaman hocasız çalıştığı için bireysel hesap verebilirlik (accountability) gerekir. Yaygın yol: üyelerin birbirini puanlaması (<b>peer evaluation</b>, s. 67).</p>
<p><b>Altın kural:</b> arkadaşın hakkında ne <i>düşündüğüne</i> değil, ne <b>yaptığına</b> bak. Adil olmanın tek yolu <b>behaviors</b>'a (davranışlara) odaklanmaktır (s. 67).</p>
<p><b>CATME</b> = Comprehensive Assessment of Team-Member Effectiveness. <b>Behaviorally anchored rating scale</b> kullanır: her puan seviyesi örnek davranışlarla tanımlanır. <b>Beş</b> tür katkıyı ölçer (s. 68–69):</p>
<table>
<tr><th>CATME boyutu</th><th>İyi bir üye ne yapar (örnek davranış)</th></tr>
<tr><td><b>Contributing to the team's work</b></td><td>Payına düşeni kaliteli yapar, sözünü tutar, işi zamanında teslim eder, toplantıya hazırlıklı gelir.</td></tr>
<tr><td><b>Interacting with teammates</b></td><td>Arkadaşlarını dinler, fikirlerini sorar, bilgi paylaşır, geri bildirime saygı gösterir. (Kötüsü: böler, yok sayar, patronluk taslar, alay eder.)</td></tr>
<tr><td><b>Keeping the team on track</b></td><td>Takımın ilerlemesini izler, sorunları fark eder, arkadaşlarını uyarır ya da çözüm önerir.</td></tr>
<tr><td><b>Expecting quality</b></td><td>Takımı mükemmel işe motive eder; ek ödül olmasa da kaliteli iş ister; takımın başarabileceğine inanır.</td></tr>
<tr><td><b>Having relevant knowledge, skills, and abilities</b></td><td>İşi yapacak bilgi ve beceriye sahiptir, yenilerini öğrenir, gerekirse başka bir üyenin rolünü yapabilir.</td></tr>
</table>
<p><b>“High-quality” rating</b> = gözlenen davranışla <b>tutarlı</b> puan. Yüksek puan demek değildir (s. 70).</p>
<p><b>Kitaptaki örnek takım (s. 70–71):</b> Robin çok bilgili ve işin büyük kısmını yapıyor, ama arkadaşlarının katkı denemelerini engelliyor ve Pat'e “bu takım için yeterince zeki değilsin” diyor. Knowledge yüksek, <b>interacting with teammates</b> zayıf. Chris toplantıları kaçırıyor, işi yarım bırakıyor: <b>contributing</b> zayıf.</p>
<div class="box">F24 Q4: “What is the first character you would look for in your team members? Why?” Tek doğru cevap yok. Bir özellik seç ve CATME'ye bağla. Örnek: <b>reliability</b>: sözünü tutar, payına düşeni zamanında bitirir (contributing to the team's work). Çünkü bir kişinin kaçırdığı tarih bütün projeyi geciktirir.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Peer evaluation means that team members rate each other. To be fair, I must look at what my teammate does, not at what I think about him or her. I must focus on behaviors.</p><p>CATME means Comprehensive Assessment of Team-Member Effectiveness. It uses a behaviorally anchored rating scale: each rating level is described by example behaviors. It measures five dimensions: (1) contributing to the team's work, (2) interacting with teammates, (3) keeping the team on track, (4) expecting quality, and (5) having relevant knowledge, skills, and abilities.</p><p>Model answer (F24 Q4): The first character I would look for in my team members is reliability. A reliable member keeps promises and finishes his or her part on time. This is contributing to the team's work. If one person misses a deadline, the whole project is late.</p></div>` },

      { type: "check", id: "t3-c3", title: "CATME boyutları", pool: [
        { q: "Toplantılara hazırlıklı gelir, sözünü tutar, payına düşen işi zamanında teslim eder. Bu davranışlar hangi CATME boyutuna aittir?",
          en: "Comes to meetings prepared, keeps commitments and completes a fair share of the work on time. Which CATME dimension do these behaviors describe?",
          fields: [{ kind: "mc", opts: ["Interacting with teammates", "Contributing to the team's work", "Expecting quality", "Keeping the team on track"], ans: 1 }],
          why: "Contributing to the team's work: commitment, quality, timeliness (s. 68)." },
        { q: "Takımın ilerlemesini izler, bir sorun gördüğünde arkadaşlarını uyarır ya da çözüm önerir. Hangi CATME boyutudur?",
          en: "Monitors the team's progress and alerts teammates or suggests solutions when the team's success is threatened. Which CATME dimension is this?",
          fields: [{ kind: "mc", opts: ["Keeping the team on track", "Having relevant knowledge, skills, and abilities", "Contributing to the team's work", "Expecting quality"], ans: 0 }],
          why: "Keeping the team on track (s. 69)." },
        { q: "Arkadaşlarının fikirlerini sorar, onları dinler, bilgi paylaşır ve geri bildirime saygı gösterir. Hangi CATME boyutudur?",
          en: "Asks for teammates' ideas, listens to them, shares information and respects feedback. Which CATME dimension is this?",
          fields: [{ kind: "mc", opts: ["Expecting quality", "Contributing to the team's work", "Keeping the team on track", "Interacting with teammates"], ans: 3 }],
          why: "Interacting with teammates (s. 68)." },
        { q: "Takımı mükemmel iş yapmaya motive eder; ek ödül olmasa bile takımın üstün iş çıkarmasını önemser. Hangi CATME boyutudur?",
          en: "Motivates the team to do excellent work and cares that the team does outstanding work, even if there is no additional reward. Which CATME dimension is this?",
          fields: [{ kind: "mc", opts: ["Interacting with teammates", "Expecting quality", "Having relevant knowledge, skills, and abilities", "Contributing to the team's work"], ans: 1 }],
          why: "Expecting quality (s. 69)." },
        { q: "Takıma yararlı yeni bilgi ve beceriler kazanır; gerekirse başka bir üyenin rolünü de yapabilir. Hangi CATME boyutudur?",
          en: "Acquires new knowledge or skills to improve the team's performance and can perform the role of another team member if necessary. Which CATME dimension is this?",
          fields: [{ kind: "mc", opts: ["Keeping the team on track", "Contributing to the team's work", "Having relevant knowledge, skills, and abilities", "Interacting with teammates"], ans: 2 }],
          why: "Having relevant knowledge, skills, and abilities (s. 69)." },
        { q: "CATME kaç farklı türde takım katkısını ölçer?",
          en: "How many different types of contributions to a team does CATME measure?",
          fields: [{ kind: "num", val: 5 }],
          why: "Beş tür katkı (s. 68)." }
      ]},

      { type: "check", id: "t3-c4", title: "Davranışa göre değerlendirme", pool: [
        { q: "Kitaba göre bir takım arkadaşını adil değerlendirmenin tek yolu nedir?",
          en: "According to the book, what is the only fair way to evaluate a teammate?",
          fields: [{ kind: "mc", opts: ["Onun hakkında ne hissettiğine göre puan vermek", "Herkese aynı yüksek puanı vermek", "Ne yaptığına, yani davranışlarına odaklanmak", "Sadece en zeki üyeye yüksek puan vermek"], ans: 2,
            enOpts: ["Rate according to how you feel about the person", "Give everyone the same high rating", "Focus on what the teammate does, that is, on behaviors", "Give a high rating only to the smartest member"] }],
          why: "“The only way to be fair is to focus on behaviors... rather than opinions” (s. 67)." },
        { q: "Kitaba göre “high-quality” peer rating ne demektir?",
          en: "According to the book, what is a “high-quality” peer rating?",
          fields: [{ kind: "mc", opts: ["Her zaman yüksek puan demektir, çünkü takım arkadaşları desteklenmelidir.", "Profesörün verdiği puanla birebir aynı olan puan demektir.", "Anketi en hızlı ve eksiksiz dolduran kişinin verdiği puandır.", "Gözlenen davranışla tutarlı puan demektir; yüksek de olabilir, düşük de."], ans: 3,
            enOpts: ["It always means a high rating, because teammates should be supported.", "It means a rating exactly the same as the one the professor gave.", "It is the rating given by whoever fills in the survey fastest and completely.", "It means a rating consistent with observed behavior, which may be high or low."] }],
          why: "“High-quality ratings are consistent with observed behavior, which may or may not be high ratings” (s. 70)." },
        { q: "CATME hangi tür ölçek kullanır?",
          en: "What kind of scale does CATME use?",
          fields: [{ kind: "mc", opts: ["A 50-question inventory for each teammate", "A behaviorally anchored rating scale", "A single overall score per teammate", "A ranking of teammates from best to worst"], ans: 1 }],
          why: "Her puan seviyesi örnek davranışlarla tanımlanır: behaviorally anchored rating scale (s. 67–68)." },
        { q: "Bir öğrenci F24 Q4'e “reliability: sözünü tutar, payına düşen işi zamanında bitirir” diye cevap veriyor. Bu özellik en çok hangi CATME boyutuyla örtüşür?",
          en: "A student answers “What is the first character you would look for in your team members?” with “reliability: keeps commitments and finishes a fair share of the work on time.” Which CATME dimension does this match best?",
          fields: [{ kind: "mc", opts: ["Expecting quality", "Interacting with teammates", "Keeping the team on track", "Contributing to the team's work"], ans: 3 }],
          why: "Keeps commitments, completes assignments on time: contributing to the team's work (s. 68)." },
        { q: "Robin çok bilgili ve işin büyük kısmını yapıyor, ama arkadaşlarının katkı denemelerini engelliyor ve Pat'e “bu takım için yeterince zeki değilsin” diyor. Robin hangi CATME boyutunda zayıftır?",
          en: "Robin is very knowledgeable and does a big chunk of the work, but discourages teammates' attempts to contribute and told Pat “You are not smart enough to be on this team.” In which CATME dimension is Robin deficient?",
          fields: [{ kind: "mc", opts: ["Having relevant knowledge, skills, and abilities", "Interacting with teammates", "Contributing to the team's work", "Expecting quality"], ans: 1 }],
          why: "Ignores, bosses, makes fun of teammates: interacting with teammates'te deficient davranışlar (s. 68, 70–71)." }
      ]},

      { type: "teach", h: "F25'ten üç terim: team charter, round-robin, assumed shared knowledge", html: `
<p>Bu üç terim kitapta yok; F25 sınavında ders slaytlarından geldi. Tanımlar <b>F25 cevap anahtarından</b>.</p>
<table>
<tr><th>Terim</th><th>Anlam (F25 anahtarı)</th></tr>
<tr><td><b>Team charter</b></td><td>Takımın kuruluş belgesi. Çoğunlukla <b>team roles and communication expectations</b> içerir (Q7). Maaş, satın alma formu, test sonucu içermez.</td></tr>
<tr><td><b>Round-robin</b></td><td>Açık tartışmadan önce <b>her üyenin sırayla birer kez konuştuğu</b> toplantı tekniği (Q9).</td></tr>
<tr><td><b>Assumed shared knowledge</b></td><td>Mühendislik takımlarında <b>miscommunication</b>'ın (yanlış anlaşmanın) yaygın nedeni: herkesin aynı şeyi bildiğini varsaymak (Q8).</td></tr>
</table>
<p>Kitapta bunlara yakın fikirler var: haftalık sabit toplantı saati “toplantı olduğunu bilmiyordum” ve “mesajı almadım” sorunlarını önler (s. 72). Bir mühendis de “misunderstanding and miscommunication leads to delays, poor quality, and frustration” der (s. 87).</p>
<div class="box">Ezber cümlesi: <b>charter = roles + communication</b>; <b>round-robin = sırayla birer kez</b>; <b>miscommunication = assumed shared knowledge</b>.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>A team charter is a document that defines the team. It most often includes team roles and communication expectations.</p><p>Round-robin is a meeting technique. Each team member speaks once, in turn, before the open discussion.</p><p>Assumed shared knowledge is a common cause of miscommunication in engineering teams. It means that people assume that everybody already knows the same things.</p></div>` },

      { type: "check", id: "t3-c5", title: "Team charter, round-robin, shared knowledge", pool: [
        { q: "Bir team charter'da en çok hangisini bulmayı beklersin?",
          en: "Which item would you most expect to find in a team charter?",
          fields: [{ kind: "mc", opts: ["The budget and the list of parts the team will buy", "The team members' roles and how the team will communicate", "The final test results of the team's prototype", "The salary and working hours of each member"], ans: 1 }],
          why: "F25 Q7 anahtarı: team roles and communication expectations. Kitapta bu terim yok." },
        { q: "Açık tartışmaya geçmeden önce her üyenin sırayla birer kez konuştuğu toplantı tekniğine ne denir?",
          en: "A meeting technique in which each team member speaks once, in turn, before open discussion is called a _________.",
          fields: [{ kind: "text", accept: ["round-robin", "round robin", "roundrobin"] }],
          why: "Round-robin (F25 Q9 anahtarı; kitapta yok)." },
        { q: "Amira raporunda “standart testi yaptık” yazıyor ve herkesin hangi testi kastettiğini bildiğini sanıyor. Ekip arkadaşı başka bir test yapıyor. Bu yanlış anlaşmanın kaynağı nedir?",
          en: "Amira writes “we ran the standard test” and assumes everyone knows which test she means, but a teammate runs a different test. What is the source of this miscommunication?",
          fields: [{ kind: "mc", opts: ["Structured documentation", "Assumed shared knowledge", "A weekly standing meeting", "A responsibility matrix"], ans: 1 }],
          why: "Herkesin aynı şeyi bildiğini varsaymak: assumed shared knowledge (F25 Q8 anahtarı)." },
        { q: "Round-robin tekniğinin amacı nedir?",
          en: "What is the purpose of the round-robin technique?",
          fields: [{ kind: "mc", opts: ["Toplantıyı en kıdemli üyenin yönetmesini sağlamak", "Oylamayı gizli yapmak", "Toplantı süresini iki katına çıkarmak", "Açık tartışmadan önce her üyenin bir kez söz almasını sağlamak"], ans: 3,
            enOpts: ["To let the most senior member run the meeting", "To make the vote secret", "To double the length of the meeting", "To make sure each member speaks once before open discussion"] }],
          why: "Herkes sırayla bir kez konuşur, sonra açık tartışma (F25 Q9 anahtarı)." },
        { q: "Takım rollerini ve iletişim beklentilerini yazan belgeye ne denir?",
          en: "The document that sets out the team's roles and communication expectations is called a _________.",
          fields: [{ kind: "text", accept: ["team charter", "charter", "a team charter"] }],
          why: "Team charter (F25 Q7 anahtarı)." },
        { q: "Kitaba göre haftalık sabit bir toplantı saati hangi sorunu önler?",
          en: "According to the book, what problem does a standing weekly meeting time prevent?",
          fields: [{ kind: "mc", opts: ["Bütçenin proje ortasında aşılması sorununu", "Kriterlerin çözümlerden sonra seçilmesi sorununu", "“Toplantı olduğunu bilmiyordum” ya da “mesajı almadım” sorununu", "Raporda plagiarism çıkması sorununu"], ans: 2,
            enOpts: ["The problem of going over budget in the middle of the project", "The problem of choosing the criteria after the solutions", "The problem of “I did not know we were going to meet” or “I did not get the message”", "The problem of plagiarism appearing in the report"] }],
          why: "“A standing meeting time will prevent issues of ‘I did not know we were going to meet’” (s. 72)." }
      ]},

      { type: "teach", h: "Project timeline ve responsibility matrix", html: `
<p>Kitap proje planlamasını 3 adımda verir (s. 72–73).</p>
<p><b>Step 1: Project timeline</b></p>
<ul>
<li>Teslim tarihini herkes takvimine yazar. Diğer dersleri de düşün (4. haftada calculus sınavı var mı?).</li>
<li>Projeyi <b>tasks</b> ve <b>subtasks</b>'e böl: bütün görevler, verilecek kararlar, alınacak malzeme.</li>
<li>Sırayı düşün: hangi görev hangisinin sonucuna bağlı?</li>
<li><b>Teslim tarihinden geriye doğru</b> (working backwards) her göreve kendi due date'ini ver.</li>
<li>Haftada <b>en az bir kez</b>, sabit gün, saat ve yerde toplan.</li>
</ul>
<p><b>Geriye doğru planlama örneği:</b> Proje 30. günün sonunda teslim. Rapor yazımı 3 gün (28, 29, 30. günler). Prototip testi 5 gün sürüyor ve rapordan hemen önce bitmeli: test 23–27. günler. Yani test <b>en geç 23. gün</b> başlamalı.</p>
<p><b>Step 2: Responsibility matrix</b></p>
<ul>
<li>Görevler <b>sol tarafta alt alta</b>, üye adları <b>üstte yan yana</b>. Görevi kim üstlenirse onun sütununa işaret konur.</li>
<li>Her göreve <b>ikinci bir üye</b> atanır: yardım etmek ya da işi <b>kontrol etmek</b> için (“Completed by / Checked by”).</li>
<li>Amaç eşit <b>emek</b> dağılımı: biri 5 küçük iş, diğeri 1 büyük iş alabilir.</li>
</ul>
<p><b>Step 3: Team dynamics</b>: communication (zorlandığını söylemekten çekinme), trust and respect, <b>nothing is carved in stone</b>: timeline ve matris <b>çalışma belgeleridir</b>, her hafta gözden geçirip gerekirse değiştir (s. 73).</p>
<div class="exam"><b>Sınavda nasıl sorulur</b><br>
F24 Q4 (açık uçlu): “What is the first character you would look for in your team members? Why?” → bir özellik seç (ör. reliability) ve bir cümleyle gerekçelendir.<br>
F25 Q7 (MC): “A team charter most often includes:” → team roles and communication expectations.<br>
F25 Q8 (MC): “Which of the following is a common cause of miscommunication in engineering teams?” → assumed shared knowledge.<br>
F25 Q9 (boşluk): “A meeting technique where each team member speaks once in turn before open discussion is called a ___.” → round-robin.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>To plan a project, I first make a project timeline. I divide the project into tasks and subtasks, and I work backwards from the due date to give each task its own due date. The team should meet at least once a week at a fixed day, time and place.</p><p>Second, I make a responsibility matrix. The tasks are listed on the left and the team members across the top. I mark who is responsible for each task. A second member is assigned to help or to check the work. The goal is an equal share of effort.</p><p>The timeline and the matrix are working documents. Nothing is carved in stone, so the team should review and change them every week.</p></div>` },

      { type: "check", id: "t3-c6", title: "Timeline ve responsibility matrix", pool: [
        { q: "Proje 30. günün sonunda teslim. Rapor yazımı son 3 günü (28, 29, 30) kaplıyor. Prototip testi 5 gün sürüyor ve rapordan hemen önce bitmeli. Test en geç hangi gün başlamalı?",
          en: "A project is due at the end of day 30. Writing the report takes the last 3 days (days 28, 29, 30). Prototype testing takes 5 days and must finish just before the report starts. On which day must testing start at the latest?",
          fields: [{ kind: "num", val: 23 }],
          why: "Geriye doğru: test 27. gün bitmeli, 5 gün sürüyor: 23, 24, 25, 26, 27. Kitap teslim tarihinden geriye doğru planlamayı söyler (s. 72).",
          hint: "Teslim tarihinden geriye doğru say." },
        { q: "Kitaba göre görevlere due date verilirken hangi yönde planlanır?",
          en: "According to the book, in which direction do you plan when you give each task its due date?",
          fields: [{ kind: "mc", opts: ["Bugünden başlayıp ileriye doğru, iş bittikçe", "Proje teslim tarihinden geriye doğru", "Rastgele, her üyenin isteğine göre", "Sadece ilk görevin tarihi belirlenir"], ans: 1,
            enOpts: ["Forward from today, as tasks get finished", "Backwards from the project due date", "Randomly, according to each member's wishes", "Only the date of the first task is set"] }],
          why: "“Working backwards from the project due date, assign each task... its own due date” (s. 72)." },
        { q: "Bir responsibility matrix'te görevler ve üyeler nereye yazılır?",
          en: "In a responsibility matrix, where are the tasks and the team members written?",
          fields: [{ kind: "mc", opts: ["Members down the left side, tasks across the top", "Only in the minutes of each meeting", "Tasks down the left side, members' names across the top", "On a separate calendar for each member"], ans: 2 }],
          why: "Görevler sol tarafta alt alta, üye adları üstte yan yana (s. 72)." },
        { q: "Kitaba göre responsibility matrix'te her göreve neden ikinci bir üye atanır?",
          en: "According to the book, why should a second team member be assigned to each task in the responsibility matrix?",
          fields: [{ kind: "mc", opts: ["Görev sayısını iki katına çıkarmak için", "Profesöre rapor vermek için", "İşe yardım etmek ya da yapılan işi kontrol etmek için", "Birinci üyeyi işten tamamen çıkarmak için"], ans: 2,
            enOpts: ["To double the number of tasks", "To report to the professor", "To assist with the task or check the work completed", "To remove the first member from the task completely"] }],
          why: "“A second team member should be assigned to each task to assist or check the work” (s. 72)." },
        { q: "Kitaba göre takım haftada en az kaç kez sabit bir gün ve saatte toplanmalıdır?",
          en: "According to the book, at least how many times per week should the whole team meet at a consistent time and location?",
          fields: [{ kind: "num", val: 1 }],
          why: "“At least once a week at a consistent time and location” (s. 72)." },
        { q: "Kitaba göre project timeline ve responsibility matrix için hangisi doğrudur?",
          en: "According to the book, which statement about the project timeline and the responsibility matrix is correct?",
          fields: [{ kind: "mc", opts: ["Çalışma belgeleridir; her hafta gözden geçirilip gerekirse değiştirilir.", "Bir kez yazılır ve proje boyunca asla değiştirilmez.", "Sadece profesör değiştirebilir; takım yalnızca uygular.", "Proje bittikten sonra, rapora eklemek için yazılır."], ans: 0,
            enOpts: ["They are working documents; review them each week and adjust as needed.", "They are written once and never changed during the project.", "Only the professor can change them; the team only follows them.", "They are written after the project is finished, to be added to the report."] }],
          why: "“Nothing is carved in stone... treat both as working documents” (s. 73)." }
      ]}
    ]
  },
  {
    id: "t4", no: "T4", part: "teori",
    title: "Presentations and technical writing", sub: "5 W + 1 H, 4-S, slides, captions, ABC",
    minutes: 30, source: "Kitap Ch 4, s. 79–91 + F25 anahtarı",
    blocks: [
      { type: "teach", h: "Preplanning: 5 W + 1 H", html: `
<p>Aynı slaytlarla iki farklı hoca sunum yaptı: biri öğrencileri 15 dakika dinletti, diğeri 3 dakikada uyuttu (s. 80). Fark planlamada ve sunuşta.</p>
<p>Sunumu planlarken sorulacak sorular: <b>5 Ws and 1 H</b> (s. 80). Listede <b>ilk sırada Who</b> var.</p>
<table>
<tr><th>Soru</th><th>Ne düşünürsün</th></tr>
<tr><td><b>Who</b> is my audience?</td><td>Yaş grubu, demografi, konu hakkındaki önceki bilgisi, görüşleri</td></tr>
<tr><td><b>What</b> is my purpose?</td><td>Ne başarmak istiyorum, nasıl bir tepki bekliyorum, dinleyici ne kazanacak?</td></tr>
<tr><td><b>Where</b></td><td>Ekipman nerede, konuşma nerede?</td></tr>
<tr><td><b>When</b></td><td>Programda kaçıncıyım? İlk konuşmacı: dinleyici en dikkatli. Öğle yemeğinden önce: huzursuz (restless). Öğle yemeğinden sonra: uykulu (sleepy).</td></tr>
<tr><td><b>Why</b></td><td>Bu konuşmayı neden yapıyorum, dinleyici neden burada?</td></tr>
<tr><td><b>How</b> long?</td><td>Çok az insan <b>20 dakikadan</b> uzun odaklanabilir. Dinleyici “ne zaman oturacak” demeden, daha fazlasını isterken bitir.</td></tr>
</table>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Before a presentation, I plan with 5 Ws and 1 H. Who is my audience? What is my purpose? Where is the talk and where is the equipment? When am I in the schedule? Why am I giving this talk? How long should it be?</p><p>Who is the first question. The age, background, previous knowledge and opinions of the audience decide what I say. Very few people can focus for longer than 20 minutes. It is better to finish while the audience still wants more.</p></div>` },

      { type: "check", id: "t4-c1", title: "5 W + 1 H", pool: [
        { q: "Kitaba göre sunum preplanning listesindeki ilk soru hangisidir?",
          en: "According to the book, what is the first question on the preplanning list for a presentation?",
          fields: [{ kind: "mc", opts: ["Where will the talk be held?", "How long should I talk?", "When am I on the agenda?", "Who is my audience?"], ans: 3 }],
          why: "“Note that the first item in our list is who the audience is” (s. 80)." },
        { q: "Kitaba göre çok az insan kaç dakikadan uzun süre odaklanabilir?",
          en: "According to the book, only few people can focus for more than how many minutes?",
          fields: [{ kind: "num", val: 20 }],
          why: "“Only few people can focus for more than 20 minutes” (s. 80)." },
        { q: "Programda öğle yemeğinden hemen sonra konuşacaksın. Kitaba göre dinleyici o sırada nasıldır?",
          en: "You are scheduled to speak right after lunch. According to the book, how is the audience likely to be?",
          fields: [{ kind: "mc", opts: ["Most alert", "Restless", "Sleepy", "Excited"], ans: 2 }],
          why: "İlk konuşmacı: most alert; öğle öncesi: restless; öğle sonrası: sleepy (s. 80)." },
        { q: "Preplanning'in kısaltması: 5 W ve 1 _________ (harf ya da kelime yaz)",
          en: "The preplanning checklist is remembered as 5 Ws and 1 _________.",
          fields: [{ kind: "text", accept: ["h", "how", "how long"] }],
          why: "5 Ws and 1 H: Who, What, Where, When, Why, How long (s. 80)." },
        { q: "“Dinleyicilerin yaşı, konu hakkındaki önceki bilgisi ve görüşleri ne?” sorusu 5 W + 1 H'nin hangisine aittir?",
          en: "“What is the age group, prior knowledge and opinions of the listeners?” belongs to which of the 5 Ws and 1 H?",
          fields: [{ kind: "mc", opts: ["What", "Who", "Why", "Where"], ans: 1 }],
          why: "Who is my audience? (s. 80)." },
        { q: "“Bu konuşmayı neden yapıyorum? Dinleyici neden burada?” sorusu hangisine aittir?",
          en: "“Why am I giving this talk? Why is the audience here?” belongs to which of the 5 Ws and 1 H?",
          fields: [{ kind: "mc", opts: ["Why", "Who", "What", "When"], ans: 0 }],
          why: "Why (s. 80)." }
      ]},

      { type: "teach", h: "4-S formula ve üç parça", html: `
<p>Hangisi daha kolay anlaşılır? (s. 80)</p>
<ul>
<li>A: “While perambulating in the antithesis of the metropolis... my visual cortex perceived an ophidian.”</li>
<li>B: “I saw a snake while taking a relaxing walk in the woods.”</li>
</ul>
<p>Tabii ki B. Bunun için kitap <b>4-S formula</b>'yı verir (s. 80):</p>
<table>
<tr><th>S</th><th>Anlam</th></tr>
<tr><td><b>Shortness</b> (Short)</td><td>Kısa cümle, az ayrıntı, uzun konuşma yok.</td></tr>
<tr><td><b>Simplicity</b> (Simple)</td><td>Uzun, dolambaçlı ifadelerden kaçın.</td></tr>
<tr><td><b>Strength</b> (Strong)</td><td><b>Active voice</b> ve <b>action verbs</b>; passive voice ve “to be” fiilleri değil.</td></tr>
<tr><td><b>Sincerity</b> (Sincere)</td><td>Dinleyiciye empati, anlayış ve saygı göster.</td></tr>
</table>
<p><b>Üç yapısal parça</b> (s. 81):</p>
<ul>
<li><b>Introduction</b>: amaç dinleyicinin <b>ilgisini yakalamak</b> (hook). Konunun <b>onlar için</b> (senin için değil) en ilginç yanı ne?</li>
<li><b>Body</b>: ilgiyi korumak. <b>2–3 ana nokta</b>, her birine basit örnek, görsel destek.</li>
<li><b>Conclusion</b>: toparlamak. Ana noktaları <b>özetle</b>, dinleyiciye <b>teşekkür et</b>, birkaç <b>soru</b> al.</li>
</ul>
<p><b>Sunarken</b> (s. 85): rahatla, yavaş ve net konuş, göz teması kur, sesli prova yap, erken git ve teknolojiyi kontrol et. Yapma: arkanı dönmek, metinden okumak, uygunsuz şaka, sürekli “um”, sakız, not kâğıtlarıyla oynamak.</p>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>The 4-S formula says that a good presentation is short, simple, strong and sincere. Shortness: short sentences and little detail. Simplicity: avoid long, complicated phrases. Strength: use active voice and action verbs, not passive voice. Sincerity: show empathy, understanding and respect to the audience.</p><p>A presentation has three parts. The introduction catches the attention of the audience. The body keeps their interest with two or three main points, simple examples and visual support. The conclusion summarizes the main points, thanks the audience and takes a few questions.</p></div>` },

      { type: "check", id: "t4-c2", title: "4-S ve sunum yapısı", pool: [
        { q: "4-S formula'nın dört S'si hangileridir?",
          en: "What are the four S's of the 4-S formula?",
          fields: [{ kind: "mc", opts: ["Slow, Silent, Smart, Smooth", "Short, Serious, Scientific, Structured", "Short, Simple, Strong, Sincere", "Simple, Slides, Speech, Summary"], ans: 2 }],
          why: "Shortness, Simplicity, Strength, Sincerity (s. 80)." },
        { q: "4-S formula'da Strength için kitap ne önerir?",
          en: "In the 4-S formula, what does the book recommend for Strength?",
          fields: [{ kind: "mc", opts: ["Speak as loudly as possible", "Use active voice and action verbs", "Use long, impressive words", "Show as many charts as possible"], ans: 1 }],
          why: "“Use active voice and action verbs, not passive voice and ‘to be’ verbs” (s. 80)." },
        { q: "Sunumun conclusion bölümünde ne yapılır?",
          en: "What should you do in the conclusion of a presentation?",
          fields: [{ kind: "mc", opts: ["Dinleyicinin ilgisini ilk kez yakalamak için bir hikâye anlatılır.", "Ana noktalar özetlenir, dinleyiciye teşekkür edilir ve birkaç soru alınır.", "Yeni ve ayrıntılı veriler sunulur.", "Bütün slaytlar baştan tekrar okunur."], ans: 1,
            enOpts: ["Tell a story to capture the audience's interest for the first time.", "Summarize the major points, thank the audience and allow a few questions.", "Present new and detailed data.", "Read all the slides again from the beginning."] }],
          why: "Conclusion: summarize, show appreciation, allow a few questions (s. 81)." },
        { q: "Kitaba göre sunumun body bölümü kaç ana noktaya bölünmelidir?",
          en: "According to the book, into how many main points should the body of a presentation be divided?",
          fields: [{ kind: "mc", opts: ["One", "Five or six", "Two or three", "As many as possible"], ans: 2 }],
          why: "“Divide the presentation into two or three main points” (s. 81)." },
        { q: "Sunumun introduction bölümünün amacı nedir?",
          en: "What is the purpose of the introduction of a presentation?",
          fields: [{ kind: "mc", opts: ["To capture the interest of the audience", "To summarize the major points", "To answer the audience's questions", "To show all of the collected data"], ans: 0 }],
          why: "Introduction: to capture the interest of the audience (s. 81)." }
      ]},

      { type: "teach", h: "Slayt kuralları", html: `
<p>Kitabın “Helpful Hints” listesi (s. 81). Sınavda sayılar sorulur, ezberle:</p>
<table>
<tr><th>Kural</th><th>Değer</th></tr>
<tr><td>Slayt başına kavram</td><td><b>1</b></td></tr>
<tr><td>Slayt başına en fazla satır</td><td><b>6</b></td></tr>
<tr><td>Slayt başına ortalama konuşma</td><td><b>60 saniye</b> (15 dakikalık sunum ≈ 15 slayt)</td></tr>
<tr><td>Font</td><td>En az <b>18 pt</b>, tercihen <b>24 pt</b> ve üstü (eksen yazıları, tablo başlıkları dahil)</td></tr>
<tr><td>Yazı biçimi</td><td>Tam cümle değil <b>bullet points</b></td></tr>
<tr><td>Renk</td><td>Yüksek kontrast; <b>açık zemin, koyu yazı</b>. Siyah zemin beyaz yazıdan kaçın. Sarı ve pastel renklerden kaçın.</td></tr>
</table>
<ul>
<li>Mümkünse yatay (landscape) slayt.</li>
<li>Veriyi liste ya da tablo yerine <b>basit grafikle</b> göster. Tablo şartsa birkaç slayta böl.</li>
<li>Süslü font (cursive) ve <b>tamamı büyük harf</b> kullanma.</li>
<li>Arka planı sade tut, animasyonu azalt, bütün slaytlarda <b>aynı arka plan</b>.</li>
</ul>
<div class="box">F25 Q10: “Which of the following improves the clarity of a technical presentation slide?” → concise bullet points and readable font sizes. Uzun paragraf, tek slaytta çok sayıda karmaşık grafik ve rapordan kopyalanmış tam sayfa metin yanlış şıklardı.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>A good slide has one concept and no more than six lines. On average, I speak for about 60 seconds per slide. The font size must be at least 18 pt, and preferably 24 pt or larger. I use bullet points, not full sentences. I use high contrast, such as dark text on a light background. I avoid all capital letters, and I use the same simple background on every slide.</p><p>Model answer (F25 Q10): Concise bullet points and readable font sizes improve the clarity of a technical slide. Long paragraphs and too many complex graphs make the slide hard to read.</p></div>` },

      { type: "check", id: "t4-c3", title: "Slayt kuralları", pool: [
        { q: "Kitaba göre bir slaytta en fazla kaç satır olmalıdır?",
          en: "According to the book, what is the maximum number of lines per slide?",
          fields: [{ kind: "num", val: 6 }],
          why: "“Use no more than six lines per slide” (s. 81)." },
        { q: "Kitabın “slayt başına ortalama 60 saniye” kuralına göre 15 dakikalık bir sunum için yaklaşık kaç slayt hazırlarsın?",
          en: "Using the book's rule of about 60 seconds of speech per slide, approximately how many slides would you prepare for a 15-minute talk?",
          fields: [{ kind: "num", val: [14, 16] }],
          why: "15 dakika × 60 s = 900 s; 900 / 60 = 15 slayt (s. 81)." },
        { q: "Bir teknik sunum slaytını daha anlaşılır yapan hangisidir?",
          en: "Which of the following makes a technical presentation slide clearer?",
          fields: [{ kind: "mc", opts: ["Full sentences copied from the written report", "Several complex charts on the same slide", "A few short bullet points in a large font", "A different background on every slide"], ans: 2 }],
          why: "Bullet points ve en az 18 pt font (s. 81); F25 Q10 anahtarı aynı." },
        { q: "Kitaba göre slaytlarda font en az kaç point olmalıdır?",
          en: "According to the book, what is the minimum font size (in points) for slides?",
          fields: [{ kind: "num", val: 18 }],
          why: "At least 18 points, preferably no less than 24 (s. 81)." },
        { q: "Kitaba göre slaytlarda hangi renk düzeni kullanılmalıdır?",
          en: "According to the book, which color scheme should be used on slides?",
          fields: [{ kind: "mc", opts: ["Black background with white text", "Light background with dark text", "Green background with white text", "Yellow text on a pastel background"], ans: 1 }],
          why: "“Use a light background and dark print to keep the room brighter. Avoid black slides with white text” (s. 81)." },
        { q: "Aşağıdakilerden hangisi kitabın slayt önerilerinden biridir?",
          en: "Which of the following is one of the book's recommendations for slides?",
          fields: [{ kind: "mc", opts: ["Her slaytta farklı bir arka plan ve farklı bir renk düzeni kullan.", "Önemli kelimeleri dikkat çeksin diye tamamen büyük harflerle yaz.", "Dinleyicinin ilgisini canlı tutmak için bol animasyon kullan.", "Veriyi mümkünse liste ya da tablo yerine basit bir grafikle göster."], ans: 3,
            enOpts: ["Use a different background and a different color scheme on every slide.", "Write important words in all capitals so that they attract attention.", "Use plenty of animation to keep the audience interested.", "Present data in simple graphs rather than in lists or tables."] }],
          why: "“Present data in simple graphs rather than in lists or tables” (s. 81). Diğer üçünden kaçınılmalı." },
        { q: "Kitabın kuralına göre 6 slaytlık bir sunum yaklaşık kaç dakika sürer?",
          en: "Using the book's rule of thumb, about how many minutes does a 6-slide presentation last?",
          fields: [{ kind: "num", val: [5, 7] }],
          why: "Slayt başına ortalama 60 saniye: 6 slayt ≈ 6 dakika (s. 81)." }
      ]},

      { type: "teach", h: "Dinleyiciye göre içerik (F24 Q5)", html: `
<p>F24 Q5: “How is your presentation content of your designed software going to change if you present it to an investor, or to your team members?”</p>
<p>Cevabın temeli preplanning'in ilk sorusu: <b>Who is my audience?</b> (s. 80). Kitapta bir mühendis şöyle der: mesajı dinleyiciye göre uyarlamak, <b>kabul ile ret arasındaki farktır</b> (s. 87). Kitabın açılışı da aynı fikri verir: harika bir fikrin olabilir ama bir gün birini 200 milyon dolar vermeye ikna etmen gerekecek (s. 79).</p>
<table>
<tr><th></th><th>Investor</th><th>Team members</th></tr>
<tr><td>Purpose (What)</td><td>İkna etmek, para almak</td><td>Bilgi paylaşmak, işi bölmek</td></tr>
<tr><td>İçerik</td><td>Hangi problemi çözüyor, pazar, maliyet, beklenen kazanç, zaman planı</td><td>Mimari, kod yapısı, algoritmalar, bilinen hatalar, kim ne yapacak</td></tr>
<tr><td>Dil</td><td>Teknik olmayan, kısa</td><td>Teknik, ayrıntılı</td></tr>
<tr><td>Görsel</td><td>Demo, basit grafikler</td><td>Akış şemaları, kod parçaları</td></tr>
</table>
<div class="box">Sınavda tabloyu iki üç cümleye çevir: “For an investor I would focus on the problem, the market, cost and profit, using non-technical language and a short demo. For my team I would focus on the architecture, algorithms, known bugs and who does what, in technical detail.”</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Model answer (F24 Q5): My content depends on my audience, so I first ask who my audience is. For an investor, my purpose is to convince them to give money. I would talk about the problem the software solves, the market, the cost, the expected profit and the schedule. I would use non-technical language and a short demo. For my team members, my purpose is to share information and divide the work. I would talk about the architecture, the algorithms, the known bugs and who does what, in technical detail.</p></div>` },

      { type: "check", id: "t4-c4", title: "Dinleyiciye göre sunum", pool: [
        { q: "Yazdığın yazılımı bir yatırımcıya sunuyorsun. Hangi içerik en uygundur?",
          en: "You are presenting the software you designed to an investor. Which content is most appropriate?",
          fields: [{ kind: "mc", opts: ["Kodun ayrıntılı mimarisi, algoritmalar ve bilinen hatalar", "Çözdüğü problem, pazar, maliyet, beklenen kazanç ve zaman planı", "Kim hangi modülü yazacak listesi", "Bütün test verileri ham tablo halinde"], ans: 1,
            enOpts: ["The detailed architecture of the code, the algorithms and the known bugs", "The problem it solves, the market, the cost, the expected profit and the schedule", "A list of who will write which module", "All of the test data as raw tables"] }],
          why: "Who is my audience? Yatırımcı ikna edilmek ister (s. 80; F24 Q5)." },
        { q: "Aynı yazılımı takım arkadaşlarına sunuyorsun. Hangi içerik en uygundur?",
          en: "You are presenting the same software to your team members. Which content is most appropriate?",
          fields: [{ kind: "mc", opts: ["Pazar büyüklüğü, ürünün fiyatı ve yatırımın ne zaman geri döneceği", "Mimari, kod yapısı, algoritmalar, bilinen hatalar ve iş bölümü", "Şirketin logosu, renkleri ve kısa bir reklam videosu", "Sadece ürünün adı ve akılda kalan tek cümlelik bir slogan"], ans: 1,
            enOpts: ["Market size, the product price and when the investment will pay back", "Architecture, code structure, algorithms, known bugs and the division of work", "The company logo, its colors and a short advertising video", "Only the product name and a catchy one-sentence slogan"] }],
          why: "Takımın amacı bilgi paylaşmak ve işi bölmek; dil teknik ve ayrıntılı olur (s. 80; F24 Q5)." },
        { q: "Yatırımcıya yapılan bir sunumda dil nasıl olmalıdır?",
          en: "What kind of language should you use when presenting to an investor?",
          fields: [{ kind: "mc", opts: ["Teknik olmayan, kısa ve dinleyicinin ilgisine göre", "Teknik terimlerle dolu ve çok ayrıntılı", "Sadece kod parçalarından oluşan", "Takım içi kısaltmalarla dolu"], ans: 0,
            enOpts: ["Non-technical, short and matched to the listener's interests", "Full of technical terms and very detailed", "Made up only of code fragments", "Full of the team's internal abbreviations"] }],
          why: "Dinleyicinin önceki bilgisine göre konuş (Who, s. 80); Shortness ve Simplicity (s. 80)." },
        { q: "Kitaba göre “Who is my audience?” sorusunu yanıtlarken neleri bilmelisin?",
          en: "According to the book, what should you know when answering “Who is my audience?”",
          fields: [{ kind: "mc", opts: ["Their age group, demographics, prior knowledge and opinions", "Only the number of people who will be in the room", "Only the size and the shape of the room", "Only the time of day when the talk will be given"], ans: 0 }],
          why: "“Know the age group, demographics, prior knowledge about the topic, and what positions or opinions they may hold” (s. 80)." },
        { q: "Kitaba göre introduction'da dinleyiciyi yakalamak için konunun hangi yanını öne çıkarırsın?",
          en: "According to the book, which aspect of your subject should you put forward in the introduction to hook the audience?",
          fields: [{ kind: "mc", opts: ["Konunun senin için en ilginç ve heyecan verici yanını", "Konunun bütün ayrıntılarını baştan sona sırayla", "Kendi özgeçmişini ve bu konudaki deneyimini", "Konunun dinleyici için en ilginç ve ilgili yanını"], ans: 3,
            enOpts: ["The aspect that is most interesting and exciting to you", "All the details of the subject, in order from start to end", "Your own résumé and your experience with the subject", "The aspect that the audience would find most interesting and relevant"] }],
          why: "“What is it about your subject that they (and not necessarily you) would find most interesting and relevant?” (s. 81)." }
      ]},

      { type: "teach", h: "Technical writing kuralları", html: `
<p>Teknik belgeler çoğu zaman canlı sunumdan daha önemlidir (s. 85). Kurallar (s. 85–87):</p>
<ul>
<li>Açık ve kesin dil; abartma yok. Metin akıcı ilerlesin, çok uzun cümle kurma.</li>
<li>Mümkünse 10 pt font, 1.5 satır aralığı.</li>
<li>Genellikle <b>past tense</b> (geçmiş zaman) kullan; bir paragrafta zamanları tutarlı tut.</li>
<li>Okurun bilmeyebileceği terimleri, kısaltmaları ve denklemdeki sembolleri tanımla.</li>
<li>Kişisel duygu değil <b>gerçekler ve çıkarımlar</b>. Profesyonel ton; duygusal ya da alaycı olma.</li>
<li>Bütün tablo ve şekilleri <b>numarala ve başlık (caption) ver</b>, metinde bunlara atıf yap:</li>
</ul>
<table>
<tr><th>Nesne</th><th>Numara ve caption nerede?</th></tr>
<tr><td><b>Table</b></td><td><b>Üstte</b> (above)</td></tr>
<tr><td><b>Figure</b></td><td><b>Altta</b> (below)</td></tr>
</table>
<p><b>Sayı yazımı</b> (s. 87):</p>
<table>
<tr><th>Kural</th><th>Yanlış</th><th>Doğru</th></tr>
<tr><td>Cümle başındaki sayıyı yazıyla yaz</td><td>23 points were outliers.</td><td>Twenty-three points were outliers.</td></tr>
<tr><td>Ondalıkta baştaki sıfırı koru</td><td>.23 dollars per gram</td><td>$0.23 per gram</td></tr>
<tr><td>Uzun sayıyı yazıyla yazma</td><td>one thousand, two hundred fifty-five grams</td><td>1,255 grams</td></tr>
<tr><td>Dolar sembolü kullan</td><td>four thousand dollars</td><td>$4,000</td></tr>
<tr><td>Makul significant figures</td><td>2.5029 inches</td><td>2.5 inches</td></tr>
</table>
<p><b>Proofread</b>: birkaç kez oku. <b>İki kez oku: bir kez teknik içerik, bir kez akış için.</b> Bir kez sesli oku. Spell check “whether/weather” farkını yakalamaz (s. 86).</p>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>In technical writing, I use clear and exact language. I usually write in the past tense and I keep the tense consistent in a paragraph. I define terms, abbreviations and symbols that the reader may not know. I write facts and conclusions, not personal feelings, in a professional tone.</p><p>I number every table and figure and give it a caption. A table caption goes above the table. A figure caption goes below the figure. I refer to each of them in the text.</p><p>For numbers: I write out a number at the beginning of a sentence, I keep the zero before a decimal point ($0.23, not .23), and I use reasonable significant figures. Finally, I proofread the document more than once.</p></div>` },

      { type: "check", id: "t4-c5", title: "Technical writing kuralları", pool: [
        { q: "Kitaba göre tablo ve şekillerin numara ve caption'ı nereye yazılır?",
          en: "According to the book, where are the number and caption placed for tables and for figures?",
          fields: [{ kind: "mc", opts: ["Both captions go above", "Tables: caption below; figures: caption above", "Both captions go below", "Tables: caption above; figures: caption below"], ans: 3 }],
          why: "Tables are numbered and captioned above; figures below (s. 86)." },
        { q: "Kitaba göre teknik yazıda genellikle hangi fiil zamanı tercih edilir?",
          en: "According to the book, which verb tense is generally preferred in technical writing?",
          fields: [{ kind: "mc", opts: ["Future tense", "Past tense", "Present continuous tense", "Any tense, mixed freely"], ans: 1 }],
          why: "“Generally, prefer past tense verbs. Keep verb tenses in agreement within a paragraph” (s. 85)." },
        { q: "Kitaba göre hangi cümle doğru yazılmıştır?",
          en: "According to the book, which sentence is written correctly?",
          fields: [{ kind: "mc", opts: ["23 points were outliers.", "Twenty-three points were outliers.", "The bridge cost .23 dollars per gram.", "The average was one thousand, two hundred fifty-five grams."], ans: 1 }],
          why: "Cümle başındaki sayı yazıyla; baştaki sıfır korunur; uzun sayı rakamla yazılır (s. 87)." },
        { q: "Kitabın sayı yazma kurallarına göre aşağıdaki cümlelerden hangisi doğrudur?",
          en: "According to the book, which of the following sentences follows the rules for writing numbers?",
          fields: [{ kind: "mc", opts: ["The bridge cost four thousand dollars.", "The bolt is 2.5029 inches long.", "The bridge cost $0.23 per gram.", "The bridge cost .23 dollars per gram."], ans: 2 }],
          why: "Dolar sembolü ve baştaki sıfır: $0.23 (s. 87). 2.5029 makul olmayan sig fig sayısı." },
        { q: "Kitaba göre bir belgeyi iki kez okurken hangi iki şeye bakarsın?",
          en: "The book says to read your document twice. What do you check in each reading?",
          fields: [{ kind: "mc", opts: ["Bir kez yazım hataları, bir kez noktalama için", "Bir kez teknik içerik, bir kez akış için", "Bir kez sesli, bir kez sessiz okumak için", "Bir kez giriş, bir kez sonuç bölümü için"], ans: 1,
            enOpts: ["Once for spelling, once for punctuation", "Once for technical content, once for flow", "Once aloud, once silently", "Once for the introduction, once for the conclusion"] }],
          why: "“Read it twice: once for technical content and once for flow” (s. 86)." },
        { q: "Bir rapordaki figure'ın numarası ve caption'ı figure'ın neresine yazılır? (above / below)",
          en: "In a report, is a figure's number and caption placed above or below the figure?",
          fields: [{ kind: "text", accept: ["below", "under", "beneath", "underneath", "below the figure"] }],
          why: "Figures are numbered and captioned below the figure (s. 86)." }
      ]},

      { type: "teach", h: "Methods section ve rapor bölümleri", html: `
<p>F25 Q11: “The section of a written report that explains <i>how</i> an engineer performed tests, calculations, or experiments is called the ___ section.” Cevap: <b>methods</b>. Bu terim kitapta yok; <b>F25 cevap anahtarından</b>.</p>
<p><b>Methods section</b>: testleri, hesapları ya da deneyleri <b>nasıl</b> yaptığını anlatan bölüm. Geçmiş zamanla yazılır: “The samples were measured three times with a digital caliper.”</p>
<p>Kitaptaki tek sayfalık <b>memo</b> şablonunun başlıkları (s. 91): To / From / Subject / Date, sonra</p>
<ul>
<li><b>Introduction</b>: memonun amacı, ne istendiği, hangi soruyu çözdüğün (ilk 3–4 cümle).</li>
<li><b>Results</b>: tablo ve şekiller (tablo caption'ı üstte, figure caption'ı altta).</li>
<li><b>Discussion</b>: verileri nasıl elde ettiğin, eğilimlerin anlamı, hatalar, teoriden farklar; seçmediğin seçenekleri neden seçmediğin.</li>
<li><b>References</b>.</li>
</ul>
<div class="box">Ayırt et: “ne bulduk” = <b>results</b>; “nasıl yaptık” = <b>methods</b>; “bu ne anlama geliyor” = <b>discussion</b>.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>The methods section of a report explains how the engineer performed the tests, calculations or experiments. It is usually written in the past tense. For example: The samples were measured three times with a digital caliper.</p><p>The results section shows what we found, usually in tables and figures. The discussion section explains what the results mean, and mentions errors and differences from theory.</p></div>` },

      { type: "check", id: "t4-c6", title: "Methods section", pool: [
        { q: "Bir raporda mühendisin testleri, hesapları ya da deneyleri nasıl yaptığını anlatan bölüme ne denir? _________ section",
          en: "The section of a written report that explains how an engineer performed tests, calculations, or experiments is called the _________ section.",
          fields: [{ kind: "text", accept: ["methods", "method", "methodology", "methods section"] }],
          why: "Methods section (F25 Q11 anahtarı; kitapta bu başlık yok)." },
        { q: "“Numuneler 20 °C'de, her biri üç kez, dijital bir kumpasla ölçüldü.” Bu cümle raporun hangi bölümüne aittir?",
          en: "“The samples were measured three times each at 20 °C with a digital caliper.” In which section of a report does this sentence belong?",
          fields: [{ kind: "mc", opts: ["Results", "References", "Methods", "Conclusion"], ans: 2 }],
          why: "Ölçümün nasıl yapıldığını anlatıyor: methods (F25 Q11 anahtarı). Cümle past tense, kitabın önerdiği gibi (s. 85)." },
        { q: "Kitaptaki tek sayfalık memo şablonunun ana başlıkları hangileridir?",
          en: "What are the main headings of the one-page memo template in the book?",
          fields: [{ kind: "mc", opts: ["Abstract, Theory, Appendix, Index", "Introduction, Results, Discussion, References", "Title, Budget, Schedule, Signature", "Hook, Story, Joke, Thanks"], ans: 1 }],
          why: "Memo template: Introduction, Results, Discussion, References (s. 91)." },
        { q: "Kitaba göre teknik yazıda hangisi yapılmalıdır?",
          en: "According to the book, which of the following should you do in technical writing?",
          fields: [{ kind: "mc", opts: ["Okuru etkilemek için abartılı ifadeler kullanılır.", "Kısaltmalar tanımlanmadan kullanılır.", "Duygusal ve şakacı bir üslup tercih edilir.", "Kişisel duygular yerine gerçekler ve çıkarımlar sunulur."], ans: 3,
            enOpts: ["Use exaggerated statements to impress the reader.", "Use abbreviations without defining them.", "Prefer an emotional and joking style.", "Present facts or inferences rather than personal feelings."] }],
          why: "“Present facts or inferences rather than personal feelings”; abartma, terimleri tanımla, profesyonel ton (s. 85–86)." },
        { q: "Bir raporun methods section'ı neyi anlatır?",
          en: "What does the methods section of a report describe?",
          fields: [{ kind: "mc", opts: ["How the tests, calculations, or experiments were performed", "Who paid for the project and how much it cost", "How the engineer felt while doing the project", "Which books and websites were cited in the report"], ans: 0 }],
          why: "Methods = nasıl yapıldı (F25 Q11 anahtarı)." }
      ]},

      { type: "teach", h: "Kaynak değerlendirme: ABC", html: `
<p>İnternette herkes her şeyi yazabilir (düz dünya topluluğu, “nesli tükenen ağaç ahtapotu” sitesi). Kaynağı kullanmadan önce doğrula. <b>ABCs of evaluating information</b> (s. 88):</p>
<table>
<tr><th>Harf</th><th>Soru</th></tr>
<tr><td><b>A</b>uthority</td><td>Siteden kim sorumlu? Yazarın uzmanlığı ne? .com mu, .gov mu, .edu mu?</td></tr>
<tr><td><b>B</b>ias</td><td>Yazının amacı ne? Açık bir taraflılık var mı? Yazar konuyu nesnel mi anlatıyor?</td></tr>
<tr><td><b>C</b>urrency</td><td>Bilgi ne zaman oluşturuldu ya da en son ne zaman güncellendi?</td></tr>
</table>
<p>Bir adım ileri (s. 88): uzmanlarca incelenmiş kaynak kullan (<b>peer review</b>), bilgiyi başka kaynaklarla <b>karşılaştır</b> (compare) ve bir ya da daha fazla farklı kaynakla <b>doğrula</b> (<b>corroborate</b>). Kural: “Do not use information unless you have corroborated it.”</p>
<div class="exam"><b>Sınavda nasıl sorulur</b><br>
F24 Q5 (açık uçlu, 2 puan): yazılımını yatırımcıya ve takım arkadaşlarına sunarken içerik nasıl değişir? → Who is my audience; amaç, içerik, dil, görsel farkı.<br>
F25 Q10 (MC): “Which of the following improves the clarity of a technical presentation slide?” → using concise bullet points and readable font sizes.<br>
F25 Q11 (boşluk): raporun testlerin <i>nasıl</i> yapıldığını anlatan bölümü → methods.<br>
Kitaptan sayılar da sorulabilir: 6 satır, 60 s, 18/24 pt, 20 dakika, table caption üstte, figure caption altta.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>I evaluate information with the ABCs. A is authority: who is responsible for the source and what is the author's expertise? B is bias: what is the purpose of the source, and is the author objective? C is currency: when was the information created or last updated?</p><p>I should also compare the information with other sources and corroborate it with one or more different sources. I do not use information unless I have corroborated it.</p></div>` },

      { type: "check", id: "t4-c7", title: "ABC ile kaynak değerlendirme", pool: [
        { q: "Kaynak değerlendirmenin ABC'si hangi kelimelerden oluşur?",
          en: "What do the ABCs of evaluating information stand for?",
          fields: [{ kind: "mc", opts: ["Accuracy, Brevity, Clarity", "Audience, Body, Conclusion", "Analogy, Bounds, Calculation", "Authority, Bias, Currency"], ans: 3 }],
          why: "Authority, Bias, Currency (s. 88)." },
        { q: "“Bu bilgi ne zaman oluşturuldu ya da en son ne zaman güncellendi?” sorusu ABC'nin hangisidir?",
          en: "“When was the information created or last updated?” belongs to which of the ABCs?",
          fields: [{ kind: "mc", opts: ["Authority", "Bias", "Currency", "Corroboration"], ans: 2 }],
          why: "Currency (s. 88)." },
        { q: "“Yazarın uzmanlığı ne? Site .gov mu, .edu mu?” sorusu ABC'nin hangisidir?",
          en: "“What are the author's credentials? Is it a .gov or an .edu site?” belongs to which of the ABCs?",
          fields: [{ kind: "mc", opts: ["Bias", "Authority", "Currency", "Peer review"], ans: 1 }],
          why: "Authority (s. 88)." },
        { q: "Bir kaynaktaki bilgiyi bir ya da daha fazla farklı kaynakla doğrulamaya ne denir? (Kitaptaki fiil: _________ the information)",
          en: "Verifying the facts from your source against one or more different sources is called to _________ the information.",
          fields: [{ kind: "text", accept: ["corroborate", "corroboration", "corroborating", "corroborate the information"] }],
          why: "Corroborate the information (s. 88)." },
        { q: "“Yazının amacı ne? Yazar konuyu nesnel mi anlatıyor?” sorusu ABC'nin hangisidir?",
          en: "“What is the purpose of the article? Is the author presenting an objective view?” belongs to which of the ABCs?",
          fields: [{ kind: "mc", opts: ["Currency", "Authority", "Corroboration", "Bias"], ans: 3 }],
          why: "Bias (s. 88)." }
      ]}
    ]
  },
  {
    id: "t5", no: "T5", part: "teori",
    title: "Estimation", sub: "Fermi problems, 4 methods, worked estimates",
    minutes: 40, source: "Kitap Ch 5, s. 107–113 + F24 Q1–2, F25 Q12–15",
    blocks: [
      { type: "teach", h: "Fermi problems", html: `
<p>İkinci Dünya Savaşı sırasındaki ilk atom bombası denemesinde (Trinity Test) Enrico Fermi, patlama dalgası geçerken küçük kâğıt parçalarını yere bıraktı ve ne kadar kaydıklarını ölçtü. Bu tek gözlemle patlamanın gücünü <b>10 kiloton</b> TNT olarak tahmin etti. Gerçek değer <b>19 kiloton</b> çıktı: Fermi'nin hatası 2 kattan azdı (s. 107).</p>
<p><b>Fermi problems</b>: o kadar çok bilgi eksiktir ki çözüm imkânsız görünür. Gerçek bir hesap için gereken bilgiden çok daha azıyla bir cevap bulmanı ister (s. 107–108). Örnekler: kafandaki saç sayısı, New York'taki piyano akortçusu sayısı.</p>
<ul>
<li>Cevap genellikle bir <b>order of magnitude</b> (10 kat) içinde doğrudur (s. 108).</li>
<li>Usta bir mühendis hesaptan önce cevabın <b>makul aralığını</b> bilir. Yukarı atılan beyzbol topu kaç saniyede düşer? Birkaç milisaniye saçma, birkaç ay da saçma; <b>birkaç saniye</b> makul. Hesaptan sonra kendine sor: “Is my answer reasonable?” (s. 108)</li>
<li>Farklı insanlar farklı varsayım yapar ve farklı cevap bulur. Bu normaldir; puanı <b>yöntem</b> getirir.</li>
</ul>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>A Fermi problem is a problem with so much missing information that it seems impossible to solve. I must find an answer with much less information than a real calculation needs. The answer is usually correct within an order of magnitude.</p><p>For example, Enrico Fermi estimated the power of the first atomic bomb test from pieces of paper that moved in the blast wave. He estimated 10 kilotons, and the real value was 19 kilotons.</p><p>After the calculation, I ask myself: Is my answer reasonable? Different people make different assumptions, and that is normal. The method is what matters.</p></div>` },

      { type: "check", id: "t5-c1", title: "Fermi problems", pool: [
        { q: "Çözmek için gereken bilginin çoğu eksik olan, çözümü imkânsız gibi görünen problemlere ne denir? _________ problems",
          en: "Problems in which so much information is missing that a solution seems impossible are called _________ problems.",
          fields: [{ kind: "text", accept: ["fermi", "fermi problems", "fermi problem"] }],
          why: "Fermi problems (s. 107–108)." },
        { q: "Kitaba göre bu tür tahminlerde bulunan cevap genellikle ne kadar doğrudur?",
          en: "According to the book, how accurate is the answer to such an estimation problem usually?",
          fields: [{ kind: "mc", opts: ["Exact to three significant figures, like a measurement", "Within 1% of the true value in most cases", "Always wrong by a factor of about 1000", "Within about an order of magnitude (a factor of 10)"], ans: 3 }],
          why: "“Often, the answer arrived at is only accurate to within an order of magnitude (a factor of 10) or less” (s. 108)." },
        { q: "Fermi patlamayı 10 kiloton tahmin etti; gerçek değer 19 kiloton çıktı. Gerçek değer tahminin yaklaşık kaç katıdır?",
          en: "Fermi estimated the blast at 10 kilotons; the true value was 19 kilotons. The true value is about how many times the estimate?",
          fields: [{ kind: "num", val: [1.8, 2.0] }],
          why: "19 / 10 = 1.9. Kitap: “in error by less than a factor of 2” (s. 107)." },
        { q: "Bir beyzbol topunu olabildiğince yükseğe atıyorsun. Kitaba göre topun yere düşme süresi için hangi cevap makuldür?",
          en: "You throw a baseball as high as possible. According to the book, which answer for the time until it hits the ground is reasonable?",
          fields: [{ kind: "mc", opts: ["A few milliseconds", "Several seconds", "Several hours", "Several months"], ans: 1 }],
          why: "Milisaniye ve aylar saçma, birkaç saniye makul (s. 108)." },
        { q: "Kitaba göre usta bir mühendis hesap yapmadan önce neyi bilir?",
          en: "According to the book, what does an accomplished engineer know before doing any calculations?",
          fields: [{ kind: "mc", opts: ["Cevabın üç significant figure'lık kesin değerini", "Hiçbir şeyi; hesap yapmadan bir şey bilinemez", "Makul cevabın hangi aralıkta olacağına dair genel bir fikri", "Sadece cevabın birimini"], ans: 2,
            enOpts: ["The exact answer to three significant figures", "Nothing; nothing can be known before calculating", "A general idea of the range of values that would be reasonable", "Only the unit of the answer"] }],
          why: "“Not an answer to three significant figures, but a general idea of the range of values that would be reasonable” (s. 108)." }
      ]},

      { type: "teach", h: "Genel ipuçları ve conservative yön", html: `
<p>Kitabın tahmin ipuçları (s. 110–111):</p>
<ol>
<li><b>Gereken doğruluğu belirle.</b> Order of magnitude yeter mi, ±%25 mi? Uydu yörüngesi çok yüksek doğruluk ister; bir sınıfın boya miktarı istemez.</li>
<li><b>“Ballpark” değer</b> çoğu zaman yeter: tipik bir evin alanı, otoyoldaki tipik hız.</li>
<li><b>Yüksek tarafta mı, düşük tarafta mı hata yapmak daha iyi?</b> İki neden:
<ul>
<li><b>Güvenlik:</b> köprünün <b>taşıyabileceği</b> yükü tahmin ediyorsan <b>düşük</b> tahmin et (gerçek kapasite tahminden büyük çıksın). Tek bir kirişin <b>taşıması gereken</b> yükü tahmin ediyorsan <b>yüksek</b> tahmin et (kiriş gerekenden güçlü olsun).</li>
<li><b>Hataların birbirini götürmesi:</b> iki sayıyı çarparken birini aşağı yuvarladıysan diğerini <b>yukarı</b> yuvarla.</li>
</ul></li>
<li><b>İkinci derece etkilere takılma.</b> Sınıftaki havanın kütlesini tahmin ederken mobilyaları çıkarmana gerek yok.</li>
</ol>
<div class="box"><b>Conservative estimate</b> = en kötü durumu (worst case) düşünen tahmin. Dayanım tahmin ediyorsan worst case <b>alt sınırdır</b>; gereken malzeme miktarını tahmin ediyorsan worst case <b>üst sınırdır</b> (s. 113).</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>First, I decide how accurate the estimate must be. An order of magnitude may be enough. A ballpark value is often enough for a typical quantity. I do not worry about second-order effects.</p><p>I must decide if it is better to estimate too high or too low. For safety, I estimate the load that a bridge can carry low, and the load that a beam must carry high. Also, if I round one number down in a multiplication, I round the other one up, so the errors cancel.</p><p>A conservative estimate is a worst-case estimate. For strength, the worst case is the lower bound. For the amount of material needed, the worst case is the upper bound.</p></div>` },

      { type: "check", id: "t5-c2", title: "Conservative yön", pool: [
        { q: "Bir köprünün güvenle taşıyabileceği yükü tahmin ediyorsun. Kitaba göre hangi yönde hata yapmak daha iyidir?",
          en: "You are estimating the weight a bridge can safely support. According to the book, in which direction is it better to err?",
          fields: [{ kind: "mc", opts: ["Err on the high side", "It does not matter", "Err on the low side", "Round to the nearest ten"], ans: 2 }],
          why: "Düşük tahmin: gerçek kapasite tahminden büyük olur (s. 111)." },
        { q: "Aynı köprüde tek bir kirişin taşıması gereken yükü tahmin ediyorsun. Hangi yönde hata yapmak daha iyidir?",
          en: "For the same bridge, you are estimating the load a single beam needs to support. In which direction is it better to err?",
          fields: [{ kind: "mc", opts: ["Err on the low side", "Err on the high side", "It does not matter", "Leave the load out"], ans: 1 }],
          why: "Yüksek tahmin: kiriş gerekenden güçlü tasarlanır (s. 111)." },
        { q: "İki sayının çarpımını tahmin ederken birini aşağı yuvarladın. Kitaba göre diğerini ne yapmalısın?",
          en: "When estimating the product of two numbers, you rounded one of them low. According to the book, what should you do with the other one?",
          fields: [{ kind: "mc", opts: ["Round it up", "Round it down too", "Keep all of its digits", "Replace it with 1"], ans: 0 }],
          why: "“If one of the terms is rounded low, the other should be rounded high” (s. 111)." },
        { q: "Bir odayı boyamak için gereken boya miktarını tahmin ediyorsun. Kitaba göre hangisi conservative'dir?",
          en: "You are estimating how much paint you need for a room. According to the book, which approach is conservative?",
          fields: [{ kind: "mc", opts: ["Duvar ölçülerini yukarı yuvarlamak ve sonucu bir sonraki tam kutuya tamamlamak", "Duvar uzunluk ve yüksekliğini aşağı yuvarlamak, eksik kalırsa sonra almak", "Kapı alanlarını mutlaka çıkarmak ve sonucu en yakın tam sayıya yuvarlamak", "Sadece en büyük duvarı ölçüp diğer duvarları hesaba katmamak"], ans: 0,
            enOpts: ["Round the wall dimensions up and round the result up to the next whole pail", "Round the wall length and height down and buy more later if needed", "Always subtract the door areas and round the result to the nearest whole number", "Measure only the largest wall and ignore the other walls"] }],
          why: "Uzunluk ve yüksekliği yukarı yuvarla, sonucu bir sonraki 5-gallon kovaya tamamla; kaba tahminde kapı alanını çıkarmamak da conservative (Example 5-5, s. 113)." },
        { q: "Sınıftaki havanın kütlesini tahmin ederken mobilyaların kapladığı hacmi düzeltmen gerekir mi?",
          en: "When estimating the mass of air in a classroom, do you need to correct for the presence of furniture?",
          fields: [{ kind: "mc", opts: ["Evet, her mobilyayı tek tek ölçmek gerekir.", "Hayır, bu önemsiz bir ayrıntıdır; takılma.", "Evet, aksi halde tahmin geçersiz olur.", "Hayır, çünkü havanın kütlesi yoktur."], ans: 1,
            enOpts: ["Yes, every piece of furniture must be measured.", "No, this is a minor effect; do not get bogged down.", "Yes, otherwise the estimate is invalid.", "No, because air has no mass."] }],
          why: "“Do not get bogged down with second-order or minor effects” (s. 111)." },
        { q: "Hangisi daha yüksek doğruluk gerektirir?",
          en: "Which of the following requires a higher level of accuracy?",
          fields: [{ kind: "mc", opts: ["The trajectory of a satellite", "The amount of paint for a classroom", "Both need the same accuracy", "Neither needs any accuracy"], ans: 0 }],
          why: "Önce gereken doğruluğu belirle; kitap bu iki örneği karşılaştırır (s. 110)." }
      ]},

      { type: "teach", h: "Dört tahmin yöntemi", html: `
<p>F24 Q2: “What are the methods you could use for estimating certain variables?” Cevap bu dört yöntem (s. 112–113):</p>
<table>
<tr><th>Yöntem</th><th>Ne yapar</th><th>Kitaptaki örnek</th></tr>
<tr><td><b>Estimation by analogy</b></td><td>Önceden bildiğin bir şeyle karşılaştır (anchor point).</td><td>Laptop ≈ defter kâğıdı (8.5 in × 11 in). Acre ≈ Amerikan futbolu sahasının %90'ı.</td></tr>
<tr><td><b>Estimation by aggregation</b></td><td>Parçaları ayrı ayrı tahmin et, topla ya da çarp.</td><td>Fayansı ayağınla karşılaştır, fayansları say, çarp: oda uzunluğu. Dondurma = külah + iki küre. Okulun yıllık pizza harcaması.</td></tr>
<tr><td><b>Estimation by upper and lower bounds</b></td><td>Tahminin fazla mı az mı olduğunu takip et; <b>conservative</b> (worst case) tahmin.</td><td>Boya: ölçüleri yukarı yuvarla, tam kovaya tamamla.</td></tr>
<tr><td><b>Estimation using modeling</b></td><td>Matematiksel model ya da istatistik kullan.</td><td>Tabağa yayılan bezelye daha hızlı soğur: surface area / volume oranı. Ayçiçeği çekirdeği: milyarda bir en uzunu ortalamadan 6 standart sapma büyük.</td></tr>
</table>
<div class="box">F25 Q12: “When making an estimation, which strategy is most commonly used?” → <b>breaking the problem into simpler, estimable components</b>. Bu aggregation'ın özüdür. Yanlış şıklar: varsayım yapmamak, birimleri yok saymak, sadece en küçük sayıları kullanmak.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>There are four methods for estimating a variable. (1) Estimation by analogy: I compare the quantity with something I already know, an anchor point. For example, a laptop is about the size of a sheet of notebook paper. (2) Estimation by aggregation: I estimate the parts separately and then add or multiply them. (3) Estimation by upper and lower bounds: I keep track of whether my estimate is too high or too low, and I make a conservative (worst-case) estimate. (4) Estimation using modeling: I use a mathematical model or statistics.</p><p>Model answer (F24 Q2): The methods for estimating variables are estimation by analogy, estimation by aggregation, estimation by upper and lower bounds, and estimation using modeling.</p><p>The most common strategy is to break the problem into simpler, estimable components. This is aggregation.</p></div>` },

      { type: "check", id: "t5-c3", title: "Dört yöntemi tanı", pool: [
        { q: "Bir fayansın boyunu ayağınla karşılaştırıyorsun, odadaki fayansları sayıp fayans boyuyla çarparak odanın uzunluğunu buluyorsun. Bu hangi yöntemdir?",
          en: "You compare a floor tile to your foot, count the tiles across the room and multiply to estimate the length of the room. Which method is this?",
          fields: [{ kind: "mc", opts: ["Estimation by analogy", "Estimation by aggregation", "Estimation by upper and lower bounds", "Estimation using modeling"], ans: 1 }],
          why: "Benzer parçaları sayıp çarpmak aggregation'dır; fayans boyunu ayakla bulmak içinde analogy kullanır (s. 112)." },
        { q: "Bir laptopun boyutunu bir defter kâğıdıyla karşılaştırarak tahmin ediyorsun. Bu hangi yöntemdir?",
          en: "You estimate the size of a laptop by comparing it to a sheet of notebook paper. Which method is this?",
          fields: [{ kind: "mc", opts: ["Estimation using modeling", "Estimation by upper and lower bounds", "Estimation by aggregation", "Estimation by analogy"], ans: 3 }],
          why: "Bilinen bir şeyle karşılaştırma: analogy (Example 5-2, s. 112)." },
        { q: "Tabağa yayılan bezelyelerin kâsedekilerden neden daha hızlı soğuduğunu surface area / volume oranıyla açıklıyorsun. Bu hangi yöntemdir?",
          en: "You explain why peas spread on a plate cool faster than peas in a bowl by using the ratio of surface area to volume. Which method is this?",
          fields: [{ kind: "mc", opts: ["Estimation by analogy", "Estimation by aggregation", "Estimation using modeling", "Estimation by upper and lower bounds"], ans: 2 }],
          why: "Matematiksel bir ilişki kullanılıyor: modeling (Example 5-6, s. 113)." },
        { q: "Bir proje için gereken malzemeyi tahmin ederken worst case'i düşünüp her ölçüyü yukarı yuvarlıyorsun. Bu hangi yöntemdir?",
          en: "While estimating the material needed for a project, you consider the worst case and round every dimension up. Which method is this?",
          fields: [{ kind: "mc", opts: ["Estimation by upper and lower bounds", "Estimation by analogy", "Estimation using modeling", "Estimation by aggregation"], ans: 0 }],
          why: "Tahminin fazla mı az mı olduğunu takip eden conservative yaklaşım: upper and lower bounds (s. 113)." },
        { q: "Tahmin yaparken en sık kullanılan strateji hangisidir?",
          en: "Which strategy is used most often when making an estimate?",
          fields: [{ kind: "mc", opts: ["Using the largest possible numbers everywhere for safety", "Leaving out all the units to save time on the exam", "Dividing the problem into smaller parts that can each be estimated", "Refusing to make any assumptions until data is found"], ans: 2 }],
          why: "F25 Q12 anahtarı: breaking the problem into simpler, estimable components (aggregation, s. 112)." },
        { q: "F24 Q2'nin cevabı olan dört yöntem: by analogy, by aggregation, by upper and lower bounds ve using _________.",
          en: "The four estimation methods are: by analogy, by aggregation, by upper and lower bounds, and using _________.",
          fields: [{ kind: "text", accept: ["modeling", "modelling", "models", "model", "mathematical modeling"] }],
          why: "Estimation using modeling (s. 113)." }
      ]},

      { type: "teach", h: "Sınavda tahmin sorusu: adım adım", html: `
<p>Kitabın benzin örneği (Example 5-1, s. 108–109) bir yöntem gösterir: önce bilinmeyenleri tahmin et, sonra birleştir. Sınav için bunu 6 adıma çevirdik:</p>
<ol>
<li><b>Varsayımları birimleriyle yaz.</b> “4 people”, “150 L per person per day”. (F25 Q14 açıkça “make reasonable assumptions” diyor.)</li>
<li><b>Problemi parçalara böl</b> (aggregation).</li>
<li>Sayıları yuvarla; kaba tahminde 1–2 significant figure yeter.</li>
<li><b>Birimleri yazarak çarp.</b> Birimler cebir kurallarına göre sadeleşir: “people” payda ve paydada varsa gider (s. 109).</li>
<li>Uzun hesabı küçük adımlara böl; bir adımın sonucunu bir sonrakinde kullan (s. 109).</li>
<li><b>Sanity check</b>: sonuç fiziksel olarak mantıklı mı? Sonra cevabı 1–2 significant figure ile ya da aralık olarak ver.</li>
</ol>
<p><b>Kitabın örneği kısaca:</b> ABD'de yılda kaç galon benzin, yolda kalmış araçlara taşınır? 3.5 × 10⁸ sürücü × (1 benzinsiz kalma / 4 yıl) = 8.75 × 10⁷ olay/yıl; bunların 24/25'inde benzin araca getirilir: 8.4 × 10⁷; her seferinde 1.5 galon: <b>1.26 × 10⁸ galon/yıl</b>. Kitap “yaklaşık 100 milyon” demenin de geçerli olduğunu, çünkü sonuca ancak bir significant figure kadar güvenilebileceğini söyler (s. 109).</p>
<p><b>Sanity check</b> (ya da <b>reasonableness check</b>): ayrıntılı bir hesabın makul olup olmadığını kaba bir tahminle kontrol etmek. Bu terim F25 Q13 anahtarından. Kitabın karşılığı: “Is my answer reasonable?” (s. 108) ve Section 5.7 Reasonableness (s. 117): 200 yolcuyu taşıyacak uçağın kanat açıklığı 4 ft çıktıysa sonuç “obvious rubbish”tır (s. 118).</p>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>To answer an estimation question, I follow these steps. First, I write my assumptions with units. Second, I break the problem into parts. Third, I round the numbers; one or two significant figures are enough. Fourth, I multiply with the units, so the units cancel correctly. Fifth, I do a sanity check: is the result physically reasonable? Last, I give the answer with one or two significant figures.</p><p>A sanity check (or reasonableness check) means checking a detailed calculation with a rough estimate to see if the answer makes sense.</p></div>` },

      { type: "check", id: "t5-c4", title: "Yöntem ve sanity check", pool: [
        { q: "Ayrıntılı bir hesabın makul olup olmadığını kontrol etmek için kullanılan kaba tahmine ne denir? _________ check",
          en: "An estimate used to check whether a detailed calculation is reasonable is called a _________ check.",
          fields: [{ kind: "text", accept: ["sanity", "reasonableness", "sanity check", "reasonableness check"] }],
          why: "F25 Q13 anahtarı: sanity or reasonableness check. Kitapta Section 5.7 Reasonableness (s. 117)." },
        { q: "Kitaptaki benzin örneğinin (Example 5-1) çözümünde dikkat çeken özellik hangisidir?",
          en: "What is a notable feature of the solution to the book's out-of-gas example (Example 5-1)?",
          fields: [{ kind: "mc", opts: ["Bütün sayılar internetten ve kaynak kitaplardan tek tek bulunmuştur.", "Her değerin birimi yazılmış, birimler sadeleşmiş ve hesap küçük adımlara bölünmüştür.", "Cevap sekiz significant figure ile, tek bir uzun işlem satırında verilmiştir.", "Hiçbir varsayım yapılmamış, sadece kesin veriler kullanılmıştır."], ans: 1,
            enOpts: ["Every number was looked up on the Internet and in reference books.", "Units were written on every value, the units cancelled, and the calculation was broken into small steps.", "The answer was given to eight significant figures in one long line of calculation.", "No assumptions were made; only exact data were used."] }],
          why: "Units were used on all values, units cancel algebraically, computation broken into smaller pieces (s. 109)." },
        { q: "Bir arkadaşın 4 kişilik bir evin günlük su kullanımını 40,000 L buluyor. Ne yapmalısın?",
          en: "A friend calculates that a household of 4 people uses 40,000 L of water per day. What should you do?",
          fields: [{ kind: "mc", opts: ["Sonucu olduğu gibi kabul edip cevap kâğıdına yazmak", "Sonucu daha çok basamakla yazıp daha kesin görünmesini sağlamak", "Birimleri silip sayıyı küçültmek ve yeniden yazmak", "Sonucun gerçekçi olmadığını fark edip hesabı yeniden kontrol etmek"], ans: 3,
            enOpts: ["Accept the result as it is and write it on the answer sheet", "Write the result with more digits so that it looks more exact", "Delete the units, make the number smaller and write it again", "Notice that the result is unrealistic and check the calculation again"] }],
          why: "Kişi başı günde 10,000 L fiziksel olarak makul değil. Sanity check (F25 Q13) ve “Is my answer reasonable?” (s. 108, 117)." },
        { q: "Sınavda bir tahmin sorusunu çözerken ilk adım nedir?",
          en: "When you solve an estimation question on an exam, what is the first step?",
          fields: [{ kind: "mc", opts: ["Cevabı tahmin edip birimleri sonra eklemek", "Hesap makinesindeki bütün basamakları yazmak", "İnternetten gerçek değeri bulmak", "Varsayımları birimleriyle birlikte açıkça yazmak"], ans: 3,
            enOpts: ["Guess the answer and add the units later", "Write down every digit shown on the calculator", "Look up the true value on the Internet", "Write down your assumptions clearly, with units"] }],
          why: "“The first step is to estimate unknown pieces of information” ve her değere birim yazılır (s. 108–109). F25 Q14 da “make reasonable assumptions” ister." },
        { q: "200 yolcu taşıyacak yeni bir uçağın kanat açıklığını 4 ft buldun. Kitaba göre bu sonuç:",
          en: "You determine that the wingspan of a new airplane that will carry 200 passengers should be 4 feet. According to the book, this result is:",
          fields: [{ kind: "mc", opts: ["Obviously unreasonable", "Reasonable", "Too precise", "Correct to one significant figure"], ans: 0 }],
          why: "“This is obvious rubbish” (s. 118). Physically reasonable değil." }
      ]},

      { type: "teach", h: "Çözülmüş örnekler (sınav tipi)", html: `
<p>Aşağıdaki referans sayılar <b>bizim seçtiğimiz yuvarlak varsayımlardır, kitaptan değildir</b>. Sınavda kendi varsayımını yazman yeter; makul olsun.</p>
<table>
<tr><th>Büyüklük</th><th>Varsayım</th></tr>
<tr><td>Kişi başı günlük su</td><td>~150 L</td></tr>
<tr><td>Adım uzunluğu</td><td>~0.75 m</td></tr>
<tr><td>Yürüme hızı</td><td>~5 km/h</td></tr>
<tr><td>Kalp atışı</td><td>~70 / dakika</td></tr>
<tr><td>1 L</td><td>1000 cm³ (1 m³ = 1000 L)</td></tr>
<tr><td>1 in</td><td>2.54 cm (soruda verilir)</td></tr>
</table>
<p><b>Örnek 1 (F25 Q14): 4 kişilik bir ev haftada kaç litre su kullanır?</b></p>
<p>Varsayım: 4 people, 150 L/(person·day), 7 days/week.<br>4 people × 150 L/(person·day) × 7 days = <b>4200 L</b>. Anahtarın kabul aralığı: <b>3500–5000 L</b>.</p>
<p><b>Örnek 2 (F25 Q15): IUS'tan eski şehre (Baščaršija) kaç adım, kaç saat?</b></p>
<p>Varsayım: mesafe ~12 km, adım ~0.75 m, hız ~5 km/h.<br>Adım: 12,000 m ÷ 0.75 m/step = <b>16,000 adım</b>. Süre: 12 km ÷ 5 km/h = <b>2.4 saat</b>. Anahtar: <b>14,000–18,000 adım, 2–4 saat</b>.</p>
<p><b>Örnek 3 (F24 Q1a): 15 inçlik bir laptopa kaç litre su sığar? (1 in = 2.54 cm)</b></p>
<p>15 in köşegen = 15 × 2.54 ≈ 38 cm. Gövde ≈ 34 cm × 23 cm, kalınlık ≈ 2 cm.<br>Hacim ≈ 34 × 23 × 2 ≈ 1560 cm³ ≈ <b>1.5 L</b> (1–2.5 L arası makul). Yöntem: analogy (defter kâğıdı) + aggregation.</p>
<p><b>Örnek 4 (F24 Q1b): 7 günlük Paris gezisi ne tutar?</b></p>
<table>
<tr><th>Kalem</th><th>Varsayım</th><th>Tutar</th></tr>
<tr><td>Uçak (gidiş-dönüş)</td><td></td><td>300 €</td></tr>
<tr><td>Konaklama</td><td>7 gece × 100 €</td><td>700 €</td></tr>
<tr><td>Yemek</td><td>7 gün × 40 €</td><td>280 €</td></tr>
<tr><td>Şehir içi ulaşım</td><td>7 gün × 10 €</td><td>70 €</td></tr>
<tr><td>Müze, gezi</td><td></td><td>100 €</td></tr>
<tr><td><b>Toplam</b></td><td></td><td><b>1450 € ≈ 1500 €</b></td></tr>
</table>
<p><b>Örnek 5: Kalbin bir günde kaç kez atar?</b><br>70 beats/min × 60 min/h × 24 h/day = 100,800 ≈ <b>1 × 10⁵ atım/gün</b>.</p>
<div class="exam"><b>Sınavda nasıl sorulur</b><br>
F24 Q1 (4 puan): “(a) Estimate how many liters of water you can fit in a 15 in laptop (1 in is 2.54 cm). (b) Estimate how much money you would spend in a trip to Paris for 7 days.”<br>
F24 Q2 (2 puan): “What are the methods you could use for estimating certain variables?” → analogy, aggregation, upper and lower bounds, modeling.<br>
F25 Q12 (MC): en yaygın strateji → breaking the problem into simpler, estimable components.<br>
F25 Q13 (boşluk): → sanity / reasonableness check.<br>
F25 Q14: “Estimate the number of liters of water a typical household uses in one week... (Assume 4 people)” → 3500–5000.<br>
F25 Q15: “Estimate the number of steps, and the hours to walk from IUS to old town Sarajevo” → 14000–18000 adım, 2–4 saat.<br>
Puanı <b>yöntem</b> getirir: varsayımları birimleriyle yaz, parçalara böl, çarp, yuvarla, makul mü diye bak.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Model answer (F25 Q14): I assume 4 people use 150 L of water per person per day. In one week, 4 people x 150 L per person per day x 7 days = 4200 L. So a household of four uses about 4000 L of water in a week.</p><p>Model answer (F25 Q15): I assume the distance is about 12 km, one step is about 0.75 m, and my walking speed is 5 km per hour. The number of steps is 12,000 m / 0.75 m per step = 16,000 steps. The time is 12 km / 5 km per hour = 2.4 hours.</p><p>Model answer (F24 Q1b): I assume a flight of 300 euros, a hotel of 100 euros for 7 nights (700), food of 40 euros for 7 days (280), local transport of 70 euros and museums of 100 euros. The total is about 1500 euros.</p></div>` },

      { type: "check", id: "t5-c5", title: "Sınav tipi tahminler", pool: [
        { q: "5 kişilik bir ev haftada kaç litre su kullanır? Kişi başı günlük su kullanımını ~150 L varsay. Cevabı litre olarak yaz.",
          en: "Estimate the number of liters of water a household of 5 people uses in one week. Assume about 150 L per person per day.",
          fields: [{ kind: "num", label: "L", val: [4000, 7000] }],
          why: "5 × 150 L × 7 = 5250 L. Yöntem aggregation (s. 112); F25 Q14 aynı kalıp.",
          hint: "kişi × L/(kişi·gün) × gün" },
        { q: "IUS'tan Baščaršija'ya yürüyüş yolu yaklaşık 12 km. Adım uzunluğun ~0.75 m ise kaç adım atarsın?",
          en: "The walk from IUS to Baščaršija is about 12 km. If your step length is about 0.75 m, how many steps do you take?",
          fields: [{ kind: "num", label: "adım", val: [14000, 18000] }],
          why: "12,000 m ÷ 0.75 m = 16,000 adım. F25 Q15 anahtarı: 14,000–18,000.",
          hint: "Önce km'yi m'ye çevir." },
        { q: "Aynı 12 km'yi ~5 km/h hızla yürürsen kaç saat sürer?",
          en: "If you walk the same 12 km at about 5 km/h, how many hours does it take?",
          fields: [{ kind: "num", label: "saat", val: [2, 4] }],
          why: "12 km ÷ 5 km/h = 2.4 h. F25 Q15 anahtarı: 2–4 saat." },
        { q: "15 inçlik bir laptopun gövdesi yaklaşık 34 cm × 23 cm × 2 cm. İçine kaç litre su sığar?",
          en: "The body of a 15 in laptop is about 34 cm × 23 cm × 2 cm. Estimate how many liters of water it could hold.",
          fields: [{ kind: "num", label: "L", val: [1, 2.5] }],
          why: "34 × 23 × 2 ≈ 1560 cm³; 1000 cm³ = 1 L, yani ≈ 1.5 L (F24 Q1a)." },
        { q: "Kalbin dakikada ~70 kez atıyorsa bir günde kaç kez atar?",
          en: "If your heart beats about 70 times per minute, about how many times does it beat in one day?",
          fields: [{ kind: "num", val: [80000, 130000] }],
          why: "70 × 60 × 24 = 100,800 ≈ 1 × 10⁵. Birimler: beats/min × min/h × h/day = beats/day (s. 109)." },
        { q: "7 günlük Paris gezisi: uçak 300 €, konaklama 100 €/gece × 7 gece, yemek 40 €/gün, şehir içi ulaşım 10 €/gün, müze 100 €. Toplam kaç €?",
          en: "A 7-day trip to Paris: flight 300 €, hotel 100 € per night for 7 nights, food 40 € per day, local transport 10 € per day, museums 100 €. What is the total in euros?",
          fields: [{ kind: "num", label: "€", val: [1400, 1500] }],
          why: "300 + 700 + 280 + 70 + 100 = 1450 €. Kalemlere bölmek aggregation'dır (s. 112; F24 Q1b)." }
      ]},

      { type: "check", id: "t5-c6", title: "Tahmin pratiği", pool: [
        { q: "Tipik bir sınıf yaklaşık 8 m × 6 m × 3 m. İçindeki havanın hacmi kaç litredir?",
          en: "A typical classroom is about 8 m × 6 m × 3 m. What is the volume of air in it, in liters?",
          fields: [{ kind: "num", label: "L", val: [140000, 150000] }],
          why: "8 × 6 × 3 = 144 m³; 1 m³ = 1000 L, yani 144,000 L. Mobilyaları düşünmeye gerek yok (s. 111)." },
        { q: "Bir yılda yaklaşık kaç saniye vardır?",
          en: "Approximately how many seconds are there in one year?",
          fields: [{ kind: "num", val: [30000000, 33000000] }],
          why: "365 × 24 × 3600 ≈ 3.15 × 10⁷ s. Birimleri yazarak çarp: day × h/day × s/h (s. 109).",
          hint: "365 × 24 × 3600" },
        { q: "Arabayla 300 km yol gideceksin. Araba ~7 L/100 km yakıyor. Kaç litre yakıt gerekir?",
          en: "You will drive 300 km in a car that uses about 7 L per 100 km. How many liters of fuel do you need?",
          fields: [{ kind: "num", label: "L", val: [18, 25] }],
          why: "300 km × 7 L / 100 km = 21 L. km birimi sadeleşir (s. 109)." },
        { q: "Nüfusu 300,000 kabul edilen bir şehirde kişi başı günde ~150 L su kullanılıyor. Şehir günde kaç m³ su kullanır?",
          en: "A city has a population of 300,000, and each person uses about 150 L of water per day. How many cubic meters of water does the city use per day?",
          fields: [{ kind: "num", label: "m³", val: [40000, 50000] }],
          why: "300,000 × 150 L = 45,000,000 L; 1000 L = 1 m³, yani 45,000 m³/gün. Birimleri yazarak çarp (s. 109)." },
        { q: "Günde 8 saat uyuyan biri 20 yaşına gelene kadar toplam kaç yıl uyumuş olur?",
          en: "Someone who sleeps 8 hours a day reaches the age of 20. How many years in total has this person spent sleeping?",
          fields: [{ kind: "num", label: "yıl", val: [6, 7.5] }],
          why: "8/24 = 1/3; 20 × 1/3 ≈ 6.7 yıl. Bebeklikte daha çok uyunur ama ikinci derece etkiye takılma (s. 111)." },
        { q: "Kitabın örneği: ABD'de 3.5 × 10⁸ sürücü var ve her sürücü 4 yılda bir kez benzinsiz kalıyor. Yılda kaç milyon kez benzinsiz kalma olur? (milyon cinsinden yaz)",
          en: "The book's example: there are 3.5 × 10⁸ drivers in the U.S., and each runs out of gas once every 4 years. How many out-of-gas incidents occur per year, in millions?",
          fields: [{ kind: "num", label: "milyon", val: [85, 90] }],
          why: "3.5 × 10⁸ ÷ 4 = 8.75 × 10⁷ = 87.5 milyon (Example 5-1, s. 109)." }
      ]}
    ]
  },
  {
    id: "t6", no: "T6", part: "teori",
    title: "Significant figures and notation", sub: "Sig figs, accuracy vs precision, notation",
    minutes: 30, source: "Kitap Ch 5, s. 110, 114–123",
    blocks: [
      { type: "teach", h: "Significant figures nedir?", html: `
<p><b>Significant figures</b> (“sig figs”, anlamlı basamaklar): bir ölçüm ya da hesap sonucunda <b>güvenilir</b> kabul edilen basamaklar (s. 114).</p>
<p>Karıştırma: <b>decimal places</b> (ondalık basamak sayısı) sadece ondalık noktasının <b>sağındaki</b> basamak sayısıdır. İkisi farklı şeydir (Example 5-8, s. 114):</p>
<table>
<tr><th>Sayı</th><th>Decimal places</th><th>Significant figures</th></tr>
<tr><td>376</td><td>0</td><td>3</td></tr>
<tr><td>376.0</td><td>1</td><td>4</td></tr>
<tr><td>376,908</td><td>0</td><td>6</td></tr>
<tr><td>3,760,000</td><td>0</td><td>3</td></tr>
<tr><td>3,760,000. (noktalı)</td><td>0</td><td>7</td></tr>
<tr><td>0.376</td><td>3</td><td>3</td></tr>
<tr><td>0.37600</td><td>5</td><td>5</td></tr>
<tr><td>0.0037600</td><td>7</td><td>5</td></tr>
</table>
<p><b>Sayma kuralları</b> (s. 115):</p>
<ul>
<li>Sıfır olmayan her rakam <b>anlamlıdır</b>.</li>
<li>Sıfır <b>anlamlıdır</b>: iki sıfır olmayan rakamın arasındaysa (306 → 3; 5.006 → 4) ya da ondalık noktası olan sayının <b>sonundaysa</b> (2.790 → 4; 2000.0 → 5).</li>
<li>Sıfır <b>anlamlı değildir</b>: sadece ondalık yerini sabitliyorsa (0.0456 → 3) ya da ondalık noktası olmayan tam sayının sonundaysa (2000 → 1, çünkü 2 × 10³; 35,100 → 3, çünkü 3.51 × 10⁴).</li>
</ul>
<div class="box"><b>Hızlı yol:</b> Soldaki sıfırlar hiçbir zaman sayılmaz. Ortadaki sıfırlar her zaman sayılır. Sağdaki sıfırlar sadece sayıda nokta varsa sayılır.</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Significant figures are the digits in a measurement or calculation that we consider reliable. Decimal places are different: they are only the digits to the right of the decimal point.</p><p>The rules: every nonzero digit is significant. A zero is significant if it is between two nonzero digits, or if it is at the end of a number with a decimal point. A zero is not significant if it only fixes the position of the decimal point, or if it is at the end of a whole number without a decimal point.</p><p>For example, 5.006 has 4 significant figures, 2.790 has 4, 0.0456 has 3, and 2000 has 1.</p></div>` },

      { type: "check", id: "t6-c1", title: "Sig fig sayma", pool: [
        { q: "0.0050 sayısında kaç significant figure vardır?",
          en: "How many significant figures does 0.0050 have?",
          fields: [{ kind: "num", val: 2 }],
          why: "Soldaki sıfırlar ondalık yerini sabitler, sayılmaz. Sondaki 0 noktalı sayının sonunda olduğu için sayılır: 5 ve 0 (s. 115)." },
        { q: "7,790,200 sayısında kaç significant figure vardır?",
          en: "How many significant figures does 7,790,200 have?",
          fields: [{ kind: "num", val: 5 }],
          why: "7, 7, 9, 0, 2: aradaki 0 sayılır; noktasız tam sayının sonundaki 00 sayılmaz (s. 115)." },
        { q: "20.000 sayısında kaç significant figure vardır?",
          en: "How many significant figures does 20.000 have?",
          fields: [{ kind: "num", val: 5 }],
          why: "Noktalı sayının sonundaki sıfırlar sayılır: 2, 0, 0, 0, 0 (s. 115)." },
        { q: "5.006 sayısında kaç significant figure vardır?",
          en: "How many significant figures does 5.006 have?",
          fields: [{ kind: "num", val: 4 }],
          why: "İki sıfır olmayan rakamın arasındaki sıfırlar sayılır (s. 115)." },
        { q: "35,100 sayısında kaç significant figure vardır?",
          en: "How many significant figures does 35,100 have?",
          fields: [{ kind: "num", val: 3 }],
          why: "Noktasız tam sayı: sondaki 00 sayılmaz; 3.51 × 10⁴ (s. 115)." },
        { q: "2000.0 sayısında kaç significant figure vardır?",
          en: "How many significant figures does 2000.0 have?",
          fields: [{ kind: "num", val: 5 }],
          why: "Ondalık noktası var; bütün sıfırlar anlamlı (s. 115)." },
        { q: "0.0037600 sayısının kaç decimal place'i vardır? (significant figure değil)",
          en: "How many decimal places does 0.0037600 have? (not significant figures)",
          fields: [{ kind: "num", val: 7 }],
          why: "Noktanın sağında 7 basamak var. Significant figures ise 5 (Example 5-8, s. 114)." }
      ]},

      { type: "teach", h: "Çarpma ve bölme kuralı", html: `
<p><b>Kural:</b> çarpım ya da bölümün sonucu, <b>en az significant figure'a sahip sayı</b> kadar significant figure taşır (s. 115).</p>
<p><b>Örnek (Example 5-9, s. 116):</b> 2.43 × 17.675 = 42.95025</p>
<ul>
<li>2.43 → 3 sig figs; 17.675 → 5 sig figs.</li>
<li>En az olan 3 → cevap <b>43.0</b> (3 sig figs). “43” yazarsan 2 sig figs olur, yanlış.</li>
</ul>
<p><b>Exact conversions sayılmaz</b> (Example 5-10, s. 116): 2.479 h × 60 min/h = 148.74 min → <b>148.7 min</b>. 2.479'da 4 sig figs var; 60 min/h tanım gereği tam olduğu için kuralı etkilemez.</p>
<p>Pi gibi sabitlerde, sabiti diğer değerlerden <b>en az 2 basamak fazla</b> alarak kullan (s. 117).</p>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>In multiplication and division, the result has as many significant figures as the number with the fewest significant figures. For example, 2.43 x 17.675 = 42.95025, and the answer is 43.0, because 2.43 has only 3 significant figures.</p><p>Exact conversions, such as 60 min per hour, do not count. For a constant such as pi, I use at least two more digits than the other values.</p></div>` },

      { type: "check", id: "t6-c2", title: "Çarpma ve bölme", pool: [
        { q: "2.43 × 17.675 = 42.95025. Kurala göre doğru yazım hangisidir?",
          en: "2.43 × 17.675 = 42.95025. Which is the correctly reported result?",
          fields: [{ kind: "mc", opts: ["42.95025", "42.95", "43.0", "43"], ans: 2 }],
          why: "En az sig fig 3 (2.43): 43.0 (Example 5-9, s. 116)." },
        { q: "3.1 × 2.456 işleminin sonucu kaç significant figure taşımalıdır?",
          en: "How many significant figures should the result of 3.1 × 2.456 have?",
          fields: [{ kind: "num", val: 2 }],
          why: "3.1'de 2 sig fig var; çarpımda en az olan belirler (s. 115)." },
        { q: "2.479 h × 60 min/h = 148.74 min. Kurala göre doğru yazım hangisidir?",
          en: "2.479 h × 60 min/h = 148.74 min. Which is the correctly reported result?",
          fields: [{ kind: "mc", opts: ["148.74 min", "148.7 min", "150 min", "149 min"], ans: 1 }],
          why: "60 min/h exact conversion, kuralı etkilemez; 2.479 → 4 sig figs (Example 5-10, s. 116)." },
        { q: "4.56 × 1.4 = 6.384. Sonucu kurala uygun yaz.",
          en: "4.56 × 1.4 = 6.384. Report the result with the correct number of significant figures.",
          fields: [{ kind: "num", val: 6.4 }],
          why: "1.4'te 2 sig fig var: 6.4 (s. 115)." },
        { q: "6.0 × 0.512 = 3.072. Sonucu kurala uygun yaz.",
          en: "6.0 × 0.512 = 3.072. Report the result with the correct number of significant figures.",
          fields: [{ kind: "num", val: 3.1 }],
          why: "6.0'da 2 sig fig var (sondaki 0 noktalı sayıda sayılır): 3.1 (s. 115)." }
      ]},

      { type: "teach", h: "Toplama, çıkarma ve yuvarlama", html: `
<p><b>Kural:</b> toplama ve çıkarmada sonuç, <b>en az ondalık basamağa sahip</b> (“least precise”) sayı kadar sağa gider. Burada sig fig sayısına değil, <b>basamağın yerine</b> bakarsın (s. 116).</p>
<p><b>Örnek (Example 5-11):</b> 1725.463 + 489.2 + 16.73 = 1931.393. En az kesin olan 489.2 (1 ondalık) → <b>1931.4</b>.</p>
<p><b>Örnek (Example 5-12):</b> 903,000 + 59,600 + 104,470 = 1,067,070. En az kesin olan 903,000 (binler basamağı) → <b>1,067,000</b>.</p>
<p><b>Yuvarlama</b> (s. 116): atılan ilk basamak 5 ya da büyükse, kalan son basamağı 1 artır. 43.48 → 3 sig figs: 43.5; 2 sig figs: 43. 0.0143 → 2 sig figs: 0.014.</p>
<p><b>Ne zaman yuvarlanır?</b> Ara adımlarda yuvarlamak gerekli de değil, istenir de değil. Yuvarlayacaksan sonuçta kullanacağından <b>en az 2 fazla</b> sig fig tut. Kitaptaki örnekte aynı ifade, farklı yerlerde yuvarlanınca 4.4, 0 ve −40 çıktı (s. 117).</p>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>In addition and subtraction, the result goes only as far to the right as the least precise number. I look at the position of the last digit, not at the number of significant figures. For example, 1725.463 + 489.2 + 16.73 = 1931.393, and the answer is 1931.4, because 489.2 is the least precise number.</p><p>For rounding: if the first digit I drop is 5 or larger, I increase the last remaining digit by one. I do not round in the middle of a calculation. I keep at least two more significant figures than I need in the final answer.</p></div>` },

      { type: "check", id: "t6-c3", title: "Toplama, çıkarma, yuvarlama", pool: [
        { q: "1725.463 + 489.2 + 16.73 = 1931.393. Sonucu kurala uygun yaz.",
          en: "1725.463 + 489.2 + 16.73 = 1931.393. Report the result correctly.",
          fields: [{ kind: "num", val: 1931.4 }],
          why: "489.2 en az ondalıklı (1 ondalık): 1931.4 (Example 5-11, s. 116)." },
        { q: "12.11 + 18.0 + 1.013 = 31.123. Sonucu kurala uygun yaz.",
          en: "12.11 + 18.0 + 1.013 = 31.123. Report the result correctly.",
          fields: [{ kind: "num", val: 31.1 }],
          why: "18.0 en az ondalıklı (1 ondalık): 31.1 (s. 116)." },
        { q: "903,000 + 59,600 + 104,470 = 1,067,070. Kurala göre doğru yazım hangisidir?",
          en: "903,000 + 59,600 + 104,470 = 1,067,070. Which is the correctly reported result?",
          fields: [{ kind: "mc", opts: ["1,067,070", "1,067,100", "1,067,000", "1,070,000"], ans: 2 }],
          why: "903,000 binler basamağına kadar kesin: 1,067,000 (Example 5-12, s. 116)." },
        { q: "45.3 − 2.115 = 43.185. Sonucu kurala uygun yaz.",
          en: "45.3 − 2.115 = 43.185. Report the result correctly.",
          fields: [{ kind: "num", val: 43.2 }],
          why: "45.3'te 1 ondalık var: 43.185 → 43.2 (s. 116)." },
        { q: "Kitaba göre ara adımlarda yuvarlama için hangisi doğrudur?",
          en: "According to the book, which statement about rounding intermediate values is correct?",
          fields: [{ kind: "mc", opts: ["Hesap kolaylaşsın diye her ara adımda 1 significant figure'a yuvarlanmalıdır.", "Ara değerleri yuvarlamak gerekmez; yuvarlarsan en az 2 fazla significant figure tut.", "Sadece ilk adımda yuvarlanır, sonraki adımlarda bütün basamaklar tutulur.", "Ara değerler, hatayı azaltmak için her zaman tam sayıya yuvarlanır."], ans: 1,
            enOpts: ["Round to 1 significant figure at every step to make the calculation easier.", "It is not necessary to round intermediate values; if you do, keep at least two more significant figures than in the final result.", "Round only at the first step and keep all digits afterwards.", "Always round intermediate values to whole numbers to reduce error."] }],
          why: "“Maintain at least two more significant figures for all intermediate values” (s. 117)." },
        { q: "0.0143 sayısını 2 significant figure'a yuvarla.",
          en: "Round 0.0143 to 2 significant figures.",
          fields: [{ kind: "num", val: 0.014 }],
          why: "1 ve 4 kalır, atılan 3 &lt; 5: 0.014 (Example 5-13, s. 116)." }
      ]},

      { type: "teach", h: "Accuracy, repeatability, precision", html: `
<p>Günlük dilde aynı gibi kullanılır, mühendislikte farklıdır (s. 119):</p>
<table>
<tr><th>Terim</th><th>Anlam</th></tr>
<tr><td><b>Accuracy</b> (doğruluk)</td><td>Bir ölçümün (ya da ölçümlerin ortalamasının) <b>gerçek değere</b> ne kadar yakın olduğu. Ölçümler birbirine yakın olmasa da ortalama gerçek değere yakınsa accurate'tır.</td></tr>
<tr><td><b>Repeatability</b> (tekrarlanabilirlik)</td><td>Aynı parametrenin birden fazla ölçümünün <b>birbirine</b> ne kadar yakın olduğu; gerçek değere yakın olsun olmasın.</td></tr>
<tr><td><b>Precision</b> (kesinlik)</td><td>Accuracy ve repeatability'nin <b>birleşimi</b>. Rapor edilen significant figure sayısına yansır.</td></tr>
</table>
<p><b>Error</b>: ölçülen değer ile gerçek değer arasındaki fark. Nedenleri: ekipmanın doğruluğu, kötü ölçüm tekniği, ekipmanın yanlış kullanımı, ortam (sıcaklık, titreşim) (s. 119).</p>
<p><b>Hedef tahtası (bulls-eye) dört durum</b> (s. 119):</p>
<table>
<tr><th>Atışlar</th><th>Ad</th></tr>
<tr><td>Dağınık, merkezden uzak</td><td>Neither repeatable nor accurate</td></tr>
<tr><td>Birbirine yakın, merkezden uzak</td><td>Repeatable, but not accurate</td></tr>
<tr><td>Dağınık, ortalaması merkezde</td><td>Accurate, but not repeatable</td></tr>
<tr><td>Birbirine yakın ve merkezde</td><td>Both: <b>precise</b></td></tr>
</table>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Accuracy is how close a measurement, or the average of the measurements, is to the true value. Repeatability is how close multiple measurements of the same parameter are to each other, whether or not they are close to the true value. Precision is the combination of accuracy and repeatability, and it is shown by the number of significant figures that I report.</p><p>Error is the difference between the measured value and the true value. For example, shots on a target that are close together but far from the center are repeatable but not accurate.</p></div>` },

      { type: "check", id: "t6-c4", title: "Accuracy, repeatability, precision", pool: [
        { q: "Bir terazinin ölçümlerinin ortalaması gerçek değere çok yakın, ama tek tek ölçümler birbirinden çok farklı. Bu ölçümler nasıldır?",
          en: "The average of a scale's readings is very close to the true value, but the individual readings are far apart from each other. How are these measurements described?",
          fields: [{ kind: "mc", opts: ["Accurate, but not repeatable", "Repeatable, but not accurate", "Precise", "Neither accurate nor repeatable"], ans: 0 }],
          why: "Ortalama gerçek değere yakın: accurate; birbirine yakın değil: not repeatable (s. 119)." },
        { q: "Bütün ölçümler birbirine çok yakın, ama hepsi gerçek değerden uzak. Bu ölçümler nasıldır?",
          en: "All the measurements are very close to each other, but all of them are far from the true value. How are these measurements described?",
          fields: [{ kind: "mc", opts: ["Precise", "Accurate, but not repeatable", "Repeatable, but not accurate", "Neither repeatable nor accurate"], ans: 2 }],
          why: "Birbirine yakın: repeatable; gerçek değerden uzak: not accurate (s. 119)." },
        { q: "Hem accurate hem repeatable olan ölçümler için kullanılan terim nedir?",
          en: "Measurements that are both repeatable and accurate are called _________.",
          fields: [{ kind: "text", accept: ["precise", "precision"] }],
          why: "“Both repeatable and accurate. This is called precise” (s. 119)." },
        { q: "Kitaba göre accuracy nedir?",
          en: "According to the book, what is accuracy?",
          fields: [{ kind: "mc", opts: ["How close a measurement (or an average) is to the actual value", "How close multiple measurements are to each other", "The number of decimal places in a reported value", "The price and the quality of the measuring instrument"], ans: 0 }],
          why: "Accuracy: closeness to the actual value (s. 119). İkinci şık repeatability'nin tanımı." },
        { q: "Aynı parametrenin birden fazla ölçümünün, gerçek değere yakın olsun olmasın, birbirine ne kadar yakın olduğunun ölçüsüne ne denir?",
          en: "A measure of how close together multiple measurements of the same parameter are, whether or not they are close to the actual value, is called _________.",
          fields: [{ kind: "text", accept: ["repeatability", "repeatable"] }],
          why: "Repeatability (s. 119)." },
        { q: "Ölçülen değer ile gerçek değer arasındaki farka ne denir?",
          en: "What is the difference between the measured value and the actual value called?",
          fields: [{ kind: "mc", opts: ["Error", "Repeatability", "Precision", "Notation"], ans: 0 }],
          why: "“The difference between the measured value and the actual value is the error in the measurement” (s. 119)." }
      ]},

      { type: "teach", h: "Reasonableness: makul cevap, makul basamak", html: `
<p>Kitap iki tür reasonableness'tan söz eder (s. 117):</p>
<ul>
<li><b>Physically reasonable</b>: cevap fiziksel durumla uyumlu mu? 200 yolcuyu taşıyacak uçağın kanat açıklığı 4 ft: saçma. Hissetmediğin birimdeyse hissettiğin birime çevir: 2 × 10¹³ mm/yıl hızındaki beyzbol topu 1,400 mil/saatten hızlıdır, saçma (s. 118).</li>
<li><b>Reasonable precision</b>: cevabın basamak sayısı verinin doğruluğuyla uyumlu mu?</li>
</ul>
<p><b>Kaç basamak?</b> Mühendislik problemlerinin çoğu <b>2–4 significant figure</b> ister; genel kullanım için <b>3</b> iyi bir seçimdir. 1 ya da 4'ten fazla kullanırsan gerekçen olmalı (s. 118). Fazla precision tasarımı pahalılaştırır: iyi bir 16 ons çekiç ~$20; 16 ± 0.0001 ons çekiç yüzlerce, belki binlerce dolar (s. 119).</p>
<p><b>Kitaptaki örnekler</b> (s. 120):</p>
<table>
<tr><th>Durum</th><th>Hesap makinesi</th><th>Makul</th></tr>
<tr><td>Çap 2.63 cm, alan</td><td>5.432521 cm²</td><td>5.4 ya da 5.43 cm²</td></tr>
<tr><td>Çap 0.0024 cm, alan</td><td>0.0004446 cm²</td><td>0.00044 cm² ya da 4.4 × 10⁻⁴ cm² (iki ondalık “0.00” anlamsız olurdu)</td></tr>
<tr><td>Excel doğrusu</td><td>y = 0.50236x + 2.0378</td><td>y = 0.5x + 2</td></tr>
</table>
<p>Küçük sayılarda decimal places değil <b>significant figures</b> kullan.</p>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>A reasonable answer has two parts. It must be physically reasonable, which means it agrees with the real situation. For example, an airplane for 200 passengers with a wingspan of 4 ft is obviously wrong. It must also have a reasonable precision, which means that the number of digits agrees with the accuracy of the data.</p><p>Most engineering problems need 2 to 4 significant figures, and 3 is a good choice. Too much precision makes a design more expensive. For small numbers, I use significant figures, not decimal places.</p></div>` },

      { type: "check", id: "t6-c5", title: "Reasonable precision", pool: [
        { q: "Çapı 2.63 cm ölçülen bir dairenin alanı hesap makinesinde 5.432521 cm² çıkıyor. Hangisi makul yazımdır?",
          en: "The diameter of a circle is measured as 2.63 cm, and the calculator gives an area of 5.432521 cm². Which is a reasonable way to report it?",
          fields: [{ kind: "mc", opts: ["5.432521 cm²", "5.43 cm²", "5 cm²", "5.4325 cm²"], ans: 1 }],
          why: "Çap 3 sig fig ile verilmiş; 5.4 ya da 5.43 cm² makul (s. 120)." },
        { q: "Excel bir veri seti için y = 0.50236x + 2.0378 doğrusunu veriyor. Kitaba göre hangisi makul yazımdır?",
          en: "Excel gives the linear relationship y = 0.50236x + 2.0378 for a data set. According to the book, which form should probably be used?",
          fields: [{ kind: "mc", opts: ["y = 0.50236x + 2.0378", "y = 0.5x + 2", "y = x + 2", "y = 0.502360x + 2.037800"], ans: 1 }],
          why: "“The linear relationship should probably be taken as y = 0.5x + 2” (s. 120)." },
        { q: "Kitaba göre genel kullanım için iyi bir significant figure sayısı kaçtır?",
          en: "According to the book, how many significant figures are a good choice for general use?",
          fields: [{ kind: "num", val: 3 }],
          why: "“Three significant figures is a good choice for general use”; çoğu problem 2–4 ister (s. 118)." },
        { q: "Kitapta anlatılan iki reasonableness türü hangileridir?",
          en: "Which two types of reasonableness does the book discuss?",
          fields: [{ kind: "mc", opts: ["Legal reasonableness and ethical reasonableness", "Physically reasonable and reasonable precision", "Accurate costs and cheap materials", "Short sentences and simple words"], ans: 1 }],
          why: "Physically reasonable ve reasonable precision (s. 117)." },
        { q: "Kitaba göre bir cıvatanın boyu raporda nasıl yazılmalıdır?",
          en: "According to the book, how should the length of a bolt be written in a report?",
          fields: [{ kind: "mc", opts: ["The bolt is 2.5029 inches long.", "The bolt is 2.5 inches long.", "The bolt is two and a half-ish inches long.", "The bolt is 2.50290000 inches long."], ans: 1 }],
          why: "“Watch for significant figures. Keep it reasonable!” 2.5029 kabul edilmez, 2.5 OK (s. 87)." },
        { q: "Çapı 0.0024 cm ölçülen bir dairenin alanı 0.0004446 cm² çıkıyor. Kitaba göre makul yazım hangisidir?",
          en: "The diameter of a circle is measured as 0.0024 cm, and its area is calculated as 0.0004446 cm². According to the book, which is a reasonable way to report it?",
          fields: [{ kind: "mc", opts: ["0.00 cm²", "0.00044 cm²", "0 cm²", "0.0004446000 cm²"], ans: 1 }],
          why: "İki ondalığa yuvarlamak 0.00 verir, anlamsız. Küçük sayılarda sig figs kullan: 0.00044 ya da 4.4 × 10⁻⁴ cm² (s. 120)." }
      ]},

      { type: "teach", h: "Scientific ve engineering notation", html: `
<p>İki gösterim (s. 122):</p>
<table>
<tr><th></th><th>Scientific notation</th><th>Engineering notation</th></tr>
<tr><td>Biçim</td><td><code>#.### × 10^N</code></td><td><code>###.### × 10^M</code></td></tr>
<tr><td>Kural</td><td>N tam sayı; noktanın solunda <b>1</b> rakam</td><td>M <b>3'ün katı</b>; noktanın solunda 1, 2 ya da 3 rakam</td></tr>
</table>
<p><b>Örnekler</b> (Example 5-14, s. 122):</p>
<table>
<tr><th>Standard</th><th>Scientific</th><th>Engineering</th></tr>
<tr><td>43,480,000</td><td>4.348 × 10⁷</td><td>43.48 × 10⁶</td></tr>
<tr><td>0.0000003060</td><td>3.060 × 10⁻⁷</td><td>306.0 × 10⁻⁹</td></tr>
<tr><td>9,860,000,000</td><td>9.86 × 10⁹</td><td>9.86 × 10⁹</td></tr>
<tr><td>0.0351</td><td>3.51 × 10⁻²</td><td>35.1 × 10⁻³</td></tr>
</table>
<p><b>Engineering notation nasıl yapılır?</b> Üssü 3'ün katına (…, −6, −3, 0, 3, 6, 9, …) gelecek şekilde seç, sonra noktayı kaydır. 58,093,099 → üs 6 → 58.09 × 10⁶.</p>
<ul>
<li><b>Mantissa</b>: sig figs'in değerini veren kısım; <b>exponent</b>: ondalık noktasının yerini veren kısım (s. 114).</li>
<li>Hesap makinesindeki <b>E</b> “times 10 raised to the” diye okunur. Raporda 3.707 E−5 değil <b>3.707 × 10⁻⁵</b> yaz. Asla küçük “e” kullanma (e sayısıyla karışır) (s. 123).</li>
<li>Büyüklük 10,000'den büyük ya da 0.0001'den küçükse exponential notation düşün (s. 123).</li>
</ul>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>Scientific notation has one digit to the left of the decimal point and a whole-number exponent. For example, 43,480,000 = 4.348 x 10^7. Engineering notation uses an exponent that is a multiple of three, so there can be one, two or three digits to the left of the decimal point. For example, 43,480,000 = 43.48 x 10^6.</p><p>The mantissa gives the value of the significant figures, and the exponent gives the position of the decimal point. In a report, I write 3.707 x 10^-5, not 3.707 E-5.</p></div>` },

      { type: "check", id: "t6-c6", title: "Scientific ve engineering notation", pool: [
        { q: "43,480,000 sayısını engineering notation'da yazınca 10'un üssü kaç olur?",
          en: "When 43,480,000 is written in engineering notation, what is the exponent of 10?",
          fields: [{ kind: "num", val: 6 }],
          why: "43.48 × 10⁶; üs 3'ün katı olmalı (Example 5-14, s. 122)." },
        { q: "58,093,099 sayısını scientific notation'da yazınca 10'un üssü kaç olur?",
          en: "When 58,093,099 is written in scientific notation, what is the exponent of 10?",
          fields: [{ kind: "num", val: 7 }],
          why: "5.8093099 × 10⁷; noktanın solunda tek rakam (s. 122)." },
        { q: "0.0351 sayısının engineering notation'daki yazımı hangisidir?",
          en: "Which of the following is 0.0351 written in engineering notation?",
          fields: [{ kind: "mc", opts: ["3.51 × 10⁻²", "35.1 × 10⁻³", "351 × 10⁻⁴", "0.351 × 10⁻¹"], ans: 1 }],
          why: "Üs 3'ün katı: 35.1 × 10⁻³. 3.51 × 10⁻² scientific notation'dır (s. 122)." },
        { q: "0.0000003060 sayısının engineering notation'daki yazımı hangisidir?",
          en: "Which of the following is 0.0000003060 written in engineering notation?",
          fields: [{ kind: "mc", opts: ["3.060 × 10⁻⁷", "30.60 × 10⁻⁸", "306.0 × 10⁻⁹", "0.3060 × 10⁻⁶"], ans: 2 }],
          why: "306.0 × 10⁻⁹ (Example 5-14, s. 122)." },
        { q: "0.00458097 sayısını engineering notation'da yazınca 10'un üssü kaç olur?",
          en: "When 0.00458097 is written in engineering notation, what is the exponent of 10?",
          fields: [{ kind: "num", val: -3 }],
          why: "4.58097 × 10⁻³; −3 zaten 3'ün katı (s. 122)." },
        { q: "Hesap makinesi 3.707 E-5 gösteriyor. Raporda nasıl yazmalısın?",
          en: "Your calculator shows 3.707 E-5. How should you write this value in a report?",
          fields: [{ kind: "mc", opts: ["3.707 e-5", "3.707 × 10⁻⁵", "3.707 E⁻⁵", "3.707⁻⁵"], ans: 1 }],
          why: "E notation yerine 10'un kuvvetini göster; küçük e ve üst simge E kullanma (s. 123)." },
        { q: "Kitaba göre hangi durumda exponential notation kullanmayı düşünmelisin?",
          en: "According to the book, when should you consider using exponential notation?",
          fields: [{ kind: "mc", opts: ["Only for negative numbers smaller than minus one", "When the magnitude is greater than 10,000 or less than 0.0001", "Only for whole numbers without a decimal point", "Never; engineering reports use standard notation only"], ans: 1 }],
          why: "“If the magnitude is greater than 10,000 or less than 0.0001” (s. 123)." }
      ]},

      { type: "teach", h: "Order of magnitude", html: `
<p><b>Order of magnitude</b> çoğunlukla <b>10 katlık</b> farkları anlatır. Üç order of magnitude = 10³ = <b>1,000 kat</b> (s. 110).</p>
<p><b>Nasıl hesaplanır?</b> İki sayının log'unu al, farkını bul (s. 110):</p>
<p>10,000,000 ile 1,000: log(10,000,000) = 7, log(1,000) = 3 → 7 − 3 = <b>4 order of magnitude</b>.</p>
<p>Daha örnek: 0.01 (log = −2) ile 10 (log = 1) → 1 − (−2) = <b>3</b>. 5,000 ile 50 → 100 kat → <b>2</b>.</p>
<div class="exam"><b>Sınavda nasıl sorulur</b><br>
F24 ve F25'te significant figures ve notation <b>doğrudan sorulmadı</b>; konu kitapta (s. 114–123) ve ders kapsamında olduğu için kısa sorular gelebilir. Kesin kullanıldığı yer: tahmin sorusu. F24 Q1 ve F25 Q14–15'te cevabı 1–2 significant figure ile ver (ör. “about 4,000 L”, “about 16,000 steps”). Kitap da benzin örneğinde “about 100 million” demenin geçerli olduğunu söyler, çünkü sonuca ancak 1 significant figure kadar güvenilir (s. 109). Bir tahminin “bir order of magnitude içinde” doğru olması yeterlidir (s. 108).</div>
<div class="say" lang="en"><b>Sınavda böyle yaz (EN):</b><p>An order of magnitude is a factor of ten. Three orders of magnitude means a factor of 10^3, which is 1,000. To find the difference, I take the log of both numbers and subtract. For example, log(10,000,000) = 7 and log(1,000) = 3, so the difference is 4 orders of magnitude.</p><p>An estimate that is correct within one order of magnitude is usually good enough.</p></div>` },

      { type: "check", id: "t6-c7", title: "Order of magnitude", pool: [
        { q: "10,000,000 ile 1,000 arasında kaç order of magnitude fark vardır?",
          en: "How many orders of magnitude separate 10,000,000 and 1,000?",
          fields: [{ kind: "num", val: 4 }],
          why: "log 10⁷ = 7, log 10³ = 3: 7 − 3 = 4 (s. 110)." },
        { q: "Üç order of magnitude kaç katlık bir farktır?",
          en: "A difference of three orders of magnitude is a difference in scale of how many times?",
          fields: [{ kind: "num", val: 1000 }],
          why: "10³ = 1,000 (s. 110)." },
        { q: "0.01 ile 10 arasında kaç order of magnitude fark vardır?",
          en: "How many orders of magnitude separate 0.01 and 10?",
          fields: [{ kind: "num", val: 3 }],
          why: "log 10 = 1, log 0.01 = −2: 1 − (−2) = 3 (s. 110)." },
        { q: "5,000 ile 50 arasında kaç order of magnitude fark vardır?",
          en: "How many orders of magnitude separate 5,000 and 50?",
          fields: [{ kind: "num", val: 2 }],
          why: "5,000 / 50 = 100 = 10²: 2 order of magnitude (s. 110)." },
        { q: "10⁹ ile 10³ arasında kaç order of magnitude fark vardır?",
          en: "How many orders of magnitude separate 10⁹ and 10³?",
          fields: [{ kind: "num", val: 6 }],
          why: "9 − 3 = 6 (s. 110)." }
      ]}
    ]
  }
];
