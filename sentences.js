const sentences = ['kim nara sem', 'kim nara sup gest', 'kim nara sup pak', 'kim nara talm gest', 'kim nara talm pak', 'kim pomu sem', 'kim pomu sup gest', 'kim pomu sup pak', 'kim pomu talm gest', 'kim pomu talm pak', 'kim sem', 'kim nara kim', 'kim nara dul', 'kim nara rast', 'kim nara dok', 'kim pomu kim', 'kim pomu dul', 'kim pomu rast', 'kim pomu dok', 'kim gest sup', 'kim gest talm', 'kim pak sup', 'kim pak talm', 'dul nara sem', 'dul nara sup gest', 'dul nara sup pak', 'dul nara talm gest', 'dul nara talm pak', 'dul pomu sem', 'dul pomu sup gest', 'dul pomu sup pak', 'dul pomu talm gest', 'dul pomu talm pak', 'dul sem', 'dul nara kim', 'dul nara dul', 'dul nara rast', 'dul nara dok', 'dul pomu kim', 'dul pomu dul', 'dul pomu rast', 'dul pomu dok', 'dul gest sup', 'dul gest talm', 'dul pak sup', 'dul pak talm', 'rast nara sem', 'rast nara sup gest', 'rast nara sup pak', 'rast nara talm gest', 'rast nara talm pak', 'rast pomu sem', 'rast pomu sup gest', 'rast pomu sup pak', 'rast pomu talm gest', 'rast pomu talm pak', 'rast sem', 'rast nara kim', 'rast nara dul', 'rast nara rast', 'rast nara dok', 'rast pomu kim', 'rast pomu dul', 'rast pomu rast', 'rast pomu dok', 'rast gest sup', 'rast gest talm', 'rast pak sup', 'rast pak talm', 'dok nara sem', 'dok nara sup gest', 'dok nara sup pak', 'dok nara talm gest', 'dok nara talm pak', 'dok pomu sem', 'dok pomu sup gest', 'dok pomu sup pak', 'dok pomu talm gest', 'dok pomu talm pak', 'dok sem', 'dok nara kim', 'dok nara dul', 'dok nara rast', 'dok nara dok', 'dok pomu kim', 'dok pomu dul', 'dok pomu rast', 'dok pomu dok', 'dok gest sup', 'dok gest talm', 'dok pak sup', 'dok pak talm', 'sup eln', 'sup gok', 'talm eln', 'talm gok', 'fu kim nara sem', 'fu kim nara sup gest', 'fu kim nara sup pak', 'fu kim nara talm gest', 'fu kim nara talm pak', 'fu kim pomu sem', 'fu kim pomu sup gest', 'fu kim pomu sup pak', 'fu kim pomu talm gest', 'fu kim pomu talm pak', 'fu kim sem', 'fu kim nara kim', 'fu kim nara dul', 'fu kim nara rast', 'fu kim nara dok', 'fu kim pomu kim', 'fu kim pomu dul', 'fu kim pomu rast', 'fu kim pomu dok', 'fu kim gest sup', 'fu kim gest talm', 'fu kim pak sup', 'fu kim pak talm', 'fu dul nara sem', 'fu dul nara sup gest', 'fu dul nara sup pak', 'fu dul nara talm gest', 'fu dul nara talm pak', 'fu dul pomu sem', 'fu dul pomu sup gest', 'fu dul pomu sup pak', 'fu dul pomu talm gest', 'fu dul pomu talm pak', 'fu dul sem', 'fu dul nara kim', 'fu dul nara dul', 'fu dul nara rast', 'fu dul nara dok', 'fu dul pomu kim', 'fu dul pomu dul', 'fu dul pomu rast', 'fu dul pomu dok', 'fu dul gest sup', 'fu dul gest talm', 'fu dul pak sup', 'fu dul pak talm', 'fu rast nara sem', 'fu rast nara sup gest', 'fu rast nara sup pak', 'fu rast nara talm gest', 'fu rast nara talm pak', 'fu rast pomu sem', 'fu rast pomu sup gest', 'fu rast pomu sup pak', 'fu rast pomu talm gest', 'fu rast pomu talm pak', 'fu rast sem', 'fu rast nara kim', 'fu rast nara dul', 'fu rast nara rast', 'fu rast nara dok', 'fu rast pomu kim', 'fu rast pomu dul', 'fu rast pomu rast', 'fu rast pomu dok', 'fu rast gest sup', 'fu rast gest talm', 'fu rast pak sup', 'fu rast pak talm', 'fu dok nara sem', 'fu dok nara sup gest', 'fu dok nara sup pak', 'fu dok nara talm gest', 'fu dok nara talm pak', 'fu dok pomu sem', 'fu dok pomu sup gest', 'fu dok pomu sup pak', 'fu dok pomu talm gest', 'fu dok pomu talm pak', 'fu dok sem', 'fu dok nara kim', 'fu dok nara dul', 'fu dok nara rast', 'fu dok nara dok', 'fu dok pomu kim', 'fu dok pomu dul', 'fu dok pomu rast', 'fu dok pomu dok', 'fu dok gest sup', 'fu dok gest talm', 'fu dok pak sup', 'fu dok pak talm', 'fu sup eln', 'fu sup gok', 'fu talm eln', 'fu talm gok'];
const engSentences = ['i hate sleep', 'i hate food eat', 'i hate food want', 'i hate rock eat', 'i hate rock want', 'i love sleep', 'i love food eat', 'i love food want', 'i love rock eat', 'i love rock want', 'i sleep', 'i hate i', 'i hate you', 'i hate dog', 'i hate cat', 'i love i', 'i love you', 'i love dog', 'i love cat', 'i eat food', 'i eat rock', 'i want food', 'i want rock', 'you hate sleep', 'you hate food eat', 'you hate food want', 'you hate rock eat', 'you hate rock want', 'you love sleep', 'you love food eat', 'you love food want', 'you love rock eat', 'you love rock want', 'you sleep', 'you hate i', 'you hate you', 'you hate dog', 'you hate cat', 'you love i', 'you love you', 'you love dog', 'you love cat', 'you eat food', 'you eat rock', 'you want food', 'you want rock', 'dog hate sleep', 'dog hate food eat', 'dog hate food want', 'dog hate rock eat', 'dog hate rock want', 'dog love sleep', 'dog love food eat', 'dog love food want', 'dog love rock eat', 'dog love rock want', 'dog sleep', 'dog hate i', 'dog hate you', 'dog hate dog', 'dog hate cat', 'dog love i', 'dog love you', 'dog love dog', 'dog love cat', 'dog eat food', 'dog eat rock', 'dog want food', 'dog want rock', 'cat hate sleep', 'cat hate food eat', 'cat hate food want', 'cat hate rock eat', 'cat hate rock want', 'cat love sleep', 'cat love food eat', 'cat love food want', 'cat love rock eat', 'cat love rock want', 'cat sleep', 'cat hate i', 'cat hate you', 'cat hate dog', 'cat hate cat', 'cat love i', 'cat love you', 'cat love dog', 'cat love cat', 'cat eat food', 'cat eat rock', 'cat want food', 'cat want rock', 'food big', 'food smelly', 'rock big', 'rock smelly', 'not i hate sleep', 'not i hate food eat', 'not i hate food want', 'not i hate rock eat', 'not i hate rock want', 'not i love sleep', 'not i love food eat', 'not i love food want', 'not i love rock eat', 'not i love rock want', 'not i sleep', 'not i hate i', 'not i hate you', 'not i hate dog', 'not i hate cat', 'not i love i', 'not i love you', 'not i love dog', 'not i love cat', 'not i eat food', 'not i eat rock', 'not i want food', 'not i want rock', 'not you hate sleep', 'not you hate food eat', 'not you hate food want', 'not you hate rock eat', 'not you hate rock want', 'not you love sleep', 'not you love food eat', 'not you love food want', 'not you love rock eat', 'not you love rock want', 'not you sleep', 'not you hate i', 'not you hate you', 'not you hate dog', 'not you hate cat', 'not you love i', 'not you love you', 'not you love dog', 'not you love cat', 'not you eat food', 'not you eat rock', 'not you want food', 'not you want rock', 'not dog hate sleep', 'not dog hate food eat', 'not dog hate food want', 'not dog hate rock eat', 'not dog hate rock want', 'not dog love sleep', 'not dog love food eat', 'not dog love food want', 'not dog love rock eat', 'not dog love rock want', 'not dog sleep', 'not dog hate i', 'not dog hate you', 'not dog hate dog', 'not dog hate cat', 'not dog love i', 'not dog love you', 'not dog love dog', 'not dog love cat', 'not dog eat food', 'not dog eat rock', 'not dog want food', 'not dog want rock', 'not cat hate sleep', 'not cat hate food eat', 'not cat hate food want', 'not cat hate rock eat', 'not cat hate rock want', 'not cat love sleep', 'not cat love food eat', 'not cat love food want', 'not cat love rock eat', 'not cat love rock want', 'not cat sleep', 'not cat hate i', 'not cat hate you', 'not cat hate dog', 'not cat hate cat', 'not cat love i', 'not cat love you', 'not cat love dog', 'not cat love cat', 'not cat eat food', 'not cat eat rock', 'not cat want food', 'not cat want rock', 'not food big', 'not food smelly', 'not rock big', 'not rock smelly'];