const state = loadState();

const recurringPhrase = "for the record";

const docs = {
  opening: {
    id: "opening",
    section: "root",
    type: "Case File Access Notice",
    title: "Access Notice",
    meta: ["Recovered case materials", "Blackwood House", "Winter Index"],
    body: `
      <p class="lede">The following materials were released under disputed authority after the death of Gideon Vale, director of the Aster Archive Fellowship, whose body was found in the conservatory at Blackwood House shortly after midnight during the Winter Index retreat. Present on the estate that night were Mara Anouk, Elias Thorne, June Navarro, Professor Simon Reeve, and house archivist Celia Hsu. No exterior intrusion was recorded. Witness statements conflict in substance, sequence, and tone. Several files show evidence of revision after the event.</p>
      <p>This archive was assembled from interviews, staff notes, phone exports, draft correspondence, security fragments, and pages recovered from rooms that had already begun to be cleared before dawn. A narrower institution would call these records complete. This one does not. Gaps remain where files were withheld, misfiled, damaged by water, or altered by the same habits of preservation that made the retreat possible in the first place. Blackwood House was built to keep weather out and reputation in. It did not do either job perfectly.</p>
      <p>The official summary states that Vale suffered a fatal fall after a power irregularity, with surrounding disorder attributable to shattered conservatory glass and an overturned planter. The official summary also presumes that the people nearest him were, in one form or another, dependent on him. This archive is not neutral about that dependence. It contains anger, omission, rehearsal, private style, petty correction, and fear. It contains people trying to speak in a room still arranged by a dead man.</p>
      <p>Some items remain under restricted access pending cumulative review. Some annotations do not appear until related documents have been opened. Repeated phrases may indicate cross-referenced traces. Clickable redactions preserve the original logic of concealment poorly. The phrase <span class="phrase-trigger" data-phrase="for-the-record" data-source="opening">${recurringPhrase}</span> appears throughout the collection and should not be treated as decorative.</p>
      <p>You have been granted access to the surviving records. The records are damaged. Enter carefully.</p>
    `,
    footnotes: [
      "Approximate time of death is logged between 12:11 AM and 12:17 AM depending on which document is trusted. The difference matters.",
      "Blackwood House sits above a private lake. Storm activity was light but steady enough to smear windows, alter exterior reflections, and encourage everyone to remain inside.",
      "A later note in the archivist's hand adds: the record is not the event."
    ]
  },
  hub: {
    id: "hub",
    section: "root",
    type: "Central Archive",
    title: "Investigation Archive",
    meta: ["Folder interface", "Dynamic access", "Local record set"],
    render: renderHub
  },
  timeline: {
    id: "timeline",
    section: "timeline",
    type: "Timeline Reconstruction",
    title: "Timeline",
    meta: ["Contradictory sequence", "Expands with reading", "Not final"],
    render: renderTimeline
  },
  notes: {
    id: "notes",
    section: "notes",
    type: "Investigator Notebook",
    title: "Investigator Notes",
    meta: ["Auto-updating notes", "Reader position implied", "Accumulated skepticism"],
    render: renderNotes
  },
  accusation: {
    id: "accusation",
    section: "accusation",
    type: "Final Interpretation",
    title: "Final Accusation",
    meta: ["Interpretive ending", "Depends on discovery", "No clean verdict"],
    render: renderAccusation
  },
  maraInterview: {
    id: "maraInterview",
    section: "interviews",
    type: "Interview Transcript",
    title: "Interview: Mara Anouk",
    meta: ["Recorded 9:14 AM", "Transcript revised once", "Subject requested no sympathy"],
    body: `
      <p>Mara Anouk began by correcting the spelling of her surname and then sat very still, palms flat against the underside of the table as if she preferred pressure she controlled. When told she could begin anywhere, she said that was exactly the kind of invitation Gideon liked best: shapeless enough that he could later claim you had chosen the shape yourself.</p>
      <p>"You want chronology," she said. "Fine. Dinner ended at 10:40. I remember because one of the donors had just delivered a toast about stewardship so pompous it made even Gideon smile with his lower face only. He did that when he was pleased and disgusted at once. We moved to the library for drinks. People dispersed in the usual pattern. Simon gravitated toward the expensive shelves he wished to accuse someone of stealing. Elias hovered where mirrors were available. June collected the room without seeming to touch anything. Gideon moved between us as if circulating was a sacrament and we were all dim parishioners." She paused, looked at the recorder, and added, "That is for the record. Do not mistake phrasing for fondness."</p>
      <p>Her relationship with Gideon, she said, had once been professionally useful and privately intolerable. He had found her first novel when she was twenty-five, called it "feral but salvageable," and offered what everyone around her described as rescue. The rescue involved dinners, blurbs, private edits, introductions, and a slow annexation of her life. "He kept other people's lives in labeled folders," she said. "Literal folders, yes. Metaphorical ones too, though the metaphor flatters him by making him sound abstract. He liked paper because paper sat still. He liked young writers because they did not." When asked whether she believed he had actively harmed her career, she gave a dry, almost amused look. "Belief is for religion. I am discussing publication history."</p>
      <p>She acknowledged an argument with Gideon in the east corridor before eleven-thirty. "He wanted me to thank him in public for damage he had done in private. He said an anniversary panel next spring could be arranged if I learned to narrate my own humiliation correctly. I told him he had mistaken me for one of his grateful ruins." According to Mara, the argument ended with Gideon laughing, tapping the frame of a painting, and saying, "Nothing survives untouched." She repeated the line as if cataloging an object she wanted sealed. "People quote him because his rot came wrapped in aphorism."</p>
      <p>On the question of where she went next, Mara said she took a drink she did not finish into the blue sitting room and remained there alone for some time. She was careful with the phrase <em>some time</em>. She described the room with more accuracy than she described herself in it: the blue silk gone gray in the low light, the chill at the windows, one lamp producing a theatrical cone over a side table. She said she could hear muffled movement in the corridor and once the service stair door. "I remember wanting a quiet room in which no one was asking to be interpreted. That is all."</p>
      <p>When told another witness believed Gideon had carried whiskey into that room, she said, "Of course he did. He carried himself like a man permanently en route to his own anecdote." Then, more slowly: "I did not pour for him. If your question is whether I served him anything, ask it plainly." She denied touching his glass. The denial arrived half a second too early, before the actual question had been completed. She saw that we had heard the timing and answered it with anger. "People love a woman with a powder and a motive. It saves them the work of reading."</p>
      <p>Her opinion of Elias was merciless but not simple. "He is not weak. Weak men make requests. Elias makes weather. He performs fragility because it allows him to remain at the center of every room he claims to hate." Yet when pressed, she admitted Gideon had used Elias with an intimacy more corrosive than what he used on her. "If you have recordings of a person's grief, you do not need to invent leverage. You only need patience."</p>
      <p>Of June, she spoke with unexpected care. "She was efficient in the way exhausted people become efficient: every movement already apologizing for the next one. Gideon trusted her because she understood systems and because he mistook competence for obedience. Those are different species." She said June overheard part of the east corridor argument and refused afterward to meet Mara's eye. "At the time I read it as caution. I am less certain now whether it was caution or recognition."</p>
      <p>Near midnight, Mara said, she returned to the guest wing, took off her shoes, and sat on the floor of her room because the room felt newly borrowed. She claimed she heard the house flicker once, a subtle electrical cough. Then raised voices carried, too softened by architecture to identify. "Blackwood was designed by people who believed walls should protect the powerful from acoustics. Mostly they do." She did not leave her room, she said, until the commotion after the body was found.</p>
      <p>When presented with a handwritten page later recovered from Gideon's study, one torn from Mara's manuscript and marked in his hand, she became silent for the first significant stretch of the interview. "He took pages," she said finally. "Not because he loved literature. Because possession thrilled him more than reading. He liked to tell me drafts were safer with him, which is a sentence that should have sent me running much sooner than it did." Her control sharpened rather than broke. "If I had wanted Gideon Vale dead, you would not need to reconstruct the possibility from ambient drama and bad furniture placement. I would tell you that I had chosen it."</p>
      <p>At the end she requested one amendment to the transcript. Not a factual amendment. A tonal one. She wanted it noted that she was not relieved by Gideon's death. "Relief suggests completion. He built himself into too many records for that." Then she looked at the recorder and spoke as if to someone beyond the room. "The record is not the event. Write that exactly. He taught all of us the difference by spending years trying to collapse it."</p>
    `,
    footnotes: [
      "Transcript note: Subject tapped the table at the phrase 'some time,' then resumed stillness. Timing appears deliberate.",
      "Mara's insistence that she did not 'serve' Gideon anything is narrower than a denial that she touched his drink.",
      "She uses the corridor phrase 'Nothing survives untouched' before it appears in the notebook fragment. This may mean Gideon repeated himself habitually, or that she had seen his writing before."
    ]
  },
  eliasInterview: {
    id: "eliasInterview",
    section: "interviews",
    type: "Interview Transcript",
    title: "Interview: Elias Thorne",
    meta: ["Recorded 10:02 AM", "Subject requested tea twice", "One deletion noted"],
    body: `
      <p>Elias Thorne arrived beautifully arranged for a man claiming not to have slept. His scarf was folded with the care of a concession. He asked whether the windows in the interview room opened. When told no, he said that was probably merciful and sat down as if taking his place in a chamber piece he had not composed but already disliked.</p>
      <p>"Everyone prefers a former lover," he said. "It provides motive with décor." He admitted Gideon had once been his lover and later something harder to name. Patron was too clean, blackmailer too theatrical, friend obscene. "He had a genius for making dependence sound archival. As though he wasn't trapping you, only preserving what the world was too coarse to hold correctly." Elias smiled without pleasure. "He told me once that music vanished too easily, so I should be grateful he remembered me in documents."</p>
      <p>His account of the evening arrived in crescents rather than lines. Dinner was intolerable. Simon was spoiling for a sermon. Mara was "wearing the kind of silence that glitters at the edges." June moved between tables with perfect posture and the face of someone balancing numbers against weather. Gideon, meanwhile, was performing benevolence at a level Elias called "almost liturgical." After the library toast, Elias drifted to the music room with a score he had been revising for the fellowship performance that never now would happen. "I say drift because if I say fled it becomes melodrama, and I am trying, against my nature, to be useful."</p>
      <p>He did not deny receiving a message from Gideon near midnight. At first he said he could not remember the wording. When shown the export, he corrected himself with a faint laugh. "No, that sounds like him. 'Conservatory. Bring the score. For the record.' That phrase again. He used it whenever he wanted to turn intimacy into evidence." Elias said he considered ignoring the message and then obeyed because refusing Gideon had become a kind of labor all its own. "You spend more energy not answering certain men than you ever spent loving them."</p>
      <p>The conservatory, he said, smelled of wet soil and greenhouse heat beginning to fail. Gideon was there by the far glass, holding a tumbler and looking less drunk than altered. "Soft around the focus. As if his face was arriving a fraction later than the rest of him." Gideon asked for the score and flipped through pages without reading. Then he changed the subject, as he always did when he wanted leverage. He mentioned old recordings. Private arguments. Moments Elias had assumed belonged to the night and not to posterity. "He said memory was squandered if one did not organize it. That was his sickness. Not cruelty by itself, but cruelty arranged in drawers."</p>
      <p>The argument, according to Elias, was not about art except in the way all their arguments eventually pretended to be about art. Gideon suggested Elias owed him a return to public alignment. Elias accused him of treating confessions like donor assets. Gideon responded, with what Elias imitated as infuriating calm, that everyone at Blackwood had once come to him because they wanted rescue from some version of public failure. "He said, 'You call it coercion now because you prefer your gratitude in the past tense.' I may have thrown a pencil. You can decide how incriminating stationery is."</p>
      <p>He maintained that when he left Gideon was alive, upright, and capable of speaking. Unsteady, yes. "Something was wrong with him physically. He pressed two fingers to his temple as if trying to smooth out a wrinkle in reality. I asked whether he was all right. Imagine my generosity. He said he was perfectly clear. That, more than anything, was how I knew he wasn't." Elias estimated he departed around 12:05, perhaps 12:06, though he admitted time had turned "liquid" by then.</p>
      <p>Asked about Mara, he gave a complicated answer. "She is the only person in the house who speaks as if nouns should be earned. Gideon hated that about her because it deprived him of explanatory dominance." He denied seeing her after the library. "If she was elsewhere plotting his downfall with a vial between her teeth, she neglected to invite me." The line was designed for quotation and knew it. Later, more quietly, he said Mara had been carrying a private panic that evening, one he recognized because Gideon had installed versions of it in many people.</p>
      <p>June, he said, was "the still axis around which all the ugly practical miracles occurred." He described her as efficient, understated, and in danger long before the death because Gideon relied on her proximity to his paperwork. "Assistants in such institutions are not assistants. They are the soft tissue between vanity and procedure." He admitted June passed him in the east corridor shortly before midnight, moving quickly with her phone in hand. "She looked not frightened exactly. Focused. Which can look the same from a distance."</p>
      <p>One point in the interview is marked as deleted at the subject's request. The surviving notation indicates that Elias spoke for nearly two minutes about what it means to hear your own voice played back by someone who loved you badly. When reminded that deletions are themselves notable, he said, "Then note this instead: people think blackmail requires dramatic material. It does not. The truest leverage is often small and true and spoken in trust."</p>
      <p>He denied moving Gideon's phone. The denial was graceful enough to draw attention to itself. "I did not curate the dead," he said. "That was always Gideon's profession." Yet when asked why the phone was later found in the east corridor rather than near the body, Elias looked toward the sealed window and said, "Blackwood reflects before it reveals. That is a house note, not a confession."</p>
      <p>At the close, he leaned toward the recorder, suddenly tired of style. "I did love him once. That is the vulgar fact under all this refinement. And because I loved him once, I know exactly how calm he could sound when he meant to ruin someone. Put that in. Put in that he never raised his voice when he wanted blood. Put in that the record is not the event, but sometimes it is the weapon."</p>
    `,
    footnotes: [
      "Deleted passage logged at 10:19 AM. Subject requested removal without review. The absence is more revealing than the summary.",
      "Elias is the first to note Gideon's face as delayed or unfocused, a possible sign of intoxication or sedation.",
      "His phrase 'curate the dead' becomes relevant after the restored phone fragment is unlocked."
    ]
  },
  juneInterview: {
    id: "juneInterview",
    section: "interviews",
    type: "Interview Transcript",
    title: "Interview: June Navarro",
    meta: ["Recorded 11:31 AM", "Administrative review attached", "Subject requested procedural clarity"],
    body: `
      <p>June Navarro began by asking whether this was a formal interview, an internal review, or an exercise in institutional grief. The question was asked evenly, without challenge, which made it harder to answer. When told it was a case interview drawing on fellowship records, she nodded and opened a notebook she had brought herself. The notebook remained blank for the entire session.</p>
      <p>She described her job in terms so exact they almost sounded impersonal: event coordination, room preparation, donor packets, dietary restrictions, transportation manifests, honoraria, temporary access permissions, emergency contacts. "At Blackwood House," she said, "administration is a way of moving other people's confidence from one room to another without dropping it." Gideon, she said, valued her because she anticipated institutional embarrassment before it happened. "He called that discretion. Usually he meant labor."</p>
      <p>Her relationship with Gideon had not begun as adversarial. He hired her three years earlier after a museum fellowship collapsed around budget cuts and a supervisor's theft. He told her the Aster Archive Fellowship believed in "repairing damaged trajectories." June delivered the phrase without emphasis. "I believed him for approximately six months. Then I learned that repair, in his vocabulary, meant permanent documentation of vulnerability. He did favors the way ports receive ships: so they could be counted coming in and out."</p>
      <p>Asked about the night itself, she gave the clearest public sequence of anyone interviewed. Dinner ended at 10:40. The library toast followed at 10:55. She circulated between service staff and guests because a donor from St. Louis had a shellfish concern no one had communicated to the kitchen and because Professor Reeve had requested access to a locked display binder "with the urgency of a man who experiences inconvenience as constitutional persecution." She overheard raised voices in the east corridor at 11:12. She recognized Mara and Gideon but did not stop. "Staff at retreats learn when not to witness more than necessary."</p>
      <p>Her opinion of Mara was respectful, if cautious. "She was the one person he could not narrate as salvage without resistance. That made him crueler with her." Of Simon: "He mistakes being correct for being innocent." Of Elias: a pause, then, "He can identify manipulation exquisitely in others and almost never in his own reruns of it." Of Celia: "She knows where every object belongs, including silences."</p>
      <p>June stated that after eleven-thirty she spent most of her time in the office adjoining the donor dining room, reconciling pledges with travel receipts and checking the next morning's printed packets. This was plausible and partly supported by printer timestamps. She said Gideon entered once to ask whether a draft donor communication had been loaded to send later. "He often wrote messages and left them scheduled. It let him feel omnipresent." She claimed she did not read the draft. The claim arrived neatly, like a card placed face down. "I confirmed only that the autosave was active."</p>
      <p>When pressed on the memorial fund mentioned in later donor correspondence, June's tone changed for the first time. The Mateo Navarro Memorial Fund, she explained, had been established in memory of her brother, who died at nineteen. Gideon proposed it after learning Mateo had wanted to study conservation. The fund was meant to support first-generation fellows working with damaged archives. "It was the kindest thing he ever appeared to do," she said. "That is not praise. Appearance is the relevant noun." She confirmed that disbursements had been delayed and records occasionally reclassified. "Gideon said restricted circulation protected donor confidence. I signed things I should not have signed because I believed I was postponing harm rather than participating in it."</p>
      <p>At approximately midnight, June said, she saw Elias crossing toward the conservatory carrying loose pages. Shortly after that the lights flickered in part of the house. She checked the office system, the hallway panel, and the scheduling terminal. Here her language became careful enough to clatter. She admitted opening Gideon's outbox after the flicker because the autosave warning had returned on his terminal. What she saw there, she said, was "administratively alarming." Only later did she agree to specify. The draft implied Mara had become unstable, suggested the fellowship might be liable for mismanaged communications, and positioned June herself as the probable source of irregularities around restricted funds. "It was a preloaded collapse. He had written the version of events he wanted donors to wake up to."</p>
      <p>She did not initially admit going to the conservatory. Instead she said she intended to find Gideon "to clarify whether the draft was final." The passive phrasing held for perhaps three minutes of follow-up. Then it broke. "I went to confront him," she said. "I am aware the euphemism was poor." She said Gideon was by the stone planters, glass shining behind him in strips of wet black. He seemed strange, slightly slowed, but not incapable. "I asked him what he thought he was doing. He said, very calmly, that the memorial fund had become more useful in circulation than in sentiment. Those were his words. He also said I was confusing stewardship with ownership, which is remarkable, if you know what he called stewardship."</p>
      <p>June claimed the confrontation ended with Gideon dismissing her and turning away. She claimed she left him alive. Yet her hands, which had remained folded all morning, opened at this point and stayed open on the table. "You should understand something," she said. "People say he kept other people's lives in labeled folders as if that were metaphor, but I had to touch the folders. I had to log them. He made me carry other people's fear as clerical practice." Her voice remained quiet, which was worse than if it had risen. "I am not asking for absolution. I am asking you to stop calling his methods generosity."</p>
      <p>Near the end she requested the recorder be turned off, then rescinded the request before anyone moved. "No. Leave it on. For the record: if he had sent that message, Mara would have been ruined again and I would have been used to certify it. He would have stolen my brother twice. Do what you like with that sentence." Her stated alibi remained the office and hallway system checks. Her actual grief was elsewhere, pressing through procedure like water through plaster.</p>
    `,
    footnotes: [
      "June's use of 'administratively alarming' significantly understates the draft's content.",
      "She is the only interview subject to quote Gideon's line about the memorial fund directly. Later restricted files confirm the wording almost exactly.",
      "Blank notebook present throughout. No pages used. The prop of recordkeeping may be deliberate."
    ]
  },
  simonInterview: {
    id: "simonInterview",
    section: "interviews",
    type: "Interview Transcript",
    title: "Interview: Simon Reeve",
    meta: ["Recorded 1:06 PM", "Counsel not present", "Subject objected to tone repeatedly"],
    body: `
      <p>Professor Simon Reeve asked whether the interviewers had read his published work before he consented to continue. When told that some had, he said "good" in the manner of a man accustomed to weaponizing bibliography. He is easier to distrust in person than on paper, which may explain why Gideon tolerated him publicly for so long.</p>
      <p>Reeve described Blackwood House as a laundering mechanism disguised as a fellowship. Not for money in the vulgar sense, though money was of course involved. For legitimacy. "Private archives are where reputations go to be embalmed before resale," he said. "Vale understood that provenance, if made sufficiently tedious, can be converted into aura. A forged chain of custody does not need to be convincing to everyone. It only needs to be exhausting to challenge." He had spent years accusing Gideon of admitting materials with falsified or strategically incomplete histories into the fellowship collection. Gideon, in turn, had embarrassed him at panels by treating institutional fraud as a difference in interpretive temperament.</p>
      <p>On the evening in question, Reeve said he came prepared to force a reckoning over a specific donor acquisition, a group of letters allegedly from a dissident poet whose papers should never have left a family archive in the first place. "The paperwork was too elegant. Fraud often is. Real history catches on splinters; Gideon's records glided." He admitted requesting access to a display binder after dinner, then waiting until the library circulation thinned. At 11:41, by his estimate, he confronted Gideon in the study with discrepancies in donor names, dates, and one signature that seemed copied from an auction catalog caption.</p>
      <p>The argument in the study, as told by Reeve, was both petty and grave. Gideon refused to be cornered by documentation because documentation was his native weather. He suggested Reeve mistook obsession for ethics. Reeve replied that Gideon had built an institution where the wealthy could purchase the appearance of rescue while acquiring distressed artifacts and distressed people at discount. "That struck him because it was true," Reeve said, too pleased with his own line by half. Gideon then implied, without quite stating it, that Reeve's own university chair rested on donors whose archives he did not scrutinize so aggressively. "He preferred contamination as argument. If everyone is compromised, the most practiced liar becomes the practical authority."</p>
      <p>Reeve denied threatening physical harm. He did, however, admit to taking one letter from Gideon's desk when the latter stepped briefly into the hall to call for someone. "I removed evidence of falsified provenance," he said. "The moral status of that act can be debated after the legal status of the collection is addressed." He kept the letter in his inner jacket pocket and did not disclose it immediately after the death because he assumed, correctly, that its discovery would make him the easiest villain in the room.</p>
      <p>Of Mara, Reeve said she was "the only person there who still understood sentences as instruments rather than accessories." This was, for him, high praise. He believed Gideon feared her not physically but rhetorically. "A patron can survive hatred. He cannot survive someone declining his preferred language of gratitude." Yet he also called her reckless. "People who have been publicly distorted often develop a dangerous faith in private vengeance. They mistake accuracy of anger for strategic wisdom."</p>
      <p>His opinion of Elias was less generous. "A sentimental opportunist. Talented, certainly. But talent has no immunizing effect against vanity. Vale knew precisely which humiliations to convert into dependence." Of June: "She was embedded too deeply in operations to be ignorant, which is not the same as guilty, though institutions love to conflate the two when a body appears." Of Celia: "An archivist in the old sense. Which is to say she notices what has been moved, and for whom, and may never tell you directly."</p>
      <p>Reeve's stated movements after leaving the study are suspicious mostly because they are so defensively ordinary. He says he returned to his room, read over his notes, and considered whether to leave the estate first thing in the morning with the recovered letter. He heard no fight, only the later alarm. When informed that staff observed him near the east corridor after midnight, he bristled. "Near is the preposition institutions use when proof is absent." He conceded he may have crossed the corridor on the way to the guest wing and that the house, due to its circular floor plan, encourages accidental proximity that later reads as intent.</p>
      <p>The interview became most revealing when he stopped posturing as sole truth-teller. "You want me to say Vale deserved what happened. That would simplify you." He removed his glasses, polished them pointlessly, and went on. "He was dangerous because he understood that records can be made to sound merciful. He preserved failure, addiction, debt, bad sex, bad letters, humiliations spoken at midnight. Then he called the keeping of such things care. That is not a monster's vocabulary. It is worse. It is philanthropy's." He replaced his glasses and returned to irritation as if it were a coat.</p>
      <p>Before leaving, Reeve insisted on one addition. "Write down that the record is not the event. Scholars know this. Donors forget it whenever the record flatters them." He said if Gideon's death produced only one lesson, it should be that an archive controlled by a single ego ceases to be an archive and becomes a weather system. Then, almost unwillingly, he added, "And weather hurts people without hating them personally. That may be why it takes so long to name the damage."</p>
    `,
    footnotes: [
      "Reeve is the only witness to admit removing documentary material that night.",
      "His line about 'accidental proximity' reads defensive, but the floor plan does support overlapping routes near the east corridor.",
      "The provenance letter he took unlocks after this interview and complicates his credibility without making him the killer."
    ]
  },
  celiaInterview: {
    id: "celiaInterview",
    section: "interviews",
    type: "Interview Transcript",
    title: "Interview: Celia Hsu",
    meta: ["Recorded 2:42 PM", "Migraine noted", "Archivist reviewed object list first"],
    body: `
      <p>Celia Hsu asked to see the inventory list before she answered a single question. Not the witness list. The object list. Broken conservatory glass, astrolabe paperweight, side-table tumbler, overturned peat planter, phone recovered in corridor, score pages, one cuff link, one trail of soil disturbed toward the east doors. She read each line once, touched the table with one finger after the word <em>astrolabe</em>, and said, "All right."</p>
      <p>She spoke quietly enough that people leaned in and then resented themselves for it. Her migraine, she said, had begun before dessert and sharpened under the library lamps. "Bright rooms lie first through kindness," she observed. She withdrew for intervals throughout the evening, keeping mostly to the archivist's office and the narrow service passage beside it where the stone stayed cool. She did not claim total ignorance. Instead she made distinctions. "I saw little. I noticed more than I saw."</p>
      <p>Her description of Gideon was the least dramatic and therefore perhaps the most damning. "He was never careless with paper. Only with people." In public, he performed rescue expertly because he understood the aesthetics of restoration: the reverent hand over a damaged spine, the lowered voice in front of fragments, the phrase <em>nothing survives untouched</em> offered as consolation rather than warning. "He believed intervention granted ownership. Many collectors do. He merely extended the principle to the living." She did not say this bitterly. She said it as if identifying a species of mold by smell.</p>
      <p>She confirmed the house was restless after dinner. Mara and Gideon in the east corridor around 11:12. Simon angling toward the study in a condition she described as "academically inflamed." Elias near the music room, all edge-light and posture. June at the terminals, moving faster than usual and trying not to. "You can tell when a person has received new information by the quality of their silence," Celia said. "June's silence changed shortly after midnight."</p>
      <p>Celia did not initially mention seeing June in the east corridor. Instead she described the power flicker at 12:06 with vexing precision. "Not a full outage. A swallow. Enough for reflections to reposition." The conservatory, with its glass and black exterior, became for a second a layered room in which inside and outside traded authority. She said migraine makes this kind of thing harder, not easier. "People romanticize distortion if they have not had to continue working through it."</p>
      <p>When asked whether she went to the conservatory, she said no. When asked whether she saw anyone leave that direction, she hesitated for the first time. "I saw movement in the east corridor after the flicker. A slim figure, dark clothes, no jacket. I could not, at that distance, identify the person with certainty." The answer was polished enough to suggest rehearsal. Yet it also contained the detail about the missing jacket, which later matched June rather than Mara. Celia's control was not perfect because truth rarely is. "The figure moved quickly but not chaotically. Not fleeing. More like someone trying to remain within procedure after procedure had failed."</p>
      <p>Her stated opinion of Simon was dry. "He would like to be the man who unmasked corruption by footnote. I don't say that unkindly." Of Mara: "She notices injury before she notices weather. That can preserve a person or trap them in the same room forever." Of Elias: "He understands performance deeply enough to distrust sincerity even when it occurs." Of June: the longest pause in the interview. "June knows which forms have to be filled out after a death. No one her age should know that as intimately as she does."</p>
      <p>Asked whether Gideon kept private files on guests, Celia said, "Yes." Not allegedly. Not perhaps. Yes. He kept transcripts, draft letters, notes in the margin of invitations, donor anxieties, medical disclosures, funding vulnerabilities, old scandals, and what he called contextual materials. "He liked the phrase contextual materials because it could mean anything from a newspaper clipping to the worst evening of your life." Had Celia objected? "Often. But archives are hierarchical theaters. Objecting does not always remove the prop."</p>
      <p>The interviewer noted that the phone was found in the corridor, not beside the body. Celia looked at the inventory sheet again. "Objects generally remain where grief puts them unless someone fears sequence." She would not expand. Nor would she say whether Gideon had enemies. "He had dependents. That is more dangerous." She pressed two fingers to her temple, whether from pain or emphasis it was impossible to tell. "People keep asking who wanted him dead. A less flattering question is who needed him unable to speak for one hour."</p>
      <p>Near the close, she added a footnote of her own to the interview, insisting it be marked as such. "Footnote: the astrolabe was ordinarily displayed in the study, not the conservatory. Gideon had moved it earlier that evening after complaining it made the desk look crowded. I remember objects out of place." She then stood as if the conversation were over. At the door she said, without turning, "The record is not the event. But if enough frightened people agree on the record, the event loses custody of itself." Only later would it become clear how much she had chosen not to say.</p>
    `,
    footnotes: [
      "Celia's 'slim figure, dark clothes, no jacket' is the nearest any public interview comes to identifying June in the east corridor.",
      "Footnote added by subject: the astrolabe being moved from study to conservatory makes an improvised weapon available.",
      "Her distinction between seeing and noticing becomes central once the hidden addendum is unlocked."
    ]
  },
  incidentReport: {
    id: "incidentReport",
    section: "evidence",
    type: "Evidence File",
    title: "Incident Report 00A",
    meta: ["Filed 2:01 AM", "Initial response", "Supplemented twice"],
    body: `
      <p class="mono">INCIDENT REPORT 00A / BLACKWOOD HOUSE / WINTER INDEX RETREAT</p>
      <p>At approximately 12:17 AM, fellowship personnel reported Gideon Vale unresponsive in the conservatory. Mr. Vale was found supine near the central stone planter with visible cranial trauma, broken glass under the left shoulder, and soil displacement extending toward the east side doors. Air carried odor of peat, rain tracked from condensation, and whiskey. No exterior breach detected.</p>
      <p>Present in the house at the time of discovery: Mara Anouk, Elias Thorne, June Navarro, Professor Simon Reeve, Celia Hsu, limited kitchen staff in service areas. A brief electrical irregularity affecting portions of the east side of the house was reported at 12:06 AM. Cause undetermined.</p>
      <p>Items noted in vicinity: overturned tumbler, loose musical score pages, brass astrolabe paperweight with soil trace, phone not initially observed near body and later recovered in east corridor, one broken cuff link, shattered conservatory pane or interior glass vessel fragments pending identification.</p>
      <p>Witness accounts conflict regarding who last saw Mr. Vale alive and whether he appeared intoxicated, ill, or merely agitated. One recurring statement among interviewees: <span class="phrase-trigger" data-phrase="for-the-record" data-source="incidentReport">${recurringPhrase}</span>, usually preceding testimony least likely to remain stable under review.</p>
      <p>Interim note: scene does not support a simple accidental fall absent preceding disturbance. Interim note appended in different hand at 3:12 AM: the record is not the event.</p>
    `,
    footnotes: [
      "The report notices the astrolabe early but does not elevate it to likely impact object in its first draft.",
      "The handwriting difference on the final note suggests archival intervention before circulation."
    ]
  },
  guestList: {
    id: "guestList",
    section: "evidence",
    type: "Evidence File",
    title: "Guest List and Dinner Seating Chart",
    meta: ["Prepared by J. Navarro", "10 guests reduced to 6 in weather advisory", "Marked-up copy"],
    body: `
      <p class="mono">HEAD TABLE / DONOR DINING ROOM / 7:30 PM</p>
      <p><strong>Seat 1:</strong> Gideon Vale. <strong>Seat 2:</strong> Mara Anouk. <strong>Seat 3:</strong> Donor proxy empty due to storm cancellation. <strong>Seat 4:</strong> Elias Thorne. <strong>Seat 5:</strong> June Navarro standing service rotation. <strong>Seat 6:</strong> Professor Simon Reeve. <strong>Seat 7:</strong> Celia Hsu near west end, by request.</p>
      <p>Margin annotations in pencil indicate two last-minute changes. Gideon moved Mara closer "for discussion." Celia requested a seat away from direct chandelier light due to migraine risk. A later ink mark circles Gideon and Mara's positions and notes: <em>too visible to each other</em>.</p>
      <p>Back page lists room assignments: Mara in Guest Wing 2, Elias in Guest Wing 4, Simon in Guest Wing 1, Celia in Archivist Suite, Gideon in Master Study Suite, June in staff room off service stair. Conservatory access unrestricted until 1:00 AM for fellows. Study access by Gideon only.</p>
      <p>One note on the bottom edge, likely written after the incident, reads: "Everyone kept being seated where he could watch them." The handwriting resembles June's but is less controlled than the program schedule.</p>
    `,
    footnotes: [
      "The seating arrangement placed Mara beside Gideon for most of dinner, intensifying later corridor tension.",
      "Unrestricted conservatory access means presence alone proves little."
    ]
  },
  schedule: {
    id: "schedule",
    section: "evidence",
    type: "Evidence File",
    title: "Retreat Program Schedule",
    meta: ["Winter Index", "Revised for weather", "Printed 4:12 PM"],
    body: `
      <p class="mono">WINTER INDEX / BLACKWOOD HOUSE / INTERNAL PROGRAM</p>
      <p>7:30 PM Dinner in donor dining room. 8:45 PM informal review of fellowship acquisitions. 9:30 PM music room rehearsal window for Elias Thorne. 10:00 PM fireside conversation, "Preservation and Debt." 10:40 PM dinner close. 10:55 PM library toast. 11:15 PM free circulation, ad hoc consultations, archival browsing by invitation. 12:30 AM lights lowered in common rooms.</p>
      <p>The printed phrase <em>free circulation</em> is underlined twice in dark pencil. Beside it: "This is when the real retreat happens." Another hand adds beneath that, "No, this is when the private bargaining begins."</p>
      <p>Final line on the schedule footer: <em>Nothing survives untouched. Stewardship is the art of responsible intervention.</em> This appears to be a standard fellowship motto. It also appears, with altered emphasis, in at least three witness statements.</p>
    `,
    footnotes: [
      "The institutional motto primes everyone to hear interference as care.",
      "The 'Preservation and Debt' fireside topic is thematically cruel in retrospect."
    ]
  },
  smsExport: {
    id: "smsExport",
    section: "evidence",
    type: "Evidence File",
    title: "SMS Export from Gideon's Phone",
    meta: ["Partial export", "Some entries missing", "Unlocked after interview review"],
    body: `
      <p class="mono">EXTRACTED THREADS / DEVICE OWNER: G. VALE</p>
      <p><strong>11:07 PM / G. Vale to J. Navarro:</strong> Need revised donor language loaded tonight. Quietly.</p>
      <p><strong>11:11 PM / J. Navarro to G. Vale:</strong> Draft is in queue. I need final figures first.</p>
      <p><strong>11:18 PM / Unknown unsaved number:</strong> You cannot keep recataloguing theft as stewardship.</p>
      <p><strong>11:19 PM / G. Vale:</strong> Watch your nouns.</p>
      <p><strong>11:57 PM / G. Vale to E. Thorne:</strong> Conservatory. Bring the score. <span class="phrase-trigger" data-phrase="for-the-record" data-source="smsExport">${recurringPhrase}</span></p>
      <p><strong>12:01 AM / E. Thorne:</strong> If this is about the donors, no.</p>
      <p><strong>12:01 AM / G. Vale:</strong> It's about memory.</p>
      <p><strong>12:07 AM:</strong> [thread gap / deletion marker]</p>
      <p><strong>12:09 AM / unsent autosync notice:</strong> device moved from secure zone; sequence irregular.</p>
      <p><strong>12:14 AM / J. Navarro to G. Vale:</strong> We need to talk now.</p>
      <p><strong>12:15 AM:</strong> [no delivery confirmation]</p>
    `,
    footnotes: [
      "The missing segment after 12:07 AM is too narrow to be random export corruption.",
      "The unknown unsaved number likely belongs to Simon, but the export cannot prove it."
    ]
  },
  deletedDraft: {
    id: "deletedDraft",
    section: "evidence",
    type: "Evidence File",
    title: "Deleted Draft Email Recovered from Autosave",
    meta: ["Partial recovery", "Authored by Gideon Vale", "Unlocked through June interview"],
    body: `
      <p class="mono">TO: SELECT DONOR CIRCLE / SUBJECT: concerning tonight's disturbances</p>
      <p>Friends, I regret to note that tonight's atmosphere has been strained by the recurrence of certain personal instabilities I had hoped were behind us. Out of care for the fellowship and for those whose judgment has lately proven vulnerable to strain, I may need to postpone the morning session and review several internal matters at first light.</p>
      <p>I am particularly concerned that Ms. Anouk, whose gifts are real and whose recoveries have in the past required private patience, has again shown signs of agitated misperception. I mention this reluctantly and only because stewardship sometimes requires us to distinguish between talent and reliability. In a separate administrative matter, discrepancies tied to restricted memorial allocations appear to originate in internal handling rather than donor intent. Miss Navarro has assured me documentation can be clarified.</p>
      <p>[remainder truncated]</p>
      <p>A footer line preserved in autosave reads: <em>Some lives can still be stabilized if the narrative is managed before breakfast.</em></p>
    `,
    footnotes: [
      "This public-facing language would have damaged Mara while positioning June as the administrative fault line.",
      "The fuller version is restricted and much worse."
    ]
  },
  securityLog: {
    id: "securityLog",
    section: "evidence",
    type: "Evidence File",
    title: "Conservatory Security Log",
    meta: ["Door and light system", "Partial due to flicker", "Machine-generated"],
    body: `
      <p class="mono">BLACKWOOD EAST WING SUBSYSTEM / EVENT LOG</p>
      <p>11:58:12 PM conservatory door interior latch disengaged. 12:03:04 AM occupancy shift detected. 12:05:49 AM occupancy shift detected. 12:06:02 AM lighting dip / sensor desync 3.6 sec. 12:08:31 AM occupancy shift detected. 12:11:18 AM abrupt motion flag near central planter. 12:12:54 AM east corridor door opened. 12:15:07 AM device handshake anomaly. 12:17:22 AM repeated entry sequence / alarm response.</p>
      <p>Machine note: occupancy identifiers unavailable due to privacy mode and partial outage. Human note added later: "three visits after midnight, maybe four depending on whether someone only leaned in."</p>
    `,
    footnotes: [
      "The abrupt motion flag aligns closely with June's confrontation window.",
      "Privacy mode is one more example of the house protecting guests until protection becomes obscurity."
    ]
  },
  annotatedPhoto: {
    id: "annotatedPhoto",
    section: "evidence",
    type: "Evidence File",
    title: "Annotated Photograph from the Library Toast",
    meta: ["Still image description", "Marked by archivist", "Unlocks after report plus interview"],
    body: `
      <p class="mono">DESCRIPTION OF IMAGE / 10:56 PM</p>
      <p>The photograph shows the library toast moments after glasses were raised. Gideon is at center, smiling toward someone outside frame. Mara is visible to his right, not smiling, one hand already withdrawing from the collective gesture. Elias is reflected twice: once in the cabinet glass, once faintly in the dark window beyond it, creating the impression of two different men arranged by differing loyalties. Simon is half-obscured behind a donor plaque, mouth open as if already objecting. June is blurred in motion at the edge, carrying a tray she no longer appears to possess in any later image. Celia, seated far back under the dim lamp, is looking not at Gideon but at the table beside him.</p>
      <p>Annotations indicate the object on that table is the brass astrolabe later found in the conservatory. A marginal note reads: "He moved it after the toast. Why?" Another note, smaller: "Phone visible in jacket pocket at this time."</p>
    `,
    footnotes: [
      "The astrolabe's movement begins earlier than the public interviews imply.",
      "Celia's gaze in the photo suggests object-awareness even before the death."
    ]
  },
  donorLetter: {
    id: "donorLetter",
    section: "evidence",
    type: "Evidence File",
    title: "Torn Donor Letter Mentioning the Memorial Fund",
    meta: ["Recovered from study bin", "Half-page only", "Undated draft"],
    body: `
      <p class="mono">...moved portions of the Mateo Navarro Memorial Fund temporarily through general operating channels while the donor review remains delicate. I trust your discretion in this. Sentiment names the fund; circulation preserves it. Once the quarter closes, we can restore surface distinctions and no one need feel the structure behind the gesture...</p>
      <p>The page ends mid-sentence. A pen line in the margin, likely Gideon's, reads: <em>June too emotionally attached to explain this correctly.</em></p>
    `,
    footnotes: [
      "The phrase 'circulation preserves it' echoes June's testimony.",
      "The letter proves Gideon viewed the memorial fund as movable institutional material."
    ]
  },
  voiceMemo: {
    id: "voiceMemo",
    section: "evidence",
    type: "Evidence File",
    title: "Voice Memo Transcript: 'For the Record'",
    meta: ["File recovered from study desktop", "Date uncertain", "Speaker: Gideon Vale"],
    body: `
      <p class="mono">TRANSCRIPT BEGIN</p>
      <p>"For the record: people resent being known in durable form. They call it surveillance when the knowing is asymmetrical. But any institution worthy of continuity must understand the private weather of its people. You cannot protect talent if you refuse context. You cannot retain donors if you do not know which shame can be translated into generosity and which generosity hides a demand. Sentiment is unmanaged evidence. Memory, if left in the mouths of the wounded, deteriorates. I prefer labeled folders. Everyone says this as accusation, but labeling is a form of mercy. Nothing survives untouched. Better to be touched by someone meticulous."</p>
      <p class="mono">TRANSCRIPT END</p>
    `,
    footnotes: [
      "This memo is the closest thing to Gideon's credo.",
      "His claim that labeling is mercy explains more of the institution than any official mission statement."
    ]
  },
  notebookFragment: {
    id: "notebookFragment",
    section: "evidence",
    type: "Evidence File",
    title: "Gideon's Private Notebook Fragment",
    meta: ["Loose page", "Recovered from study", "Handwriting verified"],
    body: `
      <p class="mono">Mara wants custody, not revision. Dangerous. Simon still believes exposure itself purifies. June efficient but sentimentally porous where brother is concerned. Elias may yet return if offered memory in acceptable arrangement. Celia notices placements; avoid discussing motive near objects.</p>
      <p class="mono">Winter Index note: nothing survives untouched. The question is who earns the right to touch first. Need morning language ready before breakfast.</p>
    `,
    footnotes: [
      "This fragment reads less like reflection than personnel strategy.",
      "The line about 'morning language' foreshadows the donor draft email."
    ]
  },
  manuscriptPage: {
    id: "manuscriptPage",
    section: "evidence",
    type: "Evidence File",
    title: "Handwritten Page from Mara's Recovered Manuscript",
    meta: ["Found in study folder", "Creased", "Marks in two hands"],
    body: `
      <p>The page describes a woman returning to a childhood museum after learning that the curator has been keeping donor gifts and confessions in the same climate-controlled drawer. The narrator writes: "He said preservation and possession were twins, and I said only to men who have never been taken apart." In the margin, Gideon has written: <em>too direct. Let him remain charming longer.</em> Mara's later reply, in dark pencil under the comment: <em>Why?</em></p>
      <p>A second sentence on the page is underlined three times by Mara: <em>The record is not the event, but records breed obedient versions of it.</em></p>
    `,
    footnotes: [
      "Gideon's marginal instruction confirms he felt entitled to shape Mara's material long after their professional break.",
      "This page provides motive for Mara without proving murderous intent."
    ]
  },
  serviceNote: {
    id: "serviceNote",
    section: "evidence",
    type: "Evidence File",
    title: "Staff Service Note from the Kitchen",
    meta: ["Unsigned", "Likely 11:20 PM", "Folded twice"],
    body: `
      <p class="mono">Need more peat trays moved from service landing if rain worsens smell in conservatory. Also Mr. Vale asked for his usual whiskey but said not to send another bottle, only ice. Someone in blue room already brought a glass through.</p>
    `,
    footnotes: [
      "The note places Gideon's whiskey route through the blue sitting room shortly before the conservatory sequence.",
      "Combined with Mara's interview, this becomes one of the strongest indications that she handled his drink."
    ]
  },
  provenanceLetter: {
    id: "provenanceLetter",
    section: "evidence",
    type: "Evidence File",
    title: "Provenance Letter Simon Tried to Recover",
    meta: ["Recovered from Simon's jacket", "Unsigned carbon copy", "Questioned authenticity"],
    body: `
      <p class="mono">To whom it may concern: the enclosed letters entered private hands through family transfer in 1989 and were never subject to seizure, sale, or external claim...</p>
      <p>The signature line is blank on the recovered copy, but an indentation visible along the lower margin suggests another name was once written on the original. Reeve's attached note states: "The date format postdates the claimed year. The family address did not exist under this numbering until six years later. Someone assumed provenance was only style."</p>
      <p>On the reverse is a penciled line in Gideon's hand: <em>Simon will want the lie to be uglier than it is.</em></p>
    `,
    footnotes: [
      "Simon was right that the document was suspect, but his theft still distorts his testimony.",
      "The reverse-side note suggests Gideon anticipated and managed Reeve's outrage."
    ]
  },
  celiaAddendum: {
    id: "celiaAddendum",
    section: "restricted",
    restricted: true,
    type: "Restricted File",
    title: "Hidden Addendum: Celia Hsu",
    meta: ["Unsealed after full interview review", "Not circulated", "Hand-entered by archivist"],
    body: `
      <p class="restricted-banner">Restricted note restored from an unnumbered appendix. Celia Hsu did not include this in her public interview.</p>
      <p>I am writing this because the official file has begun to settle into the shape Gideon would have admired: conflict managed into anecdote, dependence redistributed until no one person looks responsible for carrying it. That is not false exactly. It is merely obedient.</p>
      <p>At 12:13 AM, by the old regulator clock in the archivist's office, I saw June Navarro leave the east corridor. Not perhaps. Not a slim figure I could not identify. June. She had no jacket. Her face was blank in the way faces become blank only after a decision has already crossed through them. Her right hand was dirty at the wrist, dark with peat or soil. She did not see me. Or if she did, she trusted that I would know the difference between witnessing and delivering.</p>
      <p>I knew almost immediately that Gideon was dead or as good as dead. The house had changed register. People who have worked around archives understand this in their bodies: an event occurs, and all at once every nearby object is promoted from furniture to evidence. The corridor itself felt arranged. June moved through it not like someone escaping but like someone who had been made, in one terrible minute, responsible for the afterlife of sequence.</p>
      <p>I did not follow her at once. That delay matters. A better person, perhaps, would have run toward the conservatory, called for staff, secured the scene, preserved an institution's confidence in process. But I had watched Gideon for years convert process into a private instrument. I had cataloged letters he should never have retained. I had refused, protested, documented, and then continued working in the same building because conscience under employment rarely resembles purity. When I finally reached the conservatory threshold, Elias was not there yet. Gideon was on the floor. The astrolabe lay half under the bench. One of the planters had broken his fall badly. There was blood, less than one expects from fiction, more than enough.</p>
      <p>I also saw the tumbler and understood something else: he had not come to that room in a single condition. He was already altered before the final confrontation. Not drunk in his usual polished manner. Slowed, softened around the edges. I had seen him sedated once after a dental procedure. The same false serenity. I thought of Mara immediately, not because she seemed capable of murder, but because she had spent the evening vibrating with the kind of contained intention that makes people touch objects they would prefer not to touch.</p>
      <p>What I chose, after that, was not innocence. It was selection. I lied in the public interview to protect June because the official truth on offer would not have been truth at all. It would have been a neat story about a young administrator losing her composure under pressure, or about a vindictive former protegee finally becoming unstable enough to act, or about a lover's melodrama. Gideon's longest legacy would have been achieved posthumously: he would still have arranged the language by which others were reduced.</p>
      <p>June did kill him. I believe she struck only once. I also believe she arrived to confront a man already impaired by someone else's intervention and already dangerous in that impairment. These clauses matter to me. Whether they matter to law is beyond this note. She did not go there with a weapon. The weapon was one of Gideon's own decorative cosmologies, a brass model of order moved carelessly from the study because even he could become bored of symbols once they had served their room.</p>
      <p>If you are reading this, then enough of the archive has opened that you may be tempted to think you have escaped his arrangement. I doubt that. Nothing survives untouched. The best we may do is become conscious of the touch while it is happening.</p>
    `,
    footnotes: [
      "This is the first direct confirmation that Celia saw June after the death.",
      "Celia's ethical argument is not exculpatory. It is anti-neatness."
    ]
  },
  fullerDraft: {
    id: "fullerDraft",
    section: "restricted",
    restricted: true,
    type: "Restricted File",
    title: "Fuller Version of the Deleted Draft Email",
    meta: ["Recovered from autosave chain", "Unsealed after restricted access", "Never sent"],
    body: `
      <p class="restricted-banner">Restricted recovery. This version extends beyond the public autosave excerpt.</p>
      <p class="mono">TO: SELECT DONOR CIRCLE / DRAFT / UNSENT</p>
      <p>Friends, I regret that tonight has made visible several instabilities I had hoped to keep from burdening the fellowship. Ms. Anouk appears once more to be struggling with the boundary between editorial disagreement and persecutory fantasy. I have tried, over years, to protect both her talent and her dignity, but there may be a point at which care becomes complicity in someone's preferred distortion. If events require it, I will ask you to remember how often private patience has already been extended on her behalf.</p>
      <p>Complicating matters, internal review has uncovered irregular memorial allocations whose paper trail passes through June Navarro's administrative handling. I do not yet believe intent was malicious. Inexperience, emotional involvement with the fund's dedicatory name, and recent strain may all be explanatory. Still, I cannot let sentiment interfere with fiscal clarity. I have therefore retained the relevant contextual materials in my own custody until morning.</p>
      <p>I mention these matters now because institutions are most vulnerable between event and explanation. If I am not able to address you before breakfast, I ask only that you trust the hand that has preserved this fellowship through more delicate storms than the present one. Some lives can still be stabilized if the narrative is managed before breakfast. Those who have entrusted me with damaged brilliance before will understand the necessity.</p>
      <p>Saved but not sent.</p>
    `,
    footnotes: [
      "The line about retaining 'contextual materials' in his own custody is both threat and confession.",
      "This draft would have publicly destroyed Mara and administratively isolated June by morning."
    ]
  },
  phoneFragment: {
    id: "phoneFragment",
    section: "restricted",
    restricted: true,
    type: "Restricted File",
    title: "Restored Phone Thread Fragment",
    meta: ["Unlocked by phrase trace", "Partial restoration", "Deletion likely manual"],
    body: `
      <p class="restricted-banner">Restricted restoration. Segment recovered only after repeated phrase-linked traces.</p>
      <p class="mono">12:05 AM / E. Thorne to G. Vale:</p>
      <p>If you ever play those recordings for anyone, I will tell them exactly what you are.</p>
      <p class="mono">12:05 AM / G. Vale to E. Thorne:</p>
      <p>You already have. They simply prefer me curated.</p>
      <p class="mono">12:12 AM / unsent draft from J. Navarro to G. Vale:</p>
      <p>Delete the email. Delete everything about Mateo. I mean it.</p>
      <p class="mono">12:15 AM / device action log:</p>
      <p>Conversation segment removed. Phone relocated. Screen wake registered to unknown thumb orientation inconsistent with owner habit.</p>
      <p class="mono">12:16 AM / E. Thorne to unknown unsaved number:</p>
      <p>I was never here. Burn that sentence.</p>
    `,
    footnotes: [
      "This does not prove Elias killed Gideon. It does prove he interfered with sequence.",
      "The 12:12 unsent draft supports June's immediate confrontation motive."
    ]
  },
  finalTestimony: {
    id: "finalTestimony",
    section: "restricted",
    restricted: true,
    type: "Restricted File",
    title: "Final Unnumbered Testimony Page",
    meta: ["Unnumbered", "Origin uncertain", "Unlocked after all restricted files"],
    body: `
      <p class="restricted-banner">Final restricted file. Origin marker missing. Internal evidence suggests composite testimony prepared after the interviews but never filed.</p>
      <p>What happened at Blackwood House can be told in several correct but incomplete ways. One: Mara Anouk, having learned that Gideon Vale retained pages of her manuscript and intended once again to narrate her as unstable, crushed a sedative into his whiskey around 11:28 PM. She meant to make him sleep, or at least blur, long enough for his study to become searchable. She did not intend the death that followed. Her act changed the physical conditions of everything after it.</p>
      <p>Two: Simon Reeve confronted Gideon at 11:41 PM over falsified provenance and left with a stolen letter in his jacket. He wanted proof, not blood. Yet his theft served Gideon after death by making corruption appear to belong to one offended scholar rather than to the institution's ordinary appetite.</p>
      <p>Three: Elias Thorne answered a summons to the conservatory because old forms of love teach obedience long after reason withdraws. Gideon threatened him again with private recordings. Elias left him alive, already unsteady. Later, returning or lingering, Elias recognized that something irreversible had happened and chose not revelation but curation. He deleted part of the phone sequence and moved the device. Cover-up is too neat a phrase. He edited the afterimage.</p>
      <p>Four: June Navarro opened Gideon's scheduled donor message after the power flicker and saw, laid out with his usual calm, the morning in which Mara would be discredited again, June would be framed for the memorial fund theft, and Gideon would retain custody of both narratives by calling it stewardship. She went to the conservatory around 12:08 AM to stop him. During the confrontation he said the fund named for her brother had become "more useful in circulation than in sentiment." He also implied he could still destroy them both with a few well-placed records. June took up the brass astrolabe from the nearby side table and struck him once. He fell backward, hit the planter edge, and died.</p>
      <p>Five: Celia Hsu saw June leave the east corridor moments later and understood enough to know that the official story would become another extension of Gideon's power. She lied publicly. Not because June was innocent, but because innocence was no longer the category that explained the room. She chose to protect a person over a system that had mistaken possession for care for years. Whether that was justice, cowardice, solidarity, or archival triage depends on the reader's appetite for clean nouns.</p>
      <p>Therefore the central question is not only who killed Gideon Vale. It is who had already been made to carry his methods, and how death changed almost nothing about the struggle over custody. The record is not the event. But every record in this archive bears the bruise of having passed through his hands, or through the hands of people injured by them.</p>
    `,
    footnotes: [
      "This is the clearest synthetic account in the archive, but even it speaks in composed clauses rather than legal certainty.",
      "If this page was never filed, someone chose understanding without publication."
    ]
  }
};

