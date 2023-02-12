export enum transactionStatuses {
  'pending' = 'pending',
  'signed' = 'signed',
  'failed' = 'failed',
  'cancelled' = 'cancelled',
}

export const smartContractCode =
  '0061736d01000000017c1460027f7f0060000060017f017f60027f7f017f60017f0060037f7f7f006000017f60037f7f7f017f60047f7f7f7f0060047f7f7f7f017f60027f7e0060017f017e60017e0060027f7f017e6000017e60057f7f7e7f7f017f60077f7e7f7f7f7f7f0060077e7f7f7f7f7f7f017f60057f7f7f7f7f0060037f7e7f0002a2072503656e7609626967496e74416464000503656e760d6d427566666572417070656e64000303656e760b7369676e616c4572726f72000003656e760a6d4275666665724e6577000603656e760d6d616e6167656443616c6c6572000403656e760a6765744761734c656674000e03656e76106d616e61676564534341646472657373000403656e7612626967496e7447657443616c6c56616c7565000403656e76126d427566666572476574417267756d656e74000303656e76126d427566666572417070656e644279746573000703656e76126d616e616765645369676e616c4572726f72000403656e761b736d616c6c496e74476574556e7369676e6564417267756d656e74000b03656e7619626967496e74476574556e7369676e6564417267756d656e74000003656e76106d4275666665724765744c656e677468000203656e760f6765744e756d417267756d656e7473000603656e7616736d616c6c496e7446696e697368556e7369676e6564000c03656e760d6d42756666657246696e697368000203656e76186d616e616765644765744f726967696e616c547848617368000403656e76176d427566666572546f426967496e74556e7369676e6564000303656e76146d427566666572436f707942797465536c696365000903656e76136d42756666657247657442797465536c696365000903656e760f6d4275666665725365744279746573000703656e76196d42756666657246726f6d426967496e74556e7369676e6564000303656e76126d42756666657253746f726167654c6f6164000303656e76136d42756666657253746f7261676553746f7265000303656e760e626967496e74536574496e743634000a03656e76106d616e616765644173796e6343616c6c000803656e760f6d616e6167656457726974654c6f67000003656e760e636865636b4e6f5061796d656e74000103656e76136765744e756d455344545472616e7366657273000603656e76136d616e616765644f776e657241646472657373000403656e76096d4275666665724571000303656e761b6d616e616765645472616e7366657256616c756545786563757465000f03656e76206d616e616765645570677261646546726f6d536f75726365436f6e7472616374001003656e761f6d616e616765644465706c6f7946726f6d536f75726365436f6e7472616374001103656e7614736d616c6c496e7446696e6973685369676e6564000c03656e76136d4275666665724e657746726f6d4279746573000303b801b60102060400020000000000000002001201000202020202060000080606020803000702070200090d0207040404010404040400000500020a02060309030d020000050502030005080800050304020b020202000004000a030300030505020303050202000503030200030003050300000a0000000300000000040005000000000813000400000506040602000606000405020502020101010101010101010101010101010102010101010101010101010101010101010705030100110619037f01418080c0000b7f0041c1d8c0000b7f0041d0d8c0000b07dd0421066d656d6f7279020004696e697400b901076465706f73697400ba010d64697363617264416374696f6e00bb010b646e73526567697374657200bc010d676574416374696f6e4461746100bd0112676574416374696f6e4c617374496e64657800be0114676574416374696f6e5369676e6572436f756e7400bf0110676574416374696f6e5369676e65727300c00119676574416374696f6e56616c69645369676e6572436f756e7400c10112676574416c6c426f6172644d656d6265727300c2010f676574416c6c50726f706f7365727300c301126765744e756d426f6172644d656d6265727300c4010f6765744e756d50726f706f7365727300c5011867657450656e64696e67416374696f6e46756c6c496e666f00c6010967657451756f72756d00c7010d706572666f726d416374696f6e00c8011570726f706f7365416464426f6172644d656d62657200ca011270726f706f736541646450726f706f73657200cb011070726f706f73654173796e6343616c6c00cc011370726f706f73654368616e676551756f72756d00cd011170726f706f736552656d6f76655573657200ce011970726f706f736553434465706c6f7946726f6d536f7572636500cf011a70726f706f736553435570677261646546726f6d536f7572636500d0011670726f706f73655472616e736665724578656375746500d1010d71756f72756d5265616368656400d201047369676e00d301067369676e656400d40106756e7369676e00d5010875736572526f6c6500d6010863616c6c4261636b00d7010a5f5f646174615f656e6403010b5f5f686561705f6261736503020ab57db6011401017f102622011027200120012000100020010b1b01017f41a08ac00041a08ac00028020041016b220036020020000b08002000420010190b940301027f230041206b2203240020011029210220002802002002102a024002400240024002400240024002400240024020002f010441016b0e080102030405060708000b41002002102b0c080b41012002102b2002200041086a280200102c0c070b41022002102b2002200041086a280200102c0c060b41032002102b2002200041086a280200102c0c050b41042002102b200041086a2802002002102a0c040b41052002102b200041086a2002102d0c030b41062002102b200041086a2002102d0c020b41072002102b200041086a2802002002102e20022000410c6a280200102c200041066a2f01002002102f200041106a200210300c010b41082002102b2002200041086a280200102c2000410c6a2802002002102e2002200041106a280200102c200041066a2f01002002102f200041146a200210300b200028021810312002102a20032000280218100d360218200341003602142003200041186a3602100340200341086a200341106a1032200328020804402002200328020c10011a0c010b0b20012002360200200341206a24000b1201017f10032201200028020010011a20010b4601017f230041106b2202240020022000410874418080fc077120004118747220004108764180fe03712000411876727236020c20012002410c6a4104106a200241106a24000b2601017f230041106b22022400200220003a000f20012002410f6a4101106a200241106a24000b09002000200110011a0b270020012000280200102c20002802042001102e20002802082001109b012000410c6a200110300b0b00200010622001109b010b3401017f230041106b220224002002200041087420004180fe0371410876723b010e20012002410e6a4102106a200241106a24000b5c01027f230041206b220224002000280200220310312001102a20022003100d36021820024100360214200220003602100340200241086a200241106a103220022802080440200228020c2001109b010c0105200241206a24000b0b0b09002000100d4102760b8b0101037f230041106b220324002001280204220241046a220420012802084b047f4100052003410036020c200128020028020020022003410c6a4104105f1a200328020c2102200120043602042002410874418080fc077120024118747220024108764180fe037120024118767272210241010b21012000200236020420002001360200200341106a24000b2e000240200120024d0440200220044d0d011034000b1034000b2000200220016b3602042000200120036a3602000b060010d901000b3401037f20011036210220011037210320011038210420002001103936020c2000200436020820002003360204200020023602000b08002000412010680b0f00200010381026220010121a20000b0a0020002000106710680b2a01027f200010672101103b2102037f2001047f200220001038103c200141016b21010c010520020b0b0b6301027f230041206b22012400103b210220012000280200100d3602182001410036021420012000360210037f200141086a200141106a10322001280208047f2001200128020c36021c20022001411c6a1029103c0c0105200141206a240020020b0b0b1401017f1026220041ec89c000410010151a20000b4701017f230041106b2202240020022001410874418080fc077120014118747220014108764180fe03712001411876727236020c20002002410c6a410410091a200241106a24000b0900200020011002000b6801027f103b2104105d21052000200236021c2000200336021820002005360214200020013602102000427f370300200041086a427f370300200041306a4100360200200041ec89c00036022c200041286a4100360200200041ec89c000360224200020043602200b0c01017f10262200100420000b0c01017f10262200100620000b0d0020001026220010081a20000b3001017f419980c0004117104322042000200110091a200441b080c000410310091a20042002200310091a2004100a000b1101017f102622022000200110151a20020b3901017f0240200128020041bcd8c0002802004e0440410121020c010b200141e386c000410c104521010b20002001360204200020023602000b3301017f2000280200220341bcd8c0002802004e04402001200241d880c00041111042000b2000200341016a360200200310410b3001017f103b21010340200028020041bcd8c0002802004e4504402001200041da86c00041091045103c0c010b0b20010b2501017e2000100b22034280808080105a04402001200241cd81c000410e1042000b2003a70b9e0102027f017e230041206b22012400200141086a2202200010411049200141003b011e0240200220012802142001411e6a4102104a4504402001411e6a4102104b2001280218200128021441026a470d0120012d0010044041a48ac000410036020041b8d8c00041003a00000b200141206a2400a741860a710f0b41ab87c000410d41db81c000410f1042000b41ab87c000410d41cd81c000410e1042000b2b01017f20002001100d22023602102000410036020c200041003a000820002002360204200020013602000bb70101037f230041106b22042400027f024020002d000845044020002802002206100d210541b8d8c0002d000020054190ce004b720d0141a48ac000200536020041b8d8c00041013a0000200441086a2005106d200641002004280208200428020c105f1a200041013a00080b4101200120036a220041a48ac0002802004b0d011a200420012000106e2002200320042802002004280204106c41000c010b200041003a00082006200120022003105f0b200441106a24000b3401017e02402001450d0003402001450d01200141016b210120003100002002420886842102200041016a21000c000b000b20020b0c00200010262200100c20000b2000200010412200100d41204704402001200241d882c00041101042000b20000b1a00200041bcd8c00028020048044041e980c00041121002000b0b1500100e20004604400f0b41fb80c00041191002000b1b00200041bcd8c0002802004c04400f0b41d880c00041111002000b0c0041bcd8c000100e3602000b090020001071ad100f0b4f01017f230041206b2201240020012000280200100d36021820014100360214200120003602100340200141086a200141106a103220012802080440200128020c10101a0c010b0b200141206a24000b820101037f230041106b220124002000280210410146044010262202101141c381c000410a10432203200210011a20011055200120012d00043a000c20012001280200360208200041146a200141086a22021056200041186a200210572003200128020820012d000c10580b200028020020002802042000280208200028020c101a000ba60101057f230041106b22022400200241086a2103230041106b22012400027f41b8d8c0002d00004504404101210441b8d8c00041013a000041a48ac0004100360200200141086a4100106d2001280208200128020c41ec89c0004100106c103b0c010b41ec89c000410010430b2105200320043a000420032005360200200141106a240020022802082101200020022d000c4101713a000420002001360200200241106a24000b5501027f230041106b2202240020022000280200100d22034118742003410874418080fc07717220034108764180fe03712003411876727236020c20012002410c6a4104109f012001200010a201200241106a24000b6601027f230041206b22022400200028020022031031200110a00120022003100d36021820024100360214200220003602100340200241086a200241106a1032200228020804402002200228020c36021c2002411c6a200110560c0105200241206a24000b0b0b0d00200020012002106f10181a0ba70702107f037e230041d0006b22042400200141306a280200210d200141286a280200210e20012802342105200128022c210f200128022421102001280220210a200128021c21072001280214210820012802102103200129030821122001290300211302400240024020012802182206105a0e020201000b103b210b103b210920042003360200103b1a200920041029103c2006105a2103103b22022003ad105b20092002103c2006100d2108200441086a21114100210303402008200341106a22024904402007105c45044020042007360200103b1a200920041029103c0b10402103105d2108419481c0004114104321072009200a105e210a200b21060c030520114200370300200442003703002006200320044110105f1a200441003602382004200441386a220c106021032004200c106121142004200441386a1060210520042003360200103b1a200920041029103c103b22032014105b20092003103c103b1a200920051062103c200221030c010b000b000b20042001413810da01220241406b220b42003703002002420037033820022802184100200241386a220c4110105f21062002410036024c200c200241cc006a220310602105200c200310612112200241386a200241cc006a10602103027e024002402006450440200220033602442002200536024020022012370338103b2106103b2205200b106302402012500440200520031064200228021c105c450d010c040b103b220b2012105b2005200b103c200520031064103b1a2005200241106a1029103c200228021c105c0d0220052002411c6a10630c020b20052002411c6a10630c020b200241306a280200210d200241286a280200210e20022802342105200228022c210f200228022421102002280220210a200228021c210720022802182106200228021421082002280210210320022903082112200229030021130c030b10402103105d210841a881c000410f1043210720022903080c010b105d210841b781c000410c104321072002280210210320022903080b21122002290300211320052002280220105e210a200241306a280200210d200241286a280200210e200228022c210f200228022421100b200120053602342001200d3602302001200f36022c2001200e360228200120103602242001200a3602202001200736021c2001200636021820012008360214200120033602102001201237030820012013370300200041003602102000200a36020c200020073602082000200836020420002003360200200441d0006a24000b09002000100d4104760b3501017f230041106b220224002002420037030820022001200241086a10a5012000200228020020022802041066200241106a24000b07002000100d450b0c01017f10262200102720000b0b002000200110011a20000b0f00200020012003200210144100470b7201017f230041106b220224002002410036020c2002200020012802002200200041046a2200106b2002410c6a410420022802002002280204106c20012000360200200228020c2100200241106a24002000410874418080fc077120004118747220004108764180fe0371200041187672720baf0102017e017f230041106b22032400200342003703082003200020012802002200200041086a2200106b200341086a410820032802002003280204106c2001200036020020032903082102200341106a2400200242288642808080808080c0ff00832002423886842002421886428080808080e03f8320024208864280808080f01f838484200242088842808080f80f832002421888428080fc07838420024228884280fe038320024238888484840b0f01017f10262201200010161a20010b0d00103b1a200020011029103c0b0d00103b1a200020011062103c0b2100200128021841ec89c000410010662001200236021420002001413810da011a0b0b0020002001200210151a0b3202017f017e230041106b220124002001410036020c20002001410c6a2200410410800120004104104b200141106a2400a70b3701027f200028020c210210032103200028020020022001200310134504402000200120026a36020c20030f0b41db81c000410f1069000b1b01017f41c282c0004116104322022000200110091a2002100a000b0b0020002001200210091a0b2f000240200220034d0440200341104b0d012000200320026b3602042000200120026a3602000f0b1034000b1034000b19002001200346044020002002200110da011a0f0b10d901000b3f01017f230041106b22022400200241086a41a88ac0004190ce00200110a401200228020c21012000200228020836020020002001360204200241106a24000b33000240200120024d044020024190ce004d0d011034000b1034000b2000200220016b3602042000200141a88ac0006a3602000b4a01017f230041106b22022400200220013a000c20022000360208200241086a1070200228020820022d000c044041a48ac000410036020041b8d8c00041003a00000b200241106a24000b5d01027f230041106b2201240020002d0004200041003a00044101710440200141086a410041a48ac000280200106e20002802002001280208200128020c10091a41a48ac000410036020041b8d8c00041003a00000b200141106a24000b2101017e2000107222014280808080105a044041cd81c000410e1069000b2001a70b6002027f017e230041106b2201240020014200370308200010742200100d220241094f044041cd81c000410e1069000b2001200141086a4108200210a401200041002001280200220020012802042202105f1a20002002104b200141106a24000b1c00200010742200100d412047044041d882c00041101069000b20000b0d0020001026220010171a20000b0d002000416710171a4167100d0b1b00200141ff017141027441e089c0006a2802002d0000200010770b0d0020012000ad42ff0183107a0b1200416c4100410010151a2000416c10181a0b090020002001ad107a0b3801017f230041106b220224002002420037030820022001200241086a10a501200020022802002002280204104310181a200241106a24000b0a0020002001107c10710b1a0020001029220041fc81c000410510091a20012000102a20000b0a0020002001107c10780b0b0020002001107c1075450bfa0301067f230041306b22032400024002402002450d00200141046a28020010712002490d00024020012002107c22021075450440410021020c010b200341086a220820021074104941002102200341003a00202008200341206a4101108001024002400240024002400240024002400240024020032d00200e09090102030405060708000b41f284c000410d1069000b200341086a10362104410121020c070b41022102200341086a103621040c060b41032102200341086a103621040c050b41042102200341086a106721040c040b200341206a200341086a1035200328022c2101200328022821052003280224210620032802202104410521020c030b200341206a200341086a1035200328022c2101200328022821052003280224210620032802202104410621020c020b41072102200341086a220510372104200510362106200510810121072005103921050c010b41082102200341086a220110362104200110372106200110362105200110810121072001103921010b20032802182003280214470d0220032d0010450d0041a48ac000410036020041b8d8c00041003a00000b200020073b0102200020023b0100200041106a20013602002000410c6a2005360200200041086a2006360200200041046a2004360200200341306a24000f0b41ea81c00041121002000b41cd81c000410e1069000b29002000200028020c20012002104a044041db81c000410f1069000b2000200028020c20026a36020c0b3602017f017e230041106b22012400200141003b010e20002001410e6a2200410210800120004102104b200141106a2400a741860a710b0b002000200110830110710b1a00200010292200418182c000410e10091a20002001102c20000b0e00200020011083012002ad107a0b0900200010860110710b1400200010292200418f82c000410610091a20000b0c0020001086012001ad107a0b0e0020002001108901200210181a0b1a00200010292200419582c000410e10091a20012000102a20000b0b002000200110890110730b4401017e2000107545044041000f0b02402000107222014280025404402001a7220041ff017141034f0d0120000f0b41cd81c000410e1069000b41f284c000410d1069000b0b0020002001108d0110780b1a0020001029220041a382c000410610091a20012000102a20000b3d01027f20002001108f01450440200041046a200041086a2802002202107141016a2203107c2001ad107a20022003107920002001200210711090010b0b0c00200020011091014100470b0e0020002001108d012002ad107a0b0b0020002001108d0110710b08002000200110630b2e01017f230041106b220224002002103b36020c20012002410c6a10292201102f20002001103c200241106a24000b1201017f103b22022001105b20002002103c0b1301017f103b22022001ad105b20002002103c0b5f01017f230041206b2202240020022001280200100d36021820024100360214200220013602100340200241086a200241106a1032200228020804402002200228020c36021c103b1a20002002411c6a1029103c0c010b0b200241206a24000b2701017f103b2202200141187441187541027441e089c0006a280200310000105b20002002103c0b1201017f103b2202200020011043103c20020b3e01017f2001280200220220012802044b047f4100052001200241016a36020020012802082002107b210141010b210220002001360204200020023602000b0b0020002001106f10101a0b5001027f230041106b2202240020022000100d22034118742003410874418080fc07717220034108764180fe03712003411876727236020c20012002410c6a4104106a20012000102c200241106a24000b2601017f230041106b2202240020022000106236020c2002410c6a20011056200241106a24000b0b002000ad42ff0183100f0b2701017f230041106b22022400200220003a000f20012002410f6a4101109f01200241106a24000b810101027f230041106b220324000240024020002d000404404190ce0041a48ac00028020022046b2002490d01200341086a2004200220046a220010aa012003280208200328020c20012002106c41a48ac00020003602000c020b20002802002001200210091a0c010b2000107020002802002001200210091a0b200341106a24000b4701017f230041106b2202240020022000410874418080fc077120004118747220004108764180fe03712000411876727236020c20012002410c6a4104109f01200241106a24000b25002001200010a20120002802042001109c01200041086a200110562000410c6a200110570bc80101047f230041106b2202240020002d00042103200041003a000402400240024020034101712203044020012802002201100d22054190ce0041a48ac00028020022046b4b0d02200241086a2004200420056a220410aa01200141002002280208200228020c105f1a41a48ac00020043602000c010b20002802002001280200102c0b200020033a00040c010b2000107020002802002001102c20002d0004200020033a0004410171450d0041a48ac000410036020041b8d8c00041003a00000b200241106a24000b3501017f230041106b220224002002200041087420004180fe0371410876723b010e20012002410e6a4102109f01200241106a24000b3b01017f230041106b22042400200441086a41002003200120021033200428020c21012000200428020836020020002001360204200441106a24000bc60101027f2002200142288642808080808080c0ff00832001423886842001421886428080808080e03f8320014208864280808080f01f838484200142088842808080f80f832001421888428080fc07838420014228884280fe038320014238888484843700000240200150044041ec89c00021040c010b03400240024020034108470440200220036a22042d0000450d02200341094f0d01410820036b21030c040b10d801000b10d801000b200341016a21030c000b000b20002003360204200020043602000b3c01027f230041106b220224002002200136020c2002410c6a1029220341e882c000410410091a2000200336020420002001360200200241106a24000bae0101037f230041206b22012400200041086a280200107121022001200041046a220336021820012002360214200141013602100340200141086a200141106a109901200128020804402000200128020c108c010c0105200041086a28020010712102200141003a0018200120023602142001410136021003402001200141106a10a8012001280200044020032001280204107c10780c010b0b200041086a28020041001079200141206a24000b0b0b5001037f024020012d00080d0020012802002203200128020422044b0d00200320044f044041012102200141013a00080c010b410121022001200341016a3602000b20002003360204200020023602000b5601037f230041106b2202240020022001360208200241086a102921032002200136020c2002410c6a1029220441e882c000410410091a200041086a20043602002000200136020420002003360200200241106a24000b4001017f230041106b22032400200341086a2001200241a88ac0004190ce001033200328020c21012000200328020836020020002001360204200341106a24000b0b00419a83c000410410430b3d01027f230041106b22012400200141086a419e83c000410b104310a601200128020c21022000200128020836020020002002360204200141106a24000b0b0041a983c000410d10430b1300200041b683c000410910432200102a20000b1800200141bf83c000411110432201102a2000200110a9010b0b0041d083c000411110430b0b0041e183c000410610430b3d01037f200110292102200128020410252103200141086a1029210420002001410c6a103a36020c2000200436020820002003360204200020023602000b3e01027f230041106b22012400103f2102200110ab0136020c20002001410c6a2002108201220210ae01108b013a000420002002360200200141106a24000b18002002450440200041013a00000b200110ae01410210760b890101037f230041306b2201240010b10110712102200141106a2203200010af01200141186a28020010712100200120034104723602282001200036022420014101360220410021000340200141086a200141206a10990120012802084101474504402000200128020c10ae01108b0141ff01714102466a21000c010b0b200141306a2400200020024f0bf50101037f230041106b2204240020042001360208200410ab0136020c2004410c6a200110820122034504402004410c6a2205200510850141016a22031087012005200120031084012005200320011088010b200310ae012201108b01210320012002107641f783c0004111109801220120001095012001200441086a106320012003109701200120021097012001103b101b200341ff01712200410247417f410020004102461b200241ff017122014102461b2202044010b00122032003107120026a10790b2000410147417f410020004101461b20014101461b2200044010ad0122012001107120006a10790b200441106a24000be40601077f230041e0006b22012400103f21032001419a83c00041041043360250200141d0006a2003108201220641b683c000410910432203102a2003108b01220741ff017141016b41014d0440200141406b419e83c000410b104310a60120012001280244220536024c20012001280240360248200141c8006a2005107141016a2204107c2103024002400240024002400240024002400240024020002f010041016b0e080102030405060708000b4100200310770c080b20011055200120012d00043a0054200120012802003602504101200141d0006a2202109e012002200041046a10a2012003200128025020012d005410580c070b200141086a1055200120012d000c3a0054200120012802083602504102200141d0006a2202109e012002200041046a10a2012003200128025020012d005410580c060b200141106a1055200120012d00143a0054200120012802103602504103200141d0006a2202109e012002200041046a10a2012003200128025020012d005410580c050b200141186a1055200120012d001c3a0054200120012802183602504104200141d0006a2202109e01200041046a280200200210a0012003200128025020012d005410580c040b200141206a1055200120012d00243a0054200120012802203602504105200141d0006a2202109e01200041046a200210a1012003200128025020012d005410580c030b200141286a1055200120012d002c3a0054200120012802283602504106200141d0006a2202109e01200041046a200210a1012003200128025020012d005410580c020b200141306a1055200120012d00343a0054200120012802303602504107200141d0006a2202109e01200041046a2802002002109c012002200041086a10a20120002f0102200210a3012000410c6a200210572003200128025020012d005410580c010b200141386a1055200120012d003c3a0054200120012802383602504108200141d0006a2202109e012002200041046a10a201200041086a2802002002109c0120022000410c6a10a20120002f0102200210a301200041106a200210572003200128025020012d005410580b20052004ad107a200741ff01714102460440200441bf83c000411110432200102a200141d0006a2203200010a90120032006108e010b200141e0006a240020040f0b41c887c000412c103d000ba90101037f230041206b22012400103b2103200110ab01360208200141086a1085012102200141003a00102001200236020c20014101360208200041ff01712100034002402001200141086a10a8012001280200450d002001280204220210ae01108b0141ff01712000470d01200110ab01360218200141186a200210890122021075450d0120012002107336021c103b1a20032001411c6a1029103c0c010b0b200141206a240020030bac0401057f230041406a22002400101c105141011050410041e183c00041061047210420004101360230200041306a2101103b21020340200128020041bcd8c0002802004804402002200141a185c00041051045103c0c010b0b2000280230104e20002002360218103b210120002002100d360238200041003602342000200041186a360230024002400240024003400240200041106a200041306a10322000280210450d002000200028021436021c2000411c6a10292102200041193602242000418080c0003602202000200236022c2000412c6a10292202100d4120470d0220012002103c0c010b0b2000200136022c200041003a001c200010ab013602202001100d2102200041206a1085012101200020023602382000410036023420002000412c6a36023003400240200041086a200041306a10322000280208450d00200041206a200028020c2202108201220304402000411c6a2003410010b40105200041206a22032002200141016a22011084012003200120021088012000411c6a2001410110b4010b0c010b0b200041206a200110870120002d001c0d0141d083c00041111043220120011071200028022c10316a220110792001410041a983c000410d104310716b460d0220012004490d0341e183c0004106104320041079200041406b24000f0b200041206a220028020020002802041043220041d882c000411010091a2000100a000b418b85c0004116103d000b41d388c000413e103d000b41a685c000411f103d000b06004100104f0be60101057f230041406a22002400101c4101104f4100418285c000410910472102200041186a10b301024020002d001c41016b41014d0440200041206a2203200210af01200041286a280200107121042000200341047236023820002004360234200041013602300340200041106a200041306a10990120002802104101470d022001200028021410ae01108b0141ff01714102466a21010c000b000b41f487c0004134103d000b2001044041a888c000412b103d000b200041086a10ac0120002000290308370330200041306a22012002107d2001200210af01200110a701200041406b24000bfe0101067f23004180016b220124000240101d45044010262200101e2000103f101f41004c0d014102104f4100418783c000410b104d2100200141011041360204027f41c0d8c0002d000022020440417541ffffffff0720021b0c010b41c0d8c00041013a00004175100741750b21042001200036027c200141406b2100200141046a2105200141fc006a22032802002102200341feffffff07360200200241feffffff0746044041a982c00041191002000b103b210320002002419283c000410810432003103e200028022020051063200141086a220120002004106520002001105920001054000b41b380c00041251002000b41ec89c00041241002000bee0501027f230041f0006b22002400101c4101104f4100418285c000410910472101200041c8006a10ac0120002000290348370368200041d0006a200041e8006a2001107f024002400240024002400240024002400240024020002f015041016b0e080102030405060708000b4100109d010c080b200041086a1055200020002d000c3a006c200020002802083602684101200041e8006a2201109e012001200041d0006a41047210a201200028026820002d006c109a010c070b200041106a1055200020002d00143a006c200020002802103602684102200041e8006a2201109e012001200041d0006a41047210a201200028026820002d006c109a010c060b200041186a1055200020002d001c3a006c200020002802183602684103200041e8006a2201109e012001200041d0006a41047210a201200028026820002d006c109a010c050b200041206a1055200020002d00243a006c200020002802203602684104200041e8006a2201109e012000280254200110a001200028026820002d006c109a010c040b200041286a1055200020002d002c3a006c200020002802283602684105200041e8006a2201109e01200041d0006a410472200110a101200028026820002d006c109a010c030b200041306a1055200020002d00343a006c200020002802303602684106200041e8006a2201109e01200041d0006a410472200110a101200028026820002d006c109a010c020b200041386a1055200020002d003c3a006c200020002802383602684107200041e8006a2201109e0120002802542001109c012001200041d8006a10a20120002f0152200110a301200041dc006a20011057200028026820002d006c109a010c010b200041406b1055200020002d00443a006c200020002802403602684108200041e8006a2201109e012001200041d0006a41047210a201200041d8006a2802002001109c012001200041dc006a10a20120002f0152200110a301200041e0006a20011057200028026820002d006c109a010b200041f0006a24000b2c01017f230041106b22002400101c4100104f200041086a10ac01200028020c1071ad100f200041106a24000b3701017f230041106b22002400101c4101104f20004100418285c0004109104710af01200041086a2802001071ad100f200041106a24000b8a0201047f230041406a22002400101c4101104f200041206a22034100418285c0004109104710af01103b2101200041286a280200107121022000200341047236023820002002360234200041013602300340200041106a200041306a10990120002802100440200028021421022000419a83c0004104104336023c20012000413c6a2002108a01103c0c010b0b2000200136021c200041086a1055200020002d000c3a00242000200028020836022020002001100d3602382000410036023420002000411c6a36023003402000200041306a1032200028020004402000200028020436023c200041206a2000413c6a10a2010c010b0b200028022020002d0024109a01200041406b24000b990101047f230041306b22002400101c4101104f200041106a22034100418285c0004109104710af01200041186a280200107121022000200341047236022820002002360224200041013602200340200041086a200041206a1099012000280208410147450440200028020c41b683c000410910432202102a20012002108b0141ff01714102466a21010c010b0b2001ad100f200041306a24000b2b01017f230041106b22002400101c4100104f2000410210b80136020c2000410c6a1053200041106a24000b2b01017f230041106b22002400101c4100104f2000410110b80136020c2000410c6a1053200041106a24000b1300101c4100104f41d083c0004111104310520b1300101c4100104f41a983c000410d104310520bb00301077f230041a0016b22002400101c4100104f103b2102200041286a10ac01200028022c10712101200041206a10ac0120002000290320370330200041003a00402000200136023c20004101360238200041e0006a410472210120004180016a410472210603400240200041186a200041386a10a8012000280218450d00200041c8006a200041306a200028021c2204107f20002f0148450d0120004180016a200410af01103b2105200028028801107121032000200636029801200020033602940120004101360290010340200041106a20004190016a1099012000280210044020002802142103200010ab0136029c0120052000419c016a2003108a01103c0c010b0b20012000290348370200200141086a200041d0006a290300370200200141106a200041d8006a28020036020020002004360260200020053602782000103b36029001200041e0006a20004190016a10282002200028029001103c0c010b0b2000200236024820002002100d360268200041003602642000200041c8006a3602600340200041086a200041e0006a103220002802080440200028020c10101a0c010b0b200041a0016a24000b1300101c4100104f41e183c0004106104310520b8e0c020b7f017e230041b0016b22002400101c4101104f4100418285c000410910472102103f2101200010ab01360278024002400240200041f8006a200110820110ae01108b0141ff017141016b41014d0440024002400240200210b5010440200041106a10ac0120002000290310370378200041186a200041f8006a2002107f4100210102400240024002400240024002400240024020002f011841016b0e080001020304050607080b41012101200041186a410472102921030c070b41022101200041186a410472102921030c060b41032101200041186a410472102921030c050b41042101200028021c21030c040b200041f8006a200041186a41047210b20120002802840121062000280280012104200028027c210520002802782103410521010c030b200041f8006a200041186a41047210b20120002802840121062000280280012104200028027c210520002802782103410621010c020b41072101200028021c10252103200041206a1029210520002f011a2108200041246a103a21040c010b41082101200041186a41047210292103200028022010252105200041246a1029210420002f011a2108200041286a103a21060b200041306a2207200210af01103b2109200041386a2802001071210a200020074104723602482000200a360244200041013602400340200041086a200041406b10990120002802080440200028020c2107200010ab013602782009200041f8006a2007108a01103c0c010b0b2000418c016a200636020020004188016a200436020020004184016a200536020020004180016a220420033602002000200936029001200020083b017e200020013b017c20002002360278418884c00041121098012000103b360240200041f8006a2201200041406b10282000280240101b200010ac012000200029030037037820012002107d2001200210af01200110a70102400240024002400240024020002f011841016b0e080705040300010802090b2004200041246a2902003703002000200029021c3703781005220b42e0a712580d0a41ad84c0004116109801220120021095012001200041f8006a10632001200028027c10642001200b42e0a7127d220b109401200120004180016a109201200120004184016a1096012001103b101b2000280278200028027c200b2000280280012000280284011020450d0841ec82c000411b1002000b200041386a2203200041246a2902003703002000200029021c3703301005210b2000280234210441e783c0004110109801220120021095012001200041306a10632001200410642001200b1094012001200310920120012000413c6a1096012001103b101b200041f8006a220220002802302003280200103b103e200041406b22012002200028023410652000200028023c36026020022001413810da011a20012002105920011054000b2000200028021c22053602302000280220210320002000280224220636024020002f011a2104200020002802283602781005210b41da84c0004118109801220120021095012001200041306a10632001200310642001200041406b1063200120041093012001200b1094012001200041f8006a1096012001103b101b200028027821022005200b20032006200410c9012002416710210c060b200028021c220110b00110714d044010b10120011079419a84c000411310980122032002109501200320011095012003103b101b0c060b0c090b2002200028021c410010b60110b00110712202410010ad0110716b460d0710b101107120024d0d040c080b2002200028021c410110b60110b101107110b00110714d0d030c070b41bf86c000411b103d000b2002200028021c410210b6010c010b200028021c210320002000280220220536024020002f011a2104200020002802243602781005210b41c384c0004117109801220120021095012001200310642001200041406b1063200120041093012001200b1094012001200041f8006a1096012001103b101b20002802782102200b20032005200410c901200210262202102610221a200210101a0b200041b0016a24000f0b418b86c0004134103d000b41f285c0004119103d000b41c585c000412d103d000b41a685c000411f103d000b3201017f230041106b220124002001200041087420004180fe0371410876723b010e2001410e6a41021024200141106a24000b4001027f230041206b22002400101c4101104f4100419787c0004114104d2101200041013b01082000200136020c200041086a10b701ad100f200041206a24000b4001027f230041206b22002400101c4101104f410041fd86c0004110104d2101200041023b01082000200136020c200041086a10b701ad100f200041206a24000ba60101067f230041306b22002400101c105141021050410041ef86c0004102104d21024101104c210320004102360214200041086a200041146a1044200028020c2101200028020820002000280214360218200041186a104621052000280218104e0440103b21010b200041286a2005360200200041246a2001360200200041206a20033602002000200236021c200041063b0118200041186a10b701ad100f200041306a24000b4001027f230041206b22002400101c4101104f4100418d87c000410a10472101200041043b01082000200136020c200041086a10b701ad100f200041206a24000b4001027f230041206b22002400101c4101104f410041f186c000410c104d2101200041033b01082000200136020c200041086a10b701ad100f200041206a24000b7f01067f230041206b22002400101c1051410310504100104c2101410141b887c0004106104d210241021048210320004103360208200041086a2204104621052000280208104e200041106a2002360200200041146a20053602002000200136020c200020033b010a200041073b0108200410b701ad100f200041206a24000b8d0101077f230041206b22002400101c105141041050410041be87c000410a104d21014101104c2102410241b887c0004106104d210341031048210420004104360208200041086a2205104621062000280208104e20002003360214200020023602102000200136020c20002006360218200020043b010a200041083b0108200510b701ad100f200041206a24000ba60101067f230041306b22002400101c105141021050410041ef86c0004102104d21024101104c210320004102360214200041086a200041146a1044200028020c2101200028020820002000280214360218200041186a104621052000280218104e0440103b21010b200041286a2005360200200041246a2001360200200041206a20033602002000200236021c200041053b0118200041186a10b701ad100f200041306a24000b1900101c4101104f4100418285c0004109104710b501ad10230b9e0101047f230041206b22002400101c4101104f4100418285c000410910472101200041086a10ac01200020002903083703100240200041106a2001107e450440200010b30120002d00044102470d0120002802002103200041106a2202200110af0120022003108f01450440200041106a2202200110af0120022003108e010b200041206a24000f0b419189c0004115103d000b41a689c000411b103d000b5c01037f230041106b22002400101c4102104f4100419a83c0004104104d21014101418285c000410910472102200010ab01360200200020011082012201047e2000200210af0120002001108f01ad0542000b1023200041106a24000ba50201087f230041206b22002400101c4101104f4100418285c000410910472101200041086a10ac01200020002903083703100240024002400240200041106a2001107e450440200010b30120002d00044102470d0120002802002105200041106a2202200110af01200220051091012202450d03200041186a2802002203107122012002490d04200041106a4104722104200120024622070d02200310712001490d0420042001107b2106200310712002490d0420042002107c2006ad107a0c020b419189c0004115103d000b41c189c000411e103d000b2003107120014904400c020b20042001107c10782003200141016b10792007450440200041106a200620021090010b200041106a2005108c010b200041206a24000f0b41ea81c00041121002000b6201027f230041106b22002400101c4101104f4100419a83c0004104104d2101200010ab0136020c2000410c6a20011082012201047f200110ae01108b0141ff017141027441e089c0006a28020005418185c0000b2d0000109d01200041106a24000b0300010b0c0041908ac000410e1002000b060010d801000bb80201077f024020022204410f4d0440200021020c010b2000410020006b41037122036a21052003044020002102200121060340200220062d00003a0000200641016a2106200241016a22022005490d000b0b2005200420036b2208417c7122076a21020240200120036a22034103710440200741004c0d012003410374220441187121092003417c71220641046a2101410020046b4118712104200628020021060340200520062009762001280200220620047472360200200141046a2101200541046a22052002490d000b0c010b200741004c0d0020032101034020052001280200360200200141046a2101200541046a22052002490d000b0b20084103712104200320076a21010b20040440200220046a21030340200220012d00003a0000200141016a2101200241016a22022003490d000b0b20000b0bb40a0200418080c0000b9e0a73657269616c697a6572206465636f6465206572726f723a20617267756d656e74206465636f6465206572726f722028293a2066756e6374696f6e20646f6573206e6f74206163636570742045534454207061796d656e74746f6f2066657720617267756d656e7473746f6f206d616e7920617267756d656e747377726f6e67206e756d626572206f6620617267756d656e74734d756c7469455344544e46545472616e73666572455344544e46545472616e73666572455344545472616e7366657243425f434c4f53555245696e70757420746f6f206c6f6e67696e70757420746f6f2073686f7274696e646578206f7574206f662072616e67652e6974656d5f616464726573735f746f5f69645f636f756e745f69645f746f5f616464726573732e696e646578726563697069656e742061646472657373206e6f742073657473746f72616765206465636f6465206572726f723a20626164206172726179206c656e6774682e6c656e7472616e7366657256616c756545786563757465206661696c6564646e735f61646472657373726567697374657275736572616374696f6e5f646174616e756d5f70726f706f73657273757365725f726f6c65616374696f6e5f7369676e65725f6964736e756d5f626f6172645f6d656d6265727371756f72756d706572666f726d4173796e6343616c6c706572666f726d4368616e6765557365727374617274506572666f726d416374696f6e706572666f726d4368616e676551756f72756d706572666f726d5472616e7366657245786563757465706572666f726d4465706c6f7946726f6d536f75726365706572666f726d5570677261646546726f6d536f75726365696e76616c69642076616c7565020100616374696f6e5f69646475706c696361746520626f617264206d656d626572626f61726471756f72756d2063616e6e6f742065786365656420626f6172642073697a6563616e6e6f742072656d6f766520616c6c20626f617264206d656d6265727320616e642070726f706f73657273696e73756666696369656e742067617320666f722063616c6c6f6e6c7920626f617264206d656d6265727320616e642070726f706f736572732063616e20706572666f726d20616374696f6e7371756f72756d20686173206e6f74206265656e2072656163686564617267756d656e74736f70745f66756e6374696f6e746f757365725f6164647265737370726f706f7365725f616464726573736e65775f71756f72756d626f6172645f6d656d6265725f61646472657373636f64655f6d65746164617461736f7572636573635f616464726573736f6e6c7920626f617264206d656d6265727320616e642070726f706f736572732063616e2070726f706f73656f6e6c7920626f617264206d656d6265727320616e642070726f706f736572732063616e206469736361726420616374696f6e7363616e6e6f74206469736361726420616374696f6e20776974682076616c6964207369676e617475726573626f6172642063616e6e6f7420626520656d707479206f6e20696e69742c206e6f2d6f6e6520776f756c642062652061626c6520746f2070726f706f7365616374696f6e20646f6573206e6f742065786973746f6e6c7920626f617264206d656d626572732063616e207369676e6f6e6c7920626f617264206d656d626572732063616e20756e2d7369676e0081021000800210007f021000456e64706f696e742063616e206f6e6c792062652063616c6c6564206279206f776e657270616e6963206f636375727265640041a08ac0000b049cffffff';

export const verifiedContractsHashes = [
  'wn1ekMME1HiG2upX3AUnP+78TuOBTImXUtN3Z2975DM=',
  'OFuNGNyeOfaCy5JAdyEmF5/6YMWjFpkUk/Ak4KcDRb8=',
  '9938dFP1KrCWzNsXrzWlEPCWjfaLJt+r35npJ3T2UtA=',
  'RZhlunPxgV9gsszLUwI2kySzjp4ROZ/CwWDLW1h/AcI=',
];

export const toastDisappearDelay = 15_000;
