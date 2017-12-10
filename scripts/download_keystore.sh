# use curl to download a keystore from $KEY_URL, if set,
# to the path/filename set in $KEYSTORE.
if [[ $KEYSTORE && ${KEYSTORE} && $KEY_URL && ${KEY_URL} ]]
then
    echo "Keystore detected - downloading..."
    # we're using curl instead of wget because it will not
    # expose the sensitive uri in the build logs:
    curl -L -o ${KEYSTORE} ${KEY_URL}
else
    echo "Keystore uri not set.  .APK artifact will not be signed."
fi