const navSections = [
  { id: "root", title: "Access", items: ["opening", "hub"] },
  { id: "interviews", title: "Interviews", items: ["maraInterview", "eliasInterview", "juneInterview", "simonInterview", "celiaInterview"] },
  { id: "evidence", title: "Evidence", items: ["incidentReport", "guestList", "schedule", "smsExport", "deletedDraft", "securityLog", "annotatedPhoto", "donorLetter", "voiceMemo", "notebookFragment", "manuscriptPage", "serviceNote", "provenanceLetter"] },
  { id: "timeline", title: "Sequence", items: ["timeline"] },
  { id: "notes", title: "Notebook", items: ["notes"] },
  { id: "restricted", title: "Restricted Files", items: ["celiaAddendum", "fullerDraft", "phoneFragment", "finalTestimony"] },
  { id: "accusation", title: "Final Reading", items: ["accusation"] }
];

const endingTexts = {
  complete: `
    <p>You do not leave Blackwood House with a solved puzzle. You leave with sequence under pressure, which is the nearest truth the archive allows. June Navarro killed Gideon Vale. She did it in one blow, in fury and defense and accumulated administrative grief, after Mara had already altered the room by dosing Gideon's whiskey and after Elias had already allowed himself to be drawn once more into the dead man's theater. Celia then chose a lie precise enough to protect June from becoming Gideon's final curated ruin. Simon, meanwhile, carried proof of a different crime out in his pocket and nearly let that smaller theft substitute for the larger structure.</p>
    <p>To reach this understanding is not to acquit anyone. Mara acted without intending death, but not innocently. Elias loved the man badly enough to edit evidence rather than surrender the last performance. Celia protected a person and damaged the purity of the file. June crossed a line she cannot uncross. Yet the archive keeps insisting that the neatest moral category belongs not to the living but to Gideon, who spent years making other people easier to narrate than himself.</p>
    <p>What remains, after the last interview, is an institution built on the confusion between stewardship and ownership. Gideon called control care. He called leverage context. He called labeled folders mercy. Even dead, he nearly wins by forcing everyone to explain themselves in relation to him. Your reading refuses only part of that victory. You can name the hand that struck him. You can also name the slower violence that arranged the strike. The house does not grow lighter. It merely becomes less obedient.</p>
  `,
  partial: `
    <p>You identify June Navarro as the killer and stop there, as many official accounts would prefer. The file will allow it. She confronted Gideon, she struck him, and he died on stone and broken glass. If what you wanted was the one decisive hand, you have it. But Blackwood House never contained only one decisive hand.</p>
    <p>Without the fuller chain, June becomes either an emblem of overstrained loyalty or a tragic administrator undone by private grievance. Both stories are inadequate. They trim away Mara's earlier intervention, Elias's later interference, Celia's deliberate lie, and the donor machinery Gideon prepared to set in motion before breakfast. They miss the way institutional cruelty disperses authorship so widely that the final blow arrives already crowded.</p>
    <p>This ending is not false. It is merely narrow. Gideon dies here as men like him often prefer to die in narrative: by one person's anger, not by the accumulation of his own methods. The archive closes around that convenience with unnerving ease.</p>
  `,
  institutional: `
    <p>You miss the exact hand, but you understand the system. In some ways the archive respects this more than a tidy verdict. You see that Gideon Vale's real project was not patronage but custody: of shame, of debt, of letters, of private collapse, of the version of events donors would be allowed to hear. You understand that the murder was incubated inside a larger apparatus that treated intervention as entitlement and preservation as a right to touch.</p>
    <p>Perhaps you accuse Mara because the whiskey trail is visible, or Elias because the phone moved, or Simon because stolen documents look dramatic under fluorescent review. The archive can produce evidence for all of them. That is one of its cruelties. A controlling institution always leaves enough truth in the wrong places to keep inquiry occupied. Still, your reading refuses the most vulgar lie, which is that Gideon's death was an isolated break in an otherwise admirable structure.</p>
    <p>The result is a kind of moral near miss. You do not solve the room, but you do solve the weather. Blackwood House remains guilty in your account even if the final motion stays blurred. In a cleaner system that would count as failure. Here it feels like a severe form of partial mercy.</p>
  `,
  failed: `
    <p>You settle the archive into something crisp: a jealous lover, a vindictive writer, an opportunistic scholar, a stressed administrator. Cause appears. Character follows. The death becomes legible in the old comforting way, as though a single vice stepped cleanly into action and the house itself were merely scenery. Gideon would have approved the elegance. He trusted neat stories because neat stories preserve institutions.</p>
    <p>In this reading, the contradictions become noise rather than warning. The redactions remain decorative. The repeated phrase becomes style. The donor draft email is unfortunate but not central. The memorial fund becomes subplot. Celia's silences flatten into quaint archivist evasions. Everyone is permitted exactly one motive because that is how bureaucracies keep from recognizing systems: they atomize injury until no pattern remains.</p>
    <p>The file closes. The building resumes its composed outline over the lake. Somewhere in a locked drawer, a labeled folder receives your interpretation and files it under compliance.</p>
  `
};

