/* =====================================================================
   ✏️  EDIT EVERYTHING HERE — this is the only part you need to change
   ===================================================================== */
const CONFIG = {
  heroTitle: "Saleh - A playlist for you",
  heroSub:   "A little corner of the internet, just for us.",

  mainQuote: `Dear Saleh,

Some stories don’t get the beautiful endings we once dreamed of, yet they remain in the most beautiful corners of our hearts. Maybe our story is one of them.

You know, Saleh, so much has changed since 2022. Time has changed, circumstances have changed, the way we talk to each other has changed, and even the distance between us has grown. There were so many moments when we stopped talking, so many times when I thought it was finally over. Yet, somehow, some feelings never really disappeared.

I don’t know how much our memories mean to you anymore. I don’t know if you ever sit alone and think about the old days, about us. But to me, you’re not just someone from my past. You’re a chapter of my life that I could never simply erase.

Maybe we weren’t perfect for each other. Maybe our families, circumstances, thoughts, and ideas about the future were too different. Maybe love isn’t always enough to make two people end up together. But one thing I know for sure is that I never loved you in an ordinary way.

The little moments we shared, your stubbornness, our arguments, our laughter, the waiting, and all those unspoken feelings — they still mean something to me. Sometimes I wish I could go back in time, just to live a few of those moments again and hold on to them a little longer.

I’m not writing this letter to ask you for promises or to remind you of everything that went wrong. I have no complaints left to make. I just want you to know that there was someone who genuinely loved you and held you close in a very special place in her heart.

I don’t know how our story will end. I don’t even know if there will ever be another chapter for us.

But if you ever find yourself remembering the old days, I hope you remember that what we had wasn’t fake. At least, my feelings were never fake.

Some people are not meant to stay forever, but they leave a part of themselves that stays forever.

Take care of yourself, Saleh.

And no matter where life takes us, our story will always remain something special to me.

With love,
Someone who once wished for a forever with you. ❤️`,
  mainSign:  "— Yours, Sho She",
  loveNote: "Please never think that my reaching out to you means I lack self-respect. It simply means that my love for you will always be far greater than any pride.",
  loveNoteSign: "— Yours, Sho She",

  memoriesTitle: "Our Memories",
  memoriesSub:   "Every moment captured, every smile I miss.",

  /* Add photos: put your image files in the same folder (e.g. images/1.jpg)
     and write the path in `img`. Leave img:"" to show an empty slot.
     Copy/paste a line to add more memories. */
  memories: [
    { img: "../images/pic3.jpeg", caption: "In your eyes, I found my home." },
    { img: "../images/pic2.jpeg", caption: "Every moment with you is a treasure." },
    { img: "../images/pic1.jpeg", caption: "You are the missing piece to my soul." },
    { img: "../images/pic4.jpeg", caption: "My heart beats only for you." },
    { img: "../images/pic5.jpeg", caption: "You are my today and all of my tomorrows." },
    { img: "../images/pic6.jpeg", caption: "Loving you is the best part of my life." },
    { img: "../images/pic7.jpeg", caption: "Distance means so little when you mean so much." },
    { img: "../images/pic8.jpeg", caption: "I'd choose you in a hundred lifetimes." },
     { img: "../images/pic9.jpeg", caption: "If memories could bring people back, I'd find you a thousand times." },
      { img: "../images/pic10.jpeg", caption: "Some people leave, but their presence never does." },
       { img: "../images/pic11.jpeg", caption: "I hope life is gentle with you, even when I'm not around." },
        { img: "../images/pic12.jpeg", caption: "We became strangers with a thousand memories." },
         { img: "../images/pic13.jpeg", caption: "You will always be a soft spot in my heart." },
          { img: "../images/pic14.jpeg", caption: "I loved you in ways words could never explain." },
           { img: "../images/pic15.jpeg", caption: "You will always be my favourite unfinished story." },
            { img: "../images/pic16.jpeg", caption: "In another lifetime, I hope we make it." },
             
  ],

  songsTitle: "Songs that remind me of you",

  /* Paste a Spotify track URL or embed URL in `spotifyUrl`.
     `coverImage` is optional; the Spotify player also shows the track artwork. */
  songs: [
    { id: 1, title: "Every Moment", spotifyUrl: "https://open.spotify.com/track/78Bl0KxUsrCJ58yDE9WnEH", coverImage: "", sub: "Some feelings never learn how to fade." },
    { id: 2, title: "Our Memories", spotifyUrl: "https://open.spotify.com/embed/track/3u947zydbp5jVgVNlaRgv4?utm_source=generator&si=b4cc90acefd54e51", coverImage: "", sub: "You were my once upon a time." },
    { id: 3, title: "Please forgive me", spotifyUrl: "https://open.spotify.com/embed/track/6mHTwIXqZtuQUF1fEkrhFB?utm_source=generator&si=43e931534c774bdd", coverImage: "", sub: "A little piece of my heart will always belong to you." },
    { id: 4, title: "The Emptiness", spotifyUrl: "https://open.spotify.com/embed/track/2xLaYf6XYIFz3tuUJjELAs?utm_source=generator&si=0ec2064c652049c8", coverImage: "", sub: "If only love could be enough." },
    { id: 5, title: "ComeBack", spotifyUrl: "https://open.spotify.com/embed/track/23Wl7OlMXNnNyqAws1GHoP?utm_source=generator&si=d140e681023a4741", coverImage: "", sub: "We didn't last forever, but my feelings were real." },
    { id: 6, title: "", spotifyUrl: "https://open.spotify.com/embed/track/0CRk02zqkxvLbn7eK2hdFQ?utm_source=generator&si=931186173eae4b75", coverImage: "", sub: "Somewhere between hello and goodbye, I found you." },
    { id: 7, title: "", spotifyUrl: "https://open.spotify.com/embed/track/1OMGGBk7xDy2guzeZa6Kru?utm_source=generator&si=f7847b743b374097", coverImage: "", sub: "I wish our timing had been kinder." },
    { id: 8, title: "", spotifyUrl: "https://open.spotify.com/embed/track/2rHxwYzdn66nDMmDmmio6W?utm_source=generator&si=3998dcdef6c342c6", coverImage: "", sub: "You still cross my mind in the quietest moments." },
    { id: 9, title: "", spotifyUrl: "https://open.spotify.com/embed/track/3oL1ux49UhwJkIQos5NER5?utm_source=generator&si=c778cf05b5db4634", coverImage: "", sub: "Not together, but never ordinary." },
    { id: 10, title: "", spotifyUrl: "https://open.spotify.com/embed/track/6bYBAGooa3R8kiVKlh58VI?utm_source=generator&si=3159f49b630d4ee1", coverImage: "", sub: "Maybe we were a beautiful story written at the wrong time." },
    { id: 11, title: "", spotifyUrl: "https://open.spotify.com/embed/track/48wo8JVnTkD1pmLzrSpXRM?utm_source=generator&si=a8b235d36ee048fc", coverImage: "", sub: "I still remember us, even when I try not to." },
    { id: 12, title: "", spotifyUrl: "https://open.spotify.com/embed/track/0DpUQ3mpAGy3bYsEKVy6t5?utm_source=generator&si=60494e3b1ca44da3", coverImage: "", sub: "You were once my favourite place to belong." },
    { id: 13, title: "", spotifyUrl: "https://open.spotify.com/embed/track/0TsyaaM73GAKIxv38yzHV4?utm_source=generator&si=1b9eb1e931144c2a", coverImage: "", sub: "Since 2022, a part of my heart has known your name." },
    { id: 14, title: "", spotifyUrl: "https://open.spotify.com/embed/track/3VJpl4jrFSqY3Y6mAzqfux?utm_source=generator&si=476335e412fa4d13", coverImage: "", sub: "If you ever wonder, yes, you mattered. More than you know.If you ever wonder, yes, you mattered. More than you know." },
    { id: 15, title: "", spotifyUrl: "https://open.spotify.com/embed/track/1TWkdQ2k7ysSYwla66Ys6I?utm_source=generator&si=1f965d9000a24097", coverImage: "", sub: "Our story may have paused, but it never became meaningless." },
    { id: 16, title: "", spotifyUrl: "https://open.spotify.com/embed/track/3gixnmepHSsyAuho34rprN?utm_source=generator&si=931ea403f17c45f7", coverImage: "", sub: "I never wanted a perfect love story. I just wanted ours." },
    { id: 17, title: "", spotifyUrl: "https://open.spotify.com/embed/track/5tvFTOg5v1YAvMxN1YfMe5?utm_source=generator&si=532204a4c1a0420f", coverImage: "", sub: "Dear Saleh, you were never just someone. You were someone special." },
  ],

  letterTitle: "My Dearest Saleh,",
  letter:
`Some stories don’t get the beautiful endings we once dreamed of, yet they remain in the most beautiful corners of our hearts. Maybe our story is one of them.

You know, Saleh, so much has changed since 2022. Time has changed, circumstances have changed, the way we talk to each other has changed, and even the distance between us has grown. There were so many moments when we stopped talking, so many times when I thought it was finally over. Yet, somehow, some feelings never really disappeared.

I don’t know how much our memories mean to you anymore. I don’t know if you ever sit alone and think about the old days, about us. But to me, you’re not just someone from my past. You’re a chapter of my life that I could never simply erase.

Maybe we weren’t perfect for each other. Maybe our families, circumstances, thoughts, and ideas about the future were too different. Maybe love isn’t always enough to make two people end up together. But one thing I know for sure is that I never loved you in an ordinary way.

The little moments we shared, your stubbornness, our arguments, our laughter, the waiting, and all those unspoken feelings — they still mean something to me. Sometimes I wish I could go back in time, just to live a few of those moments again and hold on to them a little longer.

I’m not writing this letter to ask you for promises or to remind you of everything that went wrong. I have no complaints left to make. I just want you to know that there was someone who genuinely loved you and held you close in a very special place in her heart.

I don’t know how our story will end. I don’t even know if there will ever be another chapter for us.

But if you ever find yourself remembering the old days, I hope you remember that what we had wasn’t fake. At least, my feelings were never fake.

Some people are not meant to stay forever, but they leave a part of themselves that stays forever.

Take care of yourself, Saleh.

And no matter where life takes us, our story will always remain something special to me.

With love,
Someone who once wished for a forever with you. ❤️`,
  letterSign: "Forever yours, Sho She"
};
/* ===================================================================== */
