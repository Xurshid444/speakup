const EXERCISES = [
  { unit:0, label:"Welcome", emoji:"👋",
    lessons: [
      { mcq: [ {s:"Hello, ___ name is Anna.",blank:1,a:"my",opts:["my","I","me","mine"]}, {s:"___ you from England?",blank:0,a:"Are",opts:["Are","Is","Am","Do"]}, {s:"Nice to ___ you.",blank:2,a:"meet",opts:["meet","see","look","find"]}, {s:"How ___ you today?",blank:1,a:"are",opts:["are","is","am","do"]}, {s:"I ___ fine, thank you.",blank:1,a:"am",opts:["am","is","are","be"]}, {s:"Please ___ down.",blank:1,a:"sit",opts:["sit","stand","go","come"]}, {s:"___ your books, please.",blank:0,a:"Open",opts:["Open","Close","Read","Look"]}, {s:"Listen ___ the teacher.",blank:1,a:"to",opts:["to","at","in","for"]}, {s:"___ repeat that, please?",blank:0,a:"Can you",opts:["Can you","Are you","Do you","Have you"]}, {s:"See you ___.",blank:2,a:"tomorrow",opts:["tomorrow","yesterday","day","time"]} ], fill: [ {s:"Hello, ___ name is John.",a:"my"}, {s:"Nice to ___ you too.",a:"meet"}, {s:"How ___ are you?",a:"old"}, {s:"I ___ from Italy.",a:"am"}, {s:"___ morning, everyone!",a:"Good"}, {s:"Stand ___, please.",a:"up"}, {s:"Look ___ the board.",a:"at"}, {s:"I don't ___.",a:"know"}, {s:"What does this ___?",a:"mean"}, {s:"___ you very much.",a:"Thank"} ], order: [ {w:["name","My","Anna","is"],a:"My name is Anna."}, {w:["to","Nice","you","meet"],a:"Nice to meet you."}, {w:["are","How","you","?"],a:"How are you?"}, {w:["am","I","thank","fine","you"],a:"I am fine thank you."}, {w:["down","sit","Please"],a:"Please sit down."}, {w:["your","books","Open"],a:"Open your books."}, {w:["at","Look","board","the"],a:"Look at the board."}, {w:["repeat","you","that","Can","?"],a:"Can you repeat that?"}, {w:["you","much","Thank","very"],a:"Thank you very much."}, {w:["tomorrow","you","See"],a:"See you tomorrow."} ] },
      { mcq: [ {s:"What is ___ name?",blank:2,a:"your",opts:["your","you","yours","he"]}, {s:"He ___ a student.",blank:1,a:"is",opts:["is","are","am","be"]}, {s:"___ is a pen.",blank:0,a:"This",opts:["This","These","Those","They"]}, {s:"Are ___ a teacher?",blank:1,a:"you",opts:["you","he","she","they"]}, {s:"Yes, I ___.",blank:2,a:"am",opts:["am","is","are","do"]}, {s:"No, she ___.",blank:2,a:"isn't",opts:["isn't","aren't","am not","don't"]}, {s:"They ___ from Spain.",blank:1,a:"are",opts:["are","is","am","do"]}, {s:"___ are you from?",blank:0,a:"Where",opts:["Where","What","Who","How"]}, {s:"What ___ this?",blank:1,a:"is",opts:["is","are","am","be"]}, {s:"It is ___ apple.",blank:2,a:"an",opts:["an","a","the","two"]} ], fill: [ {s:"What is ___ name?",a:"your"}, {s:"She ___ a doctor.",a:"is"}, {s:"___ are my books.",a:"These"}, {s:"Where ___ he from?",a:"is"}, {s:"We ___ students.",a:"are"}, {s:"It ___ a good book.",a:"is"}, {s:"Are they ___ London?",a:"from"}, {s:"This is ___ umbrella.",a:"an"}, {s:"What ___ those?",a:"are"}, {s:"They are ___.",a:"pens"} ], order: [ {w:["is","name","your","What","?"],a:"What is your name?"}, {w:["student","is","a","He"],a:"He is a student."}, {w:["This","pen","is","a"],a:"This is a pen."}, {w:["you","a","Are","teacher","?"],a:"Are you a teacher?"}, {w:["I","Yes","am"],a:"Yes I am."}, {w:["isn't","No","she"],a:"No she isn't."}, {w:["from","Spain","are","They"],a:"They are from Spain."}, {w:["from","are","Where","you","?"],a:"Where are you from?"}, {w:["is","What","this","?"],a:"What is this?"}, {w:["apple","an","is","It"],a:"It is an apple."} ] },
      { mcq: [ {s:"How do you ___ that?",blank:3,a:"spell",opts:["spell","say","speak","read"]}, {s:"My phone ___ is 12345.",blank:2,a:"number",opts:["number","name","email","address"]}, {s:"What is your ___ address?",blank:3,a:"email",opts:["email","letter","phone","house"]}, {s:"___ you later.",blank:0,a:"See",opts:["See","Look","Watch","Meet"]}, {s:"Have a good ___.",blank:3,a:"day",opts:["day","time","hour","week"]}, {s:"I am twenty years ___.",blank:4,a:"old",opts:["old","age","year","time"]}, {s:"___ is your birthday?",blank:0,a:"When",opts:["When","Where","What","Who"]}, {s:"It is ___ Monday.",blank:2,a:"on",opts:["on","in","at","to"]}, {s:"My name ___ Sarah.",blank:2,a:"is",opts:["is","are","am","be"]}, {s:"I live ___ New York.",blank:2,a:"in",opts:["in","on","at","to"]} ], fill: [ {s:"How do you ___ your name?",a:"spell"}, {s:"What is your phone ___?",a:"number"}, {s:"Have a nice ___!",a:"day"}, {s:"See you ___.",a:"later"}, {s:"How ___ are you?",a:"old"}, {s:"When is your ___?",a:"birthday"}, {s:"The meeting is ___ Friday.",a:"on"}, {s:"I live ___ Paris.",a:"in"}, {s:"My email ___ is a@b.com.",a:"address"}, {s:"She ___ 25 years old.",a:"is"} ], order: [ {w:["do","spell","you","that","How","?"],a:"How do you spell that?"}, {w:["number","phone","your","is","What","?"],a:"What is your phone number?"}, {w:["email","your","What","address","is","?"],a:"What is your email address?"}, {w:["later","you","See"],a:"See you later."}, {w:["a","day","good","Have"],a:"Have a good day."}, {w:["old","am","I","twenty","years"],a:"I am twenty years old."}, {w:["birthday","is","your","When","?"],a:"When is your birthday?"}, {w:["Monday","is","It","on"],a:"It is on Monday."}, {w:["is","My","Sarah","name"],a:"My name is Sarah."}, {w:["New York","live","I","in"],a:"I live in New York."} ] },
      { mcq: [ {s:"What's ___ name?",blank:1,a:"her",opts:["her","she","hers","he"]}, {s:"His name ___ David.",blank:2,a:"is",opts:["is","are","am","be"]}, {s:"Is ___ your friend?",blank:1,a:"he",opts:["he","his","him","they"]}, {s:"They ___ my parents.",blank:1,a:"are",opts:["are","is","am","do"]}, {s:"This is ___ book.",blank:2,a:"my",opts:["my","I","mine","me"]}, {s:"Are those ___ keys?",blank:2,a:"your",opts:["your","you","yours","she"]}, {s:"No, they ___ mine.",blank:2,a:"aren't",opts:["aren't","isn't","am not","don't"]}, {s:"Whose pen is ___?",blank:3,a:"this",opts:["this","these","those","they"]}, {s:"It is ___ bag.",blank:2,a:"John's",opts:["John's","John","Johns","John is"]}, {s:"Where ___ they from?",blank:1,a:"are",opts:["are","is","am","do"]} ], fill: [ {s:"What is ___ name?",a:"his"}, {s:"Her name ___ Emma.",a:"is"}, {s:"Are they your ___?",a:"friends"}, {s:"This is ___ car.",a:"our"}, {s:"Is that ___ house?",a:"their"}, {s:"These are ___ shoes.",a:"my"}, {s:"Whose phone is ___?",a:"this"}, {s:"It is ___ phone.",a:"Mary's"}, {s:"Where ___ she from?",a:"is"}, {s:"They ___ from Germany.",a:"are"} ], order: [ {w:["is","her","What","name","?"],a:"What is her name?"}, {w:["name","His","David","is"],a:"His name is David."}, {w:["friend","Is","your","he","?"],a:"Is he your friend?"}, {w:["my","parents","are","They"],a:"They are my parents."}, {w:["book","This","my","is"],a:"This is my book."}, {w:["keys","Are","your","those","?"],a:"Are those your keys?"}, {w:["mine","aren't","No","they"],a:"No they aren't mine."}, {w:["pen","this","Whose","is","?"],a:"Whose pen is this?"}, {w:["bag","It","John's","is"],a:"It is John's bag."}, {w:["from","are","they","Where","?"],a:"Where are they from?"} ] }
    ]
  },
  { unit:1, label:"First meetings", emoji:"🤝",
    lessons: [
      { // 1A: On business or on holiday? (Verb be I/you)
        mcq: [
          {s:"___ you here on holiday?",blank:0,a:"Are",opts:["Are","Is","Am","Do"]},
          {s:"Yes, I ___.",blank:2,a:"am",opts:["am","is","are","be"]},
          {s:"I ___ not here on business.",blank:1,a:"'m",opts:["'m","'re","'s","are"]},
          {s:"Nice to ___ you.",blank:2,a:"meet",opts:["meet","see","find","look"]},
          {s:"___ you here to study?",blank:0,a:"Are",opts:["Are","Is","Am","Do"]},
          {s:"No, I ___ not.",blank:2,a:"am",opts:["am","is","are","do"]},
          {s:"___ she on holiday?",blank:0,a:"Is",opts:["Is","Are","Am","Do"]},
          {s:"Yes, she ___.",blank:2,a:"is",opts:["is","are","am","does"]},
          {s:"___ they on business?",blank:0,a:"Are",opts:["Are","Is","Am","Do"]},
          {s:"No, they ___.",blank:2,a:"aren't",opts:["aren't","isn't","am not","don't"]}
        ],
        fill: [
          {s:"I ___ here on holiday.",a:"am"},
          {s:"___ you here on business?",a:"Are"},
          {s:"Nice to ___ you.",a:"meet"},
          {s:"Yes, I ___.",a:"am"},
          {s:"I'm ___ to study. (shu yerdaman)",a:"here"},
          {s:"___ he on holiday?",a:"Is"},
          {s:"Are you here ___ business?",a:"on"},
          {s:"No, I'm ___. (inkor)",a:"not"},
          {s:"___ are on holiday. (Biz)",a:"We"},
          {s:"Are ___ here to study? (ular)",a:"they"}
        ],
        order: [
          {w:["here","I","am","holiday","on"],a:"I am here on holiday."},
          {w:["you","Are","business","here","on","?"],a:"Are you here on business?"},
          {w:["to","Nice","you","meet"],a:"Nice to meet you."},
          {w:["study","here","to","I'm"],a:"I'm here to study."},
          {w:["she","Is","holiday","on","?"],a:"Is she on holiday?"},
          {w:["are","They","business","on","here"],a:"They are here on business."},
          {w:["not","am","I","here"],a:"I am not here."},
          {w:["you","Are","study","to","here","?"],a:"Are you here to study?"},
          {w:["is","He","holiday","on","here"],a:"He is here on holiday."},
          {w:["you","And","?"],a:"And you?"}
        ]
      },
      { // 1B: Where are you from? (Verb be we/you, Countries)
        mcq: [
          {s:"Where ___ you from?",blank:1,a:"are",opts:["are","is","am","do"]},
          {s:"I ___ from Brazil.",blank:1,a:"am",opts:["am","is","are","be"]},
          {s:"We ___ from Indonesia.",blank:1,a:"are",opts:["are","is","am","do"]},
          {s:"Are you from ___ UK?",blank:3,a:"the",opts:["the","a","an","—"]},
          {s:"He is from ___ USA.",blank:3,a:"the",opts:["the","a","an","—"]},
          {s:"Where ___ he from?",blank:1,a:"is",opts:["is","are","am","does"]},
          {s:"They ___ from China.",blank:1,a:"are",opts:["are","is","am","do"]},
          {s:"I am from ___.",blank:3,a:"Japan",opts:["Japan","Japanese","American","Spanish"]},
          {s:"Where in Spain ___ you from?",blank:3,a:"are",opts:["are","is","am","do"]},
          {s:"We are from ___.",blank:3,a:"Australia",opts:["Australia","Australian","English","Britain"]}
        ],
        fill: [
          {s:"Where ___ you from?",a:"are"},
          {s:"I am from ___.",a:"Spain"},
          {s:"Where ___ Australia? (ichida/qayerida)",a:"in"},
          {s:"We ___ from Russia.",a:"are"},
          {s:"___ is from Turkey. (U qiz)",a:"She"},
          {s:"Are you from ___ UK?",a:"the"},
          {s:"Where ___ she from?",a:"is"},
          {s:"I'm from ___.",a:"Canada"},
          {s:"They are from ___ USA.",a:"the"},
          {s:"We are ___ Italy. (-dan)",a:"from"}
        ],
        order: [
          {w:["from","Where","are","you","?"],a:"Where are you from?"},
          {w:["from","We","the","are","USA"],a:"We are from the USA."},
          {w:["am","I","Brazil","from"],a:"I am from Brazil."},
          {w:["Australia","in","Where","?"],a:"Where in Australia?"},
          {w:["are","They","China","from"],a:"They are from China."},
          {w:["from","is","He","Japan"],a:"He is from Japan."},
          {w:["the","from","UK","am","I"],a:"I am from the UK."},
          {w:["Spain","from","are","We"],a:"We are from Spain."},
          {w:["from","she","Where","is","?"],a:"Where is she from?"},
          {w:["am","I","Russia","from"],a:"I am from Russia."}
        ]
      },
      { // 1C: How do you spell that? (Alphabet, Question words)
        mcq: [
          {s:"How do you ___ that?",blank:3,a:"spell",opts:["spell","say","speak","read"]},
          {s:"What is your ___ number?",blank:3,a:"phone",opts:["phone","name","email","address"]},
          {s:"___ are you from?",blank:0,a:"Where",opts:["Where","What","Who","When"]},
          {s:"___ is your name?",blank:0,a:"What",opts:["What","How","Where","When"]},
          {s:"What is your ___ address?",blank:3,a:"email",opts:["email","letter","house","phone"]},
          {s:"___ old are you?",blank:0,a:"How",opts:["How","What","Where","Who"]},
          {s:"___ is your birthday?",blank:0,a:"When",opts:["When","Where","What","Who"]},
          {s:"My name ___ David.",blank:2,a:"is",opts:["is","are","am","be"]},
          {s:"I am twenty years ___.",blank:4,a:"old",opts:["old","age","year","time"]},
          {s:"It is ___ Monday.",blank:2,a:"on",opts:["on","in","at","to"]}
        ],
        fill: [
          {s:"What is your email ___?",a:"address"},
          {s:"___ do you spell that?",a:"How"},
          {s:"What ___ your name?",a:"is"},
          {s:"___ is your phone number? (nima)",a:"What"},
          {s:"Where ___ you from?",a:"are"},
          {s:"How ___ are you?",a:"old"},
          {s:"___ is your birthday? (qachon)",a:"When"},
          {s:"I am twenty years ___.",a:"old"},
          {s:"My ___ is Alex. (ism)",a:"name"},
          {s:"It is ___ Friday. (da)",a:"on"}
        ],
        order: [
          {w:["name","What","your","is","?"],a:"What is your name?"},
          {w:["spell","do","that","you","How","?"],a:"How do you spell that?"},
          {w:["phone","What","number","your","is","?"],a:"What is your phone number?"},
          {w:["email","What","address","is","your","?"],a:"What is your email address?"},
          {w:["old","you","How","are","?"],a:"How old are you?"},
          {w:["birthday","your","is","When","?"],a:"When is your birthday?"},
          {w:["is","Monday","It","on"],a:"It is on Monday."},
          {w:["am","I","old","twenty","years"],a:"I am twenty years old."},
          {w:["name","My","David","is"],a:"My name is David."},
          {w:["you","Where","from","are","?"],a:"Where are you from?"}
        ]
      },
      { // 1D: Speaking and writing (Say hello and goodbye, fill in a form)
        mcq: [
          {s:"Have a nice ___.",blank:3,a:"day",opts:["day","time","hour","week"]},
          {s:"Fine, thanks. And ___?",blank:3,a:"you",opts:["you","your","me","I"]},
          {s:"See you ___.",blank:2,a:"later",opts:["later","after","late","soon"]},
          {s:"Good ___.",blank:1,a:"morning",opts:["morning","day","meet","hello"]},
          {s:"How ___ you?",blank:1,a:"are",opts:["are","is","am","do"]},
          {s:"I am here ___ business.",blank:3,a:"on",opts:["on","in","at","for"]},
          {s:"My ___ is Smith.",blank:1,a:"last name",opts:["last name","first name","number","address"]},
          {s:"___ to meet you.",blank:0,a:"Nice",opts:["Nice","Good","Well","Great"]},
          {s:"What is your ___ name?",blank:3,a:"first",opts:["first","one","number","start"]},
          {s:"Thanks. You ___.",blank:2,a:"too",opts:["too","also","two","to"]}
        ],
        fill: [
          {s:"___ are you? (qandaysiz)",a:"How"},
          {s:"See ___ later.",a:"you"},
          {s:"Have a nice ___.",a:"day"},
          {s:"Fine, ___. And you? (rahmat)",a:"thanks"},
          {s:"Good ___, everyone. (ertalab)",a:"morning"},
          {s:"___ to meet you. (yoqimli)",a:"Nice"},
          {s:"Thanks. You ___.",a:"too"},
          {s:"My first ___ is John.",a:"name"},
          {s:"I am here ___ holiday.",a:"on"},
          {s:"___ are you from?",a:"Where"}
        ],
        order: [
          {w:["a","Have","day","nice"],a:"Have a nice day."},
          {w:["later","See","you"],a:"See you later."},
          {w:["are","How","you","?"],a:"How are you?"},
          {w:["thanks","Fine","you","And","?"],a:"Fine thanks. And you?"},
          {w:["too","Thanks","You"],a:"Thanks. You too."},
          {w:["meet","Nice","to","you"],a:"Nice to meet you."},
          {w:["morning","Good","class"],a:"Good morning class."},
          {w:["first","is","name","My","John"],a:"My first name is John."},
          {w:["am","here","holiday","I","on"],a:"I am here on holiday."},
          {w:["you","Where","from","are","?"],a:"Where are you from?"}
        ]
      }
    ]
  },
  { unit:2, label:"Questions", emoji:"❓",
    lessons: [
      { // 2A darsi (What's this in English? - this/that/these/those)
        mcq: [
          {s:"___ is a pen.",blank:0,a:"This",opts:["This","These","Those","They"]},
          {s:"___ are my keys.",blank:0,a:"These",opts:["These","This","That","It"]},
          {s:"What is ___ over there?",blank:2,a:"that",opts:["that","this","these","it"]},
          {s:"What are ___?",blank:2,a:"those",opts:["those","that","this","he"]},
          {s:"This is a ___.",blank:3,a:"dictionary",opts:["dictionary","tablets","keys","pens"]},
          {s:"These are ___.",blank:2,a:"tablets",opts:["tablets","tablet","a tablet","the tablet"]},
          {s:"Is this ___ phone?",blank:2,a:"your",opts:["your","you","yours","he"]},
          {s:"Yes, it ___.",blank:2,a:"is",opts:["is","are","am","be"]},
          {s:"Are these your ___?",blank:3,a:"books",opts:["books","book","a book","the book"]},
          {s:"No, they ___.",blank:2,a:"aren't",opts:["aren't","isn't","not","don't"]}
        ],
        fill: [
          {s:"What is this ___ English?",a:"in"},
          {s:"It is ___ umbrella.",a:"an"},
          {s:"They are credit ___.",a:"cards"},
          {s:"Are ___ your keys?",a:"these"},
          {s:"Is ___ your bag over there?",a:"that"},
          {s:"Yes, they ___.",a:"are"},
          {s:"No, it ___.",a:"isn't"},
          {s:"What are ___ over there?",a:"those"},
          {s:"I have two ___.",a:"phones"},
          {s:"This ___ my wallet.",a:"is"}
        ],
        order: [
          {w:["this","What","in","English","is","?"],a:"What is this in English?"},
          {w:["are","my","credit","These","cards"],a:"These are my credit cards."},
          {w:["those","Are","keys","your","?"],a:"Are those your keys?"},
          {w:["is","dictionary","not","This","my"],a:"This is not my dictionary."},
          {w:["these","What","English","are","in","?"],a:"What are these in English?"},
          {w:["tablet","Is","your","that","?"],a:"Is that your tablet?"},
          {w:["my","Yes","are","books","they"],a:"Yes they are my books."},
          {w:["an","umbrella","It","is"],a:"It is an umbrella."},
          {w:["my","They","pens","are"],a:"They are my pens."},
          {w:["bag","Is","your","this","?"],a:"Is this your bag?"}
        ]
      },
      { // 2B darsi (What's your job? - jobs, numbers 11-100, he/she/it/they)
        mcq: [
          {s:"She ___ a doctor.",blank:1,a:"is",opts:["is","are","am","be"]},
          {s:"They ___ shop assistants.",blank:1,a:"are",opts:["are","is","am","do"]},
          {s:"He is ___ engineer.",blank:2,a:"an",opts:["an","a","the","—"]},
          {s:"Are they ___?",blank:2,a:"teachers",opts:["teachers","teacher","a teacher","the teacher"]},
          {s:"No, they ___ students.",blank:2,a:"are",opts:["are","is","am","do"]},
          {s:"My brother is a taxi ___.",blank:5,a:"driver",opts:["driver","drive","car","job"]},
          {s:"I am ___ years old.",blank:2,a:"twenty",opts:["twenty","twelve","two","age"]},
          {s:"Is he a ___?",blank:3,a:"waiter",opts:["waiter","waiters","wait","jobs"]},
          {s:"Yes, ___ is.",blank:1,a:"he",opts:["he","she","it","they"]},
          {s:"She works in a ___.",blank:4,a:"hospital",opts:["hospital","doctor","nurse","patient"]}
        ],
        fill: [
          {s:"What is ___ job?",a:"your"},
          {s:"He ___ a police officer.",a:"is"},
          {s:"She is ___ actor.",a:"an"},
          {s:"Are they ___?",a:"doctors"},
          {s:"Yes, they ___.",a:"are"},
          {s:"He is a taxi ___.",a:"driver"},
          {s:"I am thirty ___ old.",a:"years"},
          {s:"She is a shop ___.",a:"assistant"},
          {s:"They ___ businessmen.",a:"are"},
          {s:"Is she a ___?",a:"teacher"}
        ],
        order: [
          {w:["your","job","What","is","?"],a:"What is your job?"},
          {w:["shop","assistant","is","She","a"],a:"She is a shop assistant."},
          {w:["they","Are","doctors","?"],a:"Are they doctors?"},
          {w:["taxi","a","He","driver","is"],a:"He is a taxi driver."},
          {w:["not","teachers","are","They"],a:"They are not teachers."},
          {w:["officer","police","Is","a","he","?"],a:"Is he a police officer?"},
          {w:["actor","is","She","an"],a:"She is an actor."},
          {w:["twenty","I","old","am","years"],a:"I am twenty years old."},
          {w:["doctor","sister","My","a","is"],a:"My sister is a doctor."},
          {w:["in","hospital","They","work","a"],a:"They work in a hospital."}
        ]
      },
      { // 2C darsi (Where are they? - Prepositions of place)
        mcq: [
          {s:"The book is ___ the table.",blank:3,a:"on",opts:["on","in","under","next to"]},
          {s:"The keys are ___ the bag.",blank:3,a:"in",opts:["in","on","under","at"]},
          {s:"The cat is ___ the chair.",blank:3,a:"under",opts:["under","on","in","next"]},
          {s:"The bank is ___ to the cafe.",blank:3,a:"next",opts:["next","near","on","in"]},
          {s:"Where ___ the pens?",blank:1,a:"are",opts:["are","is","am","do"]},
          {s:"___ is the laptop?",blank:0,a:"Where",opts:["Where","What","Who","How"]},
          {s:"It is ___ the desk.",blank:2,a:"on",opts:["on","in","at","under"]},
          {s:"They are ___ the box.",blank:2,a:"in",opts:["in","on","under","to"]},
          {s:"The phone is ___ the book.",blank:3,a:"under",opts:["under","in","on","next"]},
          {s:"The restaurant is next ___ the hotel.",blank:4,a:"to",opts:["to","in","on","at"]}
        ],
        fill: [
          {s:"The pen is ___ the desk.",a:"on"},
          {s:"Where ___ the keys?",a:"are"},
          {s:"The dictionary is ___ the bag.",a:"in"},
          {s:"The shoes are ___ the bed.",a:"under"},
          {s:"The school is ___ to the park.",a:"next"},
          {s:"Where ___ the tablet?",a:"is"},
          {s:"It is ___ the table.",a:"on"},
          {s:"The children are ___ the classroom.",a:"in"},
          {s:"The cat is ___ the sofa.",a:"under"},
          {s:"The cafe is next ___ the bank.",a:"to"}
        ],
        order: [
          {w:["the","Where","book","is","?"],a:"Where is the book?"},
          {w:["table","on","the","is","It"],a:"It is on the table."},
          {w:["keys","Where","are","the","?"],a:"Where are the keys?"},
          {w:["the","are","They","in","bag"],a:"They are in the bag."},
          {w:["cat","chair","under","The","is","the"],a:"The cat is under the chair."},
          {w:["to","bank","is","cafe","next","The","the"],a:"The bank is next to the cafe."},
          {w:["desk","on","The","the","pen","is"],a:"The pen is on the desk."},
          {w:["are","table","They","the","under"],a:"They are under the table."},
          {w:["tablet","is","Where","the","?"],a:"Where is the tablet?"},
          {w:["to","school","park","next","is","The","the"],a:"The school is next to the park."}
        ]
      },
      { // 2D darsi (Speaking and writing - Personal information)
        mcq: [
          {s:"What is your ___?",blank:3,a:"name",opts:["name","call","spell","speak"]},
          {s:"Could you ___ that, please?",blank:2,a:"spell",opts:["spell","say","speak","read"]},
          {s:"What is your mobile ___?",blank:4,a:"number",opts:["number","phone","call","address"]},
          {s:"___ are you from?",blank:0,a:"Where",opts:["Where","What","Who","How"]},
          {s:"What is your email ___?",blank:4,a:"address",opts:["address","name","letter","place"]},
          {s:"Are you ___?",blank:2,a:"married",opts:["married","marry","marriage","single"]},
          {s:"No, I am ___.",blank:3,a:"single",opts:["single","married","alone","one"]},
          {s:"How ___ are you?",blank:1,a:"old",opts:["old","age","years","long"]},
          {s:"I am 25 years ___.",blank:4,a:"old",opts:["old","age","time","year"]},
          {s:"Can I have your ___, please?",blank:4,a:"details",opts:["details","detail","name","call"]}
        ],
        fill: [
          {s:"What is your ___ name?",a:"first"},
          {s:"What is your ___ name?",a:"last"},
          {s:"How do you ___ it?",a:"spell"},
          {s:"What is your ___ number?",a:"mobile"},
          {s:"Are you ___ or single?",a:"married"},
          {s:"I am twenty years ___.",a:"old"},
          {s:"Where ___ you from?",a:"are"},
          {s:"What is your ___ address?",a:"email"},
          {s:"Could you spell ___, please?",a:"that"},
          {s:"Thank you for your ___.",a:"help"}
        ],
        order: [
          {w:["first","is","What","your","name","?"],a:"What is your first name?"},
          {w:["spell","that","Could","you","please","?"],a:"Could you spell that please?"},
          {w:["mobile","your","What","number","is","?"],a:"What is your mobile number?"},
          {w:["or","Are","married","you","single","?"],a:"Are you married or single?"},
          {w:["five","years","am","I","twenty","old"],a:"I am twenty five years old."},
          {w:["email","your","address","is","What","?"],a:"What is your email address?"},
          {w:["from","are","Where","you","?"],a:"Where are you from?"},
          {w:["details","your","have","Can","I","?"],a:"Can I have your details?"},
          {w:["for","your","Thank","help","you"],a:"Thank you for your help."},
          {w:["last","is","your","What","name","?"],a:"What is your last name?"}
        ]
      }
    ]
  },
  { unit:3, label:"People and possessions", emoji:"🎒",
    lessons: [
      { // 3A darsi (Adjectives + Nouns - Sifat va otlar)
        mcq: [
          {s:"It is a ___ car.",a:"fast",opts:["fast","car","the","very"]},
          {s:"They are ___ shoes.",a:"new",opts:["new","news","nicely","much"]},
          {s:"I have a ___ house.",a:"big",opts:["big","sizes","tall","much"]},
          {s:"He has a ___ phone.",a:"black",opts:["black","color","darks","well"]},
          {s:"This is an ___ book.",a:"interesting",opts:["interesting","interest","bore","nicely"]},
          {s:"She is a ___ woman.",a:"beautiful",opts:["beautiful","beauty","well","nicely"]},
          {s:"These are ___ apples.",a:"red",opts:["red","colors","sweet","much"]},
          {s:"It is a ___ city.",a:"noisy",opts:["noisy","noise","louds","sound"]},
          {s:"We have a ___ TV.",a:"small",opts:["small","little","shorts","few"]},
          {s:"This is a ___ watch.",a:"cheap",opts:["cheap","cost","cash","prices"]}
        ],
        fill: [
          {s:"It is a ___ car. (tez)",a:"fast"},
          {s:"They live in a ___ house. (katta)",a:"big"},
          {s:"She has ___ hair. (uzun)",a:"long"},
          {s:"He is a ___ man. (baland bo'yli)",a:"tall"},
          {s:"I want a ___ coffee. (issiq)",a:"hot"},
          {s:"It is a ___ day. (sovuq)",a:"cold"},
          {s:"This is a ___ computer. (yangi)",a:"new"},
          {s:"They have a ___ garden. (chiroyli)",a:"beautiful"},
          {s:"It is an ___ film. (eski)",a:"old"},
          {s:"She wears ___ glasses. (qizil)",a:"red"}
        ],
        order: [
          {w:["is","a","fast","It","car"],a:"It is a fast car."},
          {w:["have","house","a","big","They"],a:"They have a big house."},
          {w:["a","tall","He","man","is"],a:"He is a tall man."},
          {w:["is","an","book","old","This"],a:"This is an old book."},
          {w:["got","She","hair","has","long"],a:"She has got long hair."},
          {w:["are","shoes","new","These"],a:"These are new shoes."},
          {w:["want","hot","I","coffee","a"],a:"I want a hot coffee."},
          {w:["beautiful","a","garden","is","It"],a:"It is a beautiful garden."},
          {w:["city","a","noisy","It","is"],a:"It is a noisy city."},
          {w:["a","phone","I","cheap","have"],a:"I have a cheap phone."}
        ]
      },
      { // 3B darsi (Possessions - Have got / Has got Positive & Negative)
        mcq: [
          {s:"I ___ got a new car.",a:"have",opts:["have","has","am","do"]},
          {s:"She ___ got a sister.",a:"has",opts:["has","have","is","does"]},
          {s:"They ___ got a big house.",a:"have",opts:["have","has","are","do"]},
          {s:"He ___ got a laptop.",a:"has",opts:["has","have","is","does"]},
          {s:"We haven't ___ a dog.",a:"got",opts:["got","get","getting","gets"]},
          {s:"She ___ got a blue pen.",a:"hasn't",opts:["hasn't","haven't","isn't","doesn't"]},
          {s:"I ___ got any money.",a:"haven't",opts:["haven't","hasn't","am not","don't"]},
          {s:"John ___ got a lot of friends.",a:"has",opts:["has","have","is","does"]},
          {s:"The house ___ got a garden.",a:"has",opts:["has","have","is","does"]},
          {s:"My parents ___ got two cars.",a:"have",opts:["have","has","are","do"]}
        ],
        fill: [
          {s:"I ___ got a brother.",a:"have"},
          {s:"She ___ got a new bag.",a:"has"},
          {s:"We haven't ___ a car.",a:"got"},
          {s:"He ___ got any brothers or sisters.",a:"hasn't"},
          {s:"They ___ got a lot of time.",a:"haven't"},
          {s:"The dog ___ got a toy.",a:"has"},
          {s:"I ___ got a headache.",a:"have"},
          {s:"She hasn't ___ a dictionary.",a:"got"},
          {s:"You ___ got a nice smile.",a:"have"},
          {s:"My friend ___ got a new job.",a:"has"}
        ],
        order: [
          {w:["got","I","a","car","have"],a:"I have got a car."},
          {w:["sister","has","She","a","got"],a:"She has got a sister."},
          {w:["haven't","money","any","We","got"],a:"We haven't got any money."},
          {w:["got","phone","He","hasn't","a"],a:"He hasn't got a phone."},
          {w:["big","have","a","They","got","house"],a:"They have got a big house."},
          {w:["house","got","garden","a","has","The"],a:"The house has got a garden."},
          {w:["got","parents","two","My","cars","have"],a:"My parents have got two cars."},
          {w:["hasn't","She","got","time","any"],a:"She hasn't got any time."},
          {w:["have","a","problem","got","I"],a:"I have got a problem."},
          {w:["friend","got","My","job","a","has","new"],a:"My friend has got a new job."}
        ]
      },
      { // 3C darsi (Questions with Have got / Has got)
        mcq: [
          {s:"___ you got a car?",a:"Have",opts:["Have","Has","Do","Are"]},
          {s:"___ she got a brother?",a:"Has",opts:["Has","Have","Does","Is"]},
          {s:"Yes, I ___.",a:"have",opts:["have","has","do","am"]},
          {s:"No, she ___.",a:"hasn't",opts:["hasn't","haven't","isn't","doesn't"]},
          {s:"What have you ___ in your bag?",a:"got",opts:["got","get","getting","gets"]},
          {s:"___ they got a garden?",a:"Have",opts:["Have","Has","Do","Are"]},
          {s:"Yes, he ___.",a:"has",opts:["has","have","is","does"]},
          {s:"How many children have they ___?",a:"got",opts:["got","have","has","get"]},
          {s:"Has he ___ a computer?",a:"got",opts:["got","have","get","gets"]},
          {s:"No, we ___.",a:"haven't",opts:["haven't","hasn't","aren't","don't"]}
        ],
        fill: [
          {s:"___ you got a pen?",a:"Have"},
          {s:"___ he got a bicycle?",a:"Has"},
          {s:"What ___ she got?",a:"has"},
          {s:"Yes, they ___.",a:"have"},
          {s:"No, he ___.",a:"hasn't"},
          {s:"How many sisters ___ you got?",a:"have"},
          {s:"___ your phone got a good camera?",a:"Has"},
          {s:"Have we ___ any milk?",a:"got"},
          {s:"What have they ___?",a:"got"},
          {s:"Yes, she ___.",a:"has"}
        ],
        order: [
          {w:["got","Have","a","car","you","?"],a:"Have you got a car?"},
          {w:["she","a","Has","brother","got","?"],a:"Has she got a brother?"},
          {w:["bag","have","What","in","your","got","you","?"],a:"What have you got in your bag?"},
          {w:["they","garden","a","Have","got","?"],a:"Have they got a garden?"},
          {w:["children","many","How","they","got","have","?"],a:"How many children have they got?"},
          {w:["he","computer","a","Has","got","?"],a:"Has he got a computer?"},
          {w:["you","got","pen","a","Have","?"],a:"Have you got a pen?"},
          {w:["sisters","got","have","many","How","you","?"],a:"How many sisters have you got?"},
          {w:["milk","we","any","Have","got","?"],a:"Have we got any milk?"},
          {w:["camera","phone","a","Has","your","got","good","?"],a:"Has your phone got a good camera?"}
        ]
      },
      { // 3D darsi (Speaking and writing - Describing and buying things)
        mcq: [
          {s:"How much ___ this bag?",a:"is",opts:["is","are","do","does"]},
          {s:"It's too ___.",a:"expensive",opts:["expensive","cost","money","pay"]},
          {s:"Do you have a ___ size?",a:"smaller",opts:["smaller","smalls","size","little"]},
          {s:"Can I ___ by card?",a:"pay",opts:["pay","buy","sell","cost"]},
          {s:"Here is your ___.",a:"receipt",opts:["receipt","paper","bill","note"]},
          {s:"That's fifty dollars, ___.",a:"please",opts:["please","thanks","excuse","sorry"]},
          {s:"What ___ is it?",a:"colour",opts:["colour","sizes","long","nice"]},
          {s:"I would like a ___ coffee.",a:"large",opts:["large","bigs","long","high"]},
          {s:"Do you like ___ shoes?",a:"these",opts:["these","this","that","it"]},
          {s:"I will ___ it.",a:"take",opts:["take","buy","get","pay"]}
        ],
        fill: [
          {s:"How ___ is this watch?",a:"much"},
          {s:"I like that ___ bag. (qora)",a:"black"},
          {s:"Do you want to ___ by cash?",a:"pay"},
          {s:"Here is your ___. (qaytim)",a:"change"},
          {s:"Can I help ___?",a:"you"},
          {s:"I am looking ___ a laptop.",a:"for"},
          {s:"Do you have ___ in blue? (buni)",a:"this"},
          {s:"It is very ___. (arzon)",a:"cheap"},
          {s:"What ___ do you want? (o'lcham)",a:"size"},
          {s:"I will ___ it. (olaman)",a:"take"}
        ],
        order: [
          {w:["much","bag","How","this","is","?"],a:"How much is this bag?"},
          {w:["is","too","It","expensive"],a:"It is too expensive."},
          {w:["a","you","Do","size","smaller","have","?"],a:"Do you have a smaller size?"},
          {w:["pay","card","Can","I","by","?"],a:"Can I pay by card?"},
          {w:["is","receipt","Here","your"],a:"Here is your receipt."},
          {w:["want","cash","to","by","pay","you","Do","?"],a:"Do you want to pay by cash?"},
          {w:["you","help","I","Can","?"],a:"Can I help you?"},
          {w:["laptop","looking","for","am","I","a"],a:"I am looking for a laptop."},
          {w:["this","have","blue","you","Do","in","?"],a:"Do you have this in blue?"},
          {w:["it","I","take","will"],a:"I will take it."}
        ]
      }
    ]
  },
  { unit:4, label:"My life", emoji:"📅",
    lessons: [
      { // 4A: About me (Present simple positive, common verbs)
        mcq: [
          {s:"I ___ up at 7.00.",blank:1,a:"get",opts:["get","stand","wake","go"]},
          {s:"She ___ to the radio.",blank:1,a:"listens",opts:["listens","hears","watches","reads"]},
          {s:"He ___ work at 8.30.",blank:1,a:"starts",opts:["starts","begins","goes","does"]},
          {s:"We ___ in a big house.",blank:1,a:"live",opts:["live","life","leave","living"]},
          {s:"He ___ to university.",blank:1,a:"goes",opts:["goes","go","walks","leaves"]},
          {s:"I ___ a sister.",blank:1,a:"have",opts:["have","has","am","got"]},
          {s:"They ___ television in the evening.",blank:1,a:"watch",opts:["watch","see","look","read"]},
          {s:"My brother ___ in a bank.",blank:1,a:"works",opts:["works","work","job","does"]},
          {s:"I ___ English.",blank:1,a:"study",opts:["study","studies","read","learns"]},
          {s:"She ___ early.",blank:1,a:"finishes",opts:["finishes","finish","stops","ends"]}
        ],
        fill: [
          {s:"I ___ a sister. (menda bor)",a:"have"},
          {s:"She ___ television. (ko'radi)",a:"watches"},
          {s:"He ___ in a bank. (ishlaydi)",a:"works"},
          {s:"I ___ up at six.",a:"get"},
          {s:"We ___ in London. (yashaymiz)",a:"live"},
          {s:"He ___ work at nine. (boshlaydi)",a:"starts"},
          {s:"I ___ to music. (eshitaman)",a:"listen"},
          {s:"She ___ to university. (boradi)",a:"goes"},
          {s:"They ___ English. (o'rganishadi)",a:"study"},
          {s:"He ___ a book. (o'qiydi)",a:"reads"}
        ],
        order: [
          {w:["live","I","house","in","a","big"],a:"I live in a big house."},
          {w:["starts","He","at","work","nine"],a:"He starts work at nine."},
          {w:["up","I","at","seven","get"],a:"I get up at seven."},
          {w:["listens","She","radio","to","the"],a:"She listens to the radio."},
          {w:["in","works","bank","a","He"],a:"He works in a bank."},
          {w:["watch","They","TV","evening","the","in"],a:"They watch TV in the evening."},
          {w:["sister","a","have","I"],a:"I have a sister."},
          {w:["to","goes","She","university"],a:"She goes to university."},
          {w:["English","We","study"],a:"We study English."},
          {w:["finishes","He","early","work"],a:"He finishes work early."}
        ]
      },
      { // 4B: Journeys (Present simple negative)
        mcq: [
          {s:"I ___ go to work by bus.",blank:1,a:"don't",opts:["don't","doesn't","not","am not"]},
          {s:"She ___ drive to work.",blank:1,a:"doesn't",opts:["doesn't","don't","isn't","not"]},
          {s:"He goes to work ___ train.",blank:4,a:"by",opts:["by","on","in","with"]},
          {s:"We ___ like big cities.",blank:1,a:"don't",opts:["don't","doesn't","not","aren't"]},
          {s:"He ___ cycle to work.",blank:1,a:"doesn't",opts:["doesn't","don't","not","no"]},
          {s:"I ___ walk to the office.",blank:1,a:"don't",opts:["don't","doesn't","am not","no"]},
          {s:"They go ___ ferry.",blank:2,a:"by",opts:["by","on","in","to"]},
          {s:"My father ___ take the bus.",blank:2,a:"doesn't",opts:["doesn't","don't","isn't","not"]},
          {s:"I travel to school ___ car.",blank:4,a:"by",opts:["by","on","in","at"]},
          {s:"We ___ have a car.",blank:1,a:"don't",opts:["don't","doesn't","aren't","not"]}
        ],
        fill: [
          {s:"I ___ go to work by car. (inkor)",a:"don't"},
          {s:"She doesn't ___ to work. (piyoda yurish)",a:"walk"},
          {s:"He travels ___ train.",a:"by"},
          {s:"We ___ like traffic. (inkor)",a:"don't"},
          {s:"He doesn't ___ to work. (velosipedda)",a:"cycle"},
          {s:"They go ___ bus.",a:"by"},
          {s:"I ___ drive a car. (inkor)",a:"don't"},
          {s:"She ___ take the ferry. (inkor)",a:"doesn't"},
          {s:"I go to school ___ foot.",a:"on"},
          {s:"We ___ have bicycles. (inkor)",a:"don't"}
        ],
        order: [
          {w:["don't","I","by","bus","go"],a:"I don't go by bus."},
          {w:["doesn't","She","to","work","drive"],a:"She doesn't drive to work."},
          {w:["by","travels","train","He"],a:"He travels by train."},
          {w:["cities","We","big","don't","like"],a:"We don't like big cities."},
          {w:["doesn't","cycle","He","work","to"],a:"He doesn't cycle to work."},
          {w:["to","I","walk","office","the","don't"],a:"I don't walk to the office."},
          {w:["by","go","They","ferry"],a:"They go by ferry."},
          {w:["take","doesn't","My","bus","father","the"],a:"My father doesn't take the bus."},
          {w:["car","I","school","by","travel","to"],a:"I travel to school by car."},
          {w:["car","don't","We","a","have"],a:"We don't have a car."}
        ]
      },
      { // 4C: My day (Present simple yes/no questions)
        mcq: [
          {s:"___ you work at the weekend?",blank:0,a:"Do",opts:["Do","Does","Are","Is"]},
          {s:"___ he check emails at home?",blank:0,a:"Does",opts:["Does","Do","Is","Has"]},
          {s:"Yes, I ___.",blank:2,a:"do",opts:["do","does","am","have"]},
          {s:"No, she ___.",blank:2,a:"doesn't",opts:["doesn't","don't","isn't","hasn't"]},
          {s:"___ they live in a flat?",blank:0,a:"Do",opts:["Do","Does","Are","Have"]},
          {s:"___ she start work at 9.00?",blank:0,a:"Does",opts:["Does","Do","Is","Has"]},
          {s:"Yes, he ___.",blank:2,a:"does",opts:["does","do","is","has"]},
          {s:"No, I ___.",blank:2,a:"don't",opts:["don't","doesn't","am not","haven't"]},
          {s:"___ you have lunch at work?",blank:0,a:"Do",opts:["Do","Does","Are","Have"]},
          {s:"___ it open at 8.00?",blank:0,a:"Does",opts:["Does","Do","Is","Has"]}
        ],
        fill: [
          {s:"___ they live in a flat?",a:"Do"},
          {s:"Yes, he ___.",a:"does"},
          {s:"___ you work at the weekend?",a:"Do"},
          {s:"___ she check emails?",a:"Does"},
          {s:"No, I ___.",a:"don't"},
          {s:"No, she ___.",a:"doesn't"},
          {s:"___ we have a meeting today?",a:"Do"},
          {s:"Yes, they ___.",a:"do"},
          {s:"___ you like coffee?",a:"Do"},
          {s:"___ he drive a car?",a:"Does"}
        ],
        order: [
          {w:["you","Do","at","work","weekend","the","?"],a:"Do you work at the weekend?"},
          {w:["he","Does","finish","early","work","?"],a:"Does he finish work early?"},
          {w:["they","Do","a","live","flat","in","?"],a:"Do they live in a flat?"},
          {w:["she","Does","emails","check","?"],a:"Does she check emails?"},
          {w:["you","have","lunch","Do","work","at","?"],a:"Do you have lunch at work?"},
          {w:["he","Does","a","drive","car","?"],a:"Does he drive a car?"},
          {w:["we","a","Do","meeting","have","?"],a:"Do we have a meeting?"},
          {w:["it","Does","open","8.00","at","?"],a:"Does it open at 8.00?"},
          {w:["you","like","Do","coffee","?"],a:"Do you like coffee?"},
          {w:["she","work","Does","9.00","start","at","?"],a:"Does she start work at 9.00?"}
        ]
      },
      { // 4D: Speaking and writing (Ask for things in a shop)
        mcq: [
          {s:"Can I ___ you?",blank:2,a:"help",opts:["help","see","look","find"]},
          {s:"How ___ is this bag?",blank:1,a:"much",opts:["much","many","money","cost"]},
          {s:"Do you have ___ umbrellas?",blank:3,a:"any",opts:["any","some","a","the"]},
          {s:"I'll ___ it.",blank:1,a:"take",opts:["take","buy","get","give"]},
          {s:"How much ___ these shoes?",blank:2,a:"are",opts:["are","is","do","does"]},
          {s:"Yes, they are over ___.",blank:5,a:"there",opts:["there","here","where","their"]},
          {s:"No, thanks. Just ___.",blank:3,a:"looking",opts:["looking","look","see","watching"]},
          {s:"It is 20 ___.",blank:3,a:"dollars",opts:["dollars","dollar","money","price"]},
          {s:"Excuse ___, where is the book?",blank:1,a:"me",opts:["me","I","my","mine"]},
          {s:"Is that ___?",blank:2,a:"everything",opts:["everything","anything","all","something"]}
        ],
        fill: [
          {s:"Excuse ___. Do you have any pens?",a:"me"},
          {s:"It ___ 20 dollars.",a:"is"},
          {s:"Can I ___ you? (yordam bermoq)",a:"help"},
          {s:"How ___ is this? (qancha)",a:"much"},
          {s:"Do you have ___ bags?",a:"any"},
          {s:"I'll ___ it. (olaman)",a:"take"},
          {s:"They are over ___. (u yerda)",a:"there"},
          {s:"Just ___, thanks. (ko'ryapman)",a:"looking"},
          {s:"Is that ___? (hammasimi)",a:"everything"},
          {s:"How much ___ these?",a:"are"}
        ],
        order: [
          {w:["much","How","this","is","?"],a:"How much is this?"},
          {w:["you","Can","help","I","?"],a:"Can I help you?"},
          {w:["have","Do","any","umbrellas","you","?"],a:"Do you have any umbrellas?"},
          {w:["take","I","will","it"],a:"I will take it."},
          {w:["much","are","shoes","these","How","?"],a:"How much are these shoes?"},
          {w:["are","there","over","They"],a:"They are over there."},
          {w:["thanks","looking","Just"],a:"Just looking thanks."},
          {w:["is","20","dollars","It"],a:"It is 20 dollars."},
          {w:["me","Excuse","have","pens","you","Do","?"],a:"Excuse me Do you have pens?"},
          {w:["everything","that","Is","?"],a:"Is that everything?"}
        ]
      }
    ]
  },
  { unit:5, label:"Style and design", emoji:"🎨",
    lessons: [
      { // 5A darsi (Clothes style - Adverbs of frequency: always, usually, often, never)
        mcq: [
          {s:"I ___ wear jeans at the weekend.",blank:1,a:"usually",opts:["usually","usual","use","am"]},
          {s:"She ___ buys clothes online.",blank:1,a:"often",opts:["often","many","much","some"]},
          {s:"He never ___ a tie to work.",blank:2,a:"wears",opts:["wears","wear","wearing","is"]},
          {s:"We ___ go shopping on Saturdays.",blank:1,a:"sometimes",opts:["sometimes","sometime","time","always"]},
          {s:"Do you ___ wear smart clothes?",blank:2,a:"always",opts:["always","all","alway","every"]},
          {s:"I ___ wear yellow clothes.",blank:1,a:"never",opts:["never","no","not","don't"]},
          {s:"My father ___ wears sports clothes.",blank:2,a:"sometimes",opts:["sometimes","some","times","sometime"]},
          {s:"They usually ___ casual clothes.",blank:2,a:"wear",opts:["wear","wears","wearing","are"]},
          {s:"What ___ do you usually wear?",blank:1,a:"clothes",opts:["clothes","clothing","cloth","cloths"]},
          {s:"She always wears a red ___.",blank:5,a:"dress",opts:["dress","dresses","dressing","dressed"]}
        ],
        fill: [
          {s:"I ___ wear a uniform to school. (har doim)",a:"always"},
          {s:"She ___ goes clothes shopping. (tez-tez)",a:"often"},
          {s:"He ___ wears yellow. (hech qachon)",a:"never"},
          {s:"We ___ wear casual clothes on Fridays. (odatda)",a:"usually"},
          {s:"I buy shoes online ___. (ba'zan)",a:"sometimes"},
          {s:"My brother always ___ a jacket. (kiyadi)",a:"wears"},
          {s:"What do you usually ___ at work? (kiyasiz)",a:"wear"},
          {s:"I never wear ___ clothes. (jiddiy/rasmiy)",a:"smart"},
          {s:"Do you often ___ shopping? (borasiz)",a:"go"},
          {s:"She usually wears a blue ___. (yubka)",a:"skirt"}
        ],
        order: [
          {w:["always","I","smart","wear","clothes"],a:"I always wear smart clothes."},
          {w:["never","yellow","She","wears"],a:"She never wears yellow."},
          {w:["often","clothes","go","shopping","We"],a:"We often go clothes shopping."},
          {w:["usually","jeans","you","Do","wear","?"],a:"Do you usually wear jeans?"},
          {w:["sometimes","sports","clothes","wears","He"],a:"He sometimes wears sports clothes."},
          {w:["never","clothes","buy","online","I"],a:"I never buy clothes online."},
          {w:["usually","wear","What","you","do","?"],a:"What do you usually wear?"},
          {w:["father","My","a","hat","wears","sometimes"],a:"My father sometimes wears a hat."},
          {w:["wear","dark","colours","They","always"],a:"They always wear dark colours."},
          {w:["usually","casual","I","clothes","wear"],a:"I usually wear casual clothes."}
        ]
      },
      { // 5B darsi (Amazing architecture - Wh-questions)
        mcq: [
          {s:"___ is the name of that building?",blank:0,a:"What",opts:["What","Who","Where","When"]},
          {s:"___ do you live?",blank:0,a:"Where",opts:["Where","What","Who","How"]},
          {s:"___ do people like fashion?",blank:0,a:"Why",opts:["Why","What","Where","Who"]},
          {s:"___ does the shop close?",blank:0,a:"When",opts:["When","What","Who","Why"]},
          {s:"___ is your favourite colour?",blank:0,a:"What",opts:["What","Why","How","Where"]},
          {s:"___ music do you like?",blank:0,a:"What",opts:["What","When","Why","Where"]},
          {s:"___ is the plaza open?",blank:0,a:"When",opts:["When","What","Who","How"]},
          {s:"___ do you buy your clothes?",blank:0,a:"Where",opts:["Where","What","When","Why"]},
          {s:"___ do you like this building?",blank:0,a:"Why",opts:["Why","What","Where","When"]},
          {s:"___ old is the museum?",blank:0,a:"How",opts:["How","What","When","Why"]}
        ],
        fill: [
          {s:"___ do you live? (Qayerda)",a:"Where"},
          {s:"___ do you study English? (Nega)",a:"Why"},
          {s:"___ time is the meeting? (Qaysi)",a:"What"},
          {s:"___ is your birthday? (Qachon)",a:"When"},
          {s:"___ do you go on holiday? (Qayerga)",a:"Where"},
          {s:"___ is your favourite building? (Nima)",a:"What"},
          {s:"___ do you work? (Qayerda)",a:"Where"},
          {s:"___ do you like it? (Nega)",a:"Why"},
          {s:"___ is the museum open? (Qachon)",a:"When"},
          {s:"___ old is he? (Qanday/Necha)",a:"How"}
        ],
        order: [
          {w:["live","Where","do","you","?"],a:"Where do you live?"},
          {w:["music","What","do","like","you","?"],a:"What music do you like?"},
          {w:["the","When","close","do","shops","?"],a:"When do the shops close?"},
          {w:["study","you","English","Why","do","?"],a:"Why do you study English?"},
          {w:["buy","Where","do","you","clothes","your","?"],a:"Where do you buy your clothes?"},
          {w:["your","favourite","What","colour","is","?"],a:"What is your favourite colour?"},
          {w:["birthday","your","is","When","?"],a:"When is your birthday?"},
          {w:["fashion","like","people","Why","do","?"],a:"Why do people like fashion?"},
          {w:["holiday","go","Where","you","do","on","?"],a:"Where do you go on holiday?"},
          {w:["that","building","What","is","the","name","of","?"],a:"What is the name of that building?"}
        ]
      },
      { // 5C darsi (Styles around the world - Parts of the body, Present simple)
        mcq: [
          {s:"Tuareg men ___ a tagelmust.",blank:2,a:"wear",opts:["wear","wears","wearing","are"]},
          {s:"They ___ wear it in the house.",blank:1,a:"don't",opts:["don't","doesn't","not","aren't"]},
          {s:"___ they wear it outside?",blank:0,a:"Do",opts:["Do","Does","Are","Is"]},
          {s:"She ___ very long hair.",blank:1,a:"has",opts:["has","have","is","does"]},
          {s:"He ___ a really nice face.",blank:1,a:"has",opts:["has","have","is","do"]},
          {s:"We have two ___ and two legs.",blank:3,a:"arms",opts:["arms","arm","hands","hand"]},
          {s:"A person has two ___.",blank:4,a:"feet",opts:["feet","foot","foots","feets"]},
          {s:"She puts henna on her ___.",blank:5,a:"hands",opts:["hands","hand","arms","head"]},
          {s:"It is a ___ beautiful dress.",blank:3,a:"really",opts:["really","real","very much","lot"]},
          {s:"Does he ___ traditional clothes?",blank:2,a:"wear",opts:["wear","wears","wearing","is"]}
        ],
        fill: [
          {s:"They ___ wear trousers. (inkor shakli)",a:"don't"},
          {s:"___ she like brown skin? (so'roq)",a:"Does"},
          {s:"He ___ the tagelmust on his head. (kiyadi)",a:"wears"},
          {s:"Do you ___ this style? (yoqtirasizmi)",a:"like"},
          {s:"I have two arms and two ___. (oyoqlar)",a:"legs"},
          {s:"She has a beautiful ___. (yuz)",a:"face"},
          {s:"These shoes are ___ big. (juda)",a:"very"},
          {s:"She has really long ___. (soch)",a:"hair"},
          {s:"Women ___ white creams. (foydalanadilar)",a:"use"},
          {s:"I wash my ___ every day. (qo'llar)",a:"hands"}
        ],
        order: [
          {w:["Tuareg","wear","men","tagelmust","a"],a:"Tuareg men wear a tagelmust."},
          {w:["don't","it","house","They","wear","in","the"],a:"They don't wear it in the house."},
          {w:["she","Does","style","like","this","?"],a:"Does she like this style?"},
          {w:["really","long","She","has","hair"],a:"She has really long hair."},
          {w:["He","very","face","has","a","nice"],a:"He has a very nice face."},
          {w:["has","feet","two","A","person"],a:"A person has two feet."},
          {w:["do","it","Where","they","wear","?"],a:"Where do they wear it?"},
          {w:["wear","They","traditional","clothes"],a:"They wear traditional clothes."},
          {w:["a","really","beautiful","dress","It","is"],a:"It is a really beautiful dress."},
          {w:["hands","henna","Women","put","on","their"],a:"Women put henna on their hands."}
        ]
      },
      { // 5D darsi (Speaking and writing - Travel information and arrangements)
        mcq: [
          {s:"Where do I ___ a ticket?",blank:3,a:"buy",opts:["buy","get","make","do"]},
          {s:"Does this bus ___ to the city centre?",blank:3,a:"go",opts:["go","goes","going","leave"]},
          {s:"What time is the ___ train?",blank:4,a:"next",opts:["next","near","after","then"]},
          {s:"How ___ is it to the airport?",blank:1,a:"much",opts:["much","many","money","cost"]},
          {s:"The bus leaves ___ 3.30.",blank:3,a:"at",opts:["at","in","on","to"]},
          {s:"You buy your ticket ___ the bus.",blank:4,a:"on",opts:["on","in","at","from"]},
          {s:"Where does the train go ___?",blank:5,a:"from",opts:["from","to","at","in"]},
          {s:"What time do you ___ work?",blank:4,a:"finish",opts:["finish","end","stop","close"]},
          {s:"Do you want to ___ into town with me?",blank:4,a:"come",opts:["come","go","visit","see"]},
          {s:"Let's meet ___ the museum.",blank:2,a:"by",opts:["by","in","on","at"]}
        ],
        fill: [
          {s:"Where do I ___ a ticket? (sotib olmoq)",a:"buy"},
          {s:"Does this bus ___ to Las Arenas? (boradimi)",a:"go"},
          {s:"What ___ is the next train? (vaqt)",a:"time"},
          {s:"How ___ is a single ticket? (qancha)",a:"much"},
          {s:"The train leaves ___ 9.35. (da)",a:"at"},
          {s:"You can buy a ticket ___ the machine. (dan)",a:"from"},
          {s:"Where does the bus go ___? (dan)",a:"from"},
          {s:"I need a ___ jacket. (yangi)",a:"new"},
          {s:"Let's ___ at the cafe. (uchrashamiz)",a:"meet"},
          {s:"Send me a ___ message. (matnli)",a:"text"}
        ],
        order: [
          {w:["Where","buy","ticket","do","I","a","?"],a:"Where do I buy a ticket?"},
          {w:["Does","bus","this","city","go","to","the","centre","?"],a:"Does this bus go to the city centre?"},
          {w:["is","next","train","the","What","time","?"],a:"What time is the next train?"},
          {w:["How","to","is","airport","much","it","the","?"],a:"How much is it to the airport?"},
          {w:["leaves","train","at","The","three","thirty"],a:"The train leaves at three thirty."},
          {w:["ticket","You","bus","the","on","buy","your"],a:"You buy your ticket on the bus."},
          {w:["does","bus","go","Where","from","the","?"],a:"Where does the bus go from?"},
          {w:["you","with","me","Do","want","to","come","?"],a:"Do you want to come with me?"},
          {w:["Let's","museum","meet","by","the"],a:"Let's meet by the museum."},
          {w:["text","Send","message","me","a"],a:"Send me a text message."}
        ]
      }
    ]
  },
  { unit:6, label:"Places and facilities", emoji:"🏙️",
    lessons: [
      { // 6A darsi (Two towns - There is/there are, places in a town)
        mcq: [
          {s:"___ is a park near my house.",blank:0,a:"There",opts:["There","They","Their","Here"]},
          {s:"There ___ three banks in the town.",blank:1,a:"are",opts:["are","is","am","do"]},
          {s:"___ aren't any museums here.",blank:0,a:"There",opts:["There","They","These","Those"]},
          {s:"There is ___ amazing bakery.",blank:2,a:"an",opts:["an","a","the","—"]},
          {s:"There ___ a small hospital.",blank:1,a:"isn't",opts:["isn't","aren't","not","no"]},
          {s:"There are lots of ___ here.",blank:4,a:"tourists",opts:["tourists","tourist","a tourist","the tourist"]},
          {s:"There ___ two cinemas.",blank:1,a:"are",opts:["are","is","am","do"]},
          {s:"There isn't ___ airport.",blank:2,a:"an",opts:["an","a","the","—"]},
          {s:"There ___ any good shops.",blank:1,a:"aren't",opts:["aren't","isn't","not","don't"]},
          {s:"___ is a big park in the centre.",blank:0,a:"There",opts:["There","It","He","They"]}
        ],
        fill: [
          {s:"___ is a bank on the corner.",a:"There"},
          {s:"There ___ two parks in the city.",a:"are"},
          {s:"There aren't ___ good restaurants. (hech qanday)",a:"any"},
          {s:"There ___ a cinema here. (yo'q, birlik)",a:"isn't"},
          {s:"___ are a lot of tourists. (bor, ko'plik)",a:"There"},
          {s:"There is ___ old museum. (bitta)",a:"an"},
          {s:"There are five ___ in the town. (maktablar)",a:"schools"},
          {s:"There's ___ amazing bakery. (bitta)",a:"an"},
          {s:"There aren't any ___. (mehmonxonalar)",a:"hotels"},
          {s:"There ___ a big supermarket. (bor, birlik)",a:"is"}
        ],
        order: [
          {w:["is","a","park","There","big"],a:"There is a big park."},
          {w:["are","two","banks","There","here"],a:"There are two banks here."},
          {w:["aren't","any","museums","There"],a:"There aren't any museums."},
          {w:["is","an","amazing","There","bakery"],a:"There is an amazing bakery."},
          {w:["isn't","a","There","cinema"],a:"There isn't a cinema."},
          {w:["are","lots","There","tourists","of"],a:"There are lots of tourists."},
          {w:["There","five","are","schools"],a:"There are five schools."},
          {w:["is","a","small","There","hospital"],a:"There is a small hospital."},
          {w:["There","any","aren't","hotels"],a:"There aren't any hotels."},
          {w:["are","good","There","shops","some"],a:"There are some good shops."}
        ]
      },
      { // 6B darsi (Is there Wi-fi? - Is there...?/Are there...?, hotel facilities)
        mcq: [
          {s:"___ there a gym in the hotel?",blank:0,a:"Is",opts:["Is","Are","Do","Does"]},
          {s:"Are there ___ towels?",blank:2,a:"any",opts:["any","some","a","the"]},
          {s:"Yes, there ___.",blank:2,a:"is",opts:["is","are","am","be"]},
          {s:"No, there ___.",blank:2,a:"aren't",opts:["aren't","isn't","not","no"]},
          {s:"___ there any parking spaces?",blank:0,a:"Are",opts:["Are","Is","Do","Does"]},
          {s:"Is there a ___ in the room?",blank:3,a:"safe",opts:["safe","safes","towels","refreshments"]},
          {s:"Are there any ___?",blank:3,a:"refreshments",opts:["refreshments","refreshment","a refreshment","the refreshment"]},
          {s:"Yes, there ___.",blank:2,a:"are",opts:["are","is","am","do"]},
          {s:"Is ___ free Wi-fi?",blank:1,a:"there",opts:["there","here","they","it"]},
          {s:"No, there ___.",blank:2,a:"isn't",opts:["isn't","aren't","am not","don't"]}
        ],
        fill: [
          {s:"___ there a lift in the hotel?",a:"Is"},
          {s:"Are there ___ towels in the bathroom?",a:"any"},
          {s:"Yes, ___ is.",a:"there"},
          {s:"No, there ___. (yo'q, ko'plik)",a:"aren't"},
          {s:"___ there any good restaurants near here?",a:"Are"},
          {s:"Is there a ___ park? (mashina)",a:"car"},
          {s:"Are there any ___ in the mini-bar? (ichimliklar)",a:"drinks"},
          {s:"Yes, there ___. (ha, ko'plik)",a:"are"},
          {s:"___ there air conditioning?",a:"Is"},
          {s:"No, there ___. (yo'q, birlik)",a:"isn't"}
        ],
        order: [
          {w:["there","a","gym","Is","?"],a:"Is there a gym?"},
          {w:["there","any","Are","towels","?"],a:"Are there any towels?"},
          {w:["there","Yes,","is"],a:"Yes, there is."},
          {w:["there","No,","aren't"],a:"No, there aren't."},
          {w:["parking","spaces","Are","there","any","?"],a:"Are there any parking spaces?"},
          {w:["a","safe","Is","there","room","the","in","?"],a:"Is there a safe in the room?"},
          {w:["any","there","Are","refreshments","?"],a:"Are there any refreshments?"},
          {w:["there","Yes,","are"],a:"Yes, there are."},
          {w:["free","Wi-fi","Is","there","?"],a:"Is there free Wi-fi?"},
          {w:["there","isn't","No,"],a:"No, there isn't."}
        ]
      },
      { // 6C darsi (Has each flat got a kitchen? - each and all the, furniture)
        mcq: [
          {s:"___ room has a TV.",blank:0,a:"Each",opts:["Each","All","All the","The"]},
          {s:"___ the rooms have Wi-fi.",blank:0,a:"All",opts:["All","Each","A","An"]},
          {s:"___ flat has got a kitchen.",blank:0,a:"Each",opts:["Each","All","All the","The"]},
          {s:"All ___ flats have got a balcony.",blank:1,a:"the",opts:["the","a","an","—"]},
          {s:"There is a bed in ___ bedroom.",blank:5,a:"each",opts:["each","all","the all","every"]},
          {s:"___ the chairs are in the dining area.",blank:0,a:"All",opts:["All","Each","A","An"]},
          {s:"___ student has a desk.",blank:0,a:"Each",opts:["Each","All","All the","The"]},
          {s:"All the students ___ here.",blank:3,a:"live",opts:["live","lives","living","is"]},
          {s:"There is a microwave in ___ kitchen.",blank:5,a:"each",opts:["each","all","the","all the"]},
          {s:"All ___ bathrooms are small.",blank:1,a:"the",opts:["the","a","an","each"]}
        ],
        fill: [
          {s:"___ room has a TV. (Har bir)",a:"Each"},
          {s:"___ the rooms have Wi-fi. (Barcha)",a:"All"},
          {s:"___ flat has got a kitchen. (Har bir)",a:"Each"},
          {s:"All ___ flats have got a balcony.",a:"the"},
          {s:"There is a bed in ___ bedroom. (har bir)",a:"each"},
          {s:"___ the chairs are in the dining area. (Barcha)",a:"All"},
          {s:"___ student has a desk. (Har bir)",a:"Each"},
          {s:"All the students ___ here. (yashaydilar)",a:"live"},
          {s:"There is a microwave in ___ kitchen. (har bir)",a:"each"},
          {s:"All ___ bathrooms are small.",a:"the"}
        ],
        order: [
          {w:["room","Each","a","TV","has"],a:"Each room has a TV."},
          {w:["the","All","rooms","Wi-fi","have"],a:"All the rooms have Wi-fi."},
          {w:["flat","has","kitchen","Each","a","got"],a:"Each flat has got a kitchen."},
          {w:["flats","balcony","a","got","All","the","have"],a:"All the flats have got a balcony."},
          {w:["bed","is","There","a","each","in","bedroom"],a:"There is a bed in each bedroom."},
          {w:["chairs","All","the","in","the","dining","area","are"],a:"All the chairs are in the dining area."},
          {w:["has","student","a","desk","Each"],a:"Each student has a desk."},
          {w:["students","live","All","the","here"],a:"All the students live here."},
          {w:["a","is","microwave","each","kitchen","in","There"],a:"There is a microwave in each kitchen."},
          {w:["bathrooms","small","the","are","All"],a:"All the bathrooms are small."}
        ]
      },
      { // 6D darsi (Speaking and writing - Explaining problems)
        mcq: [
          {s:"My room is very ___.",blank:4,a:"hot",opts:["hot","heat","coldness","noise"]},
          {s:"The shower is ___.",blank:3,a:"broken",opts:["broken","break","broke","breaks"]},
          {s:"I don't ___ the code.",blank:2,a:"know",opts:["know","no","now","knows"]},
          {s:"There aren't ___ towels.",blank:2,a:"any",opts:["any","some","a","an"]},
          {s:"The room is very ___.",blank:4,a:"noisy",opts:["noisy","noise","louds","sound"]},
          {s:"I'll ___ someone to help.",blank:1,a:"send",opts:["send","sent","gives","goes"]},
          {s:"___ in the cupboard.",blank:0,a:"Try",opts:["Try","Look","See","Find"]},
          {s:"There's a heater ___ the window.",blank:3,a:"near",opts:["near","in","on","next"]},
          {s:"You can have ___ room.",blank:3,a:"another",opts:["another","other","others","the"]},
          {s:"The phone is ___.",blank:3,a:"broken",opts:["broken","bad","terrible","wrong"]}
        ],
        fill: [
          {s:"My room is very ___. (sovuq)",a:"cold"},
          {s:"The shower is ___. (singen/buzilgan)",a:"broken"},
          {s:"I don't ___ the code. (bilmayman)",a:"know"},
          {s:"There aren't ___ towels. (hech qanday)",a:"any"},
          {s:"The room is very ___. (shovqinli)",a:"noisy"},
          {s:"I'll ___ someone to help. (yuboraman)",a:"send"},
          {s:"___ in the cupboard. (qarab ko'ring)",a:"Try"},
          {s:"There's a heater ___ the window. (yaqinida)",a:"near"},
          {s:"You can have ___ room. (boshqa)",a:"another"},
          {s:"The phone is ___. (buzilgan)",a:"broken"}
        ],
        order: [
          {w:["room","very","My","hot","is"],a:"My room is very hot."},
          {w:["shower","broken","The","is"],a:"The shower is broken."},
          {w:["know","don't","the","code","I"],a:"I don't know the code."},
          {w:["aren't","towels","any","There"],a:"There aren't any towels."},
          {w:["very","is","room","noisy","The"],a:"The room is very noisy."},
          {w:["send","someone","I'll","to","help"],a:"I'll send someone to help."},
          {w:["the","in","cupboard","Try"],a:"Try in the cupboard."},
          {w:["heater","near","the","window","a","There's"],a:"There's a heater near the window."},
          {w:["have","another","room","You","can"],a:"You can have another room."},
          {w:["broken","phone","is","The"],a:"The phone is broken."}
        ]
      }
    ]
  },
  { unit:7, label:"Skills and interests", emoji:"🎸",
    lessons: [
      { // 7A darsi (She can paint - can/can't, abilities)
        mcq: [
          {s:"She ___ play the guitar.",blank:1,a:"can",opts:["can","do","is","are"]},
          {s:"I ___ speak Japanese. I only speak English.",blank:1,a:"can't",opts:["can't","don't","am not","not"]},
          {s:"They ___ swim very well.",blank:1,a:"can",opts:["can","does","be","am"]},
          {s:"He ___ drive a car. He doesn't have a license.",blank:1,a:"can't",opts:["can't","isn't","don't","doesn't"]},
          {s:"We ___ cook Italian food.",blank:1,a:"can",opts:["can","are","do","does"]},
          {s:"My brother ___ ride a bike.",blank:2,a:"can",opts:["can","do","is","have"]},
          {s:"I ___ understand this exercise. It's very difficult!",blank:1,a:"can't",opts:["can't","am not","don't","not"]},
          {s:"She ___ paint beautiful pictures.",blank:1,a:"can",opts:["can","is","do","does"]},
          {s:"Cats ___ fly.",blank:1,a:"can't",opts:["can't","aren't","don't","not"]},
          {s:"He ___ type very fast.",blank:1,a:"can",opts:["can","do","is","have"]}
        ],
        fill: [
          {s:"She ___ speak three languages. (qila oladi)",a:"can"},
          {s:"I ___ play the piano. (qila olmayman)",a:"can't"},
          {s:"He can ___ a car. (haydamoq)",a:"drive"},
          {s:"They can ___ songs. (kuylamoq)",a:"sing"},
          {s:"We ___ swim. (qila olamiz)",a:"can"},
          {s:"I can ___ beautiful pictures. (chizmoq)",a:"paint"},
          {s:"She can't ___ a bicycle. (minmoq)",a:"ride"},
          {s:"He can ___ fast. (yugurmoq)",a:"run"},
          {s:"My sister ___ cook well. (qila oladi)",a:"can"},
          {s:"I can't ___ you. It's too noisy! (eshitmoq)",a:"hear"}
        ],
        order: [
          {w:["play","can","She","the","guitar"],a:"She can play the guitar."},
          {w:["Japanese","I","can't","speak"],a:"I can't speak Japanese."},
          {w:["can","car","My","drive","brother","a"],a:"My brother can drive a car."},
          {w:["well","They","swim","can","very"],a:"They can swim very well."},
          {w:["bike","can't","He","ride","a"],a:"He can't ride a bike."},
          {w:["cook","We","Italian","can","food"],a:"We can cook Italian food."},
          {w:["paint","can","pictures","I","beautiful"],a:"I can paint beautiful pictures."},
          {w:["can't","question","the","She","understand"],a:"She can't understand the question."},
          {w:["fast","can","type","You","very"],a:"You can type very fast."},
          {w:["He","well","sing","can","very"],a:"He can sing very well."}
        ]
      },
      { // 7B darsi (Can you help? - can questions, adverbs of manner)
        mcq: [
          {s:"___ you swim?",blank:0,a:"Can",opts:["Can","Do","Are","Is"]},
          {s:"Yes, I ___.",blank:2,a:"can",opts:["can","do","am","have"]},
          {s:"___ she play the piano?",blank:0,a:"Can",opts:["Can","Does","Is","Has"]},
          {s:"No, she ___.",blank:2,a:"can't",opts:["can't","doesn't","isn't","hasn't"]},
          {s:"She speaks English very ___.",blank:4,a:"well",opts:["well","good","nice","fine"]},
          {s:"He plays tennis ___.",blank:3,a:"badly",opts:["badly","bad","wrong","no"]},
          {s:"Can you run ___?",blank:3,a:"fast",opts:["fast","fastly","quick","speed"]},
          {s:"Please speak ___, I don't understand.",blank:2,a:"slowly",opts:["slowly","slow","quiet","easy"]},
          {s:"Can they ___ English?",blank:2,a:"speak",opts:["speak","speaks","speaking","spoke"]},
          {s:"___ your brother drive?",blank:0,a:"Can",opts:["Can","Does","Is","Do"]}
        ],
        fill: [
          {s:"___ you help me? (savol so'zi)",a:"Can"},
          {s:"Yes, we ___. (qila olamiz)",a:"can"},
          {s:"Can he ___ the guitar? (chalmoq)",a:"play"},
          {s:"No, he ___. (qila olmaydi)",a:"can't"},
          {s:"She paints very ___. (yaxshi)",a:"well"},
          {s:"He drives very ___. (tez)",a:"fast"},
          {s:"Please walk ___. (sekin)",a:"slowly"},
          {s:"I play football ___. (yomon)",a:"badly"},
          {s:"___ you ride a bike? (qila olasizmi)",a:"Can"},
          {s:"Can she ___ songs? (kuylamoq)",a:"sing"}
        ],
        order: [
          {w:["help","you","Can","me","?"],a:"Can you help me?"},
          {w:["play","she","Can","the","piano","?"],a:"Can she play the piano?"},
          {w:["can","Yes","I"],a:"Yes I can."},
          {w:["he","can't","No"],a:"No he can't."},
          {w:["English","speaks","She","very","well"],a:"She speaks English very well."},
          {w:["speak","Please","slowly"],a:"Please speak slowly."},
          {w:["He","football","plays","badly"],a:"He plays football badly."},
          {w:["car","they","Can","drive","a","?"],a:"Can they drive a car?"},
          {w:["very","You","run","can","fast"],a:"You can run very fast."},
          {w:["swim","your","brother","Can","?"],a:"Can your brother swim?"}
        ]
      },
      { // 7C darsi (I like going out - like/love/hate + -ing, hobbies)
        mcq: [
          {s:"I like ___ to music.",blank:2,a:"listening",opts:["listening","listen","listens","listened"]},
          {s:"She loves ___ photos.",blank:2,a:"taking",opts:["taking","take","takes","took"]},
          {s:"They hate ___ early.",blank:2,a:"getting up",opts:["getting up","get up","gets up","got up"]},
          {s:"He likes ___ online.",blank:2,a:"shopping",opts:["shopping","shop","shops","shopped"]},
          {s:"Do you like ___ football?",blank:3,a:"playing",opts:["playing","play","plays","played"]},
          {s:"We love ___ to the cinema.",blank:2,a:"going",opts:["going","go","goes","went"]},
          {s:"She hates ___ in the garden.",blank:2,a:"working",opts:["working","work","works","worked"]},
          {s:"I like ___ books.",blank:2,a:"reading",opts:["reading","read","reads","readed"]},
          {s:"He loves ___ to new countries.",blank:2,a:"travelling",opts:["travelling","travel","travels","travelled"]},
          {s:"Do they like ___ TV?",blank:3,a:"watching",opts:["watching","watch","watches","watched"]}
        ],
        fill: [
          {s:"I like ___ books. (o'qishni)",a:"reading"},
          {s:"She loves ___ food. (pishirishni)",a:"cooking"},
          {s:"He hates ___ early. (uyg'onishni)",a:"getting up"},
          {s:"We like ___ to music. (tinglashni)",a:"listening"},
          {s:"They love ___ photos. (olishni)",a:"taking"},
          {s:"Do you like ___? (sayohat qilishni)",a:"travelling"},
          {s:"I hate ___ online. (xarid qilishni)",a:"shopping"},
          {s:"She likes ___ video games. (o'ynashni)",a:"playing"},
          {s:"He loves ___ to the cinema. (borishni)",a:"going"},
          {s:"We hate ___ in the garden. (ishlashni)",a:"working"}
        ],
        order: [
          {w:["listening","like","music","I","to"],a:"I like listening to music."},
          {w:["loves","taking","She","photos"],a:"She loves taking photos."},
          {w:["hate","They","early","getting","up"],a:"They hate getting up early."},
          {w:["shopping","likes","He","online"],a:"He likes shopping online."},
          {w:["playing","like","Do","football","you","?"],a:"Do you like playing football?"},
          {w:["love","going","cinema","the","to","We"],a:"We love going to the cinema."},
          {w:["working","garden","the","in","hates","She"],a:"She hates working in the garden."},
          {w:["books","reading","like","I"],a:"I like reading books."},
          {w:["new","He","travelling","to","loves","countries"],a:"He loves travelling to new countries."},
          {w:["watching","they","Do","like","TV","?"],a:"Do they like watching TV?"}
        ]
      },
      { // 7D darsi (Speaking and writing - Simple requests)
        mcq: [
          {s:"Excuse me. I'm lost. ___ you help me?",blank:4,a:"Can",opts:["Can","Do","Are","Is"]},
          {s:"Can I ___ some water, please?",blank:2,a:"have",opts:["have","has","had","having"]},
          {s:"Can you tell me the ___ to the city centre?",blank:5,a:"way",opts:["way","road","street","path"]},
          {s:"Can you ___ me a taxi?",blank:2,a:"call",opts:["call","do","make","have"]},
          {s:"Can I ___ this chair?",blank:2,a:"take",opts:["take","buy","give","do"]},
          {s:"Yes, of ___.",blank:2,a:"course",opts:["course","sure","problem","here"]},
          {s:"___ problem.",blank:0,a:"No",opts:["No","Not","Don't","Any"]},
          {s:"Here you ___.",blank:2,a:"are",opts:["are","is","do","go"]},
          {s:"___, I'm busy.",blank:0,a:"Sorry",opts:["Sorry","Excuse","Please","Thanks"]},
          {s:"Can you speak ___, please?",blank:3,a:"slowly",opts:["slowly","slow","quiet","easy"]}
        ],
        fill: [
          {s:"___ you help me? (so'rov)",a:"Can"},
          {s:"Can I ___ some water? (olish/ichish)",a:"have"},
          {s:"Can you tell me the ___ to the museum? (yo'lni)",a:"way"},
          {s:"Can you ___ me a taxi? (chaqirmoq)",a:"call"},
          {s:"Can I ___ this chair? (olmoq)",a:"take"},
          {s:"Yes, of ___. (albatta)",a:"course"},
          {s:"___ problem. (Muammosiz)",a:"No"},
          {s:"Here ___ are. (marhamat)",a:"you"},
          {s:"___, I am busy. (Kechirasiz)",a:"Sorry"},
          {s:"Can you speak ___? (sekin)",a:"slowly"}
        ],
        order: [
          {w:["help","Can","me","you","please","?"],a:"Can you help me please?"},
          {w:["have","Can","I","water","some","?"],a:"Can I have some water?"},
          {w:["tell","the","Can","you","me","way","?"],a:"Can you tell me the way?"},
          {w:["a","taxi","call","you","Can","?"],a:"Can you call a taxi?"},
          {w:["take","chair","Can","I","this","?"],a:"Can I take this chair?"},
          {w:["course","of","Yes"],a:"Yes of course."},
          {w:["you","are","Here"],a:"Here you are."},
          {w:["busy","am","I","Sorry"],a:"Sorry I am busy."},
          {w:["slowly","speak","you","Can","?"],a:"Can you speak slowly?"},
          {w:["problem","No"],a:"No problem."}
        ]
      }
    ]
  },
 { unit:8, label:"Our past", emoji:"🕰️",
    lessons: [
      { // 8A darsi (When we were seven - Verb be past simple)
        mcq: [
          {s:"I ___ born in 1990.",blank:1,a:"was",opts:["was","were","am","is"]},
          {s:"We ___ at school yesterday.",blank:1,a:"were",opts:["were","was","are","am"]},
          {s:"She ___ very happy.",blank:1,a:"was",opts:["was","were","is","am"]},
          {s:"They ___ not in London.",blank:1,a:"were",opts:["were","was","are","is"]},
          {s:"___ you at home?",blank:0,a:"Were",opts:["Were","Was","Are","Is"]},
          {s:"It ___ a good movie.",blank:1,a:"was",opts:["was","were","is","are"]},
          {s:"The children ___ tired.",blank:1,a:"were",opts:["were","was","are","is"]},
          {s:"He ___ not a teacher.",blank:1,a:"was",opts:["was","were","is","am"]},
          {s:"My parents ___ rich.",blank:1,a:"weren't",opts:["weren't","wasn't","aren't","isn't"]},
          {s:"Where ___ he born?",blank:1,a:"was",opts:["was","were","is","are"]}
        ],
        fill: [
          {s:"I ___ seven years old. (edim)",a:"was"},
          {s:"They ___ late for class. (edilar)",a:"were"},
          {s:"She ___ in Paris last week. (edi)",a:"was"},
          {s:"We ___ not at the party. (edik)",a:"were"},
          {s:"___ it a good book? (edimi)",a:"Was"},
          {s:"He ___ my best friend. (edi)",a:"was"},
          {s:"The weather ___ cold. (edi)",a:"was"},
          {s:"You ___ a quiet child. (edingiz)",a:"were"},
          {s:"There ___ fourteen children. (edilar)",a:"were"},
          {s:"My mother ___ a nurse. (edi)",a:"was"}
        ],
        order: [
          {w:["born","I","in","1995","was"],a:"I was born in 1995."},
          {w:["late","We","very","were"],a:"We were very late."},
          {w:["movie","It","good","a","was"],a:"It was a good movie."},
          {w:["tired","children","The","were"],a:"The children were tired."},
          {w:["yesterday","you","home","Were","at","?"],a:"Were you at home yesterday?"},
          {w:["not","He","happy","was"],a:"He was not happy."},
          {w:["in","London","They","were"],a:"They were in London."},
          {w:["teacher","My","nice","was"],a:"My teacher was nice."},
          {w:["poor","parents","My","were"],a:"My parents were poor."},
          {w:["weather","The","bad","was"],a:"The weather was bad."}
        ]
      },
      { // 8B darsi (Lives from the past - Past simple regular verbs)
        mcq: [
          {s:"We ___ football yesterday.",blank:1,a:"played",opts:["played","play","playing","plays"]},
          {s:"She ___ in London.",blank:1,a:"lived",opts:["lived","live","living","lives"]},
          {s:"I ___ to music.",blank:1,a:"listened",opts:["listened","listen","listens","listening"]},
          {s:"They ___ TV last night.",blank:1,a:"watched",opts:["watched","watch","watching","watches"]},
          {s:"He ___ his work early.",blank:1,a:"finished",opts:["finished","finish","finishing","finishes"]},
          {s:"She ___ English at school.",blank:1,a:"studied",opts:["studied","study","studying","studies"]},
          {s:"It ___ to rain.",blank:1,a:"started",opts:["started","start","starts","starting"]},
          {s:"We ___ to a new house.",blank:1,a:"moved",opts:["moved","move","moves","moving"]},
          {s:"I ___ to go home.",blank:1,a:"wanted",opts:["wanted","want","wants","wanting"]},
          {s:"They ___ the food.",blank:1,a:"liked",opts:["liked","like","likes","liking"]}
        ],
        fill: [
          {s:"I ___ tennis yesterday. (o'ynadim)",a:"played"},
          {s:"She ___ the door. (ochdi)",a:"opened"},
          {s:"He ___ in a bank. (ishladi)",a:"worked"},
          {s:"We ___ the movie. (yoqtirdik)",a:"liked"},
          {s:"They ___ in Spain. (yashadilar)",a:"lived"},
          {s:"He ___ me with my bag. (yordam berdi)",a:"helped"},
          {s:"I ___ Spanish last year. (o'rgandim)",a:"studied"},
          {s:"The film ___ at 8 pm. (boshlandi)",a:"started"},
          {s:"We ___ TV. (ko'rdik)",a:"watched"},
          {s:"She ___ to the radio. (tingladi)",a:"listened"}
        ],
        order: [
          {w:["played","I","yesterday","tennis"],a:"I played tennis yesterday."},
          {w:["London","She","in","lived"],a:"She lived in London."},
          {w:["watched","We","movie","a"],a:"We watched a movie."},
          {w:["rain","It","to","started"],a:"It started to rain."},
          {w:["worked","He","bank","a","in"],a:"He worked in a bank."},
          {w:["studied","They","English"],a:"They studied English."},
          {w:["listened","music","I","to"],a:"I listened to music."},
          {w:["liked","We","food","the"],a:"We liked the food."},
          {w:["wanted","She","drink","a"],a:"She wanted a drink."},
          {w:["finished","work","his","He"],a:"He finished his work."}
        ]
      },
      { // 8C darsi (Special moments - Object pronouns)
        mcq: [
          {s:"I love Maria, but she doesn't love ___.",blank:7,a:"me",opts:["me","I","my","mine"]},
          {s:"John is my friend. I like ___.",blank:6,a:"him",opts:["him","he","his","her"]},
          {s:"This is my sister. Do you know ___?",blank:7,a:"her",opts:["her","she","hers","him"]},
          {s:"The children are here. Can you see ___?",blank:7,a:"them",opts:["them","they","their","us"]},
          {s:"We are lost. Please help ___.",blank:5,a:"us",opts:["us","we","our","me"]},
          {s:"I bought a new car. Do you like ___?",blank:8,a:"it",opts:["it","its","he","them"]},
          {s:"I have a question for ___.",blank:5,a:"you",opts:["you","your","yours","me"]},
          {s:"He called ___ yesterday.",blank:2,a:"me",opts:["me","I","my","mine"]},
          {s:"They invited ___ to the party.",blank:2,a:"us",opts:["us","we","our","them"]},
          {s:"She kissed ___.",blank:2,a:"him",opts:["him","he","his","them"]}
        ],
        fill: [
          {s:"He likes Sarah, but she doesn't like ___. (uni/o'g'il bolani)",a:"him"},
          {s:"I have a problem. Can you help ___? (menga)",a:"me"},
          {s:"My parents are nice. I love ___. (ularni)",a:"them"},
          {s:"We need help. Please tell ___. (bizga)",a:"us"},
          {s:"It is a good book. Read ___! (uni/narsani)",a:"it"},
          {s:"She is my sister. I usually call ___. (unga/qiz bolaga)",a:"her"},
          {s:"You are my friend. I like ___. (seni)",a:"you"},
          {s:"They visited ___ last week. (bizni)",a:"us"},
          {s:"The dog was hungry, so I fed ___. (uni/hayvonni)",a:"it"},
          {s:"I saw ___ at the park. (ularni)",a:"them"}
        ],
        order: [
          {w:["love","her","I","a","lot"],a:"I love her a lot."},
          {w:["like","him","I","much","very"],a:"I like him very much."},
          {w:["help","Can","please","you","me","?"],a:"Can you help me please?"},
          {w:["them","invited","We","dinner","to"],a:"We invited them to dinner."},
          {w:["it","I","bought","yesterday"],a:"I bought it yesterday."},
          {w:["us","He","story","told","a"],a:"He told us a story."},
          {w:["called","She","last","him","night"],a:"She called him last night."},
          {w:["question","a","asked","They","you"],a:"They asked you a question."},
          {w:["it","We","saw","morning","this"],a:"We saw it this morning."},
          {w:["me","listened","to","He"],a:"He listened to me."}
        ]
      },
      { // 8D darsi (Speaking and writing - Special occasions)
        mcq: [
          {s:"It is my birthday today! - Happy ___!",blank:7,a:"birthday",opts:["birthday","day","year","luck"]},
          {s:"I got a new job! - ___!",blank:5,a:"Congratulations",opts:["Congratulations","Cheers","Sorry","Luck"]},
          {s:"My exam is tomorrow. - Good ___!",blank:5,a:"luck",opts:["luck","lucky","day","time"]},
          {s:"We are married! - That's ___!",blank:4,a:"great",opts:["great","sorry","bad","sad"]},
          {s:"Here is your drink. - ___!",blank:5,a:"Cheers",opts:["Cheers","Thanks","Hello","Please"]},
          {s:"I lost my phone. - I'm sorry to ___ that.",blank:7,a:"hear",opts:["hear","listen","know","see"]},
          {s:"I am sorry I am late. - Never ___.",blank:7,a:"mind",opts:["mind","worry","problem","matter"]},
          {s:"I passed my driving test! - ___?",blank:6,a:"Really",opts:["Really","Real","Yes","How"]},
          {s:"Happy New ___!",blank:2,a:"Year",opts:["Year","Day","Time","Month"]},
          {s:"Have a good ___!",blank:3,a:"time",opts:["time","hour","day","moment"]}
        ],
        fill: [
          {s:"Happy ___! (tug'ilgan kun)",a:"birthday"},
          {s:"Good ___ on your exam! (omad)",a:"luck"},
          {s:"I got a new car! - That's ___! (zo'r)",a:"great"},
          {s:"We had a baby! - ___! (tabriklaymiz)",a:"Congratulations"},
          {s:"I feel sick today. - I'm ___ to hear that. (xafaman)",a:"sorry"},
          {s:"I forgot your book. - Never ___. (qisi yo'q)",a:"mind"},
          {s:"___! Let's drink to your new job. (oldik/qadah so'zi)",a:"Cheers"},
          {s:"Have a ___ time at the party! (yaxshi)",a:"good"},
          {s:"Happy New ___! (yil)",a:"Year"},
          {s:"I won the game! - ___? That's great! (rostdanmi)",a:"Really"}
        ],
        order: [
          {w:["birthday","Happy","to","you"],a:"Happy birthday to you."},
          {w:["luck","your","Good","with","exam"],a:"Good luck with your exam."},
          {w:["great","news","That","is"],a:"That is great news."},
          {w:["hear","I'm","to","that","sorry"],a:"I'm sorry to hear that."},
          {w:["mind","Never","about","it"],a:"Never mind about it."},
          {w:["passed","I","the","test"],a:"I passed the test."},
          {w:["Cheers","your","new","to","job"],a:"Cheers to your new job."},
          {w:["a","time","Have","good"],a:"Have a good time."},
          {w:["year","Happy","new"],a:"Happy new year."},
          {w:["Really","is","that","true","?"],a:"Really is that true?"}
        ]
      }
    ]
  },
  { unit:9, label:"Unusual stories", emoji:"📰",
    lessons: [
      { // 9A darsi (Happy memories - Past simple irregular verbs)
        mcq: [
          {s:"I ___ to Paris last year.",blank:1,a:"went",opts:["went","go","goes","going"]},
          {s:"She ___ a great time.",blank:1,a:"had",opts:["had","have","has","having"]},
          {s:"We ___ an old friend.",blank:1,a:"met",opts:["met","meet","meets","meeting"]},
          {s:"He ___ he was tired.",blank:1,a:"said",opts:["said","say","says","saying"]},
          {s:"They ___ a new car.",blank:1,a:"got",opts:["got","get","gets","getting"]},
          {s:"I ___ my keys.",blank:1,a:"lost",opts:["lost","lose","loses","losing"]},
          {s:"She ___ the house at 8 am.",blank:1,a:"left",opts:["left","leave","leaves","leaving"]},
          {s:"He ___ to my party.",blank:1,a:"came",opts:["came","come","comes","coming"]},
          {s:"I ___ down the stairs.",blank:1,a:"fell",opts:["fell","fall","falls","falling"]},
          {s:"We ___ a famous actor.",blank:1,a:"saw",opts:["saw","see","sees","seeing"]}
        ],
        fill: [
          {s:"I ___ a good book yesterday. (o'qidim - past simple)",a:"read"},
          {s:"She ___ a lot of photos. (oldi)",a:"took"},
          {s:"He ___ an expensive watch. (sotib oldi)",a:"bought"},
          {s:"We ___ the train. (tutdik/ulgurdik)",a:"caught"},
          {s:"They ___ to the beach. (bordilar)",a:"went"},
          {s:"I ___ a headache. (menda bor edi)",a:"had"},
          {s:"She ___ early today. (ketdi)",a:"left"},
          {s:"He ___ his homework. (qildi)",a:"did"},
          {s:"We ___ dinner at home. (yedik)",a:"ate"},
          {s:"I ___ her a gift. (berdim)",a:"gave"}
        ],
        order: [
          {w:["went","to","I","Paris"],a:"I went to Paris."},
          {w:["had","a","time","We","great"],a:"We had a great time."},
          {w:["friend","met","an","old","He"],a:"He met an old friend."},
          {w:["said","she","tired","was","She"],a:"She said she was tired."},
          {w:["got","new","They","a","car"],a:"They got a new car."},
          {w:["lost","my","phone","I"],a:"I lost my phone."},
          {w:["left","She","house","the"],a:"She left the house."},
          {w:["came","He","house","to","my"],a:"He came to my house."},
          {w:["saw","We","movie","a"],a:"We saw a movie."},
          {w:["fell","off","He","bike","his"],a:"He fell off his bike."}
        ]
      },
      { // 9B darsi (A good excuse - Past simple negatives and questions)
        mcq: [
          {s:"I ___ go to work yesterday.",blank:1,a:"didn't",opts:["didn't","don't","doesn't","not"]},
          {s:"___ you see the film?",blank:0,a:"Did",opts:["Did","Do","Does","Are"]},
          {s:"She ___ have breakfast.",blank:1,a:"didn't",opts:["didn't","don't","isn't","doesn't"]},
          {s:"Where ___ they go?",blank:1,a:"did",opts:["did","do","does","are"]},
          {s:"What did he ___?",blank:3,a:"say",opts:["say","said","says","saying"]},
          {s:"We didn't ___ the museum.",blank:2,a:"visit",opts:["visit","visited","visits","visiting"]},
          {s:"Did she ___ a good time?",blank:2,a:"have",opts:["have","had","has","having"]},
          {s:"Why ___ you late?",blank:1,a:"were",opts:["were","was","did","do"]},
          {s:"He didn't ___ my email.",blank:2,a:"answer",opts:["answer","answered","answers","answering"]},
          {s:"Did they ___ the match?",blank:2,a:"win",opts:["win","won","wins","winning"]}
        ],
        fill: [
          {s:"I ___ see him yesterday. (inkor)",a:"didn't"},
          {s:"___ you buy the tickets? (savol)",a:"Did"},
          {s:"She didn't ___ to the party. (kelmoq)",a:"come"},
          {s:"Where ___ you go on holiday? (yordamchi fe'l)",a:"did"},
          {s:"What did she ___? (qilmoq)",a:"do"},
          {s:"We didn't ___ the food. (yoqtirmoq)",a:"like"},
          {s:"Did he ___ his keys? (topmoq)",a:"find"},
          {s:"Why ___ you stay at home? (yordamchi fe'l)",a:"did"},
          {s:"They didn't ___ English. (gapirmoq)",a:"speak"},
          {s:"Did you ___ well? (uxlamoq)",a:"sleep"}
        ],
        order: [
          {w:["didn't","to","work","I","go"],a:"I didn't go to work."},
          {w:["see","Did","the","film","you","?"],a:"Did you see the film?"},
          {w:["have","She","breakfast","didn't"],a:"She didn't have breakfast."},
          {w:["they","go","Where","did","?"],a:"Where did they go?"},
          {w:["didn't","the","visit","We","museum"],a:"We didn't visit the museum."},
          {w:["she","time","a","Did","have","good","?"],a:"Did she have a good time?"},
          {w:["my","answer","didn't","He","email"],a:"He didn't answer my email."},
          {w:["win","Did","match","the","they","?"],a:"Did they win the match?"},
          {w:["sleep","I","well","didn't"],a:"I didn't sleep well."},
          {w:["did","What","do","you","?"],a:"What did you do?"}
        ]
      },
      { // 9C darsi (News stories - ago)
        mcq: [
          {s:"I met him two years ___.",blank:5,a:"ago",opts:["ago","last","in","yesterday"]},
          {s:"They moved to London six months ___.",blank:6,a:"ago",opts:["ago","last","before","past"]},
          {s:"She called me five minutes ___.",blank:5,a:"ago",opts:["ago","time","before","last"]},
          {s:"We arrived three days ___.",blank:4,a:"ago",opts:["ago","last","yesterday","before"]},
          {s:"He started his job a week ___.",blank:6,a:"ago",opts:["ago","last","before","past"]},
          {s:"The film finished an hour ___.",blank:5,a:"ago",opts:["ago","last","before","in"]},
          {s:"I bought this car ten years ___.",blank:6,a:"ago",opts:["ago","before","last","in"]},
          {s:"They left a long time ___.",blank:5,a:"ago",opts:["ago","past","before","last"]},
          {s:"We saw her a few days ___.",blank:6,a:"ago",opts:["ago","last","before","in"]},
          {s:"The train departed twenty minutes ___.",blank:5,a:"ago",opts:["ago","before","last","time"]}
        ],
        fill: [
          {s:"I met my wife ten years ___. (oldin)",a:"ago"},
          {s:"He finished school two years ___. (oldin)",a:"ago"},
          {s:"She left five minutes ___. (oldin)",a:"ago"},
          {s:"We visited Rome three months ___. (oldin)",a:"ago"},
          {s:"They bought a house a year ___. (oldin)",a:"ago"},
          {s:"The game started an hour ___. (oldin)",a:"ago"},
          {s:"I called him two hours ___. (oldin)",a:"ago"},
          {s:"She went to bed a long time ___. (oldin)",a:"ago"},
          {s:"We ate lunch thirty minutes ___. (oldin)",a:"ago"},
          {s:"He died a century ___. (oldin)",a:"ago"}
        ],
        order: [
          {w:["years","met","two","I","him","ago"],a:"I met him two years ago."},
          {w:["left","minutes","She","five","ago"],a:"She left five minutes ago."},
          {w:["London","to","They","moved","ago","months","six"],a:"They moved to London six months ago."},
          {w:["days","We","arrived","three","ago"],a:"We arrived three days ago."},
          {w:["an","hour","The","finished","film","ago"],a:"The film finished an hour ago."},
          {w:["years","bought","car","I","ten","this","ago"],a:"I bought this car ten years ago."},
          {w:["long","left","They","a","ago","time"],a:"They left a long time ago."},
          {w:["days","saw","We","few","a","her","ago"],a:"We saw her a few days ago."},
          {w:["minutes","The","departed","train","twenty","ago"],a:"The train departed twenty minutes ago."},
          {w:["job","started","his","He","week","a","ago"],a:"He started his job a week ago."}
        ]
      },
      { // 9D darsi (Speaking and writing - The weather)
        mcq: [
          {s:"In summer, it is very ___.",blank:5,a:"hot",opts:["hot","cold","snowy","ice"]},
          {s:"Look at the sky! It is very ___.",blank:7,a:"cloudy",opts:["cloudy","cloud","sunny","sun"]},
          {s:"Take an umbrella, it is ___.",blank:5,a:"rainy",opts:["rainy","sunny","hot","dry"]},
          {s:"I love the snow, it is a ___ day.",blank:7,a:"snowy",opts:["snowy","snow","rainy","hot"]},
          {s:"It is very ___ today, hold your hat!",blank:3,a:"windy",opts:["windy","wind","sunny","hot"]},
          {s:"In winter, it is usually ___.",blank:5,a:"cold",opts:["cold","hot","warm","sunny"]},
          {s:"Let's go to the beach, it is ___.",blank:7,a:"sunny",opts:["sunny","sun","rainy","cold"]},
          {s:"Spring is nice and ___.",blank:4,a:"warm",opts:["warm","hot","cold","stormy"]},
          {s:"It is dark and ___.",blank:4,a:"stormy",opts:["stormy","storm","sunny","warm"]},
          {s:"What is the weather ___?",blank:4,a:"like",opts:["like","love","good","bad"]}
        ],
        fill: [
          {s:"It is very ___ in summer. (issiq)",a:"hot"},
          {s:"The sky is grey and ___. (bulutli)",a:"cloudy"},
          {s:"It is ___ outside, take an umbrella. (yomg'irli)",a:"rainy"},
          {s:"We can make a snowman, it is ___. (qorli)",a:"snowy"},
          {s:"It is very ___ today, fly a kite. (shamolli)",a:"windy"},
          {s:"Put on a coat, it is ___. (sovuq)",a:"cold"},
          {s:"The sky is blue and ___. (quyoshli)",a:"sunny"},
          {s:"The weather is nice and ___. (iliq)",a:"warm"},
          {s:"It's a bad night, very ___. (bo'ronli)",a:"stormy"},
          {s:"What was the weather ___ yesterday? (o'xshash/qanday)",a:"like"}
        ],
        order: [
          {w:["very","is","It","summer","hot","in"],a:"It is very hot in summer."},
          {w:["sky","The","very","is","cloudy"],a:"The sky is very cloudy."},
          {w:["umbrella","an","Take","it","rainy","is"],a:"Take an umbrella it is rainy."},
          {w:["day","It","a","is","snowy"],a:"It is a snowy day."},
          {w:["today","very","It","windy","is"],a:"It is very windy today."},
          {w:["usually","is","winter","It","cold","in"],a:"It is usually cold in winter."},
          {w:["sunny","beach","to","Let's","go","the","is","it"],a:"Let's go to the beach it is sunny."},
          {w:["nice","Spring","warm","is","and"],a:"Spring is nice and warm."},
          {w:["stormy","dark","is","It","and"],a:"It is dark and stormy."},
          {w:["weather","the","is","What","like","?"],a:"What is the weather like?"}
        ]
      }
    ]
  },
  { unit:10, label:"New places, new projects", emoji:"✈️",
    lessons: [
      { // 10A darsi (A new life - be going to positive and negative)
        mcq: [
          {s:"I ___ going to learn Spanish.",blank:1,a:"am",opts:["am","is","are","do"]},
          {s:"She ___ going to move house.",blank:1,a:"is",opts:["is","are","am","does"]},
          {s:"They are going ___ visit Japan.",blank:2,a:"to",opts:["to","for","in","at"]},
          {s:"We aren't ___ to buy a car.",blank:2,a:"going",opts:["going","go","goes","went"]},
          {s:"He is going to ___ a new job.",blank:3,a:"get",opts:["get","getting","got","gets"]},
          {s:"I'm going to ___ a book.",blank:3,a:"write",opts:["write","writing","wrote","writes"]},
          {s:"You ___ going to love this city.",blank:1,a:"are",opts:["are","is","am","do"]},
          {s:"My parents are going to ___ with us.",blank:4,a:"stay",opts:["stay","staying","stays","stayed"]},
          {s:"She isn't going to ___ television tonight.",blank:4,a:"watch",opts:["watch","watching","watches","watched"]},
          {s:"I am not going to ___ late.",blank:4,a:"work",opts:["work","working","works","worked"]}
        ],
        fill: [
          {s:"I ___ going to buy a new phone. (moqchiman)",a:"am"},
          {s:"He ___ going to travel to Europe. (moqchi)",a:"is"},
          {s:"They are ___ to build a house.",a:"going"},
          {s:"She is going ___ start a new course.",a:"to"},
          {s:"We are going to ___ a party. (qilmoq/uyushtirmoq)",a:"have"},
          {s:"I am not going to ___ the internet. (foydalanmoq)",a:"use"},
          {s:"The dog ___ going to sleep outside.",a:"is"},
          {s:"My friends ___ going to visit me.",a:"are"},
          {s:"I am going to ___ a letter. (yozmoq)",a:"write"},
          {s:"You are going to ___ tired tomorrow. (bo'lmoq)",a:"be"}
        ],
        order: [
          {w:["am","I","to","sleep","going"],a:"I am going to sleep."},
          {w:["going","She","to","read","is"],a:"She is going to read."},
          {w:["to","We","going","are","travel"],a:"We are going to travel."},
          {w:["They","going","to","play","are"],a:"They are going to play."},
          {w:["is","He","to","cook","going"],a:"He is going to cook."},
          {w:["buy","a","car","I","am","to","going"],a:"I am going to buy a car."},
          {w:["going","work","to","You","are"],a:"You are going to work."},
          {w:["to","learn","is","going","She","French"],a:"She is going to learn French."},
          {w:["aren't","We","to","going","wait"],a:"We aren't going to wait."},
          {w:["going","I","to","not","am","go"],a:"I am not going to go."}
        ]
      },
      { // 10B darsi (What are you going to do? - be going to questions and time expressions)
        mcq: [
          {s:"___ you going to travel next week?",blank:0,a:"Are",opts:["Are","Is","Do","Am"]},
          {s:"Where are you ___ to stay?",blank:3,a:"going",opts:["going","go","goes","went"]},
          {s:"What ___ she going to do?",blank:1,a:"is",opts:["is","are","am","does"]},
          {s:"Are they going to ___ us?",blank:4,a:"visit",opts:["visit","visiting","visits","visited"]},
          {s:"When are you going to ___?",blank:5,a:"leave",opts:["leave","leaving","leaves","left"]},
          {s:"Is he going to ___ the car?",blank:4,a:"drive",opts:["drive","driving","drives","drove"]},
          {s:"What are we going to ___?",blank:5,a:"eat",opts:["eat","eating","eats","ate"]},
          {s:"___ am I going to do?",blank:0,a:"What",opts:["What","Where","When","Who"]},
          {s:"Are you going to study ___ year?",blank:5,a:"next",opts:["next","last","ago","before"]},
          {s:"Is it going to ___ tomorrow?",blank:4,a:"rain",opts:["rain","raining","rains","rained"]}
        ],
        fill: [
          {s:"___ you going to stay in a hotel?",a:"Are"},
          {s:"___ is he going to arrive? (Qachon)",a:"When"},
          {s:"What ___ you going to study?",a:"are"},
          {s:"Where are they ___ to live?",a:"going"},
          {s:"Is she going ___ call me?",a:"to"},
          {s:"___ are we going to eat? (Nima)",a:"What"},
          {s:"Are you going to visit us ___ month? (kelasi)",a:"next"},
          {s:"___ is going to pay for this? (Kim)",a:"Who"},
          {s:"Why are you going to ___ your job? (tark etmoq)",a:"leave"},
          {s:"Are they going to ___ by train? (sayohat qilmoq)",a:"travel"}
        ],
        order: [
          {w:["going","to","Are","wait","you","?"],a:"Are you going to wait?"},
          {w:["he","going","to","sleep","Is","?"],a:"Is he going to sleep?"},
          {w:["are","to","What","you","going","do","?"],a:"What are you going to do?"},
          {w:["Where","they","going","to","stay","are","?"],a:"Where are they going to stay?"},
          {w:["she","going","Is","travel","to","?"],a:"Is she going to travel?"},
          {w:["next","you","going","to","Are","work","week","?"],a:"Are you going to work next week?"},
          {w:["going","to","When","leave","are","we","?"],a:"When are we going to leave?"},
          {w:["Who","you","to","going","meet","are","?"],a:"Who are you going to meet?"},
          {w:["going","it","to","rain","Is","?"],a:"Is it going to rain?"},
          {w:["they","buy","a","Are","house","to","going","?"],a:"Are they going to buy a house?"}
        ]
      },
      { // 10C darsi (A city break - Travel collocations)
        mcq: [
          {s:"We are going to ___ sightseeing.",blank:4,a:"go",opts:["go","do","make","have"]},
          {s:"They want to ___ a car for a week.",blank:3,a:"rent",opts:["rent","buy","do","make"]},
          {s:"I usually ___ in a nice hotel.",blank:2,a:"stay",opts:["stay","live","be","go"]},
          {s:"Let's ___ a meal in a restaurant.",blank:1,a:"have",opts:["have","do","make","go"]},
          {s:"She likes to ___ shopping on holiday.",blank:3,a:"go",opts:["go","do","make","have"]},
          {s:"We are going to ___ a museum.",blank:4,a:"visit",opts:["visit","go","look","see"]},
          {s:"He wants to ___ photos of the city.",blank:3,a:"take",opts:["take","make","do","have"]},
          {s:"Do you want to ___ a bike?",blank:4,a:"rent",opts:["rent","buy","take","make"]},
          {s:"They are going to ___ a walk.",blank:4,a:"have",opts:["have","do","go","take"]},
          {s:"I am going to ___ souvenirs.",blank:4,a:"buy",opts:["buy","get","make","do"]}
        ],
        fill: [
          {s:"We are going to ___ sightseeing tomorrow. (bormoq)",a:"go"},
          {s:"I want to ___ a car at the airport. (ijaraga olmoq)",a:"rent"},
          {s:"They are going to ___ in a cheap hotel. (qolmoq)",a:"stay"},
          {s:"Let's ___ a meal together. (tanovul qilmoq)",a:"have"},
          {s:"She wants to ___ some photos. (olmoq/tushirmoq)",a:"take"},
          {s:"We are going to ___ the art gallery. (tashrif buyurmoq)",a:"visit"},
          {s:"Do you want to ___ shopping? (bormoq)",a:"go"},
          {s:"I need to ___ a train ticket. (sotib olmoq)",a:"buy"},
          {s:"We are going to ___ a good time. (yaxshi vaqt o'tkazmoq)",a:"have"},
          {s:"He is going to ___ an apartment. (ijaraga olmoq)",a:"rent"}
        ],
        order: [
          {w:["going","sightseeing","are","We","to","go"],a:"We are going to go sightseeing."},
          {w:["rent","to","want","I","a","car"],a:"I want to rent a car."},
          {w:["in","stay","a","They","hotel"],a:"They stay in a hotel."},
          {w:["have","Let's","meal","a","nice"],a:"Let's have a nice meal."},
          {w:["museum","to","visit","going","We","are","the"],a:"We are going to visit the museum."},
          {w:["go","to","going","She","is","shopping"],a:"She is going to go shopping."},
          {w:["photos","to","He","take","wants"],a:"He wants to take photos."},
          {w:["buy","going","souvenirs","I","to","am"],a:"I am going to buy souvenirs."},
          {w:["time","have","a","We","going","are","to","great"],a:"We are going to have a great time."},
          {w:["bike","rent","Do","you","a","to","want","?"],a:"Do you want to rent a bike?"}
        ]
      },
      { // 10D darsi (Speaking and writing - Making suggestions)
        mcq: [
          {s:"___ don't we go to the beach?",blank:0,a:"Why",opts:["Why","What","Where","How"]},
          {s:"___ take a taxi.",blank:0,a:"Let's",opts:["Let's","Why","How","Do"]},
          {s:"That's a great ___!",blank:3,a:"idea",opts:["idea","think","plan","do"]},
          {s:"___ about going to the cinema?",blank:0,a:"How",opts:["How","What","Why","Let's"]},
          {s:"Why ___ we stay at home?",blank:1,a:"don't",opts:["don't","do","aren't","isn't"]},
          {s:"Let's ___ some food.",blank:1,a:"buy",opts:["buy","buying","to buy","bought"]},
          {s:"How ___ ordering a pizza?",blank:1,a:"about",opts:["about","for","to","with"]},
          {s:"I ___ think that's a good idea.",blank:1,a:"don't",opts:["don't","not","am not","doesn't"]},
          {s:"Yes, ___ do that.",blank:1,a:"let's",opts:["let's","we","you","they"]},
          {s:"___ don't we ask John?",blank:0,a:"Why",opts:["Why","How","What","Let's"]}
        ],
        fill: [
          {s:"___ don't we go for a walk? (Nega)",a:"Why"},
          {s:"___ watch a movie tonight. (Keling)",a:"Let's"},
          {s:"That is a very good ___. (g'oya)",a:"idea"},
          {s:"How ___ visiting the museum? (haqida nima deysiz)",a:"about"},
          {s:"Why ___ we eat here? (inkor yordamchi fe'l)",a:"don't"},
          {s:"Let's ___ to the park. (boramiz)",a:"go"},
          {s:"___ don't we play tennis? (Nega)",a:"Why"},
          {s:"I don't ___ that's a good idea. (o'ylamayman/o'ylayman)",a:"think"},
          {s:"Yes, let's ___ that. (qilaylik)",a:"do"},
          {s:"How about ___ a taxi? (olishga)",a:"taking"}
        ],
        order: [
          {w:["we","don't","go","out","Why","?"],a:"Why don't we go out?"},
          {w:["a","Let's","movie","watch"],a:"Let's watch a movie."},
          {w:["idea","a","That","is","good"],a:"That is a good idea."},
          {w:["going","to","park","How","about","the","?"],a:"How about going to the park?"},
          {w:["don't","stay","we","Home","Why","at","?"],a:"Why don't we stay at Home?"},
          {w:["pizza","Let's","order","a"],a:"Let's order a pizza."},
          {w:["visiting","friend","your","How","about","?"],a:"How about visiting your friend?"},
          {w:["I","think","good","a","don't","idea","that's"],a:"I don't think that's a good idea."},
          {w:["we","a","taxi","don't","take","Why","?"],a:"Why don't we take a taxi?"},
          {w:["do","Yes,","let's","that"],a:"Yes, let's do that."}
        ]
      }
]
  }
];