let currentDocId = state.currentDocId || "opening";

const contentEl = document.getElementById("content");
const footnotesEl = document.getElementById("footnotes");
const docTitleEl = document.getElementById("docTitle");
const metaTypeEl = document.getElementById("metaType");
const metaStateEl = document.getElementById("metaState");
const metaProgressEl = document.getElementById("metaProgress");
const docMetaEl = document.getElementById("docMeta");
const navEl = document.getElementById("nav");
const statusLineEl = document.getElementById("statusLine");
const phraseLineEl = document.getElementById("phraseLine");

init();

function init() {
  renderNav();
  openDoc(currentDocId, false);
  bindGlobalEvents();
  updateChrome();
}

function loadState() {
  return {
    visited: [],
    reveals: {},
    phraseSources: [],
    accusation: null,
    currentDocId: "opening"
  };
}

function saveState() {
  // Progress is intentionally session-only. A browser refresh starts a fresh run.
}

function openDoc(id, markVisited = true) {
  const doc = docs[id];
  if (!doc || !isUnlocked(id)) return;

  currentDocId = id;
  state.currentDocId = id;

  if (markVisited && !state.visited.includes(id)) {
    state.visited.push(id);
  }

  renderDoc(doc);
  renderNav();
  updateChrome();
  saveState();
}

