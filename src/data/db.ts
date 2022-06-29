interface IdbMovie {
   Id : number,
   Categories : Array<string>
   Name : string,
   Summary : string,
   ReleaseDate : string,
   Likes : number,
   Cover : string,
   Screenshots : Array<string>,
   Price: number
}


export const dbMovie:Array<IdbMovie>=[
    {
      "Id": 10039,
      "Categories": ["Fighting", "Shooter", "Platform", "Indie"],
      "Name": "Superfighters Deluxe",
      "Summary": "Superfighters Deluxe is a multiplayer 2D action game where little flat-headed men fight to the death in small and highly destructible arenas. Surviving each round takes skill, strategy and luck.",
      "ReleaseDate": "2018-11-30T00:00:00",
      "Likes": 420,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co1r61.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/eictejxujxz3xcmbylgn.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/v21jirvyi1yez5p00zj6.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/gotdjgksjbrmmwivxiwt.jpg"
      ],
      "Price": 40
    },
    {
      "Id": 126153,
      "Categories": ["Shooter"],
      "Name": "S.T.A.L.K.E.R.: Anomaly",
      "Summary": "Anomaly is a standalone S.T.A.L.K.E.R. mod powered by an x64 version of the X-Ray engine. Starting with version 1.5.0 Anomaly uses a custom engine build called the XRay-Monolith engine. After almost one year of development of the Anomaly 1.5.0 update, the mod continues its way on expanding and adding new features while maintaining a high level of quality and replay value.",
      "ReleaseDate": "2018-05-11T00:00:00",
      "Likes": 238,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co3dia.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc8jgo.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc8jgp.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc8jgq.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc8jgr.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc8jgs.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc8jgt.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc8jgu.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc8jgv.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc8jgw.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc8jgx.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc8jgy.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc8jgz.jpg"
      ],
      "Price": 35
    },
    {
      "Id": 11,
      "Categories": ["Role-playing (RPG)"],
      "Name": "Vampire: The Masquerade - Bloodlines",
      "Summary": "A first- and third-person Western RPG based on the Vampire: The Masquerade tabletop RPG with a heavy emphasis on character building and role-playing, in which the player embodies a fledgling vampire under the guidance of vampire prince Sebastian LaCroix. The player must serve the prince while getting to know the various factions of vampires in Los Angeles and forming their own political views.",
      "ReleaseDate": "2004-11-16T00:00:00",
      "Likes": 165,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co2n14.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/uhvnbk4ffkascq1gjl8s.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/mwbjpavj9vlj72gferdu.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/h0vzqwuqnmepah8ifkoo.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/iw7i5qtyrkpvd86zwihr.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/touscumdyispwjwgvp9g.jpg"
      ],
      "Price": 20
    },
    {
      "Id": 181,
      "Categories": ["Puzzle", "Adventure", "Point-and-click"],
      "Name": "Grim Fandango",
      "Summary": "A neo-noir adventure to the Land of the Dead.\nSomething's rotten in the land of the dead, and you're being played for a sucker. Meet Manny Calavera, travel agent at the Department of Death. He sells luxury packages to souls on their four-year journey to eternal rest. But there's trouble in paradise. Help Manny untangle himself from a conspiracy that threatens his very salvation.",
      "ReleaseDate": "1998-10-28T00:00:00",
      "Likes": 161,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co25r3.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/srxnavvnzqjqmmpjmncz.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sudsgzwqtw3yo4195rjk.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/ww6uc8qw6csitmbtbkef.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/ffau33wsghzrz94lz5rd.jpg"
      ],
      "Price": 20
    },
    {
      "Id": 245,
      "Categories": ["Real Time Strategy (RTS)", "Strategy"],
      "Name": "Command & Conquer: Red Alert 2",
      "Summary": "The Soviets are back and this time they’re on American soil. Fight for the red, white, and blue – or just the red. But be careful – the mystical madman Yuri, with his mysterious mind-control technology, is readying his army for a shot at world domination.Fight on the side of freedom or battle behind the Iron Curtain. Prism tanks, Tesla Troopers, Terror Drones, Desolators, Psychic Mind Control Giant Squid, and Sonic Dolphins are just a small part of your arsenal. Play either side in the full solo-play campaign or as one of the nine nations in eight modes of multiplayer.",
      "ReleaseDate": "2000-10-25T00:00:00",
      "Likes": 143,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co2345.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/kqwevhrrllgcd7ygcrgq.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/wou9fbnnyzqfbm4pi2tj.jpg"
      ],
      "Price": 35
    },
    {
      "Id": 2262,
      "Categories": ["Role-playing (RPG)", "Strategy", "Adventure"],
      "Name": "Gothic II",
      "Summary": "Gothic II is a role-playing video game and the sequel to Gothic, by the German developer Piranha Bytes. It was first released on November 29, 2002 in Germany, with North America following almost one year later on October 28, 2003. The game was published by JoWooD Entertainment and Atari.",
      "ReleaseDate": "2002-11-29T00:00:00",
      "Likes": 142,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co25ag.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/lqfhfbsbf6cmnfmnvjvv.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/dbdzjo180b3q4n7s3w6s.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/peatyxqojisqpyznpl3k.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/hmqle7p2rmcltuhs7rbl.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/bxdezzayv3bw5dhlpz3y.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/hhg5filtp0qgstohuymt.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/ktvxi1cqabjyjse4g9nv.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/kof4i08qzhpmmhotr5la.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/ufbrziizyudzmoqqeczc.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/zxh41jnukfevhqjultrc.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/fmra26w6hzbkgtyn5kut.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/hryb44or1zdaiqcralzy.jpg"
      ],
      "Price": 35
    },
    {
      "Id": 2261,
      "Categories": ["Role-playing (RPG)", "Adventure"],
      "Name": "Gothic",
      "Summary": "Gothic is a single-player action role-playing video game for Windows developed by the German company Piranha Bytes. It was first released in Germany on March 15, 2001, followed by the English North American release eight months later on November 23, 2001, and the Polish release on March 28, 2002.\n\nGothic has been well received by critics, scoring an average of 80% and 81/100 on Game Rankings' and Metacritic's aggregates, respectively. Reviewers credited the game for its story, complex interaction with other in-game characters, and graphics, but criticized it for the difficult control scheme and high system requirements.",
      "ReleaseDate": "2001-03-15T00:00:00",
      "Likes": 129,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co25r2.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/ibjit8ybos3ox2pakmyz.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/mfx6qkvj1qjv6pmyryuo.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/dxntedud9i1a3knbmhpa.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/gjfjn0bfy9td2bhiqjmn.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/tkrwvx0afywcg2wkgdjf.jpg"
      ],
      "Price": 30
    },
    {
      "Id": 37419,
      "Categories": ["Simulator", "Indie"],
      "Name": "Dude Simulator",
      "Summary": "Dude Simulator is an open world sandbox game. This is a life simulator. The main objective is to enjoy what you are doing.",
      "ReleaseDate": "2017-07-13T00:00:00",
      "Likes": 109,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co2azi.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/ms0ifstgtypntpv88nhl.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/iueydmfy98be1v4gqwsw.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/spmqg5uq29kweprslioc.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/ep9b22xhu0djr2ynm7v1.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/qkjaxblp61ondibkrnbz.jpg"
      ],
      "Price": 25
    },
    {
      "Id": 62,
      "Categories": ["Puzzle", "Adventure", "Point-and-click"],
      "Name": "The Curse of Monkey Island",
      "Summary": "Select from a variety of buccaneer hairstyles at The Barbery Coast. Enjoy a warm reunion with an old flame. Piracy never looked so good!\n\nLearn a valuable trade in lighthouse and VCR repair. Loot, sack and pillage this quaint Caribbean hamlet. Third in the legendary Monkey Island series of graphic adventures.\n\nFilm quality animation, voice, sound and music- the undead come to life before your very eyes! Incredible high-resolution (640 x 480) graphics. A barrel of gameplay- estimated 30-plus hours.\n\nTwo difficulty settings: regular and Mega-Monkey (now with much more puzzley goodness)!\n\nNew and improved insults suitable for swordfights and other fun occasions!",
      "ReleaseDate": "1997-10-31T00:00:00",
      "Likes": 104,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co30yu.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/opjukrjgd2n4ehomjych.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/xxh0htjjjot1l4bmqanx.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/otlhpoqqrjoqtx6kzxni.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/n6rk5ibs8oqgcwzusy6u.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/ck891dz3nm4qyxqlqfvo.jpg"
      ],
      "Price": 45
    },
    {
      "Id": 126459,
      "Categories": ["Shooter", "Tactical"],
      "Name": "VALORANT",
      "Summary": "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.",
      "ReleaseDate": "2020-06-02T00:00:00",
      "Likes": 103,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co2mvt.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc811g.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc811h.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc811i.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc811j.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc811k.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc811l.jpg"
      ],
      "Price": 35
    },
    {
      "Id": 320,
      "Categories": ["Shooter", "Role-playing (RPG)"],
      "Name": "S.T.A.L.K.E.R.: Shadow of Chernobyl",
      "Summary": "Year 2012. Six years passed since the time of the Second catastrophe to have made the April events of 1986 fade. \n \nThe game is set in the Chernobyl exclusion zone which turned from a destiny-breaker place into a threat to all mankind. The Zone is reluctant to open up its mysteries and needs to be forced to do it. It is a rare hero who can reach the very heart of the Zone onto find out what danger awaits him there. \n \nA danger which, compared to marauders and enemy groupings, all monsters and anomalies, will seem a mere preparation to the meeting with something more fatal and threatening. \n \nBut for now… get ready, hero. Collect artefacts and trade, grope your path and keep an eye on the rear, catch roentgens and fight – only make sure you survive! And then, perhaps, if you are persistent and truly lucky, you will find out why all this had fallen on you.",
      "ReleaseDate": "2007-03-20T00:00:00",
      "Likes": 102,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co1qsd.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/dxwv3fgqrkkksulhtpcy.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/oqqe0vnn0lrh7hsszhdi.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/wvjvc2q75u9zhm5a2i7w.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/gm727eqpkh0rpnolritn.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/opsyarjmwzogthmnmjep.jpg"
      ],
      "Price": 40
    },
    {
      "Id": 306,
      "Categories": ["Shooter"],
      "Name": "Far Cry",
      "Summary": "A tropical paradise seethes with hidden evil in Far Cry, a cunningly detailed action shooter that pushed the boundaries of combat to shocking new levels.Freelance mariner Jack Carver is cursing the day he ever came to this island. A week ago, a brash female reporter named Valerie had offered him an incredible sum of cash to take her to this unspoiled paradise. Shortly after docking, however, Jack's boat was greeted by artillery fire from a mysterious militia group swarming about the island.\n\nWith his boat destroyed, his money gone, and the gorgeous Valerie suddenly missing, Jack now finds himself facing an army of mercenaries amidst the wilds of the island, with nothing but a gun and his wits to survive. But the further he pushes into the lush jungle canopy, the stranger things become.\n\nJack encounters an insider within the militia group who reveals the horrific details of the mercenaries' true intentions. He presents Jack with an unsettling choice: battle the deadliest mercenaries, or condemn the human race to a maniac's insidious agenda.",
      "ReleaseDate": "2004-03-23T00:00:00",
      "Likes": 101,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co1vpf.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/aeilnx1m47iq2mk4oufi.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/btgngg5d7bynumjm9qgp.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/x5awfuommuruxjzwuivd.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/yx4dw3kjdktgf3goj7mq.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/og0e53fjmxdvqlmmhuoa.jpg"
      ],
      "Price": 40
    },
    {
      "Id": 277,
      "Categories": ["Shooter"],
      "Name": "Battlefield 2",
      "Summary": "In Battlefield 2, players will choose to fight for one of three military superpowers: the United States, the Chinese, or the newly formed Middle East Coalition. Armed with the latest modern weaponry, players can take control of any of the game’s 30+ vehicles to engage in major conflicts with over 64 players in some of the largest online battles on the PC. Additionally, persistent character growth allows players to rise through the ranks and attain the ultimate rank of General.",
      "ReleaseDate": "2005-06-21T00:00:00",
      "Likes": 98,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co2nal.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/s0moeyvaasjdhtzlzqjm.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/cgqoxefpdoljhk7etaqz.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/jfy3ju7dwgwjwjuyqs5b.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/gujamu6mgufkf8izkfpf.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/ub6bbsdznpv8rcmzlnmx.jpg"
      ],
      "Price": 35
    },
    {
      "Id": 1183,
      "Categories": ["Role-playing (RPG)"],
      "Name": "Guild Wars 2",
      "Summary": "Guild Wars 2 is an online role-playing game with fast-paced action combat, a rich and detailed universe of stories, awe-inspiring landscapes to explore, two challenging player vs. player modes, and no subscription fees!",
      "ReleaseDate": "2012-08-18T00:00:00",
      "Likes": 90,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co1tco.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/niey3bdkjn0kc2p2ngee.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/oilcswzusolurip4nski.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/p9grk8yasb87w7jdis10.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/zv5h9u0fzpszlxdt3ems.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/y89te8oduvhyznbyryec.jpg"
      ],
      "Price": 35
    },
    {
      "Id": 3154,
      "Categories": ["Real Time Strategy (RTS)", "Strategy"],
      "Name": "The Lord of the Rings: The Battle for Middle-earth",
      "Summary": "The players control the heroes or villians from the famous Lord of The Rings movies. With a hero characters similar to the Warcraft series you control both the armies and all the unique heroes. The game follows the movies very closely and even got scenes from the films appear in game. Not only does the game contain a giant campaign where you play through the journey of the ring as the good side, the game also features an evil campaign where as the players play as the evil forces of Middle Earth. With multiple diffrent races from all over Middle Earth, a giant spell tree to customize your game and a unique basebuilding layout the game was great for its time.",
      "ReleaseDate": "2004-12-06T00:00:00",
      "Likes": 81,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co20og.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/hjikqarxufbbtkprti0z.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/n3qiinvrkdjovleqpnlc.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/qhnxdbnqe3bsy6riniqb.jpg"
      ],
      "Price": 45
    },
    {
      "Id": 114,
      "Categories": ["Role-playing (RPG)"],
      "Name": "Star Wars: The Old Republic",
      "Summary": "Step in to the center of your own Star Wars story as you choose your path down the light or dark side of the Force. Your choices have impact not only on your story but on those who join you along the way. Each choice you make can change how your story unfolds including unexpected story twists or devastating consequences that impact you and your Companions. Play as one of 8 legendary Star Wars classes include Jedi, Sith, Smuggler, Trooper and more – this is your story and you decide how you want to build your reputation and influence across the galaxy as you join in epic adventures and challenging missions on the ground and in space!",
      "ReleaseDate": "2011-12-20T00:00:00",
      "Likes": 75,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co20xa.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/qszfk2cdyhbfnhy5hzsd.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/bduxxfzxucjagr6vloxx.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/bdax9vyqayhzjrnqjgbd.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/ft6gcdsmvqzzie7qksgk.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/i8nns71p2m4nzy6u0b26.jpg"
      ],
      "Price": 35
    },
    {
      "Id": 7631,
      "Categories": ["Shooter"],
      "Name": "OVERKILL's The Walking Dead",
      "Summary": "OVERKILL’s The Walking Dead is a four player co-op action FPS, where you and your friends fight the dead as well as the living. Set in The Walking Dead Universe, you and your group try to survive in a post-apocalyptic Washington D.C. \n \nEach character has their own Special Abilities, Skill Trees, Squad Roles, Play Styles and Story Arcs, but teamwork is paramount. The action is close-up and intense: take out enemies carefully with a silent melee attack or go in guns blazing with your choice of each class weapons. You need to be able to improvise as nothing is certain and a horde of walkers is always right around the corner.",
      "ReleaseDate": "2018-11-06T00:00:00",
      "Likes": 74,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co2qwx.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/emdwnfgz6iscygctnhf2.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/cmh6ckbgie7ovtlg3lyi.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/xobxia8ksryjuh6pgts4.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/g5ih7n7er3mocyq060mn.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/x3qalnwzswy77dildzga.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/rpnl5burrjcisghxl4pi.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/lvtkrnsoabdmcnyge4ux.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/vnhzry9z6sbpnhlgefj3.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/placwxjyus2tyonxkmrs.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/tig64i9jzrh4pvgyyjqr.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/uto6hrvabhatp52zplbr.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/juih0gk7tscprmexmaqo.jpg"
      ],
      "Price": 20
    },
    {
      "Id": 105233,
      "Categories": ["Indie"],
      "Name": "Rogue Heist",
      "Summary": "ROGUE HEIST is a 6v6 crew-based shooter where you fight against an opponent crew to set up ambush and steal as many packages as possible from a convoy. Choose and Customise your Crew. Choose your Role (Sniper/Spotter/Assault).",
      "ReleaseDate": "2019-08-21T00:00:00",
      "Likes": 73,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co1m01.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/hf3bmuiiodae3bvjmkuv.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/g24zzns0wmcqgidwteh0.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/fd6c4m7uwfndo78x5xkv.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/qzqzauior77suy5msgcd.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/tn6euz8ksf7h8ey3jbkz.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/pedivpmli6vgxhawujv3.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/iqhse52wmaren5nesoqi.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/w3xtjbp7w4dahrrrkndk.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/cezpjqagkmgla1oafdai.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/n5v7ibw2qei4lq3lzkjg.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/smiueyl9ftvr9jknn5w1.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/tzhemxcu9fkwrtkz1ik5.jpg"
      ],
      "Price": 35
    },
    {
      "Id": 9608,
      "Categories": [
        "Role-playing (RPG)",
        "Simulator",
        "Strategy",
        "Tactical",
        "Adventure"
      ],
      "Name": "Mount & Blade II: Bannerlord",
      "Summary": "Mount & Blade II: Bannerlord is the eagerly awaited sequel to the acclaimed medieval combat simulator and role-playing game Mount & Blade: Warband. Set 200 years before, it expands both the detailed fighting system and the world of Calradia. Bombard mountain fastnesses with siege engines, establish secret criminal empires in the back alleys of cities, or charge into the thick of chaotic battles in your quest for power.",
      "ReleaseDate": "2020-03-30T00:00:00",
      "Likes": 71,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co24f2.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/mrljrvakszpi2ah3t5tb.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/ozg4wanokhst4uehgkxs.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/dmb3xyx3elap1xnlbvr5.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/jzmucmrp4fkmy2u4oo5k.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/goubl2iemgs6zu0gowye.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/sc7n52.jpg"
      ],
      "Price": 40
    },
    {
      "Id": 1050,
      "Categories": ["Shooter", "Racing", "Tactical", "Adventure"],
      "Name": "Hitman: Codename 47",
      "Summary": "Hitman: Codename 47 sets a new standard for thinker-shooters. As Hitman you must use stealth, tactics and imagination to enter, execute and exit your assignment, getting minimum attention but maximum effect!\n\nYou have access to the most devious devices, but it will cost you – how you use them will determine if you retire as a millionaire, or get retired! Hitman is no ordinary hired killer – he’s a versatile forensic artist using stealth, disguise, intelligence, advanced weapons, poison and raw power to accomplish his kills. But he is also haunted by a troubling past of deception and brutal genetic engineering.\n\nThe intriguing story evolves over five chapters of riveting action. But the success of a contract killer depends just as much on a fast mind as a quick shot.",
      "ReleaseDate": "2000-11-19T00:00:00",
      "Likes": 70,
      "Cover": "http://images.igdb.com/igdb/image/upload/t_thumb/co4bkw.jpg",
      "Screenshots": [
        "http://images.igdb.com/igdb/image/upload/t_thumb/zzbrfkah42js8vxl8zsu.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/zkhp9zutkdiukanzjolm.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/cxqfxdnzs1uu1sl8r3kg.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/rvsh36gicejmqwj9jb84.jpg",
        "http://images.igdb.com/igdb/image/upload/t_thumb/pwmracoer3nfaavafzs2.jpg"
      ],
      "Price": 25
    }
  ]