// ════════════════════════════
// MAVZULAR VA LUG'AT
// ════════════════════════════
const BOOK = [
  { unit:0, label:"Welcome", emoji:"👋", topics:"Hello, numbers, alphabet, classroom",
    lessons:[
      { tag:"W.A", title:"Hello!", focus:"Greetings and introductions", vocab:[ {en:"hello",uz:"salom",emoji:"👋"}, {en:"goodbye",uz:"xayr",emoji:"🚪"}, {en:"name",uz:"ism",emoji:"🏷️"}, {en:"please",uz:"iltimos",emoji:"🙏"}, {en:"thank you",uz:"rahmat",emoji:"😊"}, {en:"sorry",uz:"kechirasiz",emoji:"😔"}, {en:"yes",uz:"ha",emoji:"✅"}, {en:"no",uz:"yo'q",emoji:"❌"}, {en:"good morning",uz:"xayrli tong",emoji:"🌅"}, {en:"good night",uz:"xayrli tun",emoji:"🌙"} ]},
      { tag:"W.B", title:"Numbers & Letters", focus:"Numbers 1-20 and alphabet", vocab:[ {en:"one",uz:"bir",emoji:"1️⃣"}, {en:"two",uz:"ikki",emoji:"2️⃣"}, {en:"three",uz:"uch",emoji:"3️⃣"}, {en:"four",uz:"to'rt",emoji:"4️⃣"}, {en:"five",uz:"besh",emoji:"5️⃣"}, {en:"six",uz:"olti",emoji:"6️⃣"}, {en:"seven",uz:"yetti",emoji:"7️⃣"}, {en:"eight",uz:"sakkiz",emoji:"8️⃣"}, {en:"nine",uz:"to'qqiz",emoji:"9️⃣"}, {en:"ten",uz:"o'n",emoji:"🔟"} ]},
      { tag:"W.C", title:"In the classroom", focus:"Classroom objects", vocab:[ {en:"pen",uz:"ruchka",emoji:"🖊️"}, {en:"book",uz:"kitob",emoji:"📖"}, {en:"desk",uz:"stol",emoji:"🪑"}, {en:"chair",uz:"stul",emoji:"💺"}, {en:"board",uz:"doska",emoji:"📋"}, {en:"teacher",uz:"o'qituvchi",emoji:"👩‍🏫"}, {en:"student",uz:"talaba",emoji:"🎓"}, {en:"window",uz:"deraza",emoji:"🪟"}, {en:"door",uz:"eshik",emoji:"🚪"}, {en:"phone",uz:"telefon",emoji:"📱"} ]}
    ]
  },
  { unit:1, label:"First meetings", emoji:"🤝", topics:"Introductions, be, countries, alphabet",
    lessons:[
      { tag:"1A", title:"On business or on holiday?", focus:"Verb be (I/you)", vocab:[ {en:"business",uz:"biznes",emoji:"💼"}, {en:"holiday",uz:"ta'til",emoji:"🏖️"}, {en:"study",uz:"o'qish",emoji:"📚"}, {en:"meet",uz:"tanishmoq",emoji:"🤝"}, {en:"nice",uz:"yoqimli",emoji:"😊"}, {en:"hello",uz:"salom",emoji:"👋"}, {en:"hi",uz:"salom",emoji:"👋"}, {en:"goodbye",uz:"xayr",emoji:"🚪"}, {en:"am",uz:"man (fe'l)",emoji:"👤"}, {en:"are",uz:"siz (fe'l)",emoji:"👥"} ]},
      { tag:"1B", title:"Where are you from?", focus:"Verb be (we/you), Countries", vocab:[ {en:"country",uz:"davlat",emoji:"🗺️"}, {en:"city",uz:"shahar",emoji:"🏙️"}, {en:"where",uz:"qayerda",emoji:"📍"}, {en:"from",uz:"dan",emoji:"🛫"}, {en:"number",uz:"raqam",emoji:"🔢"}, {en:"zero",uz:"nol",emoji:"0️⃣"}, {en:"one",uz:"bir",emoji:"1️⃣"}, {en:"two",uz:"ikki",emoji:"2️⃣"}, {en:"three",uz:"uch",emoji:"3️⃣"}, {en:"four",uz:"to'rt",emoji:"4️⃣"} ]},
      { tag:"1C", title:"How do you spell that?", focus:"Alphabet, Question words", vocab:[ {en:"spell",uz:"harflab aytmoq",emoji:"🔤"}, {en:"name",uz:"ism",emoji:"🏷️"}, {en:"phone",uz:"telefon",emoji:"📱"}, {en:"email",uz:"elektron pochta",emoji:"📧"}, {en:"address",uz:"manzil",emoji:"🏠"}, {en:"how",uz:"qanday",emoji:"❓"}, {en:"what",uz:"nima",emoji:"❓"}, {en:"when",uz:"qachon",emoji:"⏰"}, {en:"old",uz:"yosh/qari",emoji:"🎂"}, {en:"birthday",uz:"tug'ilgan kun",emoji:"🎁"} ]},
      { tag:"1D", title:"Speaking and writing", focus:"Saying hello and goodbye", vocab:[ {en:"day",uz:"kun",emoji:"☀️"}, {en:"later",uz:"keyinroq",emoji:"🕒"}, {en:"morning",uz:"ertalab",emoji:"🌅"}, {en:"fine",uz:"yaxshi",emoji:"👍"}, {en:"thanks",uz:"rahmat",emoji:"🙏"}, {en:"great",uz:"zo'r",emoji:"🤩"}, {en:"first",uz:"birinchi",emoji:"🥇"}, {en:"last",uz:"oxirgi",emoji:"🏁"}, {en:"visit",uz:"tashrif",emoji:"🚶"}, {en:"signature",uz:"imzo",emoji:"✍️"} ]}
    ]
  },
  { unit:2, label:"Things", emoji:"🎒", topics:"Possessions, colours, prices",
    lessons:[
      { tag:"2A", title:"My things", focus:"Personal possessions", vocab:[ {en:"phone",uz:"telefon",emoji:"📱"}, {en:"bag",uz:"sumka",emoji:"👜"}, {en:"keys",uz:"kalitlar",emoji:"🗝️"}, {en:"wallet",uz:"hamyon",emoji:"👛"}, {en:"laptop",uz:"noutbuk",emoji:"💻"}, {en:"umbrella",uz:"soyabon",emoji:"☂️"}, {en:"watch",uz:"soat",emoji:"⌚"}, {en:"glasses",uz:"ko'zoynak",emoji:"👓"}, {en:"camera",uz:"kamera",emoji:"📷"}, {en:"headphones",uz:"quloqchin",emoji:"🎧"} ]},
      { tag:"2B", title:"Colours and adjectives", focus:"Describing objects", vocab:[ {en:"red",uz:"qizil",emoji:"🔴"}, {en:"blue",uz:"ko'k",emoji:"🔵"}, {en:"green",uz:"yashil",emoji:"🟢"}, {en:"black",uz:"qora",emoji:"⚫"}, {en:"white",uz:"oq",emoji:"⚪"}, {en:"yellow",uz:"sariq",emoji:"🟡"}, {en:"orange",uz:"to'q sariq",emoji:"🟠"}, {en:"pink",uz:"pushti",emoji:"🌸"}, {en:"big",uz:"katta",emoji:"🐘"}, {en:"small",uz:"kichik",emoji:"🐭"} ]},
      { tag:"2C", title:"How much is it?", focus:"Shopping and prices", vocab:[ {en:"price",uz:"narx",emoji:"💰"}, {en:"cheap",uz:"arzon",emoji:"🏷️"}, {en:"expensive",uz:"qimmat",emoji:"💎"}, {en:"money",uz:"pul",emoji:"💵"}, {en:"shop",uz:"do'do'kon",emoji:"🏪"}, {en:"market",uz:"bozor",emoji:"🛒"}, {en:"buy",uz:"sotib olmoq",emoji:"🛍️"}, {en:"sell",uz:"sotmoq",emoji:"📦"}, {en:"pay",uz:"to'lamoq",emoji:"💳"}, {en:"free",uz:"bepul",emoji:"🆓"} ]},
      { tag:"2D", title:"Can I help you?", focus:"Shopping dialogues", vocab:[ {en:"size",uz:"o'lcham",emoji:"📏"}, {en:"colour",uz:"rang",emoji:"🎨"}, {en:"receipt",uz:"kvitansiya",emoji:"🧾"}, {en:"change",uz:"qoldiq pul",emoji:"🪙"}, {en:"card",uz:"karta",emoji:"💳"}, {en:"cash",uz:"naqd pul",emoji:"💵"}, {en:"discount",uz:"chegirma",emoji:"🏷️"}, {en:"sale",uz:"sotuv",emoji:"🔥"}, {en:"bag",uz:"paket",emoji:"🛍️"}, {en:"gift",uz:"sovg'a",emoji:"🎁"} ]}
    ]
  },
  { unit:3, label:"Around the world", emoji:"🌍", topics:"Places, transport, directions",
    lessons:[
      { tag:"3A", title:"Amazing places", focus:"Describing places", vocab:[ {en:"mountain",uz:"tog'",emoji:"⛰️"}, {en:"beach",uz:"plyaj",emoji:"🏖️"}, {en:"river",uz:"daryo",emoji:"🏞️"}, {en:"lake",uz:"ko'l",emoji:"🌊"}, {en:"forest",uz:"o'rmon",emoji:"🌲"}, {en:"desert",uz:"cho'l",emoji:"🏜️"}, {en:"island",uz:"orol",emoji:"🏝️"}, {en:"city",uz:"shahar",emoji:"🏙️"}, {en:"village",uz:"qishloq",emoji:"🏡"}, {en:"waterfall",uz:"sharshar",emoji:"💧"} ]},
      { tag:"3B", title:"Transport", focus:"Types of transport", vocab:[ {en:"bus",uz:"avtobus",emoji:"🚌"}, {en:"train",uz:"poyezd",emoji:"🚂"}, {en:"plane",uz:"samolyot",emoji:"✈️"}, {en:"car",uz:"mashina",emoji:"🚗"}, {en:"taxi",uz:"taksi",emoji:"🚕"}, {en:"bike",uz:"velosiped",emoji:"🚲"}, {en:"boat",uz:"qayiq",emoji:"⛵"}, {en:"metro",uz:"metro",emoji:"🚇"}, {en:"ship",uz:"kema",emoji:"🚢"}, {en:"ticket",uz:"chipta",emoji:"🎫"} ]},
      { tag:"3C", title:"Directions", focus:"Giving directions", vocab:[ {en:"left",uz:"chap",emoji:"⬅️"}, {en:"right",uz:"o'ng",emoji:"➡️"}, {en:"straight",uz:"to'g'ri",emoji:"⬆️"}, {en:"turn",uz:"burilmoq",emoji:"↩️"}, {en:"near",uz:"yaqin",emoji:"📍"}, {en:"far",uz:"uzoq",emoji:"🗺️"}, {en:"street",uz:"ko'cha",emoji:"🛣️"}, {en:"road",uz:"yo'l",emoji:"🛤️"}, {en:"bridge",uz:"ko'prik",emoji:"🌉"}, {en:"map",uz:"xarita",emoji:"🗺️"} ]},
      { tag:"3D", title:"At the hotel", focus:"Hotel conversations", vocab:[ {en:"hotel",uz:"mehmonxona",emoji:"🏨"}, {en:"room",uz:"xona",emoji:"🛏️"}, {en:"key",uz:"kalit",emoji:"🗝️"}, {en:"floor",uz:"qavat",emoji:"🏢"}, {en:"lift",uz:"lift",emoji:"🛗"}, {en:"breakfast",uz:"nonushta",emoji:"🍳"}, {en:"pool",uz:"basseyn",emoji:"🏊"}, {en:"parking",uz:"avtoturargoh",emoji:"🅿️"}, {en:"check in",uz:"ro'yxatdan o'tish",emoji:"✅"}, {en:"reservation",uz:"bron",emoji:"📅"} ]}
    ]
  },
  { unit:4, label:"My life", emoji:"📅", topics:"Daily life, present simple, transport",
    lessons:[
      { tag:"4A", title:"About me", focus:"Present simple positive", vocab:[ {en:"get up",uz:"uyg'onmoq",emoji:"⏰"}, {en:"listen",uz:"eshitmoq",emoji:"🎧"}, {en:"start",uz:"boshlamoq",emoji:"▶️"}, {en:"finish",uz:"tugatmoq",emoji:"⏹️"}, {en:"live",uz:"yashamoq",emoji:"🏠"}, {en:"work",uz:"ishlamoq",emoji:"💼"}, {en:"study",uz:"o'qimoq",emoji:"📖"}, {en:"watch",uz:"tomosha qilmoq",emoji:"📺"}, {en:"read",uz:"o'qimoq (kitob)",emoji:"📚"}, {en:"have",uz:"ega bo'lmoq",emoji:"🤲"} ]},
      { tag:"4B", title:"Journeys", focus:"Present simple negative, transport", vocab:[ {en:"bus",uz:"avtobus",emoji:"🚌"}, {en:"train",uz:"poyezd",emoji:"🚆"}, {en:"car",uz:"mashina",emoji:"🚗"}, {en:"ferry",uz:"parom",emoji:"⛴️"}, {en:"walk",uz:"piyoda yurmoq",emoji:"🚶"}, {en:"cycle",uz:"velosiped uchmoq",emoji:"🚲"}, {en:"drive",uz:"haydamoq",emoji:"🚘"}, {en:"transport",uz:"transport",emoji:"🚉"}, {en:"journey",uz:"sayohat",emoji:"🛣️"}, {en:"travel",uz:"sayohat qilmoq",emoji:"🧳"} ]},
      { tag:"4C", title:"My day", focus:"Present simple yes/no questions", vocab:[ {en:"weekend",uz:"dam olish kunlari",emoji:"🎉"}, {en:"morning",uz:"ertalab",emoji:"🌅"}, {en:"afternoon",uz:"tushdan keyin",emoji:"☀️"}, {en:"evening",uz:"kechqurun",emoji:"🌆"}, {en:"lunch",uz:"tushlik",emoji:"🥗"}, {en:"dinner",uz:"kechki ovqat",emoji:"🍽️"}, {en:"breakfast",uz:"nonushta",emoji:"🍳"}, {en:"meeting",uz:"uchrashuv",emoji:"🤝"}, {en:"early",uz:"erta",emoji:"🌄"}, {en:"late",uz:"kech",emoji:"🌙"} ]},
      { tag:"4D", title:"Speaking and writing", focus:"In a shop", vocab:[ {en:"shop",uz:"do'kon",emoji:"🏪"}, {en:"price",uz:"narx",emoji:"💰"}, {en:"buy",uz:"sotib olmoq",emoji:"🛍️"}, {en:"dollars",uz:"dollar",emoji:"💵"}, {en:"pounds",uz:"funt",emoji:"💷"}, {en:"help",uz:"yordam bermoq",emoji:"💁"}, {en:"look",uz:"qaramoq",emoji:"👀"}, {en:"take",uz:"olmoq",emoji:"🛒"}, {en:"everything",uz:"hammasi",emoji:"📦"}, {en:"receipt",uz:"chek/kvitansiya",emoji:"🧾"} ]}
    ]
  },
  { unit:5, label:"Style and design", emoji:"🎨", topics:"Clothes, architecture, body parts, travel info",
    lessons:[
      { tag:"5A", title:"Clothes style", focus:"Adverbs of frequency, clothes", vocab:[ {en:"clothes",uz:"kiyimlar",emoji:"👕"}, {en:"shoes",uz:"poyabzal",emoji:"👞"}, {en:"jacket",uz:"kurtka",emoji:"🧥"}, {en:"dress",uz:"ko'ylak",emoji:"👗"}, {en:"jeans",uz:"jinsi",emoji:"👖"}, {en:"shirt",uz:"ko'ylak (erkaklar)",emoji:"👔"}, {en:"trousers",uz:"shim",emoji:"👖"}, {en:"always",uz:"har doim",emoji:"💯"}, {en:"usually",uz:"odatda",emoji:"📈"}, {en:"never",uz:"hech qachon",emoji:"🚫"} ]},
      { tag:"5B", title:"Amazing architecture", focus:"Wh-questions, buildings", vocab:[ {en:"architecture",uz:"arxitektura",emoji:"🏛️"}, {en:"building",uz:"bino",emoji:"🏢"}, {en:"modern",uz:"zamonaviy",emoji:"🏙️"}, {en:"traditional",uz:"an'anaviy",emoji:"🛖"}, {en:"unusual",uz:"g'ayrioddiy",emoji:"😲"}, {en:"What",uz:"nima",emoji:"❓"}, {en:"Where",uz:"qayerda",emoji:"📍"}, {en:"When",uz:"qachon",emoji:"⏰"}, {en:"Why",uz:"nega",emoji:"🤷"}, {en:"How",uz:"qanday",emoji:"🔧"} ]},
      { tag:"5C", title:"Styles around the world", focus:"Parts of the body, Present simple", vocab:[ {en:"arm",uz:"qo'l",emoji:"💪"}, {en:"body",uz:"tana",emoji:"🧍"}, {en:"face",uz:"yuz",emoji:"🙂"}, {en:"foot",uz:"oyoq (tagi)",emoji:"🦶"}, {en:"hair",uz:"soch",emoji:"💇"}, {en:"hand",uz:"qo'l (kaft)",emoji:"🖐️"}, {en:"head",uz:"bosh",emoji:"🗣️"}, {en:"leg",uz:"oyoq",emoji:"🦵"}, {en:"really",uz:"haqiqatan ham",emoji:"❗"}, {en:"very",uz:"juda",emoji:"🌟"} ]},
      { tag:"5D", title:"Travel information", focus:"Travel arrangements, texting", vocab:[ {en:"ticket",uz:"chipta",emoji:"🎫"}, {en:"bus",uz:"avtobus",emoji:"🚌"}, {en:"train",uz:"poyezd",emoji:"🚂"}, {en:"platform",uz:"platforma",emoji:"🚉"}, {en:"station",uz:"vokzal",emoji:"🚉"}, {en:"leave",uz:"jo'nab ketmoq",emoji:"🛫"}, {en:"arrive",uz:"yetib kelmoq",emoji:"🛬"}, {en:"buy",uz:"sotib olmoq",emoji:"💵"}, {en:"message",uz:"xabar",emoji:"💬"}, {en:"meet",uz:"uchrashmoq",emoji:"🤝"} ]}
    ]
  },
  { unit:6, label:"Places and facilities", emoji:"🏙️", topics:"Places, hotel facilities, furniture, problems",
    lessons:[
      { tag:"6A", title:"Two towns", focus:"there is / there are, places", vocab:[ {en:"town",uz:"shaharcha",emoji:"🏘️"}, {en:"city",uz:"shahar",emoji:"🏙️"}, {en:"bank",uz:"bank",emoji:"🏦"}, {en:"park",uz:"bog'",emoji:"🌳"}, {en:"bakery",uz:"novvoyxona",emoji:"🥐"}, {en:"museum",uz:"muzey",emoji:"🏛️"}, {en:"shop",uz:"do'kon",emoji:"🏪"}, {en:"restaurant",uz:"restoran",emoji:"🍽️"}, {en:"hotel",uz:"mehmonxona",emoji:"🏨"}, {en:"cinema",uz:"kino",emoji:"🎬"} ]},
      { tag:"6B", title:"Is there Wi-fi?", focus:"Is there...? / Are there...?, hotel facilities", vocab:[ {en:"gym",uz:"sport zali",emoji:"🏋️"}, {en:"lift",uz:"lift",emoji:"🛗"}, {en:"safe",uz:"seyf",emoji:"🔐"}, {en:"towel",uz:"sochiq",emoji:"🛁"}, {en:"bath",uz:"vanna",emoji:"🛀"}, {en:"shower",uz:"dush",emoji:"🚿"}, {en:"car park",uz:"avtoturargoh",emoji:"🅿️"}, {en:"iron",uz:"dazmol",emoji:"👔"}, {en:"refreshments",uz:"yengil tamaddi",emoji:"🍹"}, {en:"Wi-fi",uz:"Wi-fi",emoji:"📶"} ]},
      { tag:"6C", title:"Has each flat got a kitchen?", focus:"each and all the, furniture", vocab:[ {en:"kitchen",uz:"oshxona",emoji:"🍳"}, {en:"bedroom",uz:"yotoqxona",emoji:"🛏️"}, {en:"bathroom",uz:"vanna xonasi",emoji:"🚽"}, {en:"balcony",uz:"balkon",emoji:"🏢"}, {en:"bed",uz:"karavot",emoji:"🛌"}, {en:"chair",uz:"stul",emoji:"🪑"}, {en:"fridge",uz:"muzlatgich",emoji:"🧊"}, {en:"sofa",uz:"divan",emoji:"🛋️"}, {en:"table",uz:"stol",emoji:"🪑"}, {en:"microwave",uz:"mikroto'lqinli pech",emoji:"♨️"} ]},
      { tag:"6D", title:"Speaking and writing", focus:"Explaining problems", vocab:[ {en:"problem",uz:"muammo",emoji:"⚠️"}, {en:"hot",uz:"issiq",emoji:"🥵"}, {en:"cold",uz:"sovuq",emoji:"🥶"}, {en:"noisy",uz:"shovqinli",emoji:"🔊"}, {en:"broken",uz:"singen",emoji:"🔨"}, {en:"dirty",uz:"iflos",emoji:"🗑️"}, {en:"help",uz:"yordam bermoq",emoji:"🆘"}, {en:"send",uz:"yubormoq",emoji:"📤"}, {en:"try",uz:"sinab ko'rmoq",emoji:"🔄"}, {en:"code",uz:"kod",emoji:"🔢"} ]}
    ]
  },
  { unit:7, label:"Skills and interests", emoji:"🎸", topics:"Abilities, adverbs, hobbies, requests",
    lessons:[
      { tag:"7A", title:"She can paint", focus:"can/can't, skills", vocab:[ {en:"swim",uz:"suzmoq",emoji:"🏊"}, {en:"play",uz:"o'ynamoq/chalmoq",emoji:"🎮"}, {en:"guitar",uz:"gitara",emoji:"🎸"}, {en:"sing",uz:"kuylamoq",emoji:"🎤"}, {en:"dance",uz:"raqsga tushmoq",emoji:"💃"}, {en:"paint",uz:"rasm chizmoq",emoji:"🎨"}, {en:"drive",uz:"mashina haydamoq",emoji:"🚗"}, {en:"cook",uz:"ovqat pishirmoq",emoji:"👨‍🍳"}, {en:"ride",uz:"minmoq (velosiped)",emoji:"🚲"}, {en:"type",uz:"harf termoq",emoji:"⌨️"} ]},
      { tag:"7B", title:"Can you help?", focus:"can questions, adverbs of manner", vocab:[ {en:"well",uz:"yaxshi",emoji:"👍"}, {en:"badly",uz:"yomon",emoji:"👎"}, {en:"fast",uz:"tez",emoji:"⚡"}, {en:"slowly",uz:"sekin",emoji:"🐢"}, {en:"easily",uz:"osonlik bilan",emoji:"🎈"}, {en:"hard",uz:"qattiq/qiyin",emoji:"💪"}, {en:"perfectly",uz:"mukammal",emoji:"✨"}, {en:"quickly",uz:"tezda",emoji:"🏃"}, {en:"carefully",uz:"ehtiyotkorlik bilan",emoji:"🧐"}, {en:"beautifully",uz:"chiroyli qilib",emoji:"🌸"} ]},
      { tag:"7C", title:"I like going out", focus:"like + -ing, hobbies", vocab:[ {en:"read",uz:"o'qimoq",emoji:"📖"}, {en:"travel",uz:"sayohat qilmoq",emoji:"✈️"}, {en:"shop",uz:"xarid qilmoq",emoji:"🛍️"}, {en:"watch",uz:"tomosha qilmoq",emoji:"📺"}, {en:"listen",uz:"eshitmoq",emoji:"🎧"}, {en:"go out",uz:"ko'chaga chiqmoq",emoji:"🚶"}, {en:"take photos",uz:"rasmga olmoq",emoji:"📸"}, {en:"garden",uz:"bog'da ishlamoq",emoji:"🌱"}, {en:"hate",uz:"yomon ko'rmoq",emoji:"😠"}, {en:"love",uz:"sevmoq",emoji:"❤️"} ]},
      { tag:"7D", title:"Speaking and writing", focus:"Requests and answers", vocab:[ {en:"help",uz:"yordam",emoji:"🤝"}, {en:"water",uz:"suv",emoji:"💧"}, {en:"way",uz:"yo'l",emoji:"🛣️"}, {en:"call",uz:"chaqirmoq/qo'ng'iroq",emoji:"📞"}, {en:"taxi",uz:"taksi",emoji:"🚕"}, {en:"chair",uz:"stul",emoji:"🪑"}, {en:"sure",uz:"albatta",emoji:"✅"}, {en:"course",uz:"albatta (of course)",emoji:"✔️"}, {en:"problem",uz:"muammo",emoji:"⚠️"}, {en:"sorry",uz:"kechirasiz",emoji:"😔"} ]}
    ]
  },
  { unit:8, label:"Our past", emoji:"🕰️", topics:"Past simple be, regular verbs, pronouns, special occasions",
    lessons:[
      { tag:"8A", title:"When we were seven", focus:"was / were", vocab:[ {en:"was",uz:"edim/edi",emoji:"👤"}, {en:"were",uz:"edik/edingiz",emoji:"👥"}, {en:"yesterday",uz:"kecha",emoji:"🔙"}, {en:"rich",uz:"boy",emoji:"💰"}, {en:"poor",uz:"kambag'al",emoji:"🪙"}, {en:"happy",uz:"xursand",emoji:"😊"}, {en:"sad",uz:"xafa",emoji:"😢"}, {en:"lucky",uz:"omadli",emoji:"🍀"}, {en:"last night",uz:"o'tgan tunda",emoji:"🌙"}, {en:"last year",uz:"o'tgan yili",emoji:"📆"} ]},
      { tag:"8B", title:"Lives from the past", focus:"Past simple regular verbs", vocab:[ {en:"played",uz:"o'ynadi",emoji:"🎮"}, {en:"worked",uz:"ishladi",emoji:"💼"}, {en:"lived",uz:"yashadi",emoji:"🏠"}, {en:"started",uz:"boshladi",emoji:"▶️"}, {en:"finished",uz:"tugatdi",emoji:"⏹️"}, {en:"studied",uz:"o'qidi (o'rgandi)",emoji:"📚"}, {en:"watched",uz:"tomosha qildi",emoji:"📺"}, {en:"listened",uz:"eshitdi",emoji:"🎧"}, {en:"wanted",uz:"xohladi",emoji:"🙏"}, {en:"liked",uz:"yoqtirdi",emoji:"❤️"} ]},
      { tag:"8C", title:"Special moments", focus:"Object pronouns", vocab:[ {en:"me",uz:"meni/menga",emoji:"🙋"}, {en:"you",uz:"seni/senga",emoji:"👉"}, {en:"him",uz:"uni/unga (erkak)",emoji:"👨"}, {en:"her",uz:"uni/unga (ayol)",emoji:"👩"}, {en:"it",uz:"uni/unga (narsa)",emoji:"📦"}, {en:"us",uz:"bizni/bizga",emoji:"👫"}, {en:"them",uz:"ularni/ularga",emoji:"👪"}, {en:"invite",uz:"taklif qilmoq",emoji:"💌"}, {en:"call",uz:"qo'ng'iroq qilmoq",emoji:"📞"}, {en:"tell",uz:"aytmoq",emoji:"🗣️"} ]},
      { tag:"8D", title:"Speaking and writing", focus:"Special occasions", vocab:[ {en:"congratulations",uz:"tabriklayman",emoji:"🎉"}, {en:"happy birthday",uz:"tug'ilgan kuningiz bilan",emoji:"🎂"}, {en:"cheers",uz:"oldik (qadah so'zi)",emoji:"🥂"}, {en:"good luck",uz:"omad",emoji:"🍀"}, {en:"great",uz:"zo'r",emoji:"🤩"}, {en:"never mind",uz:"qisi yo'q/hechqisi yo'q",emoji:"🤷"}, {en:"sorry",uz:"kechirasiz",emoji:"😔"}, {en:"glad",uz:"xursand",emoji:"😄"}, {en:"hear",uz:"eshitmoq",emoji:"👂"}, {en:"test",uz:"sinov",emoji:"📝"} ]}
    ]
  },
  { unit:9, label:"Unusual stories", emoji:"📰", topics:"Past simple irregular, negatives, ago, weather",
    lessons:[
      { tag:"9A", title:"Happy memories", focus:"Past simple irregular verbs", vocab:[ {en:"went",uz:"bordi",emoji:"🚶"}, {en:"had",uz:"ega edi",emoji:"🤲"}, {en:"met",uz:"uchratdi",emoji:"🤝"}, {en:"said",uz:"aytdi",emoji:"🗣️"}, {en:"got",uz:"oldi",emoji:"📥"}, {en:"lost",uz:"yo'qotdi",emoji:"🔍"}, {en:"left",uz:"tark etdi",emoji:"🚪"}, {en:"came",uz:"keldi",emoji:"🏃"}, {en:"fell",uz:"yiqildi",emoji:"🤕"}, {en:"saw",uz:"ko'rdi",emoji:"👀"} ]},
      { tag:"9B", title:"A good excuse", focus:"Past simple negatives and questions", vocab:[ {en:"didn't",uz:"qilmadi",emoji:"❌"}, {en:"did",uz:"qildimi?",emoji:"❓"}, {en:"win",uz:"yutmoq",emoji:"🏆"}, {en:"lose",uz:"yutqazmoq",emoji:"📉"}, {en:"buy",uz:"sotib olmoq",emoji:"🛍️"}, {en:"catch",uz:"tutmoq/ulgurmoq",emoji:"🚆"}, {en:"sleep",uz:"uxlamoq",emoji:"😴"}, {en:"understand",uz:"tushunmoq",emoji:"🧠"}, {en:"answer",uz:"javob bermoq",emoji:"✅"}, {en:"forget",uz:"unutmoq",emoji:"🤦"} ]},
      { tag:"9C", title:"News stories", focus:"ago, time expressions", vocab:[ {en:"ago",uz:"oldin",emoji:"⏪"}, {en:"yesterday",uz:"kecha",emoji:"🔙"}, {en:"last week",uz:"o'tgan hafta",emoji:"📅"}, {en:"last year",uz:"o'tgan yil",emoji:"📆"}, {en:"month",uz:"oy",emoji:"🗓️"}, {en:"century",uz:"asr",emoji:"🏛️"}, {en:"decade",uz:"o'n yillik",emoji:"⏳"}, {en:"history",uz:"tarix",emoji:"📜"}, {en:"time",uz:"vaqt",emoji:"⏱️"}, {en:"past",uz:"o'tmish",emoji:"🕰️"} ]},
      { tag:"9D", title:"Speaking and writing", focus:"The weather", vocab:[ {en:"sunny",uz:"quyoshli",emoji:"☀️"}, {en:"cloudy",uz:"bulutli",emoji:"☁️"}, {en:"rainy",uz:"yomg'irli",emoji:"🌧️"}, {en:"windy",uz:"shamolli",emoji:"🌬️"}, {en:"snowy",uz:"qorli",emoji:"❄️"}, {en:"stormy",uz:"bo'ronli",emoji:"⛈️"}, {en:"hot",uz:"issiq",emoji:"🥵"}, {en:"cold",uz:"sovuq",emoji:"🥶"}, {en:"warm",uz:"iliq",emoji:"😊"}, {en:"weather",uz:"ob-havo",emoji:"🌤️"} ]}
    ]
  },
 { unit:10, label:"New places, new projects", emoji:"✈️", topics:"Future plans, travel, suggestions",
    lessons:[
      { tag:"10A", title:"A new life", focus:"be going to", vocab:[ {en:"move house",uz:"ko'chib o'tmoq",emoji:"📦"}, {en:"learn",uz:"o'rganmoq",emoji:"📖"}, {en:"language",uz:"til",emoji:"🗣️"}, {en:"get a job",uz:"ishga kirmoq",emoji:"💼"}, {en:"travel",uz:"sayohat qilmoq",emoji:"🌍"}, {en:"buy",uz:"sotib olmoq",emoji:"💳"}, {en:"future",uz:"kelajak",emoji:"🔮"}, {en:"soon",uz:"tez orada",emoji:"⏳"}, {en:"course",uz:"kurs",emoji:"🎓"}, {en:"tomorrow",uz:"ertaga",emoji:"📅"} ]},
      { tag:"10B", title:"What are you going to do?", focus:"be going to questions, time expressions", vocab:[ {en:"arrive",uz:"yetib kelmoq",emoji:"🛬"}, {en:"leave",uz:"tark etmoq/ketmoq",emoji:"🛫"}, {en:"visit",uz:"tashrif buyurmoq",emoji:"🚶"}, {en:"stay",uz:"qolmoq",emoji:"🏨"}, {en:"return",uz:"qaytmoq",emoji:"🔄"}, {en:"next week",uz:"kelasi hafta",emoji:"📆"}, {en:"next month",uz:"kelasi oy",emoji:"🗓️"}, {en:"tonight",uz:"bugun tunda",emoji:"🌙"}, {en:"weekend",uz:"dam olish kuni",emoji:"🎉"}, {en:"tomorrow morning",uz:"ertaga ertalab",emoji:"🌅"} ]},
      { tag:"10C", title:"A city break", focus:"Travel collocations", vocab:[ {en:"go sightseeing",uz:"diqqatga sazovor joylarni ko'rmoq",emoji:"📸"}, {en:"rent a car",uz:"mashina ijaraga olmoq",emoji:"🚘"}, {en:"stay in a hotel",uz:"mehmonxonada qolmoq",emoji:"🏨"}, {en:"visit a museum",uz:"muzeyga bormoq",emoji:"🏛️"}, {en:"take photos",uz:"rasmga olmoq",emoji:"📷"}, {en:"buy souvenirs",uz:"esdalik sovg'alar olmoq",emoji:"🎁"}, {en:"have a meal",uz:"ovqatlanmoq",emoji:"🍽️"}, {en:"guidebook",uz:"yo'riqnoma kitobi",emoji:"🗺️"}, {en:"tourist",uz:"sayyoh",emoji:"🎒"}, {en:"map",uz:"xarita",emoji:"🗺️"} ]},
      { tag:"10D", title:"Speaking and writing", focus:"Making suggestions", vocab:[ {en:"why don't we",uz:"nega biz... qilmaymiz",emoji:"🤔"}, {en:"let's",uz:"keling... qilaylik",emoji:"🤝"}, {en:"how about",uz:"... haqida nima deysiz",emoji:"🤷"}, {en:"idea",uz:"g'oya/fikr",emoji:"💡"}, {en:"agree",uz:"rozi bo'lmoq",emoji:"✅"}, {en:"suggest",uz:"taklif qilmoq",emoji:"💬"}, {en:"excellent",uz:"a'lo",emoji:"🌟"}, {en:"perfect",uz:"mukammal",emoji:"✨"}, {en:"plan",uz:"reja",emoji:"📋"}, {en:"together",uz:"birgalikda",emoji:"👫"} ]}
    ]
  }
];

// ════════════════════════════
// STATE & HELPERS
// ════════════════════════════