function renderDoc(doc) {
  document.title = getDynamicTitle(doc);
  docTitleEl.textContent = doc.title;
  metaTypeEl.textContent = doc.type;
  metaStateEl.textContent = doc.restricted ? "Restricted file restored" : "Access granted";
  metaProgressEl.textContent = `${state.visited.length} documents opened`;
  docMetaEl.innerHTML = doc.meta.map(item => `<p>${item}</p>`).join("");

  let bodyHtml = typeof doc.render === "function" ? doc.render() : doc.body;
  bodyHtml = applyDocVariants(doc.id, bodyHtml);
  contentEl.innerHTML = bodyHtml;

  const footnotes = typeof doc.renderFootnotes === "function" ? doc.renderFootnotes() : doc.footnotes || [];
  renderFootnotes(footnotes);
  contentEl.focus();
}

function renderFootnotes(notes) {
  if (!notes.length) {
    footnotesEl.innerHTML = `<h3>Annotations</h3><p class="empty-note">No marginal notes attached to this file.</p>`;
    return;
  }

  footnotesEl.innerHTML = `
    <h3>Annotations</h3>
    <ol>${notes.map(note => `<li>${note}</li>`).join("")}</ol>
  `;
}

function renderNav() {
  navEl.innerHTML = navSections.map(section => {
    const buttons = section.items.map(id => {
      const doc = docs[id];
      const unlocked = isUnlocked(id);
      const active = id === currentDocId ? "active" : "";
      const locked = unlocked ? "" : "locked";
      const status = unlocked
        ? state.visited.includes(id)
          ? "opened"
          : doc.restricted
            ? "restored"
            : "available"
        : "restricted";

      return `
        <button class="${active} ${locked}" data-open="${id}" ${unlocked ? "" : "disabled"}>
          ${doc.title}
          <small>${status}</small>
        </button>
      `;
    }).join("");

    return `
      <section class="nav-section">
        <p class="nav-section-title">${section.title}</p>
        <div class="nav-list">${buttons}</div>
      </section>
    `;
  }).join("");
}

