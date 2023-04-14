% find all with findall(Y,string(Y), List) ; true. and pressing w in swipl.

main :- findall(Y,string(Y), List),
		write("sentences = "),
		print(List),
		writeln(";"),
		halt.
		
string(Y) :- s(X, []), atomic_list_concat(X, ' ', Y).

s --> animate, animVP.
s --> inanimate, inanimVP.
s --> [pu], animate, animVP.
s --> [mi], inanimate, inanimVP.
s --> [mi], animate, animI.

animate --> [gim].
animate --> [set].
animate --> [gest].
animate --> [nol].

complexV --> [peli].
complexV --> [nari].

infP --> animI.
infP --> inanimate, animTinanim.

animI --> [irim].
animI --> [erim].
animI --> [yril].

animVP --> complexV, infP.
animVP --> animI.
animVP --> animTanim, animate.
animVP --> animTinanim, inanimate.

animTanim --> complexV.

animTinanim --> [nara].
animTinanim --> [poro].
animTinanim --> [yro].

inanimate --> [sep].
inanimate --> [gal].
inanimate --> [dok].
inanimate --> [talm].

inanimVP --> inanimI.

inanimI --> [eln].
inanimI --> [kaln].
inanimI --> [yln].
inanimI --> [giln].