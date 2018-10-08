# use curl to download a keystore from $KEY_URL, if set,
# to the path/filename set in $KEYSTORE.
AUTH_JSON="/root/repo/scripts/gplay_key.json"
ARTIFACTS="/root/repo/android/app/build/outputs/apk/release"
if [[ $AUTH_JSON && ${AUTH_JSON} && $DEPLOY_URL && ${DEPLOY_URL} ]]
then
    curl -L -o ${AUTH_JSON} ${DEPLOY_URL}

    npm install playup
    node ./scripts/gplay-uploader.js "${ARTIFACTS}/app-armeabi-v7a-release.apk" "${ARTIFACTS}/app-x86-release.apk"
else
    echo "JSON uri not set. App will not be deployed."
fi