function bindGlobalEvents() {
  navEl.addEventListener("click", event => {
    const button = event.target.closest("[data-open]");
    if (!button) return;
    openDoc(button.dataset.open);
  });

  contentEl.addEventListener("click", event => {
    const phrase = event.target.closest(".phrase-trigger");
    if (phrase) {
      registerPhraseTrace(phrase.dataset.source);
      phrase.classList.add("seen");
      return;
    }

    const redaction = event.target.closest(".redaction");
    if (redaction) {
      const key = `${currentDocId}:${redaction.dataset.reveal}`;
      if (!state.reveals[key]) {
        state.reveals[key] = true;
        redaction.classList.add("revealed");
        redaction.innerHTML = redaction.dataset.text;
        saveState();
        updateChrome();
      }
      return;
    }

    const docLink = event.target.closest(".doc-link");
    if (docLink) {
      openDoc(docLink.dataset.doc);
      return;
    }

    const action = event.target.closest("[data-action]");
    if (action && action.dataset.action === "submit-accusation") {
      submitAccusation();
    }
  });
}

function registerPhraseTrace(source) {
  if (!state.phraseSources.includes(source)) {
    state.phraseSources.push(source);
    if (!state.visited.includes(currentDocId)) state.visited.push(currentDocId);
    renderNav();
    updateChrome();
    saveState();
  }
}

