% find all with findall(Y,string(Y), List) ; true. and pressing w in swipl.
string(Y) :- s(X, []), atomic_list_concat(X, ' ', Y).

s --> animate, animVP.
s --> inanimate, inanimVP.
s --> not, animate, animVP.
s --> not, inanimate, inanimVP.

not --> [not].

animate --> [i].
animate --> [you].
animate --> [dog].
animate --> [cat].

complexV --> [hate].
complexV --> [love].

infP --> animI.
infP --> inanimate, animTinanim.

animI --> [sleep].

animVP --> complexV, infP.
animVP --> animI.
animVP --> animTanim, animate.
animVP --> animTinanim, inanimate.

animTanim --> complexV.

animTinanim --> [eat].
animTinanim --> [want].

inanimate --> [food].
inanimate --> [rock].

inanimVP --> inanimI.

inanimI --> [big].
inanimI --> [smelly].