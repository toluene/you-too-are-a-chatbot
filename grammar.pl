% find all with findall(Y,string(Y), List) ; true. and pressing w in swipl.
string(Y) :- s(X, []), atomic_list_concat(X, ' ', Y).

s --> animate, animVP.
s --> inanimate, inanimVP.
s --> not, animate, animVP.
s --> not, inanimate, inanimVP.

not --> [fu].

animate --> [kim].
animate --> [dul].
animate --> [rast].
animate --> [dok].

complexV --> [nara].
complexV --> [pomu].

infP --> animI.
infP --> inanimate, animTinanim.

animI --> [sem].

animVP --> complexV, infP.
animVP --> animI.
animVP --> animTanim, animate.
animVP --> animTinanim, inanimate.

animTanim --> complexV.

animTinanim --> [gest].
animTinanim --> [pak].

inanimate --> [sup].
inanimate --> [talm].

inanimVP --> inanimI.

inanimI --> [eln].
inanimI --> [gok].