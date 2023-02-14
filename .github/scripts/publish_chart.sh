#!/bin/bash

export PWD=$(pwd)

set -eu

# chartpress is used to publish the charts
pip install chartpress==0.6.*

# Get a private SSH key from the Github secrets. It will
# be used to establish an identity with rights to push to the git repository
echo "$CHART_DEPLOY_KEY" >$PWD/deploy_key
chmod 0400 $PWD/deploy_key

# Activate logging of bash commands now that the sensitive stuff is done
set -x

# As chartpress uses git to push to our Helm chart repository, we configure
# git ahead of time to use the identity we decrypted earlier.
git config --global user.email $GIT_EMAIL
git config --global user.name $GIT_USER
export GIT_SSH_COMMAND="ssh -i $PWD/deploy_key"

echo "Publishing chart via chartpress..."
cp .github/scripts/chartpress.yaml . # chartpress doesn't support custom path for config
chartpress --skip-build --publish-chart --tag "$VERSION"

# Let us log the changes chartpress did, it should include replacements for
# fields in values.yaml, such as what tag for various images we are using.
echo "Changes from chartpress:"
git --no-pager diff