function isUnlocked(id) {
  const interviewsRead = countVisited(["maraInterview", "eliasInterview", "juneInterview", "simonInterview", "celiaInterview"]);
  const majorVisited = countVisited([
    "maraInterview", "eliasInterview", "juneInterview", "simonInterview", "celiaInterview",
    "incidentReport", "guestList", "schedule", "smsExport", "deletedDraft", "securityLog",
    "annotatedPhoto", "donorLetter", "voiceMemo", "notebookFragment", "manuscriptPage",
    "serviceNote", "provenanceLetter"
  ]);

  const baseUnlocked = ["opening", "hub", "timeline", "notes", "accusation", "incidentReport", "guestList", "schedule",
    "maraInterview", "eliasInterview", "juneInterview", "simonInterview", "celiaInterview"];

  if (baseUnlocked.includes(id)) return true;
  if (id === "smsExport") return visitedAny(["maraInterview", "eliasInterview"]);
  if (id === "deletedDraft") return state.visited.includes("juneInterview");
  if (id === "provenanceLetter") return state.visited.includes("simonInterview");
  if (id === "annotatedPhoto") return state.visited.includes("incidentReport") && visitedAny(["maraInterview", "eliasInterview", "juneInterview", "simonInterview", "celiaInterview"]);
  if (["securityLog", "donorLetter", "voiceMemo", "notebookFragment", "manuscriptPage", "serviceNote"].includes(id)) return majorVisited >= 3;
  if (id === "celiaAddendum") return interviewsRead === 5;
  if (id === "fullerDraft") return state.visited.includes("deletedDraft") && state.visited.includes("celiaAddendum");
  if (id === "phoneFragment") return state.phraseSources.length >= 3;
  if (id === "finalTestimony") return ["celiaAddendum", "fullerDraft", "phoneFragment"].every(file => state.visited.includes(file));
  return false;
}

