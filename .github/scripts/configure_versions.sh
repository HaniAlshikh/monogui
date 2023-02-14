#!/bin/bash

set -e

if [[ "$GITHUB_REF" =~ refs/tags ]]; then
    VERSION=${GITHUB_REF##*/}
elif [ ! -z "$GITHUB_RUN_ID" ]; then
    VERSION="0.0.0-$(echo $GITHUB_SHA | cut -c 1-6)"
else
    VERSION="local-$(git rev-parse HEAD)"
fi

echo $VERSION
