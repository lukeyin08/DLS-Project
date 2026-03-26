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
      <p class="lede">These records were released after the death of Gideon Vale, director of the Aster Archive Fellowship. His body was found in the conservatory at Blackwood House shortly after midnight during the Winter Index retreat. Present that night were Mara Anouk, Elias Thorne, June Navarro, Professor Simon Reeve, and archivist Celia Hsu. No outside intruder was recorded. The witness accounts disagree, and several files were edited after the fact.</p>
      <p>This archive is built from interviews, staff notes, phone exports, draft emails, security fragments, and pages recovered before dawn. The record is incomplete. Some files were withheld, misplaced, damaged, or revised. Blackwood House was meant to keep scandal out of sight. It failed.</p>
      <p>The official summary says Vale died from a fall after a power issue, with broken glass and an overturned planter causing the surrounding damage. This archive is less tidy than that. It shows people trying to speak inside a system Vale still seemed to control even after death.</p>
      <p>Some files stay locked until enough related material has been read. Some notes appear only after other documents change their meaning. Repeated phrases may point to hidden links. Clickable redactions can be opened. The phrase <span class="phrase-trigger" data-phrase="for-the-record" data-source="opening">${recurringPhrase}</span> appears throughout the archive and matters.</p>
      <p>You have been granted access to the surviving records. The records are damaged. Enter carefully.</p>
    `,
    footnotes: [
      "The estimated time of death falls between 12:11 AM and 12:17 AM, depending on which record you trust.",
      "Blackwood House sits above a private lake. Light rain blurred the windows and kept everyone inside.",
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
      <p>Mara Anouk began by correcting the spelling of her surname. Then she sat very still and said Gideon liked open-ended questions because they let him reshape other people's stories later.</p>
      <p>Her sequence was simple. Dinner ended at 10:40. The group moved to the library. Simon drifted toward the shelves, Elias toward the mirrors, June kept the room running, and Gideon moved between everyone like he owned the mood of the night.</p>
      <p>Mara said Gideon had once helped her career and then slowly taken control of parts of her life. He found her first novel, called it "feral but salvageable," and turned that early support into leverage. "He kept other people's lives in labeled folders," she said.</p>
      <p>She confirmed an argument with Gideon in the east corridor before 11:30. He wanted public gratitude from her. She refused. She said the exchange ended with him tapping a painting frame and saying, "Nothing survives untouched."</p>
      <p>After that, she said, she took a drink into the blue sitting room and stayed there alone for <em>some time</em>. When told someone believed Gideon had brought whiskey into that room, she replied too quickly. "I did not pour for him," she said. Then she added, angrily, "People love a woman with a powder and a motive."</p>
      <p>Of June, Mara was careful. She said June understood systems and that Gideon mistook competence for obedience. She said June heard part of the corridor argument and would not meet her eyes afterward.</p>
      <p>Near midnight, Mara said, she returned to her room in the guest wing and stayed there until the body was found. When shown a recovered manuscript page from Gideon's study, she went quiet and then said, "If I had wanted Gideon Vale dead, you would not need to reconstruct it. I would tell you."</p>
      <p>At the end, she asked for one change to the transcript's tone: she was not relieved by Gideon's death. "The record is not the event," she said. "Write that exactly."</p>
    `,
    footnotes: [
      "Mara puts herself in the blue sitting room at the right time to matter.",
      "Her insistence that she did not pour Gideon's drink is narrower than a full denial of touching it.",
      "She repeats Gideon's phrase 'Nothing survives untouched,' which shows how fully his language had spread through the house."
    ]
  },
  eliasInterview: {
    id: "eliasInterview",
    section: "interviews",
    type: "Interview Transcript",
    title: "Interview: Elias Thorne",
    meta: ["Recorded 10:02 AM", "Subject requested tea twice", "One deletion noted"],
    body: `
      <p>Elias Thorne arrived looking carefully composed for someone who said he had not slept. He admitted Gideon had once been his lover and said Gideon's real talent was making control sound like preservation.</p>
      <p>His account of the evening came in pieces. Dinner was miserable. Simon wanted a fight. Mara was visibly tense. June kept doing practical work while Gideon performed generosity for the room. After the library toast, Elias went to the music room with a score he had been revising.</p>
      <p>Near midnight, Gideon texted him: "Conservatory. Bring the score. For the record." Elias said that phrase was Gideon's way of turning private life into evidence.</p>
      <p>In the conservatory, Elias said, Gideon was holding a tumbler and looked wrong. Not drunk, exactly. Slowed down. Unfocused. Gideon brought up old recordings and private arguments. Elias accused him of treating confession like an asset. He said he may have thrown a pencil.</p>
      <p>Elias insisted Gideon was still alive when he left around 12:05 or 12:06. He said Gideon touched his temple more than once and insisted he was perfectly clear. "That was how I knew he wasn't."</p>
      <p>He denied seeing Mara after the library. Of June, he said she was the one keeping the whole place running and admitted she passed him in the east corridor shortly before midnight with her phone in hand. "She did not look frightened," he said. "She looked focused."</p>
      <p>One section of the interview was deleted at Elias's request. The surviving note says he talked about hearing his own voice played back by someone who had once loved him. He denied moving Gideon's phone, but did not explain why it was found in the corridor.</p>
      <p>At the end, he dropped most of the performance. "I did love him once," he said. "And because I loved him once, I know how calm he could sound when he meant to ruin someone."</p>
    `,
    footnotes: [
      "Deleted passage logged at 10:19 AM. Subject requested removal without review. The absence is more revealing than the summary.",
      "Elias is the first to note Gideon's face as delayed or unfocused, a possible sign of intoxication or sedation.",
      "He denies moving Gideon's phone, but the later phone fragment makes that denial harder to trust."
    ]
  },
  juneInterview: {
    id: "juneInterview",
    section: "interviews",
    type: "Interview Transcript",
    title: "Interview: June Navarro",
    meta: ["Recorded 11:31 AM", "Administrative review attached", "Subject requested procedural clarity"],
    body: `
      <p>June Navarro began by asking whether this was a formal interview, an internal review, or an exercise in institutional grief. Then she opened a notebook and never wrote in it.</p>
      <p>She described her job in practical terms and said Gideon valued her because she prevented embarrassment before it became public. "He called that discretion," she said. "Usually he meant labor." She also said that after a few months she understood his version of help was really a way of keeping permanent records on people's weak points.</p>
      <p>June gave the clearest public timeline. Dinner ended at 10:40. The library toast came at 10:55. At 11:12 she heard Mara and Gideon arguing in the east corridor, but did not step in.</p>
      <p>After 11:30, she said, she was in the office beside the donor dining room. Around midnight she saw Elias heading toward the conservatory. Then the lights flickered. She checked the nearby terminal and opened Gideon's outbox after an autosave warning appeared.</p>
      <p>What she found was the donor draft that would frame Mara as unstable, make June look responsible for memorial fund irregularities, and leave Gideon looking trustworthy. She said that was when she went to the conservatory. "I went to confront him," she said.</p>
      <p>June said Gideon told her the memorial fund for her brother had become "more useful in circulation than in sentiment." He also made clear he could still ruin both her and Mara with the records he held. She claimed she left him alive, but her hands opened on the table and stayed there as she said it.</p>
      <p>Then she said, quietly, that she had been the one touching the folders, logging the records, and carrying other people's fear as clerical work. Near the end she refused to turn off the recorder. Looking at the object list, she stopped at <em>astrolabe paperweight</em> and said, "You already know which part of the room mattered."</p>
    `,
    footnotes: [
      "June understates how serious the donor draft really was.",
      "Her final remark about the astrolabe is the closest any public interview comes to admitting she delivered the fatal blow.",
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
      <p>Professor Simon Reeve asked whether the interviewers had read his work before he agreed to continue. When told yes, he said "good." He described Blackwood House as a place that cleaned reputations while pretending to preserve culture.</p>
      <p>Reeve said he came that night ready to challenge Gideon over a donor acquisition: letters that should never have left a family archive. At 11:41, by his estimate, he confronted Gideon in the study over false names, bad dates, and a copied signature.</p>
      <p>He said the argument was serious even if both men made it sound intellectual. Reeve accused Gideon of building an institution where wealthy people could buy the appearance of rescue while acquiring damaged things and damaged people. Gideon answered by implying Reeve's own career rested on compromised donors too.</p>
      <p>Reeve denied threatening Gideon physically. He did admit taking one letter from Gideon's desk when Gideon stepped into the hall. He said he kept quiet about it after the death because it would make him the easiest suspect in the room.</p>
      <p>Of Mara, he said Gideon feared her language more than her anger. Of Elias, he was openly dismissive. Of June, he said she knew too much about operations to be naive, though that was not the same as guilt. Of Celia, he said she noticed what had been moved and for whom.</p>
      <p>After leaving the study, Reeve said he returned to his room and heard no fight, only the later alarm. When told that staff had seen him near the east corridor after midnight, he objected sharply to the word <em>near</em>.</p>
      <p>Near the end, he stopped performing certainty and said Gideon was dangerous because he made records sound merciful while using them to store shame and leverage. "The record is not the event," he said. He insisted that be written down.</p>
    `,
    footnotes: [
      "Reeve is the only witness to admit removing documentary material that night.",
      "His irritation about being placed near the east corridor reads defensive, even if the floor plan does allow overlap.",
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
      <p>Celia Hsu asked to see the object list before she answered any questions. Not the witness list. The object list. She read it once, touched the table after the word <em>astrolabe</em>, and said, "All right."</p>
      <p>She said her migraine had started before dessert and that she spent most of the evening near the archivist's office and the cool service passage beside it. "I saw little," she said. "I noticed more than I saw."</p>
      <p>Her description of Gideon was blunt. "He was never careless with paper. Only with people." She said he was very good at looking like a rescuer and treated intervention as a kind of ownership.</p>
      <p>Celia confirmed that the house felt unsettled after dinner. Mara and Gideon argued in the east corridor around 11:12. Simon moved toward the study. Elias stayed near the music room. June was at the terminals, moving faster than usual. "June's silence changed shortly after midnight," Celia said.</p>
      <p>She did not first admit seeing June in the corridor. Instead she described the power flicker at 12:06. Only later did she say she saw a slim figure in dark clothes, without a jacket, moving quickly through the east corridor after the flicker. She said the person did not look like they were fleeing.</p>
      <p>Asked whether Gideon kept private files on guests, Celia said yes. She said he kept transcripts, letters, donor fears, disclosures, and other material he called "contextual." When told the phone was found in the corridor rather than by the body, she said objects usually stay where grief leaves them unless someone fears sequence.</p>
      <p>Near the end, Celia added her own footnote: the astrolabe normally belonged in the study, not the conservatory. Gideon had moved it earlier that evening. At the door, she said, "The record is not the event."</p>
    `,
    footnotes: [
      "Celia's 'slim figure, dark clothes, no jacket' is the nearest any public interview comes to identifying June in the east corridor.",
      "Footnote added by subject: the astrolabe being moved from study to conservatory makes an improvised weapon available.",
      "Her careful wording matters more once the hidden addendum is unlocked."
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
      "The missing segment after 12:07 AM is too small and specific to look accidental.",
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
      "This draft would have hurt Mara in public and made June look like the administrative problem.",
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
      "Privacy mode shows how the house protected guests until that protection became concealment."
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
      <p>The photo shows the library toast just after the glasses were raised. Gideon stands at the center, smiling toward someone out of frame. Mara is to his right, not smiling, with one hand already pulling back. Elias appears twice in reflection, once in the cabinet glass and once in the dark window. Simon is partly hidden behind a donor plaque, mouth open as if he is already arguing. June is blurred at the edge of the image, moving with a tray that does not appear in later photos. Celia sits in the back under a dim lamp, looking not at Gideon but at the table beside him.</p>
      <p>Annotations indicate the object on that table is the brass astrolabe later found in the conservatory. A marginal note reads: "He moved it after the toast. Why?" Another note, smaller: "Phone visible in jacket pocket at this time."</p>
    `,
    footnotes: [
      "The astrolabe was moved earlier than the public interviews suggest.",
      "Celia seems to be watching objects, not people, even before the death."
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
      "The letter shows Gideon treated the memorial fund like something he could move around at will."
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
      "This memo is the clearest statement of Gideon's worldview.",
      "His claim that labeling is mercy explains the institution better than its official language does."
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
      "This reads less like reflection and more like planning notes on people.",
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
      <p>The page describes a woman returning to a childhood museum and learning that the curator has been keeping donor gifts and private confessions in the same drawer. The narrator writes: "He said preservation and possession were twins, and I said only to men who have never been taken apart." In the margin, Gideon has written: <em>too direct. Let him remain charming longer.</em> Mara later wrote one word under that comment in dark pencil: <em>Why?</em></p>
      <p>A second sentence on the page is underlined three times by Mara: <em>The record is not the event, but records breed obedient versions of it.</em></p>
    `,
    footnotes: [
      "Gideon's note shows he still felt entitled to shape Mara's work long after their break.",
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
      "Combined with Mara's interview, this is one of the clearest signs that she handled his drink."
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
      <p>The recovered copy has no signature, but an indentation along the lower margin suggests another name was once written on the original. Reeve's attached note says: "The date format postdates the claimed year. The family address did not exist under this numbering until six years later. Someone assumed provenance was only style."</p>
      <p>On the reverse is a penciled line in Gideon's hand: <em>Simon will want the lie to be uglier than it is.</em></p>
    `,
    footnotes: [
      "Simon was right to doubt the document, but stealing it still damages his credibility.",
      "The note on the back suggests Gideon expected Reeve's anger and knew how to use it."
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
      <p>I am writing this because the official file is starting to settle into a shape Gideon would have liked. It spreads responsibility so widely that no one person looks clearly responsible. That version is not fully false. It is just obedient.</p>
      <p>At 12:13 AM, by the regulator clock in the archivist's office, I saw June Navarro leave the east corridor. Not maybe. Not a slim figure I could not identify. June. She had no jacket. Her right wrist was dark with peat or soil. Her face was blank in the way a face goes blank after a decision has already been made.</p>
      <p>I knew almost at once that Gideon was dead or nearly dead. The whole house felt changed. Anyone who has worked around archives knows that feeling: an event happens, and suddenly every object becomes evidence. June did not move like someone fleeing. She moved like someone who had, in a single minute, become responsible for what happened next.</p>
      <p>I did not follow her right away. That matters. A better person might have run to the conservatory, called staff, and secured the scene. But I had spent years watching Gideon turn process into a private tool. When I finally reached the conservatory, Elias was not there yet. Gideon was on the floor. The astrolabe was half under the bench. A planter had broken his fall badly. There was blood.</p>
      <p>I also saw the tumbler and understood something else. He had not come into that room in one simple condition. He was already affected before the final confrontation. Not drunk in his usual way. Slowed down. Softened around the edges. I had seen him sedated once after a dental procedure. It looked similar. I thought of Mara immediately, not because I thought she meant to kill him, but because she had carried a tightly controlled kind of intent all evening.</p>
      <p>What I chose after that was not innocence. It was selection. I lied in the public interview to protect June because the official truth on offer would have become another story Gideon shaped even after death. It would have turned her into a manageable scandal and left his larger system untouched.</p>
      <p>June did kill him. I believe she struck once. I also believe she went there to confront a man who was already impaired by someone else's intervention and was still dangerous. She did not bring a weapon. The weapon was the astrolabe, moved out of the study earlier that evening.</p>
      <p>If you are reading this, enough of the archive has opened that you may think you are outside his arrangement. I doubt that. Nothing survives untouched. The best we can do is notice the touch while it is happening.</p>
    `,
    footnotes: [
      "This is the first direct confirmation that Celia saw June after the death.",
      "Celia is not claiming June was innocent. She is rejecting a neat official story."
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
      "The line about keeping 'contextual materials' in his custody is both a threat and a confession.",
      "This draft would have damaged Mara publicly and isolated June by morning."
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
      "This does not prove Elias killed Gideon. It does show that he interfered after the fact.",
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
      <p>What happened at Blackwood House can be told in several ways, and each one is true only in part. First: Mara Anouk learned that Gideon still had pages from her manuscript and planned to frame her as unstable again. Around 11:28 PM, she crushed a sedative into his whiskey. She meant to make him sleep or at least slow down long enough for his study to be searched. She did not intend to kill him. But her action changed everything that came after.</p>
      <p>Second: Simon Reeve confronted Gideon at 11:41 PM over false provenance and left with a stolen letter in his jacket. He wanted proof, not blood. But after the death, that theft made the corruption look smaller and more personal than it really was.</p>
      <p>Third: Elias Thorne answered Gideon's summons to the conservatory. Gideon threatened him again with private recordings. Elias left him alive but already unsteady. Later, when he realized something irreversible had happened, he chose editing over honesty. He deleted part of the phone sequence and moved the device.</p>
      <p>Fourth: June Navarro opened Gideon's scheduled donor message after the power flicker and saw what he planned for the morning. Mara would be discredited again. June would be blamed for the memorial fund. Gideon would keep control of both stories. June went to the conservatory around 12:08 AM to stop him. During the confrontation he said the fund named for her brother had become "more useful in circulation than in sentiment." He also made clear that he could still ruin both her and Mara with the records he controlled. June picked up the brass astrolabe from the side table and struck him once. He fell backward, hit the planter edge, and died.</p>
      <p>Fifth: Celia Hsu saw June leave the east corridor moments later and understood enough to know what the official story would become. She lied in public. Not because June was innocent, but because a neat official version would only extend Gideon's power one last time.</p>
      <p>So the question is not only who killed Gideon Vale. It is also who had already been forced to carry his methods, and how little death changed the fight over control. The record is not the event. But every record here still shows the pressure of passing through his hands, or through the hands of people hurt by him.</p>
    `,
    footnotes: [
      "This is the clearest combined account in the archive, even if it is not written like a legal finding.",
      "If this page was never filed, someone chose understanding without making it official."
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
    <p>You do not leave Blackwood House with a neat solution. You leave with the clearest version of events the archive can offer. June Navarro killed Gideon Vale. She struck him once, in anger and self-defense, after Mara had already drugged his whiskey and after Elias had already become part of the night's damage. Celia then lied to protect June from becoming Gideon's final controlled story. Simon left with proof of a different crime and almost let that smaller theft distract from the bigger one.</p>
    <p>This does not clear anyone else. Mara acted without meaning to kill him, but she still changed the room. Elias edited evidence after the fact. Celia protected a person and damaged the file. June crossed a line she cannot undo. But the archive keeps pointing back to Gideon, who spent years turning other people's weakness into something he could store and use.</p>
    <p>What remains is an institution built on control disguised as care. Gideon called leverage context and possession stewardship. Even dead, he almost keeps control by forcing everyone to explain themselves through him. Your reading breaks that pattern only in part. You can name the person who struck him. You can also name the system that helped bring that moment into being.</p>
  `,
  partial: `
    <p>You identify June Navarro as the killer and stop there. The file allows that reading. She confronted Gideon, she struck him, and he died on stone and broken glass. If you want the direct answer, you have it. But Blackwood House never ran on one person alone.</p>
    <p>Without the rest of the chain, June becomes the whole story when she is only the final actor. That leaves out Mara's earlier move, Elias's later interference, Celia's lie, and the donor message Gideon planned to send in the morning. It hides how much damage was already in motion before the fatal blow.</p>
    <p>This ending is not wrong. It is only narrow. Gideon dies here by one person's hand instead of by the long buildup created by his own methods, and the archive closes too easily around that version.</p>
  `,
  institutional: `
    <p>You miss the exact hand, but you understand the system. In some ways the archive values that more than a tidy verdict. Gideon Vale's real power was not patronage. It was custody: of shame, debt, letters, private collapse, and the stories donors would be allowed to hear. His death grew out of that system.</p>
    <p>You might accuse Mara because of the whiskey, Elias because the phone was moved, or Simon because stolen documents look dramatic. The archive has material for all of them. That is part of its cruelty. A controlling institution leaves just enough truth in the wrong places to keep attention scattered. Still, your reading rejects the worst lie, which is that Gideon's death was an isolated break in an otherwise good structure.</p>
    <p>You do not fully solve the room, but you do solve the pattern. Blackwood House remains guilty in your account even if the final motion stays blurred.</p>
  `,
  failed: `
    <p>You turn the archive into something simple: a jealous lover, an angry writer, an opportunistic scholar, a stressed administrator. The death becomes easy to read, as if one flaw caused everything and the house around it meant nothing. Gideon would have liked that version. Clean stories protect institutions.</p>
    <p>In this reading, contradictions become noise. Redactions become decoration. The repeated phrase becomes style. The donor draft, the memorial fund, and Celia's silences all get pushed to the side. Everyone is reduced to one motive, which is exactly how systems hide their own pattern.</p>
    <p>The file closes. Somewhere in a drawer, your interpretation is labeled and filed as compliance.</p>
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
const telemetryCoverageEl = document.getElementById("telemetryCoverage");
const telemetryConflictsEl = document.getElementById("telemetryConflicts");
const telemetryTraceEl = document.getElementById("telemetryTrace");

init();

function init() {
  renderNav();
  openDoc(currentDocId, true);
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
  metaStateEl.textContent = doc.restricted ? "Recovered restricted node" : "Node online";
  metaProgressEl.textContent = `${state.visited.length} documents opened`;
  docMetaEl.innerHTML = doc.meta.map(item => `<p>${item}</p>`).join("");

  let bodyHtml = typeof doc.render === "function" ? doc.render() : doc.body;
  bodyHtml = applyDocVariants(doc.id, bodyHtml);
  contentEl.innerHTML = bodyHtml;
  contentEl.scrollTop = 0;

  const footnotes = typeof doc.renderFootnotes === "function" ? doc.renderFootnotes() : doc.footnotes || [];
  renderFootnotes(footnotes);
  footnotesEl.scrollTop = 0;
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
  const investigableDocs = Object.keys(docs).filter(id => id !== "opening");
  const visitedInvestigable = state.visited.filter(id => id !== "opening");
  const coverage = Math.round((visitedInvestigable.length / investigableDocs.length) * 100);
  const contradictionCount = getContradictionCount();
  statusLineEl.textContent = unlockedRestricted
    ? `Status: live review, ${unlockedRestricted} restricted file(s) available`
    : "Status: live review";
  phraseLineEl.textContent = `Phrase traces: ${state.phraseSources.length} / 3`;
  metaProgressEl.textContent = `${state.visited.length} documents opened`;
  telemetryCoverageEl.textContent = `${coverage}%`;
  telemetryConflictsEl.textContent = String(contradictionCount).padStart(2, "0");
  telemetryTraceEl.textContent = state.phraseSources.length >= 3
    ? "Correlated"
    : state.phraseSources.length > 0
      ? "Emerging"
      : "Dormant";
}

function getContradictionCount() {
  let contradictions = 2;

  if (countVisited(["maraInterview", "juneInterview", "celiaInterview"]) >= 2) contradictions += 2;
  if (state.visited.includes("incidentReport")) contradictions += 1;
  if (state.visited.includes("securityLog")) contradictions += 2;
  if (state.visited.includes("deletedDraft")) contradictions += 2;
  if (state.visited.includes("phoneFragment")) contradictions += 3;
  if (state.visited.includes("finalTestimony")) contradictions += 2;

  return contradictions;
}

function renderHub() {
  const interviewsRead = countVisited(["maraInterview", "eliasInterview", "juneInterview", "simonInterview", "celiaInterview"]);
  const evidenceRead = countVisited(["incidentReport", "guestList", "schedule", "smsExport", "deletedDraft", "securityLog", "annotatedPhoto", "donorLetter", "voiceMemo", "notebookFragment", "manuscriptPage", "serviceNote", "provenanceLetter"]);
  const restrictedRead = countVisited(["celiaAddendum", "fullerDraft", "phoneFragment", "finalTestimony"]);
  const traceState = state.phraseSources.length >= 3 ? "phrase trail matched" : "phrase trail incomplete";

  return `
    <p class="lede">The Blackwood House file is built from conflicting testimony, shifting sequence, repeated language, and recovered traces. This hub brings those parts together as you read.</p>
    <div class="hub-grid">
      <section class="hub-card">
        <h3>Witness Graph</h3>
        <p>Five witness files with conflicting timing, motives, and omissions. Opening one changes how the others read.</p>
        <p><span class="metric">${interviewsRead}/5</span></p>
        <p><span class="tag">sequence shifts as you read</span></p>
      </section>
      <section class="hub-card">
        <h3>Evidence Mesh</h3>
        <p>Administrative records, sensor logs, draft emails, and phone traces. The point is to compare them, not read them once.</p>
        <p><span class="metric">${evidenceRead}</span></p>
        <p><span class="tag">files opened this run</span></p>
      </section>
      <section class="hub-card">
        <h3>Conflict Engine</h3>
        <p>The timeline changes as you open more files, so confidence shifts when new records appear.</p>
        <p><span class="metric">${getContradictionCount()}</span></p>
        <p><span class="tag">active conflict markers</span></p>
      </section>
      <section class="hub-card">
        <h3>Recovery Layer</h3>
        <p>Hidden files unlock only after specific reading patterns are met. The interface rewards comparison, not passive reading.</p>
        <p><span class="metric">${restrictedRead}</span></p>
        <p><span class="tag">${traceState}</span></p>
      </section>
    </div>
    <p>Follow the repeated phrase when it appears, open suspicious redactions, and revisit earlier files after later ones change their meaning. The archive updates what it shows based on what you have already read.</p>
  `;
}

function renderTimeline() {
  const entries = [
      { time: "10:40 PM", text: "Dinner ends in the donor dining room. The formal part of the night gives way to smaller groups." },
      { time: "10:55 PM", text: "Library toast. A photo shows Gideon, the astrolabe nearby, and the group starting to split apart." },
    { time: "11:12 PM", text: "Mara and Gideon argue in the east corridor.", conflict: state.visited.includes("maraInterview") ? "Confirmed by Mara, June, and Celia with different emphasis." : "Witnesses conflict on tone and duration." }
  ];

  if (countVisited(["maraInterview", "eliasInterview", "juneInterview", "simonInterview", "celiaInterview", "incidentReport", "guestList", "schedule"]) >= 3) {
    entries.push(
      { time: "11:28 PM", text: "Blue sitting room. Gideon's whiskey passes through this room before the later conservatory meeting.", conflict: state.visited.includes("serviceNote") ? "A kitchen note suggests someone else already brought him the glass." : "No public witness admits handling the drink." },
      { time: "11:41 PM", text: "Study confrontation between Simon and Gideon over provenance." },
      { time: "11:52 PM", text: "A donor email is prepared for delayed release.", conflict: state.visited.includes("deletedDraft") ? "Autosave shows the message was preloaded before the death." : "Exact content not yet public." },
      { time: "11:57 PM", text: "Gideon messages Elias: 'Conservatory. Bring the score. For the record.'" },
      { time: "12:03 AM", text: "Elias meets Gideon in the conservatory. Argument follows." },
      { time: "12:06 AM", text: "A brief power flicker hits the east wing. Reflections shift and sensor timing slips." },
      { time: "12:08 AM", text: "Another person enters the conservatory.", conflict: state.visited.includes("celiaAddendum") ? "Celia later identifies that entrant as June." : "Identity unstable in public record." },
      { time: "12:11 AM", text: "Abrupt motion near central planter.", conflict: state.visited.includes("finalTestimony") ? "Composite testimony identifies this as June's fatal strike and Gideon's fall." : "Could indicate collapse, struggle, or object drop." },
      { time: "12:13 AM", text: "Celia sees someone leaving the east corridor.", conflict: state.visited.includes("celiaAddendum") ? "Her restricted addendum names June directly." : "Public interview refuses certainty." },
      { time: "12:15 AM", text: "Phone sequence disrupted; device relocated.", conflict: state.visited.includes("phoneFragment") ? "Restoration indicates manual deletion and probable Elias involvement." : "Cause unknown." },
      { time: "12:17 AM", text: "The body is officially found. The archive begins." }
    );
  }

  return `
    <p class="lede">This timeline updates as witness accounts, sensor logs, and recovered drafts are added. Confidence changes with the record instead of pretending the sequence was ever fixed.</p>
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
    "The first major contradiction is about time, not emotion. Everyone agrees Gideon died after midnight. What changes from file to file is the period when he was still alive and still able to shape events.",
    "Mara gives the narrowest denial in the archive: she says she did not serve Gideon anything. A later kitchen note says someone in the blue room already brought him whiskey. That does not make Mara the killer, but it does place her earlier in the chain of events.",
    "Repeated phrase: 'for the record.' In Gideon's mouth it often means he is shaping a future version of events. In other people's mouths it can mean they are trying to leave one true sentence behind before it gets revised."
  ];

  if (state.visited.includes("juneInterview")) {
    notes.push("June is the first witness whose controlled, administrative language breaks under pressure. The break centers on the memorial fund, the donor draft, and the shift from 'clarify' to 'confront.' Even before the restricted files open, her interview points more strongly toward direct action than anyone else's.");
  }

  if (state.visited.includes("voiceMemo")) {
    notes.push("Gideon's voice memo reads like a statement of belief. He does not think of himself as cruel. He thinks control is care and that private pain belongs to the institution if the institution has helped enough. That belief sits underneath the murder.");
  }

  if (state.visited.includes("deletedDraft")) {
    notes.push("The donor draft is an attempt to get ahead of the story. Gideon planned to wake donors into a version where Mara looked unstable, June looked suspect, and he still looked trustworthy.");
  }

  if (state.visited.includes("phoneFragment")) {
    notes.push("Elias did more than react emotionally. The restored phone fragment suggests active interference after the fact. He may not have killed Gideon, but he still helped distort the sequence.");
  }

  if (state.visited.includes("celiaAddendum")) {
    notes.push("Celia's hidden addendum changes the file completely. She saw June and then lied in public. She did that on purpose, not because she was confused. Once this page is open, the archive is not very ambiguous about who killed Gideon. The real question is how to judge everyone around that act.");
  }

  if (state.visited.includes("finalTestimony")) {
    notes.push("The final unnumbered page gives the clearest combined account: Mara drugs, Simon steals, Elias edits, June strikes, Celia shields. At that point the killer is no longer really in doubt. What remains unclear is moral responsibility, not the basic fact pattern.");
  }

  notes.push("The same sentence appears in multiple places: the record is not the event. It starts as a warning and becomes a method. This archive changes meaning as more material comes to light.");

  return `
    <p class="lede">These notes act like a live analyst layer. They update when new records change the picture and keep the investigation focused on what the archive is doing.</p>
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
    <p class="lede">This page lets you submit your theory. Instead of sending you to one fixed ending, the system reads your choices against the evidence you found.</p>
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
          <option value="system" ${selected.motive === "system" ? "selected" : ""}>The institution itself had become a system of control</option>
        </select>
      </div>
      <div class="field">
        <label for="coverup">Who helped cover it up?</label>
        <select id="coverup">
          <option value="elias-celia" ${selected.coverup === "elias-celia" ? "selected" : ""}>Elias Thorne and Celia Hsu</option>
          <option value="celia" ${selected.coverup === "celia" ? "selected" : ""}>Celia Hsu alone</option>
          <option value="elias" ${selected.coverup === "elias" ? "selected" : ""}>Elias Thorne alone</option>
          <option value="simon" ${selected.coverup === "simon" ? "selected" : ""}>Simon Reeve, by stealing documents</option>
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