function visitedAny(ids) {
  return ids.some(id => state.visited.includes(id));
}

function countVisited(ids) {
  return ids.filter(id => state.visited.includes(id)).length;
}

function getDynamicTitle(doc) {
  if (doc.id === "hub" && state.visited.includes("finalTestimony")) {
    return "After the Last Interview | The Record Is Not the Event";
  }
  if (state.phraseSources.length >= 3) {
    return "After the Last Interview | Restored Traces";
  }
  return "After the Last Interview";
}

function updateChrome() {
  const unlockedRestricted = ["celiaAddendum", "fullerDraft", "phoneFragment", "finalTestimony"].filter(isUnlocked).length;
  statusLineEl.textContent = unlockedRestricted
    ? `Status: partial access, ${unlockedRestricted} restricted file(s) available`
    : "Status: partial access";
  phraseLineEl.textContent = `Phrase traces: ${state.phraseSources.length} / 3`;
  metaProgressEl.textContent = `${state.visited.length} documents opened`;
}

function renderHub() {
  const interviewsRead = countVisited(["maraInterview", "eliasInterview", "juneInterview", "simonInterview", "celiaInterview"]);
  const evidenceRead = countVisited(["incidentReport", "guestList", "schedule", "smsExport", "deletedDraft", "securityLog", "annotatedPhoto", "donorLetter", "voiceMemo", "notebookFragment", "manuscriptPage", "serviceNote", "provenanceLetter"]);

  return `
    <p class="lede">Blackwood House does not give up sequence willingly. It gives you rooms, statements, revisions, and objects found slightly away from where they should have been. The archive hub is less a map than a set of permissions arranged to feel polite.</p>
    <div class="hub-grid">
      <section class="hub-card">
        <h3>Interviews</h3>
        <p>Five surviving testimonies. Each witness speaks under Gideon's afterimage, and each withholds something different.</p>
        <p><span class="tag">${interviewsRead}/5 opened</span></p>
      </section>
      <section class="hub-card">
        <h3>Evidence</h3>
        <p>Administrative papers, object lists, phone traces, donor language, and fragments recovered from rooms that were never neutral.</p>
        <p><span class="tag">${evidenceRead} opened</span></p>
      </section>
      <section class="hub-card">
        <h3>Timeline</h3>
        <p>The sequence page begins incomplete. Contradictions settle and then reopen as other files are read.</p>
      </section>
      <section class="hub-card">
        <h3>Restricted Files</h3>
        <p>Files restore only after the archive judges your reading persistent enough to deserve more damage.</p>
      </section>
    </div>
    <p>Follow the recurring phrase when it appears. Click redactions when they seem too polished. Return to earlier pages after later pages make them less comfortable. This interface keeps count of what you have opened during the current run, then drops that record when the page reloads.</p>
  `;
}

function renderTimeline() {
  const entries = [
    { time: "10:40 PM", text: "Dinner ends in the donor dining room. Formality loosens into circulation." },
    { time: "10:55 PM", text: "Library toast. Photograph captures Gideon, the astrolabe still nearby, and the room beginning to separate into factions." },
    { time: "11:12 PM", text: "Mara and Gideon argue in the east corridor.", conflict: state.visited.includes("maraInterview") ? "Confirmed by Mara, June, and Celia with different emphasis." : "Witnesses conflict on tone and duration." }
  ];

  if (countVisited(["maraInterview", "eliasInterview", "juneInterview", "simonInterview", "celiaInterview", "incidentReport", "guestList", "schedule"]) >= 3) {
    entries.push(
      { time: "11:28 PM", text: "Blue sitting room. Gideon's whiskey passes through a quieter room before the later conservatory meeting.", conflict: state.visited.includes("serviceNote") ? "Kitchen note suggests someone else already brought the glass through." : "No public witness admits handling the drink." },
      { time: "11:41 PM", text: "Study confrontation between Simon and Gideon over provenance." },
      { time: "11:52 PM", text: "A donor email is prepared for delayed release.", conflict: state.visited.includes("deletedDraft") ? "Autosave shows the message was preloaded before the death." : "Exact content not yet public." },
      { time: "11:57 PM", text: "Gideon messages Elias: 'Conservatory. Bring the score. For the record.'" },
      { time: "12:03 AM", text: "Elias meets Gideon in the conservatory. Argument follows." },
      { time: "12:06 AM", text: "Partial power flicker in east wing. Reflections shift. Sensor record desynchronizes." },
      { time: "12:08 AM", text: "Another person enters the conservatory.", conflict: state.visited.includes("celiaAddendum") ? "Celia later identifies June moving toward and from the east corridor sequence." : "Identity unstable in public record." },
      { time: "12:11 AM", text: "Abrupt motion near central planter.", conflict: state.visited.includes("finalTestimony") ? "Likely fatal strike and fall." : "Could indicate collapse, struggle, or object drop." },
      { time: "12:13 AM", text: "Celia sees someone leaving the east corridor.", conflict: state.visited.includes("celiaAddendum") ? "Her restricted addendum names June directly." : "Public interview refuses certainty." },
      { time: "12:15 AM", text: "Phone sequence disrupted; device relocated.", conflict: state.visited.includes("phoneFragment") ? "Restoration indicates manual deletion and probable Elias involvement." : "Cause unknown." },
      { time: "12:17 AM", text: "Body officially discovered. The archive begins." }
    );
  }

  return `
    <p class="lede">This sequence reconstructs itself as the archive expands. Early certainty often turns out to be a formatting choice.</p>
    ${entries.map(entry => `
      <div class="timeline-entry">
        <div class="timeline-time">${entry.time}</div>
        <p>${entry.text}</p>
        ${entry.conflict ? `<div class="timeline-conflict">${entry.conflict}</div>` : ""}
      </div>
    `).join("")}
  `;
}

