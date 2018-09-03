cd /Users/nattawutkongtan/Desktop/
zip -r -X /Users/nattawutkongtan/AppDemo_Backup/"AppDemo-$(date +"%Y-%m-%d %H-%M-%S").zip" AppDemo -x "*.git*" -x "*node_modules*"  -x "ios" -x "*__tests__*" -x "*build*" -x "*gradle*" -x "*Frameworks*" -x "*build*"


