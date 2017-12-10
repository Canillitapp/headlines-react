# use curl to download a keystore from $KEY_URL, if set,
# to the path/filename set in $KEYSTORE.
KEYSTORE="/root/repo/android/app/${CANILLITA_RELEASE_STORE_FILE}"

if [[ $KEYSTORE && ${KEYSTORE} && $KEY_URL && ${KEY_URL} ]]
then
    echo "Keystore detected - downloading..."
    curl -L -o ${KEYSTORE} ${KEY_URL}
else
    echo "Keystore uri not set. '.APK' artifact will not be signed."
fi