function renderNotes() {
  const notes = [
    "The opening contradiction is temporal, not emotional. Everyone agrees Gideon died after midnight. What fractures is the interval in which he was still alive and therefore still capable of arranging the story. The distinction matters because a controlled institution can turn ten minutes into doctrine.",
    "Mara's interview contains the narrowest denial in the archive: she says she did not serve Gideon anything. The kitchen note later says someone in the blue room already brought his whiskey through. This does not make her the killer. It does make her one of the people who changed the room before the death occurred.",
    "Repeated phrase: 'for the record.' Not just verbal tic. In Gideon's mouth it appears to mean: what follows will be arranged for future leverage. In others it sometimes means the opposite: a desperate attempt to place one true sentence somewhere durable before it is revised."
  ];

  if (state.visited.includes("juneInterview")) {
    notes.push("June is the first witness whose administrative language visibly fails under pressure. The collapse is local and specific: the memorial fund, the donor draft, the distinction between clarification and confrontation. She speaks like someone trained to keep procedure smooth and newly aware that procedure has been loaded against her.");
  }

  if (state.visited.includes("voiceMemo")) {
    notes.push("Gideon's voice memo is nearly a manifesto. He does not think of himself as a villain. That is what makes him dangerous. He thinks asymmetrical knowledge is care, that labels are mercy, that private weather belongs to the institution if the institution has been useful enough. This is the philosophy under the murder, not merely background décor.");
  }

  if (state.visited.includes("deletedDraft")) {
    notes.push("The draft donor email is attempted preemption. Gideon intends to wake donors into a version of events where Mara is unstable, June is administratively suspect, and he alone remains the trustworthy interpreter. The murder, if murder it was, interrupts not only a life but a scheduled narrative deployment.");
  }

  if (state.visited.includes("phoneFragment")) {
    notes.push("Elias did not simply grieve theatrically. The restored phone fragment suggests active curation after the fact. 'I was never here. Burn that sentence.' The line is melodramatic, yes, but also useful. He may not have killed Gideon, yet he still participates in the corruption of sequence.");
  }

  if (state.visited.includes("celiaAddendum")) {
    notes.push("Celia's hidden addendum changes the moral architecture of the file. She saw June. She lied. Not out of ignorance, but out of refusal to let the institution metabolize June into one more manageable scandal. This is the archive becoming self-conscious about its own violence.");
  }

  if (state.visited.includes("finalTestimony")) {
    notes.push("The unnumbered final page offers the clearest composite truth: Mara sedates, Simon steals, Elias edits, June strikes, Celia shields. No one action explains the whole. Gideon's true instrument was distributed complicity. His death exposes that instrument but does not dismantle it.");
  }

  notes.push("Recurring sentence from multiple margins: the record is not the event. This has moved from warning to method. The site itself participates. It unlocks only after reading, meaning even comprehension arrives under conditions the archive controls.");

  return `
    <p class="lede">These notes update automatically as the file expands. They do not belong to a hard-boiled detective. They belong to someone increasingly aware that archives inherit the ethics of whoever arranged them.</p>
    ${notes.map(note => `<p>${note}</p>`).join("")}
  `;
}

function renderAccusation() {
  const result = state.accusation ? renderEnding() : "";
  const selected = state.accusation || {
    killer: "mara",
    motive: "self-protection",
    coverup: "elias-celia",
    testimony: "celia"
  };

  return `
    <p class="lede">This page does not ask for certainty. It asks what kind of reading you are willing to defend. Choose the hand, the motive, the cover-up, and the testimony that mattered most. The archive will answer with the ending your reading has earned, not with a score.</p>
    <form class="accusation-form" onsubmit="return false;">
      <div class="field">
        <label for="killer">Who killed Gideon Vale?</label>
        <select id="killer">
          <option value="mara" ${selected.killer === "mara" ? "selected" : ""}>Mara Anouk</option>
          <option value="elias" ${selected.killer === "elias" ? "selected" : ""}>Elias Thorne</option>
          <option value="june" ${selected.killer === "june" ? "selected" : ""}>June Navarro</option>
          <option value="simon" ${selected.killer === "simon" ? "selected" : ""}>Simon Reeve</option>
          <option value="unknown" ${selected.killer === "unknown" ? "selected" : ""}>The archive cannot fix the killer cleanly</option>
        </select>
      </div>
      <div class="field">
        <label for="motive">What was the central motive?</label>
        <select id="motive">
          <option value="self-protection" ${selected.motive === "self-protection" ? "selected" : ""}>To stop Gideon from destroying Mara and June with records he controlled</option>
          <option value="revenge" ${selected.motive === "revenge" ? "selected" : ""}>Personal revenge for past humiliation</option>
          <option value="exposure" ${selected.motive === "exposure" ? "selected" : ""}>To expose corruption in the archive</option>
          <option value="jealousy" ${selected.motive === "jealousy" ? "selected" : ""}>Jealousy, betrayal, and emotional collapse</option>
          <option value="system" ${selected.motive === "system" ? "selected" : ""}>The whole institution had become a machine of coercive preservation</option>
        </select>
      </div>
      <div class="field">
        <label for="coverup">Who helped cover it up?</label>
        <select id="coverup">
          <option value="elias-celia" ${selected.coverup === "elias-celia" ? "selected" : ""}>Elias Thorne and Celia Hsu</option>
          <option value="celia" ${selected.coverup === "celia" ? "selected" : ""}>Celia Hsu alone</option>
          <option value="elias" ${selected.coverup === "elias" ? "selected" : ""}>Elias Thorne alone</option>
          <option value="simon" ${selected.coverup === "simon" ? "selected" : ""}>Simon Reeve by stealing documents</option>
          <option value="none" ${selected.coverup === "none" ? "selected" : ""}>No meaningful cover-up occurred</option>
        </select>
      </div>
      <div class="field">
        <label for="testimony">Which testimony mattered most?</label>
        <select id="testimony">
          <option value="celia" ${selected.testimony === "celia" ? "selected" : ""}>Celia Hsu's testimony</option>
          <option value="june" ${selected.testimony === "june" ? "selected" : ""}>June Navarro's testimony</option>
          <option value="mara" ${selected.testimony === "mara" ? "selected" : ""}>Mara Anouk's testimony</option>
          <option value="elias" ${selected.testimony === "elias" ? "selected" : ""}>Elias Thorne's testimony</option>
          <option value="simon" ${selected.testimony === "simon" ? "selected" : ""}>Simon Reeve's testimony</option>
        </select>
      </div>
      <button class="action-button" data-action="submit-accusation">Read the ending</button>
    </form>
    ${result}
  `;
}

function submitAccusation() {
  state.accusation = {
    killer: document.getElementById("killer").value,
    motive: document.getElementById("motive").value,
    coverup: document.getElementById("coverup").value,
    testimony: document.getElementById("testimony").value
  };
  saveState();
  renderDoc(docs.accusation);
}

function renderEnding() {
  const unlockedTruth = state.visited.includes("finalTestimony") && state.visited.includes("phoneFragment") && state.visited.includes("fullerDraft") && state.visited.includes("celiaAddendum");
  const a = state.accusation;
  const complete = unlockedTruth &&
    a.killer === "june" &&
    a.motive === "self-protection" &&
    a.coverup === "elias-celia" &&
    (a.testimony === "celia" || a.testimony === "june");

  const partial = a.killer === "june";
  const institutional = a.motive === "system" || a.coverup === "simon";

  let key = "failed";
  if (complete) key = "complete";
  else if (partial) key = "partial";
  else if (institutional) key = "institutional";

  return `
    <div class="ending-block">
      <p class="mono">ENDING CLASSIFICATION: ${key.toUpperCase().replace("-", " ")}</p>
      ${endingTexts[key]}
    </div>
  `;
}

function applyDocVariants(id, html) {
  if (id === "deletedDraft" && state.visited.includes("fullerDraft")) {
    html += `<div class="document-divider"></div><p class="mono">Archive note: A fuller autosave chain has been restored in Restricted Files. The public excerpt now reads as a deliberate softening.</p>`;
  }

  if (id === "celiaInterview" && state.visited.includes("celiaAddendum")) {
    html += `<div class="document-divider"></div><p>The interview is harder to read after the addendum. "A slim figure" is no longer ambiguity but chosen reduction.</p>`;
  }

  if (id === "smsExport" && state.visited.includes("phoneFragment")) {
    html += `<div class="document-divider"></div><p class="mono">Restoration marker: deletion event now linked to manual sequence interference.</p>`;
  }

  if (id === "opening" && state.visited.includes("finalTestimony")) {
    html += `<div class="document-divider"></div><p>The archive has now disclosed enough to know that surviving records were never merely surviving. They were active instruments, even in grief.</p>`;
  }

  return injectInteractiveElements(html, id);
}

function injectInteractiveElements(html, docId) {
  const phraseClass = source => state.phraseSources.includes(source) ? "phrase-trigger seen" : "phrase-trigger";
  html = html
    .replace('class="phrase-trigger" data-phrase="for-the-record" data-source="opening"', `class="${phraseClass("opening")}" data-phrase="for-the-record" data-source="opening"`)
    .replace('class="phrase-trigger" data-phrase="for-the-record" data-source="incidentReport"', `class="${phraseClass("incidentReport")}" data-phrase="for-the-record" data-source="incidentReport"`)
    .replace('class="phrase-trigger" data-phrase="for-the-record" data-source="smsExport"', `class="${phraseClass("smsExport")}" data-phrase="for-the-record" data-source="smsExport"`);

  const redactions = {
    maraInterview: [
      {
        key: "glass",
        search: "quiet room",
        replacement: `quiet room <span class="redaction ${state.reveals["maraInterview:glass"] ? "revealed" : ""}" data-reveal="glass" data-text="in which Gideon set down his whiskey and looked away for the first time that evening">[redacted]</span>`
      }
    ],
    juneInterview: [
      {
        key: "autosave",
        search: "administratively alarming",
        replacement: `<span class="redaction ${state.reveals["juneInterview:autosave"] ? "revealed" : ""}" data-reveal="autosave" data-text="an email drafted to ruin Mara by breakfast and make me certify it">[administratively alarming]</span>`
      }
    ],
    donorLetter: [
      {
        key: "surface",
        search: "surface distinctions",
        replacement: `<span class="redaction ${state.reveals["donorLetter:surface"] ? "revealed" : ""}" data-reveal="surface" data-text="surface distinctions, which donors mistake for ethics">[redacted phrase]</span>`
      }
    ]
  };

  if (!redactions[docId]) return html;

  return redactions[docId].reduce((result, item) => {
    if (state.reveals[`${docId}:${item.key}`]) {
      return result.replace(item.search, item.replacement.replace(/\[.*?\]/, item.replacement.match(/data-text="([^"]+)"/)[1]));
    }
    return result.replace(item.search, item.replacement);
  }, html);
}
